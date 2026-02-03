
/*143FE4*/

// 1. CONFIGURATION
PlayFab.settings.titleId = "143FE4";

document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.querySelector('.login-btn');
    const pseudoInput = document.querySelector('input[type="text"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const signupBtn = document.querySelector('.footer-link span');

    // --- FONCTION CONNEXION ---
    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const pseudo = pseudoInput.value.trim();
        const password = passwordInput.value.trim();

        // 1. SI RIEN N'EST ÉCRIT
        if (pseudo === "" || password === "") {
            alert("⚠️ Erreur : Les champs ne peuvent pas être vides !");
            return;
        }

        const loginRequest = {
            TitleId: PlayFab.settings.titleId,
            Username: pseudo,
            Password: password
        };

        PlayFabClientSDK.LoginWithPlayFab(loginRequest, (result, error) => {
            if (result !== null) {
                localStorage.setItem("arena_pseudo", pseudo);
                window.location.href = "../MenuPlay/index.html";
            } else {
                // 2. SI CE N'EST PAS LE BON MOT DE PASSE OU PSEUDO INEXISTANT
                if (error.error === "InvalidParams" || error.error === "InvalidUsernameOrPassword") {
                    alert("❌ Mot de passe incorrect ou compte inexistant.");
                } else {
                    alert("❌ Erreur : " + error.errorMessage);
                }
            }
        });
    });

    // --- FONCTION INSCRIPTION (CRÉATION) ---
    if (signupBtn) {
        signupBtn.addEventListener('click', () => {
            const pseudo = pseudoInput.value.trim();
            const password = passwordInput.value.trim();

            // 1. SI RIEN N'EST ÉCRIT
            if (pseudo === "" || password === "") {
                alert("⚠️ Erreur : Écris un pseudo et un mot de passe pour t'inscrire.");
                return;
            }

            // 2. PAS ASSEZ DE CARACTÈRES (PSEUDO OU MOT DE PASSE)
            if (pseudo.length < 3) {
                alert("⚠️ Ton pseudo doit faire au moins 3 caractères.");
                return;
            }
            if (password.length < 6) {
                alert("⚠️ Ton mot de passe doit faire au moins 6 caractères.");
                return;
            }

            const registerRequest = {
                TitleId: PlayFab.settings.titleId,
                Username: pseudo,
                Password: password,
                DisplayName: pseudo,
                RequireBothUsernameAndEmail: false
            };

            PlayFabClientSDK.RegisterPlayFabUser(registerRequest, (result, error) => {
                if (result !== null) {
                    alert("🔥 Compte créé avec succès ! Clique maintenant sur REJOINDRE L'ARENE.");
                } else {
                    // 3. SI LE PSEUDO EST DÉJÀ PRIS
                    if (error.error === "NameNotAvailable" || error.error === "UsernameNotAvailable") {
                        alert("🚫 Ce pseudo est déjà utilisé par un autre champion.");
                    } else {
                        alert("❌ Erreur lors de la création : " + error.errorMessage);
                    }
                }
            });
        });
    }
});



