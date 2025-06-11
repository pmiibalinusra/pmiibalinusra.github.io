document.addEventListener('DOMContentLoaded', () => {
    // Data Pengurus
    const img1 = 'https://i.imgur.com/pc7LDOU.png'; // Placeholder untuk Laki-laki
    const img2 = 'https://i.imgur.com/EoxOIsB.png'; // Placeholder untuk Perempuan
    const teamData = [ 
        { name: 'Ahmad Muzakkir', position: 'Ketua Koordinator Cabang', img: img1 }, 
        { name: 'Nurhalifah', position: 'Ketua KOPRI PKC', img: img2 }, 
        { name: 'Budi Santoso', position: 'Sekretaris Umum', img: img1 }, 
        { name: 'Siti Aminah', position: 'Bendahara Umum', img: img2 }, 
        { name: 'Eko Prasetyo', position: 'Wk. Ketua Bidang Kaderisasi', img: img1 }, 
        { name: 'Dewi Lestari', position: 'Wk. Ketua Bidang Keagamaan', img: img2 }, 
        { name: 'Agus Wijaya', position: 'Wk. Ketua Bidang Advokasi', img: img1 }, 
        { name: 'Rina Hartati', position: 'Wk. Ketua Bidang Media', img: img2 }, 
        { name: 'Fajar Nugroho', position: 'Wk. Sekretaris Kaderisasi', img: img1 }, 
        { name: 'Fitriani', position: 'Wk. Sekretaris Keagamaan', img: img2 }, 
        { name: 'Hadi Susanto', position: 'Wk. Sekretaris Advokasi', img: img1 }, 
        { name: 'Indah Permata', position: 'Wk. Sekretaris Media', img: img2 }, 
        { name: 'Joko Purwanto', position: 'Wk. Bendahara I', img: img1 }, 
        { name: 'Lia Marlina', position: 'Wk. Bendahara II', img: img2 }, 
        { name: 'Muhammad Iqbal', position: 'Biro Kaderisasi', img: img1 }, 
        { name: 'Nadia Putri', position: 'Biro Kaderisasi', img: img2 }, 
        { name: 'Putu Gede', position: 'Biro Keagamaan', img: img1 }, 
        { name: 'Ni Made Sri', position: 'Biro Keagamaan', img: img2 }, 
        { name: 'Rizki Maulana', position: 'Biro Advokasi & Kebijakan', img: img1 }, 
        { name: 'Anisa Rahmawati', position: 'Biro Advokasi & Kebijakan', img: img2 }, 
        { name: 'Yoga Pratama', position: 'Biro Media & Opini Publik', img: img1 }, 
        { name: 'Dian Novita', position: 'Biro Media & Opini Publik', img: img2 }, 
        { name: 'Surya Dharma', position: 'Biro Penelitian & Kajian', img: img1 }, 
        { name: 'Ayu Wulandari', position: 'Biro Penelitian & Kajian', img: img2 }, 
        { name: 'Bayu Setiawan', position: 'Biro Hubungan Antar Lembaga', img: img1 }, 
        { name: 'Maya Sari', position: 'Biro Hubungan Antar Lembaga', img: img2 }, 
        { name: 'Tri Haryanto', position: 'Biro Ekonomi Kreatif', img: img1 }, 
        { name: 'Eva Yuliana', position: 'Biro Ekonomi Kreatif', img: img2 }, 
        { name: 'Irfan Hakim', position: 'Anggota Bidang Kaderisasi', img: img1 }, 
        { name: 'Cahaya Mentari', position: 'Anggota Bidang Keagamaan', img: img2 }, 
        { name: 'Gilang Ramadhan', position: 'Anggota Bidang Advokasi', img: img1 }, 
        { name: 'Saskia Putri', position: 'Anggota Bidang Media', img: img2 } 
    ];

    // Fungsi untuk membuat HTML card anggota tim
    function createTeamMemberHTML(member, index) {
        return `<div class="text-center group animate-on-scroll fade-in-bottom card-zoom" data-delay="${index * 100}">
                    <div class="relative w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden mx-auto shadow-lg skeleton mb-4">
                        <img src="${member.img}" alt="Foto ${member.name}" class="absolute w-full h-full object-cover object-top opacity-0 transition-opacity duration-500 group-hover:scale-105" onerror="this.onerror=null;this.src='https://placehold.co/400x400/e2e8f0/cccccc?text=Foto';" onload="this.classList.remove('opacity-0'); this.parentElement.classList.remove('skeleton');">
                    </div>
                    <h3 class="font-title text-[#2918A9]">${member.name}</h3>
                    <p class="font-body text-gray-600">${member.position}</p>
                </div>`;
    }

    const teamContainer = document.getElementById('team-page-container');
    if (teamContainer) {
        teamContainer.innerHTML = teamData.map((member, index) => createTeamMemberHTML(member, index)).join('');
        // Panggil kembali fungsi animasi scroll setelah konten dirender
        // (Diasumsikan setupScrollAnimations ada di main.js dan bisa diakses global)
        if (typeof setupScrollAnimations === 'function') {
            setupScrollAnimations();
        }
    }
});
