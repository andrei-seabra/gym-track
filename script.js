const video1 = document.getElementById('exercise1A-video');

const heading1 = document.getElementById('exercise1A');

function toggleExerciseCard(heading, video) {
    heading.firstElementChild.classList.toggle('activated');
    video.classList.toggle('video-hidden');
}

heading1.addEventListener('click', () => {
    toggleExerciseCard(heading1, video1);
});