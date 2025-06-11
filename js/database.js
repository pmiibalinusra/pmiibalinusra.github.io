document.addEventListener('DOMContentLoaded', () => {
    // Data untuk dropdown form
    const formData = {"fakultas":["Fakultas Adab dan Humaniora","Fakultas Agama Islam","Fakultas Agribisnis","Fakultas Agroteknologi","Fakultas Akuntansi","Fakultas Arsitektur","Fakultas Arsitektur dan Desain","Fakultas Bahasa dan Sastra","Fakultas Bahasa dan Seni","Fakultas Biologi","Fakultas Bisnis","Fakultas Bisnis dan Ekonomi","Fakultas Bisnis dan Pariwisata","Fakultas Dakwah dan Komunikasi","Fakultas Desain","Fakultas Ekonomi","Fakultas Ekonomi dan Bisnis","Fakultas Ekonomi dan Bisnis Islam","Fakultas Ekonomi dan Manajemen","Fakultas Farmasi","Fakultas Filsafat","Fakultas Fisika","Fakultas Geografi","Fakultas Hukum","Fakultas Hukum dan Ilmu Sosial","Fakultas Ilmu Agama Islam","Fakultas Ilmu Budaya","Fakultas Ilmu Komputer","Fakultas Ilmu Pendidikan","Fakultas Ilmu Politik","Fakultas Ilmu Sosial","Fakultas Ilmu Sosial dan Ilmu Politik","Fakultas Kedokteran","Fakultas Kedokteran dan Ilmu Kesehatan","Fakultas Kedokteran dan Kedokteran Hewan","Fakultas Kedokteran Gigi","Fakultas Kedokteran Hewan","Fakultas Kehutanan","Fakultas Keguruan dan Ilmu Pendidikan","Fakultas Kesenian","Fakultas Kesehatan Masyarakat","Fakultas Keperawatan","Fakultas Kimia","Fakultas Matematika dan Ilmu Pengetahuan Alam","Fakultas Olahraga dan Kesehatan","Fakultas Pariwisata","Fakultas Pertanian","Fakultas Peternakan","Fakultas Peternakan, Kelautan, dan Perikanan","Fakultas Psikologi","Fakultas Sains","Fakultas Sains dan Teknologi","Fakultas Seni dan Desain","Fakultas Syariah dan Hukum","Fakultas Tarbiyah dan Keguruan","Fakultas Teknik","Fakultas Teknik dan Pendidikan Vokasi","Fakultas Teologi","Fakultas Teologi dan Filsafat","Fakultas Teknologi Industri","Fakultas Teknologi Informasi","Fakultas Teknologi Pangan","Fakultas Teknologi Pangan dan Agroindustri","Fakultas Ushuluddin dan Filsafat"],"kampus":["Akademi Akuntansi Denpasar (Swasta, Bali)","Akademi Bahasa Asing Bali (Swasta, Bali)","Akademi Kebidanan Bina Usada Bali (Swasta, Bali)","Akademi Keperawatan Yaspenmas Mataram (Swasta, NTB)","Akademi Komunikasi Media Radio dan Televisi Denpasar (Swasta, Bali)","Akademi Komunitas Mapalus Minahasa (Swasta, NTT)","Akademi Komunitas Negeri Sumba Timur (Negeri, NTT)","Akademi Pariwisata Denpasar (Swasta, Bali)","Akademi Sekretari Manajemen Mataram (Swasta, NTB)","Institut Agama Hindu Negeri Gde Pudja Mataram (Negeri, NTB)","Institut Agama Islam Al-Gazali Sumbawa Besar (Swasta, NTB)","Institut Agama Islam Hamzanwadi Lombok Timur (Swasta, NTB)","Institut Agama Islam Negeri Kupang (Negeri, NTT)","Institut Agama Kristen Negeri Kupang (Negeri, NTT)","Institut Keguruan dan Ilmu Pendidikan Mataram (Swasta, NTB)","Institut Kesenian Denpasar (Negeri, Bali)","Institut Pendidikan Nusantara Global (Swasta, NTB)","Politeknik Elbajo Commodus (Swasta, NTB)","Politeknik Katolik Santu Paulus Ruteng (Swasta, NTT)","Politeknik Kesehatan Kemenkes Denpasar (Negeri, Bali)","Politeknik Kesehatan Kemenkes Kupang (Negeri, NTT)","Politeknik Kelautan dan Perikanan Sumbawa (Negeri, NTB)","Politeknik Negeri Bali (Negeri, Bali)","Politeknik Negeri Kupang (Negeri, NTT)","Politeknik Pertanian Negeri Kupang (Negeri, NTT)","Sekolah Tinggi Agama Hindu Negeri Mpu Kuturan Singaraja (Negeri, Bali)","Sekolah Tinggi Agama Hindu Negeri Tampuagan Amlapura (Negeri, Bali)","Sekolah Tinggi Agama Islam Al-Amin Dompu (Swasta, NTB)","Sekolah Tinggi Agama Islam Al-Falah Praya Lombok Tengah (Swasta, NTB)","Sekolah Tinggi Agama Islam Al-Manshur (Swasta, NTB)","Sekolah Tinggi Agama Islam Badrus Sholeh (Swasta, NTB)","Sekolah Tinggi Agama Islam Darul Kamal (Swasta, NTB)","Sekolah Tinggi Agama Islam Darul Ulum Bima (Swasta, NTB)","Sekolah Tinggi Agama Islam Nahdlatul Ulama Bali (Swasta, Bali)","Sekolah Tinggi Agama Islam Negeri Maulana Malik Ibrahim Bima (Negeri, NTB)","Sekolah Tinggi Agama Kristen Protestan Negeri Kupang (Negeri, NTT)","Sekolah Tinggi Ilmu Administrasi Mataram (Swasta, NTB)","Sekolah Tinggi Ilmu Administrasi Menara Siswa (Swasta, NTB)","Sekolah Tinggi Ilmu Ekonomi 45 Mataram (Swasta, NTB)","Sekolah Tinggi Ilmu Ekonomi AMM (Swasta, NTB)","Sekolah Tinggi Ilmu Ekonomi Bima (Swasta, NTB)","Sekolah Tinggi Ilmu Ekonomi Dwipa Wacana (Swasta, NTB)","Sekolah Tinggi Ilmu Ekonomi Inter Studi (Swasta, Bali)","Sekolah Tinggi Ilmu Ekonomi Satya Dharma (Swasta, Bali)","Sekolah Tinggi Ilmu Ekonomi Triatma Mulya (Swasta, Bali)","Sekolah Tinggi Ilmu Hukum dan Politik Kesuma Negara (Swasta, Bali)","Sekolah Tinggi Ilmu Kesehatan Bali (Swasta, Bali)","Sekolah Tinggi Ilmu Kesehatan Buleleng (Swasta, Bali)","Sekolah Tinggi Ilmu Kesehatan Wira Medika Bali (Swasta, Bali)","Sekolah Tinggi Ilmu Komputer Bali (Swasta, Bali)","Sekolah Tinggi Ilmu Manajemen Handayani (Swasta, Bali)","Sekolah Tinggi Ilmu Sosial dan Ilmu Politik Bina Putera (Swasta, NTT)","Sekolah Tinggi Ilmu Sosial dan Ilmu Politik Kesuma Negara (Swasta, Bali)","Sekolah Tinggi Pariwisata Bali Internasional (Swasta, Bali)","Sekolah Tinggi Pariwisata Nusa Dua Bali (Swasta, Bali)","Sekolah Tinggi Pariwisata Triatma Jaya (Swasta, Bali)","Sekolah Tinggi Pertanian Wuna Raha (Swasta, NTT)","Sekolah Tinggi Teknologi Nusantara (Swasta, Bali)","Universitas 17 Agustus 1945 Bima (Swasta, NTB)","Universitas Alor (Swasta, NTT)","Universitas Bali Dwipa (Swasta, Bali)","Universitas Cordewa (Swasta, NTT)","Universitas Dhyana Pura (Swasta, Bali)","Universitas Flores (Swasta, NTT)","Universitas Gunung Rinjani (Swasta, NTB)","Universitas Hamzanwadi (Swasta, NTB)","Universitas Hindu Indonesia (Swasta, Bali)","Universitas Iqra Buru (Swasta, NTT)","Universitas Islam Al-Azhar Mataram (Swasta, NTB)","Universitas Katolik Widya Mandira (Swasta, NTT)","Universitas Kristen Artha Wacana (Swasta, NTT)","Universitas Kristen Wira Wacana Sumba (Swasta, NTT)","Universitas Mahasaraswati Denpasar (Swasta, Bali)","Universitas Mahendradatta (Swasta, Bali)","Universitas Mataram (Negeri, NTB)","Universitas Muhammadiyah Kupang (Swasta, NTT)","Universitas Muhammadiyah Mataram (Swasta, NTB)","Universitas Nahdlatul Ulama Nusa Tenggara Barat (Swasta, NTB)","Universitas Nahdlatul Wathan (Swasta, NTB)","Universitas Ngurah Rai (Swasta, Bali)","Universitas Nusa Cendana (Negeri, NTT)","Universitas Nusa Nipa (Swasta, NTT)","Universitas Panji Sakti (Swasta, Bali)","Universitas Pendidikan Ganesha (Negeri, Bali)","Universitas Pendidikan Nasional (Swasta, Bali)","Universitas PGRI Mahadewa Indonesia (Swasta, Bali)","Universitas Ratu Samban (Swasta, NTT)","Universitas Samawa (Swasta, NTB)","Universitas Sembilanbelas November Kolaka (Swasta, NTT)","Universitas Sumbawa (Swasta, NTB)","Universitas Teknologi Sumbawa (Swasta, NTB)","Universitas Tribuana Kalabahi (Swasta, NTT)","Universitas Udayana (Negeri, Bali)","Universitas Warmadewa (Swasta, Bali)"],"kabKota":["Kabupaten Alor","Kabupaten Badung","Kabupaten Bangli","Kabupaten Belu","Kabupaten Bima","Kabupaten Buleleng","Kabupaten Dompu","Kabupaten Ende","Kabupaten Flores Timur","Kabupaten Gianyar","Kabupaten Jembrana","Kabupaten Karangasem","Kabupaten Klungkung","Kabupaten Kupang","Kabupaten Lembata","Kabupaten Lombok Barat","Kabupaten Lombok Tengah","Kabupaten Lombok Timur","Kabupaten Lombok Utara","Kabupaten Malaka","Kabupaten Manggarai","Kabupaten Manggarai Barat","Kabupaten Manggarai Timur","Kabupaten Nagekeo","Kabupaten Ngada","Kabupaten Rote Ndao","Kabupaten Sabu Raijua","Kabupaten Sikka","Kabupaten Sumba Barat","Kabupaten Sumba Barat Daya","Kabupaten Sumba Tengah","Kabupaten Sumba Timur","Kabupaten Sumbawa","Kabupaten Sumbawa Barat","Kabupaten Tabanan","Kabupaten Timor Tengah Selatan","Kabupaten Timor Tengah Utara","Kota Bima","Kota Denpasar","Kota Kupang","Kota Mataram"]};

    // Fungsi untuk mengisi dropdown
    function populateDropdowns() {
        const selects = {
            'fakultas_rayon_form': formData.fakultas,
            'kampus_komisariat_form': formData.kampus,
            'kab_kota_cabang_form': formData.kabKota
        };

        for (const id in selects) {
            const selectElement = document.getElementById(id);
            if (selectElement) {
                const options = selects[id].map(item => `<option value="${item}">${item}</option>`).join('');
                selectElement.innerHTML = '<option value="" selected disabled>Pilih...</option>' + options;
            }
        }
    }

    // Fungsi untuk menampilkan modal
    function showModal(message) {
        const modal = document.getElementById('form-modal');
        const modalMessage = document.getElementById('modal-message');
        if (modal && modalMessage) {
            modalMessage.textContent = message;
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }
    }

    // Fungsi untuk menyembunyikan modal
    function hideModal() {
        const modal = document.getElementById('form-modal');
        if (modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }
    }

    // Event listener untuk form
    const ktaForm = document.getElementById('kta-form');
    if (ktaForm) {
        ktaForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isFormValid = true;
            ktaForm.querySelectorAll('[required]').forEach(input => {
                if (!input.value.trim()) {
                    isFormValid = false;
                    // Tambahkan indikator error jika perlu, misal border merah
                    input.classList.add('border-red-500');
                } else {
                    input.classList.remove('border-red-500');
                }
            });

            if (isFormValid) {
                showModal('Formulir berhasil dikirim. Silakan tunggu balasan di email Anda.');
                ktaForm.reset();
                document.getElementById('file-chosen').textContent = '';
            } else {
                showModal('Harap lengkapi semua kolom formulir yang wajib diisi.');
            }
        });
    }
    
    // Event listener untuk input file
    const fileInput = document.getElementById('sertifikat_mapaba_form');
    const fileChosenText = document.getElementById('file-chosen');
    if (fileInput && fileChosenText) {
        fileInput.addEventListener('change', () => {
            fileChosenText.textContent = fileInput.files[0] ? fileInput.files[0].name : 'Tidak ada file yang dipilih';
        });
    }

    // Event listener untuk tombol tutup modal
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const formModal = document.getElementById('form-modal');
    if (modalCloseBtn && formModal) {
        modalCloseBtn.addEventListener('click', hideModal);
        formModal.addEventListener('click', (e) => {
            // Sembunyikan modal jika klik di luar area konten modal
            if(e.target === formModal) {
                hideModal();
            }
        });
    }

    // Inisialisasi
    populateDropdowns();
});
