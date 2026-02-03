document.addEventListener('DOMContentLoaded', () => {
    const timerElement = document.getElementById('timer');
    const playerHealth = document.getElementById('player-health');
    const enemyHealth = document.getElementById('enemy-health');

    let timeLeft = 99;

    // --- LOGIQUE DU CHRONOMÈTRE ---
    const countdown = setInterval(() => {
        timeLeft--;
        timerElement.innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(countdown);
            alert("TEMPS ÉCOULÉ !");
        }
    }, 1000);

    // --- EXEMPLE DE RÉCEPTION DE COUP (Pour tester) ---
    // Cette fonction pourra être appelée plus tard quand tu feras tes attaques
    function takeDamage(target) {
        if (target === 'player') {
            playerHealth.style.width = "70%"; // Simule une perte de vie
        } else {
            enemyHealth.style.width = "70%";
        }
    }
});