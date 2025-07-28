// script.js

// Toggle dropdown menu jika dibutuhkan (bisa dikembangkan)
document.addEventListener('DOMContentLoaded', () => {
  const dropdownItems = document.querySelectorAll('.navbar .dropdown');

  dropdownItems.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });
});

// Smooth scroll untuk anchor
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Tombol 'Lainnya...' di bagian berita
const btn = document.querySelector('.btn');
if (btn) {
  btn.addEventListener('click', () => {
    alert('Fitur belum tersedia. Hubungi admin untuk melihat berita lainnya.');
  });
}
