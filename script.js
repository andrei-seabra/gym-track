const headings = document.querySelectorAll('.heading');

headings.forEach(heading => {
    heading.addEventListener('click', () => {
        const video = heading.nextElementSibling;

        heading.querySelector('img').classList.toggle('activated');
        video.classList.toggle('video-hidden');
    });
});