document.addEventListener('DOMContentLoaded', () => {
    // Data dummy untuk rilis (sama seperti di index.js)
    const rilisData = [
        {"id":10, "img":"https://i.imgur.com/0jrXtiK.jpeg", "title":"PKC PMII Bali Nusra Wujudkan Kepedulian Sosial Melalui Program Berqurban Idul Adha", "alt":"Kegiatan Berqurban PMII"},
        {"id":1, "img":"https://i.imgur.com/pQpvjsW.jpeg", "title":"PMII Kaji Stagnasi Ekonomi NTB: Mendesak Adanya Kebijakan Ekonomi Pro-Rakyat", "alt":"Ekonomi NTB"},
        {"id":2, "img":"https://i.imgur.com/cPGZUKd.jpeg", "title":"Tata Kelola Beasiswa NTB Disorot PMII: Mendesak Transparansi dan Meritokrasi", "alt":"Beasiswa NTB"},
        {"id":3, "img":"https://i.imgur.com/YUKsBna.jpeg", "title":"Akses Kesehatan NTB Belum Merata, PMII Dorong Peningkatan Anggaran dan Layanan", "alt":"Kesehatan NTB"},
        {"id":4, "img":"https://i.imgur.com/EN1NwUQ.jpeg", "title":"PMII Soroti Birokrasi Pariwisata NTB: Hambat Potensi, Perlu Reformasi Digital", "alt":"Pariwisata NTB"},
        {"id":5, "img":"https://i.imgur.com/xe4WAXk.jpeg", "title":"PMII Desak Audit Independen Dana Bansos NTB untuk Cegah Penyelewengan", "alt":"Bantuan Sosial NTB"},
        {"id":6, "img":"https://i.imgur.com/YoJXUt7.jpeg", "title":"Produktivitas Pertanian NTB Rendah, PMII Usulkan Peningkatan Investasi Infrastruktur", "alt":"Pertanian NTB"},
        {"id":7, "img":"https://i.imgur.com/WFA7Zqy.jpeg", "title":"Pembangunan Infrastruktur NTB Belum Inklusif, PMII Serukan Pemerataan Anggaran", "alt":"Infrastruktur NTB"},
        {"id":8, "img":"https://i.imgur.com/AXPtLYm.jpeg", "title":"PMII Evaluasi Kinerja Gubernur NTB: Realisasi Janji Pembangunan Belum Optimal", "alt":"Gubernur NTB"},
        {"id":9, "img":"https://i.imgur.com/eXlEdhJ.jpeg", "title":"PMII Desak Integrasi Data Terpadu di NTB untuk Kebijakan Berbasis Fakta", "alt":"Data NTB"}
    ];
    
    function createSlug(title, wordCount = 9) {
        return title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').split('-').slice(0, wordCount).join('-').replace(/^-+|-+$/g, '');
    }

    // Inisialisasi data
    const today = new Date();
    rilisData.forEach((item, index) => {
        item.date = new Date(today);
        item.date.setDate(today.getDate() - (index + 1));
        item.views = Math.floor(Math.random() * 8000) + 500;
        item.slug = createSlug(item.title);
    });

    // Fungsi untuk membuat HTML card rilis
    function createCardHTML(item, index, animationClass = 'fade-in-bottom') {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const formattedDate = item.date.toLocaleDateString('id-ID', options);
        const formattedViews = item.views > 1000 ? `${(item.views / 1000).toFixed(1)}k` : item.views;
        
        // Hanya rilis dengan ID 1 yang memiliki halaman detail
        const detailUrl = item.id === 1 ? `rilis/${item.slug}.html` : '#';
        const linkAction = item.id !== 1 ? `onclick="alert('Halaman detail untuk rilis ini belum dibuat.'); return false;"` : '';

        return `<a href="${detailUrl}" ${linkAction} class="release-card card-zoom bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group w-full border border-gray-200 hover:shadow-xl transition-shadow duration-300 animate-on-scroll ${animationClass}" data-id="${item.slug}" data-delay="${index * 100}">
                    <div class="relative overflow-hidden pointer-events-none h-40 skeleton">
                        <img src="${item.img}" alt="${item.alt}" class="absolute w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:scale-105" onload="this.classList.remove('opacity-0'); this.parentElement.classList.remove('skeleton');">
                    </div>
                    <div class="p-4 flex flex-col flex-grow pointer-events-none">
                        <h3 class="font-title flex-grow min-h-[54px] text-gray-800 leading-tight">${item.title}</h3>
                        <div class="mt-3 flex items-center justify-between font-subtitle text-gray-500">
                            <div class="flex items-center space-x-1.5"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg><span>${formattedDate}</span></div>
                            <div class="flex items-center space-x-1.5"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg><span>${formattedViews} dilihat</span></div>
                        </div>
                    </div>
                </a>`;
    }

    const releasePageContainer = document.getElementById('release-page-container');
    if (releasePageContainer) {
        const sortedByDate = [...rilisData].sort((a, b) => new Date(b.date) - new Date(a.date));
        releasePageContainer.innerHTML = sortedByDate.map((item, index) => createCardHTML(item, index)).join('');
        
        // Panggil kembali fungsi animasi
        if (typeof setupScrollAnimations === 'function') {
            setupScrollAnimations();
        }
    }
});
