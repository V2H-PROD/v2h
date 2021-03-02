$('.header_navbar-toggle').click(function(e) {
    e.preventDefault();
    $('.header_navbar').toggleClass('is-open');
})

/* chargement en bas */

const load = document.querySelector('.load');

window.addEventListener('load', () => {
    load.classList.add('fondu-out');
})

/* animation des bulles de media en bas */

const medias = document.querySelector('.bulle');

window.addEventListener('load', () => {
    medias.classList.add('fondu-medias');
})
