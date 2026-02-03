/*http://127.0.0.1:5500/Game1VS1/game-index.html
http://127.0.0.1:5500/Game2VS2/game-index.html
http://127.0.0.1:5500/GameYOUvsPC/game-index.html
http://127.0.0.1:5500/Salon/salon-index.html
http://127.0.0.1:5500/Settings/Settings-index.html*/




document.addEventListener('DOMContentLoaded', () => {
    console.log("Interface Golden Arena chargée.");

    const boutons = document.querySelectorAll('.menu-btn');

    boutons.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log("Action : " + btn.innerText);
            // On pourra ajouter ici le changement vers l'écran de combat

        });
    });
    
});

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.menu-btn');

    // 1 VS 1
    if (buttons[0]) {
        buttons[0].addEventListener('click', () => {
            window.location.href = "../Game1VS1/game-index.html";
        });
    }

    // 2 VS 2
    if (buttons[1]) {
        buttons[1].addEventListener('click', () => {
            window.location.href = "../Game2VS2/game-index.html";
        });
    }

    // YOU VS PC
    if (buttons[2]) {
        buttons[2].addEventListener('click', () => {
            window.location.href = "../GameYOUvsPC/game-index.html";
        });
    }

    // SALON
    if (buttons[3]) {
        buttons[3].addEventListener('click', () => {
            window.location.href = "../Salon/salon-index.html";
        });
    }

    // SETTINGS
    if (buttons[4]) {
        buttons[4].addEventListener('click', () => {
            window.location.href = "../Settings/Settings-index.html";
        });
    }

    // LEFT (Retour au Login)
    if (buttons[5]) {
        buttons[5].addEventListener('click', () => {
            window.location.href = "../Login/login-index.html";
        });
    }
});