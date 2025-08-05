document.addEventListener('DOMContentLoaded', () => {
    console.log('Situs Diskominfo Kota Tanjungpinang siap!');

    // --- Fungsionalitas Umum (Berlaku untuk semua halaman) ---

    // Contoh sederhana untuk dropdown di navbar (jika menggunakan elemen button biasa)
    const profileButton = document.querySelector('nav .group button');
    const profileDropdown = document.querySelector('nav .group .absolute');

    if (profileButton && profileDropdown) {
        profileButton.addEventListener('click', () => {
            profileDropdown.classList.toggle('hidden');
        });
        // Menutup dropdown jika klik di luar
        document.addEventListener('click', (event) => {
            if (!profileButton.contains(event.target) && !profileDropdown.contains(event.target)) {
                profileDropdown.classList.add('hidden');
            }
        });
    }

    // --- Fungsionalitas Spesifik Halaman Berita ---
    // Jika Anda berencana untuk memuat data berita secara dinamis dari API,
    // maka logika untuk itu akan ditempatkan di sini.
    // Untuk saat ini, karena HTML berita sudah statis, tidak ada JS spesifik yang banyak dibutuhkan.

    // Contoh: Jika nanti ada fitur "Load More" atau filtering berita
    const loadMoreButton = document.getElementById('load-more-news'); // Tambahkan ID ini di HTML jika ada tombolnya
    if (loadMoreButton) {
        loadMoreButton.addEventListener('click', () => {
            console.log('Memuat berita lebih banyak...');
            // Logika untuk fetch data berita tambahan dari API dan menambahkannya ke DOM
        });
    }

    // --- Fungsionalitas Spesifik Halaman Beranda ---
    // Ini adalah placeholder untuk fungsionalitas yang mungkin ada di halaman beranda
    // Contoh untuk implementasi Chart.js di bagian statistika di index.html:
    // if (document.getElementById('myChart1')) {
    //     const ctx1 = document.getElementById('myChart1').getContext('2d');
    //     new Chart(ctx1, {
    //         type: 'bar', // atau 'line', 'pie', dll.
    //         data: {
    //             labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei'],
    //             datasets: [{
    //                 label: 'Data Statistik',
    //                 data: [12, 19, 3, 5, 2],
    //                 backgroundColor: 'rgba(75, 192, 192, 0.6)',
    //                 borderColor: 'rgba(75, 192, 192, 1)',
    //                 borderWidth: 1
    //             }]
    //         },
    //         options: {
    //             scales: {
    //                 y: {
    //                     beginAtZero: true
    //                 }
    //             }
    //         }
    //     });
    // }
});