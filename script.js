// Create particles
const body = document.body;
const particleCount = 150;

for (let i = 0; i < particleCount; i++) {
    let particle = document.createElement('div');
    particle.className = 'particle';
    let size = Math.random() * 5 + 2; // Ensuring particles are visible
    let startX = Math.random() * 100;
    let delay = Math.random() * 5;
    let duration = Math.random() * 5 + 5;
    let opacity = Math.random() * 0.5 + 0.3;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${startX}vw`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;
    particle.style.opacity = opacity;

    body.appendChild(particle);
}

// Handle background music
window.addEventListener('load', function() {
    var music = document.getElementById('Music');
    music.load(); // Ensure the audio file is loaded

    // Handle music control buttons
    const playButton = document.getElementById('playButton');
    const pauseButton = document.getElementById('pauseButton');

    playButton.addEventListener('click', () => {
        music.play();
    });

    pauseButton.addEventListener('click', () => {
        music.pause();
    });
});