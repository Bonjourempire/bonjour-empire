document.addEventListener("DOMContentLoaded", function () {

    const maintenant = new Date();

    const prochainsEvenements =
        evenementsBonjourEmpire
        .filter(function (evenement) {

            const dateEvenement =
                new Date(
                    evenement.date + "T23:59:59"
                );

            return dateEvenement >= maintenant;

        })
        .sort(function (a, b) {

            return new Date(a.date) -
                   new Date(b.date);

        });


    const prochain =
        prochainsEvenements[0];


    if (!prochain) {

        return;

    }


    const bloc =
        document.getElementById(
            "prochain-evenement"
        );


    if (!bloc) {

        return;

    }


    const date =
        new Date(
            prochain.date + "T00:00:00"
        );


    const jour =
        date.getDate();


    const mois =
        date.toLocaleDateString(
            "fr-FR",
            {
                month: "long"
            }
        );


    bloc.innerHTML = `

        <div class="pub-evenement">

            <div class="pub-icon">

                <i class="fa-solid fa-calendar-days"></i>

            </div>


            <div class="pub-contenu">

                <span class="pub-label">
                    PROCHAIN ÉVÉNEMENT
                </span>

                <h3>
                    ${prochain.titre}
                </h3>

                <p>
                    <strong>
                        ${jour} ${mois} ${date.getFullYear()}
                    </strong>
                    ·
                    ${prochain.lieu}
                </p>

            </div>


            <a
                href="evenements.html"
                class="pub-bouton"
            >
                Découvrir
                <i class="fa-solid fa-arrow-right"></i>
            </a>

        </div>

    `;

});
