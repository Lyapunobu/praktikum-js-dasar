// Soal A!
const navLinks = document.querySelectorAll('nav a');


navLinks.forEach(function(link) {
  link.addEventListener('klik', function(e) {
    e.preventDefault();
    console.log('Navigasi ke: ' + e.target.innerText);
  });
});


