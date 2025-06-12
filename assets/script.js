/**
 * ===================================================================
 * SCRIPT.JS - WEBSITE PKC PMII BALI NUSRA (VERSI DIPERBAIKI)
 * ===================================================================
 * Deskripsi:
 * Versi ini lebih aman dan tahan eror. Menambahkan pemeriksaan (null-check)
 * untuk setiap elemen sebelum digunakan, memastikan preloader selalu
 * hilang setelah 3 detik meskipun beberapa elemen tidak ada di halaman.
 *
 * @version 3.1.0
 * @date 12 Juni 2025
 * ===================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

    const App = {
        // --- 1. STATE & ELEMENTS ---
        state: {
            data: {
                releases: [],
                team: [],
                documents: [],
                studies: [],
                formData: {}
            }
        },
        elements: {
            preloader: document.getElementById('preloader'),
            mobileMenu: document.getElementById('mobile-menu'),
            modal: document.getElementById('form-modal'),
            modalMessage: document.getElementById('modal-message'),
            popularReleaseContainer: document.getElementById('rilis-populer-container'),
            latestReleaseContainer: document.getElementById('rilis-terbaru-container'),
            releasePageContainer: document.getElementById('release-page-container'),
            teamPageContainer: document.getElementById('team-page-container'),
            docListContainer: document.getElementById('documentation-list'),
            studyListContainer: document.getElementById('strategic-study-list'),
            releaseDetail: {
                title: document.getElementById('release-detail-title'),
                meta: document.getElementById('release-detail-meta'),
                img: document.getElementById('release-detail-img'),
                body: document.getElementById('release-detail-body'),
                shareWhatsapp: document.getElementById('share-whatsapp'),
                submitArticleBtn: document.getElementById('submit-article-btn'),
                relatedPopular: document.getElementById('related-popular-list'),
                relatedRecent: document.getElementById('related-recent-list')
            },
            ktaForm: {
                form: document.getElementById('kta-form'),
                fileInput: document.getElementById('sertifikat_mapaba_form'),
                fileChosen: document.getElementById('file-chosen')
            }
        },

        // --- 2. INITIALIZATION ---
        init() {
            if (this.elements.preloader) {
                this.elements.preloader.style.display = 'flex';
            }

            // Atur waktu tunggu preloader. Fungsi `run` akan dijalankan setelah 3 detik.
            setTimeout(() => {
                try {
                    this.run();
                } catch (error) {
                    console.error("Terjadi kesalahan saat menjalankan aplikasi:", error);
                    // Jika ada eror, kita tetap paksa preloader untuk hilang
                    if (this.elements.preloader) {
                        this.elements.preloader.style.display = 'none';
                    }
                    // Tampilkan pesan eror di halaman
                    document.body.innerHTML = `<div style="text-align: center; padding: 50px; font-family: sans-serif;"><h1>Oops! Terjadi Kesalahan</h1><p>Silakan cek konsol browser (F12) untuk detail teknis.</p></div>`;
                }
            }, 3000); // <-- DURASI PRELOADER: 3000ms = 3 DETIK
        },
        
        // Fungsi yang berjalan setelah preloader
        run() {
            this.data.load();
            this.events.bind();
            
            const pageId = document.body.id;
            this.renderPageContent(pageId);

            this.animations.setupScrollAnimations();
            this.ui.updateActiveLink();
            
            // Sembunyikan preloader setelah semua selesai
            if (this.elements.preloader) {
                this.elements.preloader.style.display = 'none';
            }
        },

        // --- 3. DATA HANDLING ---
        data: {
            load() {
                const today = new Date();
                // Pemeriksaan untuk memastikan 'releasesData' ada dari data.js
                if (typeof releasesData !== 'undefined') {
                    App.state.data.releases = releasesData.map((item, index) => {
                        const date = new Date(today);
                        date.setDate(today.getDate() - index);
                        return { ...item, date, views: Math.floor(Math.random() * 8000) + 500, slug: App.utils.createSlug(item.title) };
                    });
                }
                // Memuat data lain dengan aman
                App.state.data.team = typeof teamData !== 'undefined' ? teamData : [];
                App.state.data.documents = typeof documentsData !== 'undefined' ? documentsData : [];
                App.state.data.studies = typeof studiesData !== 'undefined' ? studiesData : [];
                App.state.data.formData = typeof formData !== 'undefined' ? formData : {};
            },
            getReleaseBySlug(slug) {
                return App.state.data.releases.find(r => r.slug === slug);
            },
            getSortedReleases(sortBy, excludeSlug = null, limit = null) {
                let sorted = [...App.state.data.releases].sort((a, b) => (sortBy === 'views' ? b.views - a.views : b.date - a.date));
                if (excludeSlug) sorted = sorted.filter(r => r.slug !== excludeSlug);
                return limit ? sorted.slice(0, limit) : sorted;
            }
        },

        // --- 4. EVENT HANDLING ---
        events: {
            bind() {
                const mobileMenuButton = document.getElementById('mobile-menu-button');
                if (mobileMenuButton) {
                    mobileMenuButton.addEventListener('click', () => {
                        App.elements.mobileMenu?.classList.toggle('hidden');
                    });
                }
                if (App.elements.ktaForm.form) {
                    App.elements.ktaForm.form.addEventListener('submit', this.handleFormSubmit);
                }
                if (App.elements.ktaForm.fileInput) {
                    App.elements.ktaForm.fileInput.addEventListener('change', () => {
                        if (App.elements.ktaForm.fileChosen) {
                             App.elements.ktaForm.fileChosen.textContent = App.elements.ktaForm.fileInput.files[0] ? App.elements.ktaForm.fileInput.files[0].name : '';
                        }
                    });
                }
                if (App.elements.modal) {
                    App.elements.modal.addEventListener('click', (e) => {
                        if (e.target.id === 'form-modal' || e.target.id === 'modal-close-btn') {
                            App.ui.hideModal();
                        }
                    });
                }
            },
            handleFormSubmit(e) {
                e.preventDefault();
                const form = App.elements.ktaForm.form;
                let isFormValid = true;
                form.querySelectorAll('[required]').forEach(input => {
                    if (!input.value.trim()) {
                        isFormValid = false;
                        input.classList.add('border-red-500');
                    } else {
                        input.classList.remove('border-red-500');
                    }
                });
                if (isFormValid) {
                    App.ui.showModal('Formulir berhasil dikirim. Silakan tunggu balasan di email Anda.');
                    form.reset();
                    if(App.elements.ktaForm.fileChosen) App.elements.ktaForm.fileChosen.textContent = '';
                } else {
                    App.ui.showModal('Harap lengkapi semua kolom formulir yang wajib diisi.');
                }
            }
        },

        // --- 5. DYNAMIC RENDERING ---
        renderPageContent(pageId) {
             switch (pageId) {
                case 'home-page':
                    this.render.homePage();
                    break;
                case 'release-list-page':
                    this.render.releaseListPage();
                    break;
                case 'release-detail-page':
                    const slug = this.utils.getSlugFromURL();
                    if (slug) this.render.releaseDetail(slug);
                    else this.render.errorPage('Rilis tidak ditemukan.', 'URL tidak valid atau parameter tidak ada.');
                    break;
                case 'team-page':
                    this.render.teamPage();
                    break;
                case 'database-page':
                    this.render.ktaForm();
                    break;
                case 'documentation-page':
                    this.render.documentationPage();
                    break;
                case 'strategic-study-page':
                    this.render.strategicStudyPage();
                    break;
            }
        },
        render: {
            homePage() {
                const popular = App.data.getSortedReleases('views', null, 6);
                const latest = App.data.getSortedReleases('date', null, 6);
                if (App.elements.popularReleaseContainer) {
                    const popularHtml = popular.map((item, i) => this.getReleaseCardHTML(item, i, '')).join('');
                    App.elements.popularReleaseContainer.innerHTML = popularHtml + popularHtml;
                }
                if (App.elements.latestReleaseContainer) {
                    App.elements.latestReleaseContainer.innerHTML = latest.map((item, i) => this.getReleaseCardHTML(item, i, 'fade-in-bottom')).join('');
                }
            },
            releaseListPage() {
                if (App.elements.releasePageContainer) {
                    const allReleases = App.data.getSortedReleases('date');
                    App.elements.releasePageContainer.innerHTML = allReleases.map((item, i) => this.getReleaseCardHTML(item, i, 'fade-in-bottom')).join('');
                }
            },
            teamPage() {
                if (App.elements.teamPageContainer) {
                    App.elements.teamPageContainer.innerHTML = App.state.data.team.map((member, i) => `
                        <div class="group animate-on-scroll fade-in-bottom card-zoom" data-delay="${i * 50}">
                            <div class="relative w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden mx-auto shadow-lg skeleton">
                                <img src="${member.img}" alt="Foto ${member.name}" class="absolute w-full h-full object-cover object-center opacity-0 transition-opacity duration-500 group-hover:scale-105" onerror="this.onerror=null;this.src='https://placehold.co/400x400/e2e8f0/cccccc?text=Foto';" onload="this.style.opacity=1; this.parentElement.classList.remove('skeleton');">
                                <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                                    <h3 class="font-bold text-base">${member.name}</h3>
                                    <p class="text-sm opacity-90">${member.position}</p>
                                </div>
                            </div>
                        </div>
                    `).join('');
                }
            },
            documentationPage() {
                if (App.elements.docListContainer) {
                    const docLink = "https://drive.google.com/file/d/13grSe-WlOemxHtpSlcf8Pyg4Ghlx_2pV/view?usp=drivesdk";
                    App.elements.docListContainer.innerHTML = App.state.data.documents.map(item => `
                        <a href="${docLink}" target="_blank" rel="noopener noreferrer" class="document-list-item block p-4 hover:bg-gray-50 transition-colors">${item}</a>
                    `).join('');
                }
            },
            strategicStudyPage() {
                if (App.elements.studyListContainer) {
                    const docLink = "https://drive.google.com/file/d/13grSe-WlOemxHtpSlcf8Pyg4Ghlx_2pV/view?usp=drivesdk";
                    App.elements.studyListContainer.innerHTML = App.state.data.studies.map(item => `
                        <a href="${docLink}" target="_blank" rel="noopener noreferrer" class="document-list-item block p-4 hover:bg-gray-50 transition-colors">${item}</a>
                    `).join('');
                }
            },
            ktaForm() {
                const { formData } = App.state.data;
                if(formData.fakultas) { // Check if formData is loaded
                    const populate = (id, data) => {
                        const select = document.getElementById(id);
                        if (select) select.innerHTML = '<option value="" selected disabled>Pilih...</option>' + data.map(item => `<option value="${item}">${item}</option>`).join('');
                    };
                    populate('fakultas_rayon_form', formData.fakultas);
                    populate('kampus_komisariat_form', formData.kampus);
                    populate('kab_kota_cabang_form', formData.kabKota);
                }
            },
            releaseDetail(slug) {
                const release = App.data.getReleaseBySlug(slug);
                if (!release) {
                    this.errorPage('Rilis Tidak Ditemukan', 'Artikel yang Anda cari tidak ada atau telah dihapus.');
                    return;
                }
                
                const { title, meta, img, body, shareWhatsapp, submitArticleBtn, relatedPopular, relatedRecent } = App.elements.releaseDetail;

                if (title) title.textContent = release.title;
                if (document.title) document.title = `${release.title} - PKC PMII Bali Nusra`;
                if (img) {
                    img.src = release.img;
                    img.alt = release.alt;
                    img.style.opacity = 0;
                }
                if (meta) meta.innerHTML = this.getReleaseMetaHTML(release);
                if (body) body.innerHTML = release.content;

                const pageUrl = window.location.href;
                const shareText = encodeURIComponent(`*${release.title}*\n\nBaca selengkapnya di sini:\n`);
                if (shareWhatsapp) shareWhatsapp.href = `https://api.whatsapp.com/send?text=${shareText}${encodeURIComponent(pageUrl)}`;
                
                const waMessage = encodeURIComponent("Assalamu'alaikum, Sahabat. Saya ingin mengirimkan tulisan untuk dapat dipublikasikan di website. Mohon atensinya. Terima kasih.");
                if (submitArticleBtn) submitArticleBtn.href = `https://wa.me/6287859245125?text=${waMessage}`;

                if(relatedPopular) relatedPopular.innerHTML = App.data.getSortedReleases('views', slug, 4).map(r => this.getRelatedLinkHTML(r)).join('');
                if(relatedRecent) relatedRecent.innerHTML = App.data.getSortedReleases('date', slug, 4).map(r => this.getRelatedLinkHTML(r)).join('');
            },
            errorPage(title, message) {
                const mainContent = document.querySelector('main');
                if (mainContent) {
                    mainContent.innerHTML = `<div class="container mx-auto px-6 py-20 text-center"><h1 class="font-title text-2xl text-red-500">${title}</h1><p class="mt-2 text-gray-600">${message}</p><a href="release.html" class="mt-6 inline-block bg-[#0973D6] text-white font-bold py-2 px-6 rounded-lg hover:opacity-90">Kembali ke Daftar Rilis</a></div>`;
                }
            },
            getReleaseCardHTML(item, index, animationClass) {
                return `<a href="release-detail.html?slug=${item.slug}" class="release-card card-zoom bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group w-full border border-gray-200 hover:shadow-xl transition-shadow duration-300 animate-on-scroll ${animationClass}" data-delay="${index * 150}">
                    <div class="relative overflow-hidden h-40 skeleton"><img src="${item.img}" alt="${item.alt}" class="absolute w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:scale-105" onload="this.style.opacity = 1; this.parentElement.classList.remove('skeleton');"></div>
                    <div class="p-4 flex flex-col flex-grow"><h3 class="font-title flex-grow min-h-[54px] text-gray-800 leading-tight">${item.title}</h3><div class="mt-3 flex items-center justify-between font-subtitle text-gray-500">${this.getReleaseMetaHTML(item)}</div></div>
                </a>`;
            },
            getReleaseMetaHTML(item) {
                const options = { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Makassar' };
                const formattedDate = item.date.toLocaleDateString('id-ID', options);
                const formattedViews = item.views > 1000 ? `${(item.views / 1000).toFixed(1)}k` : item.views;
                return `<div class="flex items-center space-x-1.5"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg><span>${formattedDate}</span></div><div class="flex items-center space-x-1.5"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg><span>${formattedViews} dilihat</span></div>`;
            },
            getRelatedLinkHTML(item) {
                return `<a href="release-detail.html?slug=${item.slug}" class="related-release-link block py-3 border-b border-gray-200 last:border-b-0"><p class="font-body text-gray-800 transition-colors">${item.title}</p></a>`;
            }
        },

        // --- 6. UI & ANIMATIONS ---
        ui: {
            updateActiveLink() {
                const path = window.location.pathname.split('/').pop() || 'index.html';
                let activePage = 'home';
                if (path.includes('about')) activePage = 'about';
                else if (path.includes('team')) activePage = 'team';
                else if (path.includes('release')) activePage = 'release';
                else if (path.includes('database')) activePage = 'database';
                
                document.querySelectorAll('.nav-link, .nav-link-mobile').forEach(link => {
                    link.classList.remove('active-link', 'active-mobile-link');
                    if (link.dataset.page === activePage) {
                        link.classList.add(link.classList.contains('nav-link') ? 'active-link' : 'active-mobile-link');
                    }
                });
            },
            showModal(message) {
                if(App.elements.modalMessage) App.elements.modalMessage.textContent = message;
                if(App.elements.modal) { App.elements.modal.classList.remove('hidden'); App.elements.modal.classList.add('flex'); }
            },
            hideModal() {
                if(App.elements.modal) { App.elements.modal.classList.add('hidden'); App.elements.modal.classList.remove('flex'); }
            }
        },
        animations: {
            setupScrollAnimations() {
                const animatedElements = document.querySelectorAll('.animate-on-scroll');
                if(!animatedElements.length) return;
                const observer = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const delay = parseInt(entry.target.dataset.delay) || 0;
                            setTimeout(() => {
                                entry.target.classList.add('is-visible');
                                const counter = entry.target.querySelector('.count-up');
                                if (counter) this.animateCounter(counter);
                            }, delay);
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.1 });
                animatedElements.forEach(el => observer.observe(el));
            },
            animateCounter(element) {
                if (element.dataset.animated) return;
                element.dataset.animated = "true";
                const target = +element.getAttribute('data-target');
                const duration = 1500; let start = null;
                const step = (timestamp) => {
                    if (!start) start = timestamp;
                    const progress = Math.min((timestamp - start) / duration, 1);
                    element.innerText = Math.floor(progress * target).toLocaleString('id-ID');
                    if (progress < 1) window.requestAnimationFrame(step);
                    else element.innerText = target.toLocaleString('id-ID');
                };
                window.requestAnimationFrame(step);
            }
        },
        
        // --- 7. UTILITIES ---
        utils: {
            createSlug(title, wordCount = 9) {
                return title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').split('-').slice(0, wordCount).join('-').replace(/^-+|-+$/g, '');
            },
            getSlugFromURL() {
                const params = new URLSearchParams(window.location.search);
                return params.get('slug');
            }
        }
    };

    // Menjalankan aplikasi
    App.init();
});
