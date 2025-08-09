document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('main');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const closeBtn = document.querySelector('.lightbox .close');
    const sidemenuToggle = document.getElementById('hamburger');
    const sidemenu = document.getElementById('sidemenu');

    sidemenuToggle.addEventListener('click', () => {
        sidemenu.classList.toggle('open');
    });

    // Event delegation for all clicks inside <main>
    main.addEventListener('click', (event) => {
        const clicked = event.target;
        if (clicked.tagName === 'IMG' && (clicked.closest('.image-container') || clicked.closest('.image-container-wide'))) {
            lightbox.style.display = 'flex';
            lightboxImg.src = clicked.src;
            lightboxImg.alt = clicked.alt;
        }
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target === lightboxImg) {
            lightbox.style.display = 'none';
        }
    });
});
