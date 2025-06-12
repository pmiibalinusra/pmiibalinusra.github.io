/**
 * ===================================================================
 * SCRIPT.JS UNTUK WEBSITE PKC PMII BALI NUSRA (VERSI MULTI-PAGE)
 * ===================================================================
 * Deskripsi:
 * File ini mengontrol semua interaktivitas di seluruh halaman website.
 * Ini mencakup:
 * - Inisialisasi halaman setelah preloader.
 * - Merender konten dinamis (seperti daftar rilis, tim, dll.).
 * - Menangani event-event seperti klik, submit form, dan lainnya.
 * - Mengelola animasi saat scroll dan efek UI lainnya.
 * * Catatan:
 * File ini bergantung pada 'data.js' yang harus dimuat sebelumnya.
 * 'data.js' menyediakan variabel global seperti `rawReleases`, `teamData`, dll.
 * ===================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

    const App = {
        // --- STATE & CONFIG ---
        // Menyimpan data yang telah diproses dan status aplikasi
        state: {
            data: {
                releases: [],
                team: [],
                documents: [],
                studies: [],
                formData: {}
            }
        },

        // --- DOM SELECTORS ---
        // Referensi ke elemen-elemen HTML yang sering digunakan
        elements: {
            preloader: document.getElementById('preloader'),
            mobileMenu: document.getElementById('mobile-menu'),
            modal: document.getElementById('form-modal'),
            modalMessage: document.getElementById('modal-message'),
            // Kontainer spesifik untuk setiap halaman (null jika tidak ada di halaman saat ini)
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

        // --- INITIALIZATION ---
        // Fungsi utama yang berjalan saat halaman dimuat
        init() {
            // 1. Tampilkan preloader segera
            this.elements.preloader.style.display = 'flex';

            // 2. Atur timeout selama 3 detik untuk preloader
            setTimeout(() => {
                // 3. Muat dan proses data dari 'data.js'
                this.data.load();

                // 4. Ikat semua event listener global (klik, submit)
                this.events.bind();

                // 5. Identifikasi halaman mana yang sedang aktif berdasarkan ID pada tag <body>
                const pageId = document.body.id;

                // 6. Jalankan fungsi render yang sesuai untuk halaman tersebut
                switch (pageId) {
                    case 'home-page':
                        this.render.homePage();
                        break;
                    case 'release-list-page':
                        this.render.releaseListPage();
                        break;
                    case 'release-detail-page':
                        const slug = this.utils.getSlugFromURL();
                        if (slug) {
                            this.render.releaseDetail(slug);
                        } else {
                            // Tampilkan pesan error jika tidak ada slug di URL
                            const mainContent = document.querySelector('main');
                            if (mainContent) {
                                mainContent.innerHTML = '<div class="container mx-auto px-6 py-20 text-center"><p class="font-title text-red-500">Error: Rilis tidak ditemukan.</p><p class="mt-2">URL tidak valid. Silakan kembali ke halaman rilis.</p><a href="release.html" class="mt-4 inline-block bg-[#0973D6] text-white font-bold py-2 px-6 rounded-lg hover:opacity-90">Kembali ke Rilis</a></div>';
                            }
                        }
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

                // 7. Siapkan animasi scroll untuk elemen di halaman saat ini
                this.animations.setupScrollAnimations();
                
                // 8. Perbarui link navigasi yang aktif
                this.ui.updateActiveLink();

                // 9. Sembunyikan preloader dan tampilkan konten
                this.elements.preloader.style.display = 'none';

            }, 3000); // Durasi preloader: 3000ms = 3 detik
        },


        // --- DATA HANDLING ---
        // Mengelola data yang diambil dari 'data.js'
        data: {
            load() {
                // Memproses data mentah dari variabel global (dari data.js)
                // dan menyimpannya ke dalam App.state
                const today = new Date();
                
                // Variabel `rawReleases` dan `contents` berasal dari `data.js`
                App.state.data.releases = rawReleases.map((item, index) => {
                    const date = new Date(today);
                    date.setDate(today.getDate() - (index + 1)); // Mensimulasikan tanggal rilis
                    return {
                        ...item,
                        date,
                        views: Math.floor(Math.random() * 8000) + 500, // Views acak
                        slug: App.utils.createSlug(item.title),
                        content: item.id === 10 ? contents[0] : (item.id >= 1 && item.id <= 9 ? contents[item.id] : "<p>Konten belum tersedia.</p>")
                    };
                });
                
                // Variabel lain dari `data.js`
                App.state.data.team = teamData;
                App.state.data.documents = documentsData;
                App.state.data.studies = studiesData;
                App.state.data.formData = formData;
            },
            getReleaseBySlug(slug) {
                return App.state.data.releases.find(r => r.slug === slug);
            },
            getSortedReleases(sortBy, excludeSlug = null, limit = null) {
                let sorted = [...App.state.data.releases];
                if (excludeSlug) {
                    sorted = sorted.filter(r => r.slug !== excludeSlug);
                }
                if (sortBy === 'views') {
                    sorted.sort((a, b) => b.views - a.views);
                } else { // default 'date'
                    sorted.sort((a, b) => b.date - a.date);
                }
                return limit ? sorted.slice(0, limit) : sorted;
            }
        },

        // --- EVENT HANDLING ---
        // Mengikat semua event listener
        events: {
            bind() {
                // Event untuk tombol menu mobile
                document.getElementById('mobile-menu-button').addEventListener('click', () => {
                    if (App.elements.mobileMenu) App.elements.mobileMenu.classList.toggle('hidden');
                });

                // Event untuk form KTA
                if (App.elements.ktaForm.form) {
                    App.elements.ktaForm.form.addEventListener('submit', this.handleFormSubmit);
                }
                
                // Event untuk input file di form KTA
                if (App.elements.ktaForm.fileInput) {
                    App.elements.ktaForm.fileInput.addEventListener('change', () => {
                        App.elements.ktaForm.fileChosen.textContent = App.elements.ktaForm.fileInput.files[0] ? App.elements.ktaForm.fileInput.files[0].name : '';
                    });
                }

                // Event untuk menutup modal
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
                    App.elements.ktaForm.fileChosen.textContent = '';
                } else {
                    App.ui.showModal('Harap lengkapi semua kolom formulir yang wajib diisi.');
                }
            }
        },

        // --- RENDERING ---
        // Kumpulan fungsi untuk memasukkan HTML ke dalam halaman
        render: {
            homePage() {
                const popular = App.data.getSortedReleases('views', null, 6);
                const latest = App.data.getSortedReleases('date', null, 6);

                if (App.elements.popularReleaseContainer) {
                    const popularHtml = popular.map((item, i) => this.getReleaseCardHTML(item, i, '')).join('');
                    App.elements.popularReleaseContainer.innerHTML = popularHtml + popularHtml; // Duplikasi untuk marquee
                }

                if (App.elements.latestReleaseContainer) {
                    App.elements.latestReleaseContainer.innerHTML = latest.map((item, i) => this.getReleaseCardHTML(item, i, 'fade-in-bottom')).join('');
                }
            },
            releaseListPage() {
                const allReleases = App.data.getSortedReleases('date');
                if (App.elements.releasePageContainer) {
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
                const docLink = "https://drive.google.com/file/d/13grSe-WlOemxHtpSlcf8Pyg4Ghlx_2pV/view?usp=drivesdk";
                if (App.elements.docListContainer) {
                    App.elements.docListContainer.innerHTML = App.state.data.documents.map(item => `
                        <a href="${docLink}" target="_blank" rel="noopener noreferrer" class="document-list-item block p-4 hover:bg-gray-50 transition-colors">${item}</a>
                    `).join('');
                }
            },
            strategicStudyPage() {
                const docLink = "https://drive.google.com/file/d/13grSe-WlOemxHtpSlcf8Pyg4Ghlx_2pV/view?usp=drivesdk";
                 if (App.elements.studyListContainer) {
                    App.elements.studyListContainer.innerHTML = App.state.data.studies.map(item => `
                        <a href="${docLink}" target="_blank" rel="noopener noreferrer" class="document-list-item block p-4 hover:bg-gray-50 transition-colors">${item}</a>
                    `).join('');
                }
            },
            ktaForm() {
                const { formData } = App.state.data;
                const populate = (id, data) => {
                    const select = document.getElementById(id);
                    if (select) select.innerHTML = '<option value="" selected disabled>Pilih...</option>' + data.map(item => `<option value="${item}">${item}</option>`).join('');
                };
                populate('fakultas_rayon_form', formData.fakultas);
                populate('kampus_komisariat_form', formData.kampus);
                populate('kab_kota_cabang_form', formData.kabKota);
            },
            releaseDetail(slug) {
                const release = App.data.getReleaseBySlug(slug);
                if (!release) return;

                const { title, meta, img, body, shareWhatsapp, submitArticleBtn, relatedPopular, relatedRecent } = App.elements.releaseDetail;

                if (title) title.textContent = release.title;
                if (img) {
                    img.src = release.img;
                    img.alt = release.alt;
                    img.style.opacity = 0; // Reset untuk animasi onload
                }
                if (meta) meta.innerHTML = this.getReleaseMetaHTML(release);
                if (body) body.innerHTML = release.content;

                const pageUrl = window.location.href;
                const shareText = encodeURIComponent(`${release.title}`);
                if (shareWhatsapp) shareWhatsapp.href = `https://api.whatsapp.com/send?text=${shareText}%20${encodeURIComponent(pageUrl)}`;
                
                const waMessage = encodeURIComponent("Assalamu'alaikum Sahabat, Saya ingin mengirimkan tulisan untuk dapat dipublikasikan. Mohon atensinya. Terima kasih.");
                if (submitArticleBtn) submitArticleBtn.href = `https://wa.me/6287859245125?text=${waMessage}`;

                const popularReleases = App.data.getSortedReleases('views', slug, 4);
                const recentReleases = App.data.getSortedReleases('date', slug, 4);
                if (relatedPopular) relatedPopular.innerHTML = popularReleases.map(r => this.getRelatedLinkHTML(r)).join('');
                if (relatedRecent) relatedRecent.innerHTML = recentReleases.map(r => this.getRelatedLinkHTML(r)).join('');
            },

            // --- HTML TEMPLATES ---
            // Fungsi-fungsi pembantu untuk membuat potongan HTML
            getReleaseCardHTML(item, index, animationClass) {
                // Menggunakan URL parameter '?slug=' untuk halaman detail
                return `<a href="release-detail.html?slug=${item.slug}" class="release-card card-zoom bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group w-full border border-gray-200 hover:shadow-xl transition-shadow duration-300 animate-on-scroll ${animationClass}" data-delay="${index * 150}">
                    <div class="relative overflow-hidden h-40 skeleton">
                        <img src="${item.img}" alt="${item.alt}" class="absolute w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:scale-105" onload="this.style.opacity = 1; this.parentElement.classList.remove('skeleton');">
                    </div>
                    <div class="p-4 flex flex-col flex-grow">
                        <h3 class="font-title flex-grow min-h-[54px] text-gray-800 leading-tight">${item.title}</h3>
                        <div class="mt-3 flex items-center justify-between font-subtitle text-gray-500">
                            ${this.getReleaseMetaHTML(item)}
                        </div>
                    </div>
                </a>`;
            },
            getReleaseMetaHTML(item) {
                const options = { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Makassar' };
                const formattedDate = item.date.toLocaleDateString('id-ID', options);
                const formattedViews = item.views > 1000 ? `${(item.views / 1000).toFixed(1)}k` : item.views;
                return `
                    <div class="flex items-center space-x-1.5"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg><span>${formattedDate}</span></div>
                    <div class="flex items-center space-x-1.5"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg><span>${formattedViews} dilihat</span></div>
                `;
            },
            getRelatedLinkHTML(item) {
                return `<a href="release-detail.html?slug=${item.slug}" class="related-release-link block py-3 border-b border-gray-200 last:border-b-0">
                    <p class="font-body text-gray-800 transition-colors">${item.title}</p>
                </a>`;
            }
        },

        // --- UI & ANIMATIONS ---
        ui: {
            updateActiveLink() {
                const path = window.location.pathname;
                const currentPageFile = path.substring(path.lastIndexOf('/') + 1);
                
                let activePage = 'home'; // Default
                if (currentPageFile === 'about.html') activePage = 'about';
                else if (currentPageFile === 'team.html') activePage = 'team';
                else if (currentPageFile.includes('release')) activePage = 'release'; // untuk release.html & release-detail.html
                else if (currentPageFile === 'database.html') activePage = 'database';

                document.querySelectorAll('.nav-link, .nav-link-mobile').forEach(link => {
                    link.classList.remove('active-link', 'active-mobile-link');
                    if (link.dataset.page === activePage) {
                        link.classList.add(link.classList.contains('nav-link') ? 'active-link' : 'active-mobile-link');
                    }
                });
            },
            showModal(message) {
                if (App.elements.modalMessage) App.elements.modalMessage.textContent = message;
                if (App.elements.modal) {
                    App.elements.modal.classList.remove('hidden');
                    App.elements.modal.classList.add('flex');
                }
            },
            hideModal() {
                if (App.elements.modal) {
                    App.elements.modal.classList.add('hidden');
                    App.elements.modal.classList.remove('flex');
                }
            }
        },
        
        animations: {
            setupScrollAnimations() {
                const animatedElements = document.querySelectorAll('.animate-on-scroll');
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
                const duration = 1500;
                let start = null;

                const step = (timestamp) => {
                    if (!start) start = timestamp;
                    const progress = Math.min((timestamp - start) / duration, 1);
                    element.innerText = Math.floor(progress * target).toLocaleString('id-ID');
                    if (progress < 1) {
                        window.requestAnimationFrame(step);
                    } else {
                        element.innerText = target.toLocaleString('id-ID');
                    }
                };
                window.requestAnimationFrame(step);
            }
        },
        
        // --- UTILITIES ---
        utils: {
            createSlug(title, wordCount = 9) {
                return title.toLowerCase()
                    .replace(/[^\w\s-]/g, '')
                    .replace(/[\s_-]+/g, '-')
                    .split('-').slice(0, wordCount).join('-')
                    .replace(/^-+|-+$/g, '');
            },
            getSlugFromURL() {
                const params = new URLSearchParams(window.location.search);
                return params.get('slug');
            }
        }
    };

    // Jalankan aplikasi
    App.init();

});
