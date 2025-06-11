document.addEventListener('DOMContentLoaded', () => {

    // --- DATABASE ---
    // Semua data (rilis, tim, form) tetap sama seperti kode asli
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
    const documentListData=["Agenda Pelatihan Kader Dasar PMII Bali Nusra 2025","Daftar Hadir Aksi Damai PMII NTB untuk Keadilan Sosial","Dokumentasi Visual Seminar Nasional PMII: Masa Depan NTB","Laporan Keuangan Musyawarah Cabang PMII Denpasar 2025","Laporan Naratif Aksi Solidaritas PMII Bali untuk Petani","Notulensi Rapat Koordinasi PMII Bali Nusra Juni 2025","Poster Promosi Dialog Publik PMII: Isu Lingkungan NTB","Proposal Pelatihan Jurnalistik PMII NTT 2025","Surat Izin Demo PMII Bali di Kantor Gubernur NTB","Surat Undangan Seminar Kepemimpinan PMII Bali Nusra 2025"];
    const strategicStudyListData = ["Analisis Isu: Dampak Kebijakan Pariwisata NTB 2025", "Position Paper PMII: Sikap Terhadap Kebijakan Ekonomi NTB", "Laporan Kajian PMII: Krisis Pendidikan di NTT 2025", "Makalah: Strategi PMII Atasi Ketimpangan Sosial Bali", "Notulensi Diskusi PMII: Solusi Korupsi di NTB", "Policy Brief PMII: Reformasi Kesehatan Masyarakat NTB", "Rancangan Aksi PMII: Advokasi Bantuan Sosial NTB 2025", "Referensi Data: Statistik Kemiskinan Bali-Nusra 2025", "Resume Diskusi PMII: Isu Infrastruktur NTB 2025", "Survei PMII: Persepsi Mahasiswa soal Kebijakan Gubernur"];
    const formData = {"fakultas":["Fakultas Adab dan Humaniora", "Fakultas Agama Islam", "Fakultas Agribisnis", "Fakultas Agroteknologi", "Fakultas Akuntansi", "Fakultas Arsitektur", "Fakultas Arsitektur dan Desain", "Fakultas Bahasa dan Sastra", "Fakultas Bahasa dan Seni", "Fakultas Biologi", "Fakultas Bisnis", "Fakultas Bisnis dan Ekonomi", "Fakultas Bisnis dan Pariwisata", "Fakultas Dakwah dan Komunikasi", "Fakultas Desain", "Fakultas Ekonomi", "Fakultas Ekonomi dan Bisnis", "Fakultas Ekonomi dan Bisnis Islam", "Fakultas Ekonomi dan Manajemen", "Fakultas Farmasi", "Fakultas Filsafat", "Fakultas Fisika", "Fakultas Geografi", "Fakultas Hukum", "Fakultas Hukum dan Ilmu Sosial", "Fakultas Ilmu Agama Islam", "Fakultas Ilmu Budaya", "Fakultas Ilmu Komputer", "Fakultas Ilmu Pendidikan", "Fakultas Ilmu Politik", "Fakultas Ilmu Sosial", "Fakultas Ilmu Sosial dan Ilmu Politik", "Fakultas Kedokteran", "Fakultas Kedokteran dan Ilmu Kesehatan", "Fakultas Kedokteran dan Kedokteran Hewan", "Fakultas Kedokteran Gigi", "Fakultas Kedokteran Hewan", "Fakultas Kehutanan", "Fakultas Keguruan dan Ilmu Pendidikan", "Fakultas Kesenian", "Fakultas Kesehatan Masyarakat", "Fakultas Keperawatan", "Fakultas Kimia", "Fakultas Matematika dan Ilmu Pengetahuan Alam", "Fakultas Olahraga dan Kesehatan", "Fakultas Pariwisata", "Fakultas Pertanian", "Fakultas Peternakan", "Fakultas Peternakan, Kelautan, dan Perikanan", "Fakultas Psikologi", "Fakultas Sains", "Fakultas Sains dan Teknologi", "Fakultas Seni dan Desain", "Fakultas Syariah dan Hukum", "Fakultas Tarbiyah dan Keguruan", "Fakultas Teknik", "Fakultas Teknik dan Pendidikan Vokasi", "Fakultas Teologi", "Fakultas Teologi dan Filsafat", "Fakultas Teknologi Industri", "Fakultas Teknologi Informasi", "Fakultas Teknologi Pangan", "Fakultas Teknologi Pangan dan Agroindustri", "Fakultas Ushuluddin dan Filsafat"],"kampus":["Akademi Akuntansi Denpasar (Swasta, Bali)", "Akademi Bahasa Asing Bali (Swasta, Bali)", "Akademi Kebidanan Bina Usada Bali (Swasta, Bali)", "Akademi Keperawatan Yaspenmas Mataram (Swasta, NTB)", "Akademi Komunikasi Media Radio dan Televisi Denpasar (Swasta, Bali)", "Akademi Komunitas Mapalus Minahasa (Swasta, NTT)", "Akademi Komunitas Negeri Sumba Timur (Negeri, NTT)", "Akademi Pariwisata Denpasar (Swasta, Bali)", "Akademi Sekretari Manajemen Mataram (Swasta, NTB)", "Institut Agama Hindu Negeri Gde Pudja Mataram (Negeri, NTB)", "Institut Agama Islam Al-Gazali Sumbawa Besar (Swasta, NTB)", "Institut Agama Islam Hamzanwadi Lombok Timur (Swasta, NTB)", "Institut Agama Islam Negeri Kupang (Negeri, NTT)", "Institut Agama Kristen Negeri Kupang (Negeri, NTT)", "Institut Keguruan dan Ilmu Pendidikan Mataram (Swasta, NTB)", "Institut Kesenian Denpasar (Negeri, Bali)", "Institut Pendidikan Nusantara Global (Swasta, NTB)", "Politeknik Elbajo Commodus (Swasta, NTB)", "Politeknik Katolik Santu Paulus Ruteng (Swasta, NTT)", "Politeknik Kesehatan Kemenkes Denpasar (Negeri, Bali)", "Politeknik Kesehatan Kemenkes Kupang (Negeri, NTT)", "Politeknik Kelautan dan Perikanan Sumbawa (Negeri, NTB)", "Politeknik Negeri Bali (Negeri, Bali)", "Politeknik Negeri Kupang (Negeri, NTT)", "Politeknik Pertanian Negeri Kupang (Negeri, NTT)", "Sekolah Tinggi Agama Hindu Negeri Mpu Kuturan Singaraja (Negeri, Bali)", "Sekolah Tinggi Agama Hindu Negeri Tampuagan Amlapura (Negeri, Bali)", "Sekolah Tinggi Agama Islam Al-Amin Dompu (Swasta, NTB)", "Sekolah Tinggi Agama Islam Al-Falah Praya Lombok Tengah (Swasta, NTB)", "Sekolah Tinggi Agama Islam Al-Manshur (Swasta, NTB)", "Sekolah Tinggi Agama Islam Badrus Sholeh (Swasta, NTB)", "Sekolah Tinggi Agama Islam Darul Kamal (Swasta, NTB)", "Sekolah Tinggi Agama Islam Darul Ulum Bima (Swasta, NTB)", "Sekolah Tinggi Agama Islam Nahdlatul Ulama Bali (Swasta, Bali)", "Sekolah Tinggi Agama Islam Negeri Maulana Malik Ibrahim Bima (Negeri, NTB)", "Sekolah Tinggi Agama Kristen Protestan Negeri Kupang (Negeri, NTT)", "Sekolah Tinggi Ilmu Administrasi Mataram (Swasta, NTB)", "Sekolah Tinggi Ilmu Administrasi Menara Siswa (Swasta, NTB)", "Sekolah Tinggi Ilmu Ekonomi 45 Mataram (Swasta, NTB)", "Sekolah Tinggi Ilmu Ekonomi AMM (Swasta, NTB)", "Sekolah Tinggi Ilmu Ekonomi Bima (Swasta, NTB)", "Sekolah Tinggi Ilmu Ekonomi Dwipa Wacana (Swasta, NTB)", "Sekolah Tinggi Ilmu Ekonomi Inter Studi (Swasta, Bali)", "Sekolah Tinggi Ilmu Ekonomi Satya Dharma (Swasta, Bali)", "Sekolah Tinggi Ilmu Ekonomi Triatma Mulya (Swasta, Bali)", "Sekolah Tinggi Ilmu Hukum dan Politik Kesuma Negara (Swasta, Bali)", "Sekolah Tinggi Ilmu Kesehatan Bali (Swasta, Bali)", "Sekolah Tinggi Ilmu Kesehatan Buleleng (Swasta, Bali)", "Sekolah Tinggi Ilmu Kesehatan Wira Medika Bali (Swasta, Bali)", "Sekolah Tinggi Ilmu Komputer Bali (Swasta, Bali)", "Sekolah Tinggi Ilmu Manajemen Handayani (Swasta, Bali)", "Sekolah Tinggi Ilmu Sosial dan Ilmu Politik Bina Putera (Swasta, NTT)", "Sekolah Tinggi Ilmu Sosial dan Ilmu Politik Kesuma Negara (Swasta, Bali)", "Sekolah Tinggi Pariwisata Bali Internasional (Swasta, Bali)", "Sekolah Tinggi Pariwisata Nusa Dua Bali (Swasta, Bali)", "Sekolah Tinggi Pariwisata Triatma Jaya (Swasta, Bali)", "Sekolah Tinggi Pertanian Wuna Raha (Swasta, NTT)", "Sekolah Tinggi Teknologi Nusantara (Swasta, Bali)", "Universitas 17 Agustus 1945 Bima (Swasta, NTB)", "Universitas Alor (Swasta, NTT)", "Universitas Bali Dwipa (Swasta, Bali)", "Universitas Cordewa (Swasta, NTT)", "Universitas Dhyana Pura (Swasta, Bali)", "Universitas Flores (Swasta, NTT)", "Universitas Gunung Rinjani (Swasta, NTB)", "Universitas Hamzanwadi (Swasta, NTB)", "Universitas Hindu Indonesia (Swasta, Bali)", "Universitas Iqra Buru (Swasta, NTT)", "Universitas Islam Al-Azhar Mataram (Swasta, NTB)", "Universitas Katolik Widya Mandira (Swasta, NTT)", "Universitas Kristen Artha Wacana (Swasta, NTT)", "Universitas Kristen Wira Wacana Sumba (Swasta, NTT)", "Universitas Mahasaraswati Denpasar (Swasta, Bali)", "Universitas Mahendradatta (Swasta, Bali)", "Universitas Mataram (Negeri, NTB)", "Universitas Muhammadiyah Kupang (Swasta, NTT)", "Universitas Muhammadiyah Mataram (Swasta, NTB)", "Universitas Nahdlatul Ulama Nusa Tenggara Barat (Swasta, NTB)", "Universitas Nahdlatul Wathan (Swasta, NTB)", "Universitas Ngurah Rai (Swasta, Bali)", "Universitas Nusa Cendana (Negeri, NTT)", "Universitas Nusa Nipa (Swasta, NTT)", "Universitas Panji Sakti (Swasta, Bali)", "Universitas Pendidikan Ganesha (Negeri, Bali)", "Universitas Pendidikan Nasional (Swasta, Bali)", "Universitas PGRI Mahadewa Indonesia (Swasta, Bali)", "Universitas Ratu Samban (Swasta, NTT)", "Universitas Samawa (Swasta, NTB)", "Universitas Sembilanbelas November Kolaka (Swasta, NTT)", "Universitas Sumbawa (Swasta, NTB)", "Universitas Teknologi Sumbawa (Swasta, NTB)", "Universitas Tribuana Kalabahi (Swasta, NTT)", "Universitas Udayana (Negeri, Bali)", "Universitas Warmadewa (Swasta, Bali)"],"kabKota":["Kabupaten Alor", "Kabupaten Badung", "Kabupaten Bangli", "Kabupaten Belu", "Kabupaten Bima", "Kabupaten Buleleng", "Kabupaten Dompu", "Kabupaten Ende", "Kabupaten Flores Timur", "Kabupaten Gianyar", "Kabupaten Jembrana", "Kabupaten Karangasem", "Kabupaten Klungkung", "Kabupaten Kupang", "Kabupaten Lembata", "Kabupaten Lombok Barat", "Kabupaten Lombok Tengah", "Kabupaten Lombok Timur", "Kabupaten Lombok Utara", "Kabupaten Malaka", "Kabupaten Manggarai", "Kabupaten Manggarai Barat", "Kabupaten Manggarai Timur", "Kabupaten Nagekeo", "Kabupaten Ngada", "Kabupaten Rote Ndao", "Kabupaten Sabu Raijua", "Kabupaten Sikka", "Kabupaten Sumba Barat", "Kabupaten Sumba Barat Daya", "Kabupaten Sumba Tengah", "Kabupaten Sumba Timur", "Kabupaten Sumbawa", "Kabupaten Sumbawa Barat", "Kabupaten Tabanan", "Kabupaten Timor Tengah Selatan", "Kabupaten Timor Tengah Utara", "Kota Bima", "Kota Denpasar", "Kota Kupang", "Kota Mataram"]};
    const img1 = 'https://i.imgur.com/pc7LDOU.png';
    const img2 = 'https://i.imgur.com/EoxOIsB.png';
    const teamData = [ { name: 'Ahmad Muzakkir', position: 'Ketua Koordinator Cabang', img: img1 }, { name: 'Nurhalifah', position: 'Ketua KOPRI PKC', img: img2 }, { name: 'Budi Santoso', position: 'Sekretaris Umum', img: img1 }, { name: 'Siti Aminah', position: 'Bendahara Umum', img: img2 }, { name: 'Eko Prasetyo', position: 'Wk. Ketua Bidang Kaderisasi', img: img1 }, { name: 'Dewi Lestari', position: 'Wk. Ketua Bidang Keagamaan', img: img2 }, { name: 'Agus Wijaya', position: 'Wk. Ketua Bidang Advokasi', img: img1 }, { name: 'Rina Hartati', position: 'Wk. Ketua Bidang Media', img: img2 }, { name: 'Fajar Nugroho', position: 'Wk. Sekretaris Kaderisasi', img: img1 }, { name: 'Fitriani', position: 'Wk. Sekretaris Keagamaan', img: img2 }, { name: 'Hadi Susanto', position: 'Wk. Sekretaris Advokasi', img: img1 }, { name: 'Indah Permata', position: 'Wk. Sekretaris Media', img: img2 }, { name: 'Joko Purwanto', position: 'Wk. Bendahara I', img: img1 }, { name: 'Lia Marlina', position: 'Wk. Bendahara II', img: img2 }, { name: 'Muhammad Iqbal', position: 'Biro Kaderisasi', img: img1 }, { name: 'Nadia Putri', position: 'Biro Kaderisasi', img: img2 }, { name: 'Putu Gede', position: 'Biro Keagamaan', img: img1 }, { name: 'Ni Made Sri', position: 'Biro Keagamaan', img: img2 }, { name: 'Rizki Maulana', position: 'Biro Advokasi & Kebijakan', img: img1 }, { name: 'Anisa Rahmawati', position: 'Biro Advokasi & Kebijakan', img: img2 }, { name: 'Yoga Pratama', position: 'Biro Media & Opini Publik', img: img1 }, { name: 'Dian Novita', position: 'Biro Media & Opini Publik', img: img2 }, { name: 'Surya Dharma', position: 'Biro Penelitian & Kajian', img: img1 }, { name: 'Ayu Wulandari', position: 'Biro Penelitian & Kajian', img: img2 }, { name: 'Bayu Setiawan', position: 'Biro Hubungan Antar Lembaga', img: img1 }, { name: 'Maya Sari', position: 'Biro Hubungan Antar Lembaga', img: img2 }, { name: 'Tri Haryanto', position: 'Biro Ekonomi Kreatif', img: img1 }, { name: 'Eva Yuliana', position: 'Biro Ekonomi Kreatif', img: img2 }, { name: 'Irfan Hakim', position: 'Anggota Bidang Kaderisasi', img: img1 }, { name: 'Cahaya Mentari', position: 'Anggota Bidang Keagamaan', img: img2 }, { name: 'Gilang Ramadhan', position: 'Anggota Bidang Advokasi', img: img1 }, { name: 'Saskia Putri', position: 'Anggota Bidang Media', img: img2 } ];
    
    // --- HELPER FUNCTIONS ---
    const createSlug = (title, wordCount = 9) => title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').split('-').slice(0, wordCount).join('-').replace(/^-+|-+$/g, '');

    const initializeData = () => {
        const today = new Date();
        const contents = [
             `<p>Mataram – Sebagai wujud komitmen dalam memperkuat nilai spiritual dan solidaritas sosial, Pengurus Koordinator Cabang Pergerakan Mahasiswa Islam Indonesia (PKC PMII) Bali Nusra kembali menggelar program berqurban untuk menyambut Hari Raya Idul Adha 1446 H.</p><p>Kegiatan yang berpusat di Sekretariat PKC PMII Bali Nusra ini berhasil menyalurkan hewan qurban kepada kader-kader PMII dan masyarakat sekitar yang membutuhkan. Prosesi penyembelihan dan distribusi dilakukan secara gotong royong, melibatkan partisipasi aktif para kader sebagai bentuk implementasi nilai-nilai kebersamaan.</p><p>Ketua PKC PMII Bali Nusra, Ahmad Muzakkir, menyatakan bahwa kegiatan ini adalah manifestasi dari ajaran Islam sebagai rahmatan lil 'alamin. “Berqurban bukan sekadar ritual, melainkan simbol pengorbanan, keikhlasan, dan kepedulian. Melalui program ini, PMII menegaskan kehadirannya yang tidak hanya di ruang-ruang diskusi, tetapi juga di tengah denyut nadi persoalan masyarakat,” ujarnya.</p><p>Kegiatan ini sekaligus menjadi momentum untuk memperkuat internalisasi nilai-nilai Ahlussunnah wal Jamaah (Aswaja) di kalangan kader. Dengan semangat ukhuwah islamiyah, PMII Bali Nusra berkomitmen untuk terus menggulirkan program-program yang memberikan dampak positif dan nyata bagi kemaslahatan umat dan bangsa.</p>`,
             `<p>Mataram – PKC PMII Bali Nusra menyoroti kondisi perekonomian Nusa Tenggara Barat (NTB) yang menunjukkan tanda-tanda stagnasi. Berdasarkan data Badan Pusat Statistik (BPS) NTB 2023, pertumbuhan ekonomi provinsi ini hanya mencapai 4,5%, angka yang masih di bawah target Rencana Pembangunan Jangka Menengah Daerah (RPJMD). Ketergantungan pada sektor pariwisata terbukti belum mampu menjadi motor penggerak ekonomi yang inklusif bagi seluruh lapisan masyarakat.</p><p>Data lebih lanjut menunjukkan Indeks Pembangunan Manusia (IPM) yang stagnan dan tingkat pengangguran terbuka yang masih di atas rata-rata nasional. PMII Bali Nusra menilai, tanpa strategi yang inklusif, narasi 'lomba investasi' tidak akan berdampak signifikan bagi kesejahteraan masyarakat luas, terutama bagi para petani dan nelayan yang menjadi tulang punggung ekonomi lokal.</p><p>Sebagai solusi, PMII mendorong adanya refocusing kebijakan ekonomi yang berbasis pada pemberdayaan masyarakat lokal. Mengacu pada konsep ekonomi kerakyatan, pemerintah daerah didesak untuk meningkatkan alokasi anggaran APBD untuk sektor koperasi dan UMKM. Tanpa langkah konkret ini, pertumbuhan ekonomi NTB hanya akan menjadi statistik yang tidak dirasakan manfaatnya oleh rakyat kecil.</p>`,
             `<p>Mataram – Transparansi dan akuntabilitas program beasiswa Pemerintah Provinsi NTB menjadi sorotan tajam PKC PMII Bali Nusra. Meskipun alokasi anggaran yang signifikan telah digulirkan, data internal PMII menunjukkan adanya potensi ketidaktepatan sasaran, di mana porsi untuk aktivis kritis dan mahasiswa kurang mampu belum optimal.</p><p>Mengacu pada kajian Transparency International Indonesia (2022) yang menyoroti rendahnya skor integritas pengelolaan dana publik di NTB, PMII mendesak adanya evaluasi menyeluruh. Kondisi ini menimbulkan pertanyaan mendasar: apakah program beasiswa telah berjalan sesuai prinsip keadilan dan transparansi, atau berisiko menjadi alat politis?</p><p>PMII mengusulkan reformasi total tata kelola beasiswa dengan membentuk komite seleksi independen yang melibatkan akademisi dan perwakilan organisasi mahasiswa. Selain itu, publikasi data penerima secara daring dan berkala adalah langkah mutlak untuk memastikan akuntabilitas, sejalan dengan amanat Undang-Undang Keterbukaan Informasi Publik (KIP) tahun 2008. Beasiswa harus menjadi investasi masa depan, bukan komoditas politik.</p>`,
             `<p>Mataram – PKC PMII Bali Nusra menyoroti masih adanya ketimpangan akses layanan kesehatan di Nusa Tenggara Barat (NTB). Data Dinas Kesehatan NTB (2023) menunjukkan rasio tenaga medis per penduduk yang masih di bawah standar WHO, serta Angka Kematian Ibu (AKI) yang tergolong tinggi. Hal ini diperparah dengan alokasi anggaran kesehatan dalam APBD yang belum memenuhi amanat UU Kesehatan sebesar 10%.</p><p>Program "NTB Sehat" yang telah berjalan dinilai belum menunjukkan hasil yang signifikan dan merata, terutama di wilayah-wilayah terpencil. PMII menilai, kebijakan kesehatan harus fokus pada hasil yang terukur, bukan sekadar retorika dan program seremonial.</p><p>Untuk itu, PMII mendorong pemerintah daerah untuk meningkatkan alokasi anggaran kesehatan hingga 15% dari APBD. Dana tersebut harus diprioritaskan untuk rekrutmen tenaga medis, pembangunan puskesmas di daerah terpencil, dan penguatan sistem kesehatan primer. Mengadopsi teknologi telemedicine, seperti yang direkomendasikan WHO, juga bisa menjadi solusi untuk menjangkau masyarakat di kepulauan. Tanpa langkah strategis ini, "NTB Sehat" hanya akan menjadi slogan.</p>`,
             `<p>Mataram – Sektor pariwisata sebagai andalan ekonomi NTB dinilai masih terhambat oleh persoalan birokrasi. PKC PMII Bali Nusra mencatat, meskipun kunjungan wisatawan meningkat, kontribusinya terhadap Pendapatan Asli Daerah (PAD) belum optimal. Keluhan dari para pelaku industri mengenai perizinan yang rumit dan pungutan tidak resmi menjadi bukti adanya inefisiensi sistemik.</p><p>Mengutip laporan Ombudsman RI (2022), PMII menyoroti bahwa indeks kemudahan berusaha di sektor pariwisata NTB masih perlu perbaikan signifikan. Selain itu, fokus pembangunan yang terlalu terpusat di Mandalika berisiko menciptakan ketimpangan dan mengabaikan potensi besar di wilayah lain seperti Sumbawa dan Dompu.</p><p>PMII mendesak adanya reformasi birokrasi pariwisata melalui digitalisasi layanan. Penerapan sistem perizinan terpadu (One-Stop Service) dan promosi destinasi non-Mandalika secara masif adalah kunci untuk membuka potensi ekonomi secara lebih merata. Pariwisata harus menjadi motor penggerak yang inklusif, bukan sekadar proyek mercusuar.</p>`,
             `<p>Mataram – PKC PMII Bali Nusra menyerukan pengawasan ketat terhadap penyaluran dana bantuan sosial (bansos) di NTB. Temuan Badan Pemeriksa Keuangan (BPK) tahun 2022 mengenai adanya penyimpangan distribusi dan data Kemensos (2023) yang menunjukkan ketidaktepatan sasaran penerima menjadi alarm serius bagi akuntabilitas pemerintah daerah.</p><p>PMII menegaskan bahwa dana bansos adalah hak rakyat miskin dan sangat rentan disalahgunakan untuk kepentingan politik atau pribadi. Buruknya validasi data dan lemahnya mekanisme pengawasan menjadi celah bagi potensi korupsi, seperti yang pernah diungkap oleh Indonesia Corruption Watch (ICW).</p><p>Sebagai langkah konkret, PMII mendesak dilakukannya audit independen dan menyeluruh terhadap semua program bansos oleh lembaga yang kredibel seperti BPKP, dengan melibatkan partisipasi aktif dari masyarakat sipil sebagai pengawas eksternal. Sesuai amanat UU No. 13/2011, data penerima harus divalidasi dan dipublikasikan secara transparan. Bansos harus menjadi jaring pengaman sosial yang efektif, bukan ladang korupsi.</p>`,
             `<p>Mataram – Sektor pertanian NTB, yang menjadi tumpuan hidup mayoritas penduduk, menghadapi tantangan serius terkait produktivitas dan infrastruktur. PKC PMII Bali Nusra mencatat, produktivitas padi yang masih di bawah rata-rata nasional dan ketergantungan tinggi pada irigasi tadah hujan menunjukkan perlunya intervensi kebijakan yang lebih strategis.</p><p>Minimnya alokasi anggaran untuk infrastruktur pertanian, rendahnya adopsi teknologi, dan kelangkaan pupuk bersubsidi menjadi akar masalah yang menghambat kesejahteraan petani. PMII menilai, tanpa keberpihakan kebijakan yang nyata, sektor pertanian akan terus tertinggal.</p><p>Oleh karena itu, PMII mengusulkan peningkatan investasi pada infrastruktur pertanian, terutama untuk modernisasi irigasi, serta penguatan program subsidi input pertanian yang tepat sasaran. Sesuai rekomendasi FAO, pemerintah juga perlu menggencarkan program pelatihan teknologi pertanian 4.0 untuk menarik minat generasi muda dan meningkatkan produktivitas secara berkelanjutan.</p>`,
             `<p>Mataram – Arah pembangunan infrastruktur di NTB dinilai belum sepenuhnya inklusif dan merata. PKC PMII Bali Nusra menyoroti konsentrasi anggaran yang tidak proporsional pada proyek-proyek di kawasan strategis pariwisata, sementara kondisi jalan di banyak pedesaan masih memprihatinkan. Data BPS (2022) yang menunjukkan 35% jalan desa dalam kondisi rusak berat menjadi bukti nyata ketimpangan ini.</p><p>PMII menilai, pembangunan infrastruktur tidak boleh hanya melayani kepentingan investor atau menjadi "proyek prestise" elit politik. Konektivitas antarwilayah adalah kunci untuk membuka isolasi, mengurangi biaya logistik, dan mendorong pertumbuhan ekonomi yang merata.</p><p>PMII menyerukan adanya realokasi anggaran infrastruktur yang lebih adil, dengan porsi minimal 50% untuk wilayah pedesaan, sejalan dengan semangat UU Desa. Pendekatan perencanaan partisipatif yang melibatkan warga secara langsung harus menjadi norma baru, memastikan infrastruktur dibangun berdasarkan kebutuhan riil masyarakat, bukan keinginan segelintir pihak.</p>`,
             `<p>Mataram – PKC PMII Bali Nusra melakukan evaluasi kritis terhadap kinerja Gubernur NTB dalam merealisasikan janji-janji kampanye yang tertuang dalam RPJMD 2018-2023. Data BPS menunjukkan bahwa beberapa target makro, seperti pertumbuhan ekonomi dan penurunan angka kemiskinan, belum tercapai secara optimal.</p><p>PMII menilai bahwa kepemimpinan yang efektif diukur dari implementasi kebijakan yang berdampak nyata, bukan sekadar retorika. Janji industrialisasi, reformasi birokrasi, dan pemberdayaan masyarakat perlu diwujudkan dalam program yang terukur dan akuntabel.</p><p>Sebagai bagian dari fungsi kontrol sosial, PMII mendorong adanya evaluasi kinerja yang transparan dan partisipatif oleh DPRD, dengan melibatkan akademisi dan organisasi masyarakat sipil. Sesuai amanat UU Pemerintahan Daerah, pemerintah daerah wajib menerbitkan laporan kinerja tahunan yang dapat diakses publik. Kepemimpinan harus dipertanggungjawabkan melalui data dan fakta, bukan klaim sepihak.</p>`,
             `<p>Mataram – Akurasi dan integrasi data pemerintah di NTB menjadi perhatian serius PKC PMII Bali Nusra. Adanya inkonsistensi data antar-instansi, seperti data kemiskinan antara BPS dan Dinas Sosial, serta temuan BPK mengenai ketidaksinkronan data program, menunjukkan adanya masalah fundamental dalam tata kelola data.</p><p>PMII menegaskan bahwa kebijakan publik yang efektif harus didasarkan pada data yang valid dan andal. Tanpa data yang akurat, perencanaan pembangunan akan salah arah, dan alokasi sumber daya menjadi tidak efisien. Buruknya manajemen data melanggar prinsip pemerintahan yang baik dan amanat UU Keterbukaan Informasi Publik.</p><p>Untuk mengatasi masalah ini, PMII mendesak pembentukan Badan Data Daerah yang independen untuk mengintegrasikan seluruh data publik, sejalan dengan program Satu Data Indonesia (Perpres No. 39/2019). Peningkatan kapasitas SDM di bidang statistik dan data science juga harus menjadi prioritas. Kebijakan NTB harus dibangun di atas fondasi fakta, bukan fiksi.</p>`
        ];
        rilisData.forEach((item, index) => {
            item.date = new Date(today.setDate(today.getDate() - (index + 1)));
            item.views = Math.floor(Math.random() * 8000) + 500;
            item.slug = createSlug(item.title);
            item.content = contents[index % contents.length] || "<p>Konten belum tersedia.</p>";
        });
    };

    // --- RENDER FUNCTIONS ---
    const createReleaseCardHTML = (item) => {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const formattedDate = new Date(item.date).toLocaleDateString('id-ID', options);
        const formattedViews = item.views > 1000 ? `${(item.views / 1000).toFixed(1)}k` : item.views;
        return `
            <a href="release-detail.html?slug=${item.slug}" class="release-card card-zoom bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group w-full border border-gray-200 hover:shadow-xl transition-shadow duration-300 animate-on-scroll fade-in-bottom">
                <div class="relative overflow-hidden h-40 skeleton">
                    <img src="${item.img}" alt="${item.alt}" class="absolute w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:scale-105" onload="this.classList.remove('opacity-0'); this.parentElement.classList.remove('skeleton');">
                </div>
                <div class="p-4 flex flex-col flex-grow">
                    <h3 class="font-title flex-grow min-h-[54px] text-gray-800 leading-tight">${item.title}</h3>
                    <div class="mt-3 flex items-center justify-between font-subtitle text-gray-500">
                        <div class="flex items-center space-x-1.5"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg><span>${formattedDate}</span></div>
                        <div class="flex items-center space-x-1.5"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg><span>${formattedViews} dilihat</span></div>
                    </div>
                </div>
            </a>`;
    };
    
    const createTeamMemberHTML = (member, index) => `
        <div class="text-center group animate-on-scroll fade-in-bottom card-zoom" data-delay="${index * 100}">
            <div class="relative w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden mx-auto shadow-lg skeleton">
                <img src="${member.img}" alt="Foto ${member.name}" class="absolute w-full h-full object-cover object-center opacity-0 transition-opacity duration-500 group-hover:scale-105" onerror="this.onerror=null;this.src='https://placehold.co/400x400/e2e8f0/cccccc?text=Foto';" onload="this.classList.remove('opacity-0'); this.parentElement.classList.remove('skeleton');">
            </div>
            <h3 class="font-title mt-4 text-[#2918A9]">${member.name}</h3>
            <p class="font-subtitle text-gray-600">${member.position}</p>
        </div>`;

    // --- PAGE-SPECIFIC LOGIC ---
    const pageLogic = {
        'home-content': () => {
            const sortedByViews = [...rilisData].sort((a, b) => b.views - a.views);
            const popularContainer = document.getElementById('rilis-populer-container');
            if (popularContainer) {
                const popularHTML = sortedByViews.slice(0, 6).map(createReleaseCardHTML).join('');
                popularContainer.innerHTML = popularHTML + popularHTML; // Duplicate for seamless loop
            }

            const sortedByDate = [...rilisData].sort((a, b) => new Date(b.date) - new Date(a.date));
            const terbaruContainer = document.getElementById('rilis-terbaru-container');
            if (terbaruContainer) {
                terbaruContainer.innerHTML = sortedByDate.slice(0, 6).map(createReleaseCardHTML).join('');
            }
        },
        'release-content': () => {
            const container = document.getElementById('release-page-container');
            if (container) {
                 const sortedByDate = [...rilisData].sort((a, b) => new Date(b.date) - new Date(a.date));
                container.innerHTML = sortedByDate.map(createReleaseCardHTML).join('');
            }
        },
        'team-content': () => {
            const container = document.getElementById('team-page-container');
            if (container) {
                container.innerHTML = teamData.map(createTeamMemberHTML).join('');
            }
        },
        'database-content': () => {
            ['fakultas_rayon', 'kampus_komisariat', 'kab_kota_cabang'].forEach((id, i) => {
                const key = Object.keys(formData)[i];
                const select = document.getElementById(`${id}_form`);
                if (select) select.innerHTML = '<option value="" selected disabled>Pilih...</option>' + formData[key].map(item => `<option value="${item}">${item}</option>`).join('');
            });
            const ktaForm = document.getElementById('kta-form');
            if (ktaForm) {
                ktaForm.addEventListener('submit', handleFormSubmit);
            }
            const fileInput = document.getElementById('sertifikat_mapaba_form');
            if (fileInput) {
                fileInput.addEventListener('change', () => {
                    document.getElementById('file-chosen').textContent = fileInput.files[0] ? fileInput.files[0].name : 'Tidak ada file yang dipilih';
                });
            }
        },
        'release-detail-content': () => {
            const params = new URLSearchParams(window.location.search);
            const slug = params.get('slug');
            const release = rilisData.find(item => item.slug === slug);

            if (release) {
                document.title = `PKC PMII Bali Nusra - ${release.title}`;
                const options = { day: 'numeric', month: 'long', year: 'numeric' };
                const formattedDate = new Date(release.date).toLocaleDateString('id-ID', options);
                const formattedViews = release.views > 1000 ? `${(release.views / 1000).toFixed(1)}k` : release.views;

                document.getElementById('release-detail-title').textContent = release.title;
                const imgEl = document.getElementById('release-detail-img');
                imgEl.src = release.img;
                imgEl.alt = release.alt;
                document.getElementById('release-detail-meta').innerHTML = `
                    <div class="flex items-center space-x-1.5"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg><span>${formattedDate}</span></div>
                    <div class="flex items-center space-x-1.5"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg><span>${formattedViews} dilihat</span></div>`;
                document.getElementById('release-detail-body').innerHTML = release.content;
                document.getElementById('share-whatsapp').href = `https://api.whatsapp.com/send?text=${encodeURIComponent(release.title + ' ' + window.location.href)}`;
                
                // Populate related articles
                const createRelatedLink = item => `<a href="release-detail.html?slug=${item.slug}" class="related-release-link block py-3 border-b border-gray-200 last:border-b-0"><p class="font-body text-gray-800 transition-colors">${item.title}</p></a>`;
                
                const popularReleases = rilisData.filter(item => item.slug !== slug).sort((a, b) => b.views - a.views).slice(0, 4);
                document.getElementById('related-popular-list').innerHTML = popularReleases.map(createRelatedLink).join('');
                
                const recentReleases = rilisData.filter(item => item.slug !== slug).sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 4);
                document.getElementById('related-recent-list').innerHTML = recentReleases.map(createRelatedLink).join('');
            } else {
                window.location.href = 'index.html'; // Redirect if slug is invalid
            }
        },
        'documentation-content': () => {
             const docListContainer = document.getElementById('documentation-list');
             const docLink = "https://drive.google.com/file/d/13grSe-WlOemxHtpSlcf8Pyg4Ghlx_2pV/view?usp=drivesdk";
             docListContainer.innerHTML = documentListData.map(item => `<a href="${docLink}" target="_blank" rel="noopener noreferrer" class="document-list-item block p-4 hover:bg-gray-50 transition-colors">${item}</a>`).join('');
        },
        'strategic-study-content': () => {
            const studyListContainer = document.getElementById('strategic-study-list');
            const docLink = "https://drive.google.com/file/d/13grSe-WlOemxHtpSlcf8Pyg4Ghlx_2pV/view?usp=drivesdk";
            studyListContainer.innerHTML = strategicStudyListData.map(item => `<a href="${docLink}" target="_blank" rel="noopener noreferrer" class="document-list-item block p-4 hover:bg-gray-50 transition-colors">${item}</a>`).join('');
        }
    };

    // --- GLOBAL FUNCTIONS & EVENT LISTENERS ---
    const showModal = (message) => {
        const modal = document.getElementById('form-modal');
        if (modal) {
            modal.querySelector('#modal-message').textContent = message;
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }
    };

    const hideModal = () => {
        const modal = document.getElementById('form-modal');
        if (modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }
    };
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        let isFormValid = true;
        e.target.querySelectorAll('[required]').forEach(input => {
            if (!input.value) isFormValid = false;
        });
        if (isFormValid) {
            showModal('Formulir berhasil dikirim. Silakan tunggu balasan di email Anda.');
            e.target.reset();
            document.getElementById('file-chosen').textContent = '';
        } else {
            showModal('Harap lengkapi semua kolom formulir yang wajib diisi.');
        }
    };

    const animateCounter = (element) => {
        if (element.dataset.animated) return;
        element.dataset.animated = "true";
        const target = +element.getAttribute('data-target');
        const duration = 1500;
        let start = null;
        const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            element.innerText = Math.floor(progress * target).toLocaleString('id-ID');
            if (progress < 1) window.requestAnimationFrame(step);
            else element.innerText = target.toLocaleString('id-ID');
        };
        window.requestAnimationFrame(step);
    };

    const setupScrollAnimations = () => {
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = parseInt(entry.target.dataset.delay) || 0;
                    setTimeout(() => {
                        entry.target.classList.add('is-visible');
                        const counter = entry.target.querySelector('.count-up');
                        if (counter) animateCounter(counter);
                    }, delay);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        animatedElements.forEach(el => observer.observe(el));
    };
    
    // --- INITIALIZATION ---
    // Preloader
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        if(preloader) {
           preloader.classList.add('hidden');
        }
    });

    // Mobile menu toggle
    document.getElementById('mobile-menu-button')?.addEventListener('click', () => {
        document.getElementById('mobile-menu')?.classList.toggle('hidden');
    });

    // Modal close button
    document.getElementById('modal-close-btn')?.addEventListener('click', hideModal);
    document.getElementById('form-modal')?.addEventListener('click', (e) => {
        if (e.target === e.currentTarget) hideModal();
    });

    // Run all initializations
    initializeData();
    Object.keys(pageLogic).forEach(pageId => {
        if (document.getElementById(pageId)) {
            pageLogic[pageId]();
        }
    });
    setupScrollAnimations();
});
