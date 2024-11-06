let score = 0;

function createDuck() {
    const duck = document.createElement('div');
    duck.classList.add('duck');
    
    // Position duck randomly on the screen
    duck.style.top = `${Math.random() * 70 + 10}%`;
    duck.style.left = `${Math.random() * 100}%`;

    // Add click event to "shoot" the duck
    duck.addEventListener('click', () => {
        duck.style.transition = '0.5s';
        duck.style.transform = 'rotate(120deg)';
        duck.style.opacity = 0;
        score++;
        document.getElementById('score-count').innerText = score;

        // Remove duck after animation
        setTimeout(() => duck.remove(), 500);

        // Play sound
        document.getElementById('sound1').play();
    });

    document.querySelector('.game-container').appendChild(duck);

    // Automatically remove the duck after it leaves the screen
    setTimeout(() => {
        if (document.body.contains(duck)) duck.remove();
    }, 10000); // Adjust based on animation duration
}

// Spawn a new duck every few seconds
setInterval(createDuck, 2000);
