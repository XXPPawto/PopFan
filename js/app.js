// DOM Elements
const cat = document.getElementById('cat');
const counterElement = document.getElementById('counter');
const totalClicksElement = document.getElementById('totalClicks');
const popSound = document.getElementById('popSound');
const soundToggle = document.getElementById('soundToggle');

let clickCount = 0;
let isSoundEnabled = true;

// Event Listeners
cat.addEventListener('mousedown', () => {
    cat.src = 'assets/cat_open.png';
    playSound();
});

cat.addEventListener('mouseup', () => {
    cat.src = 'assets/cat_normal.png';
    updateCounter();
});

cat.addEventListener('touchstart', (e) => {
    e.preventDefault();
    cat.src = 'assets/cat_open.png';
    playSound();
});

cat.addEventListener('touchend', () => {
    cat.src = 'assets/cat_normal.png';
    updateCounter();
});

// Toggle Sound
soundToggle.addEventListener('click', () => {
    isSoundEnabled = !isSoundEnabled; // Toggle status suara
    const icon = soundToggle.querySelector('i'); // Ambil elemen ikon
    if (isSoundEnabled) {
        icon.classList.remove('fa-volume-mute');
        icon.classList.add('fa-volume-up');
        icon.style.color = 'var(--accent)';
    } else {
        icon.classList.remove('fa-volume-up');
        icon.classList.add('fa-volume-mute');
        icon.style.color = 'var(--text)';
    }
});

// Functions
function updateCounter() {
    clickCount++;
    counterElement.textContent = clickCount.toLocaleString();
    totalClicksElement.textContent = clickCount.toLocaleString();
}

function playSound() {
    if (isSoundEnabled) {
        popSound.currentTime = 0; // Reset suara ke awal
        popSound.play(); // Mainkan suara
    }
}