/* navbar burger */

$('.header_navbar-toggle').click(function(e) {
    e.preventDefault();
    $('.header_navbar').toggleClass('is-open');
})

/* chargement */

const load = document.querySelector('.loader-back'); 

window.addEventListener('load', () => {
    load.classList.add('fondu-out');
});


/* animation des bulles de media */

const medias = document.querySelector('.bulle');

window.addEventListener('load', () => {
    medias.classList.add('fondu-medias');
})
