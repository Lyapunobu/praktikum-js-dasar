// Soal A!
const navLinks = document.querySelectorAll('nav a');


navLinks.forEach(function(link) {
  link.addEventListener('click', function(e) { // FIX - event listener diganti yang sebelumnya "klik" menjadi "click"
    e.preventDefault();
    console.log('Navigasi ke: ' + e.target.innerText);
  });
});


