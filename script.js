// Soal A1
const navLinks = document.querySelectorAll('nav a');


navLinks.forEach(function(link) {
  link.addEventListener('click', function(e) { // FIX - event listener diganti yang sebelumnya "klik" menjadi "click"
    e.preventDefault();
    console.log('Navigasi ke: ' + e.target.innerText);
  });
});


// Soal A2
const judul = document.querySelector('h1');

judul.innerText = 'AI dan Masa Depan Teknologi Indonesia'; // ??? script jalan secara normal dan tidak ada error di console sebelum didebug

