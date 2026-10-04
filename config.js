/* Configuration de l'envoi du rapport PDF par courriel à la fin de chaque évaluation.

   Les rapports sont toujours envoyés à l'adresse « destinataire » ci-dessous.

   methode: "auto" (par défaut)
     Si « url » est rempli, envoi entièrement automatique par le serveur (Google Apps Script), sans aucune intervention.
     Sinon, envoi avec l'application de courriel de l'appareil (voir « appareil »).

   methode: "appareil"
     Le rapport PDF est envoyé avec l'application de courriel de l'appareil
     (Mail sur iPad, Gmail ou Outlook sur Android, Outlook ou Mail sur ordinateur).
     Sur tablette, le menu de partage s'ouvre avec le PDF déjà joint : on choisit l'application de courriel, puis on envoie.
     Sur un ordinateur sans partage de fichiers, le PDF est téléchargé et un courriel prérempli s'ouvre ; il reste à joindre le PDF.

   methode: "serveur"
     Envoi automatique, sans intervention, par Google Apps Script (voir README.md et google-apps-script/Code.gs).
*/
window.FLOFAB_CONFIG = {
  // Code du responsable : protège l'historique des résultats, les tentatives et l'évaluation sur papier.
  // Le candidat ne voit jamais son résultat ; seul le responsable, avec ce code, peut le consulter.
  // Changez cette valeur pour un code connu seulement des responsables.
  responsable: {
    code: "1980",
  },
  courriel: {
    methode: "auto",
    destinataire: "jeanto@flofab.com",   // adresse qui reçoit tous les rapports
    envoiAutomatique: true,  // ouvrir l'envoi dès que le questionnaire est terminé

    // Envoi automatique par le serveur : coller ici l'URL du déploiement Google Apps Script (voir README.md)
    url: "https://script.google.com/macros/s/AKfycbwyfHktBhFv-43IElKeL3DYWlHRO6mJe9iS4r0CcA9P0tQMju4X_gEWXQXhehCdNGwn/exec",                 // ← COLLER ICI l'URL de l'application Web Google Apps Script (se termine par /exec)
    jeton: "ff-LnXJxYNIg5pWdQNf0w049AG3a2IquUfE",   // identique à JETON dans google-apps-script/Code.gs (déjà réglé)
  },
};
