// ==========================================
// BONJOUR EMPIRE — ASSISTANT IA
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // Création du bouton flottant
    const boutonIA = document.createElement("button");

    boutonIA.id = "bonjour-ia-button";

    boutonIA.innerHTML = `
        <i class="fa-solid fa-robot"></i>
    `;

    boutonIA.setAttribute(
        "aria-label",
        "Ouvrir Bonjour Empire AI"
    );


    // Création de la fenêtre IA
    const fenetreIA = document.createElement("div");

    fenetreIA.id = "bonjour-ia-window";

    fenetreIA.innerHTML = `

        <div class="ia-header">

            <div class="ia-identite">

                <div class="ia-logo">
                    <i class="fa-solid fa-robot"></i>
                </div>

                <div>
                    <strong>
                        Bonjour Empire AI
                    </strong>

                    <span>
                        Assistant virtuel
                    </span>
                </div>

            </div>


            <button
                id="ia-close"
                aria-label="Fermer"
            >

                <i class="fa-solid fa-xmark"></i>

            </button>

        </div>


        <div class="ia-messages">

            <div class="ia-message ia-bot">

                Bonjour 👋🏽

                <br><br>

                Je suis l'assistant virtuel
                de <strong>Bonjour Empire</strong>.

                <br><br>

                Comment puis-je vous aider ?

            </div>

        </div>


        <div class="ia-suggestions">

            <button>
                🎨 Nos activités
            </button>

            <button>
                📅 Nos événements
            </button>

            <button>
                🚀 Nos opportunités
            </button>

            <button>
                👥 Nos talents
            </button>

        </div>


        <div class="ia-input">

            <input
                type="text"
                id="ia-question"
                placeholder="Écrivez votre question..."
            >

            <button
                id="ia-send"
                aria-label="Envoyer"
            >

                <i class="fa-solid fa-paper-plane"></i>

            </button>

        </div>

    `;


    // Ajouter les éléments à la page

    document.body.appendChild(boutonIA);

    document.body.appendChild(fenetreIA);


    // Ouvrir l'assistant

    boutonIA.addEventListener(
        "click",
        function () {

            fenetreIA.classList.toggle("ia-open");

        }
    );


    // Fermer l'assistant

    document
        .getElementById("ia-close")
        .addEventListener(
            "click",
            function () {

                fenetreIA.classList.remove(
                    "ia-open"
                );

            }
        );

});
