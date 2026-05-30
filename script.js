const video1 = document.getElementById('exercise1A-video');
const heading1 = document.getElementById('exercise1A');

heading1.addEventListener('click', () => {
    heading1.firstElementChild.classList.toggle('activated');
    video1.classList.toggle('video-hidden');
})