// 1. Counter Functionality
let count = 0;
const clickBtn = document.getElementById('clickBtn');
const counterDisplay = document.getElementById('counter');

clickBtn.addEventListener('click', () => {
    count++;
    counterDisplay.textContent = count;
});

// 2. Dark Mode Toggle Functionality
const themeBtn = document.getElementById('themeBtn');
const body = document.body;

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Update button text based on current mode
    if (body.classList.contains('dark-mode')) {
        themeBtn.textContent = 'Toggle Light Mode';
    } else {
        themeBtn.textContent = 'Toggle Dark Mode';
    }
});