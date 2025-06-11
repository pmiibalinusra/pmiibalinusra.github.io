document.addEventListener('DOMContentLoaded', () => {
    // --- PRELOADER ---
    const preloader = document.getElementById('preloader');
    if (preloader) {
        // Tampilkan preloader, sembunyikan setelah 3 detik
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 3000);
    }

    // --- MOBILE MENU ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // --- ACTIVE NAV LINK ---
    // Fungsi ini menandai link navigasi yang aktif berdasarkan halaman yang sedang dibuka
    function updateActiveLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('.nav-link, .nav-link-mobile').forEach(link => {
            const linkPage = link.getAttribute('href');
            // Hapus kelas aktif dari semua link terlebih dahulu
            link.classList.remove('active-link', 'active-mobile-link');

            if (linkPage === currentPage) {
                if (link.classList.contains('nav-link')) {
                    link.classList.add('active-link');
                }
                if (link.classList.contains('nav-link-mobile')) {
                    link.classList.add('active-mobile-link');
                }
            }
            
            // Penanganan khusus untuk halaman detail rilis agar menu 'RELEASE' tetap aktif
            if (currentPage.startsWith('pmii-kaji-stagnasi-ekonomi-ntb') && linkPage === 'rilis.html') {
                 if (link.classList.contains('nav-link')) {
                    link.classList.add('active-link');
                }
                if (link.classList.contains('nav-link-mobile')) {
                    link.classList.add('active-mobile-link');
                }
            }
        });
    }

    // --- SCROLL ANIMATIONS ---
    // Fungsi ini akan mengaktifkan animasi saat elemen terlihat di layar
    function setupScrollAnimations() {
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = parseInt(entry.target.dataset.delay) || 0;
                    setTimeout(() => {
                        entry.target.classList.add('is-visible');
                        // Jika ada counter di dalam elemen, jalankan animasinya
                        const counter = entry.target.querySelector('.count-up');
                        if (counter) {
                            animateCounter(counter);
                        }
                         // Jika ada marquee, jalankan animasinya
                        const marquee = entry.target.querySelector('.marquee-container');
                        if(marquee) {
                            marquee.classList.add('is-visible');
                        }
                    }, delay);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        animatedElements.forEach(el => {
            observer.observe(el);
        });
    }
    
    // --- COUNTER ANIMATION ---
    // Fungsi untuk animasi angka menghitung naik
    window.animateCounter = function(element) {
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

    // --- INITIALIZATION ---
    updateActiveLink();
    setupScrollAnimations();
});
