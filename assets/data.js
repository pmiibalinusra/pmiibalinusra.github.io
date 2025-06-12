/**
 * ===================================================================
 * DATA.JS UNTUK WEBSITE PKC PMII BALI NUSRA
 * ===================================================================
 * Deskripsi:
 * File ini berfungsi sebagai "database" statis untuk website.
 * Semua konten teks, daftar, dan data yang tidak sering berubah
 * disimpan di sini dalam bentuk variabel JavaScript global.
 *
 * `script.js` akan memuat dan menggunakan variabel-variabel ini
 * untuk merender konten secara dinamis ke halaman yang sesuai.
 * ===================================================================
 */

// --- DATA UNTUK HALAMAN RILIS ---

const rawReleases = [
    {
        id: 11,
        img: "https://i.imgur.com/IH91e6G.jpeg",
        title: "Ultimatum Serius Cipayung Plus NTB: Bebaskan 6 Aktivis atau Hadapi Gerakan Massa Serentak!",
        alt: "Ultimatum Serius Cipayung Plus NTB"
    },
    {
        id: 10,
        img: "https://i.imgur.com/0jrXtiK.jpeg",
        title: "PKC PMII Bali Nusra Wujudkan Kepedulian Sosial Melalui Program Berqurban Idul Adha",
        alt: "Kegiatan Berqurban PMII Bali Nusra"
    },
    {
        id: 1,
        img: "https://i.imgur.com/pQpvjsW.jpeg",
        title: "PMII Kaji Stagnasi Ekonomi NTB: Mendesak Adanya Kebijakan Ekonomi Pro-Rakyat",
        alt: "Diskusi Ekonomi NTB oleh PMII"
    },
    {
        id: 2,
        img: "https://i.imgur.com/cPGZUKd.jpeg",
        title: "Tata Kelola Beasiswa NTB Disorot PMII: Mendesak Transparansi dan Meritokrasi",
        alt: "Poster Kajian Beasiswa NTB"
    },
    {
        id: 3,
        img: "https://i.imgur.com/YUKsBna.jpeg",
        title: "Akses Kesehatan NTB Belum Merata, PMII Dorong Peningkatan Anggaran dan Layanan",
        alt: "Aksi PMII terkait Isu Kesehatan NTB"
    },
    {
        id: 4,
        img: "https://i.imgur.com/EN1NwUQ.jpeg",
        title: "PMII Soroti Birokrasi Pariwisata NTB: Hambat Potensi, Perlu Reformasi Digital",
        alt: "Diskusi Pariwisata NTB"
    },
    {
        id: 5,
        img: "https://i.imgur.com/xe4WAXk.jpeg",
        title: "PMII Desak Audit Independen Dana Bansos NTB untuk Cegah Penyelewengan",
        alt: "Poster tentang Bantuan Sosial NTB"
    },
    {
        id: 6,
        img: "https://i.imgur.com/YoJXUt7.jpeg",
        title: "Produktivitas Pertanian NTB Rendah, PMII Usulkan Peningkatan Investasi Infrastruktur",
        alt: "Kondisi Pertanian di NTB"
    },
    {
        id: 7,
        img: "https://i.imgur.com/WFA7Zqy.jpeg",
        title: "Pembangunan Infrastruktur NTB Belum Inklusif, PMII Serukan Pemerataan Anggaran",
        alt: "Infrastruktur di salah satu daerah di NTB"
    },
    {
        id: 8,
        img: "https://i.imgur.com/AXPtLYm.jpeg",
        title: "PMII Evaluasi Kinerja Gubernur NTB: Realisasi Janji Pembangunan Belum Optimal",
        alt: "Gedung Kantor Gubernur NTB"
    },
    {
        id: 9,
        img: "https://i.imgur.com/eXlEdhJ.jpeg",
        title: "PMII Desak Integrasi Data Terpadu di NTB untuk Kebijakan Berbasis Fakta",
        alt: "Visualisasi data digital"
    }
];

// Konten detail untuk setiap rilis. Urutan harus sesuai dengan ID pada `rawReleases`.
const contents = [
    // [11] untuk id:11
    '<p>Mataram - Merespon aksi demonstrasi damai Cipayung Plus Cabang Bima hingga berujung dipenjara, Cipayung Plus Provinsi NTB menggelar konferensi Pers di Mapolda NTB. Rabu, (11/06/25).</p><p>Organisasi Kemasyarakatan Pemuda (OKP) yang tergabung dalam Cipayung Plus Provinsi NTB yakni, PKC PMII Bali Nusra, BADKO HMI Bali Nusra, DPD GMNI NTB, PW KAMMI NTB, PD KMHDI NTB, EW LMND NTB, DPD IMM NTB.</p><p>Ketua Umum BADKO HMI Bali Nusra Caca Handika mengatakan kehadiran Cipayung Plus NTB melakukan konferensi pers menuntut terkait dengan penahanan 6 aktivis Cipayung Plus Bima yang melakukan aksi demonstrasi damai di Bandar Sultan Muhammad Salahuddin Bima, pada tanggal 28, Mei 2025 hari lalu hingga sampai sekarang masih di tahan di Polda NTB.</p><p>"Kami kecewa dengan sikap Kapolda NTB tidak memberikan kesempatan untuk kami melakukan konferensi di dalam area Polda NTB," ujar Caca Handika.</p><p>Lebih lanjut Caca Handika, kami menilai AKBP Eko Sutomo, S.I.K.,M.I.K Kapolres Kabupaten Bima melakukan manuver untuk menghambat upaya proses mediasi ditingkat penyelidikan secara non litigasi dengan menetapkan mereka sebagai tersangka melalui konferensi pers pada tanggal 31, Mei 2025.</p><p>Semestinya Kapolres harus berkoordinasi dengan Pemerintah Kabupaten Bima sebagai pihak terlapor, sebelum menetapkan tersangka, karena keterangan pihak yang dirugikan perlu di dengar, apakah kasus ini perlu dilanjutkan atau tidak.</p><p>"Dilihat dari kedudukan hukum, perbuatan mereka masuk kategori tindak pidana ringan, jadi langkah penyelesaian cukup melalui proses Restorative Justice, tanpa harus diproses lebih lanjut, dan diperbesarkan," tutur Ketua BADKO HMI.</p><p>PKC PMII Bali Nusra Ahmad Muzakkir menegaskan, Cipayung Plus NTB menilai Kapolres Kabupaten Bima AKBP Eko Sutomo, sengaja menghambat upaya proses perdamaian dalam kasus yang menjerat keenam mahasiswa tersebut. Kasus ini semestinya dapat diselesaikan melalui pendekatan hukum yang berkeadilan dan manusiawi, yakni melalui mekanisme restorative justice, sesuai dengan prinsip-prinsip hukum progresif dan semangat pembinaan terhadap generasi muda bangsa.</p><p>"Ketika pernyataan sikap ini tidak diindahkan oleh Kapolda NTB maka kami pastikan Cipayung Plus NTB akan kembali dengan ribuan massa dalam waktu dekat ini," tegas Ketua PKC PMII.</p><p>Tak hanya itu, Ketua DPD IMM NTB Mahmud menyesalkan sikap Kapolres Bima telah menujukan gestur arogansi dalam penetapan tersangka yang sangat tergesah-tergesah tanpa memberikan ruang para pihak untuk berdialog dan perlindungan hukum dalam proses pemeriksaan perkara quo, dan lebih konyolnya lagi sehari setelah Pemberitahuan Perlengkapan Berkas Perkara (P21), para tahanan tersebut di kirim ke Kapolda NTB, tanpa alasan yang jelas.</p><p>Sementara locus tempus delicti penyelidikan di wilayah Polres Kabupaten Bima. Atas sikapnya Kapolres Bima, AKBP Eko Sutomo sengaja menghalangi upaya restorative justice agar tidak terjadi resolusi damai antara kedua belak pihak.</p><p>"Kuat dugaan bahwa adanya penghambatan proses restorative justice oleh Kapolres Bima," sesal Mahmud.</p><p>Kata dia, Tindakan ini kami anggap sebagai bentuk arogansi kekuasaan yang tidak sejalan dengan nilai-nilai keadilan, demokrasi, serta perlindungan terhadap kebebasan sipil, dan juga memperkeruh hubungan antara warga sipil, dan aparat. Perbuatan ini dipandang sebagai bentuk kriminalisasi terhadap ekspresi demokratis yang memperjuang aspirasi rakyat.</p><p>"Kapolres Bima seharusnya menjadi jembatan bagi penyelesaian yang adil dan damai, bukan justru menjadi penghalang dalam proses hukum yang menjunjung tinggi kemanusiaan," kata Ketua DPD IMM.</p><p>Senada, Ketua PW KAMMI NTB Iwan Julkarnain, kehadiran kami bukan hanya retorika belaka, melainkan ini adalah ultimatum serius terhadap proses penegakan hukum di wilayah NTB.</p><p>"Kami menduga bahwa Kapolres Bima dan Kapolda NTB salah satu upaya untuk membungkam gerakan-gerakan dan kami akan mengintruksikan kepada seluruh daerah agar melakukan gerakan serentak untuk menuntut bebaskan 6 aktivis yang di tahan di Polda ini," kecam Iwan Julkarnain.</p><p>Ketua DPD GMNI NTB Al Mukmin Betika mendesak Kapolri, Komnas HAM, Kompolnas serta lembaga-lembaga pengawas lainnya untuk turun tangan dan mengevaluasi sikap Polres Bima yang dianggap kontraproduktif terhadap penyelesaian konflik secara damai dan beradab, serta mengabaikan Surat Edaran Kapolri.</p><p>"Berdasarkan surat Kapolri, Nomor SE/2/II/2021 yang menegaskan pentingnya pendekatan Restorative Justice dalam penanganan perkara-perkara tertentu, terutama yang tidak menimbulkan korban jiwa atau berpotensi menciptakan konflik sosial berkepanjangan," desakan Al Mukmin Betika.</p><p>CIPAYUNG PLUS PROVINSI NTB MENYATAKAN SIKAP:</p><p>1. MENDESAK KEPOLISIAN REPUBLIK INDONESIA BAPAK JENDERAL LISTYO SIGIT PRABOWO UNTUK MENCOPOT KAPOLRES KABUPATEN BIMA AKB EKO SUTOMO BIMA ATAS PENOLAKAN RESTORATIVE JUSTICE.</p><p>2. MEMINTA KEPADA KAPOLRI BAPAK JENDERAL LISTYO SIGIT PRABOWO UNTUK MEMBEBASKAN KE-ENAM MAHASISWA YANG DI TAHAN DI POLDA NTB TANPA SYARAT.</p><p>3. MEMINTA KEPADA KAPOLRI BAPAK JENDERAL LISTYO SIGIT PRABOWO UNTUK MENGEVALUASI KAPOLDA NTB IRJEN. POL. HADI GUNAWAN, SH., S.I.K KARENA GAGAL MEMBERIKAN EDUKASI PELAYANAN KAMTIBMAS PRESISI.</p><p>4. MENYERUKAN PENERAPAN PRINSIP KEADILAN RESTORATIF DALAM SETIAP PENYELESAIAN KONFLIK SOSIAL YANG TIDAK MENGANDUNG UNSUR KEKERASAN BERAT.</p>',
    // [0] untuk id:10
    `<p>Mataram – Sebagai wujud komitmen dalam memperkuat nilai spiritual dan solidaritas sosial, Pengurus Koordinator Cabang Pergerakan Mahasiswa Islam Indonesia (PKC PMII) Bali Nusra kembali menggelar program berqurban untuk menyambut Hari Raya Idul Adha 1446 H.</p><p>Kegiatan yang berpusat di Sekretariat PKC PMII Bali Nusra ini berhasil menyalurkan hewan qurban kepada kader-kader PMII dan masyarakat sekitar yang membutuhkan. Prosesi penyembelihan dan distribusi dilakukan secara gotong royong, melibatkan partisipasi aktif para kader sebagai bentuk implementasi nilai-nilai kebersamaan.</p><p>Ketua PKC PMII Bali Nusra, Ahmad Muzakkir, menyatakan bahwa kegiatan ini adalah manifestasi dari ajaran Islam sebagai rahmatan lil 'alamin. “Berqurban bukan sekadar ritual, melainkan simbol pengorbanan, keikhlasan, dan kepedulian. Melalui program ini, PMII menegaskan kehadirannya yang tidak hanya di ruang-ruang diskusi, tetapi juga di tengah denyut nadi persoalan masyarakat,” ujarnya.</p><p>Kegiatan ini sekaligus menjadi momentum untuk memperkuat internalisasi nilai-nilai Ahlussunnah wal Jamaah (Aswaja) di kalangan kader. Dengan semangat ukhuwah islamiyah, PMII Bali Nusra berkomitmen untuk terus menggulirkan program-program yang memberikan dampak positif dan nyata bagi kemaslahatan umat dan bangsa.</p>`,
    // [1] untuk id:1
    `<p>Mataram – PKC PMII Bali Nusra menyoroti kondisi perekonomian Nusa Tenggara Barat (NTB) yang menunjukkan tanda-tanda stagnasi. Berdasarkan data Badan Pusat Statistik (BPS) NTB 2023, pertumbuhan ekonomi provinsi ini hanya mencapai 4,5%, angka yang masih di bawah target Rencana Pembangunan Jangka Menengah Daerah (RPJMD). Ketergantungan pada sektor pariwisata terbukti belum mampu menjadi motor penggerak ekonomi yang inklusif bagi seluruh lapisan masyarakat.</p><p>Data lebih lanjut menunjukkan Indeks Pembangunan Manusia (IPM) yang stagnan dan tingkat pengangguran terbuka yang masih di atas rata-rata nasional. PMII Bali Nusra menilai, tanpa strategi yang inklusif, narasi 'lomba investasi' tidak akan berdampak signifikan bagi kesejahteraan masyarakat luas, terutama bagi para petani dan nelayan yang menjadi tulang punggung ekonomi lokal.</p><p>Sebagai solusi, PMII mendorong adanya refocusing kebijakan ekonomi yang berbasis pada pemberdayaan masyarakat lokal. Mengacu pada konsep ekonomi kerakyatan, pemerintah daerah didesak untuk meningkatkan alokasi anggaran APBD untuk sektor koperasi dan UMKM. Tanpa langkah konkret ini, pertumbuhan ekonomi NTB hanya akan menjadi statistik yang tidak dirasakan manfaatnya oleh rakyat kecil.</p>`,
    // [2] untuk id:2
    `<p>Mataram – Transparansi dan akuntabilitas program beasiswa Pemerintah Provinsi NTB menjadi sorotan tajam PKC PMII Bali Nusra. Meskipun alokasi anggaran yang signifikan telah digulirkan, data internal PMII menunjukkan adanya potensi ketidaktepatan sasaran, di mana porsi untuk aktivis kritis dan mahasiswa kurang mampu belum optimal.</p><p>Mengacu pada kajian Transparency International Indonesia (2022) yang menyoroti rendahnya skor integritas pengelolaan dana publik di NTB, PMII mendesak adanya evaluasi menyeluruh. Kondisi ini menimbulkan pertanyaan mendasar: apakah program beasiswa telah berjalan sesuai prinsip keadilan dan transparansi, atau berisiko menjadi alat politis?</p><p>PMII mengusulkan reformasi total tata kelola beasiswa dengan membentuk komite seleksi independen yang melibatkan akademisi dan perwakilan organisasi mahasiswa. Selain itu, publikasi data penerima secara daring dan berkala adalah langkah mutlak untuk memastikan akuntabilitas, sejalan dengan amanat Undang-Undang Keterbukaan Informasi Publik (KIP) tahun 2008. Beasiswa harus menjadi investasi masa depan, bukan komoditas politik.</p>`,
    // [3] untuk id:3
    `<p>Mataram – PKC PMII Bali Nusra menyoroti masih adanya ketimpangan akses layanan kesehatan di Nusa Tenggara Barat (NTB). Data Dinas Kesehatan NTB (2023) menunjukkan rasio tenaga medis per penduduk yang masih di bawah standar WHO, serta Angka Kematian Ibu (AKI) yang tergolong tinggi. Hal ini diperparah dengan alokasi anggaran kesehatan dalam APBD yang belum memenuhi amanat UU Kesehatan sebesar 10%.</p><p>Program "NTB Sehat" yang telah berjalan dinilai belum menunjukkan hasil yang signifikan dan merata, terutama di wilayah-wilayah terpencil. PMII menilai, kebijakan kesehatan harus fokus pada hasil yang terukur, bukan sekadar retorika dan program seremonial.</p><p>Untuk itu, PMII mendorong pemerintah daerah untuk meningkatkan alokasi anggaran kesehatan hingga 15% dari APBD. Dana tersebut harus diprioritaskan untuk rekrutmen tenaga medis, pembangunan puskesmas di daerah terpencil, dan penguatan sistem kesehatan primer. Mengadopsi teknologi telemedicine, seperti yang direkomendasikan WHO, juga bisa menjadi solusi untuk menjangkau masyarakat di kepulauan. Tanpa langkah strategis ini, "NTB Sehat" hanya akan menjadi slogan.</p>`,
    // [4] untuk id:4
    `<p>Mataram – Sektor pariwisata sebagai andalan ekonomi NTB dinilai masih terhambat oleh persoalan birokrasi. PKC PMII Bali Nusra mencatat, meskipun kunjungan wisatawan meningkat, kontribusinya terhadap Pendapatan Asli Daerah (PAD) belum optimal. Keluhan dari para pelaku industri mengenai perizinan yang rumit dan pungutan tidak resmi menjadi bukti adanya inefisiensi sistemik.</p><p>Mengutip laporan Ombudsman RI (2022), PMII menyoroti bahwa indeks kemudahan berusaha di sektor pariwisata NTB masih perlu perbaikan signifikan. Selain itu, fokus pembangunan yang terlalu terpusat di Mandalika berisiko menciptakan ketimpangan dan mengabaikan potensi besar di wilayah lain seperti Sumbawa dan Dompu.</p><p>PMII mendesak adanya reformasi birokrasi pariwisata melalui digitalisasi layanan. Penerapan sistem perizinan terpadu (One-Stop Service) dan promosi destinasi non-Mandalika secara masif adalah kunci untuk membuka potensi ekonomi secara lebih merata. Pariwisata harus menjadi motor penggerak yang inklusif, bukan sekadar proyek mercusuar.</p>`,
    // [5] untuk id:5
    `<p>Mataram – PKC PMII Bali Nusra menyerukan pengawasan ketat terhadap penyaluran dana bantuan sosial (bansos) di NTB. Temuan Badan Pemeriksa Keuangan (BPK) tahun 2022 mengenai adanya penyimpangan distribusi dan data Kemensos (2023) yang menunjukkan ketidaktepatan sasaran penerima menjadi alarm serius bagi akuntabilitas pemerintah daerah.</p><p>PMII menegaskan bahwa dana bansos adalah hak rakyat miskin dan sangat rentan disalahgunakan untuk kepentingan politik atau pribadi. Buruknya validasi data dan lemahnya mekanisme pengawasan menjadi celah bagi potensi korupsi, seperti yang pernah diungkap oleh Indonesia Corruption Watch (ICW).</p><p>Sebagai langkah konkret, PMII mendesak dilakukannya audit independen dan menyeluruh terhadap semua program bansos oleh lembaga yang kredibel seperti BPKP, dengan melibatkan partisipasi aktif dari masyarakat sipil sebagai pengawas eksternal. Sesuai amanat UU No. 13/2011, data penerima harus divalidasi dan dipublikasikan secara transparan. Bansos harus menjadi jaring pengaman sosial yang efektif, bukan ladang korupsi.</p>`,
    // [6] untuk id:6
    `<p>Mataram – Sektor pertanian NTB, yang menjadi tumpuan hidup mayoritas penduduk, menghadapi tantangan serius terkait produktivitas dan infrastruktur. PKC PMII Bali Nusra mencatat, produktivitas padi yang masih di bawah rata-rata nasional dan ketergantungan tinggi pada irigasi tadah hujan menunjukkan perlunya intervensi kebijakan yang lebih strategis.</p><p>Minimnya alokasi anggaran untuk infrastruktur pertanian, rendahnya adopsi teknologi, dan kelangkaan pupuk bersubsidi menjadi akar masalah yang menghambat kesejahteraan petani. PMII menilai, tanpa keberpihakan kebijakan yang nyata, sektor pertanian akan terus tertinggal.</p><p>Oleh karena itu, PMII mengusulkan peningkatan investasi pada infrastruktur pertanian, terutama untuk modernisasi irigasi, serta penguatan program subsidi input pertanian yang tepat sasaran. Sesuai rekomendasi FAO, pemerintah juga perlu menggencarkan program pelatihan teknologi pertanian 4.0 untuk menarik minat generasi muda dan meningkatkan produktivitas secara berkelanjutan.</p>`,
    // [7] untuk id:7
    `<p>Mataram – Arah pembangunan infrastruktur di NTB dinilai belum sepenuhnya inklusif dan merata. PKC PMII Bali Nusra menyoroti konsentrasi anggaran yang tidak proporsional pada proyek-proyek di kawasan strategis pariwisata, sementara kondisi jalan di banyak pedesaan masih memprihatinkan. Data BPS (2022) yang menunjukkan 35% jalan desa dalam kondisi rusak berat menjadi bukti nyata ketimpangan ini.</p><p>PMII menilai, pembangunan infrastruktur tidak boleh hanya melayani kepentingan investor atau menjadi "proyek prestise" elit politik. Konektivitas antarwilayah adalah kunci untuk membuka isolasi, mengurangi biaya logistik, dan mendorong pertumbuhan ekonomi yang merata.</p><p>PMII menyerukan adanya realokasi anggaran infrastruktur yang lebih adil, dengan porsi minimal 50% untuk wilayah pedesaan, sejalan dengan semangat UU Desa. Pendekatan perencanaan partisipatif yang melibatkan warga secara langsung harus menjadi norma baru, memastikan infrastruktur dibangun berdasarkan kebutuhan riil masyarakat, bukan keinginan segelintir pihak.</p>`,
    // [8] untuk id:8
    `<p>Mataram – PKC PMII Bali Nusra melakukan evaluasi kritis terhadap kinerja Gubernur NTB dalam merealisasikan janji-janji kampanye yang tertuang dalam RPJMD 2018-2023. Data BPS menunjukkan bahwa beberapa target makro, seperti pertumbuhan ekonomi dan penurunan angka kemiskinan, belum tercapai secara optimal.</p><p>PMII menilai bahwa kepemimpinan yang efektif diukur dari implementasi kebijakan yang berdampak nyata, bukan sekadar retorika. Janji industrialisasi, reformasi birokrasi, dan pemberdayaan masyarakat perlu diwujudkan dalam program yang terukur dan akuntabel.</p><p>Sebagai bagian dari fungsi kontrol sosial, PMII mendorong adanya evaluasi kinerja yang transparan dan partisipatif oleh DPRD, dengan melibatkan akademisi dan organisasi masyarakat sipil. Sesuai amanat UU Pemerintahan Daerah, pemerintah daerah wajib menerbitkan laporan kinerja tahunan yang dapat diakses publik. Kepemimpinan harus dipertanggungjawabkan melalui data dan fakta, bukan klaim sepihak.</p>`,
    // [9] untuk id:9
    `<p>Mataram – Akurasi dan integrasi data pemerintah di NTB menjadi perhatian serius PKC PMII Bali Nusra. Adanya inkonsistensi data antar-instansi, seperti data kemiskinan antara BPS dan Dinas Sosial, serta temuan BPK mengenai ketidaksinkronan data program, menunjukkan adanya masalah fundamental dalam tata kelola data.</p><p>PMII menegaskan bahwa kebijakan publik yang efektif harus didasarkan pada data yang valid dan andal. Tanpa data yang akurat, perencanaan pembangunan akan salah arah, dan alokasi sumber daya menjadi tidak efisien. Buruknya manajemen data melanggar prinsip pemerintahan yang baik dan amanat UU Keterbukaan Informasi Publik.</p><p>Untuk mengatasi masalah ini, PMII mendesak pembentukan Badan Data Daerah yang independen untuk mengintegrasikan seluruh data publik, sejalan dengan program Satu Data Indonesia (Perpres No. 39/2019). Peningkatan kapasitas SDM di bidang statistik dan data science juga harus menjadi prioritas. Kebijakan NTB harus dibangun di atas fondasi fakta, bukan fiksi.</p>`
];


// --- DATA UNTUK HALAMAN TIM ---

const teamData = [
    { name: 'Ahmad Muzakkir', position: 'Ketua Koordinator Cabang', img: 'https://i.imgur.com/pc7LDOU.png' },
    { name: 'Nurhalifah', position: 'Ketua KOPRI PKC', img: 'https://i.imgur.com/EoxOIsB.png' },
    { name: 'Budi Santoso', position: 'Sekretaris Umum', img: 'https://i.imgur.com/pc7LDOU.png' },
    { name: 'Siti Aminah', position: 'Bendahara Umum', img: 'https://i.imgur.com/EoxOIsB.png' },
    { name: 'Eko Prasetyo', position: 'Wk. Ketua Bidang Kaderisasi', img: 'https://i.imgur.com/pc7LDOU.png' },
    { name: 'Dewi Lestari', position: 'Wk. Ketua Bidang Keagamaan', img: 'https://i.imgur.com/EoxOIsB.png' },
    { name: 'Agus Wijaya', position: 'Wk. Ketua Bidang Advokasi', img: 'https://i.imgur.com/pc7LDOU.png' },
    { name: 'Rina Hartati', position: 'Wk. Ketua Bidang Media', img: 'https://i.imgur.com/EoxOIsB.png' },
    { name: 'Fajar Nugroho', position: 'Wk. Sekretaris Kaderisasi', img: 'https://i.imgur.com/pc7LDOU.png' },
    { name: 'Fitriani', position: 'Wk. Sekretaris Keagamaan', img: 'https://i.imgur.com/EoxOIsB.png' },
    { name: 'Hadi Susanto', position: 'Wk. Sekretaris Advokasi', img: 'https://i.imgur.com/pc7LDOU.png' },
    { name: 'Indah Permata', position: 'Wk. Sekretaris Media', img: 'https://i.imgur.com/EoxOIsB.png' },
    { name: 'Joko Purwanto', position: 'Wk. Bendahara I', img: 'https://i.imgur.com/pc7LDOU.png' },
    { name: 'Lia Marlina', position: 'Wk. Bendahara II', img: 'https://i.imgur.com/EoxOIsB.png' },
    { name: 'Muhammad Iqbal', position: 'Biro Kaderisasi', img: 'https://i.imgur.com/pc7LDOU.png' },
    { name: 'Nadia Putri', position: 'Biro Kaderisasi', img: 'https://i.imgur.com/EoxOIsB.png' }
];


// --- DATA UNTUK HALAMAN DOKUMENTASI & KAJIAN ---

const documentsData = [
    "Agenda Pelatihan Kader Dasar PMII Bali Nusra 2025",
    "Daftar Hadir Aksi Damai PMII NTB untuk Keadilan Sosial",
    "Dokumentasi Visual Seminar Nasional PMII: Masa Depan NTB",
    "Laporan Keuangan Musyawarah Cabang PMII Denpasar 2025",
    "Laporan Naratif Aksi Solidaritas PMII Bali untuk Petani",
    "Notulensi Rapat Koordinasi PMII Bali Nusra Juni 2025",
    "Poster Promosi Dialog Publik PMII: Isu Lingkungan NTB",
    "Proposal Pelatihan Jurnalistik PMII NTT 2025",
    "Surat Izin Demo PMII Bali di Kantor Gubernur NTB",
    "Surat Undangan Seminar Kepemimpinan PMII Bali Nusra 2025"
];

const studiesData = [
    "Analisis Isu: Dampak Kebijakan Pariwisata NTB 2025",
    "Position Paper PMII: Sikap Terhadap Kebijakan Ekonomi NTB",
    "Laporan Kajian PMII: Krisis Pendidikan di NTT 2025",
    "Makalah: Strategi PMII Atasi Ketimpangan Sosial Bali",
    "Notulensi Diskusi PMII: Solusi Korupsi di NTB",
    "Policy Brief PMII: Reformasi Kesehatan Masyarakat NTB",
    "Rancangan Aksi PMII: Advokasi Bantuan Sosial NTB 2025",
    "Referensi Data: Statistik Kemiskinan Bali-Nusra 2025",
    "Resume Diskusi PMII: Isu Infrastruktur NTB 2025",
    "Survei PMII: Persepsi Mahasiswa soal Kebijakan Gubernur"
];


// --- DATA UNTUK FORMULIR KTA (HALAMAN DATABASE) ---

const formData = {
    fakultas: [
        "Fakultas Adab dan Humaniora", "Fakultas Agama Islam", "Fakultas Agribisnis",
        "Fakultas Akuntansi", "Fakultas Arsitektur", "Fakultas Bahasa dan Sastra",
        "Fakultas Biologi", "Fakultas Dakwah dan Komunikasi", "Fakultas Ekonomi dan Bisnis",
        "Fakultas Farmasi", "Fakultas Filsafat", "Fakultas Geografi", "Fakultas Hukum",
        "Fakultas Ilmu Budaya", "Fakultas Ilmu Komputer", "Fakultas Ilmu Pendidikan",
        "Fakultas Ilmu Sosial dan Ilmu Politik", "Fakultas Kedokteran", "Fakultas Kedokteran Hewan",
        "Fakultas Kehutanan", "Fakultas Keguruan dan Ilmu Pendidikan", "Fakultas Kesehatan Masyarakat",
        "Fakultas Matematika dan Ilmu Pengetahuan Alam", "Fakultas Pariwisata", "Fakultas Pertanian",
        "Fakultas Peternakan", "Fakultas Psikologi", "Fakultas Sains dan Teknologi",
        "Fakultas Syariah dan Hukum", "Fakultas Tarbiyah dan Keguruan", "Fakultas Teknik"
    ],
    kampus: [
        "Institut Agama Hindu Negeri Gde Pudja Mataram", "Institut Agama Islam Negeri Kupang",
        "Institut Kesenian Denpasar", "Politeknik Negeri Bali", "Politeknik Negeri Kupang",
        "Politeknik Pertanian Negeri Kupang", "Universitas Mataram", "Universitas Nahdlatul Ulama Nusa Tenggara Barat",
        "Universitas Nusa Cendana", "Universitas Pendidikan Ganesha", "Universitas Udayana",
        "Universitas Islam Al-Azhar Mataram", "Universitas Hamzanwadi", "Universitas Mahasaraswati Denpasar",
        "Universitas Muhammadiyah Kupang", "Universitas Muhammadiyah Mataram", "Universitas Pendidikan Nasional",
        "Universitas Warmadewa", "Sekolah Tinggi Agama Islam Nahdlatul Ulama Bali"
    ],
    kabKota: [
        "Kabupaten Alor", "Kabupaten Badung", "Kabupaten Bangli", "Kabupaten Belu",
        "Kabupaten Bima", "Kabupaten Buleleng", "Kabupaten Dompu", "Kabupaten Ende",
        "Kabupaten Flores Timur", "Kabupaten Gianyar", "Kabupaten Jembrana",
        "Kabupaten Karangasem", "Kabupaten Klungkung", "Kabupaten Kupang",
        "Kabupaten Lembata", "Kabupaten Lombok Barat", "Kabupaten Lombok Tengah",
        "Kabupaten Lombok Timur", "Kabupaten Lombok Utara", "Kabupaten Malaka",
        "Kabupaten Manggarai", "Kabupaten Manggarai Barat", "Kabupaten Manggarai Timur",
        "Kabupaten Nagekeo", "Kabupaten Ngada", "Kabupaten Rote Ndao",
        "Kabupaten Sabu Raijua", "Kabupaten Sikka", "Kabupaten Sumba Barat",
        "Kabupaten Sumba Barat Daya", "Kabupaten Sumba Tengah", "Kabupaten Sumba Timur",
        "Kabupaten Sumbawa", "Kabupaten Sumbawa Barat", "Kabupaten Tabanan",
        "Kabupaten Timor Tengah Selatan", "Kabupaten Timor Tengah Utara",
        "Kota Bima", "Kota Denpasar", "Kota Kupang", "Kota Mataram"
    ]
};
