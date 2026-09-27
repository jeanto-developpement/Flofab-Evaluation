# Flo-Fab — Évaluation technique

Application web pour faire passer les questionnaires d'évaluation des connaissances techniques de Flo-Fab en ligne. Le candidat répond aux questions ; l'application calcule la note, le pourcentage et le niveau selon la grille d'évaluation, mais **ne les affiche jamais au candidat**. Seul un responsable, avec un code, peut consulter les résultats.

L'application est entièrement statique (HTML, CSS, JavaScript). Elle fonctionne sur GitHub Pages sans serveur ni base de données.

## Contenu

Toutes les questions sont en unités impériales : pouces, pieds, psi, °F, gpm, lb·pi et HP. Les unités électriques (V, A, Ω, W, kW, Hz) sont les mêmes dans tous les systèmes.

| Questionnaire | Questions |
|---|---|
| 1. Bases en mécanique (SAE) | 25 |
| 2. Utilisation des outils | 25 |
| 3. Lecture de plan | 25 |
| 4. Pompes (psi, TDH en pieds, gpm) | 25 |
| 5. Électricité et sécurité électrique | 25 |
| 6. Variateurs de fréquence (VFD) | 25 |
| 7. Installation et filage électrique | 25 |
| 8. Automates programmables (PLC) | 25 |
| 9. Interfaces opérateur (HMI) | 25 |
| 10. Régulation PID | 25 |
| Questionnaire complet | 250 |

L'ordre des questions et des choix de réponse est identique à celui des questionnaires Word. Une version papier peut donc être corrigée avec le même corrigé.

## Fonctionnalités

- Mode évaluation uniquement : le candidat ne voit jamais les bonnes réponses, la correction, ni son propre résultat. À la fin du questionnaire, il voit seulement un message de confirmation.
- Espace responsable protégé par un code : la note, le pourcentage, le niveau, l'historique, les tentatives et l'évaluation sur papier ne sont accessibles qu'après avoir entré ce code.
- Fiche du candidat : nom, poste et date.
- Maximum de 3 tentatives par candidat et par questionnaire, avec réinitialisation par un responsable.
- Navigation libre entre les questions et raccourcis clavier (A à D pour répondre, flèches pour changer de question).
- Reprise automatique d'un questionnaire interrompu (par exemple après un rafraîchissement de la page).
- Résultats avec jauge, niveau, recommandation et résultat par section (sans correction).
- Rapport PDF produit automatiquement à la fin du questionnaire et envoyé par courriel (voir plus bas), ou téléchargé si l'envoi n'est pas configuré.
- Impression des résultats.
- Évaluation sur papier : impression du questionnaire en PDF, puis saisie de la copie du candidat pour le calcul automatique.
- Export des résultats en CSV (compatible Excel, séparateur point-virgule).
- Historique des résultats enregistré dans le navigateur.

## Utilisation sur tablette (iPad et Android)

L'application est adaptée aux tablettes, en mode portrait comme en paysage :

- **Écran tactile** : grandes zones à toucher, barre « Question précédente / suivante » collée en bas de l'écran, et changement de question en glissant le doigt vers la gauche ou la droite.
- **Mise en page** : sur iPad et tablette Android en portrait, la grille des questions reste à côté de la question ; les résultats s'empilent pour rester lisibles.
- **Écran toujours allumé** pendant le questionnaire, si le navigateur le permet (Chrome sur Android, Safari à partir d'iPadOS 16.4).
- **Installation sur l'écran d'accueil** : l'application s'ouvre alors en plein écran, comme une application native.
  - iPad : dans Safari, touchez le bouton Partager, puis « Sur l'écran d'accueil ».
  - Android : dans Chrome, touchez « Installer l'application » sur la page d'accueil, ou passez par le menu ⋮, puis « Installer l'application ».
- **Fonctionnement sans connexion** : après une première visite en ligne, l'application et ses questions sont gardées en cache. Un questionnaire peut être fait sans Wi-Fi. Avec l'envoi par l'appareil, le courriel reste dans la boîte d'envoi de l'application de courriel et part au retour de la connexion. Avec l'envoi par serveur, le rapport est mis en attente et envoyé automatiquement au retour de la connexion. Un bandeau indique l'absence de connexion.
- **Envoi du PDF** : sur tablette, le menu de partage du système s'ouvre avec le PDF joint (Mail, Gmail, Outlook, Fichiers, Google Drive, etc.). Dans l'application installée sur iPad, « Télécharger le rapport PDF » ouvre le PDF, que l'on peut ensuite enregistrer dans Fichiers.

Conseils pour une tablette partagée en atelier :

- Installez l'application sur l'écran d'accueil et utilisez-la en plein écran.
- Sur iPad, l'**Accès guidé** (Réglages, Accessibilité, Accès guidé) empêche le candidat de quitter l'application pendant le questionnaire. Sur Android, utilisez l'**épinglage d'écran** (Paramètres, Sécurité, Épingler l'application).
- La correction n'est jamais affichée à l'écran : elle figure seulement dans le rapport envoyé automatiquement par le serveur (si configuré).
- Si le candidat quitte l'application par erreur, le questionnaire en cours est conservé et peut être repris depuis l'accueil.
- Après une mise à jour du site, changez `VERSION` dans `sw.js` pour que les tablettes récupèrent la nouvelle version.

## Évaluation sur papier

La section « Évaluation sur papier » de la page d'accueil permet de faire passer un questionnaire sans tablette :

1. **Imprimer le questionnaire** : produit un PDF prêt à imprimer, avec la fiche du candidat, les instructions, les questions (points et complexité indiqués) et une feuille de réponses à cercles A, B, C, D. Il ne contient aucune réponse.
2. **Saisir une copie papier** : le responsable entre les réponses inscrites par le candidat (A, B, C, D ou « – » pour sans réponse). L'application calcule le résultat pondéré et affiche la même page de résultats qu'en ligne, avec le rapport PDF, l'envoi par courriel et l'enregistrement dans l'historique (marqué « Papier »). La copie compte comme une tentative ; si le candidat a déjà atteint le maximum, un avertissement s'affiche, sans bloquer la saisie.

Le choix du questionnaire se fait dans la liste (les 10 thèmes ou le questionnaire complet). Sur iPad, le PDF s'ouvre : touchez Partager, puis Imprimer. Les questionnaires Word fournis séparément restent utilisables ; ils ont le même ordre de questions et de réponses.

Ne publiez pas les corrigés Word dans le dépôt GitHub : tout fichier du dépôt est accessible en ligne.

## Espace responsable

Le candidat ne voit jamais son résultat : à la fin du questionnaire, un simple message de confirmation s'affiche (« Questionnaire terminé, merci ») et l'application revient à l'accueil. La note, le pourcentage, le niveau, la correction, l'historique, les tentatives et l'évaluation sur papier sont réservés à l'espace responsable, protégé par un code.

- Sur la page d'accueil, la section « Résultats enregistrés » est remplacée par un bandeau « Les résultats, les tentatives et l'évaluation sur papier sont réservés au responsable » avec un bouton **Espace responsable**.
- Ce bouton demande un code. Une fois entré correctement, l'historique complet, les tentatives et l'évaluation sur papier apparaissent, avec un bandeau « Espace responsable ouvert » et un bouton **Verrouiller**.
- L'espace se verrouille automatiquement après 15 minutes d'inactivité, et immédiatement dès qu'un nouveau candidat commence un questionnaire ou que le questionnaire en cours est terminé — même si le responsable a oublié de verrouiller.
- Juste après avoir terminé, le candidat voit un bouton « Espace responsable » sur son propre écran de confirmation : cela permet au responsable, qui reprend l'appareil, d'entrer le code et de voir ce résultat immédiatement, sans devoir chercher dans l'historique.

### Configurer le code

Dans `config.js` :

```js
window.FLOFAB_CONFIG = {
  responsable: {
    code: "1981",   // changez cette valeur pour un code connu seulement des responsables
  },
  ...
};
```

Le code par défaut (1981, l'année de fondation de Flo-Fab) doit être changé avant une utilisation réelle. Comme pour tout ce qui est stocké côté client, ce code protège contre un candidat curieux, pas contre quelqu'un qui lirait le code source de la page ; pour un contrôle plus strict, utilisez l'envoi automatique par serveur ci-dessous, qui n'affiche jamais rien sur l'appareil du candidat.

### Avec ou sans envoi automatique par serveur

- **Avec le serveur configuré** (`methode: "auto"` ou `"serveur"` et une URL réglée) : dès que le candidat termine, le rapport complet (avec correction) part automatiquement au responsable par courriel, sans que rien ne s'affiche sur l'appareil. C'est la méthode la plus sûre : même en trichant sur le code de l'espace responsable, le candidat ne peut rien voir, puisque le résultat ne reste que dans le courriel du responsable.
- **Sans serveur configuré** : rien n'est envoyé automatiquement. Le responsable doit déverrouiller l'espace responsable, ouvrir le résultat dans l'historique, puis choisir lui-même « Envoyer par courriel », « Télécharger le PDF » ou « Partager le PDF ». Ces trois actions sont aussi protégées par le code.

## Pondération selon la complexité

Chaque question a une complexité, affichée au candidat à côté du numéro de la question, qui détermine sa valeur en points :

| Complexité | Type de question | Points |
|---|---|---|
| Faible | Connaissance de base (couleurs de conducteurs, unités, définitions) | 1 |
| Moyenne | Compréhension et application (calcul simple, choix d'une méthode, effet d'un réglage) | 2 |
| Élevée | Analyse, diagnostic ou notion spécialisée (défauts de VFD, cavitation, anti-windup, harmoniques) | 3 |

Le pourcentage est calculé sur les points obtenus : points obtenus ÷ points possibles × 100, arrondi à l'unité. Le niveau (Expert, Avancé, etc.) est ensuite déterminé à partir de ce pourcentage. Une bonne réponse à une question difficile compte donc davantage qu'une bonne réponse à une question de base.

| Questionnaire | Faible | Moyenne | Élevée | Points possibles |
|---|---|---|---|---|
| 1. Bases en mécanique (SAE) | 11 | 11 | 3 | 42 |
| 2. Utilisation des outils | 7 | 12 | 6 | 49 |
| 3. Lecture de plan | 10 | 12 | 3 | 43 |
| 4. Pompes | 6 | 13 | 6 | 50 |
| 5. Électricité et sécurité électrique | 13 | 9 | 3 | 40 |
| 6. Variateurs de fréquence (VFD) | 7 | 11 | 7 | 50 |
| 7. Installation et filage électrique | 13 | 8 | 4 | 41 |
| 8. Automates programmables (PLC) | 5 | 14 | 6 | 51 |
| 9. Interfaces opérateur (HMI) | 12 | 10 | 3 | 41 |
| 10. Régulation PID | 7 | 9 | 9 | 52 |
| Questionnaire complet | 91 | 109 | 50 | 459 |

Les résultats affichent les points, le nombre de bonnes réponses et le pourcentage. La complexité de chaque question se trouve dans `data/questionnaires.js` (champ `complexite`). Dans les questionnaires Word, elle est indiquée à côté de chaque question, et le corrigé donne les points de chaque question et les seuils de chaque niveau en points.

## Grille d'évaluation

| Résultat | Niveau | Recommandation |
|---|---|---|
| 90 – 100 % | Expert | Aucune formation requise ; peut agir comme personne-ressource |
| 75 – 89 % | Avancé | Révision ciblée des questions manquées |
| 60 – 74 % | Intermédiaire | Formation ciblée sur les points faibles, puis réévaluation |
| 40 – 59 % | Débutant | Formation structurée et accompagnement |
| 0 – 39 % | Insuffisant | Formation complète avant réévaluation |

Seuil de réussite suggéré : 75 %. Le pourcentage est calculé sur les points pondérés (voir plus haut). Pour le modifier, changez la constante `PASS` au début de `app.js`. Les niveaux sont définis dans la constante `LEVELS` du même fichier.

## Nombre maximal de tentatives

Chaque candidat a droit à 3 tentatives par questionnaire. Le questionnaire complet compte comme un questionnaire distinct.

- La tentative est comptée dès que le candidat clique sur « Commencer le questionnaire ». Une tentative abandonnée reste comptée.
- Le candidat est reconnu par son nom, sans tenir compte des majuscules, des accents ni des espaces en trop (« Jean Tremblay » et « JEAN  TREMBLAY » sont la même personne).
- Quand le maximum est atteint, le bouton « Commencer le questionnaire » est désactivé et un message s'affiche.
- Le responsable voit le compte des tentatives sur la page d'accueil, dans la section « Tentatives », et peut les réinitialiser pour un candidat. Les résultats déjà enregistrés sont conservés.

Pour modifier ces règles, changez les constantes au début de `app.js` :

```js
const MAX_ATTEMPTS = 3;        // nombre maximal de tentatives
```

Le compte des tentatives est enregistré dans le navigateur, comme l'historique. Il ne s'applique donc qu'au poste utilisé. Il peut être contourné en changeant de navigateur, en effaçant les données du navigateur ou en inscrivant un autre nom. Pour une limite stricte, faites passer les évaluations sur un poste contrôlé par un responsable, ou utilisez une version avec serveur.

## Rapport PDF et envoi par courriel

Chaque résultat peut être transformé en rapport PDF : la fiche du candidat (nom, poste, date, tentative, durée), la note, le pourcentage, le niveau, l'atteinte du seuil de réussite, la recommandation et le résultat par section. Le rapport téléchargé ou partagé depuis l'appareil ne contient pas la correction ; seul celui envoyé automatiquement par le serveur la contient (voir plus bas).

Comme le candidat ne voit jamais ses résultats (voir « Espace responsable » plus haut), l'envoi se fait de deux façons :

- **Avec le serveur configuré** (`methode: "auto"` ou `"serveur"` avec une URL réglée) : dès que le candidat termine, le rapport part automatiquement au responsable, sans aucune action ni affichage sur l'appareil du candidat.
- **Sans serveur configuré** : rien n'est envoyé automatiquement. Le responsable doit déverrouiller l'espace responsable, ouvrir un résultat dans l'historique, puis choisir lui-même une des actions suivantes :
  - **Envoyer par courriel** : sur iPad ou tablette Android, ouvre le menu de partage du système avec le PDF déjà joint ; on choisit Mail, Gmail ou Outlook, puis Envoyer. Sur ordinateur, le même menu de partage s'ouvre si le navigateur le permet (Safari sur Mac, Chrome ou Edge sur Windows) ; sinon, le PDF est téléchargé et un courriel prérempli s'ouvre, avec le PDF à joindre soi-même.
  - **Télécharger le rapport PDF** ou **Partager le PDF** : pour l'enregistrer ou le transmettre autrement.

  Si l'envoi par courriel est annulé, le bouton reste disponible pour recommencer. L'historique indique pour chaque résultat s'il a été envoyé, téléchargé ou si l'envoi a été annulé ; comme l'envoi final se fait dans l'application de courriel de l'appareil, l'application ne peut pas confirmer qu'un courriel a bien été reçu.

### Configuration

Dans `config.js` :

```js
window.FLOFAB_CONFIG = {
  courriel: {
    methode: "auto",                           // serveur si « url » est rempli, sinon manuel (espace responsable)
    destinataire: "jeanto@flofab.com",         // adresse qui reçoit tous les rapports
    envoiAutomatique: true,                    // envoi automatique dès la fin du questionnaire (seulement si le serveur est configuré)
  },
};
```

Tous les rapports sont envoyés à **jeanto@flofab.com**. Pour changer l'adresse, modifiez `destinataire` dans `config.js` (et `DESTINATAIRES` dans `google-apps-script/Code.gs` si l'envoi par serveur est utilisé).

Pour que l'envoi soit **entièrement automatique**, sans aucune intervention et sans que rien ne s'affiche sur l'appareil du candidat, installez le script Google Apps Script décrit ci-dessous et collez son URL dans `url`. C'est la méthode recommandée : elle permet aussi de joindre la correction au rapport envoyé (`CORRECTION_DANS_PDF_COURRIEL` dans `app.js`), sans jamais l'exposer sur l'appareil du candidat.

Les symboles non pris en charge par les polices standard des PDF sont remplacés par un équivalent (par exemple « Ω » devient « ohms »).

## Option : envoi automatique par serveur (Google Apps Script)

Une page statique comme GitHub Pages ne peut pas envoyer de courriel elle-même. L'envoi passe par un petit script Google Apps Script, gratuit, qui reçoit le PDF et l'envoie depuis votre compte Google (Gmail ou Google Workspace). Il peut aussi enregistrer une copie dans Google Drive.

### 1. Créer le script

1. Connectez-vous au compte Google qui enverra les courriels (idéalement un compte de l'entreprise).
2. Allez sur https://script.google.com et cliquez sur **Nouveau projet**.
3. Remplacez le contenu du fichier `Code.gs` par celui du fichier `google-apps-script/Code.gs` de ce dépôt.
4. Modifiez le bloc `CONFIG` au début du fichier :
   - `DESTINATAIRES` : adresse qui reçoit tous les rapports (déjà réglée à `jeanto@flofab.com`) ;
   - `JETON` : une longue chaîne aléatoire (par exemple 32 caractères) ;
   - `DOSSIER_DRIVE_ID` : facultatif, identifiant du dossier Drive où conserver une copie des PDF.
5. Enregistrez, choisissez la fonction `testerEnvoi` dans la liste, puis cliquez sur **Exécuter**. Acceptez les autorisations demandées. Un courriel de test est envoyé aux destinataires.

### 2. Déployer le script comme application Web

1. Cliquez sur **Déployer**, puis **Nouveau déploiement**.
2. Type : **Application Web**.
3. Exécuter en tant que : **Moi**.
4. Qui a accès : **Tout le monde**. Ce réglage est nécessaire pour que la page GitHub puisse joindre le script. Le jeton empêche les envois non autorisés.
5. Cliquez sur **Déployer** et copiez l'**URL de l'application Web** (elle se termine par `/exec`).

Pour vérifier, ouvrez cette URL dans un navigateur : le message « Service d'envoi des rapports Flo-Fab actif » doit s'afficher.

### 3. Configurer l'application

Dans `config.js`, inscrivez l'URL et le même jeton (avec `methode: "auto"` ou `"serveur"`) :

```js
window.FLOFAB_CONFIG = {
  courriel: {
    methode: "auto",
    destinataire: "jeanto@flofab.com",
    url: "https://script.google.com/macros/s/XXXXXXXX/exec",
    jeton: "le-meme-jeton-que-dans-Code.gs",
    envoiAutomatique: true,   // false : envoi seulement avec le bouton « Envoyer par courriel »
  },
};
```

Publiez la modification sur GitHub. Après chaque modification de `Code.gs`, faites **Déployer**, **Gérer les déploiements**, puis créez une nouvelle version pour qu'elle soit prise en compte (l'URL reste la même).

### Destinataires et sécurité

- Les rapports sont toujours envoyés aux adresses fixées dans `Code.gs`. L'application ne peut pas choisir d'autres destinataires.
- Le script limite le nombre d'envois par heure (`ENVOIS_MAX_PAR_HEURE`) et la taille du PDF.
- Le jeton est visible dans `config.js`, comme le reste du code d'une page statique. Il protège contre les envois accidentels ou automatisés, mais pas contre une personne qui lit le code. Si des envois indésirables apparaissent, changez le jeton dans les deux fichiers.
- Quotas de Google : environ 100 destinataires par jour avec un compte Gmail gratuit, et environ 1 500 avec Google Workspace. La fonction `testerEnvoi` affiche le quota restant.
- Les rapports transitent par le compte Google de l'entreprise. Assurez-vous que cela respecte vos règles sur les renseignements personnels des employés et des candidats.

## Mise en ligne sur GitHub Pages

1. Créez un nouveau dépôt sur GitHub (par exemple `flofab-evaluation`).
2. Téléversez tous les fichiers de ce dossier à la racine du dépôt, en conservant le dossier `data/`.
3. Dans le dépôt, ouvrez **Settings**, puis **Pages**.
4. Sous **Build and deployment**, choisissez **Deploy from a branch**, la branche `main` et le dossier `/ (root)`, puis enregistrez.
5. Après une ou deux minutes, l'application est accessible à l'adresse `https://<votre-compte>.github.io/flofab-evaluation/`.

Avec Git en ligne de commande :

```bash
git init
git add .
git commit -m "Application d'évaluation technique Flo-Fab"
git branch -M main
git remote add origin https://github.com/<votre-compte>/flofab-evaluation.git
git push -u origin main
```

Pour tester en local, ouvrez simplement `index.html` dans un navigateur (le mode hors ligne et l'installation ne fonctionnent qu'en ligne, sur une adresse https, comme GitHub Pages). Une connexion Internet est nécessaire pour la production du PDF (bibliothèque jsPDF chargée depuis cdn.jsdelivr.net).

## Structure

```
index.html                 Page principale
styles.css                 Mise en forme
app.js                     Logique de l'application, grille d'évaluation et rapport PDF
config.js                  Configuration de l'envoi par courriel
manifest.webmanifest       Informations pour l'installation sur tablette
sw.js                      Fonctionnement hors ligne (service worker)
icons/                     Icônes de l'application
data/questionnaires.js     Banque de questions
google-apps-script/Code.gs Script d'envoi des rapports par courriel (à installer dans Google Apps Script)
.nojekyll                  Désactive le traitement Jekyll de GitHub Pages
```

## Modifier les questions

Les questions se trouvent dans `data/questionnaires.js`. Chaque question suit ce format :

```js
{
  "question": "Texte de la question",
  "choix": ["Choix A", "Choix B", "Choix C", "Choix D"],
  "reponse": 1,              // index de la bonne réponse : 0 = A, 1 = B, 2 = C, 3 = D
  "explication": "Explication affichée dans la correction"
}
```

Si vous modifiez les questions dans l'application, pensez à mettre à jour les questionnaires Word pour garder les deux versions identiques.

## Confidentialité et limites

- Les réponses et l'historique restent dans le navigateur utilisé (stockage local). Seul le rapport PDF est transmis, et seulement si l'envoi par courriel est configuré. Effacer les données du navigateur efface l'historique. Exportez les résultats en CSV pour les conserver.
- L'historique n'est pas partagé entre ordinateurs. Pour centraliser les résultats, exportez-les en CSV depuis chaque poste.
- Comme l'application est statique, les bonnes réponses se trouvent dans le code source de la page. Un candidat qui sait consulter le code pourrait les voir. Pour une évaluation formelle, faites passer le questionnaire sous supervision, sur un poste de l'entreprise, ou utilisez la version papier. Pour protéger complètement les réponses, il faudrait une correction côté serveur.
- Le résultat du candidat n'est jamais affiché à l'écran ; il est protégé par le code de l'espace responsable (voir plus haut). Ce code, comme le reste du code d'une page statique, peut être contourné par une personne qui inspecte le code de la page. Pour une protection totale, utilisez l'envoi automatique par serveur : le résultat ne transite alors que par courriel, jamais par l'écran de l'appareil.
- Sur GitHub Pages, un dépôt public rend l'application et la banque de questions accessibles à tous ceux qui ont l'adresse. Utilisez un dépôt privé si votre forfait GitHub le permet pour Pages, ou hébergez l'application sur un serveur interne.
