// Banque de questions Flo-Fab — générée à partir des questionnaires Word (même ordre des choix).
// reponse = index (0 = A, 1 = B, 2 = C, 3 = D) de la bonne réponse dans « choix ».
// complexite = 1 (faible), 2 (moyenne) ou 3 (élevée) ; c est aussi le nombre de points de la question.
window.QUESTIONNAIRES = [
  {
    "id": "mecanique-sae",
    "numero": 1,
    "titre": "Bases en mécanique (SAE)",
    "questions": [
      {
        "question": "On applique une force de 50 lb au bout d'une clé de 2 pi. Quel couple est produit ?",
        "choix": [
          "25 lb·pi",
          "100 lb·pi",
          "52 lb·pi",
          "200 lb·pi"
        ],
        "reponse": 1,
        "complexite": 1,
        "explication": "Couple = force × bras de levier = 50 lb × 2 pi = 100 lb·pi."
      },
      {
        "question": "Quelle formule donne la puissance d'un moteur en HP à partir du couple (lb·pi) et de la vitesse (tr/min) ?",
        "choix": [
          "HP = couple / tr/min",
          "HP = couple × tr/min × 5252",
          "HP = tr/min / couple",
          "HP = couple × tr/min / 5252"
        ],
        "reponse": 3,
        "complexite": 2,
        "explication": "HP = couple (lb·pi) × tr/min / 5252. À vitesse égale, la puissance est proportionnelle au couple."
      },
      {
        "question": "Quelle fraction de pouce correspond à 0,0625 po ?",
        "choix": [
          "1/64 po",
          "1/32 po",
          "1/8 po",
          "1/16 po"
        ],
        "reponse": 3,
        "complexite": 1,
        "explication": "1 ÷ 16 = 0,0625 : c'est 1/16 po. Repères utiles : 1/8 = 0,125 ; 1/32 = 0,03125 ; 1/64 ≈ 0,0156."
      },
      {
        "question": "Quelle est la valeur décimale de 3/8 po ?",
        "choix": [
          "0,375 po",
          "0,250 po",
          "0,625 po",
          "0,500 po"
        ],
        "reponse": 0,
        "complexite": 1,
        "explication": "3 ÷ 8 = 0,375 po."
      },
      {
        "question": "Un « mil » utilisé pour les tolérances d'alignement correspond à :",
        "choix": [
          "0,001 po",
          "0,01 po",
          "1/16 po",
          "0,1 po"
        ],
        "reponse": 0,
        "complexite": 2,
        "explication": "1 mil = 1 millième de pouce = 0,001 po. Les tolérances d'alignement sont souvent de quelques mils."
      },
      {
        "question": "Avec un micromètre en pouces standard, quelle est la précision de lecture habituelle ?",
        "choix": [
          "1/4 po",
          "0,01 po",
          "1/16 po",
          "0,001 po"
        ],
        "reponse": 3,
        "complexite": 1,
        "explication": "Un micromètre standard se lit au millième de pouce (0,001 po), certains au dix-millième avec vernier."
      },
      {
        "question": "Que signifie la désignation de filetage 1/2\"-13 UNC ?",
        "choix": [
          "Diamètre nominal de 1/2 po et 13 filets par pouce, pas gros unifié",
          "Classe de résistance 13",
          "Longueur de 1/2 po et 13 filets au total",
          "Longueur de 13 po"
        ],
        "reponse": 0,
        "complexite": 2,
        "explication": "UNC = Unified National Coarse ; 13 filets par pouce pour un diamètre de 1/2 po."
      },
      {
        "question": "Quelle est la différence entre un filetage UNC et UNF de même diamètre ?",
        "choix": [
          "Ils sont identiques",
          "L'UNF a plus de filets par pouce (pas plus fin)",
          "L'UNC est réservé aux tuyaux",
          "L'UNF a moins de filets par pouce"
        ],
        "reponse": 1,
        "complexite": 2,
        "explication": "UNF = Unified National Fine : pas plus fin, meilleure résistance aux vibrations et réglage plus précis."
      },
      {
        "question": "La tête d'un boulon SAE porte 6 lignes radiales. De quel grade s'agit-il ?",
        "choix": [
          "Grade 8",
          "Grade 10",
          "Grade 2",
          "Grade 5"
        ],
        "reponse": 0,
        "complexite": 2,
        "explication": "Selon SAE J429 : aucune ligne = grade 2, 3 lignes = grade 5, 6 lignes = grade 8."
      },
      {
        "question": "Quelle est la résistance minimale à la traction d'un boulon SAE de grade 8 ?",
        "choix": [
          "150 000 psi",
          "60 000 psi",
          "120 000 psi",
          "90 000 psi"
        ],
        "reponse": 0,
        "complexite": 3,
        "explication": "Grade 8 : 150 000 psi ; grade 5 : 120 000 psi (jusqu'à 1 po)."
      },
      {
        "question": "Quelle taille de clé utilise-t-on habituellement pour la tête hexagonale d'un boulon de 1/2 po ?",
        "choix": [
          "1/2 po",
          "1 po",
          "3/4 po",
          "9/16 po"
        ],
        "reponse": 2,
        "complexite": 2,
        "explication": "Un boulon hexagonal standard de 1/2 po a une tête de 3/4 po."
      },
      {
        "question": "Quelle clé est préférable pour desserrer un écrou très serré ou grippé ?",
        "choix": [
          "Une pince-étau",
          "Une clé polygonale ou une douille à 6 pans de la bonne taille",
          "Une clé à fourche usée",
          "Une clé à molette"
        ],
        "reponse": 1,
        "complexite": 1,
        "explication": "Une clé 6 pans de la bonne taille appuie sur les faces de l'écrou et non sur les coins : elle risque moins de glisser et d'arrondir l'écrou."
      },
      {
        "question": "Dans quelle unité SAE exprime-t-on couramment un couple de serrage de boulon ?",
        "choix": [
          "HP",
          "psi",
          "lb·pi (ou lb·po pour les petits boulons)",
          "gal/min"
        ],
        "reponse": 2,
        "complexite": 1,
        "explication": "Les clés dynamométriques SAE sont graduées en lb·pi ou en lb·po."
      },
      {
        "question": "Comment doit-on serrer les boulons d'une bride de tuyauterie ?",
        "choix": [
          "Le plus fort possible avec une rallonge",
          "Progressivement, en plusieurs passes, selon un ordre en croix (étoile)",
          "Seulement les boulons du haut",
          "Un boulon à la fois au couple final, dans le sens horaire"
        ],
        "reponse": 1,
        "complexite": 1,
        "explication": "Le serrage en croix par passes répartit la pression sur le joint et évite les fuites."
      },
      {
        "question": "Pourquoi utilise-t-on un produit frein-filet sur certains boulons ?",
        "choix": [
          "Pour empêcher le desserrage causé par les vibrations",
          "Pour lubrifier le filetage",
          "Pour augmenter la conductivité électrique",
          "Pour faciliter le démontage"
        ],
        "reponse": 0,
        "complexite": 1,
        "explication": "Le frein-filet empêche le desserrage sur les équipements soumis aux vibrations."
      },
      {
        "question": "Qu'est-ce qui caractérise un filetage de tuyau NPT ?",
        "choix": [
          "Il ne s'utilise que pour l'électricité",
          "Il est parfaitement cylindrique",
          "Il est conique, et l'étanchéité se fait par le serrage des filets avec un scellant (ruban ou pâte)",
          "Il est identique à un filetage UNC"
        ],
        "reponse": 2,
        "complexite": 2,
        "explication": "NPT = National Pipe Taper : filetage conique qui scelle par coincement, complété par un scellant."
      },
      {
        "question": "Un manomètre indique 60 psig. Que signifie « psig » ?",
        "choix": [
          "Pression absolue, mesurée par rapport au vide",
          "Pression différentielle entre deux pompes",
          "Pression en gallons",
          "Pression relative, mesurée par rapport à la pression atmosphérique"
        ],
        "reponse": 3,
        "complexite": 2,
        "explication": "psig = pression relative (gauge), par rapport à l'atmosphère. psia = pression absolue : environ 14,7 psi de plus au niveau de la mer."
      },
      {
        "question": "Une pompe remplit un réservoir de 600 gal US en 10 minutes. Quel est son débit moyen ?",
        "choix": [
          "600 gpm",
          "6 000 gpm",
          "60 gpm",
          "6 gpm"
        ],
        "reponse": 2,
        "complexite": 2,
        "explication": "Débit = volume ÷ temps = 600 gal ÷ 10 min = 60 gpm."
      },
      {
        "question": "Par rapport à un roulement à billes de même taille, un roulement à rouleaux cylindriques :",
        "choix": [
          "Ne nécessite aucune lubrification",
          "Supporte uniquement des charges axiales",
          "Supporte des charges radiales plus élevées",
          "Tourne toujours plus vite"
        ],
        "reponse": 2,
        "complexite": 2,
        "explication": "Le contact linéaire des rouleaux supporte davantage de charge radiale que le contact ponctuel des billes."
      },
      {
        "question": "Quel est l'effet d'un excès de graisse dans un roulement ?",
        "choix": [
          "Il prolonge toujours la durée de vie",
          "Il réduit la vitesse du moteur",
          "Il n'a aucun effet",
          "Il provoque un échauffement et peut endommager le roulement et les joints"
        ],
        "reponse": 3,
        "complexite": 1,
        "explication": "Trop de graisse crée du brassage et de la chaleur ; suivre la quantité et la fréquence du fabricant."
      },
      {
        "question": "Quels sont les deux types de désalignement entre un moteur et une pompe ?",
        "choix": [
          "Axial et thermique seulement",
          "Électrique et mécanique",
          "Vertical et chromatique",
          "Parallèle (décalage) et angulaire"
        ],
        "reponse": 3,
        "complexite": 2,
        "explication": "Le désalignement se mesure en décalage parallèle et en angle, dans les plans vertical et horizontal."
      },
      {
        "question": "Qu'est-ce qu'un « pied bancal » (soft foot) sur un moteur ?",
        "choix": [
          "Un pied en caoutchouc antivibratoire",
          "Un pied qui ne repose pas uniformément sur sa base et déforme la carcasse au serrage",
          "Un pied du moteur plus lourd que les autres",
          "Un moteur monté à la verticale"
        ],
        "reponse": 1,
        "complexite": 3,
        "explication": "On le mesure en mils et on le corrige avec des cales avant l'alignement."
      },
      {
        "question": "En système SAE, en quelle unité exprime-t-on souvent la vitesse vibratoire d'une machine ?",
        "choix": [
          "En psi",
          "En lb·pi",
          "En po/s (pouces par seconde)",
          "En °F"
        ],
        "reponse": 2,
        "complexite": 3,
        "explication": "La vitesse vibratoire est souvent donnée en po/s ; le déplacement, en mils."
      },
      {
        "question": "Pourquoi un protecteur d'accouplement est-il obligatoire sur un groupe moto-pompe ?",
        "choix": [
          "Pour augmenter le rendement",
          "Pour protéger les travailleurs contre les pièces en rotation",
          "Pour lubrifier l'accouplement",
          "Pour réduire le bruit"
        ],
        "reponse": 1,
        "complexite": 1,
        "explication": "Les pièces en mouvement doivent être protégées ; ne jamais faire fonctionner sans protecteur."
      },
      {
        "question": "Lors du levage d'un groupe pompe-moteur monté sur base, quelle pratique est correcte ?",
        "choix": [
          "Utiliser les points de levage prévus sur la base et des élingues dont la capacité (en lb) est suffisante",
          "Soulever par l'anneau de levage du moteur",
          "Soulever par l'arbre",
          "Soulever par les brides de la pompe"
        ],
        "reponse": 0,
        "complexite": 1,
        "explication": "L'anneau du moteur est conçu pour le moteur seul ; vérifier la charge maximale d'utilisation (WLL) des élingues."
      }
    ]
  },
  {
    "id": "outils",
    "numero": 2,
    "titre": "Utilisation des outils",
    "questions": [
      {
        "question": "Avant de percer un trou dans une pièce d'acier, pourquoi marque-t-on l'emplacement avec un pointeau ?",
        "choix": [
          "Pour empêcher le foret de glisser et le centrer au bon endroit",
          "Pour indiquer la profondeur du trou",
          "Pour durcir le métal à cet endroit",
          "Pour refroidir le foret"
        ],
        "reponse": 0,
        "complexite": 1,
        "explication": "La petite empreinte du pointeau guide la pointe du foret au démarrage et évite qu'il se déplace sur la surface."
      },
      {
        "question": "Sur une perceuse à colonne, comment doit-on régler la vitesse de rotation pour un foret de plus grand diamètre ?",
        "choix": [
          "Plus lente",
          "Plus rapide",
          "La même, quel que soit le diamètre",
          "Au maximum de la perceuse"
        ],
        "reponse": 0,
        "complexite": 2,
        "explication": "Plus le diamètre est grand, plus la vitesse à la périphérie du foret est élevée : on réduit la vitesse de rotation pour éviter la surchauffe et l'usure du foret."
      },
      {
        "question": "Quelle pratique est recommandée pour percer de l'acier inoxydable ?",
        "choix": [
          "Vitesse élevée et faible pression pour ne pas forcer",
          "Percer à sec pour éviter les taches",
          "Laisser le foret tourner sans avancer pour amorcer le trou",
          "Vitesse lente, avance ferme et constante, avec huile de coupe"
        ],
        "reponse": 3,
        "complexite": 3,
        "explication": "L'inox durcit s'il chauffe sous un foret qui frotte (écrouissage). Une vitesse lente, une avance constante et de l'huile de coupe gardent l'arête en prise et le foret froid."
      },
      {
        "question": "Sur une perceuse à colonne, comment doit-on tenir une petite pièce à percer ?",
        "choix": [
          "Posée sur la table sans fixation",
          "Serrée dans un étau ou fixée avec des brides",
          "Tenue avec une pince par un collègue",
          "À la main, fermement"
        ],
        "reponse": 1,
        "complexite": 1,
        "explication": "Une pièce tenue à la main peut être entraînée par le foret et causer des blessures graves. Elle doit toujours être bloquée dans un étau ou par des brides."
      },
      {
        "question": "Quel foret utilise-t-on habituellement avant de tarauder un trou 1/2\"-13 UNC ?",
        "choix": [
          "9/16 po",
          "1/2 po",
          "27/64 po",
          "3/8 po"
        ],
        "reponse": 2,
        "complexite": 2,
        "explication": "Le foret de taraudage d'un 1/2\"-13 UNC est de 27/64 po (0,422 po) : environ le diamètre nominal moins le pas (0,500 − 1/13 po). Un foret de 1/2 po ne laisserait pas de matière pour les filets."
      },
      {
        "question": "Dans un jeu de trois tarauds manuels, dans quel ordre les utilise-t-on ?",
        "choix": [
          "Ébaucheur (entrée conique), intermédiaire, finisseur",
          "Seulement le finisseur",
          "Dans n'importe quel ordre",
          "Finisseur, intermédiaire, ébaucheur"
        ],
        "reponse": 0,
        "complexite": 2,
        "explication": "L'ébaucheur, à longue entrée conique, amorce le filetage ; l'intermédiaire le prolonge ; le finisseur termine les filets jusqu'au fond."
      },
      {
        "question": "Pendant un taraudage manuel, pourquoi fait-on régulièrement un demi-tour vers l'arrière ?",
        "choix": [
          "Pour aller plus vite",
          "Pour vérifier le pas",
          "Pour agrandir le filetage",
          "Pour casser et dégager les copeaux et éviter de briser le taraud"
        ],
        "reponse": 3,
        "complexite": 2,
        "explication": "Le retour en arrière fragmente les copeaux ; sans cela, ils bloquent les goujures et le taraud risque de casser dans le trou."
      },
      {
        "question": "Pour tarauder un trou borgne, pourquoi perce-t-on plus profond que la longueur filetée demandée ?",
        "choix": [
          "Parce que l'entrée du taraud ne fait pas de filets complets et qu'il faut de la place pour les copeaux",
          "Ce n'est pas nécessaire",
          "Pour réduire le poids de la pièce",
          "Pour que la vis dépasse de l'autre côté"
        ],
        "reponse": 0,
        "complexite": 3,
        "explication": "Les premiers filets du taraud sont incomplets (entrée conique) et les copeaux s'accumulent au fond : un trou plus profond permet d'obtenir la longueur de filets complets requise sans casser le taraud."
      },
      {
        "question": "En production, quel instrument permet de vérifier rapidement si un alésage est dans sa tolérance ?",
        "choix": [
          "Un niveau à bulle",
          "Un rapporteur d'angle",
          "Un ruban à mesurer",
          "Un tampon (calibre) entre / n'entre pas (go/no-go)"
        ],
        "reponse": 3,
        "complexite": 2,
        "explication": "Le côté « entre » doit passer et le côté « n'entre pas » ne doit pas passer : l'alésage est alors dans sa tolérance, sans lecture ni calcul."
      },
      {
        "question": "Que faut-il vérifier avant de prendre une mesure avec un micromètre ?",
        "choix": [
          "Rien, il est toujours juste",
          "Le zéro, touches propres et fermées (ou avec l'étalon)",
          "La température de la pièce seulement",
          "La couleur du micromètre"
        ],
        "reponse": 1,
        "complexite": 1,
        "explication": "On nettoie les touches et on vérifie que le micromètre indique zéro fermé (ou la valeur de l'étalon). Sinon, toutes les mesures seront décalées."
      },
      {
        "question": "Quel instrument utilise-t-on pour mesurer le faux-rond (battement) d'un arbre en rotation ?",
        "choix": [
          "Un comparateur à cadran sur support magnétique",
          "Un ruban à mesurer",
          "Une jauge d'épaisseur",
          "Un niveau à bulle"
        ],
        "reponse": 0,
        "complexite": 2,
        "explication": "Le comparateur, fixé sur un support, touche l'arbre ; en tournant l'arbre, l'écart entre la lecture la plus haute et la plus basse donne le faux-rond."
      },
      {
        "question": "À quoi sert une jauge d'épaisseur (jeu de lames calibrées) ?",
        "choix": [
          "À tracer des lignes",
          "À mesurer un jeu ou un espace entre deux surfaces",
          "À mesurer un couple de serrage",
          "À mesurer un diamètre"
        ],
        "reponse": 1,
        "complexite": 1,
        "explication": "On glisse les lames calibrées dans l'espace, par exemple entre deux moitiés d'accouplement, jusqu'à trouver l'épaisseur qui passe avec un léger frottement."
      },
      {
        "question": "Une cote est indiquée 2,000 ± 0,005 po. La pièce mesure 2,008 po. Est-elle conforme ?",
        "choix": [
          "Non, elle est hors tolérance : la limite maximale est 2,005 po",
          "On ne peut pas le savoir",
          "Oui, elle est dans la tolérance",
          "Oui, car l'écart est inférieur à 1/16 po"
        ],
        "reponse": 0,
        "complexite": 2,
        "explication": "La plage acceptable va de 1,995 à 2,005 po. À 2,008 po, la pièce dépasse la limite maximale."
      },
      {
        "question": "Un alésage est coté 1,250 +0,002 / −0,000 po. Quelles dimensions sont acceptables ?",
        "choix": [
          "Exactement 1,250 po",
          "De 1,248 à 1,250 po",
          "De 1,250 à 1,252 po",
          "De 1,248 à 1,252 po"
        ],
        "reponse": 2,
        "complexite": 3,
        "explication": "La tolérance est unilatérale : rien en dessous de 1,250 po (−0,000) et au plus 0,002 po au-dessus, soit de 1,250 à 1,252 po."
      },
      {
        "question": "Quelle tolérance s'applique à une cote du dessin qui n'a pas de tolérance indiquée ?",
        "choix": [
          "Aucune, n'importe quelle valeur est acceptée",
          "± 1/16 po dans tous les cas",
          "Celle choisie par le machiniste",
          "La tolérance générale indiquée dans le cartouche du dessin (par exemple ± 0,010 po pour les cotes à 3 décimales)"
        ],
        "reponse": 3,
        "complexite": 2,
        "explication": "Les cotes sans tolérance suivent la tolérance générale du cartouche, souvent selon le nombre de décimales de la cote. En cas de doute, on la demande au responsable du dessin."
      },
      {
        "question": "Avec une clé dynamométrique à déclic, que faut-il faire lorsque le déclic se produit ?",
        "choix": [
          "Relâcher puis refaire plusieurs déclics",
          "Continuer à tirer pour être sûr",
          "Arrêter de forcer : le couple réglé est atteint",
          "Donner un coup sec supplémentaire"
        ],
        "reponse": 2,
        "complexite": 1,
        "explication": "Le déclic indique que le couple réglé est atteint. Continuer à tirer, ou multiplier les déclics, dépasse le couple voulu."
      },
      {
        "question": "Comment range-t-on une clé dynamométrique à déclic après usage ?",
        "choix": [
          "Réglée au couple maximal",
          "Dans le coffre avec les marteaux",
          "Réglée au dernier couple utilisé",
          "Réglée à sa valeur minimale de l'échelle, pour détendre le ressort"
        ],
        "reponse": 3,
        "complexite": 2,
        "explication": "Laisser le ressort comprimé fausse l'étalonnage avec le temps. On la ramène à la valeur minimale de l'échelle (sans aller en dessous) et on la fait étalonner périodiquement."
      },
      {
        "question": "On applique le même couple de serrage sur un boulon aux filets lubrifiés au lieu de secs. Qu'arrive-t-il ?",
        "choix": [
          "Le boulon se desserre plus vite",
          "La tension (précharge) dans le boulon est plus élevée, avec un risque de surserrage",
          "Il n'y a aucune différence",
          "La tension dans le boulon est plus faible"
        ],
        "reponse": 1,
        "complexite": 3,
        "explication": "Le lubrifiant réduit le frottement : une plus grande partie du couple devient de la tension dans le boulon. On doit utiliser le couple prévu pour l'état lubrifié."
      },
      {
        "question": "Lors d'un alignement au comparateur, pourquoi fait-on tourner les deux arbres ensemble ?",
        "choix": [
          "Pour mesurer seulement le désalignement entre les arbres, sans l'effet du faux-rond des surfaces",
          "Pour réchauffer les roulements",
          "Pour aller plus vite",
          "Parce que le comparateur l'exige"
        ],
        "reponse": 0,
        "complexite": 3,
        "explication": "En tournant les deux arbres ensemble, le comparateur reste au même point des surfaces : les défauts de forme ne faussent pas la lecture."
      },
      {
        "question": "Quelle pratique est correcte pour les cales placées sous les pieds d'un moteur lors d'un alignement ?",
        "choix": [
          "Mettre des cales seulement sous un pied",
          "Utiliser des cales calibrées propres, en nombre limité (idéalement 3 ou 4 au maximum par pied)",
          "Utiliser des retailles de tôle de différentes épaisseurs",
          "Empiler autant de cales minces que nécessaire"
        ],
        "reponse": 1,
        "complexite": 2,
        "explication": "Un empilage de nombreuses cales minces se tasse comme un ressort et fausse l'alignement. On utilise peu de cales calibrées, propres et sans bavures."
      },
      {
        "question": "Pourquoi aligne-t-on parfois une pompe qui transporte un liquide chaud avec un décalage volontaire à froid ?",
        "choix": [
          "Parce que le moteur est plus lourd",
          "Pour faciliter le démontage",
          "Pour compenser la dilatation thermique : les arbres seront alignés à la température de fonctionnement",
          "Pour réduire le bruit"
        ],
        "reponse": 2,
        "complexite": 3,
        "explication": "La pompe et le moteur ne se dilatent pas de la même façon. Le fabricant indique le décalage à prévoir à froid pour obtenir un bon alignement à chaud."
      },
      {
        "question": "Quel est le rôle principal d'une rondelle plate placée sous un écrou ?",
        "choix": [
          "Remplacer le frein-filet",
          "Augmenter la longueur du boulon",
          "Isoler électriquement le boulon",
          "Répartir la charge et protéger la surface de la pièce"
        ],
        "reponse": 3,
        "complexite": 1,
        "explication": "La rondelle plate répartit l'effort de serrage sur une plus grande surface et évite que l'écrou marque ou écrase la pièce."
      },
      {
        "question": "Peut-on réutiliser un écrou autobloquant à insert de nylon après l'avoir démonté ?",
        "choix": [
          "Oui, si on le chauffe avant",
          "Ce n'est pas recommandé : l'insert perd de son efficacité, il faut le remplacer",
          "Oui, indéfiniment",
          "Oui, si on ajoute de la graisse"
        ],
        "reponse": 1,
        "complexite": 2,
        "explication": "L'insert de nylon se déforme à chaque serrage et retient de moins en moins. Sur les équipements soumis aux vibrations, on remplace l'écrou."
      },
      {
        "question": "Pourquoi applique-t-on du bleu à tracer (encre de traçage) sur une pièce métallique avant de la tracer ?",
        "choix": [
          "Pour faciliter la soudure",
          "Pour la protéger de la rouille",
          "Pour rendre bien visibles les traits faits à la pointe à tracer",
          "Pour mesurer son épaisseur"
        ],
        "reponse": 2,
        "complexite": 1,
        "explication": "La pointe à tracer enlève la mince couche d'encre et laisse un trait fin et net, facile à voir sur le métal."
      },
      {
        "question": "Quel outil utilise-t-on pour tracer une ligne parallèle à une surface de référence, à une hauteur précise, sur une pièce posée sur un marbre ?",
        "choix": [
          "Un compas à pointes sèches",
          "Un pointeau",
          "Un trusquin (ou traceur de hauteur)",
          "Un rapporteur d'angle"
        ],
        "reponse": 2,
        "complexite": 2,
        "explication": "Le trusquin glisse sur le marbre et sa pointe, réglée à la hauteur voulue, trace une ligne parallèle à la surface d'appui."
      }
    ]
  },
  {
    "id": "lecture-plan",
    "numero": 3,
    "titre": "Lecture de plan",
    "questions": [
      {
        "question": "Dans le cartouche d'un dessin d'atelier, le champ « REV » indique B. Que signifie cette information ?",
        "choix": [
          "La révision (version) du dessin : il faut toujours travailler avec la plus récente",
          "Le nombre de feuilles du dessin",
          "La classe de pression de la tuyauterie",
          "Le nom du dessinateur"
        ],
        "reponse": 0,
        "complexite": 1,
        "explication": "La révision identifie la version du dessin. L'historique des révisions décrit ce qui a changé (ici, B : ajout d'un support de tuyauterie pour l'échangeur). On vérifie toujours qu'on fabrique selon la dernière révision."
      },
      {
        "question": "Sur une vue d'implantation du skid, la note « MESURES EN ROUGE À RESPECTER » accompagne certaines cotes écrites en rouge. Que faut-il comprendre ?",
        "choix": [
          "Les cotes en rouge sont en millimètres",
          "Les cotes en rouge ont été annulées",
          "Les cotes en rouge sont facultatives",
          "Les cotes en rouge sont critiques : elles doivent être respectées à l'assemblage, par exemple pour les raccords du client"
        ],
        "reponse": 3,
        "complexite": 2,
        "explication": "Ces cotes fixent la position des brides et des raccords que le client va brancher sur le chantier. Un écart peut empêcher l'installation du skid."
      },
      {
        "question": "Sur une vue de dessin technique, que représente un trait interrompu (en pointillé) ?",
        "choix": [
          "Une arête visible",
          "Une ligne de coupe",
          "Une arête ou un contour caché derrière la matière",
          "Une soudure"
        ],
        "reponse": 2,
        "complexite": 1,
        "explication": "Le trait interrompu montre une arête qu'on ne voit pas depuis ce point de vue, par exemple l'intérieur d'un trou ou l'arrière d'une pièce."
      },
      {
        "question": "Sur un dessin, que représente un trait mixte fin (long trait, point, long trait) qui traverse un trou ou une pièce ronde ?",
        "choix": [
          "Un axe ou une ligne de centre",
          "Une cote de référence",
          "Une limite de peinture",
          "Une arête cachée"
        ],
        "reponse": 0,
        "complexite": 1,
        "explication": "Le trait d'axe indique le centre d'un trou, d'un tuyau ou d'une pièce symétrique. Les cotes de position des trous se prennent souvent à partir de ces axes."
      },
      {
        "question": "Les notes du plan indiquent « PAINT COLOR RAL 7016 ». Que représente RAL 7016 ?",
        "choix": [
          "Un code de couleur normalisé (ici un gris anthracite)",
          "Une épaisseur de peinture",
          "Une norme de soudure",
          "Une référence de pompe"
        ],
        "reponse": 0,
        "complexite": 1,
        "explication": "RAL est un système normalisé de codes de couleurs. Le code permet d'obtenir exactement la teinte demandée, quel que soit le fournisseur de peinture."
      },
      {
        "question": "La note « ESTIMATED SHIPPING WEIGHT: 7800 LBS » est inscrite sur le plan d'ensemble. À quoi sert-elle à l'atelier ?",
        "choix": [
          "À calculer le prix de la peinture",
          "Elle n'a aucune utilité",
          "À choisir la couleur du skid",
          "À prévoir un levage et un transport de capacité suffisante"
        ],
        "reponse": 3,
        "complexite": 1,
        "explication": "Le poids estimé permet de choisir les élingues, le pont roulant, le chariot élévateur et le transport adaptés à une charge d'environ 7 800 lb."
      },
      {
        "question": "Sur le plan d'ensemble, à quoi correspond le numéro inscrit dans une bulle (cercle) reliée à une pièce par une flèche ?",
        "choix": [
          "À la quantité à commander",
          "Au numéro d'item de la nomenclature (PARTS LIST)",
          "À la cote de la pièce",
          "Au numéro de feuille"
        ],
        "reponse": 1,
        "complexite": 1,
        "explication": "La bulle renvoie à la ligne de la nomenclature, qui donne la description et la quantité de la pièce."
      },
      {
        "question": "Dans la liste « PARTS LIST BY OTHERS », un robinet papillon 6 po est indiqué « BY OTHERS ». Qu'est-ce que cela signifie ?",
        "choix": [
          "Il est en rupture de stock",
          "Il est optionnel",
          "Il est fourni par un tiers (client ou autre entrepreneur), pas par Flo-Fab",
          "Il doit être fabriqué par l'atelier"
        ],
        "reponse": 2,
        "complexite": 1,
        "explication": "« By others » veut dire que la pièce est fournie par quelqu'un d'autre. L'atelier prévoit son emplacement et ses raccords, mais ne l'achète pas."
      },
      {
        "question": "Dans la liste de fabrication, le code 12345-02-PP-01 figure à côté de « SUCTION HEADER ». Que représente ce code ?",
        "choix": [
          "Le numéro du bon de commande",
          "Le numéro de série de la pompe",
          "Le numéro du dessin de fabrication de cette pièce, à utiliser pour l'identifier",
          "Le code de couleur"
        ],
        "reponse": 2,
        "complexite": 2,
        "explication": "Chaque pièce fabriquée a son propre dessin détaillé. On marque la pièce avec ce code pour la retrouver à l'assemblage (ici, PP pour la tuyauterie et ST pour la structure)."
      },
      {
        "question": "Dans une nomenclature, la ligne « FLAT BAR 6\" X 1\" » indique : longueur unitaire 11.000 in, quantité 4, total 44.000 in. Que représente 44.000 in ?",
        "choix": [
          "La longueur d'une seule pièce",
          "La largeur de la barre",
          "Le poids de la barre",
          "La longueur totale de barre plate nécessaire pour les 4 pièces"
        ],
        "reponse": 3,
        "complexite": 2,
        "explication": "4 pièces de 11 po = 44 po de barre plate à prévoir et à couper (sans compter la perte au sciage)."
      },
      {
        "question": "Sur le plan d'ensemble, une zone est annotée « MAKEUP WATER SHIP LOOSE ». Que signifie cette annotation ?",
        "choix": [
          "L'ensemble d'eau d'appoint est livré séparément, non installé sur le skid",
          "Le raccord est desserré volontairement",
          "Le raccord d'eau d'appoint est à souder sur le skid",
          "L'eau d'appoint doit être vidangée avant l'expédition"
        ],
        "reponse": 0,
        "complexite": 2,
        "explication": "« Ship loose » : la pièce est expédiée à part, emballée et identifiée, puis installée sur le chantier."
      },
      {
        "question": "Sur une vue d'implantation, certaines cotes sont entre parenthèses, par exemple (107 1/16). Que signifie une cote entre parenthèses ?",
        "choix": [
          "Une cote de référence, donnée à titre informatif et non utilisée pour contrôler la fabrication",
          "Une cote en millimètres",
          "Une cote à respecter avec la plus grande précision",
          "Une cote à modifier"
        ],
        "reponse": 0,
        "complexite": 3,
        "explication": "La cote de référence découle d'autres cotes. Elle aide à la compréhension, mais les cotes de fabrication à respecter sont les autres (sur ce plan, celles en rouge)."
      },
      {
        "question": "Sur le plan de la base du skid, les cotes 4, 11 1/2, 19, 70 1/2… partent toutes du coin marqué 0. Quel est l'avantage de cette cotation par coordonnées ?",
        "choix": [
          "Chaque position est mesurée depuis la même référence, ce qui évite le cumul des erreurs",
          "Elle permet d'utiliser des millimètres",
          "Elle n'a aucun avantage",
          "Elle réduit le nombre de traits"
        ],
        "reponse": 0,
        "complexite": 3,
        "explication": "En mesurant chaque point depuis l'origine 0, une petite erreur sur une cote ne s'additionne pas aux suivantes, comme ce serait le cas en cotant de proche en proche."
      },
      {
        "question": "Que signifie l'indication « Ø1/2 THRU » sur une cornière ?",
        "choix": [
          "Une soudure de 1/2 po",
          "Un trou taraudé de 1/2 po",
          "Un rayon de 1/2 po",
          "Un trou de 1/2 po de diamètre qui traverse toute l'épaisseur"
        ],
        "reponse": 3,
        "complexite": 1,
        "explication": "Ø désigne un diamètre ; THRU (through) signifie que le trou traverse complètement la pièce."
      },
      {
        "question": "Sur une feuille, une vue est intitulée « DETAIL AA — SCALE 1/12 ». Qu'est-ce que cela signifie ?",
        "choix": [
          "Une liste de pièces",
          "Une vue de détail d'une zone repérée AA sur une autre vue, dessinée à une échelle différente pour être plus lisible",
          "Une tolérance de 1/12 po",
          "Une vue de la pièce AA fournie par d'autres"
        ],
        "reponse": 1,
        "complexite": 2,
        "explication": "La lettre AA repère la zone à agrandir sur la vue principale. Le détail la montre à sa propre échelle ; les cotes, elles, restent les vraies dimensions."
      },
      {
        "question": "Que signifie la cote « R3 15/16 » sur le détail d'un support de tuyau ?",
        "choix": [
          "Un diamètre de 3 15/16 po",
          "Un rayon de 3 15/16 po",
          "Une rugosité de surface",
          "Une révision 3"
        ],
        "reponse": 1,
        "complexite": 1,
        "explication": "R indique un rayon : la courbe du support a un rayon de 3 15/16 po, soit un diamètre de 7 7/8 po. Un diamètre se note Ø."
      },
      {
        "question": "Sur une vue « SECTION U-U », que représentent les hachures (lignes obliques parallèles) ?",
        "choix": [
          "Des pièces fournies par d'autres",
          "Des zones à souder",
          "Des surfaces peintes",
          "La matière coupée par le plan de coupe U-U"
        ],
        "reponse": 3,
        "complexite": 2,
        "explication": "La vue en coupe montre l'intérieur de la pièce comme si elle était tranchée le long de la ligne U-U ; les hachures indiquent la matière coupée."
      },
      {
        "question": "Sur le plan, l'entrée est indiquée « INLET Ø6\" FLG. CLASS 150 ». Que signifie cette désignation ?",
        "choix": [
          "Tuyau de 6 pi soudé bout à bout",
          "Filetage NPT de 6 po",
          "Tuyau de 150 po de longueur",
          "Raccord à bride de diamètre nominal 6 po, de classe de pression 150"
        ],
        "reponse": 3,
        "complexite": 2,
        "explication": "FLG = bride (flange). Class 150 est la classe de pression normalisée de la bride ; les brides raccordées doivent avoir la même classe et le même diamètre nominal."
      },
      {
        "question": "Les notes indiquent « PIPING MATERIAL: STEEL SA106GRB SCH-40 ». Que désigne « SCH-40 » ?",
        "choix": [
          "La longueur du tuyau",
          "L'épaisseur de paroi du tuyau (schedule 40)",
          "Le grade de peinture",
          "La température maximale"
        ],
        "reponse": 1,
        "complexite": 2,
        "explication": "Le schedule définit l'épaisseur de paroi pour un diamètre donné. SA-106 grade B est la nuance d'acier au carbone du tuyau."
      },
      {
        "question": "Sur le plan, un instrument est identifié « PIT-4003A ». Que désigne le code PIT ?",
        "choix": [
          "Une pompe",
          "Un transmetteur indicateur de pression (Pressure Indicating Transmitter)",
          "Une vanne de purge",
          "Un indicateur de température"
        ],
        "reponse": 1,
        "complexite": 2,
        "explication": "Selon la codification ISA : P = pression, I = indication, T = transmetteur. Les chiffres identifient la boucle de l'instrument."
      },
      {
        "question": "Sur le plan, l'instrument « FE-4001A » est installé sur la tuyauterie. Que désigne FE ?",
        "choix": [
          "Une vanne papillon",
          "Un raccord flexible",
          "Un élément de mesure de débit (Flow Element), ici un débitmètre",
          "Un filtre"
        ],
        "reponse": 2,
        "complexite": 2,
        "explication": "F = débit (flow), E = élément de mesure. La nomenclature précise qu'il s'agit d'un débitmètre électromagnétique fourni par d'autres."
      },
      {
        "question": "Sur les vues du skid, des flèches rouges sont peintes ou dessinées sur la tuyauterie. Que représentent-elles ?",
        "choix": [
          "Les pièces fournies par d'autres",
          "Les points de levage",
          "Le sens d'écoulement du liquide",
          "Les soudures à inspecter"
        ],
        "reponse": 2,
        "complexite": 1,
        "explication": "Les flèches indiquent le sens d'écoulement. Il faut en tenir compte pour installer les clapets, filtres, vannes et instruments dans le bon sens."
      },
      {
        "question": "La nomenclature indique « MOTOR 15 HP, 254 TC, TEFC ». Que signifie TEFC ?",
        "choix": [
          "Moteur à courant continu",
          "Moteur antidéflagrant",
          "Moteur totalement fermé, refroidi par ventilateur (Totally Enclosed Fan Cooled)",
          "Moteur ouvert ventilé"
        ],
        "reponse": 2,
        "complexite": 2,
        "explication": "Un moteur TEFC est fermé (poussière et humidité restent à l'extérieur) et refroidi par un ventilateur extérieur. 254 TC désigne le châssis NEMA à bride C."
      },
      {
        "question": "La soupape de sûreté de la ligne du vase d'expansion est décrite « 125psi_SET 75 PSI ». Qu'est-ce que cela signifie ?",
        "choix": [
          "Elle réduit la pression de 125 à 75 psi en continu",
          "Elle est prévue pour 125 psi, mais réglée pour s'ouvrir à 75 psi",
          "Elle s'ouvre à 125 psi",
          "Elle ferme à 75 psi et ouvre à 125 psi"
        ],
        "reponse": 1,
        "complexite": 3,
        "explication": "La valeur de réglage (SET) est la pression d'ouverture : 75 psi. Une soupape de sûreté est un dispositif de protection, pas un régulateur ; sa décharge doit être dirigée vers un endroit sûr."
      },
      {
        "question": "Le thermomètre à cadran de 5 po est installé dans un puits thermométrique (thermowell). Quel est le rôle de ce puits ?",
        "choix": [
          "Protéger la tige du thermomètre et permettre de l'enlever sans vidanger ni arrêter le procédé",
          "Remplacer le transmetteur de température",
          "Refroidir le liquide",
          "Augmenter la précision de lecture"
        ],
        "reponse": 0,
        "complexite": 2,
        "explication": "Le puits est vissé dans la tuyauterie et reste en place : on peut retirer ou remplacer le thermomètre sans ouvrir le circuit."
      }
    ]
  },
  {
    "id": "pompes",
    "numero": 4,
    "titre": "Pompes",
    "questions": [
      {
        "question": "Quelle condition provoque la cavitation dans une pompe centrifuge ?",
        "choix": [
          "La pompe fonctionne à son point de rendement optimal",
          "Le NPSH disponible est supérieur au NPSH requis",
          "Le NPSH disponible (en pi) est inférieur au NPSH requis",
          "La vanne de refoulement est entièrement ouverte"
        ],
        "reponse": 2,
        "complexite": 2,
        "explication": "Quand le NPSH disponible est inférieur au NPSH requis, la pression à l'entrée de la roue descend sous la pression de vapeur du liquide. Des bulles se forment puis implosent : bruit, vibrations et érosion de la roue."
      },
      {
        "question": "Quelle mesure augmente le NPSH disponible (en pi) d'une installation ?",
        "choix": [
          "Fermer partiellement la vanne d'aspiration",
          "Élever le niveau du réservoir d'aspiration par rapport à la pompe",
          "Augmenter la température du liquide",
          "Ajouter des coudes sur la tuyauterie d'aspiration"
        ],
        "reponse": 1,
        "complexite": 3,
        "explication": "Chaque pied de liquide ajouté au-dessus de l'aspiration augmente le NPSH disponible. Un liquide plus chaud ou plus de pertes à l'aspiration le réduisent."
      },
      {
        "question": "Comment détermine-t-on le point de fonctionnement d'une pompe ?",
        "choix": [
          "Par la vitesse maximale du moteur",
          "Par le diamètre de l'aspiration seulement",
          "Par les HP inscrits sur la plaque du moteur",
          "Par l'intersection de la courbe TDH-gpm de la pompe et de la courbe de résistance du réseau"
        ],
        "reponse": 3,
        "complexite": 2,
        "explication": "La pompe fonctionne au débit (gpm) où la TDH qu'elle fournit égale la TDH demandée par le réseau."
      },
      {
        "question": "Pourquoi cherche-t-on à faire fonctionner une pompe centrifuge près de son point de rendement optimal (BEP) ?",
        "choix": [
          "Pour augmenter la vitesse du moteur",
          "Parce que le code électrique l'exige",
          "Pour pouvoir retirer le manomètre",
          "Pour minimiser les vibrations, l'usure et la consommation d'énergie"
        ],
        "reponse": 3,
        "complexite": 2,
        "explication": "Loin du BEP, à trop faible ou trop fort débit (gpm), les forces radiales, la recirculation et les vibrations augmentent, et le rendement baisse."
      },
      {
        "question": "Dans quelle unité exprime-t-on habituellement la hauteur dynamique totale (TDH) d'une pompe ?",
        "choix": [
          "En pieds (pi) de colonne de liquide",
          "En gpm",
          "En psi seulement",
          "En HP"
        ],
        "reponse": 0,
        "complexite": 1,
        "explication": "La TDH s'exprime en pieds de liquide, ce qui la rend indépendante de la densité. La pression correspondante en psi dépend du liquide pompé."
      },
      {
        "question": "Une pompe à eau froide développe une pression différentielle de 100 psi. Quelle est sa TDH approximative ?",
        "choix": [
          "231 pi",
          "100 pi",
          "2 310 pi",
          "43 pi"
        ],
        "reponse": 0,
        "complexite": 2,
        "explication": "Pour l'eau, 1 psi correspond à environ 2,31 pi de TDH : 100 psi × 2,31 = 231 pi."
      },
      {
        "question": "Une pompe fournit 200 gpm à 50 pi de TDH à 1750 tr/min. Si on double sa vitesse à 3500 tr/min, sa TDH devient environ :",
        "choix": [
          "200 pi",
          "400 pi",
          "50 pi",
          "100 pi"
        ],
        "reponse": 0,
        "complexite": 3,
        "explication": "Selon les lois de similitude, la TDH varie avec le carré de la vitesse : 50 pi × 2² = 200 pi. Le débit double (environ 400 gpm) et la puissance est multipliée par 8."
      },
      {
        "question": "Quel est l'effet du rognage (réduction du diamètre) de la roue d'une pompe centrifuge ?",
        "choix": [
          "Il réduit uniquement le bruit",
          "Il réduit le débit (gpm) et la TDH de la pompe",
          "Il n'a aucun effet sur la performance",
          "Il augmente le débit (gpm) et la TDH"
        ],
        "reponse": 1,
        "complexite": 2,
        "explication": "Le rognage abaisse la courbe TDH-gpm de la pompe ; on adapte ainsi une pompe à un point de fonctionnement précis."
      },
      {
        "question": "Deux pompes identiques de 100 gpm à 60 pi de TDH sont installées en parallèle. Que permettent-elles principalement ?",
        "choix": [
          "De réduire la pression en psi",
          "D'augmenter le débit (jusqu'à près de 200 gpm) à une TDH comparable",
          "De réduire le NPSH requis",
          "De doubler la TDH à 120 pi"
        ],
        "reponse": 1,
        "complexite": 2,
        "explication": "En parallèle, les débits s'additionnent à TDH égale. Le gain réel est un peu inférieur à 200 gpm, car la résistance du réseau augmente avec le débit."
      },
      {
        "question": "Deux pompes identiques de 100 gpm à 60 pi de TDH sont installées en série. Que se passe-t-il ?",
        "choix": [
          "La pression en psi diminue",
          "Le NPSH requis diminue de moitié",
          "Le débit double à 200 gpm",
          "La TDH s'additionne : jusqu'à environ 120 pi à 100 gpm"
        ],
        "reponse": 3,
        "complexite": 2,
        "explication": "En série, le même débit traverse les deux pompes et leurs TDH s'additionnent."
      },
      {
        "question": "Une pompe multicellulaire (multiétagée) est surtout utilisée pour obtenir :",
        "choix": [
          "Un très grand débit (gpm) à faible TDH",
          "Le fonctionnement à sec",
          "Une TDH élevée grâce à plusieurs roues en série",
          "Le pompage de liquides très visqueux"
        ],
        "reponse": 2,
        "complexite": 1,
        "explication": "Chaque étage ajoute de la TDH ; on obtient ainsi des pressions élevées (en psi) avec une seule pompe."
      },
      {
        "question": "Comment évolue le NPSH requis (en pi) d'une pompe centrifuge lorsque son débit (gpm) augmente ?",
        "choix": [
          "Il reste constant",
          "Il devient nul",
          "Il diminue",
          "Il augmente"
        ],
        "reponse": 3,
        "complexite": 3,
        "explication": "Le NPSH requis augmente avec le débit : une pompe qui fonctionne bien au débit nominal peut caviter si elle débite beaucoup plus de gpm que prévu."
      },
      {
        "question": "Avant de démarrer une pompe centrifuge standard (non auto-amorçante), que faut-il faire ?",
        "choix": [
          "S'assurer que le corps de pompe et l'aspiration sont remplis de liquide (amorçage)",
          "Retirer la garniture mécanique",
          "Fermer complètement la vanne d'aspiration",
          "Démarrer à sec pour vérifier le sens de rotation"
        ],
        "reponse": 0,
        "complexite": 1,
        "explication": "Sans amorçage, la pompe ne développe ni TDH ni débit, et la garniture mécanique est endommagée par le fonctionnement à sec."
      },
      {
        "question": "Une pompe triphasée tourne dans le mauvais sens. Comment corriger la situation (hors VFD) ?",
        "choix": [
          "Inverser le neutre et la terre",
          "Réduire la tension d'alimentation",
          "Inverser deux des trois phases d'alimentation du moteur",
          "Remplacer la roue"
        ],
        "reponse": 2,
        "complexite": 1,
        "explication": "En sens inverse, la pompe fournit beaucoup moins de gpm et de TDH sans casser tout de suite. On vérifie le sens par un bref démarrage, pompe amorcée."
      },
      {
        "question": "Si l'on doit régler le débit (gpm) d'une pompe centrifuge avec une vanne, où doit-on la placer ?",
        "choix": [
          "Sur le refoulement, car étrangler l'aspiration favorise la cavitation",
          "Sur l'aspiration, pour protéger la pompe",
          "Aucune vanne ne doit être installée",
          "Indifféremment sur l'aspiration ou le refoulement"
        ],
        "reponse": 0,
        "complexite": 2,
        "explication": "Étrangler l'aspiration réduit le NPSH disponible et provoque la cavitation. La vanne d'aspiration reste entièrement ouverte en service."
      },
      {
        "question": "Quel est le risque de faire fonctionner longtemps une pompe centrifuge à 0 gpm (vanne de refoulement fermée) ?",
        "choix": [
          "Aucun, la pompe est simplement au repos",
          "La TDH devient nulle",
          "Le liquide s'échauffe, ce qui peut endommager la pompe et la garniture",
          "La pompe consomme plus d'énergie qu'à plein débit"
        ],
        "reponse": 2,
        "complexite": 2,
        "explication": "À débit nul, la pompe atteint sa TDH maximale (shutoff) et toute l'énergie absorbée se transforme en chaleur dans le liquide."
      },
      {
        "question": "Dans une pompe centrifuge, quel est le rôle de la volute (corps en colimaçon) ?",
        "choix": [
          "Transformer la vitesse du liquide sortant de la roue en pression (psi)",
          "Aspirer l'air de la conduite",
          "Assurer l'étanchéité de l'arbre",
          "Refroidir le moteur"
        ],
        "reponse": 0,
        "complexite": 1,
        "explication": "La roue donne de la vitesse au liquide ; la volute, dont la section s'élargit progressivement, la convertit en pression."
      },
      {
        "question": "Quel est l'effet de l'usure des bagues d'usure (jeu entre la roue et le corps) d'une pompe centrifuge ?",
        "choix": [
          "Aucun effet sur la performance",
          "Une recirculation interne qui réduit le débit (gpm), la TDH et le rendement",
          "Une réduction du bruit",
          "Une augmentation du débit (gpm)"
        ],
        "reponse": 1,
        "complexite": 3,
        "explication": "Quand le jeu augmente, une partie du liquide retourne du refoulement vers l'aspiration à l'intérieur de la pompe : la courbe TDH-gpm baisse et la consommation d'énergie augmente."
      },
      {
        "question": "Quel type de roue convient le mieux au pompage d'un liquide contenant des solides en suspension ?",
        "choix": [
          "Une roue de pompe multicellulaire",
          "Une roue fermée à faible jeu",
          "Le type de roue n'a aucune importance",
          "Une roue ouverte, semi-ouverte ou à vortex"
        ],
        "reponse": 3,
        "complexite": 2,
        "explication": "Les roues ouvertes, semi-ouvertes ou à vortex laissent passer les solides. La roue fermée offre un meilleur rendement, mais convient surtout aux liquides propres."
      },
      {
        "question": "Quel est le rôle d'une garniture mécanique sur une pompe ?",
        "choix": [
          "Assurer l'étanchéité autour de l'arbre en rotation",
          "Augmenter la TDH",
          "Filtrer le liquide pompé",
          "Transmettre le couple du moteur à la roue"
        ],
        "reponse": 0,
        "complexite": 1,
        "explication": "La garniture mécanique assure l'étanchéité entre l'arbre en rotation et le corps de pompe, grâce à deux faces planes lubrifiées par un mince film de liquide."
      },
      {
        "question": "Un manomètre indique une pression différentielle de 50 psi sur une pompe à eau. Quelle est sa TDH approximative ?",
        "choix": [
          "50 pi",
          "231 pi",
          "115 pi",
          "22 pi"
        ],
        "reponse": 2,
        "complexite": 2,
        "explication": "Pour l'eau, 1 psi ≈ 2,31 pi : 50 psi × 2,31 ≈ 115 pi de TDH."
      },
      {
        "question": "Quelle caractéristique distingue une pompe volumétrique d'une pompe centrifuge ?",
        "choix": [
          "Son débit (gpm) varie fortement avec la pression",
          "Elle peut fonctionner vanne fermée sans risque",
          "Elle ne peut pas pomper de liquides visqueux",
          "Son débit (gpm) reste presque constant quelle que soit la pression (psi), d'où le besoin d'une soupape de sûreté"
        ],
        "reponse": 3,
        "complexite": 3,
        "explication": "Une pompe volumétrique déplace un volume fixe par tour. Si le refoulement est bloqué, la pression monte jusqu'à la rupture : la soupape de sûreté est obligatoire."
      },
      {
        "question": "Comment réagit une pompe centrifuge au pompage d'un liquide beaucoup plus visqueux que l'eau ?",
        "choix": [
          "Sa performance s'améliore",
          "Son débit (gpm), sa TDH et son rendement diminuent",
          "Aucun effet",
          "Son NPSH requis devient nul"
        ],
        "reponse": 1,
        "complexite": 3,
        "explication": "La viscosité abaisse la courbe TDH-gpm et le rendement, et augmente les HP absorbés ; une pompe volumétrique est souvent mieux adaptée."
      },
      {
        "question": "Sur une pompe équipée d'une garniture à tresse (presse-étoupe), quelle condition est normale en fonctionnement ?",
        "choix": [
          "De la fumée à la sortie du presse-étoupe",
          "Aucune fuite, le presse-étoupe serré au maximum",
          "Une légère fuite goutte à goutte, qui lubrifie et refroidit la tresse",
          "Un jet continu de liquide"
        ],
        "reponse": 2,
        "complexite": 2,
        "explication": "La tresse doit laisser passer un léger filet de liquide pour se lubrifier et se refroidir. Trop serrée, elle chauffe et use l'arbre ou la chemise d'arbre."
      },
      {
        "question": "Qu'est-ce qui distingue une pompe auto-amorçante d'une pompe centrifuge standard ?",
        "choix": [
          "Elle peut fonctionner à sec en permanence",
          "Une fois son corps rempli de liquide, elle peut évacuer l'air de la conduite d'aspiration et s'amorcer seule",
          "Elle n'a pas besoin de moteur",
          "Elle ne peut pomper que de l'air"
        ],
        "reponse": 1,
        "complexite": 2,
        "explication": "Le corps de la pompe auto-amorçante retient une réserve de liquide qui lui permet d'aspirer l'air de la conduite. Il doit quand même être rempli avant le premier démarrage."
      }
    ]
  },
  {
    "id": "electricite",
    "numero": 5,
    "titre": "Électricité et sécurité électrique",
    "questions": [
      {
        "question": "Une tension de 24 V c.c. est appliquée à une résistance de 12 Ω. Quel est le courant ?",
        "choix": [
          "288 A",
          "2 A",
          "12 A",
          "0,5 A"
        ],
        "reponse": 1,
        "complexite": 1,
        "explication": "Loi d'Ohm : I = U / R = 24 / 12 = 2 A."
      },
      {
        "question": "Quelle est la puissance consommée par une charge de 5 A sous 24 V c.c. ?",
        "choix": [
          "4,8 W",
          "240 W",
          "29 W",
          "120 W"
        ],
        "reponse": 3,
        "complexite": 1,
        "explication": "P = U × I = 24 × 5 = 120 W."
      },
      {
        "question": "Trois résistances de 10 Ω, 20 Ω et 30 Ω sont branchées en série. Quelle est la résistance équivalente ?",
        "choix": [
          "60 Ω",
          "5,5 Ω",
          "30 Ω",
          "20 Ω"
        ],
        "reponse": 0,
        "complexite": 1,
        "explication": "En série, les résistances s'additionnent : 10 + 20 + 30 = 60 Ω."
      },
      {
        "question": "Deux résistances de 100 Ω sont branchées en parallèle. Quelle est la résistance équivalente ?",
        "choix": [
          "100 Ω",
          "200 Ω",
          "50 Ω",
          "10 000 Ω"
        ],
        "reponse": 2,
        "complexite": 1,
        "explication": "Deux résistances identiques en parallèle donnent la moitié de leur valeur : 50 Ω."
      },
      {
        "question": "Quelle formule donne la puissance active d'une charge triphasée équilibrée ?",
        "choix": [
          "P = U² × I",
          "P = √3 × U × I × cos φ",
          "P = 3 × U × I × sin φ",
          "P = U × I"
        ],
        "reponse": 1,
        "complexite": 2,
        "explication": "Avec U la tension entre phases et I le courant de ligne, P = √3 × U × I × cos φ."
      },
      {
        "question": "Le courant absorbé par une charge triphasée double, à tension et facteur de puissance constants. Que devient sa puissance active ?",
        "choix": [
          "Elle est multipliée par 4",
          "Elle diminue de moitié",
          "Elle double",
          "Elle reste la même"
        ],
        "reponse": 2,
        "complexite": 2,
        "explication": "P = √3 × U × I × cos φ : la puissance est proportionnelle au courant. Si le courant double, la puissance double."
      },
      {
        "question": "Au Canada, quelle est la tension triphasée typique d'une alimentation industrielle ?",
        "choix": [
          "240 V",
          "600 V (moteurs de 575 V)",
          "1000 V",
          "120 V"
        ],
        "reponse": 1,
        "complexite": 1,
        "explication": "Le 600 V triphasé est la norme industrielle canadienne. Le 480 V est plus courant aux États-Unis."
      },
      {
        "question": "Sur un réseau 600 V triphasé en étoile, quelle est la tension approximative entre une phase et le neutre ?",
        "choix": [
          "347 V",
          "200 V",
          "300 V",
          "600 V"
        ],
        "reponse": 0,
        "complexite": 3,
        "explication": "V phase = 600 / √3 ≈ 347 V (réseau 347/600 V)."
      },
      {
        "question": "En couplage triangle, la tension aux bornes de chaque enroulement du moteur est :",
        "choix": [
          "Égale à la tension de ligne",
          "Égale au double de la tension de ligne",
          "Égale à la tension de ligne divisée par √3",
          "Nulle"
        ],
        "reponse": 0,
        "complexite": 2,
        "explication": "Chaque enroulement est branché entre deux phases et reçoit la pleine tension de ligne."
      },
      {
        "question": "Le facteur de puissance (cos φ) est le rapport entre :",
        "choix": [
          "La tension et le courant",
          "La puissance apparente et la puissance réactive",
          "La puissance réactive et la puissance active",
          "La puissance active et la puissance apparente"
        ],
        "reponse": 3,
        "complexite": 2,
        "explication": "cos φ = P (W) / S (VA)."
      },
      {
        "question": "Dans quelle unité s'exprime la puissance apparente ?",
        "choix": [
          "Watt (W)",
          "Voltampère (VA)",
          "Voltampère réactif (var)",
          "Joule (J)"
        ],
        "reponse": 1,
        "complexite": 1,
        "explication": "La puissance apparente s'exprime en VA ou kVA."
      },
      {
        "question": "Quel équipement utilise-t-on pour corriger un faible facteur de puissance dû aux moteurs ?",
        "choix": [
          "Des fusibles",
          "Des condensateurs",
          "Des inductances supplémentaires",
          "Des résistances"
        ],
        "reponse": 1,
        "complexite": 2,
        "explication": "Les condensateurs fournissent la puissance réactive consommée par les moteurs."
      },
      {
        "question": "Quelle est la fréquence du réseau électrique au Canada ?",
        "choix": [
          "50 Hz",
          "60 Hz",
          "100 Hz",
          "400 Hz"
        ],
        "reponse": 1,
        "complexite": 1,
        "explication": "L'Amérique du Nord fonctionne à 60 Hz ; l'Europe à 50 Hz."
      },
      {
        "question": "Un transformateur de commande 600 V / 120 V alimente un circuit de commande. Quelle affirmation est vraie ?",
        "choix": [
          "Le courant au secondaire est 5 fois plus faible qu'au primaire",
          "Le courant est identique des deux côtés",
          "La fréquence est divisée par 5",
          "Le courant au secondaire est environ 5 fois plus élevé qu'au primaire"
        ],
        "reponse": 3,
        "complexite": 3,
        "explication": "La puissance étant conservée, le courant au secondaire est environ 5 fois plus élevé."
      },
      {
        "question": "Quel est l'avantage principal d'un disjoncteur par rapport à un fusible ?",
        "choix": [
          "Il protège contre les surtensions",
          "Il ne nécessite aucune coordination",
          "Il est toujours plus rapide",
          "Il peut être réarmé après un déclenchement"
        ],
        "reponse": 3,
        "complexite": 1,
        "explication": "Le disjoncteur se réarme ; un fusible fondu doit être remplacé."
      },
      {
        "question": "Quel est le rôle principal d'un disjoncteur différentiel de fuite à la terre (DDFT) ?",
        "choix": [
          "Corriger le facteur de puissance",
          "Limiter le courant de démarrage des moteurs",
          "Protéger le câble contre les surcharges",
          "Protéger les personnes en détectant un faible courant de fuite à la terre"
        ],
        "reponse": 3,
        "complexite": 2,
        "explication": "Le DDFT déclenche dès qu'une fuite d'environ 5 mA est détectée."
      },
      {
        "question": "Quel instrument permet de mesurer le courant d'un conducteur sans ouvrir le circuit ?",
        "choix": [
          "Une pince ampèremétrique",
          "Un ohmmètre",
          "Un testeur de continuité",
          "Un mégohmmètre"
        ],
        "reponse": 0,
        "complexite": 1,
        "explication": "La pince ampèremétrique mesure le champ magnétique autour d'un conducteur."
      },
      {
        "question": "Quel instrument sert à vérifier l'état de l'isolation des enroulements d'un moteur ?",
        "choix": [
          "Un tachymètre",
          "Une pince ampèremétrique",
          "Un mégohmmètre",
          "Un luxmètre"
        ],
        "reponse": 2,
        "complexite": 1,
        "explication": "Le mégohmmètre mesure la résistance d'isolation ; débrancher le VFD avant l'essai."
      },
      {
        "question": "Lors d'un démarrage direct (DOL), le courant d'appel d'un moteur asynchrone est généralement :",
        "choix": [
          "Environ 20 fois le courant nominal",
          "Environ 2 fois le courant nominal",
          "Égal au courant nominal",
          "Environ 6 à 8 fois le courant nominal"
        ],
        "reponse": 3,
        "complexite": 2,
        "explication": "Un démarrage direct appelle typiquement 6 à 8 fois le courant nominal."
      },
      {
        "question": "Quel est l'effet d'un démarrage étoile-triangle ?",
        "choix": [
          "Il augmente le couple de démarrage",
          "Il inverse le sens de rotation",
          "Il réduit le courant de démarrage à environ le tiers",
          "Il permet de varier la vitesse en continu"
        ],
        "reponse": 2,
        "complexite": 2,
        "explication": "Le courant et le couple de démarrage sont réduits à environ le tiers."
      },
      {
        "question": "Que se passe-t-il si un moteur triphasé en marche perd une phase ?",
        "choix": [
          "Il accélère",
          "Il inverse son sens de rotation",
          "Il continue de tourner, son courant augmente et il risque de surchauffer",
          "Il s'arrête immédiatement sans danger"
        ],
        "reponse": 2,
        "complexite": 3,
        "explication": "Le moteur continue sur deux phases avec un courant accru et surchauffe sans protection."
      },
      {
        "question": "Un moteur absorbe 10 kW pendant 8 heures. Quelle énergie a-t-il consommée ?",
        "choix": [
          "800 kWh",
          "1,25 kWh",
          "80 kWh",
          "18 kWh"
        ],
        "reponse": 2,
        "complexite": 1,
        "explication": "Énergie = 10 kW × 8 h = 80 kWh."
      },
      {
        "question": "Quelle norme canadienne encadre la sécurité en matière d'électricité au travail, y compris les risques d'arc électrique ?",
        "choix": [
          "CSA Z462",
          "IEC 61131-3",
          "CSA C22.2 no 286",
          "ISO 9001"
        ],
        "reponse": 0,
        "complexite": 2,
        "explication": "CSA Z462 (équivalent américain : NFPA 70E)."
      },
      {
        "question": "Après avoir cadenassé un équipement, quelle étape est essentielle avant d'y travailler ?",
        "choix": [
          "Vérifier l'absence de tension avec un appareil dont le bon fonctionnement a été confirmé",
          "Retirer les fusibles seulement",
          "Aviser le client",
          "Démarrer l'équipement pour confirmer qu'il est arrêté"
        ],
        "reponse": 0,
        "complexite": 1,
        "explication": "La vérification d'absence de tension se fait avec un appareil testé avant et après."
      },
      {
        "question": "Lors d'un cadenassage impliquant plusieurs travailleurs, quelle pratique est correcte ?",
        "choix": [
          "Chaque travailleur appose son propre cadenas personnel",
          "Aucun cadenas si l'intervention est courte",
          "Un seul cadenas pour toute l'équipe, tenu par le superviseur",
          "Une simple étiquette suffit"
        ],
        "reponse": 0,
        "complexite": 1,
        "explication": "Chaque travailleur pose son propre cadenas et garde sa clé."
      }
    ]
  },
  {
    "id": "vfd",
    "numero": 6,
    "titre": "Variateurs de fréquence (VFD)",
    "questions": [
      {
        "question": "Comment un VFD contrôle-t-il la vitesse d'un moteur asynchrone ?",
        "choix": [
          "En variant la fréquence et la tension appliquées au moteur",
          "En modifiant le nombre de pôles du moteur",
          "En ajoutant des résistances au rotor",
          "En inversant deux phases"
        ],
        "reponse": 0,
        "complexite": 1,
        "explication": "Le VFD ajuste fréquence et tension en gardant le rapport V/Hz."
      },
      {
        "question": "Quelles sont les trois sections principales d'un VFD ?",
        "choix": [
          "Redresseur, bus c.c., onduleur",
          "Transformateur, contacteur, relais thermique",
          "Démarreur, condensateur, fusible",
          "Entrée analogique, PLC, HMI"
        ],
        "reponse": 0,
        "complexite": 2,
        "explication": "Redresseur (c.a. → c.c.), bus c.c. (filtrage), onduleur IGBT (MLI)."
      },
      {
        "question": "Un moteur à 4 pôles a une vitesse synchrone de 1800 tr/min à 60 Hz. Quelle est sa vitesse synchrone si le VFD l'alimente à 30 Hz ?",
        "choix": [
          "1350 tr/min",
          "900 tr/min",
          "450 tr/min",
          "1800 tr/min"
        ],
        "reponse": 1,
        "complexite": 2,
        "explication": "La vitesse synchrone est proportionnelle à la fréquence : à 30 Hz (la moitié de 60 Hz), elle est de 1800 / 2 = 900 tr/min."
      },
      {
        "question": "Quelle est la vitesse synchrone d'un moteur à 2 pôles à 60 Hz ?",
        "choix": [
          "1200 tr/min",
          "3600 tr/min",
          "3000 tr/min",
          "1800 tr/min"
        ],
        "reponse": 1,
        "complexite": 1,
        "explication": "Ns = 120 × 60 / 2 = 3600 tr/min."
      },
      {
        "question": "Pour une pompe centrifuge, si on réduit la vitesse de moitié avec un VFD, la puissance absorbée devient environ :",
        "choix": [
          "6 % de la puissance initiale",
          "50 % de la puissance initiale",
          "12,5 % de la puissance initiale",
          "25 % de la puissance initiale"
        ],
        "reponse": 2,
        "complexite": 3,
        "explication": "Selon les lois de similitude, la puissance varie avec le cube de la vitesse : (1/2)³ = 1/8, soit environ 12,5 %."
      },
      {
        "question": "Laquelle de ces charges est à couple variable ?",
        "choix": [
          "Un convoyeur à courroie",
          "Une pompe centrifuge",
          "Un treuil de levage",
          "Une pompe volumétrique à piston"
        ],
        "reponse": 1,
        "complexite": 2,
        "explication": "Le couple d'une pompe centrifuge croît avec le carré de la vitesse."
      },
      {
        "question": "Que se passe-t-il lorsqu'un VFD fait tourner un moteur au-dessus de sa fréquence nominale (60 Hz) ?",
        "choix": [
          "Le couple disponible diminue",
          "Le moteur ne peut pas dépasser 60 Hz",
          "La tension de sortie double",
          "Le couple disponible augmente"
        ],
        "reponse": 0,
        "complexite": 3,
        "explication": "Zone de défluxage : puissance à peu près constante, couple en baisse."
      },
      {
        "question": "Quel est l'avantage principal de la commande vectorielle par rapport à la commande V/Hz ?",
        "choix": [
          "Elle ne nécessite aucune donnée moteur",
          "Elle offre un meilleur contrôle du couple, surtout à basse vitesse",
          "Elle élimine les harmoniques",
          "Elle permet de se passer de protection contre les surcharges"
        ],
        "reponse": 1,
        "complexite": 3,
        "explication": "Meilleur contrôle du couple, surtout à basse vitesse."
      },
      {
        "question": "Pourquoi recommande-t-on un câble blindé entre un VFD et le moteur ?",
        "choix": [
          "Pour augmenter la fréquence de sortie",
          "Pour éviter d'installer un conducteur de terre",
          "Pour réduire les interférences électromagnétiques (EMI)",
          "Pour augmenter le couple"
        ],
        "reponse": 2,
        "complexite": 1,
        "explication": "Le blindage limite les perturbations ; le conducteur de terre reste obligatoire."
      },
      {
        "question": "Quel risque présente un câble très long entre le VFD et le moteur ?",
        "choix": [
          "Des pointes de surtension aux bornes du moteur, qui dégradent l'isolation",
          "Une baisse de la vitesse du moteur",
          "Une augmentation du facteur de puissance",
          "Aucun effet"
        ],
        "reponse": 0,
        "complexite": 3,
        "explication": "Les réflexions d'onde créent des surtensions ; un filtre dV/dt ou sinus protège le moteur."
      },
      {
        "question": "Quel est l'effet d'augmenter la fréquence porteuse (de commutation) d'un VFD ?",
        "choix": [
          "Le couple de démarrage double",
          "Le moteur tourne plus vite",
          "Le bruit du moteur diminue, mais l'échauffement du VFD et les EMI augmentent",
          "Les harmoniques sur le réseau disparaissent"
        ],
        "reponse": 2,
        "complexite": 3,
        "explication": "Moteur plus silencieux, mais plus de pertes et de perturbations ; déclassement possible."
      },
      {
        "question": "Un VFD déclenche en défaut de surintensité au démarrage. Quelle est une cause probable ?",
        "choix": [
          "Temps d'accélération trop long",
          "Entrée analogique non raccordée",
          "Temps d'accélération trop court",
          "Fréquence maximale trop basse"
        ],
        "reponse": 2,
        "complexite": 2,
        "explication": "Une rampe trop agressive demande trop de courant."
      },
      {
        "question": "Un VFD déclenche en surtension du bus c.c. lors de l'arrêt d'une charge à forte inertie. Quelle solution est appropriée ?",
        "choix": [
          "Allonger le temps de décélération ou ajouter une résistance de freinage",
          "Augmenter la fréquence porteuse",
          "Réduire le temps de décélération",
          "Retirer le conducteur de terre"
        ],
        "reponse": 0,
        "complexite": 3,
        "explication": "Le moteur renvoie de l'énergie au bus ; allonger la rampe ou la dissiper."
      },
      {
        "question": "Quel est le rôle principal d'une réactance de ligne à l'entrée d'un VFD ?",
        "choix": [
          "Remplacer le sectionneur",
          "Augmenter la vitesse du moteur",
          "Convertir le monophasé en triphasé",
          "Réduire les harmoniques et protéger le variateur contre les transitoires du réseau"
        ],
        "reponse": 3,
        "complexite": 2,
        "explication": "Elle atténue les harmoniques et protège le redresseur."
      },
      {
        "question": "Quels rangs d'harmoniques dominent le courant absorbé par un VFD standard à redresseur 6 impulsions ?",
        "choix": [
          "2e et 4e",
          "Uniquement la 3e",
          "10e et 12e",
          "5e et 7e"
        ],
        "reponse": 3,
        "complexite": 1,
        "explication": "Rangs 5 et 7 (300 et 420 Hz sur un réseau 60 Hz)."
      },
      {
        "question": "Après avoir coupé l'alimentation d'un VFD, quelle précaution faut-il prendre avant d'y intervenir ?",
        "choix": [
          "Aucune précaution, le VFD est hors tension dès qu'il est débranché",
          "Retirer le ventilateur de refroidissement",
          "Court-circuiter immédiatement les bornes du moteur",
          "Attendre la décharge des condensateurs du bus c.c. et vérifier la tension"
        ],
        "reponse": 3,
        "complexite": 3,
        "explication": "Respecter le délai du fabricant (souvent 5 à 15 min) et mesurer la tension du bus."
      },
      {
        "question": "Un contacteur est installé entre le VFD et le moteur. Peut-on l'ouvrir pendant que le VFD fait tourner le moteur ?",
        "choix": [
          "Oui, c'est la méthode normale d'arrêt",
          "Oui, si le moteur tourne à basse vitesse",
          "Non, cela peut endommager l'étage de sortie du VFD",
          "Oui, uniquement avec un câble blindé"
        ],
        "reponse": 2,
        "complexite": 1,
        "explication": "On arrête d'abord le VFD avant de manœuvrer le contacteur."
      },
      {
        "question": "Quel signal utilise-t-on couramment pour transmettre une consigne de vitesse d'un PLC à un VFD par câblage ?",
        "choix": [
          "Une entrée analogique 0–10 V ou 4–20 mA",
          "Une sortie relais",
          "Le bornier d'alimentation L1, L2, L3",
          "Une entrée 120 V c.a."
        ],
        "reponse": 0,
        "complexite": 2,
        "explication": "Entrée analogique 0–10 V ou 4–20 mA (ou réseau de communication)."
      },
      {
        "question": "Lors de la mise en service d'un VFD, quelles données doivent être entrées en priorité ?",
        "choix": [
          "L'adresse IP du HMI seulement",
          "Les données de la plaque signalétique du moteur",
          "La longueur de la tuyauterie",
          "Le numéro de série du PLC"
        ],
        "reponse": 1,
        "complexite": 1,
        "explication": "Tension, courant, fréquence, vitesse et puissance nominales, puis autoréglage."
      },
      {
        "question": "Un VFD peut-il assurer la protection contre les surcharges du moteur ?",
        "choix": [
          "Oui, sans aucun paramétrage",
          "Non, jamais",
          "Seulement pour les moteurs monophasés",
          "Oui, si sa protection thermique est paramétrée avec le courant de la plaque et approuvée à cette fin"
        ],
        "reponse": 3,
        "complexite": 2,
        "explication": "La protection électronique doit être paramétrée avec le FLA et approuvée."
      },
      {
        "question": "Pourquoi un moteur auto-ventilé risque-t-il de surchauffer s'il tourne longtemps à basse vitesse et à couple élevé ?",
        "choix": [
          "Son ventilateur, monté sur l'arbre, refroidit moins à basse vitesse",
          "La tension augmente à basse vitesse",
          "Le moteur passe en monophasé",
          "Le facteur de puissance devient nul"
        ],
        "reponse": 0,
        "complexite": 2,
        "explication": "Utiliser un moteur « inverter duty » ou une ventilation forcée."
      },
      {
        "question": "Un VFD est installé dans une armoire où l'air ambiant atteint 122 °F, au-delà de sa température nominale. Que faut-il faire ?",
        "choix": [
          "Retirer le filtre d'entrée",
          "Déclasser le VFD ou améliorer le refroidissement de l'armoire",
          "Aucune mesure, la température n'a pas d'effet",
          "Augmenter la fréquence porteuse"
        ],
        "reponse": 1,
        "complexite": 2,
        "explication": "La chaleur et l'altitude réduisent la capacité de refroidissement. Le courant nominal doit être déclassé selon les courbes du fabricant, ou l'armoire mieux ventilée."
      },
      {
        "question": "À quoi sert la fonction « reprise au vol » (flying start) d'un VFD ?",
        "choix": [
          "Arrêter le moteur le plus vite possible",
          "Inverser le sens de rotation automatiquement",
          "Faire fonctionner le moteur sans alimentation",
          "Redémarrer un moteur qui tourne déjà sans déclencher en défaut"
        ],
        "reponse": 3,
        "complexite": 2,
        "explication": "Le VFD se synchronise sur la vitesse du moteur encore en rotation."
      },
      {
        "question": "Sur un surpresseur à vitesse variable, à quoi sert le mode veille (sleep) du VFD ?",
        "choix": [
          "Réduire la luminosité de l'afficheur",
          "Mettre le VFD hors tension la nuit",
          "Désactiver les alarmes",
          "Arrêter la pompe quand la demande est faible et la redémarrer quand la pression baisse"
        ],
        "reponse": 3,
        "complexite": 2,
        "explication": "Économie d'énergie et pas de fonctionnement à débit nul."
      },
      {
        "question": "À quoi sert un circuit de contournement (bypass) sur un VFD ?",
        "choix": [
          "À refroidir le VFD",
          "À filtrer les harmoniques",
          "À faire fonctionner le moteur directement sur le réseau si le VFD est défaillant",
          "À augmenter la vitesse maximale"
        ],
        "reponse": 2,
        "complexite": 1,
        "explication": "Il maintient le service à vitesse fixe en cas de panne du VFD."
      }
    ]
  },
  {
    "id": "installation-filage",
    "numero": 7,
    "titre": "Installation et filage électrique",
    "questions": [
      {
        "question": "Quelle couleur identifie un conducteur de mise à la terre ?",
        "choix": [
          "Blanc ou gris",
          "Vert, vert/jaune ou nu",
          "Rouge",
          "Noir"
        ],
        "reponse": 1,
        "complexite": 1,
        "explication": "Vert, vert/jaune ou nu : réservés à la mise à la terre."
      },
      {
        "question": "Quelle couleur identifie le conducteur neutre ?",
        "choix": [
          "Blanc ou gris",
          "Bleu",
          "Orange",
          "Vert"
        ],
        "reponse": 0,
        "complexite": 1,
        "explication": "Blanc ou gris ; il ne sert jamais de conducteur de terre."
      },
      {
        "question": "Au Canada, quelles couleurs utilise-t-on pour les phases A, B et C d'un circuit triphasé ?",
        "choix": [
          "Brun, orange, jaune",
          "Aucune exigence",
          "Noir, blanc, vert",
          "Rouge, noir, bleu"
        ],
        "reponse": 3,
        "complexite": 1,
        "explication": "Rouge, noir, bleu. Brun/orange/jaune est une convention américaine."
      },
      {
        "question": "Dans le système AWG, lequel de ces conducteurs est le plus gros ?",
        "choix": [
          "14 AWG",
          "10 AWG",
          "6 AWG",
          "12 AWG"
        ],
        "reponse": 2,
        "complexite": 1,
        "explication": "Plus le numéro AWG est petit, plus le conducteur est gros."
      },
      {
        "question": "Qu'est-ce qu'un câble TECK90 ?",
        "choix": [
          "Un câble armé couramment utilisé en milieu industriel canadien",
          "Un câble de réseau Ethernet",
          "Un câble coaxial pour antennes",
          "Un fil de thermocouple"
        ],
        "reponse": 0,
        "complexite": 1,
        "explication": "Câble armé à gaine extérieure, très répandu en industrie au Canada."
      },
      {
        "question": "À quoi sert le connecteur (presse-étoupe) d'un câble TECK à l'entrée d'une armoire ?",
        "choix": [
          "Uniquement à décorer l'entrée de l'armoire",
          "À réduire la tension du circuit",
          "À assurer l'étanchéité, le maintien du câble et la continuité de l'armure avec le boîtier",
          "À remplacer le conducteur de terre"
        ],
        "reponse": 2,
        "complexite": 2,
        "explication": "Étanchéité, maintien et continuité des masses ; choisir le bon diamètre."
      },
      {
        "question": "Quelle est la bonne pratique pour dénuder un conducteur ?",
        "choix": [
          "Dénuder le plus long possible",
          "Laisser une partie de l'isolant dans la borne",
          "Utiliser un couteau pour aller plus vite",
          "Dénuder à la bonne longueur sans entailler ni couper de brins"
        ],
        "reponse": 3,
        "complexite": 1,
        "explication": "Une entaille crée un point faible qui chauffe ou casse."
      },
      {
        "question": "Pourquoi utilise-t-on des embouts (férules) sur les fils multibrins raccordés à des borniers ?",
        "choix": [
          "Pour assurer une connexion fiable et éviter les brins épars",
          "Pour augmenter la tension admissible",
          "Pour remplacer l'isolant",
          "Pour identifier la couleur du fil"
        ],
        "reponse": 0,
        "complexite": 1,
        "explication": "L'embout regroupe les brins et prévient courts-circuits et échauffements."
      },
      {
        "question": "Pour sertir une cosse sur un conducteur, que faut-il utiliser ?",
        "choix": [
          "L'outil de sertissage prévu pour la cosse, avec une cosse du bon calibre",
          "De la soudure seulement, sans sertissage",
          "Un marteau",
          "Une pince universelle, avec n'importe quelle cosse"
        ],
        "reponse": 0,
        "complexite": 1,
        "explication": "Bon calibre de cosse et outil/matrice prévus."
      },
      {
        "question": "Comment doit-on serrer les bornes des disjoncteurs, contacteurs et borniers ?",
        "choix": [
          "Le plus fort possible",
          "Au couple spécifié par le fabricant",
          "À la main, sans outil",
          "Le serrage n'a pas d'importance"
        ],
        "reponse": 1,
        "complexite": 1,
        "explication": "Trop peu serré : échauffement ; trop serré : dommages."
      },
      {
        "question": "Pourquoi numérote-t-on les fils d'un panneau de commande ?",
        "choix": [
          "Pour réduire la chute de tension",
          "Pour des raisons esthétiques",
          "Pour que chaque fil corresponde au schéma électrique et faciliter le dépannage",
          "Parce que cela remplace le code de couleurs"
        ],
        "reponse": 2,
        "complexite": 1,
        "explication": "Le repérage cohérent avec les schémas accélère le dépannage."
      },
      {
        "question": "Où doit-on étiqueter un câble qui relie une armoire à un moteur sur le terrain ?",
        "choix": [
          "Seulement côté armoire",
          "Seulement côté équipement",
          "L'étiquetage n'est pas nécessaire",
          "Aux deux extrémités"
        ],
        "reponse": 3,
        "complexite": 1,
        "explication": "Un câble identifié aux deux bouts se retrouve rapidement."
      },
      {
        "question": "Comment doit-on acheminer les câbles de signaux analogiques par rapport aux câbles de puissance ?",
        "choix": [
          "Cela n'a aucune importance",
          "Torsadés ensemble",
          "Dans le même conduit pour simplifier l'installation",
          "Séparés, et en se croisant à 90° lorsqu'ils doivent se croiser"
        ],
        "reponse": 3,
        "complexite": 2,
        "explication": "La séparation et le croisement à 90° limitent le couplage."
      },
      {
        "question": "En général, où raccorde-t-on à la terre le blindage d'un câble de signal analogique 4–20 mA ?",
        "choix": [
          "Au neutre",
          "À une seule extrémité, généralement côté armoire, pour éviter les boucles de masse",
          "Jamais",
          "Aux deux extrémités, toujours"
        ],
        "reponse": 1,
        "complexite": 3,
        "explication": "Une seule extrémité, côté armoire, pour éviter les boucles de masse."
      },
      {
        "question": "Comment raccorde-t-on le blindage d'un câble entre un VFD et son moteur ?",
        "choix": [
          "Le couper à l'entrée de l'armoire",
          "Le raccorder au neutre",
          "Laisser le blindage flottant aux deux extrémités",
          "Le raccorder sur 360° à la masse aux deux extrémités, avec des presse-étoupes CEM"
        ],
        "reponse": 3,
        "complexite": 3,
        "explication": "Raccordement 360° aux deux extrémités pour ramener les courants HF."
      },
      {
        "question": "Quelle est la bonne pratique concernant le remplissage des goulottes (wire duct) dans une armoire ?",
        "choix": [
          "La remplir au maximum pour économiser de l'espace",
          "Y mettre les fils de puissance et de signal ensemble sans séparation",
          "Éviter de la surcharger pour la dissipation de chaleur et les modifications futures",
          "Ne jamais fermer le couvercle"
        ],
        "reponse": 2,
        "complexite": 2,
        "explication": "Laisser de la réserve pour la chaleur et les ajouts futurs."
      },
      {
        "question": "Qu'est-ce qu'un rail DIN dans une armoire électrique ?",
        "choix": [
          "Un appareil de mesure",
          "Un rail métallique normalisé sur lequel on fixe les borniers, disjoncteurs et relais",
          "Un type de conduit flexible",
          "Un câble de communication"
        ],
        "reponse": 1,
        "complexite": 1,
        "explication": "Le rail DIN est un rail normalisé (environ 1 3/8 po de largeur) qui permet de monter et de remplacer rapidement les composants."
      },
      {
        "question": "Entre deux points de tirage, quel est le total maximal de coudes permis dans un conduit ?",
        "choix": [
          "90°",
          "Aucune limite",
          "180°",
          "360°"
        ],
        "reponse": 3,
        "complexite": 2,
        "explication": "L'équivalent de quatre coudes à 90°, soit 360°."
      },
      {
        "question": "Pour le raccordement final d'un moteur de pompe, quel type de raccord est généralement recommandé ?",
        "choix": [
          "Un conduit flexible étanche (liquid-tight), pour absorber les vibrations",
          "Un conduit rigide soudé directement au moteur",
          "Du ruban adhésif autour des conducteurs",
          "Des fils individuels sans protection"
        ],
        "reponse": 0,
        "complexite": 2,
        "explication": "Le flexible étanche absorbe les vibrations et facilite l'entretien."
      },
      {
        "question": "Pourquoi scelle-t-on un conduit qui passe d'une zone chaude à une zone froide ?",
        "choix": [
          "Pour réduire le bruit",
          "Pour augmenter l'ampacité",
          "Pour éviter la migration d'air humide et la condensation dans les équipements",
          "Ce n'est jamais nécessaire"
        ],
        "reponse": 2,
        "complexite": 3,
        "explication": "Le scellement bloque l'air humide qui condenserait côté froid."
      },
      {
        "question": "Lorsqu'on perce une armoire de type 4X pour faire entrer des câbles, quelle pratique est correcte ?",
        "choix": [
          "Utiliser des raccords de même classe d'étanchéité, éviter le dessus et retirer tous les copeaux",
          "Percer le dessus et utiliser n'importe quel raccord",
          "Laisser les trous ouverts pour la ventilation",
          "Boucher les trous avec du ruban adhésif"
        ],
        "reponse": 0,
        "complexite": 2,
        "explication": "Raccords homologués de même classe, pas sur le dessus, copeaux retirés."
      },
      {
        "question": "Pourquoi faut-il respecter le rayon de courbure minimal d'un câble ?",
        "choix": [
          "Pour ne pas endommager l'isolant, l'armure ou le blindage du câble",
          "Pour faciliter le tirage uniquement",
          "Pour réduire le coût du câble",
          "Ce n'est pas nécessaire"
        ],
        "reponse": 0,
        "complexite": 3,
        "explication": "Un pliage trop serré endommage le câble ; suivre le fabricant."
      },
      {
        "question": "Sur un moteur bi-tension (ex. 230/460 V), comment raccorde-t-on les enroulements pour la tension la plus élevée ?",
        "choix": [
          "En parallèle",
          "En série, selon le schéma de la plaque",
          "Peu importe, le moteur s'adapte seul",
          "En monophasé"
        ],
        "reponse": 1,
        "complexite": 1,
        "explication": "Série pour la tension haute, parallèle pour la basse."
      },
      {
        "question": "Pourquoi relie-t-on à la terre les parties métalliques non porteuses de courant (boîtiers, châssis de skid) ?",
        "choix": [
          "Pour augmenter la vitesse du moteur",
          "Pour qu'un défaut à la masse fasse déclencher la protection et éviter les tensions de contact dangereuses",
          "Pour réduire la consommation d'énergie",
          "Pour améliorer le facteur de puissance"
        ],
        "reponse": 1,
        "complexite": 2,
        "explication": "Chemin de faible impédance pour déclencher rapidement la protection."
      },
      {
        "question": "Avant la première mise sous tension d'un panneau ou d'un skid, quelles vérifications faut-il effectuer ?",
        "choix": [
          "Retirer toutes les étiquettes",
          "Mettre sous tension directement pour gagner du temps",
          "Vérifier les raccordements, le serrage, la continuité des terres et l'isolement, et retirer les débris",
          "Vérifier seulement la couleur des fils"
        ],
        "reponse": 2,
        "complexite": 2,
        "explication": "Raccordements, serrage, terres, isolement (VFD débranché), débris ; puis schémas tels que construits."
      }
    ]
  },
  {
    "id": "plc",
    "numero": 8,
    "titre": "Automates programmables (PLC)",
    "questions": [
      {
        "question": "Dans quel ordre se déroule le cycle de scrutation typique d'un PLC ?",
        "choix": [
          "Entrées → programme → sorties",
          "Programme → entrées → sorties",
          "Simultanément",
          "Sorties → entrées → programme"
        ],
        "reponse": 0,
        "complexite": 2,
        "explication": "Lecture des entrées, exécution de la logique, mise à jour des sorties."
      },
      {
        "question": "Que signifie le mode RUN d'un PLC ?",
        "choix": [
          "Le PLC est en défaut",
          "Le PLC est hors tension",
          "Le PLC exécute son programme et commande les sorties",
          "Le programme peut être téléchargé sans risque, les sorties étant désactivées"
        ],
        "reponse": 2,
        "complexite": 1,
        "explication": "RUN exécute le programme ; PROGRAM l'arrête pour le téléchargement."
      },
      {
        "question": "Une entrée TOR (discrète) d'un PLC peut prendre :",
        "choix": [
          "Une fréquence variable",
          "Une valeur continue entre 4 et 20 mA",
          "Deux états seulement : actif (1) ou inactif (0)",
          "Une température en °C"
        ],
        "reponse": 2,
        "complexite": 1,
        "explication": "Tout ou rien : deux états."
      },
      {
        "question": "Quel est le principal avantage d'un signal 4–20 mA par rapport à un signal 0–20 mA ?",
        "choix": [
          "Il permet de détecter une rupture de fil",
          "Il offre une meilleure résolution",
          "Il consomme moins d'énergie",
          "Il ne nécessite pas de câble blindé"
        ],
        "reponse": 0,
        "complexite": 2,
        "explication": "Le « zéro vivant » à 4 mA : 0 mA signale un fil coupé."
      },
      {
        "question": "Un transmetteur de pression 0–100 psi envoie un signal 4–20 mA. Quelle pression correspond à 12 mA ?",
        "choix": [
          "75 psi",
          "50 psi",
          "60 psi",
          "25 psi"
        ],
        "reponse": 1,
        "complexite": 2,
        "explication": "(12 − 4) / (20 − 4) × 100 = 8 / 16 × 100 = 50 psi."
      },
      {
        "question": "Un transmetteur de température 0–200 °F en 4–20 mA indique 8 mA. Quelle est la température ?",
        "choix": [
          "40 °F",
          "50 °F",
          "16 °F",
          "80 °F"
        ],
        "reponse": 1,
        "complexite": 2,
        "explication": "(8 − 4) / 16 × 200 = 50 °F."
      },
      {
        "question": "Combien de valeurs distinctes peut fournir un convertisseur analogique-numérique de 12 bits ?",
        "choix": [
          "65 536",
          "1024",
          "256",
          "4096"
        ],
        "reponse": 3,
        "complexite": 2,
        "explication": "2¹² = 4096 valeurs."
      },
      {
        "question": "Lequel de ces langages ne fait PAS partie de la norme IEC 61131-3 ?",
        "choix": [
          "SFC (Grafcet)",
          "Texte structuré (ST)",
          "Python",
          "Ladder (LD)"
        ],
        "reponse": 2,
        "complexite": 1,
        "explication": "La norme définit LD, FBD, ST, SFC et IL."
      },
      {
        "question": "En langage Ladder, un contact normalement ouvert (NO) laisse passer la logique lorsque :",
        "choix": [
          "Le bit associé est à 0",
          "La sortie associée est désactivée",
          "Le PLC est en mode programmation",
          "Le bit associé est à 1"
        ],
        "reponse": 3,
        "complexite": 1,
        "explication": "NO vrai quand le bit vaut 1 ; NF vrai quand il vaut 0."
      },
      {
        "question": "Comment fonctionne un temporisateur TON (retard à l'enclenchement) ?",
        "choix": [
          "Sa sortie s'active immédiatement et se désactive après le délai",
          "Il compte les impulsions d'entrée",
          "Il conserve sa valeur après une coupure de courant",
          "Sa sortie s'active quand l'entrée est restée vraie pendant toute la durée préréglée"
        ],
        "reponse": 3,
        "complexite": 2,
        "explication": "Il se remet à zéro si l'entrée redevient fausse avant le préréglage."
      },
      {
        "question": "Comment fonctionne un temporisateur TOF (retard au déclenchement) ?",
        "choix": [
          "Sa sortie s'active après un délai quand l'entrée devient vraie",
          "Il compte les impulsions",
          "Il génère un signal 4–20 mA",
          "Sa sortie reste active pendant le délai après que l'entrée devient fausse"
        ],
        "reponse": 3,
        "complexite": 2,
        "explication": "Ex. : ventilateur qui continue après l'arrêt du moteur."
      },
      {
        "question": "Un compteur CTU (compteur croissant) compte :",
        "choix": [
          "Le nombre de transitions de faux à vrai de son entrée",
          "Le temps écoulé en millisecondes",
          "La valeur d'un signal analogique",
          "Le nombre de cycles de scrutation"
        ],
        "reponse": 0,
        "complexite": 1,
        "explication": "Il s'incrémente à chaque front montant."
      },
      {
        "question": "Une instruction de détection de front montant (one-shot) est vraie :",
        "choix": [
          "Pendant un seul cycle de scrutation, au passage de faux à vrai",
          "Tant que l'entrée est vraie",
          "Pendant 1 seconde",
          "Uniquement au démarrage du PLC"
        ],
        "reponse": 0,
        "complexite": 3,
        "explication": "Impulsion d'un seul cycle (ONS, OSR, R_TRIG)."
      },
      {
        "question": "Qu'est-ce qui caractérise une sortie verrouillée (Latch/Set) dans un PLC ?",
        "choix": [
          "Elle se désactive dès que la condition devient fausse",
          "Elle reste active jusqu'à une instruction de déverrouillage (Unlatch/Reset)",
          "Elle clignote automatiquement",
          "Elle ne peut être utilisée qu'avec un temporisateur"
        ],
        "reponse": 1,
        "complexite": 2,
        "explication": "Elle mémorise l'état jusqu'au Reset/Unlatch."
      },
      {
        "question": "Est-ce une bonne pratique de commander la même bobine de sortie à deux endroits différents du programme ?",
        "choix": [
          "Oui, les deux conditions s'additionnent automatiquement",
          "C'est recommandé pour la redondance",
          "Non, car seule la dernière instruction exécutée détermine l'état de la sortie",
          "Oui, si les deux lignes sont dans des sous-programmes différents"
        ],
        "reponse": 2,
        "complexite": 3,
        "explication": "La dernière écriture l'emporte, ce qui rend la logique confuse."
      },
      {
        "question": "Quel type de donnée utilise-t-on pour stocker une pression mise à l'échelle comme 68,5 psi ?",
        "choix": [
          "INT",
          "TIMER",
          "REAL",
          "BOOL"
        ],
        "reponse": 2,
        "complexite": 2,
        "explication": "Le type REAL (virgule flottante) stocke des valeurs décimales comme 68,5 psi. BOOL stocke un bit, INT et DINT des entiers."
      },
      {
        "question": "Un capteur de proximité 3 fils de type PNP, lorsqu'il est activé, fournit sur son fil de signal :",
        "choix": [
          "Du 120 V c.a.",
          "Le 0 V (commun)",
          "Un signal 4–20 mA",
          "Le +24 V c.c."
        ],
        "reponse": 3,
        "complexite": 3,
        "explication": "PNP (sourcing) fournit le +24 V ; NPN commute le 0 V."
      },
      {
        "question": "Quel est l'avantage d'une sortie transistor par rapport à une sortie relais sur un PLC ?",
        "choix": [
          "Elle fonctionne en c.a. et en c.c.",
          "Elle commute plus rapidement et sans usure mécanique",
          "Elle peut commuter du 600 V c.a.",
          "Elle supporte des courants plus élevés"
        ],
        "reponse": 1,
        "complexite": 2,
        "explication": "Rapide et sans usure, mais en c.c. seulement."
      },
      {
        "question": "Pourquoi câble-t-on un bouton d'arrêt avec un contact normalement fermé (NF) ?",
        "choix": [
          "Parce que les contacts NO sont plus coûteux",
          "Pour économiser une entrée du PLC",
          "Pour réduire le nombre de fils",
          "Pour qu'une rupture de fil provoque l'arrêt (sécurité positive)"
        ],
        "reponse": 3,
        "complexite": 2,
        "explication": "Un fil coupé équivaut à un appui sur Arrêt."
      },
      {
        "question": "Dans un circuit de démarrage 3 fils, à quoi sert le contact auxiliaire placé en parallèle avec le bouton Marche ?",
        "choix": [
          "À signaler un défaut à la terre",
          "À maintenir la bobine alimentée après le relâchement du bouton (auto-maintien)",
          "À protéger contre les surcharges",
          "À inverser le sens de rotation"
        ],
        "reponse": 1,
        "complexite": 2,
        "explication": "Auto-maintien ; pas de redémarrage seul après une coupure."
      },
      {
        "question": "Qu'est-ce qui distingue un temporisateur rémanent (RTO) d'un temporisateur TON ?",
        "choix": [
          "Il retarde la désactivation de sa sortie",
          "Il conserve le temps accumulé quand son entrée devient fausse, jusqu'à une remise à zéro (RES)",
          "Il compte les impulsions de son entrée",
          "Il se remet à zéro dès que son entrée devient fausse"
        ],
        "reponse": 1,
        "complexite": 3,
        "explication": "Le RTO garde son temps accumulé même si l'entrée s'interrompt ; il faut une instruction de remise à zéro. Le TON, lui, se remet à zéro dès que son entrée devient fausse."
      },
      {
        "question": "Qu'est-ce que le « chien de garde » (watchdog) d'un PLC ?",
        "choix": [
          "Un capteur de présence de personnel",
          "Un compteur d'heures de fonctionnement",
          "Une minuterie qui place le PLC en défaut si le cycle de scrutation dépasse une durée limite",
          "Un logiciel antivirus"
        ],
        "reponse": 2,
        "complexite": 3,
        "explication": "Il met les sorties dans un état sûr si le programme bloque."
      },
      {
        "question": "Quelle affirmation est correcte concernant le forçage (force) d'une entrée ou d'une sortie ?",
        "choix": [
          "Il contourne la logique du programme et doit être autorisé, documenté et retiré rapidement",
          "Il est automatiquement annulé à chaque cycle",
          "Il ne fonctionne qu'en mode PROGRAM",
          "C'est sans risque et peut rester en place indéfiniment"
        ],
        "reponse": 0,
        "complexite": 2,
        "explication": "Le forçage contourne les verrouillages et peut causer des mouvements inattendus."
      },
      {
        "question": "Pour réaliser une fonction de sécurité comme l'arrêt d'urgence, que doit-on utiliser ?",
        "choix": [
          "Un relais ou un automate de sécurité certifié, selon le niveau de performance requis (ISO 13849)",
          "Un PLC standard suffit toujours",
          "Un VFD sans fonction de sécurité",
          "Un HMI"
        ],
        "reponse": 0,
        "complexite": 3,
        "explication": "Relais ou automate de sécurité, niveau PL selon ISO 13849."
      },
      {
        "question": "Dans un système à deux pompes, quel est le but de la logique d'alternance (lead/lag) programmée dans le PLC ?",
        "choix": [
          "Répartir l'usure entre les pompes et assurer une relève en cas de défaut",
          "Faire fonctionner toujours la même pompe",
          "Éliminer le besoin d'un clapet anti-retour",
          "Augmenter la pression maximale"
        ],
        "reponse": 0,
        "complexite": 2,
        "explication": "Répartition de l'usure et relève automatique."
      }
    ]
  },
  {
    "id": "hmi",
    "numero": 9,
    "titre": "Interfaces opérateur (HMI)",
    "questions": [
      {
        "question": "Concernant l'arrêt d'urgence d'une machine équipée d'une HMI, quelle affirmation est correcte ?",
        "choix": [
          "L'arrêt d'urgence doit être câblé dans un circuit de sécurité indépendant de l'HMI",
          "Il n'est requis qu'au-delà de 15 HP",
          "Un bouton d'arrêt d'urgence à l'écran suffit",
          "Il peut être programmé uniquement dans un PLC standard"
        ],
        "reponse": 0,
        "complexite": 2,
        "explication": "Dispositif physique câblé (CSA Z432, ISO 13850)."
      },
      {
        "question": "Quel est le rôle principal d'une HMI ?",
        "choix": [
          "Alimenter les moteurs",
          "Permettre à l'opérateur de visualiser le procédé et d'envoyer des commandes",
          "Exécuter la logique de commande à la place du PLC",
          "Remplacer le sectionneur principal"
        ],
        "reponse": 1,
        "complexite": 1,
        "explication": "La logique de commande reste dans le PLC."
      },
      {
        "question": "Lequel de ces protocoles est couramment utilisé pour la communication entre une HMI et un PLC ?",
        "choix": [
          "Modbus TCP",
          "HDMI",
          "DNS",
          "SMTP"
        ],
        "reponse": 0,
        "complexite": 1,
        "explication": "Modbus TCP, EtherNet/IP, PROFINET."
      },
      {
        "question": "Lors de la configuration d'une HMI, que faut-il sélectionner pour qu'elle communique avec un PLC ?",
        "choix": [
          "La couleur de l'écran",
          "Le pilote de communication correspondant à la marque et au protocole du PLC",
          "La puissance du moteur",
          "La langue de l'opérateur"
        ],
        "reponse": 1,
        "complexite": 2,
        "explication": "Le pilote doit correspondre au protocole et à la famille du PLC."
      },
      {
        "question": "Un PLC a l'adresse IP 192.168.1.10 avec un masque 255.255.255.0. Quelle adresse peut-on donner à l'HMI pour qu'elle communique directement avec lui ?",
        "choix": [
          "192.168.2.10",
          "10.0.0.10",
          "192.168.1.10 (la même)",
          "192.168.1.11"
        ],
        "reponse": 3,
        "complexite": 3,
        "explication": "Mêmes trois premiers octets, adresse différente."
      },
      {
        "question": "Dans une HMI, qu'est-ce qu'un « tag » ?",
        "choix": [
          "Une image de fond d'écran",
          "Une étiquette imprimée sur le panneau",
          "Une variable liée à une adresse ou une donnée du PLC",
          "Un mot de passe opérateur"
        ],
        "reponse": 2,
        "complexite": 1,
        "explication": "Il relie un objet graphique à une donnée du PLC."
      },
      {
        "question": "Quelle est la bonne pratique pour démarrer une pompe à partir d'un bouton de l'HMI ?",
        "choix": [
          "Forcer la sortie dans le PLC",
          "Écrire un bit de commande que le PLC traite avec ses verrouillages",
          "Écrire directement sur la sortie physique du démarreur",
          "Envoyer un courriel au technicien"
        ],
        "reponse": 1,
        "complexite": 3,
        "explication": "Le PLC applique ses verrouillages avant d'activer la sortie."
      },
      {
        "question": "Pour une commande de marche par à-coups (jog) sur l'HMI, quel type de bouton faut-il utiliser ?",
        "choix": [
          "Un voyant",
          "Un champ de saisie numérique",
          "Un bouton à maintien (bascule)",
          "Un bouton momentané, actif seulement pendant l'appui"
        ],
        "reponse": 3,
        "complexite": 2,
        "explication": "Le mouvement s'arrête dès que le doigt se retire."
      },
      {
        "question": "Pourquoi ajoute-t-on une demande de confirmation avant certaines actions sur l'HMI ?",
        "choix": [
          "Pour ralentir l'opérateur inutilement",
          "Pour réduire le trafic réseau",
          "Pour éviter une action accidentelle aux conséquences importantes",
          "Parce que le PLC l'exige toujours"
        ],
        "reponse": 2,
        "complexite": 1,
        "explication": "Réduit les erreurs de manipulation sur écran tactile."
      },
      {
        "question": "Quelle mesure empêche un opérateur d'entrer une consigne de pression dangereuse sur l'HMI ?",
        "choix": [
          "Aucune, l'opérateur est responsable",
          "Définir des limites minimale et maximale sur le champ de saisie",
          "Afficher la consigne en rouge",
          "Masquer la consigne"
        ],
        "reponse": 1,
        "complexite": 1,
        "explication": "Les limites empêchent les consignes hors plage."
      },
      {
        "question": "Pourquoi configure-t-on des niveaux d'accès utilisateurs sur une HMI ?",
        "choix": [
          "Pour accélérer la communication avec le PLC",
          "Pour augmenter la résolution de l'écran",
          "Pour empêcher la modification des paramètres critiques par du personnel non autorisé",
          "Pour réduire la consommation électrique"
        ],
        "reponse": 2,
        "complexite": 1,
        "explication": "Protège consignes, réglages PID et paramètres de sécurité."
      },
      {
        "question": "Selon les principes d'HMI haute performance (ISA-101), comment utiliser les couleurs ?",
        "choix": [
          "Utiliser des fonds neutres (gris) et réserver les couleurs vives aux alarmes et états anormaux",
          "Utiliser des animations 3D pour chaque équipement",
          "Utiliser le plus de couleurs vives possible",
          "Utiliser le rouge pour tous les équipements en marche"
        ],
        "reponse": 0,
        "complexite": 2,
        "explication": "Les anomalies ressortent immédiatement."
      },
      {
        "question": "Quelle structure de navigation recommande-t-on pour une HMI ?",
        "choix": [
          "Créer un écran par tag",
          "Aller d'une vue d'ensemble du procédé vers des écrans de plus en plus détaillés",
          "Classer les écrans par ordre alphabétique",
          "Mettre toute l'information sur un seul écran"
        ],
        "reponse": 1,
        "complexite": 1,
        "explication": "Hiérarchie : vue d'ensemble vers détail."
      },
      {
        "question": "Comment afficher une pression sur l'HMI pour l'opérateur ?",
        "choix": [
          "En valeur mise à l'échelle avec son unité (ex. 65 psi)",
          "En pourcentage sans unité",
          "En mA seulement",
          "En valeur brute du convertisseur (0–4095)"
        ],
        "reponse": 0,
        "complexite": 1,
        "explication": "Une valeur sans unité peut être mal interprétée. On affiche la valeur mise à l'échelle avec son unité (psi, gpm, °F)."
      },
      {
        "question": "Que signifie « acquitter » une alarme sur une HMI ?",
        "choix": [
          "Redémarrer le PLC",
          "Corriger automatiquement la cause du défaut",
          "Supprimer l'alarme de l'historique",
          "Confirmer que l'opérateur a pris connaissance de l'alarme"
        ],
        "reponse": 3,
        "complexite": 2,
        "explication": "L'alarme reste active tant que la cause persiste (ISA-18.2)."
      },
      {
        "question": "Pourquoi attribue-t-on des priorités aux alarmes ?",
        "choix": [
          "Ce n'est pas utile",
          "Pour rendre l'écran plus coloré",
          "Pour que l'opérateur traite d'abord les alarmes les plus critiques",
          "Pour réduire la taille du programme PLC"
        ],
        "reponse": 2,
        "complexite": 1,
        "explication": "Traiter d'abord les situations les plus graves."
      },
      {
        "question": "Qu'est-ce qu'une « avalanche d'alarmes » (alarm flood) ?",
        "choix": [
          "Une alarme de débordement de réservoir",
          "Un nombre d'alarmes trop élevé pour que l'opérateur puisse les traiter",
          "Une alarme sonore trop forte",
          "Une alarme qui ne s'affiche jamais"
        ],
        "reponse": 1,
        "complexite": 2,
        "explication": "L'opérateur risque de manquer l'alarme importante."
      },
      {
        "question": "Pourquoi est-il important que l'historique des alarmes soit horodaté ?",
        "choix": [
          "Pour reconstituer la séquence des événements lors d'une analyse de panne",
          "Pour afficher l'heure à l'opérateur",
          "Pour calculer le salaire des opérateurs",
          "Ce n'est pas nécessaire"
        ],
        "reponse": 0,
        "complexite": 2,
        "explication": "Permet de trouver la cause première d'un arrêt."
      },
      {
        "question": "À quoi sert un écran de tendances (trends) sur une HMI ?",
        "choix": [
          "À programmer le PLC",
          "À configurer l'adresse IP du VFD",
          "À afficher l'évolution d'une variable dans le temps",
          "À afficher uniquement les alarmes actives"
        ],
        "reponse": 2,
        "complexite": 1,
        "explication": "Aide au diagnostic et au réglage des boucles."
      },
      {
        "question": "Dans une HMI, qu'est-ce qu'une « recette » ?",
        "choix": [
          "Un ensemble de paramètres enregistrés pouvant être chargés d'un seul coup",
          "Une liste de pièces de rechange",
          "Un historique d'alarmes",
          "Un manuel d'utilisation"
        ],
        "reponse": 0,
        "complexite": 1,
        "explication": "Évite les erreurs de saisie lors d'un changement de production."
      },
      {
        "question": "À quoi sert un signal de vie (heartbeat) échangé entre l'HMI et le PLC ?",
        "choix": [
          "Faire clignoter l'écran",
          "Synchroniser l'heure",
          "Mesurer la fréquence cardiaque de l'opérateur",
          "Détecter une perte de communication entre l'HMI et le PLC"
        ],
        "reponse": 3,
        "complexite": 3,
        "explication": "Permet de réagir à une perte de communication."
      },
      {
        "question": "Une HMI a une face avant IP65. Qu'est-ce que cela signifie ?",
        "choix": [
          "Antidéflagrante",
          "Aucune protection contre l'eau",
          "Submersible en permanence",
          "Étanche à la poussière et protégée contre les jets d'eau"
        ],
        "reponse": 3,
        "complexite": 2,
        "explication": "6 : poussière ; 5 : jets d'eau."
      },
      {
        "question": "Quelle pratique de cybersécurité est recommandée pour une HMI accessible à distance ?",
        "choix": [
          "Changer les mots de passe par défaut et passer par un accès à distance sécurisé (VPN)",
          "Exposer l'HMI directement sur Internet",
          "Conserver les mots de passe par défaut pour faciliter le service",
          "Désactiver tous les comptes utilisateurs"
        ],
        "reponse": 0,
        "complexite": 2,
        "explication": "Principes IEC 62443 : mots de passe, segmentation, VPN."
      },
      {
        "question": "Pour un équipement livré à un client au Québec, en quelle langue l'interface HMI doit-elle être disponible ?",
        "choix": [
          "La langue n'a aucune importance",
          "Uniquement avec des pictogrammes",
          "Uniquement en anglais",
          "En français, avec possibilité d'autres langues comme l'anglais"
        ],
        "reponse": 3,
        "complexite": 2,
        "explication": "Charte de la langue française ; une HMI bilingue sert aussi les anglophones."
      },
      {
        "question": "Pourquoi faut-il conserver une sauvegarde versionnée du projet HMI après chaque modification ?",
        "choix": [
          "Pour réduire le nombre de tags",
          "Ce n'est pas nécessaire, l'HMI conserve tout",
          "Pour pouvoir restaurer l'application et savoir quelle version est installée chez le client",
          "Pour augmenter la vitesse de l'écran"
        ],
        "reponse": 2,
        "complexite": 1,
        "explication": "Restauration rapide et traçabilité des versions."
      }
    ]
  },
  {
    "id": "pid",
    "numero": 10,
    "titre": "Régulation PID",
    "questions": [
      {
        "question": "Que signifie l'acronyme PID ?",
        "choix": [
          "Puissance, Isolation, Démarrage",
          "Programme, Interface, Données",
          "Proportionnel, Intégral, Dérivé",
          "Pression, Intensité, Débit"
        ],
        "reponse": 2,
        "complexite": 1,
        "explication": "Les trois actions du régulateur : Proportionnelle, Intégrale et Dérivée."
      },
      {
        "question": "Dans une boucle de régulation de pression, que représente la variable de procédé (PV) ?",
        "choix": [
          "La valeur mesurée par le transmetteur de pression",
          "La vitesse du moteur",
          "Le gain du régulateur",
          "La valeur désirée par l'opérateur"
        ],
        "reponse": 0,
        "complexite": 1,
        "explication": "La PV est la mesure réelle du procédé, ici la pression lue par le transmetteur."
      },
      {
        "question": "Que représente la consigne (SP) ?",
        "choix": [
          "La sortie envoyée au VFD",
          "L'erreur maximale permise",
          "La valeur que l'on souhaite atteindre et maintenir",
          "La valeur mesurée"
        ],
        "reponse": 2,
        "complexite": 1,
        "explication": "La consigne est la valeur cible, par exemple 65 psi."
      },
      {
        "question": "Comment est définie l'erreur dans un régulateur PID ?",
        "choix": [
          "L'écart entre la consigne et la mesure",
          "La somme de la consigne et de la sortie",
          "La différence entre deux sorties successives",
          "Le produit de la consigne et de la mesure"
        ],
        "reponse": 0,
        "complexite": 1,
        "explication": "Erreur = SP − PV (ou PV − SP selon le sens d'action)."
      },
      {
        "question": "Dans un surpresseur à vitesse variable, quelle est généralement la variable manipulée (sortie du PID) ?",
        "choix": [
          "La consigne de vitesse (fréquence) envoyée au VFD",
          "La température de l'eau",
          "La pression mesurée",
          "Le courant du transmetteur"
        ],
        "reponse": 0,
        "complexite": 2,
        "explication": "Le PID, dans le PLC ou le VFD, ajuste la vitesse de la pompe."
      },
      {
        "question": "Comment agit le terme proportionnel (P) ?",
        "choix": [
          "Il accumule l'erreur dans le temps",
          "Sa sortie est proportionnelle à l'erreur actuelle",
          "Il ne dépend pas de l'erreur",
          "Il réagit à la vitesse de variation de l'erreur"
        ],
        "reponse": 1,
        "complexite": 1,
        "explication": "Plus l'erreur est grande, plus la correction proportionnelle est grande."
      },
      {
        "question": "Quel est le principal inconvénient d'un régulateur à action proportionnelle seule ?",
        "choix": [
          "Il ne peut pas commander un VFD",
          "Il laisse une erreur statique (écart permanent) en régime établi",
          "Il ne réagit jamais",
          "Il est toujours instable"
        ],
        "reponse": 1,
        "complexite": 2,
        "explication": "Un régulateur P seul a besoin d'une erreur pour produire une sortie, d'où un écart résiduel."
      },
      {
        "question": "Que se passe-t-il généralement si le gain proportionnel est trop élevé ?",
        "choix": [
          "La boucle oscille ou devient instable",
          "La réponse devient très lente",
          "L'erreur statique augmente",
          "La mesure devient plus précise"
        ],
        "reponse": 0,
        "complexite": 2,
        "explication": "Un gain excessif provoque des oscillations autour de la consigne."
      },
      {
        "question": "Un régulateur a un gain proportionnel Kp = 2. Quelle est sa bande proportionnelle ?",
        "choix": [
          "50 %",
          "2 %",
          "200 %",
          "20 %"
        ],
        "reponse": 0,
        "complexite": 3,
        "explication": "Bande proportionnelle = 100 / Kp = 100 / 2 = 50 %."
      },
      {
        "question": "Quel terme du PID élimine l'erreur statique ?",
        "choix": [
          "Le terme intégral (I)",
          "Aucun terme",
          "Le terme dérivé (D)",
          "Le terme proportionnel (P)"
        ],
        "reponse": 0,
        "complexite": 2,
        "explication": "L'intégrale accumule l'erreur et corrige jusqu'à ce que la mesure atteigne la consigne."
      },
      {
        "question": "Si l'on réduit le temps d'intégration (Ti, en secondes par répétition), l'action intégrale devient :",
        "choix": [
          "Plus faible",
          "Plus forte et plus rapide",
          "Inchangée",
          "Nulle"
        ],
        "reponse": 1,
        "complexite": 3,
        "explication": "Un Ti plus court rend l'intégrale plus agressive, avec un risque d'oscillation accru."
      },
      {
        "question": "Qu'est-ce que la saturation de l'intégrale (windup) ?",
        "choix": [
          "Un gain proportionnel nul",
          "Une panne du transmetteur",
          "Une coupure de communication",
          "L'accumulation excessive de l'intégrale quand la sortie est déjà au maximum, provoquant un fort dépassement"
        ],
        "reponse": 3,
        "complexite": 3,
        "explication": "Une fonction anti-windup limite l'accumulation quand la sortie est saturée (ex. pompe à 60 Hz)."
      },
      {
        "question": "À quoi réagit le terme dérivé (D) ?",
        "choix": [
          "À la valeur de la consigne seulement",
          "À l'erreur accumulée",
          "À la vitesse de variation de l'erreur ou de la mesure",
          "Au temps de fonctionnement de la pompe"
        ],
        "reponse": 2,
        "complexite": 2,
        "explication": "Il anticipe l'évolution de la mesure et freine les variations rapides."
      },
      {
        "question": "Pourquoi utilise-t-on souvent peu ou pas d'action dérivée en régulation de pression ou de débit de pompe ?",
        "choix": [
          "Parce qu'elle est interdite par le code",
          "Parce qu'elle élimine l'erreur statique",
          "Parce qu'elle rend la boucle plus lente",
          "Parce qu'elle amplifie le bruit de mesure, fréquent sur ces signaux"
        ],
        "reponse": 3,
        "complexite": 3,
        "explication": "Les signaux de pression et de débit sont bruités ; un PI est généralement suffisant."
      },
      {
        "question": "Quel type de régulateur est le plus couramment utilisé pour la pression d'un surpresseur ?",
        "choix": [
          "P seul",
          "D seul",
          "PI",
          "Tout ou rien seulement"
        ],
        "reponse": 2,
        "complexite": 2,
        "explication": "Le PI élimine l'erreur statique sans amplifier le bruit comme le ferait l'action dérivée."
      },
      {
        "question": "Pour maintenir une pression avec une pompe, la vitesse doit augmenter quand la pression baisse. Quel sens d'action faut-il configurer ?",
        "choix": [
          "Aucune, le sens n'a pas d'importance",
          "Action dérivée seulement",
          "Action inverse (la sortie augmente quand la mesure diminue)",
          "Action directe (la sortie augmente quand la mesure augmente)"
        ],
        "reponse": 2,
        "complexite": 3,
        "explication": "Un mauvais sens d'action pousse la pompe à fond ou l'arrête : erreur classique à la mise en service."
      },
      {
        "question": "Que permet le transfert sans à-coup (bumpless) entre les modes manuel et automatique ?",
        "choix": [
          "De supprimer la consigne",
          "D'éviter un saut brusque de la sortie lors du changement de mode",
          "D'augmenter le gain automatiquement",
          "D'arrêter la pompe instantanément"
        ],
        "reponse": 1,
        "complexite": 2,
        "explication": "La sortie reprend à la valeur courante, sans choc hydraulique ni mécanique."
      },
      {
        "question": "Qu'est-ce qui distingue une boucle fermée d'une boucle ouverte ?",
        "choix": [
          "Il n'y a aucune différence",
          "La boucle ouverte est toujours plus précise",
          "La boucle fermée n'a pas de capteur",
          "La boucle fermée utilise la mesure du procédé pour corriger la sortie (rétroaction)"
        ],
        "reponse": 3,
        "complexite": 1,
        "explication": "La rétroaction permet de compenser les perturbations, comme une variation de demande."
      },
      {
        "question": "Qu'est-ce que le dépassement (overshoot) ?",
        "choix": [
          "Le temps de montée de la mesure",
          "Le dépassement de la consigne par la mesure lors d'un changement",
          "Une panne du VFD",
          "L'erreur statique"
        ],
        "reponse": 1,
        "complexite": 1,
        "explication": "Un fort dépassement indique souvent un réglage trop agressif."
      },
      {
        "question": "Dans une régulation en cascade, quel est le rôle de la boucle maîtresse ?",
        "choix": [
          "Commander directement le moteur",
          "Désactiver l'action intégrale",
          "Remplacer le transmetteur",
          "Fournir la consigne de la boucle esclave"
        ],
        "reponse": 3,
        "complexite": 3,
        "explication": "Ex. : une boucle de niveau fournit la consigne d'une boucle de débit plus rapide."
      },
      {
        "question": "Dans la méthode de réglage de Ziegler-Nichols en boucle fermée, que détermine-t-on ?",
        "choix": [
          "L'adresse IP du régulateur",
          "Le diamètre de la roue",
          "Le gain critique et la période d'oscillation",
          "La tension et le courant du moteur"
        ],
        "reponse": 2,
        "complexite": 3,
        "explication": "On augmente le gain P jusqu'à une oscillation entretenue, puis on calcule P, I et D."
      },
      {
        "question": "Quelle est une démarche de réglage pratique d'une boucle PI sur le terrain ?",
        "choix": [
          "Mettre tous les gains au maximum",
          "Changer tous les paramètres en même temps",
          "Régler uniquement l'action dérivée",
          "Commencer avec l'action P, ajouter l'intégrale progressivement et observer la réponse à des échelons de consigne sur la tendance"
        ],
        "reponse": 3,
        "complexite": 2,
        "explication": "Modifier un paramètre à la fois et observer la réponse sur l'écran de tendances."
      },
      {
        "question": "Comment doit être la période d'exécution (échantillonnage) du PID par rapport à la dynamique du procédé ?",
        "choix": [
          "Nettement plus rapide que le temps de réponse du procédé",
          "Sans importance",
          "Beaucoup plus lente que le procédé",
          "Égale à une heure"
        ],
        "reponse": 0,
        "complexite": 3,
        "explication": "Un PID exécuté trop lentement réagit en retard et peut rendre la boucle instable."
      },
      {
        "question": "Le signal d'un transmetteur de débit est très bruité et fait osciller la vitesse de la pompe. Quelle mesure est appropriée ?",
        "choix": [
          "Retirer le transmetteur",
          "Appliquer un filtrage au signal de mesure et vérifier le câblage et le blindage",
          "Augmenter l'action dérivée",
          "Augmenter le gain proportionnel"
        ],
        "reponse": 1,
        "complexite": 2,
        "explication": "Un filtre modéré et un bon blindage réduisent le bruit sans trop ralentir la boucle."
      },
      {
        "question": "Quel type de procédé bénéficie le plus de l'action dérivée ?",
        "choix": [
          "Un débit très bruité",
          "Un signal tout ou rien",
          "Une pression de pompe très rapide et bruitée",
          "Une température avec forte inertie thermique, comme un échangeur de chaleur"
        ],
        "reponse": 3,
        "complexite": 3,
        "explication": "Les procédés lents à forte inertie profitent de l'effet d'anticipation du terme D."
      }
    ]
  }
];
