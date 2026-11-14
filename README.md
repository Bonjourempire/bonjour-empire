# Bonjour Empire — site vitrine

Site institutionnel multipage, responsive, en HTML/CSS/JavaScript pur. Il peut être publié gratuitement avec **GitHub Pages**.

## Pages
- `index.html` — accueil
- `apropos.html` — présentation, mission, vision et repères
- `activites.html` — initiatives et programmes
- `afrikarts.html` — Afrik’Arts et ses éditions
- `cartes.html` — catégories de cartes et soutien
- `contact.html` — coordonnées et formulaire ouvrant l’application e-mail

## Publier sur GitHub Pages

1. Créez ou connectez-vous à votre compte sur [GitHub](https://github.com/).
2. Cliquez sur **New repository**.
3. Donnez comme nom au dépôt `bonjour-empire` (ou un autre nom), choisissez **Public**, puis cliquez sur **Create repository**.
4. Sur la page du dépôt, choisissez **Add file → Upload files**.
5. Décompressez le ZIP sur votre ordinateur, puis téléversez **le contenu du dossier** (les fichiers `index.html`, les autres pages et le dossier `assets`). Ne téléversez pas uniquement le ZIP.
6. Cliquez sur **Commit changes**.
7. Dans le dépôt, ouvrez **Settings → Pages**.
8. Dans **Build and deployment**, choisissez **Deploy from a branch**.
9. Sélectionnez la branche **main** et le dossier **/(root)**, puis cliquez sur **Save**.
10. Patientez quelques minutes. GitHub affichera l’adresse publique de votre site dans **Settings → Pages**. Elle aura généralement la forme `https://VOTRE-PSEUDO.github.io/bonjour-empire/`.

## Important : limites de GitHub Pages

GitHub Pages héberge des sites statiques. Il ne fait pas fonctionner PHP, MySQL, un espace administrateur avec base de données, ni un paiement en ligne sécurisé. Le formulaire de contact de cette version prépare un e-mail dans l’application de messagerie du visiteur ; il n’envoie rien automatiquement depuis le site.

Pour ajouter plus tard des paiements, commandes de cartes, dons en ligne, comptes membres, espace d’administration ou stockage des demandes, il faudra connecter un backend (par exemple Supabase ou un hébergement PHP/MySQL) et configurer les clés/secrets côté serveur. Ne mettez jamais de mot de passe ou de clé secrète dans les fichiers publics du dépôt.

## Personnalisation

- Remplacez `assets/logo.svg` par le logo officiel (conservez le nom `logo.svg`, ou modifiez les références dans les pages).
- Modifiez les textes et coordonnées dans les fichiers `.html`.
- Les couleurs principales sont définies au début de `assets/style.css` (`--navy`, `--gold`).
- Les polices Google Fonts nécessitent une connexion Internet ; des polices de secours sont prévues.

## Vérifications avant publication

- Vérifiez les numéros, l’adresse e-mail et les liens des réseaux sociaux.
- Ajoutez vos photos officielles dans `assets/` si vous souhaitez remplacer les visuels typographiques.
- La date d’Afrik’Arts 3ᵉ édition est volontairement indiquée « date précise à venir ».
