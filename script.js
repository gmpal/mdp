// Game variables
let gameActive = false;
let score = 0;
let timer = 90; // 90 seconds game time
let timerInterval;
let currentWord = '';
let wordsGuessed = 0;
let round = 1;
let currentDifficulty = 'easy';

// DOM Elements
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');
const roundElement = document.getElementById('round');
const passwordWord = document.getElementById('password-word');
const guessedBtn = document.getElementById('guessed-btn');
const skipBtn = document.getElementById('skip-btn');
const startSection = document.getElementById('start-section');
const gameSection = document.getElementById('game-section');
const endSection = document.getElementById('end-section');
const startGameBtn = document.getElementById('start-game');
const playAgainBtn = document.getElementById('play-again');
const finalScoreElement = document.getElementById('final-score');
const wordsGuessedElement = document.getElementById('words-guessed');
const difficultyBtns = document.querySelectorAll('.difficulty-btn');

// Event Listeners
startGameBtn.addEventListener('click', startGame);
playAgainBtn.addEventListener('click', resetGame);
guessedBtn.addEventListener('click', wordGuessed);
skipBtn.addEventListener('click', skipWord);

// Set up difficulty buttons
difficultyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Only allow changing difficulty before game starts
        if (!gameActive) {
            difficultyBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentDifficulty = btn.dataset.difficulty;
        }
    });
});

// Start the game
function startGame() {
    gameActive = true;
    
    // Hide start section, show game section
    startSection.classList.add('hidden');
    gameSection.classList.remove('hidden');
    endSection.classList.add('hidden');
    
    // Reset game state
    score = 0;
    timer = 90;
    wordsGuessed = 0;
    round = 1;
    
    // Update UI
    scoreElement.textContent = score;
    timerElement.textContent = timer;
    roundElement.textContent = round;
    
    // Get first word
    getNewWord();
    
    // Start timer
    timerInterval = setInterval(updateTimer, 1000);
}

// End the game
function endGame() {
    gameActive = false;
    clearInterval(timerInterval);
    
    // Hide game section, show end section
    gameSection.classList.add('hidden');
    endSection.classList.remove('hidden');
    
    // Update final stats
    finalScoreElement.textContent = score;
    wordsGuessedElement.textContent = wordsGuessed;
}

// Reset game for play again
function resetGame() {
    startGame();
}

// Update timer each second
function updateTimer() {
    timer--;
    timerElement.textContent = timer;
    
    if (timer <= 0) {
        endGame();
    }
}

// Handle "Guessed It" button
function wordGuessed() {
    if (!gameActive) return;
    
    // Award points
    score += 5;
    wordsGuessed++;
    round++;
    
    // Update UI
    scoreElement.textContent = score;
    roundElement.textContent = round;
    
    // Get new word
    getNewWord();
}

// Handle "Skip" button
function skipWord() {
    if (!gameActive) return;
    
    // Penalty for skipping
    score = Math.max(0, score - 2); // Don't go below 0
    round++;
    
    // Update UI
    scoreElement.textContent = score;
    roundElement.textContent = round;
    
    // Get new word
    getNewWord();
}

// Select a new random word based on difficulty
function getNewWord() {
    let wordList;
    
    // Select appropriate word list based on difficulty
    switch(currentDifficulty) {
        case 'easy':
            wordList = easyWords;
            break;
        case 'medium':
            wordList = mediumWords;
            break;
        case 'hard':
            wordList = hardWords;
            break;
        default:
            wordList = easyWords;
    }
    
    // Get random word from list
    const randomIndex = Math.floor(Math.random() * wordList.length);
    currentWord = wordList[randomIndex];
    
    // Update display with animation
    passwordWord.classList.remove('animate-word');
    void passwordWord.offsetWidth; // Trigger reflow to restart animation
    passwordWord.textContent = currentWord;
    passwordWord.classList.add('animate-word');
}
