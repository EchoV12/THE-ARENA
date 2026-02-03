document.addEventListener('DOMContentLoaded', () => {
    const backBtn = document.querySelector('.back-btn');
    const pseudoDisplay = document.getElementById('display-pseudo');

    // Affiche le pseudo stocké au login
    const savedPseudo = localStorage.getItem("arena_pseudo");
    if (savedPseudo && pseudoDisplay) {
        pseudoDisplay.innerText = savedPseudo;
    }

    // Retour au MenuPlay depuis les réglages
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            window.location.href = "../MenuPlay/index.html"; 
        });
    }
});