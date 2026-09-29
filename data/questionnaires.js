// Banque de questions Flo-Fab, bilingue (français/anglais) — générée à partir des questionnaires Word (même ordre des choix).
// reponse = index (0 = A, 1 = B, 2 = C, 3 = D) de la bonne réponse dans « choix » (identique dans les deux langues).
// complexite = 1 (faible), 2 (moyenne) ou 3 (élevée) ; c'est aussi le nombre de points de la question.
window.QUESTIONNAIRES = [
  {
    "id": "mecanique-sae",
    "numero": 1,
    "titre": {
      "fr": "Bases en mécanique (SAE)",
      "en": "Mechanical Fundamentals (SAE)"
    },
    "questions": [
      {
        "question": {
          "fr": "On applique une force de 50 lb au bout d'une clé de 2 pi. Quel couple est produit ?",
          "en": "A 50 lb force is applied at the end of a 2 ft wrench. What torque is produced?"
        },
        "choix": {
          "fr": [
            "25 lb·pi",
            "100 lb·pi",
            "52 lb·pi",
            "200 lb·pi"
          ],
          "en": [
            "25 lb·ft",
            "100 lb·ft",
            "52 lb·ft",
            "200 lb·ft"
          ]
        },
        "reponse": 1,
        "complexite": 1,
        "explication": {
          "fr": "Couple = force × bras de levier = 50 lb × 2 pi = 100 lb·pi.",
          "en": "Torque = force × lever arm = 50 lb × 2 ft = 100 lb·ft."
        }
      },
      {
        "question": {
          "fr": "Quelle formule donne la puissance d'un moteur en HP à partir du couple (lb·pi) et de la vitesse (tr/min) ?",
          "en": "Which formula gives a motor's power in HP from its torque (lb·ft) and speed (rpm)?"
        },
        "choix": {
          "fr": [
            "HP = couple / tr/min",
            "HP = couple × tr/min × 5252",
            "HP = tr/min / couple",
            "HP = couple × tr/min / 5252"
          ],
          "en": [
            "HP = torque / rpm",
            "HP = torque × rpm × 5252",
            "HP = rpm / torque",
            "HP = torque × rpm / 5252"
          ]
        },
        "reponse": 3,
        "complexite": 2,
        "explication": {
          "fr": "HP = couple (lb·pi) × tr/min / 5252. À vitesse égale, la puissance est proportionnelle au couple.",
          "en": "HP = torque (lb·ft) × rpm / 5252. At equal speed, power is proportional to torque."
        }
      },
      {
        "question": {
          "fr": "Quelle fraction de pouce correspond à 0,0625 po ?",
          "en": "Which fraction of an inch corresponds to 0.0625 in.?"
        },
        "choix": {
          "fr": [
            "1/64 po",
            "1/32 po",
            "1/8 po",
            "1/16 po"
          ],
          "en": [
            "1/64 in.",
            "1/32 in.",
            "1/8 in.",
            "1/16 in."
          ]
        },
        "reponse": 3,
        "complexite": 1,
        "explication": {
          "fr": "1 ÷ 16 = 0,0625 : c'est 1/16 po. Repères utiles : 1/8 = 0,125 ; 1/32 = 0,03125 ; 1/64 ≈ 0,0156.",
          "en": "1 ÷ 16 = 0.0625: that is 1/16 in. Useful references: 1/8 = 0.125; 1/32 = 0.03125; 1/64 ≈ 0.0156."
        }
      },
      {
        "question": {
          "fr": "Quelle est la valeur décimale de 3/8 po ?",
          "en": "What is the decimal value of 3/8 in.?"
        },
        "choix": {
          "fr": [
            "0,375 po",
            "0,250 po",
            "0,625 po",
            "0,500 po"
          ],
          "en": [
            "0.375 in.",
            "0.250 in.",
            "0.625 in.",
            "0.500 in."
          ]
        },
        "reponse": 0,
        "complexite": 1,
        "explication": {
          "fr": "3 ÷ 8 = 0,375 po.",
          "en": "3 ÷ 8 = 0.375 in."
        }
      },
      {
        "question": {
          "fr": "Un « mil » utilisé pour les tolérances d'alignement correspond à :",
          "en": "A \"mil\" used for alignment tolerances corresponds to:"
        },
        "choix": {
          "fr": [
            "0,001 po",
            "0,01 po",
            "1/16 po",
            "0,1 po"
          ],
          "en": [
            "0.001 in.",
            "0.01 in.",
            "1/16 in.",
            "0.1 in."
          ]
        },
        "reponse": 0,
        "complexite": 2,
        "explication": {
          "fr": "1 mil = 1 millième de pouce = 0,001 po. Les tolérances d'alignement sont souvent de quelques mils.",
          "en": "1 mil = one thousandth of an inch = 0.001 in. Alignment tolerances are often a few mils."
        }
      },
      {
        "question": {
          "fr": "Avec un micromètre en pouces standard, quelle est la précision de lecture habituelle ?",
          "en": "With a standard-inch micrometer, what is the usual reading precision?"
        },
        "choix": {
          "fr": [
            "1/4 po",
            "0,01 po",
            "1/16 po",
            "0,001 po"
          ],
          "en": [
            "1/4 in.",
            "0.01 in.",
            "1/16 in.",
            "0.001 in."
          ]
        },
        "reponse": 3,
        "complexite": 1,
        "explication": {
          "fr": "Un micromètre standard se lit au millième de pouce (0,001 po), certains au dix-millième avec vernier.",
          "en": "A standard micrometer reads to the thousandth of an inch (0.001 in.); some read to the ten-thousandth with a vernier scale."
        }
      },
      {
        "question": {
          "fr": "Que signifie la désignation de filetage 1/2\"-13 UNC ?",
          "en": "What does the thread designation 1/2\"-13 UNC mean?"
        },
        "choix": {
          "fr": [
            "Diamètre nominal de 1/2 po et 13 filets par pouce, pas gros unifié",
            "Classe de résistance 13",
            "Longueur de 1/2 po et 13 filets au total",
            "Longueur de 13 po"
          ],
          "en": [
            "A nominal diameter of 1/2 in. and 13 threads per inch, Unified coarse thread",
            "Strength grade 13",
            "A length of 1/2 in. and 13 threads total",
            "A length of 13 in."
          ]
        },
        "reponse": 0,
        "complexite": 2,
        "explication": {
          "fr": "UNC = Unified National Coarse ; 13 filets par pouce pour un diamètre de 1/2 po.",
          "en": "UNC = Unified National Coarse; 13 threads per inch for a 1/2 in. diameter."
        }
      },
      {
        "question": {
          "fr": "Quelle est la différence entre un filetage UNC et UNF de même diamètre ?",
          "en": "What is the difference between a UNC and a UNF thread of the same diameter?"
        },
        "choix": {
          "fr": [
            "Ils sont identiques",
            "L'UNF a plus de filets par pouce (pas plus fin)",
            "L'UNC est réservé aux tuyaux",
            "L'UNF a moins de filets par pouce"
          ],
          "en": [
            "They are identical",
            "UNF has more threads per inch (finer pitch)",
            "UNC is reserved for pipe",
            "UNF has fewer threads per inch"
          ]
        },
        "reponse": 1,
        "complexite": 2,
        "explication": {
          "fr": "UNF = Unified National Fine : pas plus fin, meilleure résistance aux vibrations et réglage plus précis.",
          "en": "UNF = Unified National Fine: a finer pitch, better vibration resistance, and finer adjustment."
        }
      },
      {
        "question": {
          "fr": "La tête d'un boulon SAE porte 6 lignes radiales. De quel grade s'agit-il ?",
          "en": "An SAE bolt head has 6 radial lines. What grade is it?"
        },
        "choix": {
          "fr": [
            "Grade 8",
            "Grade 10",
            "Grade 2",
            "Grade 5"
          ],
          "en": [
            "Grade 8",
            "Grade 10",
            "Grade 2",
            "Grade 5"
          ]
        },
        "reponse": 0,
        "complexite": 2,
        "explication": {
          "fr": "Selon SAE J429 : aucune ligne = grade 2, 3 lignes = grade 5, 6 lignes = grade 8.",
          "en": "Per SAE J429: no lines = grade 2, 3 lines = grade 5, 6 lines = grade 8."
        }
      },
      {
        "question": {
          "fr": "Quelle est la résistance minimale à la traction d'un boulon SAE de grade 8 ?",
          "en": "What is the minimum tensile strength of a grade 8 SAE bolt?"
        },
        "choix": {
          "fr": [
            "150 000 psi",
            "60 000 psi",
            "120 000 psi",
            "90 000 psi"
          ],
          "en": [
            "150,000 psi",
            "60,000 psi",
            "120,000 psi",
            "90,000 psi"
          ]
        },
        "reponse": 0,
        "complexite": 3,
        "explication": {
          "fr": "Grade 8 : 150 000 psi ; grade 5 : 120 000 psi (jusqu'à 1 po).",
          "en": "Grade 8: 150,000 psi; grade 5: 120,000 psi (up to 1 in.)."
        }
      },
      {
        "question": {
          "fr": "Quelle taille de clé utilise-t-on habituellement pour la tête hexagonale d'un boulon de 1/2 po ?",
          "en": "What wrench size is typically used for the hex head of a 1/2 in. bolt?"
        },
        "choix": {
          "fr": [
            "1/2 po",
            "1 po",
            "3/4 po",
            "9/16 po"
          ],
          "en": [
            "1/2 in.",
            "1 in.",
            "3/4 in.",
            "9/16 in."
          ]
        },
        "reponse": 2,
        "complexite": 2,
        "explication": {
          "fr": "Un boulon hexagonal standard de 1/2 po a une tête de 3/4 po.",
          "en": "A standard 1/2 in. hex bolt has a 3/4 in. head."
        }
      },
      {
        "question": {
          "fr": "Quelle clé est préférable pour desserrer un écrou très serré ou grippé ?",
          "en": "Which wrench is preferable for loosening a very tight or seized nut?"
        },
        "choix": {
          "fr": [
            "Une pince-étau",
            "Une clé polygonale ou une douille à 6 pans de la bonne taille",
            "Une clé à fourche usée",
            "Une clé à molette"
          ],
          "en": [
            "Locking (vise-grip) pliers",
            "A box wrench or 6-point socket of the correct size",
            "A worn open-end wrench",
            "An adjustable wrench"
          ]
        },
        "reponse": 1,
        "complexite": 1,
        "explication": {
          "fr": "Une clé 6 pans de la bonne taille appuie sur les faces de l'écrou et non sur les coins : elle risque moins de glisser et d'arrondir l'écrou.",
          "en": "A correctly sized 6-point wrench bears on the nut's flats rather than its corners, so it is less likely to slip and round off the nut."
        }
      },
      {
        "question": {
          "fr": "Dans quelle unité SAE exprime-t-on couramment un couple de serrage de boulon ?",
          "en": "In what SAE unit is bolt tightening torque commonly expressed?"
        },
        "choix": {
          "fr": [
            "HP",
            "psi",
            "lb·pi (ou lb·po pour les petits boulons)",
            "gal/min"
          ],
          "en": [
            "HP",
            "psi",
            "lb·ft (or lb·in. for small bolts)",
            "gal/min"
          ]
        },
        "reponse": 2,
        "complexite": 1,
        "explication": {
          "fr": "Les clés dynamométriques SAE sont graduées en lb·pi ou en lb·po.",
          "en": "SAE torque wrenches are graduated in lb·ft or lb·in."
        }
      },
      {
        "question": {
          "fr": "Comment doit-on serrer les boulons d'une bride de tuyauterie ?",
          "en": "How should the bolts of a piping flange be tightened?"
        },
        "choix": {
          "fr": [
            "Le plus fort possible avec une rallonge",
            "Progressivement, en plusieurs passes, selon un ordre en croix (étoile)",
            "Seulement les boulons du haut",
            "Un boulon à la fois au couple final, dans le sens horaire"
          ],
          "en": [
            "As tight as possible using a cheater bar",
            "Gradually, in several passes, following a crisscross (star) pattern",
            "Only the top bolts",
            "One bolt at a time to final torque, clockwise"
          ]
        },
        "reponse": 1,
        "complexite": 1,
        "explication": {
          "fr": "Le serrage en croix par passes répartit la pression sur le joint et évite les fuites.",
          "en": "Crisscross tightening in passes distributes pressure evenly on the gasket and prevents leaks."
        }
      },
      {
        "question": {
          "fr": "Pourquoi utilise-t-on un produit frein-filet sur certains boulons ?",
          "en": "Why is thread-locking compound used on certain bolts?"
        },
        "choix": {
          "fr": [
            "Pour empêcher le desserrage causé par les vibrations",
            "Pour lubrifier le filetage",
            "Pour augmenter la conductivité électrique",
            "Pour faciliter le démontage"
          ],
          "en": [
            "To prevent loosening caused by vibration",
            "To lubricate the threads",
            "To increase electrical conductivity",
            "To make disassembly easier"
          ]
        },
        "reponse": 0,
        "complexite": 1,
        "explication": {
          "fr": "Le frein-filet empêche le desserrage sur les équipements soumis aux vibrations.",
          "en": "Thread locker prevents loosening on equipment subject to vibration."
        }
      },
      {
        "question": {
          "fr": "Qu'est-ce qui caractérise un filetage de tuyau NPT ?",
          "en": "What characterizes an NPT pipe thread?"
        },
        "choix": {
          "fr": [
            "Il ne s'utilise que pour l'électricité",
            "Il est parfaitement cylindrique",
            "Il est conique, et l'étanchéité se fait par le serrage des filets avec un scellant (ruban ou pâte)",
            "Il est identique à un filetage UNC"
          ],
          "en": [
            "It is only used for electrical work",
            "It is perfectly cylindrical",
            "It is tapered, and sealing is achieved by thread interference with a sealant (tape or paste)",
            "It is identical to a UNC thread"
          ]
        },
        "reponse": 2,
        "complexite": 2,
        "explication": {
          "fr": "NPT = National Pipe Taper : filetage conique qui scelle par coincement, complété par un scellant.",
          "en": "NPT = National Pipe Taper: a tapered thread that seals by wedging, aided by a sealant."
        }
      },
      {
        "question": {
          "fr": "Un manomètre indique 60 psig. Que signifie « psig » ?",
          "en": "A pressure gauge reads 60 psig. What does \"psig\" mean?"
        },
        "choix": {
          "fr": [
            "Pression absolue, mesurée par rapport au vide",
            "Pression différentielle entre deux pompes",
            "Pression en gallons",
            "Pression relative, mesurée par rapport à la pression atmosphérique"
          ],
          "en": [
            "Absolute pressure, measured relative to a vacuum",
            "Differential pressure between two pumps",
            "Pressure in gallons",
            "Gauge pressure, measured relative to atmospheric pressure"
          ]
        },
        "reponse": 3,
        "complexite": 2,
        "explication": {
          "fr": "psig = pression relative (gauge), par rapport à l'atmosphère. psia = pression absolue : environ 14,7 psi de plus au niveau de la mer.",
          "en": "psig = gauge pressure, relative to atmosphere. psia = absolute pressure: about 14.7 psi higher at sea level."
        }
      },
      {
        "question": {
          "fr": "Une pompe remplit un réservoir de 600 gal US en 10 minutes. Quel est son débit moyen ?",
          "en": "A pump fills a 600 US gal tank in 10 minutes. What is its average flow rate?"
        },
        "choix": {
          "fr": [
            "600 gpm",
            "6 000 gpm",
            "60 gpm",
            "6 gpm"
          ],
          "en": [
            "600 gpm",
            "6,000 gpm",
            "60 gpm",
            "6 gpm"
          ]
        },
        "reponse": 2,
        "complexite": 2,
        "explication": {
          "fr": "Débit = volume ÷ temps = 600 gal ÷ 10 min = 60 gpm.",
          "en": "Flow = volume ÷ time = 600 gal ÷ 10 min = 60 gpm."
        }
      },
      {
        "question": {
          "fr": "Par rapport à un roulement à billes de même taille, un roulement à rouleaux cylindriques :",
          "en": "Compared to a ball bearing of the same size, a cylindrical roller bearing:"
        },
        "choix": {
          "fr": [
            "Ne nécessite aucune lubrification",
            "Supporte uniquement des charges axiales",
            "Supporte des charges radiales plus élevées",
            "Tourne toujours plus vite"
          ],
          "en": [
            "Needs no lubrication",
            "Only supports axial loads",
            "Supports higher radial loads",
            "Always spins faster"
          ]
        },
        "reponse": 2,
        "complexite": 2,
        "explication": {
          "fr": "Le contact linéaire des rouleaux supporte davantage de charge radiale que le contact ponctuel des billes.",
          "en": "The rollers' line contact supports more radial load than the balls' point contact."
        }
      },
      {
        "question": {
          "fr": "Quel est l'effet d'un excès de graisse dans un roulement ?",
          "en": "What is the effect of excess grease in a bearing?"
        },
        "choix": {
          "fr": [
            "Il prolonge toujours la durée de vie",
            "Il réduit la vitesse du moteur",
            "Il n'a aucun effet",
            "Il provoque un échauffement et peut endommager le roulement et les joints"
          ],
          "en": [
            "It always extends service life",
            "It slows down the motor",
            "It has no effect",
            "It causes heating and can damage the bearing and seals"
          ]
        },
        "reponse": 3,
        "complexite": 1,
        "explication": {
          "fr": "Trop de graisse crée du brassage et de la chaleur ; suivre la quantité et la fréquence du fabricant.",
          "en": "Too much grease causes churning and heat; follow the manufacturer's quantity and frequency."
        }
      },
      {
        "question": {
          "fr": "Quels sont les deux types de désalignement entre un moteur et une pompe ?",
          "en": "What are the two types of misalignment between a motor and a pump?"
        },
        "choix": {
          "fr": [
            "Axial et thermique seulement",
            "Électrique et mécanique",
            "Vertical et chromatique",
            "Parallèle (décalage) et angulaire"
          ],
          "en": [
            "Axial and thermal only",
            "Electrical and mechanical",
            "Vertical and chromatic",
            "Parallel (offset) and angular"
          ]
        },
        "reponse": 3,
        "complexite": 2,
        "explication": {
          "fr": "Le désalignement se mesure en décalage parallèle et en angle, dans les plans vertical et horizontal.",
          "en": "Misalignment is measured as a parallel offset and an angle, in both the vertical and horizontal planes."
        }
      },
      {
        "question": {
          "fr": "Qu'est-ce qu'un « pied bancal » (soft foot) sur un moteur ?",
          "en": "What is a \"soft foot\" on a motor?"
        },
        "choix": {
          "fr": [
            "Un pied en caoutchouc antivibratoire",
            "Un pied qui ne repose pas uniformément sur sa base et déforme la carcasse au serrage",
            "Un pied du moteur plus lourd que les autres",
            "Un moteur monté à la verticale"
          ],
          "en": [
            "A rubber anti-vibration foot",
            "A foot that does not rest evenly on its base and distorts the frame when tightened",
            "A motor foot that is heavier than the others",
            "A motor mounted vertically"
          ]
        },
        "reponse": 1,
        "complexite": 3,
        "explication": {
          "fr": "On le mesure en mils et on le corrige avec des cales avant l'alignement.",
          "en": "It is measured in mils and corrected with shims before alignment."
        }
      },
      {
        "question": {
          "fr": "En système SAE, en quelle unité exprime-t-on souvent la vitesse vibratoire d'une machine ?",
          "en": "In the SAE system, in what unit is a machine's vibration velocity often expressed?"
        },
        "choix": {
          "fr": [
            "En psi",
            "En lb·pi",
            "En po/s (pouces par seconde)",
            "En °F"
          ],
          "en": [
            "psi",
            "lb·ft",
            "In./s (inches per second)",
            "°F"
          ]
        },
        "reponse": 2,
        "complexite": 3,
        "explication": {
          "fr": "La vitesse vibratoire est souvent donnée en po/s ; le déplacement, en mils.",
          "en": "Vibration velocity is often given in in./s; displacement is given in mils."
        }
      },
      {
        "question": {
          "fr": "Pourquoi un protecteur d'accouplement est-il obligatoire sur un groupe moto-pompe ?",
          "en": "Why is a coupling guard mandatory on a motor-pump set?"
        },
        "choix": {
          "fr": [
            "Pour augmenter le rendement",
            "Pour protéger les travailleurs contre les pièces en rotation",
            "Pour lubrifier l'accouplement",
            "Pour réduire le bruit"
          ],
          "en": [
            "To increase efficiency",
            "To protect workers from rotating parts",
            "To lubricate the coupling",
            "To reduce noise"
          ]
        },
        "reponse": 1,
        "complexite": 1,
        "explication": {
          "fr": "Les pièces en mouvement doivent être protégées ; ne jamais faire fonctionner sans protecteur.",
          "en": "Moving parts must be guarded; never operate without a guard."
        }
      },
      {
        "question": {
          "fr": "Lors du levage d'un groupe pompe-moteur monté sur base, quelle pratique est correcte ?",
          "en": "When lifting a base-mounted pump-motor set, what practice is correct?"
        },
        "choix": {
          "fr": [
            "Utiliser les points de levage prévus sur la base et des élingues dont la capacité (en lb) est suffisante",
            "Soulever par l'anneau de levage du moteur",
            "Soulever par l'arbre",
            "Soulever par les brides de la pompe"
          ],
          "en": [
            "Use the lifting points provided on the base and slings with sufficient capacity (in lb)",
            "Lift by the motor's lifting eye",
            "Lift by the shaft",
            "Lift by the pump flanges"
          ]
        },
        "reponse": 0,
        "complexite": 1,
        "explication": {
          "fr": "L'anneau du moteur est conçu pour le moteur seul ; vérifier la charge maximale d'utilisation (WLL) des élingues.",
          "en": "The motor's lifting eye is designed for the motor alone; check the slings' working load limit (WLL)."
        }
      }
    ]
  },
  {
    "id": "outils",
    "numero": 2,
    "titre": {
      "fr": "Utilisation des outils",
      "en": "Tool Use"
    },
    "questions": [
      {
        "question": {
          "fr": "Avant de percer un trou dans une pièce d'acier, pourquoi marque-t-on l'emplacement avec un pointeau ?",
          "en": "Before drilling a hole in a steel part, why is the location marked with a center punch?"
        },
        "choix": {
          "fr": [
            "Pour empêcher le foret de glisser et le centrer au bon endroit",
            "Pour indiquer la profondeur du trou",
            "Pour durcir le métal à cet endroit",
            "Pour refroidir le foret"
          ],
          "en": [
            "To keep the drill bit from wandering and to center it at the right spot",
            "To mark the hole's depth",
            "To harden the metal at that spot",
            "To cool the drill bit"
          ]
        },
        "reponse": 0,
        "complexite": 1,
        "explication": {
          "fr": "La petite empreinte du pointeau guide la pointe du foret au démarrage et évite qu'il se déplace sur la surface.",
          "en": "The small punch mark guides the drill tip at startup and keeps it from wandering across the surface."
        }
      },
      {
        "question": {
          "fr": "Sur une perceuse à colonne, comment doit-on régler la vitesse de rotation pour un foret de plus grand diamètre ?",
          "en": "On a drill press, how should rotation speed be adjusted for a larger-diameter bit?"
        },
        "choix": {
          "fr": [
            "Plus lente",
            "Plus rapide",
            "La même, quel que soit le diamètre",
            "Au maximum de la perceuse"
          ],
          "en": [
            "Slower",
            "Faster",
            "The same, regardless of diameter",
            "At the drill press's maximum"
          ]
        },
        "reponse": 0,
        "complexite": 2,
        "explication": {
          "fr": "Plus le diamètre est grand, plus la vitesse à la périphérie du foret est élevée : on réduit la vitesse de rotation pour éviter la surchauffe et l'usure du foret.",
          "en": "The larger the diameter, the higher the surface speed at the bit's edge: rotation speed is reduced to prevent overheating and bit wear."
        }
      },
      {
        "question": {
          "fr": "Quelle pratique est recommandée pour percer de l'acier inoxydable ?",
          "en": "What practice is recommended for drilling stainless steel?"
        },
        "choix": {
          "fr": [
            "Vitesse élevée et faible pression pour ne pas forcer",
            "Percer à sec pour éviter les taches",
            "Laisser le foret tourner sans avancer pour amorcer le trou",
            "Vitesse lente, avance ferme et constante, avec huile de coupe"
          ],
          "en": [
            "High speed and light pressure to avoid forcing it",
            "Drill dry to avoid stains",
            "Let the bit spin without feeding to start the hole",
            "Slow speed, firm and steady feed, with cutting oil"
          ]
        },
        "reponse": 3,
        "complexite": 3,
        "explication": {
          "fr": "L'inox durcit s'il chauffe sous un foret qui frotte (écrouissage). Une vitesse lente, une avance constante et de l'huile de coupe gardent l'arête en prise et le foret froid.",
          "en": "Stainless steel work-hardens if it heats up under a rubbing bit. Slow speed, a steady feed, and cutting oil keep the edge cutting and the bit cool."
        }
      },
      {
        "question": {
          "fr": "Sur une perceuse à colonne, comment doit-on tenir une petite pièce à percer ?",
          "en": "On a drill press, how should a small workpiece be held while drilling?"
        },
        "choix": {
          "fr": [
            "Posée sur la table sans fixation",
            "Serrée dans un étau ou fixée avec des brides",
            "Tenue avec une pince par un collègue",
            "À la main, fermement"
          ],
          "en": [
            "Set on the table with no fixturing",
            "Clamped in a vise or secured with clamps",
            "Held by a coworker with pliers",
            "Firmly by hand"
          ]
        },
        "reponse": 1,
        "complexite": 1,
        "explication": {
          "fr": "Une pièce tenue à la main peut être entraînée par le foret et causer des blessures graves. Elle doit toujours être bloquée dans un étau ou par des brides.",
          "en": "A workpiece held by hand can be caught by the bit and cause serious injury. It must always be secured in a vise or with clamps."
        }
      },
      {
        "question": {
          "fr": "Quel foret utilise-t-on habituellement avant de tarauder un trou 1/2\"-13 UNC ?",
          "en": "Which drill bit is typically used before tapping a 1/2\"-13 UNC hole?"
        },
        "choix": {
          "fr": [
            "9/16 po",
            "1/2 po",
            "27/64 po",
            "3/8 po"
          ],
          "en": [
            "9/16 in.",
            "1/2 in.",
            "27/64 in.",
            "3/8 in."
          ]
        },
        "reponse": 2,
        "complexite": 2,
        "explication": {
          "fr": "Le foret de taraudage d'un 1/2\"-13 UNC est de 27/64 po (0,422 po) : environ le diamètre nominal moins le pas (0,500 − 1/13 po). Un foret de 1/2 po ne laisserait pas de matière pour les filets.",
          "en": "The tap drill for a 1/2\"-13 UNC hole is 27/64 in. (0.422 in.): roughly the nominal diameter minus the pitch (0.500 − 1/13 in.). A 1/2 in. bit would leave no material for the threads."
        }
      },
      {
        "question": {
          "fr": "Dans un jeu de trois tarauds manuels, dans quel ordre les utilise-t-on ?",
          "en": "In a set of three hand taps, in what order are they used?"
        },
        "choix": {
          "fr": [
            "Ébaucheur (entrée conique), intermédiaire, finisseur",
            "Seulement le finisseur",
            "Dans n'importe quel ordre",
            "Finisseur, intermédiaire, ébaucheur"
          ],
          "en": [
            "Taper (long tapered lead), plug, bottoming",
            "Only the bottoming tap",
            "In any order",
            "Bottoming, plug, taper"
          ]
        },
        "reponse": 0,
        "complexite": 2,
        "explication": {
          "fr": "L'ébaucheur, à longue entrée conique, amorce le filetage ; l'intermédiaire le prolonge ; le finisseur termine les filets jusqu'au fond.",
          "en": "The taper tap, with a long tapered lead, starts the thread; the plug tap extends it; the bottoming tap finishes the threads to the bottom."
        }
      },
      {
        "question": {
          "fr": "Pendant un taraudage manuel, pourquoi fait-on régulièrement un demi-tour vers l'arrière ?",
          "en": "During hand tapping, why is the tap regularly backed off half a turn?"
        },
        "choix": {
          "fr": [
            "Pour aller plus vite",
            "Pour vérifier le pas",
            "Pour agrandir le filetage",
            "Pour casser et dégager les copeaux et éviter de briser le taraud"
          ],
          "en": [
            "To work faster",
            "To check the pitch",
            "To enlarge the thread",
            "To break and clear the chips and avoid breaking the tap"
          ]
        },
        "reponse": 3,
        "complexite": 2,
        "explication": {
          "fr": "Le retour en arrière fragmente les copeaux ; sans cela, ils bloquent les goujures et le taraud risque de casser dans le trou.",
          "en": "Backing off breaks the chips into small pieces; otherwise they jam the flutes and the tap can break inside the hole."
        }
      },
      {
        "question": {
          "fr": "Pour tarauder un trou borgne, pourquoi perce-t-on plus profond que la longueur filetée demandée ?",
          "en": "For tapping a blind hole, why is it drilled deeper than the required thread length?"
        },
        "choix": {
          "fr": [
            "Parce que l'entrée du taraud ne fait pas de filets complets et qu'il faut de la place pour les copeaux",
            "Ce n'est pas nécessaire",
            "Pour réduire le poids de la pièce",
            "Pour que la vis dépasse de l'autre côté"
          ],
          "en": [
            "Because the tap's lead does not cut full threads and room is needed for chips",
            "It is not necessary",
            "To reduce the part's weight",
            "So the screw can protrude on the other side"
          ]
        },
        "reponse": 0,
        "complexite": 3,
        "explication": {
          "fr": "Les premiers filets du taraud sont incomplets (entrée conique) et les copeaux s'accumulent au fond : un trou plus profond permet d'obtenir la longueur de filets complets requise sans casser le taraud.",
          "en": "The tap's first threads are incomplete (tapered lead) and chips collect at the bottom: a deeper hole allows the required length of full threads without breaking the tap."
        }
      },
      {
        "question": {
          "fr": "En production, quel instrument permet de vérifier rapidement si un alésage est dans sa tolérance ?",
          "en": "In production, what instrument quickly checks whether a bore is within tolerance?"
        },
        "choix": {
          "fr": [
            "Un niveau à bulle",
            "Un rapporteur d'angle",
            "Un ruban à mesurer",
            "Un tampon (calibre) entre / n'entre pas (go/no-go)"
          ],
          "en": [
            "A spirit level",
            "A protractor",
            "A tape measure",
            "A go/no-go plug gauge"
          ]
        },
        "reponse": 3,
        "complexite": 2,
        "explication": {
          "fr": "Le côté « entre » doit passer et le côté « n'entre pas » ne doit pas passer : l'alésage est alors dans sa tolérance, sans lecture ni calcul.",
          "en": "The \"go\" end must fit and the \"no-go\" end must not: the bore is then within tolerance, with no reading or calculation needed."
        }
      },
      {
        "question": {
          "fr": "Que faut-il vérifier avant de prendre une mesure avec un micromètre ?",
          "en": "What should be checked before taking a measurement with a micrometer?"
        },
        "choix": {
          "fr": [
            "Rien, il est toujours juste",
            "Le zéro, touches propres et fermées (ou avec l'étalon)",
            "La température de la pièce seulement",
            "La couleur du micromètre"
          ],
          "en": [
            "Nothing, it is always accurate",
            "Zero reading, clean and closed anvils (or checked against a standard)",
            "Only the part's temperature",
            "The micrometer's color"
          ]
        },
        "reponse": 1,
        "complexite": 1,
        "explication": {
          "fr": "On nettoie les touches et on vérifie que le micromètre indique zéro fermé (ou la valeur de l'étalon). Sinon, toutes les mesures seront décalées.",
          "en": "Clean the anvils and check that the micrometer reads zero when closed (or matches the standard). Otherwise every measurement will be off."
        }
      },
      {
        "question": {
          "fr": "Quel instrument utilise-t-on pour mesurer le faux-rond (battement) d'un arbre en rotation ?",
          "en": "What instrument is used to measure the runout (wobble) of a rotating shaft?"
        },
        "choix": {
          "fr": [
            "Un comparateur à cadran sur support magnétique",
            "Un ruban à mesurer",
            "Une jauge d'épaisseur",
            "Un niveau à bulle"
          ],
          "en": [
            "A dial indicator on a magnetic base",
            "A tape measure",
            "A feeler gauge",
            "A spirit level"
          ]
        },
        "reponse": 0,
        "complexite": 2,
        "explication": {
          "fr": "Le comparateur, fixé sur un support, touche l'arbre ; en tournant l'arbre, l'écart entre la lecture la plus haute et la plus basse donne le faux-rond.",
          "en": "The indicator, mounted on a stand, contacts the shaft; as the shaft is rotated, the difference between the highest and lowest readings gives the runout."
        }
      },
      {
        "question": {
          "fr": "À quoi sert une jauge d'épaisseur (jeu de lames calibrées) ?",
          "en": "What is a feeler gauge (set of calibrated blades) used for?"
        },
        "choix": {
          "fr": [
            "À tracer des lignes",
            "À mesurer un jeu ou un espace entre deux surfaces",
            "À mesurer un couple de serrage",
            "À mesurer un diamètre"
          ],
          "en": [
            "Marking layout lines",
            "Measuring a gap or space between two surfaces",
            "Measuring tightening torque",
            "Measuring a diameter"
          ]
        },
        "reponse": 1,
        "complexite": 1,
        "explication": {
          "fr": "On glisse les lames calibrées dans l'espace, par exemple entre deux moitiés d'accouplement, jusqu'à trouver l'épaisseur qui passe avec un léger frottement.",
          "en": "The calibrated blades are slid into the gap, for example between two coupling halves, until the thickness that fits with slight drag is found."
        }
      },
      {
        "question": {
          "fr": "Une cote est indiquée 2,000 ± 0,005 po. La pièce mesure 2,008 po. Est-elle conforme ?",
          "en": "A dimension is specified as 2.000 ± 0.005 in. The part measures 2.008 in. Is it within tolerance?"
        },
        "choix": {
          "fr": [
            "Non, elle est hors tolérance : la limite maximale est 2,005 po",
            "On ne peut pas le savoir",
            "Oui, elle est dans la tolérance",
            "Oui, car l'écart est inférieur à 1/16 po"
          ],
          "en": [
            "No, it is out of tolerance: the maximum limit is 2.005 in.",
            "There is no way to know",
            "Yes, it is within tolerance",
            "Yes, because the deviation is less than 1/16 in."
          ]
        },
        "reponse": 0,
        "complexite": 2,
        "explication": {
          "fr": "La plage acceptable va de 1,995 à 2,005 po. À 2,008 po, la pièce dépasse la limite maximale.",
          "en": "The acceptable range is 1.995 to 2.005 in. At 2.008 in., the part exceeds the maximum limit."
        }
      },
      {
        "question": {
          "fr": "Un alésage est coté 1,250 +0,002 / −0,000 po. Quelles dimensions sont acceptables ?",
          "en": "A bore is dimensioned 1.250 +0.002 / −0.000 in. Which dimensions are acceptable?"
        },
        "choix": {
          "fr": [
            "Exactement 1,250 po",
            "De 1,248 à 1,250 po",
            "De 1,250 à 1,252 po",
            "De 1,248 à 1,252 po"
          ],
          "en": [
            "Exactly 1.250 in.",
            "1.248 to 1.250 in.",
            "1.250 to 1.252 in.",
            "1.248 to 1.252 in."
          ]
        },
        "reponse": 2,
        "complexite": 3,
        "explication": {
          "fr": "La tolérance est unilatérale : rien en dessous de 1,250 po (−0,000) et au plus 0,002 po au-dessus, soit de 1,250 à 1,252 po.",
          "en": "The tolerance is unilateral: nothing below 1.250 in. (−0.000) and at most 0.002 in. above, i.e. 1.250 to 1.252 in."
        }
      },
      {
        "question": {
          "fr": "Quelle tolérance s'applique à une cote du dessin qui n'a pas de tolérance indiquée ?",
          "en": "What tolerance applies to a drawing dimension with no tolerance shown?"
        },
        "choix": {
          "fr": [
            "Aucune, n'importe quelle valeur est acceptée",
            "± 1/16 po dans tous les cas",
            "Celle choisie par le machiniste",
            "La tolérance générale indiquée dans le cartouche du dessin (par exemple ± 0,010 po pour les cotes à 3 décimales)"
          ],
          "en": [
            "None, any value is acceptable",
            "± 1/16 in. in every case",
            "Whatever the machinist chooses",
            "The general tolerance shown in the drawing's title block (e.g., ± 0.010 in. for 3-decimal dimensions)"
          ]
        },
        "reponse": 3,
        "complexite": 2,
        "explication": {
          "fr": "Les cotes sans tolérance suivent la tolérance générale du cartouche, souvent selon le nombre de décimales de la cote. En cas de doute, on la demande au responsable du dessin.",
          "en": "Dimensions with no tolerance follow the drawing's general tolerance, often based on the number of decimal places. When in doubt, ask whoever is responsible for the drawing."
        }
      },
      {
        "question": {
          "fr": "Avec une clé dynamométrique à déclic, que faut-il faire lorsque le déclic se produit ?",
          "en": "With a click-type torque wrench, what should be done when the click occurs?"
        },
        "choix": {
          "fr": [
            "Relâcher puis refaire plusieurs déclics",
            "Continuer à tirer pour être sûr",
            "Arrêter de forcer : le couple réglé est atteint",
            "Donner un coup sec supplémentaire"
          ],
          "en": [
            "Release and click several more times",
            "Keep pulling to be sure",
            "Stop applying force: the set torque has been reached",
            "Give one more sharp pull"
          ]
        },
        "reponse": 2,
        "complexite": 1,
        "explication": {
          "fr": "Le déclic indique que le couple réglé est atteint. Continuer à tirer, ou multiplier les déclics, dépasse le couple voulu.",
          "en": "The click indicates the set torque has been reached. Continuing to pull, or clicking repeatedly, exceeds the intended torque."
        }
      },
      {
        "question": {
          "fr": "Comment range-t-on une clé dynamométrique à déclic après usage ?",
          "en": "How should a click-type torque wrench be stored after use?"
        },
        "choix": {
          "fr": [
            "Réglée au couple maximal",
            "Dans le coffre avec les marteaux",
            "Réglée au dernier couple utilisé",
            "Réglée à sa valeur minimale de l'échelle, pour détendre le ressort"
          ],
          "en": [
            "Set to its maximum torque",
            "In the toolbox with the hammers",
            "Set to the last torque used",
            "Set to the lowest value on its scale, to relax the spring"
          ]
        },
        "reponse": 3,
        "complexite": 2,
        "explication": {
          "fr": "Laisser le ressort comprimé fausse l'étalonnage avec le temps. On la ramène à la valeur minimale de l'échelle (sans aller en dessous) et on la fait étalonner périodiquement.",
          "en": "Leaving the spring compressed throws off the calibration over time. It should be returned to the lowest value on its scale (never below it) and calibrated periodically."
        }
      },
      {
        "question": {
          "fr": "On applique le même couple de serrage sur un boulon aux filets lubrifiés au lieu de secs. Qu'arrive-t-il ?",
          "en": "The same tightening torque is applied to a bolt with lubricated threads instead of dry ones. What happens?"
        },
        "choix": {
          "fr": [
            "Le boulon se desserre plus vite",
            "La tension (précharge) dans le boulon est plus élevée, avec un risque de surserrage",
            "Il n'y a aucune différence",
            "La tension dans le boulon est plus faible"
          ],
          "en": [
            "The bolt loosens faster",
            "Tension (preload) in the bolt is higher, with a risk of over-tightening",
            "There is no difference",
            "Tension in the bolt is lower"
          ]
        },
        "reponse": 1,
        "complexite": 3,
        "explication": {
          "fr": "Le lubrifiant réduit le frottement : une plus grande partie du couple devient de la tension dans le boulon. On doit utiliser le couple prévu pour l'état lubrifié.",
          "en": "Lubricant reduces friction: a larger share of the torque becomes tension in the bolt. The torque specified for the lubricated condition must be used."
        }
      },
      {
        "question": {
          "fr": "Lors d'un alignement au comparateur, pourquoi fait-on tourner les deux arbres ensemble ?",
          "en": "During a dial-indicator alignment, why are both shafts rotated together?"
        },
        "choix": {
          "fr": [
            "Pour mesurer seulement le désalignement entre les arbres, sans l'effet du faux-rond des surfaces",
            "Pour réchauffer les roulements",
            "Pour aller plus vite",
            "Parce que le comparateur l'exige"
          ],
          "en": [
            "To measure only the misalignment between the shafts, without the effect of surface runout",
            "To warm up the bearings",
            "To work faster",
            "Because the indicator requires it"
          ]
        },
        "reponse": 0,
        "complexite": 3,
        "explication": {
          "fr": "En tournant les deux arbres ensemble, le comparateur reste au même point des surfaces : les défauts de forme ne faussent pas la lecture.",
          "en": "By rotating both shafts together, the indicator stays at the same point on the surfaces: form errors do not skew the reading."
        }
      },
      {
        "question": {
          "fr": "Quelle pratique est correcte pour les cales placées sous les pieds d'un moteur lors d'un alignement ?",
          "en": "What is correct practice for shims placed under a motor's feet during alignment?"
        },
        "choix": {
          "fr": [
            "Mettre des cales seulement sous un pied",
            "Utiliser des cales calibrées propres, en nombre limité (idéalement 3 ou 4 au maximum par pied)",
            "Utiliser des retailles de tôle de différentes épaisseurs",
            "Empiler autant de cales minces que nécessaire"
          ],
          "en": [
            "Place shims under only one foot",
            "Use clean, calibrated shims, limited in number (ideally 3 or 4 maximum per foot)",
            "Use sheet-metal scraps of various thicknesses",
            "Stack as many thin shims as needed"
          ]
        },
        "reponse": 1,
        "complexite": 2,
        "explication": {
          "fr": "Un empilage de nombreuses cales minces se tasse comme un ressort et fausse l'alignement. On utilise peu de cales calibrées, propres et sans bavures.",
          "en": "A stack of many thin shims compresses like a spring and throws off the alignment. Use few shims: clean, calibrated, and free of burrs."
        }
      },
      {
        "question": {
          "fr": "Pourquoi aligne-t-on parfois une pompe qui transporte un liquide chaud avec un décalage volontaire à froid ?",
          "en": "Why is a pump carrying a hot liquid sometimes aligned with a deliberate cold offset?"
        },
        "choix": {
          "fr": [
            "Parce que le moteur est plus lourd",
            "Pour faciliter le démontage",
            "Pour compenser la dilatation thermique : les arbres seront alignés à la température de fonctionnement",
            "Pour réduire le bruit"
          ],
          "en": [
            "Because the motor is heavier",
            "To make disassembly easier",
            "To compensate for thermal growth: the shafts will be aligned at operating temperature",
            "To reduce noise"
          ]
        },
        "reponse": 2,
        "complexite": 3,
        "explication": {
          "fr": "La pompe et le moteur ne se dilatent pas de la même façon. Le fabricant indique le décalage à prévoir à froid pour obtenir un bon alignement à chaud.",
          "en": "The pump and motor do not expand the same way. The manufacturer specifies the cold offset needed to achieve good alignment when hot."
        }
      },
      {
        "question": {
          "fr": "Quel est le rôle principal d'une rondelle plate placée sous un écrou ?",
          "en": "What is the main role of a flat washer placed under a nut?"
        },
        "choix": {
          "fr": [
            "Remplacer le frein-filet",
            "Augmenter la longueur du boulon",
            "Isoler électriquement le boulon",
            "Répartir la charge et protéger la surface de la pièce"
          ],
          "en": [
            "Replace thread locker",
            "Increase the bolt's length",
            "Electrically insulate the bolt",
            "Spread the load and protect the part's surface"
          ]
        },
        "reponse": 3,
        "complexite": 1,
        "explication": {
          "fr": "La rondelle plate répartit l'effort de serrage sur une plus grande surface et évite que l'écrou marque ou écrase la pièce.",
          "en": "A flat washer spreads the clamping force over a larger area and keeps the nut from marking or crushing the part."
        }
      },
      {
        "question": {
          "fr": "Peut-on réutiliser un écrou autobloquant à insert de nylon après l'avoir démonté ?",
          "en": "Can a nylon-insert self-locking nut be reused after being removed?"
        },
        "choix": {
          "fr": [
            "Oui, si on le chauffe avant",
            "Ce n'est pas recommandé : l'insert perd de son efficacité, il faut le remplacer",
            "Oui, indéfiniment",
            "Oui, si on ajoute de la graisse"
          ],
          "en": [
            "Yes, if it is heated first",
            "It is not recommended: the insert loses effectiveness, so it should be replaced",
            "Yes, indefinitely",
            "Yes, if grease is added"
          ]
        },
        "reponse": 1,
        "complexite": 2,
        "explication": {
          "fr": "L'insert de nylon se déforme à chaque serrage et retient de moins en moins. Sur les équipements soumis aux vibrations, on remplace l'écrou.",
          "en": "The nylon insert deforms with each tightening and retains less each time. On equipment subject to vibration, the nut should be replaced."
        }
      },
      {
        "question": {
          "fr": "Pourquoi applique-t-on du bleu à tracer (encre de traçage) sur une pièce métallique avant de la tracer ?",
          "en": "Why is layout dye (marking blue) applied to a metal part before laying it out?"
        },
        "choix": {
          "fr": [
            "Pour faciliter la soudure",
            "Pour la protéger de la rouille",
            "Pour rendre bien visibles les traits faits à la pointe à tracer",
            "Pour mesurer son épaisseur"
          ],
          "en": [
            "To make welding easier",
            "To protect it from rust",
            "To make the scribed lines clearly visible",
            "To measure its thickness"
          ]
        },
        "reponse": 2,
        "complexite": 1,
        "explication": {
          "fr": "La pointe à tracer enlève la mince couche d'encre et laisse un trait fin et net, facile à voir sur le métal.",
          "en": "The scribe removes the thin layer of dye and leaves a fine, clear line that is easy to see on the metal."
        }
      },
      {
        "question": {
          "fr": "Quel outil utilise-t-on pour tracer une ligne parallèle à une surface de référence, à une hauteur précise, sur une pièce posée sur un marbre ?",
          "en": "What tool is used to scribe a line parallel to a reference surface, at a precise height, on a part sitting on a surface plate?"
        },
        "choix": {
          "fr": [
            "Un compas à pointes sèches",
            "Un pointeau",
            "Un trusquin (ou traceur de hauteur)",
            "Un rapporteur d'angle"
          ],
          "en": [
            "Dividers",
            "A center punch",
            "A height gauge (scribing gauge)",
            "A protractor"
          ]
        },
        "reponse": 2,
        "complexite": 2,
        "explication": {
          "fr": "Le trusquin glisse sur le marbre et sa pointe, réglée à la hauteur voulue, trace une ligne parallèle à la surface d'appui.",
          "en": "The height gauge slides on the surface plate, and its scriber, set to the desired height, marks a line parallel to the supporting surface."
        }
      }
    ]
  },
  {
    "id": "lecture-plan",
    "numero": 3,
    "titre": {
      "fr": "Lecture de plan",
      "en": "Drawing Interpretation"
    },
    "questions": [
      {
        "question": {
          "fr": "Dans le cartouche d'un dessin d'atelier, le champ « REV » indique B. Que signifie cette information ?",
          "en": "In a shop drawing's title block, the \"REV\" field shows B. What does this mean?"
        },
        "choix": {
          "fr": [
            "La révision (version) du dessin : il faut toujours travailler avec la plus récente",
            "Le nombre de feuilles du dessin",
            "La classe de pression de la tuyauterie",
            "Le nom du dessinateur"
          ],
          "en": [
            "The drawing's revision (version): work must always be done from the latest one",
            "The number of sheets in the drawing",
            "The piping's pressure class",
            "The drafter's name"
          ]
        },
        "reponse": 0,
        "complexite": 1,
        "explication": {
          "fr": "La révision identifie la version du dessin. L'historique des révisions décrit ce qui a changé (ici, B : ajout d'un support de tuyauterie pour l'échangeur). On vérifie toujours qu'on fabrique selon la dernière révision.",
          "en": "The revision identifies the drawing's version. The revision history describes what changed (here, B: added a piping support for the heat exchanger). Always confirm you are fabricating to the latest revision."
        }
      },
      {
        "question": {
          "fr": "Sur une vue d'implantation du skid, la note « MESURES EN ROUGE À RESPECTER » accompagne certaines cotes écrites en rouge. Que faut-il comprendre ?",
          "en": "On a skid layout view, the note \"MEASUREMENTS IN RED MUST BE RESPECTED\" accompanies certain dimensions written in red. What should be understood?"
        },
        "choix": {
          "fr": [
            "Les cotes en rouge sont en millimètres",
            "Les cotes en rouge ont été annulées",
            "Les cotes en rouge sont facultatives",
            "Les cotes en rouge sont critiques : elles doivent être respectées à l'assemblage, par exemple pour les raccords du client"
          ],
          "en": [
            "The red dimensions are in millimeters",
            "The red dimensions have been cancelled",
            "The red dimensions are optional",
            "The red dimensions are critical: they must be respected during assembly, for example for the customer's connections"
          ]
        },
        "reponse": 3,
        "complexite": 2,
        "explication": {
          "fr": "Ces cotes fixent la position des brides et des raccords que le client va brancher sur le chantier. Un écart peut empêcher l'installation du skid.",
          "en": "These dimensions fix the position of flanges and connections the customer will hook up on site. A deviation can prevent the skid from being installed."
        }
      },
      {
        "question": {
          "fr": "Sur une vue de dessin technique, que représente un trait interrompu (en pointillé) ?",
          "en": "On a technical drawing view, what does a dashed (hidden) line represent?"
        },
        "choix": {
          "fr": [
            "Une arête visible",
            "Une ligne de coupe",
            "Une arête ou un contour caché derrière la matière",
            "Une soudure"
          ],
          "en": [
            "A visible edge",
            "A cutting-plane line",
            "An edge or outline hidden behind material",
            "A weld"
          ]
        },
        "reponse": 2,
        "complexite": 1,
        "explication": {
          "fr": "Le trait interrompu montre une arête qu'on ne voit pas depuis ce point de vue, par exemple l'intérieur d'un trou ou l'arrière d'une pièce.",
          "en": "A hidden line shows an edge that cannot be seen from that viewpoint, for example the inside of a hole or the back of a part."
        }
      },
      {
        "question": {
          "fr": "Sur un dessin, que représente un trait mixte fin (long trait, point, long trait) qui traverse un trou ou une pièce ronde ?",
          "en": "On a drawing, what does a thin center line (long dash, dot, long dash) passing through a hole or round part represent?"
        },
        "choix": {
          "fr": [
            "Un axe ou une ligne de centre",
            "Une cote de référence",
            "Une limite de peinture",
            "Une arête cachée"
          ],
          "en": [
            "A center line or axis",
            "A reference dimension",
            "A paint boundary",
            "A hidden edge"
          ]
        },
        "reponse": 0,
        "complexite": 1,
        "explication": {
          "fr": "Le trait d'axe indique le centre d'un trou, d'un tuyau ou d'une pièce symétrique. Les cotes de position des trous se prennent souvent à partir de ces axes.",
          "en": "The center line marks the center of a hole, pipe, or symmetrical part. Hole-position dimensions are often taken from these lines."
        }
      },
      {
        "question": {
          "fr": "Les notes du plan indiquent « PAINT COLOR RAL 7016 ». Que représente RAL 7016 ?",
          "en": "The drawing notes state \"PAINT COLOR RAL 7016.\" What does RAL 7016 represent?"
        },
        "choix": {
          "fr": [
            "Un code de couleur normalisé (ici un gris anthracite)",
            "Une épaisseur de peinture",
            "Une norme de soudure",
            "Une référence de pompe"
          ],
          "en": [
            "A standardized color code (here, an anthracite gray)",
            "A paint thickness",
            "A welding standard",
            "A pump reference"
          ]
        },
        "reponse": 0,
        "complexite": 1,
        "explication": {
          "fr": "RAL est un système normalisé de codes de couleurs. Le code permet d'obtenir exactement la teinte demandée, quel que soit le fournisseur de peinture.",
          "en": "RAL is a standardized color-code system. The code ensures the exact shade requested, regardless of the paint supplier."
        }
      },
      {
        "question": {
          "fr": "La note « ESTIMATED SHIPPING WEIGHT: 7800 LBS » est inscrite sur le plan d'ensemble. À quoi sert-elle à l'atelier ?",
          "en": "The note \"ESTIMATED SHIPPING WEIGHT: 7800 LBS\" appears on the assembly drawing. What is it used for in the shop?"
        },
        "choix": {
          "fr": [
            "À calculer le prix de la peinture",
            "Elle n'a aucune utilité",
            "À choisir la couleur du skid",
            "À prévoir un levage et un transport de capacité suffisante"
          ],
          "en": [
            "To calculate the cost of paint",
            "It has no use",
            "To choose the skid's color",
            "To plan lifting and transport of sufficient capacity"
          ]
        },
        "reponse": 3,
        "complexite": 1,
        "explication": {
          "fr": "Le poids estimé permet de choisir les élingues, le pont roulant, le chariot élévateur et le transport adaptés à une charge d'environ 7 800 lb.",
          "en": "The estimated weight is used to select slings, the overhead crane, the forklift, and transport suited to a load of about 7,800 lb."
        }
      },
      {
        "question": {
          "fr": "Sur le plan d'ensemble, à quoi correspond le numéro inscrit dans une bulle (cercle) reliée à une pièce par une flèche ?",
          "en": "On the assembly drawing, what does the number inside a balloon (circle) connected to a part by a leader line correspond to?"
        },
        "choix": {
          "fr": [
            "À la quantité à commander",
            "Au numéro d'item de la nomenclature (PARTS LIST)",
            "À la cote de la pièce",
            "Au numéro de feuille"
          ],
          "en": [
            "The quantity to order",
            "The item number on the parts list (BOM)",
            "The part's dimension",
            "The sheet number"
          ]
        },
        "reponse": 1,
        "complexite": 1,
        "explication": {
          "fr": "La bulle renvoie à la ligne de la nomenclature, qui donne la description et la quantité de la pièce.",
          "en": "The balloon points to the line of the parts list, which gives the part's description and quantity."
        }
      },
      {
        "question": {
          "fr": "Dans la liste « PARTS LIST BY OTHERS », un robinet papillon 6 po est indiqué « BY OTHERS ». Qu'est-ce que cela signifie ?",
          "en": "In the \"PARTS LIST BY OTHERS,\" a 6 in. butterfly valve is marked \"BY OTHERS.\" What does this mean?"
        },
        "choix": {
          "fr": [
            "Il est en rupture de stock",
            "Il est optionnel",
            "Il est fourni par un tiers (client ou autre entrepreneur), pas par Flo-Fab",
            "Il doit être fabriqué par l'atelier"
          ],
          "en": [
            "It is out of stock",
            "It is optional",
            "It is supplied by a third party (customer or other contractor), not by Flo-Fab",
            "It must be fabricated by the shop"
          ]
        },
        "reponse": 2,
        "complexite": 1,
        "explication": {
          "fr": "« By others » veut dire que la pièce est fournie par quelqu'un d'autre. L'atelier prévoit son emplacement et ses raccords, mais ne l'achète pas.",
          "en": "\"By others\" means the part is supplied by someone else. The shop plans its location and connections but does not purchase it."
        }
      },
      {
        "question": {
          "fr": "Dans la liste de fabrication, le code 12345-02-PP-01 figure à côté de « SUCTION HEADER ». Que représente ce code ?",
          "en": "In the fabrication list, the code 12345-02-PP-01 appears next to \"SUCTION HEADER.\" What does this code represent?"
        },
        "choix": {
          "fr": [
            "Le numéro du bon de commande",
            "Le numéro de série de la pompe",
            "Le numéro du dessin de fabrication de cette pièce, à utiliser pour l'identifier",
            "Le code de couleur"
          ],
          "en": [
            "The purchase order number",
            "The pump's serial number",
            "The fabrication drawing number for this part, used to identify it",
            "The color code"
          ]
        },
        "reponse": 2,
        "complexite": 2,
        "explication": {
          "fr": "Chaque pièce fabriquée a son propre dessin détaillé. On marque la pièce avec ce code pour la retrouver à l'assemblage (ici, PP pour la tuyauterie et ST pour la structure).",
          "en": "Each fabricated part has its own detail drawing. The part is marked with this code so it can be identified during assembly (here, PP for piping and ST for structural)."
        }
      },
      {
        "question": {
          "fr": "Dans une nomenclature, la ligne « FLAT BAR 6\" X 1\" » indique : longueur unitaire 11.000 in, quantité 4, total 44.000 in. Que représente 44.000 in ?",
          "en": "On a bill of materials, the line \"FLAT BAR 6\" X 1\"\" shows: unit length 11.000 in, quantity 4, total 44.000 in. What does 44.000 in represent?"
        },
        "choix": {
          "fr": [
            "La longueur d'une seule pièce",
            "La largeur de la barre",
            "Le poids de la barre",
            "La longueur totale de barre plate nécessaire pour les 4 pièces"
          ],
          "en": [
            "The length of a single part",
            "The width of the bar",
            "The weight of the bar",
            "The total length of flat bar needed for the 4 parts"
          ]
        },
        "reponse": 3,
        "complexite": 2,
        "explication": {
          "fr": "4 pièces de 11 po = 44 po de barre plate à prévoir et à couper (sans compter la perte au sciage).",
          "en": "4 parts of 11 in. = 44 in. of flat bar to plan for and cut (not counting saw-kerf loss)."
        }
      },
      {
        "question": {
          "fr": "Sur le plan d'ensemble, une zone est annotée « MAKEUP WATER SHIP LOOSE ». Que signifie cette annotation ?",
          "en": "On the assembly drawing, an area is annotated \"MAKEUP WATER SHIP LOOSE.\" What does this annotation mean?"
        },
        "choix": {
          "fr": [
            "L'ensemble d'eau d'appoint est livré séparément, non installé sur le skid",
            "Le raccord est desserré volontairement",
            "Le raccord d'eau d'appoint est à souder sur le skid",
            "L'eau d'appoint doit être vidangée avant l'expédition"
          ],
          "en": [
            "The makeup water assembly is shipped separately, not installed on the skid",
            "The connection is intentionally left loose",
            "The makeup water connection is to be welded onto the skid",
            "The makeup water must be drained before shipping"
          ]
        },
        "reponse": 0,
        "complexite": 2,
        "explication": {
          "fr": "« Ship loose » : la pièce est expédiée à part, emballée et identifiée, puis installée sur le chantier.",
          "en": "\"Ship loose\": the part is shipped separately, packaged and tagged, then installed on site."
        }
      },
      {
        "question": {
          "fr": "Sur une vue d'implantation, certaines cotes sont entre parenthèses, par exemple (107 1/16). Que signifie une cote entre parenthèses ?",
          "en": "On a layout view, some dimensions are shown in parentheses, for example (107 1/16). What does a dimension in parentheses mean?"
        },
        "choix": {
          "fr": [
            "Une cote de référence, donnée à titre informatif et non utilisée pour contrôler la fabrication",
            "Une cote en millimètres",
            "Une cote à respecter avec la plus grande précision",
            "Une cote à modifier"
          ],
          "en": [
            "A reference dimension, given for information only and not used to control fabrication",
            "A dimension in millimeters",
            "A dimension to be held to the tightest precision",
            "A dimension to be changed"
          ]
        },
        "reponse": 0,
        "complexite": 3,
        "explication": {
          "fr": "La cote de référence découle d'autres cotes. Elle aide à la compréhension, mais les cotes de fabrication à respecter sont les autres (sur ce plan, celles en rouge).",
          "en": "A reference dimension is derived from other dimensions. It aids understanding, but the dimensions to be held for fabrication are the others (on this drawing, those shown in red)."
        }
      },
      {
        "question": {
          "fr": "Sur le plan de la base du skid, les cotes 4, 11 1/2, 19, 70 1/2… partent toutes du coin marqué 0. Quel est l'avantage de cette cotation par coordonnées ?",
          "en": "On the skid base drawing, the dimensions 4, 11 1/2, 19, 70 1/2… all originate from the corner marked 0. What is the advantage of this coordinate dimensioning?"
        },
        "choix": {
          "fr": [
            "Chaque position est mesurée depuis la même référence, ce qui évite le cumul des erreurs",
            "Elle permet d'utiliser des millimètres",
            "Elle n'a aucun avantage",
            "Elle réduit le nombre de traits"
          ],
          "en": [
            "Each position is measured from the same reference, which avoids error stack-up",
            "It allows the use of millimeters",
            "It has no advantage",
            "It reduces the number of lines"
          ]
        },
        "reponse": 0,
        "complexite": 3,
        "explication": {
          "fr": "En mesurant chaque point depuis l'origine 0, une petite erreur sur une cote ne s'additionne pas aux suivantes, comme ce serait le cas en cotant de proche en proche.",
          "en": "By measuring every point from the 0 origin, a small error on one dimension does not add to the next ones, as it would with chain (point-to-point) dimensioning."
        }
      },
      {
        "question": {
          "fr": "Que signifie l'indication « Ø1/2 THRU » sur une cornière ?",
          "en": "What does the callout \"Ø1/2 THRU\" mean on an angle bracket?"
        },
        "choix": {
          "fr": [
            "Une soudure de 1/2 po",
            "Un trou taraudé de 1/2 po",
            "Un rayon de 1/2 po",
            "Un trou de 1/2 po de diamètre qui traverse toute l'épaisseur"
          ],
          "en": [
            "A 1/2 in. weld",
            "A 1/2 in. tapped hole",
            "A 1/2 in. radius",
            "A 1/2 in. diameter hole that goes all the way through the thickness"
          ]
        },
        "reponse": 3,
        "complexite": 1,
        "explication": {
          "fr": "Ø désigne un diamètre ; THRU (through) signifie que le trou traverse complètement la pièce.",
          "en": "Ø denotes a diameter; THRU means the hole goes completely through the part."
        }
      },
      {
        "question": {
          "fr": "Sur une feuille, une vue est intitulée « DETAIL AA — SCALE 1/12 ». Qu'est-ce que cela signifie ?",
          "en": "On a sheet, a view is labeled \"DETAIL AA — SCALE 1/12.\" What does this mean?"
        },
        "choix": {
          "fr": [
            "Une liste de pièces",
            "Une vue de détail d'une zone repérée AA sur une autre vue, dessinée à une échelle différente pour être plus lisible",
            "Une tolérance de 1/12 po",
            "Une vue de la pièce AA fournie par d'autres"
          ],
          "en": [
            "A parts list",
            "A detail view of an area flagged AA on another view, drawn at a different scale for clarity",
            "A tolerance of 1/12 in.",
            "A view of part AA supplied by others"
          ]
        },
        "reponse": 1,
        "complexite": 2,
        "explication": {
          "fr": "La lettre AA repère la zone à agrandir sur la vue principale. Le détail la montre à sa propre échelle ; les cotes, elles, restent les vraies dimensions.",
          "en": "The letter AA flags the area to be enlarged on the main view. The detail shows it at its own scale; the dimensions themselves remain the true dimensions."
        }
      },
      {
        "question": {
          "fr": "Que signifie la cote « R3 15/16 » sur le détail d'un support de tuyau ?",
          "en": "What does the dimension \"R3 15/16\" mean on a pipe support detail?"
        },
        "choix": {
          "fr": [
            "Un diamètre de 3 15/16 po",
            "Un rayon de 3 15/16 po",
            "Une rugosité de surface",
            "Une révision 3"
          ],
          "en": [
            "A diameter of 3 15/16 in.",
            "A radius of 3 15/16 in.",
            "A surface roughness value",
            "Revision 3"
          ]
        },
        "reponse": 1,
        "complexite": 1,
        "explication": {
          "fr": "R indique un rayon : la courbe du support a un rayon de 3 15/16 po, soit un diamètre de 7 7/8 po. Un diamètre se note Ø.",
          "en": "R indicates a radius: the support's curve has a radius of 3 15/16 in., i.e. a diameter of 7 7/8 in. A diameter is noted with Ø."
        }
      },
      {
        "question": {
          "fr": "Sur une vue « SECTION U-U », que représentent les hachures (lignes obliques parallèles) ?",
          "en": "On a \"SECTION U-U\" view, what do the hatching lines (parallel diagonal lines) represent?"
        },
        "choix": {
          "fr": [
            "Des pièces fournies par d'autres",
            "Des zones à souder",
            "Des surfaces peintes",
            "La matière coupée par le plan de coupe U-U"
          ],
          "en": [
            "Parts supplied by others",
            "Areas to be welded",
            "Painted surfaces",
            "The material cut by the U-U cutting plane"
          ]
        },
        "reponse": 3,
        "complexite": 2,
        "explication": {
          "fr": "La vue en coupe montre l'intérieur de la pièce comme si elle était tranchée le long de la ligne U-U ; les hachures indiquent la matière coupée.",
          "en": "The section view shows the inside of the part as if it were sliced along line U-U; the hatching indicates the material that was cut."
        }
      },
      {
        "question": {
          "fr": "Sur le plan, l'entrée est indiquée « INLET Ø6\" FLG. CLASS 150 ». Que signifie cette désignation ?",
          "en": "On the drawing, the inlet is labeled \"INLET Ø6\" FLG. CLASS 150.\" What does this designation mean?"
        },
        "choix": {
          "fr": [
            "Tuyau de 6 pi soudé bout à bout",
            "Filetage NPT de 6 po",
            "Tuyau de 150 po de longueur",
            "Raccord à bride de diamètre nominal 6 po, de classe de pression 150"
          ],
          "en": [
            "A 6 ft pipe, butt-welded",
            "A 6 in. NPT thread",
            "A pipe 150 in. long",
            "A flanged connection of 6 in. nominal diameter, pressure class 150"
          ]
        },
        "reponse": 3,
        "complexite": 2,
        "explication": {
          "fr": "FLG = bride (flange). Class 150 est la classe de pression normalisée de la bride ; les brides raccordées doivent avoir la même classe et le même diamètre nominal.",
          "en": "FLG = flange. Class 150 is the flange's standardized pressure class; mating flanges must share the same class and nominal diameter."
        }
      },
      {
        "question": {
          "fr": "Les notes indiquent « PIPING MATERIAL: STEEL SA106GRB SCH-40 ». Que désigne « SCH-40 » ?",
          "en": "The notes state \"PIPING MATERIAL: STEEL SA106GRB SCH-40.\" What does \"SCH-40\" designate?"
        },
        "choix": {
          "fr": [
            "La longueur du tuyau",
            "L'épaisseur de paroi du tuyau (schedule 40)",
            "Le grade de peinture",
            "La température maximale"
          ],
          "en": [
            "The pipe's length",
            "The pipe's wall thickness (schedule 40)",
            "The paint grade",
            "The maximum temperature"
          ]
        },
        "reponse": 1,
        "complexite": 2,
        "explication": {
          "fr": "Le schedule définit l'épaisseur de paroi pour un diamètre donné. SA-106 grade B est la nuance d'acier au carbone du tuyau.",
          "en": "The schedule defines wall thickness for a given diameter. SA-106 grade B is the pipe's carbon steel grade."
        }
      },
      {
        "question": {
          "fr": "Sur le plan, un instrument est identifié « PIT-4003A ». Que désigne le code PIT ?",
          "en": "On the drawing, an instrument is tagged \"PIT-4003A.\" What does the PIT code designate?"
        },
        "choix": {
          "fr": [
            "Une pompe",
            "Un transmetteur indicateur de pression (Pressure Indicating Transmitter)",
            "Une vanne de purge",
            "Un indicateur de température"
          ],
          "en": [
            "A pump",
            "A pressure indicating transmitter",
            "A drain valve",
            "A temperature indicator"
          ]
        },
        "reponse": 1,
        "complexite": 2,
        "explication": {
          "fr": "Selon la codification ISA : P = pression, I = indication, T = transmetteur. Les chiffres identifient la boucle de l'instrument.",
          "en": "Per ISA tag lettering: P = pressure, I = indicator, T = transmitter. The numbers identify the instrument's loop."
        }
      },
      {
        "question": {
          "fr": "Sur le plan, l'instrument « FE-4001A » est installé sur la tuyauterie. Que désigne FE ?",
          "en": "On the drawing, instrument \"FE-4001A\" is installed on the piping. What does FE designate?"
        },
        "choix": {
          "fr": [
            "Une vanne papillon",
            "Un raccord flexible",
            "Un élément de mesure de débit (Flow Element), ici un débitmètre",
            "Un filtre"
          ],
          "en": [
            "A butterfly valve",
            "A flexible connector",
            "A flow-measuring element (Flow Element), here a flowmeter",
            "A filter"
          ]
        },
        "reponse": 2,
        "complexite": 2,
        "explication": {
          "fr": "F = débit (flow), E = élément de mesure. La nomenclature précise qu'il s'agit d'un débitmètre électromagnétique fourni par d'autres.",
          "en": "F = flow, E = measuring element. The parts list specifies it is a magnetic flowmeter supplied by others."
        }
      },
      {
        "question": {
          "fr": "Sur les vues du skid, des flèches rouges sont peintes ou dessinées sur la tuyauterie. Que représentent-elles ?",
          "en": "On the skid views, red arrows are painted or drawn on the piping. What do they represent?"
        },
        "choix": {
          "fr": [
            "Les pièces fournies par d'autres",
            "Les points de levage",
            "Le sens d'écoulement du liquide",
            "Les soudures à inspecter"
          ],
          "en": [
            "Parts supplied by others",
            "Lifting points",
            "The direction of liquid flow",
            "Welds to be inspected"
          ]
        },
        "reponse": 2,
        "complexite": 1,
        "explication": {
          "fr": "Les flèches indiquent le sens d'écoulement. Il faut en tenir compte pour installer les clapets, filtres, vannes et instruments dans le bon sens.",
          "en": "The arrows indicate flow direction. This must be taken into account when installing check valves, strainers, valves, and instruments the right way around."
        }
      },
      {
        "question": {
          "fr": "La nomenclature indique « MOTOR 15 HP, 254 TC, TEFC ». Que signifie TEFC ?",
          "en": "The parts list states \"MOTOR 15 HP, 254 TC, TEFC.\" What does TEFC mean?"
        },
        "choix": {
          "fr": [
            "Moteur à courant continu",
            "Moteur antidéflagrant",
            "Moteur totalement fermé, refroidi par ventilateur (Totally Enclosed Fan Cooled)",
            "Moteur ouvert ventilé"
          ],
          "en": [
            "Direct-current motor",
            "Explosion-proof motor",
            "Totally Enclosed Fan-Cooled motor",
            "Open drip-proof motor"
          ]
        },
        "reponse": 2,
        "complexite": 2,
        "explication": {
          "fr": "Un moteur TEFC est fermé (poussière et humidité restent à l'extérieur) et refroidi par un ventilateur extérieur. 254 TC désigne le châssis NEMA à bride C.",
          "en": "A TEFC motor is enclosed (dust and moisture stay outside) and cooled by an external fan. 254 TC designates the NEMA C-face frame size."
        }
      },
      {
        "question": {
          "fr": "La soupape de sûreté de la ligne du vase d'expansion est décrite « 125psi_SET 75 PSI ». Qu'est-ce que cela signifie ?",
          "en": "The relief valve on the expansion tank line is described as \"125psi_SET 75 PSI.\" What does this mean?"
        },
        "choix": {
          "fr": [
            "Elle réduit la pression de 125 à 75 psi en continu",
            "Elle est prévue pour 125 psi, mais réglée pour s'ouvrir à 75 psi",
            "Elle s'ouvre à 125 psi",
            "Elle ferme à 75 psi et ouvre à 125 psi"
          ],
          "en": [
            "It continuously reduces pressure from 125 to 75 psi",
            "It is rated for 125 psi, but set to open at 75 psi",
            "It opens at 125 psi",
            "It closes at 75 psi and opens at 125 psi"
          ]
        },
        "reponse": 1,
        "complexite": 3,
        "explication": {
          "fr": "La valeur de réglage (SET) est la pression d'ouverture : 75 psi. Une soupape de sûreté est un dispositif de protection, pas un régulateur ; sa décharge doit être dirigée vers un endroit sûr.",
          "en": "The set value (SET) is the opening pressure: 75 psi. A relief valve is a protective device, not a regulator; its discharge must be directed to a safe location."
        }
      },
      {
        "question": {
          "fr": "Le thermomètre à cadran de 5 po est installé dans un puits thermométrique (thermowell). Quel est le rôle de ce puits ?",
          "en": "The 5 in. dial thermometer is installed in a thermowell. What is the thermowell's purpose?"
        },
        "choix": {
          "fr": [
            "Protéger la tige du thermomètre et permettre de l'enlever sans vidanger ni arrêter le procédé",
            "Remplacer le transmetteur de température",
            "Refroidir le liquide",
            "Augmenter la précision de lecture"
          ],
          "en": [
            "Protect the thermometer's stem and allow it to be removed without draining or stopping the process",
            "Replace the temperature transmitter",
            "Cool the liquid",
            "Increase reading accuracy"
          ]
        },
        "reponse": 0,
        "complexite": 2,
        "explication": {
          "fr": "Le puits est vissé dans la tuyauterie et reste en place : on peut retirer ou remplacer le thermomètre sans ouvrir le circuit.",
          "en": "The thermowell is threaded into the piping and stays in place: the thermometer can be removed or replaced without opening the line."
        }
      }
    ]
  },
  {
    "id": "pompes",
    "numero": 4,
    "titre": {
      "fr": "Pompes",
      "en": "Pumps"
    },
    "questions": [
      {
        "question": {
          "fr": "Quelle condition provoque la cavitation dans une pompe centrifuge ?",
          "en": "What condition causes cavitation in a centrifugal pump?"
        },
        "choix": {
          "fr": [
            "La pompe fonctionne à son point de rendement optimal",
            "Le NPSH disponible est supérieur au NPSH requis",
            "Le NPSH disponible (en pi) est inférieur au NPSH requis",
            "La vanne de refoulement est entièrement ouverte"
          ],
          "en": [
            "The pump is running at its best efficiency point",
            "Available NPSH is higher than required NPSH",
            "Available NPSH (in ft) is lower than required NPSH",
            "The discharge valve is fully open"
          ]
        },
        "reponse": 2,
        "complexite": 2,
        "explication": {
          "fr": "Quand le NPSH disponible est inférieur au NPSH requis, la pression à l'entrée de la roue descend sous la pression de vapeur du liquide. Des bulles se forment puis implosent : bruit, vibrations et érosion de la roue.",
          "en": "When available NPSH is lower than required NPSH, the pressure at the impeller inlet drops below the liquid's vapor pressure. Bubbles form and then implode, causing noise, vibration, and impeller erosion."
        }
      },
      {
        "question": {
          "fr": "Quelle mesure augmente le NPSH disponible (en pi) d'une installation ?",
          "en": "What measure increases a system's available NPSH (in ft)?"
        },
        "choix": {
          "fr": [
            "Fermer partiellement la vanne d'aspiration",
            "Élever le niveau du réservoir d'aspiration par rapport à la pompe",
            "Augmenter la température du liquide",
            "Ajouter des coudes sur la tuyauterie d'aspiration"
          ],
          "en": [
            "Partially closing the suction valve",
            "Raising the suction tank's level relative to the pump",
            "Increasing the liquid temperature",
            "Adding elbows to the suction piping"
          ]
        },
        "reponse": 1,
        "complexite": 3,
        "explication": {
          "fr": "Chaque pied de liquide ajouté au-dessus de l'aspiration augmente le NPSH disponible. Un liquide plus chaud ou plus de pertes à l'aspiration le réduisent.",
          "en": "Every foot of liquid added above the suction increases available NPSH. A hotter liquid or more suction losses reduce it."
        }
      },
      {
        "question": {
          "fr": "Comment détermine-t-on le point de fonctionnement d'une pompe ?",
          "en": "How is a pump's operating point determined?"
        },
        "choix": {
          "fr": [
            "Par la vitesse maximale du moteur",
            "Par le diamètre de l'aspiration seulement",
            "Par les HP inscrits sur la plaque du moteur",
            "Par l'intersection de la courbe TDH-gpm de la pompe et de la courbe de résistance du réseau"
          ],
          "en": [
            "By the motor's maximum speed",
            "By the suction diameter alone",
            "By the HP shown on the motor nameplate",
            "By the intersection of the pump's head-flow (TDH-gpm) curve and the system resistance curve"
          ]
        },
        "reponse": 3,
        "complexite": 2,
        "explication": {
          "fr": "La pompe fonctionne au débit (gpm) où la TDH qu'elle fournit égale la TDH demandée par le réseau.",
          "en": "The pump operates at the flow (gpm) where the TDH it produces equals the TDH demanded by the system."
        }
      },
      {
        "question": {
          "fr": "Pourquoi cherche-t-on à faire fonctionner une pompe centrifuge près de son point de rendement optimal (BEP) ?",
          "en": "Why aim to run a centrifugal pump near its best efficiency point (BEP)?"
        },
        "choix": {
          "fr": [
            "Pour augmenter la vitesse du moteur",
            "Parce que le code électrique l'exige",
            "Pour pouvoir retirer le manomètre",
            "Pour minimiser les vibrations, l'usure et la consommation d'énergie"
          ],
          "en": [
            "To increase motor speed",
            "Because the electrical code requires it",
            "So the pressure gauge can be removed",
            "To minimize vibration, wear, and energy consumption"
          ]
        },
        "reponse": 3,
        "complexite": 2,
        "explication": {
          "fr": "Loin du BEP, à trop faible ou trop fort débit (gpm), les forces radiales, la recirculation et les vibrations augmentent, et le rendement baisse.",
          "en": "Far from the BEP, at too low or too high a flow (gpm), radial forces, recirculation, and vibration increase, and efficiency drops."
        }
      },
      {
        "question": {
          "fr": "Dans quelle unité exprime-t-on habituellement la hauteur dynamique totale (TDH) d'une pompe ?",
          "en": "In what unit is a pump's total dynamic head (TDH) usually expressed?"
        },
        "choix": {
          "fr": [
            "En pieds (pi) de colonne de liquide",
            "En gpm",
            "En psi seulement",
            "En HP"
          ],
          "en": [
            "Feet (ft) of liquid column",
            "gpm",
            "psi only",
            "HP"
          ]
        },
        "reponse": 0,
        "complexite": 1,
        "explication": {
          "fr": "La TDH s'exprime en pieds de liquide, ce qui la rend indépendante de la densité. La pression correspondante en psi dépend du liquide pompé.",
          "en": "TDH is expressed in feet of liquid, which makes it independent of density. The corresponding pressure in psi depends on the liquid being pumped."
        }
      },
      {
        "question": {
          "fr": "Une pompe à eau froide développe une pression différentielle de 100 psi. Quelle est sa TDH approximative ?",
          "en": "A cold-water pump develops a differential pressure of 100 psi. What is its approximate TDH?"
        },
        "choix": {
          "fr": [
            "231 pi",
            "100 pi",
            "2 310 pi",
            "43 pi"
          ],
          "en": [
            "231 ft",
            "100 ft",
            "2,310 ft",
            "43 ft"
          ]
        },
        "reponse": 0,
        "complexite": 2,
        "explication": {
          "fr": "Pour l'eau, 1 psi correspond à environ 2,31 pi de TDH : 100 psi × 2,31 = 231 pi.",
          "en": "For water, 1 psi corresponds to about 2.31 ft of TDH: 100 psi × 2.31 = 231 ft."
        }
      },
      {
        "question": {
          "fr": "Une pompe fournit 200 gpm à 50 pi de TDH à 1750 tr/min. Si on double sa vitesse à 3500 tr/min, sa TDH devient environ :",
          "en": "A pump delivers 200 gpm at 50 ft of TDH at 1750 rpm. If its speed is doubled to 3500 rpm, its TDH becomes approximately:"
        },
        "choix": {
          "fr": [
            "200 pi",
            "400 pi",
            "50 pi",
            "100 pi"
          ],
          "en": [
            "200 ft",
            "400 ft",
            "50 ft",
            "100 ft"
          ]
        },
        "reponse": 0,
        "complexite": 3,
        "explication": {
          "fr": "Selon les lois de similitude, la TDH varie avec le carré de la vitesse : 50 pi × 2² = 200 pi. Le débit double (environ 400 gpm) et la puissance est multipliée par 8.",
          "en": "According to the affinity laws, TDH varies with the square of speed: 50 ft × 2² = 200 ft. Flow doubles (about 400 gpm) and power is multiplied by 8."
        }
      },
      {
        "question": {
          "fr": "Quel est l'effet du rognage (réduction du diamètre) de la roue d'une pompe centrifuge ?",
          "en": "What is the effect of impeller trimming (reducing the diameter) on a centrifugal pump?"
        },
        "choix": {
          "fr": [
            "Il réduit uniquement le bruit",
            "Il réduit le débit (gpm) et la TDH de la pompe",
            "Il n'a aucun effet sur la performance",
            "Il augmente le débit (gpm) et la TDH"
          ],
          "en": [
            "It only reduces noise",
            "It reduces the pump's flow (gpm) and TDH",
            "It has no effect on performance",
            "It increases flow (gpm) and TDH"
          ]
        },
        "reponse": 1,
        "complexite": 2,
        "explication": {
          "fr": "Le rognage abaisse la courbe TDH-gpm de la pompe ; on adapte ainsi une pompe à un point de fonctionnement précis.",
          "en": "Trimming lowers the pump's TDH-gpm curve; this adapts a pump to a precise operating point."
        }
      },
      {
        "question": {
          "fr": "Deux pompes identiques de 100 gpm à 60 pi de TDH sont installées en parallèle. Que permettent-elles principalement ?",
          "en": "Two identical pumps rated 100 gpm at 60 ft of TDH are installed in parallel. What do they mainly allow?"
        },
        "choix": {
          "fr": [
            "De réduire la pression en psi",
            "D'augmenter le débit (jusqu'à près de 200 gpm) à une TDH comparable",
            "De réduire le NPSH requis",
            "De doubler la TDH à 120 pi"
          ],
          "en": [
            "Reducing the pressure in psi",
            "Increasing flow (up to nearly 200 gpm) at a comparable TDH",
            "Reducing the required NPSH",
            "Doubling the TDH to 120 ft"
          ]
        },
        "reponse": 1,
        "complexite": 2,
        "explication": {
          "fr": "En parallèle, les débits s'additionnent à TDH égale. Le gain réel est un peu inférieur à 200 gpm, car la résistance du réseau augmente avec le débit.",
          "en": "In parallel, flows add up at equal TDH. The actual gain is somewhat less than 200 gpm, since system resistance increases with flow."
        }
      },
      {
        "question": {
          "fr": "Deux pompes identiques de 100 gpm à 60 pi de TDH sont installées en série. Que se passe-t-il ?",
          "en": "Two identical pumps rated 100 gpm at 60 ft of TDH are installed in series. What happens?"
        },
        "choix": {
          "fr": [
            "La pression en psi diminue",
            "Le NPSH requis diminue de moitié",
            "Le débit double à 200 gpm",
            "La TDH s'additionne : jusqu'à environ 120 pi à 100 gpm"
          ],
          "en": [
            "Pressure in psi decreases",
            "Required NPSH is cut in half",
            "Flow doubles to 200 gpm",
            "TDH adds up: up to about 120 ft at 100 gpm"
          ]
        },
        "reponse": 3,
        "complexite": 2,
        "explication": {
          "fr": "En série, le même débit traverse les deux pompes et leurs TDH s'additionnent.",
          "en": "In series, the same flow passes through both pumps and their TDH values add up."
        }
      },
      {
        "question": {
          "fr": "Une pompe multicellulaire (multiétagée) est surtout utilisée pour obtenir :",
          "en": "A multistage pump is mainly used to obtain:"
        },
        "choix": {
          "fr": [
            "Un très grand débit (gpm) à faible TDH",
            "Le fonctionnement à sec",
            "Une TDH élevée grâce à plusieurs roues en série",
            "Le pompage de liquides très visqueux"
          ],
          "en": [
            "Very high flow (gpm) at low TDH",
            "Dry running",
            "High TDH thanks to several impellers in series",
            "Pumping of very viscous liquids"
          ]
        },
        "reponse": 2,
        "complexite": 1,
        "explication": {
          "fr": "Chaque étage ajoute de la TDH ; on obtient ainsi des pressions élevées (en psi) avec une seule pompe.",
          "en": "Each stage adds TDH; this yields high pressures (in psi) from a single pump."
        }
      },
      {
        "question": {
          "fr": "Comment évolue le NPSH requis (en pi) d'une pompe centrifuge lorsque son débit (gpm) augmente ?",
          "en": "How does a centrifugal pump's required NPSH (in ft) change as its flow (gpm) increases?"
        },
        "choix": {
          "fr": [
            "Il reste constant",
            "Il devient nul",
            "Il diminue",
            "Il augmente"
          ],
          "en": [
            "It stays constant",
            "It becomes zero",
            "It decreases",
            "It increases"
          ]
        },
        "reponse": 3,
        "complexite": 3,
        "explication": {
          "fr": "Le NPSH requis augmente avec le débit : une pompe qui fonctionne bien au débit nominal peut caviter si elle débite beaucoup plus de gpm que prévu.",
          "en": "Required NPSH increases with flow: a pump that performs well at rated flow can cavitate if it delivers far more gpm than intended."
        }
      },
      {
        "question": {
          "fr": "Avant de démarrer une pompe centrifuge standard (non auto-amorçante), que faut-il faire ?",
          "en": "Before starting a standard (non-self-priming) centrifugal pump, what must be done?"
        },
        "choix": {
          "fr": [
            "S'assurer que le corps de pompe et l'aspiration sont remplis de liquide (amorçage)",
            "Retirer la garniture mécanique",
            "Fermer complètement la vanne d'aspiration",
            "Démarrer à sec pour vérifier le sens de rotation"
          ],
          "en": [
            "Make sure the pump casing and suction are filled with liquid (priming)",
            "Remove the mechanical seal",
            "Fully close the suction valve",
            "Start it dry to check the direction of rotation"
          ]
        },
        "reponse": 0,
        "complexite": 1,
        "explication": {
          "fr": "Sans amorçage, la pompe ne développe ni TDH ni débit, et la garniture mécanique est endommagée par le fonctionnement à sec.",
          "en": "Without priming, the pump develops neither TDH nor flow, and the mechanical seal is damaged by dry running."
        }
      },
      {
        "question": {
          "fr": "Une pompe triphasée tourne dans le mauvais sens. Comment corriger la situation (hors VFD) ?",
          "en": "A three-phase pump is running in the wrong direction. How is this corrected (without a VFD)?"
        },
        "choix": {
          "fr": [
            "Inverser le neutre et la terre",
            "Réduire la tension d'alimentation",
            "Inverser deux des trois phases d'alimentation du moteur",
            "Remplacer la roue"
          ],
          "en": [
            "Swap the neutral and ground",
            "Reduce the supply voltage",
            "Swap two of the three motor supply phases",
            "Replace the impeller"
          ]
        },
        "reponse": 2,
        "complexite": 1,
        "explication": {
          "fr": "En sens inverse, la pompe fournit beaucoup moins de gpm et de TDH sans casser tout de suite. On vérifie le sens par un bref démarrage, pompe amorcée.",
          "en": "Running backward, the pump delivers far less gpm and TDH without failing right away. Check the direction with a brief start, pump primed."
        }
      },
      {
        "question": {
          "fr": "Si l'on doit régler le débit (gpm) d'une pompe centrifuge avec une vanne, où doit-on la placer ?",
          "en": "If a valve is used to adjust a centrifugal pump's flow (gpm), where should it be placed?"
        },
        "choix": {
          "fr": [
            "Sur le refoulement, car étrangler l'aspiration favorise la cavitation",
            "Sur l'aspiration, pour protéger la pompe",
            "Aucune vanne ne doit être installée",
            "Indifféremment sur l'aspiration ou le refoulement"
          ],
          "en": [
            "On the discharge, since throttling the suction promotes cavitation",
            "On the suction, to protect the pump",
            "No valve should be installed",
            "Either on suction or discharge, it does not matter"
          ]
        },
        "reponse": 0,
        "complexite": 2,
        "explication": {
          "fr": "Étrangler l'aspiration réduit le NPSH disponible et provoque la cavitation. La vanne d'aspiration reste entièrement ouverte en service.",
          "en": "Throttling the suction reduces available NPSH and causes cavitation. The suction valve stays fully open during operation."
        }
      },
      {
        "question": {
          "fr": "Quel est le risque de faire fonctionner longtemps une pompe centrifuge à 0 gpm (vanne de refoulement fermée) ?",
          "en": "What is the risk of running a centrifugal pump for a long time at 0 gpm (discharge valve closed)?"
        },
        "choix": {
          "fr": [
            "Aucun, la pompe est simplement au repos",
            "La TDH devient nulle",
            "Le liquide s'échauffe, ce qui peut endommager la pompe et la garniture",
            "La pompe consomme plus d'énergie qu'à plein débit"
          ],
          "en": [
            "None, the pump is simply idling",
            "TDH becomes zero",
            "The liquid heats up, which can damage the pump and the seal",
            "The pump consumes more energy than at full flow"
          ]
        },
        "reponse": 2,
        "complexite": 2,
        "explication": {
          "fr": "À débit nul, la pompe atteint sa TDH maximale (shutoff) et toute l'énergie absorbée se transforme en chaleur dans le liquide.",
          "en": "At zero flow, the pump reaches its maximum (shutoff) TDH, and all the absorbed energy turns into heat in the liquid."
        }
      },
      {
        "question": {
          "fr": "Dans une pompe centrifuge, quel est le rôle de la volute (corps en colimaçon) ?",
          "en": "In a centrifugal pump, what is the role of the volute (scroll-shaped casing)?"
        },
        "choix": {
          "fr": [
            "Transformer la vitesse du liquide sortant de la roue en pression (psi)",
            "Aspirer l'air de la conduite",
            "Assurer l'étanchéité de l'arbre",
            "Refroidir le moteur"
          ],
          "en": [
            "Convert the liquid's velocity leaving the impeller into pressure (psi)",
            "Draw air out of the piping",
            "Seal the shaft",
            "Cool the motor"
          ]
        },
        "reponse": 0,
        "complexite": 1,
        "explication": {
          "fr": "La roue donne de la vitesse au liquide ; la volute, dont la section s'élargit progressivement, la convertit en pression.",
          "en": "The impeller gives the liquid velocity; the volute, whose cross-section widens progressively, converts it into pressure."
        }
      },
      {
        "question": {
          "fr": "Quel est l'effet de l'usure des bagues d'usure (jeu entre la roue et le corps) d'une pompe centrifuge ?",
          "en": "What is the effect of wear-ring wear (clearance between impeller and casing) on a centrifugal pump?"
        },
        "choix": {
          "fr": [
            "Aucun effet sur la performance",
            "Une recirculation interne qui réduit le débit (gpm), la TDH et le rendement",
            "Une réduction du bruit",
            "Une augmentation du débit (gpm)"
          ],
          "en": [
            "No effect on performance",
            "Internal recirculation that reduces flow (gpm), TDH, and efficiency",
            "A reduction in noise",
            "An increase in flow (gpm)"
          ]
        },
        "reponse": 1,
        "complexite": 3,
        "explication": {
          "fr": "Quand le jeu augmente, une partie du liquide retourne du refoulement vers l'aspiration à l'intérieur de la pompe : la courbe TDH-gpm baisse et la consommation d'énergie augmente.",
          "en": "As the clearance increases, some liquid recirculates from discharge back to suction inside the pump: the TDH-gpm curve drops and energy consumption per unit pumped increases."
        }
      },
      {
        "question": {
          "fr": "Quel type de roue convient le mieux au pompage d'un liquide contenant des solides en suspension ?",
          "en": "What type of impeller is best suited to pumping a liquid containing suspended solids?"
        },
        "choix": {
          "fr": [
            "Une roue de pompe multicellulaire",
            "Une roue fermée à faible jeu",
            "Le type de roue n'a aucune importance",
            "Une roue ouverte, semi-ouverte ou à vortex"
          ],
          "en": [
            "A multistage pump impeller",
            "A closed impeller with tight clearance",
            "The impeller type does not matter",
            "An open, semi-open, or vortex impeller"
          ]
        },
        "reponse": 3,
        "complexite": 2,
        "explication": {
          "fr": "Les roues ouvertes, semi-ouvertes ou à vortex laissent passer les solides. La roue fermée offre un meilleur rendement, mais convient surtout aux liquides propres.",
          "en": "Open, semi-open, or vortex impellers let solids pass through. Closed impellers offer better efficiency but suit clean liquids best."
        }
      },
      {
        "question": {
          "fr": "Quel est le rôle d'une garniture mécanique sur une pompe ?",
          "en": "What is the role of a mechanical seal on a pump?"
        },
        "choix": {
          "fr": [
            "Assurer l'étanchéité autour de l'arbre en rotation",
            "Augmenter la TDH",
            "Filtrer le liquide pompé",
            "Transmettre le couple du moteur à la roue"
          ],
          "en": [
            "Seal around the rotating shaft",
            "Increase TDH",
            "Filter the pumped liquid",
            "Transmit motor torque to the impeller"
          ]
        },
        "reponse": 0,
        "complexite": 1,
        "explication": {
          "fr": "La garniture mécanique assure l'étanchéité entre l'arbre en rotation et le corps de pompe, grâce à deux faces planes lubrifiées par un mince film de liquide.",
          "en": "A mechanical seal seals between the rotating shaft and the pump casing, using two flat faces lubricated by a thin liquid film."
        }
      },
      {
        "question": {
          "fr": "Un manomètre indique une pression différentielle de 50 psi sur une pompe à eau. Quelle est sa TDH approximative ?",
          "en": "A pressure gauge shows a differential pressure of 50 psi on a water pump. What is its approximate TDH?"
        },
        "choix": {
          "fr": [
            "50 pi",
            "231 pi",
            "115 pi",
            "22 pi"
          ],
          "en": [
            "50 ft",
            "231 ft",
            "115 ft",
            "22 ft"
          ]
        },
        "reponse": 2,
        "complexite": 2,
        "explication": {
          "fr": "Pour l'eau, 1 psi ≈ 2,31 pi : 50 psi × 2,31 ≈ 115 pi de TDH.",
          "en": "For water, 1 psi ≈ 2.31 ft: 50 psi × 2.31 ≈ 115 ft of TDH."
        }
      },
      {
        "question": {
          "fr": "Quelle caractéristique distingue une pompe volumétrique d'une pompe centrifuge ?",
          "en": "What characteristic distinguishes a positive-displacement pump from a centrifugal pump?"
        },
        "choix": {
          "fr": [
            "Son débit (gpm) varie fortement avec la pression",
            "Elle peut fonctionner vanne fermée sans risque",
            "Elle ne peut pas pomper de liquides visqueux",
            "Son débit (gpm) reste presque constant quelle que soit la pression (psi), d'où le besoin d'une soupape de sûreté"
          ],
          "en": [
            "Its flow (gpm) varies greatly with pressure",
            "It can safely run against a closed valve",
            "It cannot pump viscous liquids",
            "Its flow (gpm) stays nearly constant regardless of pressure (psi), hence the need for a relief valve"
          ]
        },
        "reponse": 3,
        "complexite": 3,
        "explication": {
          "fr": "Une pompe volumétrique déplace un volume fixe par tour. Si le refoulement est bloqué, la pression monte jusqu'à la rupture : la soupape de sûreté est obligatoire.",
          "en": "A positive-displacement pump moves a fixed volume per revolution. If the discharge is blocked, pressure rises until failure: a relief valve is mandatory."
        }
      },
      {
        "question": {
          "fr": "Comment réagit une pompe centrifuge au pompage d'un liquide beaucoup plus visqueux que l'eau ?",
          "en": "How does a centrifugal pump respond to pumping a liquid much more viscous than water?"
        },
        "choix": {
          "fr": [
            "Sa performance s'améliore",
            "Son débit (gpm), sa TDH et son rendement diminuent",
            "Aucun effet",
            "Son NPSH requis devient nul"
          ],
          "en": [
            "Its performance improves",
            "Its flow (gpm), TDH, and efficiency decrease",
            "No effect",
            "Its required NPSH becomes zero"
          ]
        },
        "reponse": 1,
        "complexite": 3,
        "explication": {
          "fr": "La viscosité abaisse la courbe TDH-gpm et le rendement, et augmente les HP absorbés ; une pompe volumétrique est souvent mieux adaptée.",
          "en": "Viscosity lowers the TDH-gpm curve and efficiency, and increases the HP drawn; a positive-displacement pump is often better suited."
        }
      },
      {
        "question": {
          "fr": "Sur une pompe équipée d'une garniture à tresse (presse-étoupe), quelle condition est normale en fonctionnement ?",
          "en": "On a pump fitted with a packing (stuffing box) seal, what condition is normal during operation?"
        },
        "choix": {
          "fr": [
            "De la fumée à la sortie du presse-étoupe",
            "Aucune fuite, le presse-étoupe serré au maximum",
            "Une légère fuite goutte à goutte, qui lubrifie et refroidit la tresse",
            "Un jet continu de liquide"
          ],
          "en": [
            "Smoke coming from the stuffing box",
            "No leakage, the packing tightened to the maximum",
            "A slight drip leak, which lubricates and cools the packing",
            "A continuous stream of liquid"
          ]
        },
        "reponse": 2,
        "complexite": 2,
        "explication": {
          "fr": "La tresse doit laisser passer un léger filet de liquide pour se lubrifier et se refroidir. Trop serrée, elle chauffe et use l'arbre ou la chemise d'arbre.",
          "en": "The packing must allow a slight trickle of liquid through to lubricate and cool itself. If over-tightened, it heats up and wears the shaft or shaft sleeve."
        }
      },
      {
        "question": {
          "fr": "Qu'est-ce qui distingue une pompe auto-amorçante d'une pompe centrifuge standard ?",
          "en": "What distinguishes a self-priming pump from a standard centrifugal pump?"
        },
        "choix": {
          "fr": [
            "Elle peut fonctionner à sec en permanence",
            "Une fois son corps rempli de liquide, elle peut évacuer l'air de la conduite d'aspiration et s'amorcer seule",
            "Elle n'a pas besoin de moteur",
            "Elle ne peut pomper que de l'air"
          ],
          "en": [
            "It can run dry permanently",
            "Once its casing is filled with liquid, it can purge air from the suction line and prime itself",
            "It needs no motor",
            "It can only pump air"
          ]
        },
        "reponse": 1,
        "complexite": 2,
        "explication": {
          "fr": "Le corps de la pompe auto-amorçante retient une réserve de liquide qui lui permet d'aspirer l'air de la conduite. Il doit quand même être rempli avant le premier démarrage.",
          "en": "A self-priming pump's casing retains a reserve of liquid that lets it draw air out of the suction line. It must still be filled before the first start."
        }
      }
    ]
  },
  {
    "id": "electricite",
    "numero": 5,
    "titre": {
      "fr": "Électricité et sécurité électrique",
      "en": "Electrical Fundamentals and Safety"
    },
    "questions": [
      {
        "question": {
          "fr": "Une tension de 24 V c.c. est appliquée à une résistance de 12 Ω. Quel est le courant ?",
          "en": "A 24 VDC voltage is applied to a 12 Ω resistor. What is the current?"
        },
        "choix": {
          "fr": [
            "288 A",
            "2 A",
            "12 A",
            "0,5 A"
          ],
          "en": [
            "288 A",
            "2 A",
            "12 A",
            "0.5 A"
          ]
        },
        "reponse": 1,
        "complexite": 1,
        "explication": {
          "fr": "Loi d'Ohm : I = U / R = 24 / 12 = 2 A.",
          "en": "Ohm's law: I = U / R = 24 / 12 = 2 A."
        }
      },
      {
        "question": {
          "fr": "Quelle est la puissance consommée par une charge de 5 A sous 24 V c.c. ?",
          "en": "What power is consumed by a 5 A load at 24 VDC?"
        },
        "choix": {
          "fr": [
            "4,8 W",
            "240 W",
            "29 W",
            "120 W"
          ],
          "en": [
            "4.8 W",
            "240 W",
            "29 W",
            "120 W"
          ]
        },
        "reponse": 3,
        "complexite": 1,
        "explication": {
          "fr": "P = U × I = 24 × 5 = 120 W.",
          "en": "P = U × I = 24 × 5 = 120 W."
        }
      },
      {
        "question": {
          "fr": "Trois résistances de 10 Ω, 20 Ω et 30 Ω sont branchées en série. Quelle est la résistance équivalente ?",
          "en": "Three resistors of 10 Ω, 20 Ω and 30 Ω are connected in series. What is the equivalent resistance?"
        },
        "choix": {
          "fr": [
            "60 Ω",
            "5,5 Ω",
            "30 Ω",
            "20 Ω"
          ],
          "en": [
            "60 Ω",
            "5.5 Ω",
            "30 Ω",
            "20 Ω"
          ]
        },
        "reponse": 0,
        "complexite": 1,
        "explication": {
          "fr": "En série, les résistances s'additionnent : 10 + 20 + 30 = 60 Ω.",
          "en": "In series, resistances add up: 10 + 20 + 30 = 60 Ω."
        }
      },
      {
        "question": {
          "fr": "Deux résistances de 100 Ω sont branchées en parallèle. Quelle est la résistance équivalente ?",
          "en": "Two 100 Ω resistors are connected in parallel. What is the equivalent resistance?"
        },
        "choix": {
          "fr": [
            "100 Ω",
            "200 Ω",
            "50 Ω",
            "10 000 Ω"
          ],
          "en": [
            "100 Ω",
            "200 Ω",
            "50 Ω",
            "10,000 Ω"
          ]
        },
        "reponse": 2,
        "complexite": 1,
        "explication": {
          "fr": "Deux résistances identiques en parallèle donnent la moitié de leur valeur : 50 Ω.",
          "en": "Two identical resistors in parallel give half their value: 50 Ω."
        }
      },
      {
        "question": {
          "fr": "Quelle formule donne la puissance active d'une charge triphasée équilibrée ?",
          "en": "Which formula gives the active power of a balanced three-phase load?"
        },
        "choix": {
          "fr": [
            "P = U² × I",
            "P = √3 × U × I × cos φ",
            "P = 3 × U × I × sin φ",
            "P = U × I"
          ],
          "en": [
            "P = U² × I",
            "P = √3 × U × I × cos φ",
            "P = 3 × U × I × sin φ",
            "P = U × I"
          ]
        },
        "reponse": 1,
        "complexite": 2,
        "explication": {
          "fr": "Avec U la tension entre phases et I le courant de ligne, P = √3 × U × I × cos φ.",
          "en": "With U the phase-to-phase voltage and I the line current, P = √3 × U × I × cos φ."
        }
      },
      {
        "question": {
          "fr": "Le courant absorbé par une charge triphasée double, à tension et facteur de puissance constants. Que devient sa puissance active ?",
          "en": "The current drawn by a three-phase load doubles, at constant voltage and power factor. What happens to its active power?"
        },
        "choix": {
          "fr": [
            "Elle est multipliée par 4",
            "Elle diminue de moitié",
            "Elle double",
            "Elle reste la même"
          ],
          "en": [
            "It is multiplied by 4",
            "It is cut in half",
            "It doubles",
            "It stays the same"
          ]
        },
        "reponse": 2,
        "complexite": 2,
        "explication": {
          "fr": "P = √3 × U × I × cos φ : la puissance est proportionnelle au courant. Si le courant double, la puissance double.",
          "en": "P = √3 × U × I × cos φ: power is proportional to current. If the current doubles, the power doubles."
        }
      },
      {
        "question": {
          "fr": "Au Canada, quelle est la tension triphasée typique d'une alimentation industrielle ?",
          "en": "In Canada, what is the typical three-phase voltage for an industrial supply?"
        },
        "choix": {
          "fr": [
            "240 V",
            "600 V (moteurs de 575 V)",
            "1000 V",
            "120 V"
          ],
          "en": [
            "240 V",
            "600 V (575 V motors)",
            "1000 V",
            "120 V"
          ]
        },
        "reponse": 1,
        "complexite": 1,
        "explication": {
          "fr": "Le 600 V triphasé est la norme industrielle canadienne. Le 480 V est plus courant aux États-Unis.",
          "en": "600 V three-phase is the Canadian industrial standard. 480 V is more common in the United States."
        }
      },
      {
        "question": {
          "fr": "Sur un réseau 600 V triphasé en étoile, quelle est la tension approximative entre une phase et le neutre ?",
          "en": "On a 600 V three-phase wye network, what is the approximate voltage between one phase and neutral?"
        },
        "choix": {
          "fr": [
            "347 V",
            "200 V",
            "300 V",
            "600 V"
          ],
          "en": [
            "347 V",
            "200 V",
            "300 V",
            "600 V"
          ]
        },
        "reponse": 0,
        "complexite": 3,
        "explication": {
          "fr": "V phase = 600 / √3 ≈ 347 V (réseau 347/600 V).",
          "en": "V phase = 600 / √3 ≈ 347 V (347/600 V system)."
        }
      },
      {
        "question": {
          "fr": "En couplage triangle, la tension aux bornes de chaque enroulement du moteur est :",
          "en": "In a delta connection, the voltage across each motor winding is:"
        },
        "choix": {
          "fr": [
            "Égale à la tension de ligne",
            "Égale au double de la tension de ligne",
            "Égale à la tension de ligne divisée par √3",
            "Nulle"
          ],
          "en": [
            "Equal to the line voltage",
            "Equal to twice the line voltage",
            "Equal to the line voltage divided by √3",
            "Zero"
          ]
        },
        "reponse": 0,
        "complexite": 2,
        "explication": {
          "fr": "Chaque enroulement est branché entre deux phases et reçoit la pleine tension de ligne.",
          "en": "Each winding is connected between two phases and receives the full line voltage."
        }
      },
      {
        "question": {
          "fr": "Le facteur de puissance (cos φ) est le rapport entre :",
          "en": "The power factor (cos φ) is the ratio between:"
        },
        "choix": {
          "fr": [
            "La tension et le courant",
            "La puissance apparente et la puissance réactive",
            "La puissance réactive et la puissance active",
            "La puissance active et la puissance apparente"
          ],
          "en": [
            "Voltage and current",
            "Apparent power and reactive power",
            "Reactive power and active power",
            "Active power and apparent power"
          ]
        },
        "reponse": 3,
        "complexite": 2,
        "explication": {
          "fr": "cos φ = P (W) / S (VA).",
          "en": "cos φ = P (W) / S (VA)."
        }
      },
      {
        "question": {
          "fr": "Dans quelle unité s'exprime la puissance apparente ?",
          "en": "In what unit is apparent power expressed?"
        },
        "choix": {
          "fr": [
            "Watt (W)",
            "Voltampère (VA)",
            "Voltampère réactif (var)",
            "Joule (J)"
          ],
          "en": [
            "Watt (W)",
            "Voltampere (VA)",
            "Reactive voltampere (var)",
            "Joule (J)"
          ]
        },
        "reponse": 1,
        "complexite": 1,
        "explication": {
          "fr": "La puissance apparente s'exprime en VA ou kVA.",
          "en": "Apparent power is expressed in VA or kVA."
        }
      },
      {
        "question": {
          "fr": "Quel équipement utilise-t-on pour corriger un faible facteur de puissance dû aux moteurs ?",
          "en": "What equipment is used to correct a low power factor caused by motors?"
        },
        "choix": {
          "fr": [
            "Des fusibles",
            "Des condensateurs",
            "Des inductances supplémentaires",
            "Des résistances"
          ],
          "en": [
            "Fuses",
            "Capacitors",
            "Additional inductors",
            "Resistors"
          ]
        },
        "reponse": 1,
        "complexite": 2,
        "explication": {
          "fr": "Les condensateurs fournissent la puissance réactive consommée par les moteurs.",
          "en": "Capacitors supply the reactive power consumed by motors."
        }
      },
      {
        "question": {
          "fr": "Quelle est la fréquence du réseau électrique au Canada ?",
          "en": "What is the frequency of the electrical grid in Canada?"
        },
        "choix": {
          "fr": [
            "50 Hz",
            "60 Hz",
            "100 Hz",
            "400 Hz"
          ],
          "en": [
            "50 Hz",
            "60 Hz",
            "100 Hz",
            "400 Hz"
          ]
        },
        "reponse": 1,
        "complexite": 1,
        "explication": {
          "fr": "L'Amérique du Nord fonctionne à 60 Hz ; l'Europe à 50 Hz.",
          "en": "North America runs at 60 Hz; Europe runs at 50 Hz."
        }
      },
      {
        "question": {
          "fr": "Un transformateur de commande 600 V / 120 V alimente un circuit de commande. Quelle affirmation est vraie ?",
          "en": "A 600 V / 120 V control transformer feeds a control circuit. Which statement is true?"
        },
        "choix": {
          "fr": [
            "Le courant au secondaire est 5 fois plus faible qu'au primaire",
            "Le courant est identique des deux côtés",
            "La fréquence est divisée par 5",
            "Le courant au secondaire est environ 5 fois plus élevé qu'au primaire"
          ],
          "en": [
            "The secondary current is 5 times lower than the primary",
            "The current is the same on both sides",
            "The frequency is divided by 5",
            "The secondary current is about 5 times higher than the primary"
          ]
        },
        "reponse": 3,
        "complexite": 3,
        "explication": {
          "fr": "La puissance étant conservée, le courant au secondaire est environ 5 fois plus élevé.",
          "en": "Since power is conserved, the secondary current is about 5 times higher."
        }
      },
      {
        "question": {
          "fr": "Quel est l'avantage principal d'un disjoncteur par rapport à un fusible ?",
          "en": "What is the main advantage of a circuit breaker over a fuse?"
        },
        "choix": {
          "fr": [
            "Il protège contre les surtensions",
            "Il ne nécessite aucune coordination",
            "Il est toujours plus rapide",
            "Il peut être réarmé après un déclenchement"
          ],
          "en": [
            "It protects against overvoltage",
            "It requires no coordination",
            "It is always faster",
            "It can be reset after tripping"
          ]
        },
        "reponse": 3,
        "complexite": 1,
        "explication": {
          "fr": "Le disjoncteur se réarme ; un fusible fondu doit être remplacé.",
          "en": "A circuit breaker can be reset; a blown fuse must be replaced."
        }
      },
      {
        "question": {
          "fr": "Quel est le rôle principal d'un disjoncteur différentiel de fuite à la terre (DDFT) ?",
          "en": "What is the main purpose of a ground fault circuit interrupter (GFCI)?"
        },
        "choix": {
          "fr": [
            "Corriger le facteur de puissance",
            "Limiter le courant de démarrage des moteurs",
            "Protéger le câble contre les surcharges",
            "Protéger les personnes en détectant un faible courant de fuite à la terre"
          ],
          "en": [
            "Correct the power factor",
            "Limit motor inrush current",
            "Protect the cable against overloads",
            "Protect people by detecting a small ground leakage current"
          ]
        },
        "reponse": 3,
        "complexite": 2,
        "explication": {
          "fr": "Le DDFT déclenche dès qu'une fuite d'environ 5 mA est détectée.",
          "en": "A GFCI trips as soon as a leakage of about 5 mA is detected."
        }
      },
      {
        "question": {
          "fr": "Quel instrument permet de mesurer le courant d'un conducteur sans ouvrir le circuit ?",
          "en": "Which instrument measures the current in a conductor without opening the circuit?"
        },
        "choix": {
          "fr": [
            "Une pince ampèremétrique",
            "Un ohmmètre",
            "Un testeur de continuité",
            "Un mégohmmètre"
          ],
          "en": [
            "A clamp meter",
            "An ohmmeter",
            "A continuity tester",
            "A megohmmeter"
          ]
        },
        "reponse": 0,
        "complexite": 1,
        "explication": {
          "fr": "La pince ampèremétrique mesure le champ magnétique autour d'un conducteur.",
          "en": "A clamp meter measures the magnetic field around a conductor."
        }
      },
      {
        "question": {
          "fr": "Quel instrument sert à vérifier l'état de l'isolation des enroulements d'un moteur ?",
          "en": "Which instrument is used to check the insulation condition of a motor's windings?"
        },
        "choix": {
          "fr": [
            "Un tachymètre",
            "Une pince ampèremétrique",
            "Un mégohmmètre",
            "Un luxmètre"
          ],
          "en": [
            "A tachometer",
            "A clamp meter",
            "A megohmmeter",
            "A light meter"
          ]
        },
        "reponse": 2,
        "complexite": 1,
        "explication": {
          "fr": "Le mégohmmètre mesure la résistance d'isolation ; débrancher le VFD avant l'essai.",
          "en": "A megohmmeter measures insulation resistance; disconnect the VFD before testing."
        }
      },
      {
        "question": {
          "fr": "Lors d'un démarrage direct (DOL), le courant d'appel d'un moteur asynchrone est généralement :",
          "en": "During a direct-on-line (DOL) start, the inrush current of an induction motor is generally:"
        },
        "choix": {
          "fr": [
            "Environ 20 fois le courant nominal",
            "Environ 2 fois le courant nominal",
            "Égal au courant nominal",
            "Environ 6 à 8 fois le courant nominal"
          ],
          "en": [
            "About 20 times the rated current",
            "About 2 times the rated current",
            "Equal to the rated current",
            "About 6 to 8 times the rated current"
          ]
        },
        "reponse": 3,
        "complexite": 2,
        "explication": {
          "fr": "Un démarrage direct appelle typiquement 6 à 8 fois le courant nominal.",
          "en": "A direct start typically draws 6 to 8 times the rated current."
        }
      },
      {
        "question": {
          "fr": "Quel est l'effet d'un démarrage étoile-triangle ?",
          "en": "What is the effect of a wye-delta (star-delta) start?"
        },
        "choix": {
          "fr": [
            "Il augmente le couple de démarrage",
            "Il inverse le sens de rotation",
            "Il réduit le courant de démarrage à environ le tiers",
            "Il permet de varier la vitesse en continu"
          ],
          "en": [
            "It increases the starting torque",
            "It reverses the direction of rotation",
            "It reduces the starting current to about one third",
            "It allows continuous speed variation"
          ]
        },
        "reponse": 2,
        "complexite": 2,
        "explication": {
          "fr": "Le courant et le couple de démarrage sont réduits à environ le tiers.",
          "en": "Starting current and torque are reduced to about one third."
        }
      },
      {
        "question": {
          "fr": "Que se passe-t-il si un moteur triphasé en marche perd une phase ?",
          "en": "What happens if a running three-phase motor loses one phase?"
        },
        "choix": {
          "fr": [
            "Il accélère",
            "Il inverse son sens de rotation",
            "Il continue de tourner, son courant augmente et il risque de surchauffer",
            "Il s'arrête immédiatement sans danger"
          ],
          "en": [
            "It speeds up",
            "It reverses its direction of rotation",
            "It keeps running, its current increases, and it risks overheating",
            "It stops immediately, with no danger"
          ]
        },
        "reponse": 2,
        "complexite": 3,
        "explication": {
          "fr": "Le moteur continue sur deux phases avec un courant accru et surchauffe sans protection.",
          "en": "The motor keeps running on two phases with increased current and overheats without protection."
        }
      },
      {
        "question": {
          "fr": "Un moteur absorbe 10 kW pendant 8 heures. Quelle énergie a-t-il consommée ?",
          "en": "A motor draws 10 kW for 8 hours. How much energy did it consume?"
        },
        "choix": {
          "fr": [
            "800 kWh",
            "1,25 kWh",
            "80 kWh",
            "18 kWh"
          ],
          "en": [
            "800 kWh",
            "1.25 kWh",
            "80 kWh",
            "18 kWh"
          ]
        },
        "reponse": 2,
        "complexite": 1,
        "explication": {
          "fr": "Énergie = 10 kW × 8 h = 80 kWh.",
          "en": "Energy = 10 kW × 8 h = 80 kWh."
        }
      },
      {
        "question": {
          "fr": "Quelle norme canadienne encadre la sécurité en matière d'électricité au travail, y compris les risques d'arc électrique ?",
          "en": "Which Canadian standard governs electrical safety in the workplace, including arc flash hazards?"
        },
        "choix": {
          "fr": [
            "CSA Z462",
            "IEC 61131-3",
            "CSA C22.2 no 286",
            "ISO 9001"
          ],
          "en": [
            "CSA Z462",
            "IEC 61131-3",
            "CSA C22.2 No. 286",
            "ISO 9001"
          ]
        },
        "reponse": 0,
        "complexite": 2,
        "explication": {
          "fr": "CSA Z462 (équivalent américain : NFPA 70E).",
          "en": "CSA Z462 (U.S. equivalent: NFPA 70E)."
        }
      },
      {
        "question": {
          "fr": "Après avoir cadenassé un équipement, quelle étape est essentielle avant d'y travailler ?",
          "en": "After locking out a piece of equipment, what step is essential before working on it?"
        },
        "choix": {
          "fr": [
            "Vérifier l'absence de tension avec un appareil dont le bon fonctionnement a été confirmé",
            "Retirer les fusibles seulement",
            "Aviser le client",
            "Démarrer l'équipement pour confirmer qu'il est arrêté"
          ],
          "en": [
            "Verify the absence of voltage with a meter whose proper operation has been confirmed",
            "Remove the fuses only",
            "Notify the customer",
            "Start the equipment to confirm it is stopped"
          ]
        },
        "reponse": 0,
        "complexite": 1,
        "explication": {
          "fr": "La vérification d'absence de tension se fait avec un appareil testé avant et après.",
          "en": "Absence of voltage is verified with a meter tested before and after the check."
        }
      },
      {
        "question": {
          "fr": "Lors d'un cadenassage impliquant plusieurs travailleurs, quelle pratique est correcte ?",
          "en": "When lockout involves several workers, which practice is correct?"
        },
        "choix": {
          "fr": [
            "Chaque travailleur appose son propre cadenas personnel",
            "Aucun cadenas si l'intervention est courte",
            "Un seul cadenas pour toute l'équipe, tenu par le superviseur",
            "Une simple étiquette suffit"
          ],
          "en": [
            "Each worker applies their own personal lock",
            "No lock if the job is short",
            "A single lock for the whole team, held by the supervisor",
            "A simple tag is enough"
          ]
        },
        "reponse": 0,
        "complexite": 1,
        "explication": {
          "fr": "Chaque travailleur pose son propre cadenas et garde sa clé.",
          "en": "Each worker applies their own lock and keeps their own key."
        }
      }
    ]
  },
  {
    "id": "vfd",
    "numero": 6,
    "titre": {
      "fr": "Variateurs de fréquence (VFD)",
      "en": "Variable Frequency Drives (VFD)"
    },
    "questions": [
      {
        "question": {
          "fr": "Comment un VFD contrôle-t-il la vitesse d'un moteur asynchrone ?",
          "en": "How does a VFD control the speed of an induction motor?"
        },
        "choix": {
          "fr": [
            "En variant la fréquence et la tension appliquées au moteur",
            "En modifiant le nombre de pôles du moteur",
            "En ajoutant des résistances au rotor",
            "En inversant deux phases"
          ],
          "en": [
            "By varying the frequency and voltage applied to the motor",
            "By changing the number of motor poles",
            "By adding resistors to the rotor",
            "By reversing two phases"
          ]
        },
        "reponse": 0,
        "complexite": 1,
        "explication": {
          "fr": "Le VFD ajuste fréquence et tension en gardant le rapport V/Hz.",
          "en": "A VFD adjusts frequency and voltage while keeping the V/Hz ratio."
        }
      },
      {
        "question": {
          "fr": "Quelles sont les trois sections principales d'un VFD ?",
          "en": "What are the three main sections of a VFD?"
        },
        "choix": {
          "fr": [
            "Redresseur, bus c.c., onduleur",
            "Transformateur, contacteur, relais thermique",
            "Démarreur, condensateur, fusible",
            "Entrée analogique, PLC, HMI"
          ],
          "en": [
            "Rectifier, DC bus, inverter",
            "Transformer, contactor, thermal relay",
            "Starter, capacitor, fuse",
            "Analog input, PLC, HMI"
          ]
        },
        "reponse": 0,
        "complexite": 2,
        "explication": {
          "fr": "Redresseur (c.a. → c.c.), bus c.c. (filtrage), onduleur IGBT (MLI).",
          "en": "Rectifier (AC → DC), DC bus (filtering), IGBT inverter (PWM)."
        }
      },
      {
        "question": {
          "fr": "Un moteur à 4 pôles a une vitesse synchrone de 1800 tr/min à 60 Hz. Quelle est sa vitesse synchrone si le VFD l'alimente à 30 Hz ?",
          "en": "A 4-pole motor has a synchronous speed of 1800 rpm at 60 Hz. What is its synchronous speed if the VFD supplies it at 30 Hz?"
        },
        "choix": {
          "fr": [
            "1350 tr/min",
            "900 tr/min",
            "450 tr/min",
            "1800 tr/min"
          ],
          "en": [
            "1350 rpm",
            "900 rpm",
            "450 rpm",
            "1800 rpm"
          ]
        },
        "reponse": 1,
        "complexite": 2,
        "explication": {
          "fr": "La vitesse synchrone est proportionnelle à la fréquence : à 30 Hz (la moitié de 60 Hz), elle est de 1800 / 2 = 900 tr/min.",
          "en": "Synchronous speed is proportional to frequency: at 30 Hz (half of 60 Hz), it is 1800 / 2 = 900 rpm."
        }
      },
      {
        "question": {
          "fr": "Quelle est la vitesse synchrone d'un moteur à 2 pôles à 60 Hz ?",
          "en": "What is the synchronous speed of a 2-pole motor at 60 Hz?"
        },
        "choix": {
          "fr": [
            "1200 tr/min",
            "3600 tr/min",
            "3000 tr/min",
            "1800 tr/min"
          ],
          "en": [
            "1200 rpm",
            "3600 rpm",
            "3000 rpm",
            "1800 rpm"
          ]
        },
        "reponse": 1,
        "complexite": 1,
        "explication": {
          "fr": "Ns = 120 × 60 / 2 = 3600 tr/min.",
          "en": "Ns = 120 × 60 / 2 = 3600 rpm."
        }
      },
      {
        "question": {
          "fr": "Pour une pompe centrifuge, si on réduit la vitesse de moitié avec un VFD, la puissance absorbée devient environ :",
          "en": "For a centrifugal pump, if speed is cut in half with a VFD, the power drawn becomes approximately:"
        },
        "choix": {
          "fr": [
            "6 % de la puissance initiale",
            "50 % de la puissance initiale",
            "12,5 % de la puissance initiale",
            "25 % de la puissance initiale"
          ],
          "en": [
            "6% of the initial power",
            "50% of the initial power",
            "12.5% of the initial power",
            "25% of the initial power"
          ]
        },
        "reponse": 2,
        "complexite": 3,
        "explication": {
          "fr": "Selon les lois de similitude, la puissance varie avec le cube de la vitesse : (1/2)³ = 1/8, soit environ 12,5 %.",
          "en": "According to the affinity laws, power varies with the cube of speed: (1/2)³ = 1/8, or about 12.5%."
        }
      },
      {
        "question": {
          "fr": "Laquelle de ces charges est à couple variable ?",
          "en": "Which of these loads is a variable-torque load?"
        },
        "choix": {
          "fr": [
            "Un convoyeur à courroie",
            "Une pompe centrifuge",
            "Un treuil de levage",
            "Une pompe volumétrique à piston"
          ],
          "en": [
            "A belt conveyor",
            "A centrifugal pump",
            "A hoist",
            "A reciprocating (piston) pump"
          ]
        },
        "reponse": 1,
        "complexite": 2,
        "explication": {
          "fr": "Le couple d'une pompe centrifuge croît avec le carré de la vitesse.",
          "en": "The torque of a centrifugal pump increases with the square of speed."
        }
      },
      {
        "question": {
          "fr": "Que se passe-t-il lorsqu'un VFD fait tourner un moteur au-dessus de sa fréquence nominale (60 Hz) ?",
          "en": "What happens when a VFD drives a motor above its rated frequency (60 Hz)?"
        },
        "choix": {
          "fr": [
            "Le couple disponible diminue",
            "Le moteur ne peut pas dépasser 60 Hz",
            "La tension de sortie double",
            "Le couple disponible augmente"
          ],
          "en": [
            "Available torque decreases",
            "The motor cannot exceed 60 Hz",
            "Output voltage doubles",
            "Available torque increases"
          ]
        },
        "reponse": 0,
        "complexite": 3,
        "explication": {
          "fr": "Zone de défluxage : puissance à peu près constante, couple en baisse.",
          "en": "Field-weakening region: power stays roughly constant while torque decreases."
        }
      },
      {
        "question": {
          "fr": "Quel est l'avantage principal de la commande vectorielle par rapport à la commande V/Hz ?",
          "en": "What is the main advantage of vector control compared to V/Hz control?"
        },
        "choix": {
          "fr": [
            "Elle ne nécessite aucune donnée moteur",
            "Elle offre un meilleur contrôle du couple, surtout à basse vitesse",
            "Elle élimine les harmoniques",
            "Elle permet de se passer de protection contre les surcharges"
          ],
          "en": [
            "It requires no motor data",
            "It provides better torque control, especially at low speed",
            "It eliminates harmonics",
            "It removes the need for overload protection"
          ]
        },
        "reponse": 1,
        "complexite": 3,
        "explication": {
          "fr": "Meilleur contrôle du couple, surtout à basse vitesse.",
          "en": "Better torque control, especially at low speed."
        }
      },
      {
        "question": {
          "fr": "Pourquoi recommande-t-on un câble blindé entre un VFD et le moteur ?",
          "en": "Why is a shielded cable recommended between a VFD and the motor?"
        },
        "choix": {
          "fr": [
            "Pour augmenter la fréquence de sortie",
            "Pour éviter d'installer un conducteur de terre",
            "Pour réduire les interférences électromagnétiques (EMI)",
            "Pour augmenter le couple"
          ],
          "en": [
            "To increase the output frequency",
            "To avoid installing a ground conductor",
            "To reduce electromagnetic interference (EMI)",
            "To increase torque"
          ]
        },
        "reponse": 2,
        "complexite": 1,
        "explication": {
          "fr": "Le blindage limite les perturbations ; le conducteur de terre reste obligatoire.",
          "en": "Shielding limits interference; a ground conductor is still required."
        }
      },
      {
        "question": {
          "fr": "Quel risque présente un câble très long entre le VFD et le moteur ?",
          "en": "What risk does a very long cable between a VFD and the motor present?"
        },
        "choix": {
          "fr": [
            "Des pointes de surtension aux bornes du moteur, qui dégradent l'isolation",
            "Une baisse de la vitesse du moteur",
            "Une augmentation du facteur de puissance",
            "Aucun effet"
          ],
          "en": [
            "Voltage spikes at the motor terminals, which degrade insulation",
            "A drop in motor speed",
            "An increase in power factor",
            "No effect"
          ]
        },
        "reponse": 0,
        "complexite": 3,
        "explication": {
          "fr": "Les réflexions d'onde créent des surtensions ; un filtre dV/dt ou sinus protège le moteur.",
          "en": "Wave reflections create overvoltages; a dV/dt or sine-wave filter protects the motor."
        }
      },
      {
        "question": {
          "fr": "Quel est l'effet d'augmenter la fréquence porteuse (de commutation) d'un VFD ?",
          "en": "What is the effect of increasing a VFD's carrier (switching) frequency?"
        },
        "choix": {
          "fr": [
            "Le couple de démarrage double",
            "Le moteur tourne plus vite",
            "Le bruit du moteur diminue, mais l'échauffement du VFD et les EMI augmentent",
            "Les harmoniques sur le réseau disparaissent"
          ],
          "en": [
            "Starting torque doubles",
            "The motor runs faster",
            "Motor noise decreases, but VFD heating and EMI increase",
            "Harmonics on the grid disappear"
          ]
        },
        "reponse": 2,
        "complexite": 3,
        "explication": {
          "fr": "Moteur plus silencieux, mais plus de pertes et de perturbations ; déclassement possible.",
          "en": "Quieter motor, but more losses and interference; derating may be required."
        }
      },
      {
        "question": {
          "fr": "Un VFD déclenche en défaut de surintensité au démarrage. Quelle est une cause probable ?",
          "en": "A VFD trips on an overcurrent fault at startup. What is a likely cause?"
        },
        "choix": {
          "fr": [
            "Temps d'accélération trop long",
            "Entrée analogique non raccordée",
            "Temps d'accélération trop court",
            "Fréquence maximale trop basse"
          ],
          "en": [
            "Acceleration time too long",
            "Analog input not connected",
            "Acceleration time too short",
            "Maximum frequency too low"
          ]
        },
        "reponse": 2,
        "complexite": 2,
        "explication": {
          "fr": "Une rampe trop agressive demande trop de courant.",
          "en": "A ramp that is too aggressive demands too much current."
        }
      },
      {
        "question": {
          "fr": "Un VFD déclenche en surtension du bus c.c. lors de l'arrêt d'une charge à forte inertie. Quelle solution est appropriée ?",
          "en": "A VFD trips on DC bus overvoltage when stopping a high-inertia load. What is an appropriate solution?"
        },
        "choix": {
          "fr": [
            "Allonger le temps de décélération ou ajouter une résistance de freinage",
            "Augmenter la fréquence porteuse",
            "Réduire le temps de décélération",
            "Retirer le conducteur de terre"
          ],
          "en": [
            "Lengthen the deceleration time or add a braking resistor",
            "Increase the carrier frequency",
            "Reduce the deceleration time",
            "Remove the ground conductor"
          ]
        },
        "reponse": 0,
        "complexite": 3,
        "explication": {
          "fr": "Le moteur renvoie de l'énergie au bus ; allonger la rampe ou la dissiper.",
          "en": "The motor feeds energy back into the bus; lengthen the ramp or dissipate the energy."
        }
      },
      {
        "question": {
          "fr": "Quel est le rôle principal d'une réactance de ligne à l'entrée d'un VFD ?",
          "en": "What is the main purpose of a line reactor at the input of a VFD?"
        },
        "choix": {
          "fr": [
            "Remplacer le sectionneur",
            "Augmenter la vitesse du moteur",
            "Convertir le monophasé en triphasé",
            "Réduire les harmoniques et protéger le variateur contre les transitoires du réseau"
          ],
          "en": [
            "Replace the disconnect switch",
            "Increase motor speed",
            "Convert single-phase to three-phase",
            "Reduce harmonics and protect the drive from grid transients"
          ]
        },
        "reponse": 3,
        "complexite": 2,
        "explication": {
          "fr": "Elle atténue les harmoniques et protège le redresseur.",
          "en": "It attenuates harmonics and protects the rectifier."
        }
      },
      {
        "question": {
          "fr": "Quels rangs d'harmoniques dominent le courant absorbé par un VFD standard à redresseur 6 impulsions ?",
          "en": "Which harmonic orders dominate the current drawn by a standard 6-pulse rectifier VFD?"
        },
        "choix": {
          "fr": [
            "2e et 4e",
            "Uniquement la 3e",
            "10e et 12e",
            "5e et 7e"
          ],
          "en": [
            "2nd and 4th",
            "3rd only",
            "10th and 12th",
            "5th and 7th"
          ]
        },
        "reponse": 3,
        "complexite": 1,
        "explication": {
          "fr": "Rangs 5 et 7 (300 et 420 Hz sur un réseau 60 Hz).",
          "en": "Orders 5 and 7 (300 and 420 Hz on a 60 Hz grid)."
        }
      },
      {
        "question": {
          "fr": "Après avoir coupé l'alimentation d'un VFD, quelle précaution faut-il prendre avant d'y intervenir ?",
          "en": "After disconnecting power from a VFD, what precaution must be taken before working on it?"
        },
        "choix": {
          "fr": [
            "Aucune précaution, le VFD est hors tension dès qu'il est débranché",
            "Retirer le ventilateur de refroidissement",
            "Court-circuiter immédiatement les bornes du moteur",
            "Attendre la décharge des condensateurs du bus c.c. et vérifier la tension"
          ],
          "en": [
            "No precaution needed, the VFD is de-energized as soon as it's unplugged",
            "Remove the cooling fan",
            "Immediately short-circuit the motor terminals",
            "Wait for the DC bus capacitors to discharge and check the voltage"
          ]
        },
        "reponse": 3,
        "complexite": 3,
        "explication": {
          "fr": "Respecter le délai du fabricant (souvent 5 à 15 min) et mesurer la tension du bus.",
          "en": "Follow the manufacturer's wait time (often 5 to 15 min) and measure the bus voltage."
        }
      },
      {
        "question": {
          "fr": "Un contacteur est installé entre le VFD et le moteur. Peut-on l'ouvrir pendant que le VFD fait tourner le moteur ?",
          "en": "A contactor is installed between the VFD and the motor. Can it be opened while the VFD is running the motor?"
        },
        "choix": {
          "fr": [
            "Oui, c'est la méthode normale d'arrêt",
            "Oui, si le moteur tourne à basse vitesse",
            "Non, cela peut endommager l'étage de sortie du VFD",
            "Oui, uniquement avec un câble blindé"
          ],
          "en": [
            "Yes, that is the normal stopping method",
            "Yes, if the motor is running at low speed",
            "No, it can damage the VFD's output stage",
            "Yes, only with a shielded cable"
          ]
        },
        "reponse": 2,
        "complexite": 1,
        "explication": {
          "fr": "On arrête d'abord le VFD avant de manœuvrer le contacteur.",
          "en": "Stop the VFD first before operating the contactor."
        }
      },
      {
        "question": {
          "fr": "Quel signal utilise-t-on couramment pour transmettre une consigne de vitesse d'un PLC à un VFD par câblage ?",
          "en": "Which signal is commonly used to send a speed reference from a PLC to a VFD by wiring?"
        },
        "choix": {
          "fr": [
            "Une entrée analogique 0–10 V ou 4–20 mA",
            "Une sortie relais",
            "Le bornier d'alimentation L1, L2, L3",
            "Une entrée 120 V c.a."
          ],
          "en": [
            "A 0–10 V or 4–20 mA analog input",
            "A relay output",
            "The L1, L2, L3 power terminal block",
            "A 120 VAC input"
          ]
        },
        "reponse": 0,
        "complexite": 2,
        "explication": {
          "fr": "Entrée analogique 0–10 V ou 4–20 mA (ou réseau de communication).",
          "en": "A 0–10 V or 4–20 mA analog input (or a communication network)."
        }
      },
      {
        "question": {
          "fr": "Lors de la mise en service d'un VFD, quelles données doivent être entrées en priorité ?",
          "en": "When commissioning a VFD, which data must be entered first?"
        },
        "choix": {
          "fr": [
            "L'adresse IP du HMI seulement",
            "Les données de la plaque signalétique du moteur",
            "La longueur de la tuyauterie",
            "Le numéro de série du PLC"
          ],
          "en": [
            "The HMI's IP address only",
            "The motor nameplate data",
            "The piping length",
            "The PLC serial number"
          ]
        },
        "reponse": 1,
        "complexite": 1,
        "explication": {
          "fr": "Tension, courant, fréquence, vitesse et puissance nominales, puis autoréglage.",
          "en": "Rated voltage, current, frequency, speed and power, followed by auto-tuning."
        }
      },
      {
        "question": {
          "fr": "Un VFD peut-il assurer la protection contre les surcharges du moteur ?",
          "en": "Can a VFD provide motor overload protection?"
        },
        "choix": {
          "fr": [
            "Oui, sans aucun paramétrage",
            "Non, jamais",
            "Seulement pour les moteurs monophasés",
            "Oui, si sa protection thermique est paramétrée avec le courant de la plaque et approuvée à cette fin"
          ],
          "en": [
            "Yes, with no setup at all",
            "No, never",
            "Only for single-phase motors",
            "Yes, if its thermal protection is set with the nameplate current and approved for this purpose"
          ]
        },
        "reponse": 3,
        "complexite": 2,
        "explication": {
          "fr": "La protection électronique doit être paramétrée avec le FLA et approuvée.",
          "en": "Electronic protection must be set with the FLA and approved."
        }
      },
      {
        "question": {
          "fr": "Pourquoi un moteur auto-ventilé risque-t-il de surchauffer s'il tourne longtemps à basse vitesse et à couple élevé ?",
          "en": "Why does a self-cooled motor risk overheating if it runs for a long time at low speed and high torque?"
        },
        "choix": {
          "fr": [
            "Son ventilateur, monté sur l'arbre, refroidit moins à basse vitesse",
            "La tension augmente à basse vitesse",
            "Le moteur passe en monophasé",
            "Le facteur de puissance devient nul"
          ],
          "en": [
            "Its shaft-mounted fan cools less effectively at low speed",
            "Voltage increases at low speed",
            "The motor switches to single-phase",
            "Power factor becomes zero"
          ]
        },
        "reponse": 0,
        "complexite": 2,
        "explication": {
          "fr": "Utiliser un moteur « inverter duty » ou une ventilation forcée.",
          "en": "Use an inverter-duty motor or forced ventilation."
        }
      },
      {
        "question": {
          "fr": "Un VFD est installé dans une armoire où l'air ambiant atteint 122 °F, au-delà de sa température nominale. Que faut-il faire ?",
          "en": "A VFD is installed in a cabinet where the ambient air reaches 122 °F, above its rated temperature. What should be done?"
        },
        "choix": {
          "fr": [
            "Retirer le filtre d'entrée",
            "Déclasser le VFD ou améliorer le refroidissement de l'armoire",
            "Aucune mesure, la température n'a pas d'effet",
            "Augmenter la fréquence porteuse"
          ],
          "en": [
            "Remove the input filter",
            "Derate the VFD or improve the cabinet's cooling",
            "No action needed, temperature has no effect",
            "Increase the carrier frequency"
          ]
        },
        "reponse": 1,
        "complexite": 2,
        "explication": {
          "fr": "La chaleur et l'altitude réduisent la capacité de refroidissement. Le courant nominal doit être déclassé selon les courbes du fabricant, ou l'armoire mieux ventilée.",
          "en": "Heat and altitude reduce cooling capacity. Rated current must be derated per the manufacturer's curves, or the cabinet better ventilated."
        }
      },
      {
        "question": {
          "fr": "À quoi sert la fonction « reprise au vol » (flying start) d'un VFD ?",
          "en": "What is the purpose of a VFD's \"flying start\" function?"
        },
        "choix": {
          "fr": [
            "Arrêter le moteur le plus vite possible",
            "Inverser le sens de rotation automatiquement",
            "Faire fonctionner le moteur sans alimentation",
            "Redémarrer un moteur qui tourne déjà sans déclencher en défaut"
          ],
          "en": [
            "Stop the motor as quickly as possible",
            "Automatically reverse the direction of rotation",
            "Run the motor with no power supply",
            "Restart a motor that is already spinning, without tripping on a fault"
          ]
        },
        "reponse": 3,
        "complexite": 2,
        "explication": {
          "fr": "Le VFD se synchronise sur la vitesse du moteur encore en rotation.",
          "en": "The VFD synchronizes to the speed of the still-spinning motor."
        }
      },
      {
        "question": {
          "fr": "Sur un surpresseur à vitesse variable, à quoi sert le mode veille (sleep) du VFD ?",
          "en": "On a variable-speed booster pump, what is the purpose of the VFD's sleep mode?"
        },
        "choix": {
          "fr": [
            "Réduire la luminosité de l'afficheur",
            "Mettre le VFD hors tension la nuit",
            "Désactiver les alarmes",
            "Arrêter la pompe quand la demande est faible et la redémarrer quand la pression baisse"
          ],
          "en": [
            "Dim the display",
            "Turn off the VFD overnight",
            "Disable alarms",
            "Stop the pump when demand is low and restart it when pressure drops"
          ]
        },
        "reponse": 3,
        "complexite": 2,
        "explication": {
          "fr": "Économie d'énergie et pas de fonctionnement à débit nul.",
          "en": "Energy savings, and no running at zero flow."
        }
      },
      {
        "question": {
          "fr": "À quoi sert un circuit de contournement (bypass) sur un VFD ?",
          "en": "What is the purpose of a bypass circuit on a VFD?"
        },
        "choix": {
          "fr": [
            "À refroidir le VFD",
            "À filtrer les harmoniques",
            "À faire fonctionner le moteur directement sur le réseau si le VFD est défaillant",
            "À augmenter la vitesse maximale"
          ],
          "en": [
            "To cool the VFD",
            "To filter harmonics",
            "To run the motor directly on the line if the VFD fails",
            "To increase the maximum speed"
          ]
        },
        "reponse": 2,
        "complexite": 1,
        "explication": {
          "fr": "Il maintient le service à vitesse fixe en cas de panne du VFD.",
          "en": "It keeps the process running at fixed speed if the VFD fails."
        }
      }
    ]
  },
  {
    "id": "installation-filage",
    "numero": 7,
    "titre": {
      "fr": "Installation et filage électrique",
      "en": "Electrical Installation and Wiring"
    },
    "questions": [
      {
        "question": {
          "fr": "Quelle couleur identifie un conducteur de mise à la terre ?",
          "en": "What color identifies a grounding conductor?"
        },
        "choix": {
          "fr": [
            "Blanc ou gris",
            "Vert, vert/jaune ou nu",
            "Rouge",
            "Noir"
          ],
          "en": [
            "White or gray",
            "Green, green/yellow, or bare",
            "Red",
            "Black"
          ]
        },
        "reponse": 1,
        "complexite": 1,
        "explication": {
          "fr": "Vert, vert/jaune ou nu : réservés à la mise à la terre.",
          "en": "Green, green/yellow, or bare: reserved for grounding."
        }
      },
      {
        "question": {
          "fr": "Quelle couleur identifie le conducteur neutre ?",
          "en": "What color identifies the neutral conductor?"
        },
        "choix": {
          "fr": [
            "Blanc ou gris",
            "Bleu",
            "Orange",
            "Vert"
          ],
          "en": [
            "White or gray",
            "Blue",
            "Orange",
            "Green"
          ]
        },
        "reponse": 0,
        "complexite": 1,
        "explication": {
          "fr": "Blanc ou gris ; il ne sert jamais de conducteur de terre.",
          "en": "White or gray; it must never be used as a grounding conductor."
        }
      },
      {
        "question": {
          "fr": "Au Canada, quelles couleurs utilise-t-on pour les phases A, B et C d'un circuit triphasé ?",
          "en": "In Canada, what colors are used for phases A, B and C of a three-phase circuit?"
        },
        "choix": {
          "fr": [
            "Brun, orange, jaune",
            "Aucune exigence",
            "Noir, blanc, vert",
            "Rouge, noir, bleu"
          ],
          "en": [
            "Brown, orange, yellow",
            "No requirement",
            "Black, white, green",
            "Red, black, blue"
          ]
        },
        "reponse": 3,
        "complexite": 1,
        "explication": {
          "fr": "Rouge, noir, bleu. Brun/orange/jaune est une convention américaine.",
          "en": "Red, black, blue. Brown/orange/yellow is a U.S. convention."
        }
      },
      {
        "question": {
          "fr": "Dans le système AWG, lequel de ces conducteurs est le plus gros ?",
          "en": "In the AWG system, which of these conductors is the largest?"
        },
        "choix": {
          "fr": [
            "14 AWG",
            "10 AWG",
            "6 AWG",
            "12 AWG"
          ],
          "en": [
            "14 AWG",
            "10 AWG",
            "6 AWG",
            "12 AWG"
          ]
        },
        "reponse": 2,
        "complexite": 1,
        "explication": {
          "fr": "Plus le numéro AWG est petit, plus le conducteur est gros.",
          "en": "The smaller the AWG number, the larger the conductor."
        }
      },
      {
        "question": {
          "fr": "Qu'est-ce qu'un câble TECK90 ?",
          "en": "What is a TECK90 cable?"
        },
        "choix": {
          "fr": [
            "Un câble armé couramment utilisé en milieu industriel canadien",
            "Un câble de réseau Ethernet",
            "Un câble coaxial pour antennes",
            "Un fil de thermocouple"
          ],
          "en": [
            "An armored cable commonly used in Canadian industrial settings",
            "An Ethernet network cable",
            "A coaxial cable for antennas",
            "A thermocouple wire"
          ]
        },
        "reponse": 0,
        "complexite": 1,
        "explication": {
          "fr": "Câble armé à gaine extérieure, très répandu en industrie au Canada.",
          "en": "An armored, outer-jacketed cable widely used in Canadian industry."
        }
      },
      {
        "question": {
          "fr": "À quoi sert le connecteur (presse-étoupe) d'un câble TECK à l'entrée d'une armoire ?",
          "en": "What is the purpose of the connector (cable gland) on a TECK cable entering a cabinet?"
        },
        "choix": {
          "fr": [
            "Uniquement à décorer l'entrée de l'armoire",
            "À réduire la tension du circuit",
            "À assurer l'étanchéité, le maintien du câble et la continuité de l'armure avec le boîtier",
            "À remplacer le conducteur de terre"
          ],
          "en": [
            "Only to decorate the cabinet entry",
            "To reduce the circuit voltage",
            "To ensure watertightness, secure the cable, and maintain bonding continuity with the enclosure",
            "To replace the ground conductor"
          ]
        },
        "reponse": 2,
        "complexite": 2,
        "explication": {
          "fr": "Étanchéité, maintien et continuité des masses ; choisir le bon diamètre.",
          "en": "Watertightness, cable retention, and bonding continuity; choose the correct diameter."
        }
      },
      {
        "question": {
          "fr": "Quelle est la bonne pratique pour dénuder un conducteur ?",
          "en": "What is good practice when stripping a conductor?"
        },
        "choix": {
          "fr": [
            "Dénuder le plus long possible",
            "Laisser une partie de l'isolant dans la borne",
            "Utiliser un couteau pour aller plus vite",
            "Dénuder à la bonne longueur sans entailler ni couper de brins"
          ],
          "en": [
            "Strip as much as possible",
            "Leave some insulation inside the terminal",
            "Use a knife to work faster",
            "Strip to the correct length without nicking or cutting strands"
          ]
        },
        "reponse": 3,
        "complexite": 1,
        "explication": {
          "fr": "Une entaille crée un point faible qui chauffe ou casse.",
          "en": "A nick creates a weak point that overheats or breaks."
        }
      },
      {
        "question": {
          "fr": "Pourquoi utilise-t-on des embouts (férules) sur les fils multibrins raccordés à des borniers ?",
          "en": "Why are ferrules used on stranded wires connected to terminal blocks?"
        },
        "choix": {
          "fr": [
            "Pour assurer une connexion fiable et éviter les brins épars",
            "Pour augmenter la tension admissible",
            "Pour remplacer l'isolant",
            "Pour identifier la couleur du fil"
          ],
          "en": [
            "To ensure a reliable connection and prevent loose strands",
            "To increase the allowable voltage",
            "To replace the insulation",
            "To identify the wire color"
          ]
        },
        "reponse": 0,
        "complexite": 1,
        "explication": {
          "fr": "L'embout regroupe les brins et prévient courts-circuits et échauffements.",
          "en": "The ferrule bundles the strands and prevents short circuits and overheating."
        }
      },
      {
        "question": {
          "fr": "Pour sertir une cosse sur un conducteur, que faut-il utiliser ?",
          "en": "What is needed to crimp a lug onto a conductor?"
        },
        "choix": {
          "fr": [
            "L'outil de sertissage prévu pour la cosse, avec une cosse du bon calibre",
            "De la soudure seulement, sans sertissage",
            "Un marteau",
            "Une pince universelle, avec n'importe quelle cosse"
          ],
          "en": [
            "The crimping tool designed for the lug, with a correctly sized lug",
            "Solder only, without crimping",
            "A hammer",
            "Any pliers, with any lug"
          ]
        },
        "reponse": 0,
        "complexite": 1,
        "explication": {
          "fr": "Bon calibre de cosse et outil/matrice prévus.",
          "en": "The correct lug size and the intended tool/die."
        }
      },
      {
        "question": {
          "fr": "Comment doit-on serrer les bornes des disjoncteurs, contacteurs et borniers ?",
          "en": "How should the terminals of breakers, contactors and terminal blocks be tightened?"
        },
        "choix": {
          "fr": [
            "Le plus fort possible",
            "Au couple spécifié par le fabricant",
            "À la main, sans outil",
            "Le serrage n'a pas d'importance"
          ],
          "en": [
            "As tight as possible",
            "To the torque specified by the manufacturer",
            "By hand, without a tool",
            "Tightness does not matter"
          ]
        },
        "reponse": 1,
        "complexite": 1,
        "explication": {
          "fr": "Trop peu serré : échauffement ; trop serré : dommages.",
          "en": "Too loose causes overheating; too tight causes damage."
        }
      },
      {
        "question": {
          "fr": "Pourquoi numérote-t-on les fils d'un panneau de commande ?",
          "en": "Why are the wires in a control panel numbered?"
        },
        "choix": {
          "fr": [
            "Pour réduire la chute de tension",
            "Pour des raisons esthétiques",
            "Pour que chaque fil corresponde au schéma électrique et faciliter le dépannage",
            "Parce que cela remplace le code de couleurs"
          ],
          "en": [
            "To reduce voltage drop",
            "For aesthetic reasons",
            "So each wire matches the electrical schematic and speeds up troubleshooting",
            "Because it replaces the color code"
          ]
        },
        "reponse": 2,
        "complexite": 1,
        "explication": {
          "fr": "Le repérage cohérent avec les schémas accélère le dépannage.",
          "en": "Consistent labeling matching the schematics speeds up troubleshooting."
        }
      },
      {
        "question": {
          "fr": "Où doit-on étiqueter un câble qui relie une armoire à un moteur sur le terrain ?",
          "en": "Where should a cable connecting a cabinet to a field motor be labeled?"
        },
        "choix": {
          "fr": [
            "Seulement côté armoire",
            "Seulement côté équipement",
            "L'étiquetage n'est pas nécessaire",
            "Aux deux extrémités"
          ],
          "en": [
            "Only at the cabinet end",
            "Only at the equipment end",
            "Labeling is not necessary",
            "At both ends"
          ]
        },
        "reponse": 3,
        "complexite": 1,
        "explication": {
          "fr": "Un câble identifié aux deux bouts se retrouve rapidement.",
          "en": "A cable identified at both ends is found quickly."
        }
      },
      {
        "question": {
          "fr": "Comment doit-on acheminer les câbles de signaux analogiques par rapport aux câbles de puissance ?",
          "en": "How should analog signal cables be routed relative to power cables?"
        },
        "choix": {
          "fr": [
            "Cela n'a aucune importance",
            "Torsadés ensemble",
            "Dans le même conduit pour simplifier l'installation",
            "Séparés, et en se croisant à 90° lorsqu'ils doivent se croiser"
          ],
          "en": [
            "It does not matter",
            "Twisted together",
            "In the same conduit to simplify installation",
            "Separated, crossing at 90° where they must cross"
          ]
        },
        "reponse": 3,
        "complexite": 2,
        "explication": {
          "fr": "La séparation et le croisement à 90° limitent le couplage.",
          "en": "Separation and 90° crossing limit coupling."
        }
      },
      {
        "question": {
          "fr": "En général, où raccorde-t-on à la terre le blindage d'un câble de signal analogique 4–20 mA ?",
          "en": "In general, where is the shield of a 4–20 mA analog signal cable grounded?"
        },
        "choix": {
          "fr": [
            "Au neutre",
            "À une seule extrémité, généralement côté armoire, pour éviter les boucles de masse",
            "Jamais",
            "Aux deux extrémités, toujours"
          ],
          "en": [
            "At the neutral",
            "At one end only, usually the cabinet side, to avoid ground loops",
            "Never",
            "At both ends, always"
          ]
        },
        "reponse": 1,
        "complexite": 3,
        "explication": {
          "fr": "Une seule extrémité, côté armoire, pour éviter les boucles de masse.",
          "en": "One end only, cabinet side, to avoid ground loops."
        }
      },
      {
        "question": {
          "fr": "Comment raccorde-t-on le blindage d'un câble entre un VFD et son moteur ?",
          "en": "How is the shield of a cable between a VFD and its motor grounded?"
        },
        "choix": {
          "fr": [
            "Le couper à l'entrée de l'armoire",
            "Le raccorder au neutre",
            "Laisser le blindage flottant aux deux extrémités",
            "Le raccorder sur 360° à la masse aux deux extrémités, avec des presse-étoupes CEM"
          ],
          "en": [
            "Cut it at the cabinet entry",
            "Connect it to the neutral",
            "Leave the shield floating at both ends",
            "Bond it 360° to ground at both ends, using EMC cable glands"
          ]
        },
        "reponse": 3,
        "complexite": 3,
        "explication": {
          "fr": "Raccordement 360° aux deux extrémités pour ramener les courants HF.",
          "en": "360° bonding at both ends to return the high-frequency currents."
        }
      },
      {
        "question": {
          "fr": "Quelle est la bonne pratique concernant le remplissage des goulottes (wire duct) dans une armoire ?",
          "en": "What is good practice regarding fill in wire ducts inside a cabinet?"
        },
        "choix": {
          "fr": [
            "La remplir au maximum pour économiser de l'espace",
            "Y mettre les fils de puissance et de signal ensemble sans séparation",
            "Éviter de la surcharger pour la dissipation de chaleur et les modifications futures",
            "Ne jamais fermer le couvercle"
          ],
          "en": [
            "Fill it to the maximum to save space",
            "Put power and signal wires together with no separation",
            "Avoid overfilling, for heat dissipation and future changes",
            "Never close the cover"
          ]
        },
        "reponse": 2,
        "complexite": 2,
        "explication": {
          "fr": "Laisser de la réserve pour la chaleur et les ajouts futurs.",
          "en": "Leave spare capacity for heat and future additions."
        }
      },
      {
        "question": {
          "fr": "Qu'est-ce qu'un rail DIN dans une armoire électrique ?",
          "en": "What is a DIN rail inside an electrical cabinet?"
        },
        "choix": {
          "fr": [
            "Un appareil de mesure",
            "Un rail métallique normalisé sur lequel on fixe les borniers, disjoncteurs et relais",
            "Un type de conduit flexible",
            "Un câble de communication"
          ],
          "en": [
            "A measuring instrument",
            "A standardized metal rail used to mount terminal blocks, breakers, and relays",
            "A type of flexible conduit",
            "A communication cable"
          ]
        },
        "reponse": 1,
        "complexite": 1,
        "explication": {
          "fr": "Le rail DIN est un rail normalisé (environ 1 3/8 po de largeur) qui permet de monter et de remplacer rapidement les composants.",
          "en": "The DIN rail is a standardized rail (about 1 3/8 in. wide) that allows quick mounting and replacement of components."
        }
      },
      {
        "question": {
          "fr": "Entre deux points de tirage, quel est le total maximal de coudes permis dans un conduit ?",
          "en": "Between two pull points, what is the maximum total of bends allowed in a conduit?"
        },
        "choix": {
          "fr": [
            "90°",
            "Aucune limite",
            "180°",
            "360°"
          ],
          "en": [
            "90°",
            "No limit",
            "180°",
            "360°"
          ]
        },
        "reponse": 3,
        "complexite": 2,
        "explication": {
          "fr": "L'équivalent de quatre coudes à 90°, soit 360°.",
          "en": "The equivalent of four 90° bends, i.e., 360°."
        }
      },
      {
        "question": {
          "fr": "Pour le raccordement final d'un moteur de pompe, quel type de raccord est généralement recommandé ?",
          "en": "For the final connection to a pump motor, what type of fitting is generally recommended?"
        },
        "choix": {
          "fr": [
            "Un conduit flexible étanche (liquid-tight), pour absorber les vibrations",
            "Un conduit rigide soudé directement au moteur",
            "Du ruban adhésif autour des conducteurs",
            "Des fils individuels sans protection"
          ],
          "en": [
            "Liquid-tight flexible conduit, to absorb vibration",
            "Rigid conduit welded directly to the motor",
            "Electrical tape wrapped around the conductors",
            "Individual wires with no protection"
          ]
        },
        "reponse": 0,
        "complexite": 2,
        "explication": {
          "fr": "Le flexible étanche absorbe les vibrations et facilite l'entretien.",
          "en": "Liquid-tight flexible conduit absorbs vibration and eases maintenance."
        }
      },
      {
        "question": {
          "fr": "Pourquoi scelle-t-on un conduit qui passe d'une zone chaude à une zone froide ?",
          "en": "Why is a conduit sealed where it passes from a warm zone to a cold zone?"
        },
        "choix": {
          "fr": [
            "Pour réduire le bruit",
            "Pour augmenter l'ampacité",
            "Pour éviter la migration d'air humide et la condensation dans les équipements",
            "Ce n'est jamais nécessaire"
          ],
          "en": [
            "To reduce noise",
            "To increase ampacity",
            "To prevent humid air migration and condensation inside equipment",
            "It is never necessary"
          ]
        },
        "reponse": 2,
        "complexite": 3,
        "explication": {
          "fr": "Le scellement bloque l'air humide qui condenserait côté froid.",
          "en": "Sealing blocks the humid air that would condense on the cold side."
        }
      },
      {
        "question": {
          "fr": "Lorsqu'on perce une armoire de type 4X pour faire entrer des câbles, quelle pratique est correcte ?",
          "en": "When drilling a type 4X enclosure to bring in cables, what practice is correct?"
        },
        "choix": {
          "fr": [
            "Utiliser des raccords de même classe d'étanchéité, éviter le dessus et retirer tous les copeaux",
            "Percer le dessus et utiliser n'importe quel raccord",
            "Laisser les trous ouverts pour la ventilation",
            "Boucher les trous avec du ruban adhésif"
          ],
          "en": [
            "Use fittings of the same watertight rating, avoid the top, and remove all shavings",
            "Drill the top and use any fitting",
            "Leave the holes open for ventilation",
            "Plug the holes with tape"
          ]
        },
        "reponse": 0,
        "complexite": 2,
        "explication": {
          "fr": "Raccords homologués de même classe, pas sur le dessus, copeaux retirés.",
          "en": "Listed fittings of the same rating, not on top, with shavings removed."
        }
      },
      {
        "question": {
          "fr": "Pourquoi faut-il respecter le rayon de courbure minimal d'un câble ?",
          "en": "Why must a cable's minimum bend radius be respected?"
        },
        "choix": {
          "fr": [
            "Pour ne pas endommager l'isolant, l'armure ou le blindage du câble",
            "Pour faciliter le tirage uniquement",
            "Pour réduire le coût du câble",
            "Ce n'est pas nécessaire"
          ],
          "en": [
            "To avoid damaging the cable's insulation, armor, or shield",
            "Only to ease pulling",
            "To reduce cable cost",
            "It is not necessary"
          ]
        },
        "reponse": 0,
        "complexite": 3,
        "explication": {
          "fr": "Un pliage trop serré endommage le câble ; suivre le fabricant.",
          "en": "Too tight a bend damages the cable; follow the manufacturer's specification."
        }
      },
      {
        "question": {
          "fr": "Sur un moteur bi-tension (ex. 230/460 V), comment raccorde-t-on les enroulements pour la tension la plus élevée ?",
          "en": "On a dual-voltage motor (e.g. 230/460 V), how are the windings connected for the higher voltage?"
        },
        "choix": {
          "fr": [
            "En parallèle",
            "En série, selon le schéma de la plaque",
            "Peu importe, le moteur s'adapte seul",
            "En monophasé"
          ],
          "en": [
            "In parallel",
            "In series, per the nameplate diagram",
            "It does not matter, the motor adapts on its own",
            "Single-phase"
          ]
        },
        "reponse": 1,
        "complexite": 1,
        "explication": {
          "fr": "Série pour la tension haute, parallèle pour la basse.",
          "en": "Series for high voltage, parallel for low voltage."
        }
      },
      {
        "question": {
          "fr": "Pourquoi relie-t-on à la terre les parties métalliques non porteuses de courant (boîtiers, châssis de skid) ?",
          "en": "Why are non-current-carrying metal parts (enclosures, skid frames) bonded to ground?"
        },
        "choix": {
          "fr": [
            "Pour augmenter la vitesse du moteur",
            "Pour qu'un défaut à la masse fasse déclencher la protection et éviter les tensions de contact dangereuses",
            "Pour réduire la consommation d'énergie",
            "Pour améliorer le facteur de puissance"
          ],
          "en": [
            "To increase motor speed",
            "So a ground fault trips the protection and dangerous touch voltages are avoided",
            "To reduce energy consumption",
            "To improve the power factor"
          ]
        },
        "reponse": 1,
        "complexite": 2,
        "explication": {
          "fr": "Chemin de faible impédance pour déclencher rapidement la protection.",
          "en": "A low-impedance path lets the protection trip quickly."
        }
      },
      {
        "question": {
          "fr": "Avant la première mise sous tension d'un panneau ou d'un skid, quelles vérifications faut-il effectuer ?",
          "en": "Before the first energization of a panel or skid, what checks must be performed?"
        },
        "choix": {
          "fr": [
            "Retirer toutes les étiquettes",
            "Mettre sous tension directement pour gagner du temps",
            "Vérifier les raccordements, le serrage, la continuité des terres et l'isolement, et retirer les débris",
            "Vérifier seulement la couleur des fils"
          ],
          "en": [
            "Remove all labels",
            "Energize it directly to save time",
            "Check connections, tightness, ground continuity and insulation, and remove debris",
            "Check only the wire colors"
          ]
        },
        "reponse": 2,
        "complexite": 2,
        "explication": {
          "fr": "Raccordements, serrage, terres, isolement (VFD débranché), débris ; puis schémas tels que construits.",
          "en": "Connections, tightness, grounds, insulation (VFD disconnected), debris; then as-built drawings."
        }
      }
    ]
  },
  {
    "id": "plc",
    "numero": 8,
    "titre": {
      "fr": "Automates programmables (PLC)",
      "en": "Programmable Logic Controllers (PLC)"
    },
    "questions": [
      {
        "question": {
          "fr": "Dans quel ordre se déroule le cycle de scrutation typique d'un PLC ?",
          "en": "In what order does a PLC's typical scan cycle proceed?"
        },
        "choix": {
          "fr": [
            "Entrées → programme → sorties",
            "Programme → entrées → sorties",
            "Simultanément",
            "Sorties → entrées → programme"
          ],
          "en": [
            "Inputs → program → outputs",
            "Program → inputs → outputs",
            "Simultaneously",
            "Outputs → inputs → program"
          ]
        },
        "reponse": 0,
        "complexite": 2,
        "explication": {
          "fr": "Lecture des entrées, exécution de la logique, mise à jour des sorties.",
          "en": "Read inputs, execute logic, update outputs."
        }
      },
      {
        "question": {
          "fr": "Que signifie le mode RUN d'un PLC ?",
          "en": "What does a PLC's RUN mode mean?"
        },
        "choix": {
          "fr": [
            "Le PLC est en défaut",
            "Le PLC est hors tension",
            "Le PLC exécute son programme et commande les sorties",
            "Le programme peut être téléchargé sans risque, les sorties étant désactivées"
          ],
          "en": [
            "The PLC is in fault",
            "The PLC is powered off",
            "The PLC is executing its program and driving the outputs",
            "The program can be downloaded safely because the outputs are disabled"
          ]
        },
        "reponse": 2,
        "complexite": 1,
        "explication": {
          "fr": "RUN exécute le programme ; PROGRAM l'arrête pour le téléchargement.",
          "en": "RUN executes the program; PROGRAM mode stops it for downloading."
        }
      },
      {
        "question": {
          "fr": "Une entrée TOR (discrète) d'un PLC peut prendre :",
          "en": "A PLC discrete (on/off) input can take:"
        },
        "choix": {
          "fr": [
            "Une fréquence variable",
            "Une valeur continue entre 4 et 20 mA",
            "Deux états seulement : actif (1) ou inactif (0)",
            "Une température en °C"
          ],
          "en": [
            "A variable frequency",
            "A continuous value between 4 and 20 mA",
            "Only two states: active (1) or inactive (0)",
            "A temperature in °F"
          ]
        },
        "reponse": 2,
        "complexite": 1,
        "explication": {
          "fr": "Tout ou rien : deux états.",
          "en": "On/off: only two states."
        }
      },
      {
        "question": {
          "fr": "Quel est le principal avantage d'un signal 4–20 mA par rapport à un signal 0–20 mA ?",
          "en": "What is the main advantage of a 4–20 mA signal over a 0–20 mA signal?"
        },
        "choix": {
          "fr": [
            "Il permet de détecter une rupture de fil",
            "Il offre une meilleure résolution",
            "Il consomme moins d'énergie",
            "Il ne nécessite pas de câble blindé"
          ],
          "en": [
            "It allows a broken wire to be detected",
            "It offers better resolution",
            "It consumes less energy",
            "It does not need a shielded cable"
          ]
        },
        "reponse": 0,
        "complexite": 2,
        "explication": {
          "fr": "Le « zéro vivant » à 4 mA : 0 mA signale un fil coupé.",
          "en": "The \"live zero\" at 4 mA: 0 mA signals a broken wire."
        }
      },
      {
        "question": {
          "fr": "Un transmetteur de pression 0–100 psi envoie un signal 4–20 mA. Quelle pression correspond à 12 mA ?",
          "en": "A 0–100 psi pressure transmitter sends a 4–20 mA signal. What pressure corresponds to 12 mA?"
        },
        "choix": {
          "fr": [
            "75 psi",
            "50 psi",
            "60 psi",
            "25 psi"
          ],
          "en": [
            "75 psi",
            "50 psi",
            "60 psi",
            "25 psi"
          ]
        },
        "reponse": 1,
        "complexite": 2,
        "explication": {
          "fr": "(12 − 4) / (20 − 4) × 100 = 8 / 16 × 100 = 50 psi.",
          "en": "(12 − 4) / (20 − 4) × 100 = 8 / 16 × 100 = 50 psi."
        }
      },
      {
        "question": {
          "fr": "Un transmetteur de température 0–200 °F en 4–20 mA indique 8 mA. Quelle est la température ?",
          "en": "A 0–200 °F temperature transmitter on 4–20 mA reads 8 mA. What is the temperature?"
        },
        "choix": {
          "fr": [
            "40 °F",
            "50 °F",
            "16 °F",
            "80 °F"
          ],
          "en": [
            "40 °F",
            "50 °F",
            "16 °F",
            "80 °F"
          ]
        },
        "reponse": 1,
        "complexite": 2,
        "explication": {
          "fr": "(8 − 4) / 16 × 200 = 50 °F.",
          "en": "(8 − 4) / 16 × 200 = 50 °F."
        }
      },
      {
        "question": {
          "fr": "Combien de valeurs distinctes peut fournir un convertisseur analogique-numérique de 12 bits ?",
          "en": "How many distinct values can a 12-bit analog-to-digital converter provide?"
        },
        "choix": {
          "fr": [
            "65 536",
            "1024",
            "256",
            "4096"
          ],
          "en": [
            "65,536",
            "1024",
            "256",
            "4096"
          ]
        },
        "reponse": 3,
        "complexite": 2,
        "explication": {
          "fr": "2¹² = 4096 valeurs.",
          "en": "2¹² = 4096 values."
        }
      },
      {
        "question": {
          "fr": "Lequel de ces langages ne fait PAS partie de la norme IEC 61131-3 ?",
          "en": "Which of these languages is NOT part of the IEC 61131-3 standard?"
        },
        "choix": {
          "fr": [
            "SFC (Grafcet)",
            "Texte structuré (ST)",
            "Python",
            "Ladder (LD)"
          ],
          "en": [
            "SFC (sequential function chart)",
            "Structured Text (ST)",
            "Python",
            "Ladder (LD)"
          ]
        },
        "reponse": 2,
        "complexite": 1,
        "explication": {
          "fr": "La norme définit LD, FBD, ST, SFC et IL.",
          "en": "The standard defines LD, FBD, ST, SFC, and IL."
        }
      },
      {
        "question": {
          "fr": "En langage Ladder, un contact normalement ouvert (NO) laisse passer la logique lorsque :",
          "en": "In Ladder logic, a normally open (NO) contact passes logic when:"
        },
        "choix": {
          "fr": [
            "Le bit associé est à 0",
            "La sortie associée est désactivée",
            "Le PLC est en mode programmation",
            "Le bit associé est à 1"
          ],
          "en": [
            "Its associated bit is 0",
            "The associated output is disabled",
            "The PLC is in programming mode",
            "Its associated bit is 1"
          ]
        },
        "reponse": 3,
        "complexite": 1,
        "explication": {
          "fr": "NO vrai quand le bit vaut 1 ; NF vrai quand il vaut 0.",
          "en": "NO is true when the bit is 1; NC is true when it is 0."
        }
      },
      {
        "question": {
          "fr": "Comment fonctionne un temporisateur TON (retard à l'enclenchement) ?",
          "en": "How does a TON (on-delay) timer work?"
        },
        "choix": {
          "fr": [
            "Sa sortie s'active immédiatement et se désactive après le délai",
            "Il compte les impulsions d'entrée",
            "Il conserve sa valeur après une coupure de courant",
            "Sa sortie s'active quand l'entrée est restée vraie pendant toute la durée préréglée"
          ],
          "en": [
            "Its output activates immediately and deactivates after the delay",
            "It counts input pulses",
            "It retains its value after a power loss",
            "Its output activates once the input has stayed true for the whole preset time"
          ]
        },
        "reponse": 3,
        "complexite": 2,
        "explication": {
          "fr": "Il se remet à zéro si l'entrée redevient fausse avant le préréglage.",
          "en": "It resets to zero if the input goes false before the preset elapses."
        }
      },
      {
        "question": {
          "fr": "Comment fonctionne un temporisateur TOF (retard au déclenchement) ?",
          "en": "How does a TOF (off-delay) timer work?"
        },
        "choix": {
          "fr": [
            "Sa sortie s'active après un délai quand l'entrée devient vraie",
            "Il compte les impulsions",
            "Il génère un signal 4–20 mA",
            "Sa sortie reste active pendant le délai après que l'entrée devient fausse"
          ],
          "en": [
            "Its output activates after a delay once the input becomes true",
            "It counts pulses",
            "It generates a 4–20 mA signal",
            "Its output stays active for the delay after the input becomes false"
          ]
        },
        "reponse": 3,
        "complexite": 2,
        "explication": {
          "fr": "Ex. : ventilateur qui continue après l'arrêt du moteur.",
          "en": "Example: a fan that keeps running after the motor stops."
        }
      },
      {
        "question": {
          "fr": "Un compteur CTU (compteur croissant) compte :",
          "en": "A CTU (count up) counter counts:"
        },
        "choix": {
          "fr": [
            "Le nombre de transitions de faux à vrai de son entrée",
            "Le temps écoulé en millisecondes",
            "La valeur d'un signal analogique",
            "Le nombre de cycles de scrutation"
          ],
          "en": [
            "The number of false-to-true transitions of its input",
            "Elapsed time in milliseconds",
            "The value of an analog signal",
            "The number of scan cycles"
          ]
        },
        "reponse": 0,
        "complexite": 1,
        "explication": {
          "fr": "Il s'incrémente à chaque front montant.",
          "en": "It increments on each rising edge."
        }
      },
      {
        "question": {
          "fr": "Une instruction de détection de front montant (one-shot) est vraie :",
          "en": "A rising-edge (one-shot) detection instruction is true:"
        },
        "choix": {
          "fr": [
            "Pendant un seul cycle de scrutation, au passage de faux à vrai",
            "Tant que l'entrée est vraie",
            "Pendant 1 seconde",
            "Uniquement au démarrage du PLC"
          ],
          "en": [
            "For a single scan cycle, at the false-to-true transition",
            "As long as the input is true",
            "For 1 second",
            "Only when the PLC starts up"
          ]
        },
        "reponse": 0,
        "complexite": 3,
        "explication": {
          "fr": "Impulsion d'un seul cycle (ONS, OSR, R_TRIG).",
          "en": "A one-scan pulse (ONS, OSR, R_TRIG)."
        }
      },
      {
        "question": {
          "fr": "Qu'est-ce qui caractérise une sortie verrouillée (Latch/Set) dans un PLC ?",
          "en": "What characterizes a latched (Latch/Set) output in a PLC?"
        },
        "choix": {
          "fr": [
            "Elle se désactive dès que la condition devient fausse",
            "Elle reste active jusqu'à une instruction de déverrouillage (Unlatch/Reset)",
            "Elle clignote automatiquement",
            "Elle ne peut être utilisée qu'avec un temporisateur"
          ],
          "en": [
            "It deactivates as soon as the condition becomes false",
            "It stays active until an unlatch/reset instruction is executed",
            "It blinks automatically",
            "It can only be used with a timer"
          ]
        },
        "reponse": 1,
        "complexite": 2,
        "explication": {
          "fr": "Elle mémorise l'état jusqu'au Reset/Unlatch.",
          "en": "It remembers its state until Reset/Unlatch."
        }
      },
      {
        "question": {
          "fr": "Est-ce une bonne pratique de commander la même bobine de sortie à deux endroits différents du programme ?",
          "en": "Is it good practice to drive the same output coil at two different places in the program?"
        },
        "choix": {
          "fr": [
            "Oui, les deux conditions s'additionnent automatiquement",
            "C'est recommandé pour la redondance",
            "Non, car seule la dernière instruction exécutée détermine l'état de la sortie",
            "Oui, si les deux lignes sont dans des sous-programmes différents"
          ],
          "en": [
            "Yes, the two conditions add up automatically",
            "Yes, it is recommended for redundancy",
            "No, because only the last instruction executed determines the output state",
            "Yes, if the two rungs are in different subroutines"
          ]
        },
        "reponse": 2,
        "complexite": 3,
        "explication": {
          "fr": "La dernière écriture l'emporte, ce qui rend la logique confuse.",
          "en": "The last write wins, which makes the logic confusing."
        }
      },
      {
        "question": {
          "fr": "Quel type de donnée utilise-t-on pour stocker une pression mise à l'échelle comme 68,5 psi ?",
          "en": "Which data type is used to store a scaled pressure such as 68.5 psi?"
        },
        "choix": {
          "fr": [
            "INT",
            "TIMER",
            "REAL",
            "BOOL"
          ],
          "en": [
            "INT",
            "TIMER",
            "REAL",
            "BOOL"
          ]
        },
        "reponse": 2,
        "complexite": 2,
        "explication": {
          "fr": "Le type REAL (virgule flottante) stocke des valeurs décimales comme 68,5 psi. BOOL stocke un bit, INT et DINT des entiers.",
          "en": "The REAL (floating-point) type stores decimal values such as 68.5 psi. BOOL stores a bit; INT and DINT store integers."
        }
      },
      {
        "question": {
          "fr": "Un capteur de proximité 3 fils de type PNP, lorsqu'il est activé, fournit sur son fil de signal :",
          "en": "A 3-wire PNP proximity sensor, when activated, provides on its signal wire:"
        },
        "choix": {
          "fr": [
            "Du 120 V c.a.",
            "Le 0 V (commun)",
            "Un signal 4–20 mA",
            "Le +24 V c.c."
          ],
          "en": [
            "120 VAC",
            "0 V (common)",
            "A 4–20 mA signal",
            "+24 VDC"
          ]
        },
        "reponse": 3,
        "complexite": 3,
        "explication": {
          "fr": "PNP (sourcing) fournit le +24 V ; NPN commute le 0 V.",
          "en": "PNP (sourcing) supplies +24 V; NPN switches 0 V."
        }
      },
      {
        "question": {
          "fr": "Quel est l'avantage d'une sortie transistor par rapport à une sortie relais sur un PLC ?",
          "en": "What is the advantage of a transistor output over a relay output on a PLC?"
        },
        "choix": {
          "fr": [
            "Elle fonctionne en c.a. et en c.c.",
            "Elle commute plus rapidement et sans usure mécanique",
            "Elle peut commuter du 600 V c.a.",
            "Elle supporte des courants plus élevés"
          ],
          "en": [
            "It works on both AC and DC",
            "It switches faster and with no mechanical wear",
            "It can switch 600 VAC",
            "It handles higher currents"
          ]
        },
        "reponse": 1,
        "complexite": 2,
        "explication": {
          "fr": "Rapide et sans usure, mais en c.c. seulement.",
          "en": "Fast and wear-free, but DC only."
        }
      },
      {
        "question": {
          "fr": "Pourquoi câble-t-on un bouton d'arrêt avec un contact normalement fermé (NF) ?",
          "en": "Why is a stop button wired with a normally closed (NC) contact?"
        },
        "choix": {
          "fr": [
            "Parce que les contacts NO sont plus coûteux",
            "Pour économiser une entrée du PLC",
            "Pour réduire le nombre de fils",
            "Pour qu'une rupture de fil provoque l'arrêt (sécurité positive)"
          ],
          "en": [
            "Because NO contacts cost more",
            "To save a PLC input",
            "To reduce the number of wires",
            "So a broken wire causes a stop (fail-safe design)"
          ]
        },
        "reponse": 3,
        "complexite": 2,
        "explication": {
          "fr": "Un fil coupé équivaut à un appui sur Arrêt.",
          "en": "A broken wire behaves the same as pressing Stop."
        }
      },
      {
        "question": {
          "fr": "Dans un circuit de démarrage 3 fils, à quoi sert le contact auxiliaire placé en parallèle avec le bouton Marche ?",
          "en": "In a 3-wire start circuit, what is the purpose of the auxiliary contact wired in parallel with the Start button?"
        },
        "choix": {
          "fr": [
            "À signaler un défaut à la terre",
            "À maintenir la bobine alimentée après le relâchement du bouton (auto-maintien)",
            "À protéger contre les surcharges",
            "À inverser le sens de rotation"
          ],
          "en": [
            "To signal a ground fault",
            "To keep the coil energized after the button is released (seal-in)",
            "To protect against overloads",
            "To reverse the direction of rotation"
          ]
        },
        "reponse": 1,
        "complexite": 2,
        "explication": {
          "fr": "Auto-maintien ; pas de redémarrage seul après une coupure.",
          "en": "Seal-in contact; no automatic restart after a power loss."
        }
      },
      {
        "question": {
          "fr": "Qu'est-ce qui distingue un temporisateur rémanent (RTO) d'un temporisateur TON ?",
          "en": "What distinguishes a retentive (RTO) timer from a TON timer?"
        },
        "choix": {
          "fr": [
            "Il retarde la désactivation de sa sortie",
            "Il conserve le temps accumulé quand son entrée devient fausse, jusqu'à une remise à zéro (RES)",
            "Il compte les impulsions de son entrée",
            "Il se remet à zéro dès que son entrée devient fausse"
          ],
          "en": [
            "It delays the deactivation of its output",
            "It keeps its accumulated time when its input becomes false, until a reset (RES)",
            "It counts the pulses of its input",
            "It resets to zero as soon as its input becomes false"
          ]
        },
        "reponse": 1,
        "complexite": 3,
        "explication": {
          "fr": "Le RTO garde son temps accumulé même si l'entrée s'interrompt ; il faut une instruction de remise à zéro. Le TON, lui, se remet à zéro dès que son entrée devient fausse.",
          "en": "The RTO keeps its accumulated time even if the input is interrupted; a reset instruction is required. The TON, in contrast, resets to zero as soon as its input becomes false."
        }
      },
      {
        "question": {
          "fr": "Qu'est-ce que le « chien de garde » (watchdog) d'un PLC ?",
          "en": "What is a PLC's \"watchdog\" timer?"
        },
        "choix": {
          "fr": [
            "Un capteur de présence de personnel",
            "Un compteur d'heures de fonctionnement",
            "Une minuterie qui place le PLC en défaut si le cycle de scrutation dépasse une durée limite",
            "Un logiciel antivirus"
          ],
          "en": [
            "A personnel presence sensor",
            "An hour-meter",
            "A timer that faults the PLC if the scan cycle exceeds a set time limit",
            "Antivirus software"
          ]
        },
        "reponse": 2,
        "complexite": 3,
        "explication": {
          "fr": "Il met les sorties dans un état sûr si le programme bloque.",
          "en": "It puts the outputs in a safe state if the program hangs."
        }
      },
      {
        "question": {
          "fr": "Quelle affirmation est correcte concernant le forçage (force) d'une entrée ou d'une sortie ?",
          "en": "Which statement is correct about forcing an input or output?"
        },
        "choix": {
          "fr": [
            "Il contourne la logique du programme et doit être autorisé, documenté et retiré rapidement",
            "Il est automatiquement annulé à chaque cycle",
            "Il ne fonctionne qu'en mode PROGRAM",
            "C'est sans risque et peut rester en place indéfiniment"
          ],
          "en": [
            "It bypasses the program logic and must be authorized, documented, and removed promptly",
            "It is automatically cancelled every cycle",
            "It only works in PROGRAM mode",
            "It is risk-free and can be left in place indefinitely"
          ]
        },
        "reponse": 0,
        "complexite": 2,
        "explication": {
          "fr": "Le forçage contourne les verrouillages et peut causer des mouvements inattendus.",
          "en": "Forcing bypasses interlocks and can cause unexpected motion."
        }
      },
      {
        "question": {
          "fr": "Pour réaliser une fonction de sécurité comme l'arrêt d'urgence, que doit-on utiliser ?",
          "en": "To implement a safety function such as emergency stop, what must be used?"
        },
        "choix": {
          "fr": [
            "Un relais ou un automate de sécurité certifié, selon le niveau de performance requis (ISO 13849)",
            "Un PLC standard suffit toujours",
            "Un VFD sans fonction de sécurité",
            "Un HMI"
          ],
          "en": [
            "A certified safety relay or safety controller, per the required performance level (ISO 13849)",
            "A standard PLC is always sufficient",
            "A VFD with no safety function",
            "An HMI"
          ]
        },
        "reponse": 0,
        "complexite": 3,
        "explication": {
          "fr": "Relais ou automate de sécurité, niveau PL selon ISO 13849.",
          "en": "A safety relay or safety controller, PL level per ISO 13849."
        }
      },
      {
        "question": {
          "fr": "Dans un système à deux pompes, quel est le but de la logique d'alternance (lead/lag) programmée dans le PLC ?",
          "en": "In a two-pump system, what is the purpose of the lead/lag alternation logic programmed in the PLC?"
        },
        "choix": {
          "fr": [
            "Répartir l'usure entre les pompes et assurer une relève en cas de défaut",
            "Faire fonctionner toujours la même pompe",
            "Éliminer le besoin d'un clapet anti-retour",
            "Augmenter la pression maximale"
          ],
          "en": [
            "Share the wear between the pumps and provide backup in case of a fault",
            "Always run the same pump",
            "Eliminate the need for a check valve",
            "Increase the maximum pressure"
          ]
        },
        "reponse": 0,
        "complexite": 2,
        "explication": {
          "fr": "Répartition de l'usure et relève automatique.",
          "en": "Wear distribution and automatic backup."
        }
      }
    ]
  },
  {
    "id": "hmi",
    "numero": 9,
    "titre": {
      "fr": "Interfaces opérateur (HMI)",
      "en": "Human-Machine Interfaces (HMI)"
    },
    "questions": [
      {
        "question": {
          "fr": "Concernant l'arrêt d'urgence d'une machine équipée d'une HMI, quelle affirmation est correcte ?",
          "en": "Regarding the emergency stop of a machine equipped with an HMI, which statement is correct?"
        },
        "choix": {
          "fr": [
            "L'arrêt d'urgence doit être câblé dans un circuit de sécurité indépendant de l'HMI",
            "Il n'est requis qu'au-delà de 15 HP",
            "Un bouton d'arrêt d'urgence à l'écran suffit",
            "Il peut être programmé uniquement dans un PLC standard"
          ],
          "en": [
            "The emergency stop must be hardwired into a safety circuit independent of the HMI",
            "It is only required above 15 HP",
            "An on-screen emergency stop button is enough",
            "It can only be programmed in a standard PLC"
          ]
        },
        "reponse": 0,
        "complexite": 2,
        "explication": {
          "fr": "Dispositif physique câblé (CSA Z432, ISO 13850).",
          "en": "A hardwired physical device (CSA Z432, ISO 13850)."
        }
      },
      {
        "question": {
          "fr": "Quel est le rôle principal d'une HMI ?",
          "en": "What is the main role of an HMI?"
        },
        "choix": {
          "fr": [
            "Alimenter les moteurs",
            "Permettre à l'opérateur de visualiser le procédé et d'envoyer des commandes",
            "Exécuter la logique de commande à la place du PLC",
            "Remplacer le sectionneur principal"
          ],
          "en": [
            "Power the motors",
            "Let the operator view the process and send commands",
            "Execute the control logic instead of the PLC",
            "Replace the main disconnect switch"
          ]
        },
        "reponse": 1,
        "complexite": 1,
        "explication": {
          "fr": "La logique de commande reste dans le PLC.",
          "en": "The control logic stays in the PLC."
        }
      },
      {
        "question": {
          "fr": "Lequel de ces protocoles est couramment utilisé pour la communication entre une HMI et un PLC ?",
          "en": "Which of these protocols is commonly used for communication between an HMI and a PLC?"
        },
        "choix": {
          "fr": [
            "Modbus TCP",
            "HDMI",
            "DNS",
            "SMTP"
          ],
          "en": [
            "Modbus TCP",
            "HDMI",
            "DNS",
            "SMTP"
          ]
        },
        "reponse": 0,
        "complexite": 1,
        "explication": {
          "fr": "Modbus TCP, EtherNet/IP, PROFINET.",
          "en": "Modbus TCP, EtherNet/IP, PROFINET."
        }
      },
      {
        "question": {
          "fr": "Lors de la configuration d'une HMI, que faut-il sélectionner pour qu'elle communique avec un PLC ?",
          "en": "When configuring an HMI, what must be selected so it communicates with a PLC?"
        },
        "choix": {
          "fr": [
            "La couleur de l'écran",
            "Le pilote de communication correspondant à la marque et au protocole du PLC",
            "La puissance du moteur",
            "La langue de l'opérateur"
          ],
          "en": [
            "The screen color",
            "The communication driver matching the PLC's brand and protocol",
            "The motor's power rating",
            "The operator's language"
          ]
        },
        "reponse": 1,
        "complexite": 2,
        "explication": {
          "fr": "Le pilote doit correspondre au protocole et à la famille du PLC.",
          "en": "The driver must match the PLC's protocol and family."
        }
      },
      {
        "question": {
          "fr": "Un PLC a l'adresse IP 192.168.1.10 avec un masque 255.255.255.0. Quelle adresse peut-on donner à l'HMI pour qu'elle communique directement avec lui ?",
          "en": "A PLC has IP address 192.168.1.10 with a 255.255.255.0 mask. What address can be given to the HMI so it communicates with it directly?"
        },
        "choix": {
          "fr": [
            "192.168.2.10",
            "10.0.0.10",
            "192.168.1.10 (la même)",
            "192.168.1.11"
          ],
          "en": [
            "192.168.2.10",
            "10.0.0.10",
            "192.168.1.10 (the same)",
            "192.168.1.11"
          ]
        },
        "reponse": 3,
        "complexite": 3,
        "explication": {
          "fr": "Mêmes trois premiers octets, adresse différente.",
          "en": "Same first three octets, different address."
        }
      },
      {
        "question": {
          "fr": "Dans une HMI, qu'est-ce qu'un « tag » ?",
          "en": "In an HMI, what is a \"tag\"?"
        },
        "choix": {
          "fr": [
            "Une image de fond d'écran",
            "Une étiquette imprimée sur le panneau",
            "Une variable liée à une adresse ou une donnée du PLC",
            "Un mot de passe opérateur"
          ],
          "en": [
            "A background image",
            "A label printed on the panel",
            "A variable linked to a PLC address or data point",
            "An operator password"
          ]
        },
        "reponse": 2,
        "complexite": 1,
        "explication": {
          "fr": "Il relie un objet graphique à une donnée du PLC.",
          "en": "It links a graphic object to a PLC data point."
        }
      },
      {
        "question": {
          "fr": "Quelle est la bonne pratique pour démarrer une pompe à partir d'un bouton de l'HMI ?",
          "en": "What is good practice for starting a pump from an HMI button?"
        },
        "choix": {
          "fr": [
            "Forcer la sortie dans le PLC",
            "Écrire un bit de commande que le PLC traite avec ses verrouillages",
            "Écrire directement sur la sortie physique du démarreur",
            "Envoyer un courriel au technicien"
          ],
          "en": [
            "Force the output in the PLC",
            "Write a command bit that the PLC processes through its interlocks",
            "Write directly to the starter's physical output",
            "Send an email to the technician"
          ]
        },
        "reponse": 1,
        "complexite": 3,
        "explication": {
          "fr": "Le PLC applique ses verrouillages avant d'activer la sortie.",
          "en": "The PLC applies its interlocks before activating the output."
        }
      },
      {
        "question": {
          "fr": "Pour une commande de marche par à-coups (jog) sur l'HMI, quel type de bouton faut-il utiliser ?",
          "en": "For a jog (inching) command on the HMI, what type of button should be used?"
        },
        "choix": {
          "fr": [
            "Un voyant",
            "Un champ de saisie numérique",
            "Un bouton à maintien (bascule)",
            "Un bouton momentané, actif seulement pendant l'appui"
          ],
          "en": [
            "An indicator light",
            "A numeric entry field",
            "A maintained (toggle) button",
            "A momentary button, active only while pressed"
          ]
        },
        "reponse": 3,
        "complexite": 2,
        "explication": {
          "fr": "Le mouvement s'arrête dès que le doigt se retire.",
          "en": "Motion stops as soon as the finger is lifted."
        }
      },
      {
        "question": {
          "fr": "Pourquoi ajoute-t-on une demande de confirmation avant certaines actions sur l'HMI ?",
          "en": "Why add a confirmation prompt before certain actions on the HMI?"
        },
        "choix": {
          "fr": [
            "Pour ralentir l'opérateur inutilement",
            "Pour réduire le trafic réseau",
            "Pour éviter une action accidentelle aux conséquences importantes",
            "Parce que le PLC l'exige toujours"
          ],
          "en": [
            "To needlessly slow down the operator",
            "To reduce network traffic",
            "To prevent an accidental action with significant consequences",
            "Because the PLC always requires it"
          ]
        },
        "reponse": 2,
        "complexite": 1,
        "explication": {
          "fr": "Réduit les erreurs de manipulation sur écran tactile.",
          "en": "Reduces handling errors on a touchscreen."
        }
      },
      {
        "question": {
          "fr": "Quelle mesure empêche un opérateur d'entrer une consigne de pression dangereuse sur l'HMI ?",
          "en": "What measure prevents an operator from entering a dangerous pressure setpoint on the HMI?"
        },
        "choix": {
          "fr": [
            "Aucune, l'opérateur est responsable",
            "Définir des limites minimale et maximale sur le champ de saisie",
            "Afficher la consigne en rouge",
            "Masquer la consigne"
          ],
          "en": [
            "None, the operator is responsible",
            "Setting minimum and maximum limits on the entry field",
            "Displaying the setpoint in red",
            "Hiding the setpoint"
          ]
        },
        "reponse": 1,
        "complexite": 1,
        "explication": {
          "fr": "Les limites empêchent les consignes hors plage.",
          "en": "Limits prevent out-of-range setpoints."
        }
      },
      {
        "question": {
          "fr": "Pourquoi configure-t-on des niveaux d'accès utilisateurs sur une HMI ?",
          "en": "Why configure user access levels on an HMI?"
        },
        "choix": {
          "fr": [
            "Pour accélérer la communication avec le PLC",
            "Pour augmenter la résolution de l'écran",
            "Pour empêcher la modification des paramètres critiques par du personnel non autorisé",
            "Pour réduire la consommation électrique"
          ],
          "en": [
            "To speed up communication with the PLC",
            "To increase screen resolution",
            "To prevent critical parameters from being changed by unauthorized personnel",
            "To reduce power consumption"
          ]
        },
        "reponse": 2,
        "complexite": 1,
        "explication": {
          "fr": "Protège consignes, réglages PID et paramètres de sécurité.",
          "en": "Protects setpoints, PID tuning, and safety parameters."
        }
      },
      {
        "question": {
          "fr": "Selon les principes d'HMI haute performance (ISA-101), comment utiliser les couleurs ?",
          "en": "According to high-performance HMI principles (ISA-101), how should colors be used?"
        },
        "choix": {
          "fr": [
            "Utiliser des fonds neutres (gris) et réserver les couleurs vives aux alarmes et états anormaux",
            "Utiliser des animations 3D pour chaque équipement",
            "Utiliser le plus de couleurs vives possible",
            "Utiliser le rouge pour tous les équipements en marche"
          ],
          "en": [
            "Use neutral (gray) backgrounds and reserve bright colors for alarms and abnormal states",
            "Use 3D animations for every piece of equipment",
            "Use as many bright colors as possible",
            "Use red for all running equipment"
          ]
        },
        "reponse": 0,
        "complexite": 2,
        "explication": {
          "fr": "Les anomalies ressortent immédiatement.",
          "en": "Abnormal conditions stand out immediately."
        }
      },
      {
        "question": {
          "fr": "Quelle structure de navigation recommande-t-on pour une HMI ?",
          "en": "What navigation structure is recommended for an HMI?"
        },
        "choix": {
          "fr": [
            "Créer un écran par tag",
            "Aller d'une vue d'ensemble du procédé vers des écrans de plus en plus détaillés",
            "Classer les écrans par ordre alphabétique",
            "Mettre toute l'information sur un seul écran"
          ],
          "en": [
            "Create one screen per tag",
            "Go from an overview of the process to increasingly detailed screens",
            "Sort screens alphabetically",
            "Put all information on a single screen"
          ]
        },
        "reponse": 1,
        "complexite": 1,
        "explication": {
          "fr": "Hiérarchie : vue d'ensemble vers détail.",
          "en": "Hierarchy: overview down to detail."
        }
      },
      {
        "question": {
          "fr": "Comment afficher une pression sur l'HMI pour l'opérateur ?",
          "en": "How should a pressure be displayed on the HMI for the operator?"
        },
        "choix": {
          "fr": [
            "En valeur mise à l'échelle avec son unité (ex. 65 psi)",
            "En pourcentage sans unité",
            "En mA seulement",
            "En valeur brute du convertisseur (0–4095)"
          ],
          "en": [
            "As the scaled value with its unit (e.g., 65 psi)",
            "As a percentage with no unit",
            "In mA only",
            "As the raw converter value (0–4095)"
          ]
        },
        "reponse": 0,
        "complexite": 1,
        "explication": {
          "fr": "Une valeur sans unité peut être mal interprétée. On affiche la valeur mise à l'échelle avec son unité (psi, gpm, °F).",
          "en": "A value with no unit can be misread. Display the scaled value with its unit (psi, gpm, °F)."
        }
      },
      {
        "question": {
          "fr": "Que signifie « acquitter » une alarme sur une HMI ?",
          "en": "What does it mean to \"acknowledge\" an alarm on an HMI?"
        },
        "choix": {
          "fr": [
            "Redémarrer le PLC",
            "Corriger automatiquement la cause du défaut",
            "Supprimer l'alarme de l'historique",
            "Confirmer que l'opérateur a pris connaissance de l'alarme"
          ],
          "en": [
            "Restart the PLC",
            "Automatically fix the cause of the fault",
            "Delete the alarm from the history",
            "Confirm that the operator is aware of the alarm"
          ]
        },
        "reponse": 3,
        "complexite": 2,
        "explication": {
          "fr": "L'alarme reste active tant que la cause persiste (ISA-18.2).",
          "en": "The alarm stays active as long as its cause persists (ISA-18.2)."
        }
      },
      {
        "question": {
          "fr": "Pourquoi attribue-t-on des priorités aux alarmes ?",
          "en": "Why are priorities assigned to alarms?"
        },
        "choix": {
          "fr": [
            "Ce n'est pas utile",
            "Pour rendre l'écran plus coloré",
            "Pour que l'opérateur traite d'abord les alarmes les plus critiques",
            "Pour réduire la taille du programme PLC"
          ],
          "en": [
            "It serves no purpose",
            "To make the screen more colorful",
            "So the operator handles the most critical alarms first",
            "To reduce the size of the PLC program"
          ]
        },
        "reponse": 2,
        "complexite": 1,
        "explication": {
          "fr": "Traiter d'abord les situations les plus graves.",
          "en": "Handle the most serious situations first."
        }
      },
      {
        "question": {
          "fr": "Qu'est-ce qu'une « avalanche d'alarmes » (alarm flood) ?",
          "en": "What is an \"alarm flood\"?"
        },
        "choix": {
          "fr": [
            "Une alarme de débordement de réservoir",
            "Un nombre d'alarmes trop élevé pour que l'opérateur puisse les traiter",
            "Une alarme sonore trop forte",
            "Une alarme qui ne s'affiche jamais"
          ],
          "en": [
            "A tank overflow alarm",
            "Too many alarms for the operator to handle",
            "An alarm sound that is too loud",
            "An alarm that never displays"
          ]
        },
        "reponse": 1,
        "complexite": 2,
        "explication": {
          "fr": "L'opérateur risque de manquer l'alarme importante.",
          "en": "The operator risks missing the important alarm."
        }
      },
      {
        "question": {
          "fr": "Pourquoi est-il important que l'historique des alarmes soit horodaté ?",
          "en": "Why is it important for the alarm history to be timestamped?"
        },
        "choix": {
          "fr": [
            "Pour reconstituer la séquence des événements lors d'une analyse de panne",
            "Pour afficher l'heure à l'opérateur",
            "Pour calculer le salaire des opérateurs",
            "Ce n'est pas nécessaire"
          ],
          "en": [
            "To reconstruct the sequence of events during a failure analysis",
            "To display the time to the operator",
            "To calculate operators' pay",
            "It is not necessary"
          ]
        },
        "reponse": 0,
        "complexite": 2,
        "explication": {
          "fr": "Permet de trouver la cause première d'un arrêt.",
          "en": "Helps find the root cause of a shutdown."
        }
      },
      {
        "question": {
          "fr": "À quoi sert un écran de tendances (trends) sur une HMI ?",
          "en": "What is a trend screen on an HMI used for?"
        },
        "choix": {
          "fr": [
            "À programmer le PLC",
            "À configurer l'adresse IP du VFD",
            "À afficher l'évolution d'une variable dans le temps",
            "À afficher uniquement les alarmes actives"
          ],
          "en": [
            "Programming the PLC",
            "Configuring the VFD's IP address",
            "Displaying how a variable changes over time",
            "Displaying only active alarms"
          ]
        },
        "reponse": 2,
        "complexite": 1,
        "explication": {
          "fr": "Aide au diagnostic et au réglage des boucles.",
          "en": "Helps with diagnostics and loop tuning."
        }
      },
      {
        "question": {
          "fr": "Dans une HMI, qu'est-ce qu'une « recette » ?",
          "en": "In an HMI, what is a \"recipe\"?"
        },
        "choix": {
          "fr": [
            "Un ensemble de paramètres enregistrés pouvant être chargés d'un seul coup",
            "Une liste de pièces de rechange",
            "Un historique d'alarmes",
            "Un manuel d'utilisation"
          ],
          "en": [
            "A set of saved parameters that can be loaded all at once",
            "A list of spare parts",
            "An alarm history",
            "A user manual"
          ]
        },
        "reponse": 0,
        "complexite": 1,
        "explication": {
          "fr": "Évite les erreurs de saisie lors d'un changement de production.",
          "en": "Avoids entry errors during a product changeover."
        }
      },
      {
        "question": {
          "fr": "À quoi sert un signal de vie (heartbeat) échangé entre l'HMI et le PLC ?",
          "en": "What is the purpose of a heartbeat signal exchanged between the HMI and the PLC?"
        },
        "choix": {
          "fr": [
            "Faire clignoter l'écran",
            "Synchroniser l'heure",
            "Mesurer la fréquence cardiaque de l'opérateur",
            "Détecter une perte de communication entre l'HMI et le PLC"
          ],
          "en": [
            "Make the screen blink",
            "Synchronize the clock",
            "Measure the operator's heart rate",
            "Detect a loss of communication between the HMI and the PLC"
          ]
        },
        "reponse": 3,
        "complexite": 3,
        "explication": {
          "fr": "Permet de réagir à une perte de communication.",
          "en": "Allows a response to a loss of communication."
        }
      },
      {
        "question": {
          "fr": "Une HMI a une face avant IP65. Qu'est-ce que cela signifie ?",
          "en": "An HMI has an IP65 front panel. What does that mean?"
        },
        "choix": {
          "fr": [
            "Antidéflagrante",
            "Aucune protection contre l'eau",
            "Submersible en permanence",
            "Étanche à la poussière et protégée contre les jets d'eau"
          ],
          "en": [
            "Explosion-proof",
            "No protection against water",
            "Permanently submersible",
            "Dust-tight and protected against water jets"
          ]
        },
        "reponse": 3,
        "complexite": 2,
        "explication": {
          "fr": "6 : poussière ; 5 : jets d'eau.",
          "en": "6: dust; 5: water jets."
        }
      },
      {
        "question": {
          "fr": "Quelle pratique de cybersécurité est recommandée pour une HMI accessible à distance ?",
          "en": "What cybersecurity practice is recommended for a remotely accessible HMI?"
        },
        "choix": {
          "fr": [
            "Changer les mots de passe par défaut et passer par un accès à distance sécurisé (VPN)",
            "Exposer l'HMI directement sur Internet",
            "Conserver les mots de passe par défaut pour faciliter le service",
            "Désactiver tous les comptes utilisateurs"
          ],
          "en": [
            "Change the default passwords and use secure remote access (VPN)",
            "Expose the HMI directly on the Internet",
            "Keep the default passwords to simplify servicing",
            "Disable all user accounts"
          ]
        },
        "reponse": 0,
        "complexite": 2,
        "explication": {
          "fr": "Principes IEC 62443 : mots de passe, segmentation, VPN.",
          "en": "IEC 62443 principles: passwords, segmentation, VPN."
        }
      },
      {
        "question": {
          "fr": "Pour un équipement livré à un client au Québec, en quelle langue l'interface HMI doit-elle être disponible ?",
          "en": "For equipment delivered to a customer in Quebec, in what language must the HMI interface be available?"
        },
        "choix": {
          "fr": [
            "La langue n'a aucune importance",
            "Uniquement avec des pictogrammes",
            "Uniquement en anglais",
            "En français, avec possibilité d'autres langues comme l'anglais"
          ],
          "en": [
            "Language does not matter",
            "Pictograms only",
            "English only",
            "French, with the option of other languages such as English"
          ]
        },
        "reponse": 3,
        "complexite": 2,
        "explication": {
          "fr": "Charte de la langue française ; une HMI bilingue sert aussi les anglophones.",
          "en": "Under Quebec's language charter; a bilingual HMI also serves English-speaking users."
        }
      },
      {
        "question": {
          "fr": "Pourquoi faut-il conserver une sauvegarde versionnée du projet HMI après chaque modification ?",
          "en": "Why keep a versioned backup of the HMI project after every change?"
        },
        "choix": {
          "fr": [
            "Pour réduire le nombre de tags",
            "Ce n'est pas nécessaire, l'HMI conserve tout",
            "Pour pouvoir restaurer l'application et savoir quelle version est installée chez le client",
            "Pour augmenter la vitesse de l'écran"
          ],
          "en": [
            "To reduce the number of tags",
            "It is not necessary, the HMI keeps everything",
            "To be able to restore the application and know which version is installed at the customer site",
            "To increase screen speed"
          ]
        },
        "reponse": 2,
        "complexite": 1,
        "explication": {
          "fr": "Restauration rapide et traçabilité des versions.",
          "en": "Fast restoration and version traceability."
        }
      }
    ]
  },
  {
    "id": "pid",
    "numero": 10,
    "titre": {
      "fr": "Régulation PID",
      "en": "PID Control"
    },
    "questions": [
      {
        "question": {
          "fr": "Que signifie l'acronyme PID ?",
          "en": "What does the acronym PID stand for?"
        },
        "choix": {
          "fr": [
            "Puissance, Isolation, Démarrage",
            "Programme, Interface, Données",
            "Proportionnel, Intégral, Dérivé",
            "Pression, Intensité, Débit"
          ],
          "en": [
            "Power, Isolation, Drive",
            "Program, Interface, Data",
            "Proportional, Integral, Derivative",
            "Pressure, Intensity, Discharge"
          ]
        },
        "reponse": 2,
        "complexite": 1,
        "explication": {
          "fr": "Les trois actions du régulateur : Proportionnelle, Intégrale et Dérivée.",
          "en": "The controller's three actions: Proportional, Integral, and Derivative."
        }
      },
      {
        "question": {
          "fr": "Dans une boucle de régulation de pression, que représente la variable de procédé (PV) ?",
          "en": "In a pressure control loop, what does the process variable (PV) represent?"
        },
        "choix": {
          "fr": [
            "La valeur mesurée par le transmetteur de pression",
            "La vitesse du moteur",
            "Le gain du régulateur",
            "La valeur désirée par l'opérateur"
          ],
          "en": [
            "The value measured by the pressure transmitter",
            "The motor speed",
            "The controller's gain",
            "The value desired by the operator"
          ]
        },
        "reponse": 0,
        "complexite": 1,
        "explication": {
          "fr": "La PV est la mesure réelle du procédé, ici la pression lue par le transmetteur.",
          "en": "The PV is the actual process measurement, here the pressure read by the transmitter."
        }
      },
      {
        "question": {
          "fr": "Que représente la consigne (SP) ?",
          "en": "What does the setpoint (SP) represent?"
        },
        "choix": {
          "fr": [
            "La sortie envoyée au VFD",
            "L'erreur maximale permise",
            "La valeur que l'on souhaite atteindre et maintenir",
            "La valeur mesurée"
          ],
          "en": [
            "The output sent to the VFD",
            "The maximum allowed error",
            "The value that is to be reached and maintained",
            "The measured value"
          ]
        },
        "reponse": 2,
        "complexite": 1,
        "explication": {
          "fr": "La consigne est la valeur cible, par exemple 65 psi.",
          "en": "The setpoint is the target value, for example 65 psi."
        }
      },
      {
        "question": {
          "fr": "Comment est définie l'erreur dans un régulateur PID ?",
          "en": "How is error defined in a PID controller?"
        },
        "choix": {
          "fr": [
            "L'écart entre la consigne et la mesure",
            "La somme de la consigne et de la sortie",
            "La différence entre deux sorties successives",
            "Le produit de la consigne et de la mesure"
          ],
          "en": [
            "The difference between the setpoint and the measurement",
            "The sum of the setpoint and the output",
            "The difference between two successive outputs",
            "The product of the setpoint and the measurement"
          ]
        },
        "reponse": 0,
        "complexite": 1,
        "explication": {
          "fr": "Erreur = SP − PV (ou PV − SP selon le sens d'action).",
          "en": "Error = SP − PV (or PV − SP, depending on the action direction)."
        }
      },
      {
        "question": {
          "fr": "Dans un surpresseur à vitesse variable, quelle est généralement la variable manipulée (sortie du PID) ?",
          "en": "On a variable-speed booster, what is generally the manipulated variable (PID output)?"
        },
        "choix": {
          "fr": [
            "La consigne de vitesse (fréquence) envoyée au VFD",
            "La température de l'eau",
            "La pression mesurée",
            "Le courant du transmetteur"
          ],
          "en": [
            "The speed (frequency) reference sent to the VFD",
            "The water temperature",
            "The measured pressure",
            "The transmitter current"
          ]
        },
        "reponse": 0,
        "complexite": 2,
        "explication": {
          "fr": "Le PID, dans le PLC ou le VFD, ajuste la vitesse de la pompe.",
          "en": "The PID, in the PLC or the VFD, adjusts the pump's speed."
        }
      },
      {
        "question": {
          "fr": "Comment agit le terme proportionnel (P) ?",
          "en": "How does the proportional (P) term act?"
        },
        "choix": {
          "fr": [
            "Il accumule l'erreur dans le temps",
            "Sa sortie est proportionnelle à l'erreur actuelle",
            "Il ne dépend pas de l'erreur",
            "Il réagit à la vitesse de variation de l'erreur"
          ],
          "en": [
            "It accumulates error over time",
            "Its output is proportional to the current error",
            "It does not depend on the error",
            "It reacts to the rate of change of the error"
          ]
        },
        "reponse": 1,
        "complexite": 1,
        "explication": {
          "fr": "Plus l'erreur est grande, plus la correction proportionnelle est grande.",
          "en": "The larger the error, the larger the proportional correction."
        }
      },
      {
        "question": {
          "fr": "Quel est le principal inconvénient d'un régulateur à action proportionnelle seule ?",
          "en": "What is the main drawback of a proportional-only controller?"
        },
        "choix": {
          "fr": [
            "Il ne peut pas commander un VFD",
            "Il laisse une erreur statique (écart permanent) en régime établi",
            "Il ne réagit jamais",
            "Il est toujours instable"
          ],
          "en": [
            "It cannot drive a VFD",
            "It leaves a steady-state (permanent) error once settled",
            "It never reacts",
            "It is always unstable"
          ]
        },
        "reponse": 1,
        "complexite": 2,
        "explication": {
          "fr": "Un régulateur P seul a besoin d'une erreur pour produire une sortie, d'où un écart résiduel.",
          "en": "A P-only controller needs an error to produce an output, hence a residual offset."
        }
      },
      {
        "question": {
          "fr": "Que se passe-t-il généralement si le gain proportionnel est trop élevé ?",
          "en": "What generally happens if the proportional gain is set too high?"
        },
        "choix": {
          "fr": [
            "La boucle oscille ou devient instable",
            "La réponse devient très lente",
            "L'erreur statique augmente",
            "La mesure devient plus précise"
          ],
          "en": [
            "The loop oscillates or becomes unstable",
            "The response becomes very slow",
            "The steady-state error increases",
            "The measurement becomes more accurate"
          ]
        },
        "reponse": 0,
        "complexite": 2,
        "explication": {
          "fr": "Un gain excessif provoque des oscillations autour de la consigne.",
          "en": "Excessive gain causes oscillation around the setpoint."
        }
      },
      {
        "question": {
          "fr": "Un régulateur a un gain proportionnel Kp = 2. Quelle est sa bande proportionnelle ?",
          "en": "A controller has a proportional gain Kp = 2. What is its proportional band?"
        },
        "choix": {
          "fr": [
            "50 %",
            "2 %",
            "200 %",
            "20 %"
          ],
          "en": [
            "50%",
            "2%",
            "200%",
            "20%"
          ]
        },
        "reponse": 0,
        "complexite": 3,
        "explication": {
          "fr": "Bande proportionnelle = 100 / Kp = 100 / 2 = 50 %.",
          "en": "Proportional band = 100 / Kp = 100 / 2 = 50%."
        }
      },
      {
        "question": {
          "fr": "Quel terme du PID élimine l'erreur statique ?",
          "en": "Which PID term eliminates the steady-state error?"
        },
        "choix": {
          "fr": [
            "Le terme intégral (I)",
            "Aucun terme",
            "Le terme dérivé (D)",
            "Le terme proportionnel (P)"
          ],
          "en": [
            "The integral term (I)",
            "No term does",
            "The derivative term (D)",
            "The proportional term (P)"
          ]
        },
        "reponse": 0,
        "complexite": 2,
        "explication": {
          "fr": "L'intégrale accumule l'erreur et corrige jusqu'à ce que la mesure atteigne la consigne.",
          "en": "The integral accumulates the error and keeps correcting until the measurement reaches the setpoint."
        }
      },
      {
        "question": {
          "fr": "Si l'on réduit le temps d'intégration (Ti, en secondes par répétition), l'action intégrale devient :",
          "en": "If the integral time (Ti, in seconds per repeat) is reduced, the integral action becomes:"
        },
        "choix": {
          "fr": [
            "Plus faible",
            "Plus forte et plus rapide",
            "Inchangée",
            "Nulle"
          ],
          "en": [
            "Weaker",
            "Stronger and faster",
            "Unchanged",
            "Zero"
          ]
        },
        "reponse": 1,
        "complexite": 3,
        "explication": {
          "fr": "Un Ti plus court rend l'intégrale plus agressive, avec un risque d'oscillation accru.",
          "en": "A shorter Ti makes the integral action more aggressive, with an increased risk of oscillation."
        }
      },
      {
        "question": {
          "fr": "Qu'est-ce que la saturation de l'intégrale (windup) ?",
          "en": "What is integral windup?"
        },
        "choix": {
          "fr": [
            "Un gain proportionnel nul",
            "Une panne du transmetteur",
            "Une coupure de communication",
            "L'accumulation excessive de l'intégrale quand la sortie est déjà au maximum, provoquant un fort dépassement"
          ],
          "en": [
            "A proportional gain of zero",
            "A transmitter failure",
            "A loss of communication",
            "Excessive buildup of the integral term when the output is already at its limit, causing a large overshoot"
          ]
        },
        "reponse": 3,
        "complexite": 3,
        "explication": {
          "fr": "Une fonction anti-windup limite l'accumulation quand la sortie est saturée (ex. pompe à 60 Hz).",
          "en": "An anti-windup function limits the buildup when the output is saturated (e.g., pump at 60 Hz)."
        }
      },
      {
        "question": {
          "fr": "À quoi réagit le terme dérivé (D) ?",
          "en": "What does the derivative (D) term respond to?"
        },
        "choix": {
          "fr": [
            "À la valeur de la consigne seulement",
            "À l'erreur accumulée",
            "À la vitesse de variation de l'erreur ou de la mesure",
            "Au temps de fonctionnement de la pompe"
          ],
          "en": [
            "The setpoint value only",
            "Accumulated error",
            "The rate of change of the error or the measurement",
            "The pump's run time"
          ]
        },
        "reponse": 2,
        "complexite": 2,
        "explication": {
          "fr": "Il anticipe l'évolution de la mesure et freine les variations rapides.",
          "en": "It anticipates how the measurement is trending and dampens rapid changes."
        }
      },
      {
        "question": {
          "fr": "Pourquoi utilise-t-on souvent peu ou pas d'action dérivée en régulation de pression ou de débit de pompe ?",
          "en": "Why is little or no derivative action often used in pump pressure or flow control?"
        },
        "choix": {
          "fr": [
            "Parce qu'elle est interdite par le code",
            "Parce qu'elle élimine l'erreur statique",
            "Parce qu'elle rend la boucle plus lente",
            "Parce qu'elle amplifie le bruit de mesure, fréquent sur ces signaux"
          ],
          "en": [
            "Because it is prohibited by code",
            "Because it eliminates steady-state error",
            "Because it slows down the loop",
            "Because it amplifies measurement noise, which is common on these signals"
          ]
        },
        "reponse": 3,
        "complexite": 3,
        "explication": {
          "fr": "Les signaux de pression et de débit sont bruités ; un PI est généralement suffisant.",
          "en": "Pressure and flow signals are noisy; a PI controller is usually sufficient."
        }
      },
      {
        "question": {
          "fr": "Quel type de régulateur est le plus couramment utilisé pour la pression d'un surpresseur ?",
          "en": "What type of controller is most commonly used for booster pressure?"
        },
        "choix": {
          "fr": [
            "P seul",
            "D seul",
            "PI",
            "Tout ou rien seulement"
          ],
          "en": [
            "P only",
            "D only",
            "PI",
            "On/off only"
          ]
        },
        "reponse": 2,
        "complexite": 2,
        "explication": {
          "fr": "Le PI élimine l'erreur statique sans amplifier le bruit comme le ferait l'action dérivée.",
          "en": "PI eliminates steady-state error without amplifying noise the way derivative action would."
        }
      },
      {
        "question": {
          "fr": "Pour maintenir une pression avec une pompe, la vitesse doit augmenter quand la pression baisse. Quel sens d'action faut-il configurer ?",
          "en": "To maintain pressure with a pump, speed must increase when pressure drops. What action direction must be configured?"
        },
        "choix": {
          "fr": [
            "Aucune, le sens n'a pas d'importance",
            "Action dérivée seulement",
            "Action inverse (la sortie augmente quand la mesure diminue)",
            "Action directe (la sortie augmente quand la mesure augmente)"
          ],
          "en": [
            "None, direction does not matter",
            "Derivative action only",
            "Reverse action (output increases as the measurement decreases)",
            "Direct action (output increases as the measurement increases)"
          ]
        },
        "reponse": 2,
        "complexite": 3,
        "explication": {
          "fr": "Un mauvais sens d'action pousse la pompe à fond ou l'arrête : erreur classique à la mise en service.",
          "en": "The wrong action direction drives the pump to full speed or stops it: a classic commissioning error."
        }
      },
      {
        "question": {
          "fr": "Que permet le transfert sans à-coup (bumpless) entre les modes manuel et automatique ?",
          "en": "What does bumpless transfer between manual and automatic modes provide?"
        },
        "choix": {
          "fr": [
            "De supprimer la consigne",
            "D'éviter un saut brusque de la sortie lors du changement de mode",
            "D'augmenter le gain automatiquement",
            "D'arrêter la pompe instantanément"
          ],
          "en": [
            "Removing the setpoint",
            "Avoiding a sudden output jump when switching modes",
            "Automatically increasing the gain",
            "Instantly stopping the pump"
          ]
        },
        "reponse": 1,
        "complexite": 2,
        "explication": {
          "fr": "La sortie reprend à la valeur courante, sans choc hydraulique ni mécanique.",
          "en": "The output resumes at its current value, with no hydraulic or mechanical shock."
        }
      },
      {
        "question": {
          "fr": "Qu'est-ce qui distingue une boucle fermée d'une boucle ouverte ?",
          "en": "What distinguishes a closed loop from an open loop?"
        },
        "choix": {
          "fr": [
            "Il n'y a aucune différence",
            "La boucle ouverte est toujours plus précise",
            "La boucle fermée n'a pas de capteur",
            "La boucle fermée utilise la mesure du procédé pour corriger la sortie (rétroaction)"
          ],
          "en": [
            "There is no difference",
            "The open loop is always more accurate",
            "The closed loop has no sensor",
            "The closed loop uses the process measurement to correct the output (feedback)"
          ]
        },
        "reponse": 3,
        "complexite": 1,
        "explication": {
          "fr": "La rétroaction permet de compenser les perturbations, comme une variation de demande.",
          "en": "Feedback allows compensation for disturbances, such as a change in demand."
        }
      },
      {
        "question": {
          "fr": "Qu'est-ce que le dépassement (overshoot) ?",
          "en": "What is overshoot?"
        },
        "choix": {
          "fr": [
            "Le temps de montée de la mesure",
            "Le dépassement de la consigne par la mesure lors d'un changement",
            "Une panne du VFD",
            "L'erreur statique"
          ],
          "en": [
            "The measurement's rise time",
            "The measurement exceeding the setpoint during a change",
            "A VFD failure",
            "The steady-state error"
          ]
        },
        "reponse": 1,
        "complexite": 1,
        "explication": {
          "fr": "Un fort dépassement indique souvent un réglage trop agressif.",
          "en": "A large overshoot often indicates tuning that is too aggressive."
        }
      },
      {
        "question": {
          "fr": "Dans une régulation en cascade, quel est le rôle de la boucle maîtresse ?",
          "en": "In a cascade control scheme, what is the role of the master loop?"
        },
        "choix": {
          "fr": [
            "Commander directement le moteur",
            "Désactiver l'action intégrale",
            "Remplacer le transmetteur",
            "Fournir la consigne de la boucle esclave"
          ],
          "en": [
            "Directly drive the motor",
            "Disable the integral action",
            "Replace the transmitter",
            "Provide the setpoint for the slave loop"
          ]
        },
        "reponse": 3,
        "complexite": 3,
        "explication": {
          "fr": "Ex. : une boucle de niveau fournit la consigne d'une boucle de débit plus rapide.",
          "en": "Example: a level loop provides the setpoint for a faster flow loop."
        }
      },
      {
        "question": {
          "fr": "Dans la méthode de réglage de Ziegler-Nichols en boucle fermée, que détermine-t-on ?",
          "en": "In the closed-loop Ziegler-Nichols tuning method, what is determined?"
        },
        "choix": {
          "fr": [
            "L'adresse IP du régulateur",
            "Le diamètre de la roue",
            "Le gain critique et la période d'oscillation",
            "La tension et le courant du moteur"
          ],
          "en": [
            "The controller's IP address",
            "The impeller diameter",
            "The critical gain and the oscillation period",
            "The motor's voltage and current"
          ]
        },
        "reponse": 2,
        "complexite": 3,
        "explication": {
          "fr": "On augmente le gain P jusqu'à une oscillation entretenue, puis on calcule P, I et D.",
          "en": "The P gain is increased until sustained oscillation occurs, then P, I, and D are calculated."
        }
      },
      {
        "question": {
          "fr": "Quelle est une démarche de réglage pratique d'une boucle PI sur le terrain ?",
          "en": "What is a practical field tuning approach for a PI loop?"
        },
        "choix": {
          "fr": [
            "Mettre tous les gains au maximum",
            "Changer tous les paramètres en même temps",
            "Régler uniquement l'action dérivée",
            "Commencer avec l'action P, ajouter l'intégrale progressivement et observer la réponse à des échelons de consigne sur la tendance"
          ],
          "en": [
            "Set all gains to maximum",
            "Change every parameter at the same time",
            "Tune only the derivative action",
            "Start with the P action, add the integral progressively, and watch the response to setpoint steps on the trend"
          ]
        },
        "reponse": 3,
        "complexite": 2,
        "explication": {
          "fr": "Modifier un paramètre à la fois et observer la réponse sur l'écran de tendances.",
          "en": "Change one parameter at a time and watch the response on the trend screen."
        }
      },
      {
        "question": {
          "fr": "Comment doit être la période d'exécution (échantillonnage) du PID par rapport à la dynamique du procédé ?",
          "en": "How should the PID's execution (sampling) period compare to the process dynamics?"
        },
        "choix": {
          "fr": [
            "Nettement plus rapide que le temps de réponse du procédé",
            "Sans importance",
            "Beaucoup plus lente que le procédé",
            "Égale à une heure"
          ],
          "en": [
            "Clearly faster than the process response time",
            "It does not matter",
            "Much slower than the process",
            "Equal to one hour"
          ]
        },
        "reponse": 0,
        "complexite": 3,
        "explication": {
          "fr": "Un PID exécuté trop lentement réagit en retard et peut rendre la boucle instable.",
          "en": "A PID that runs too slowly reacts late and can make the loop unstable."
        }
      },
      {
        "question": {
          "fr": "Le signal d'un transmetteur de débit est très bruité et fait osciller la vitesse de la pompe. Quelle mesure est appropriée ?",
          "en": "A flow transmitter's signal is very noisy and makes the pump speed oscillate. What is an appropriate measure?"
        },
        "choix": {
          "fr": [
            "Retirer le transmetteur",
            "Appliquer un filtrage au signal de mesure et vérifier le câblage et le blindage",
            "Augmenter l'action dérivée",
            "Augmenter le gain proportionnel"
          ],
          "en": [
            "Remove the transmitter",
            "Apply filtering to the measurement signal and check the wiring and shielding",
            "Increase the derivative action",
            "Increase the proportional gain"
          ]
        },
        "reponse": 1,
        "complexite": 2,
        "explication": {
          "fr": "Un filtre modéré et un bon blindage réduisent le bruit sans trop ralentir la boucle.",
          "en": "Moderate filtering and good shielding reduce noise without slowing the loop too much."
        }
      },
      {
        "question": {
          "fr": "Quel type de procédé bénéficie le plus de l'action dérivée ?",
          "en": "What type of process benefits the most from derivative action?"
        },
        "choix": {
          "fr": [
            "Un débit très bruité",
            "Un signal tout ou rien",
            "Une pression de pompe très rapide et bruitée",
            "Une température avec forte inertie thermique, comme un échangeur de chaleur"
          ],
          "en": [
            "A very noisy flow",
            "An on/off signal",
            "A very fast, noisy pump pressure",
            "A temperature with high thermal inertia, such as a heat exchanger"
          ]
        },
        "reponse": 3,
        "complexite": 3,
        "explication": {
          "fr": "Les procédés lents à forte inertie profitent de l'effet d'anticipation du terme D.",
          "en": "Slow, high-inertia processes benefit from the D term's anticipatory effect."
        }
      }
    ]
  },
  {
    "id": "soudure",
    "numero": 11,
    "titre": {
      "fr": "Soudure : méthode de travail et exécution",
      "en": "Welding: Work Method and Execution"
    },
    "questions": [
      {
        "question": {
          "fr": "Quel procédé de soudage est communément appelé « à la baguette » ou « stick » ?",
          "en": "Which welding process is commonly called \"stick\" welding?"
        },
        "choix": {
          "fr": [
            "SMAW (électrode enrobée)",
            "FCAW",
            "GMAW (MIG)",
            "GTAW (TIG)"
          ],
          "en": [
            "SMAW (shielded metal arc/stick electrode)",
            "FCAW",
            "GMAW (MIG)",
            "GTAW (TIG)"
          ]
        },
        "reponse": 0,
        "complexite": 1,
        "explication": {
          "fr": "SMAW (Shielded Metal Arc Welding) utilise une électrode enrobée consommable tenue dans un porte-électrode ; c'est le procédé « à la baguette ».",
          "en": "SMAW (Shielded Metal Arc Welding) uses a consumable coated electrode held in an electrode holder; it is the \"stick\" process."
        }
      },
      {
        "question": {
          "fr": "Quel procédé de soudage utilise un fil-électrode continu alimenté automatiquement et un gaz de protection externe ?",
          "en": "Which welding process uses a continuous electrode wire fed automatically along with an external shielding gas?"
        },
        "choix": {
          "fr": [
            "Soudage aux gaz (oxyacétylénique)",
            "GMAW (MIG)",
            "GTAW (TIG)",
            "SMAW"
          ],
          "en": [
            "Oxy-fuel (oxyacetylene) welding",
            "GMAW (MIG)",
            "GTAW (TIG)",
            "SMAW"
          ]
        },
        "reponse": 1,
        "complexite": 1,
        "explication": {
          "fr": "GMAW (Gas Metal Arc Welding, ou MIG) alimente un fil continu à travers une torche, protégé par un gaz externe (argon, CO2 ou un mélange).",
          "en": "GMAW (Gas Metal Arc Welding, or MIG) feeds a continuous wire through a gun, shielded by an external gas (argon, CO2, or a mixture)."
        }
      },
      {
        "question": {
          "fr": "En GTAW (TIG), quel type d'électrode est utilisé ?",
          "en": "In GTAW (TIG), what type of electrode is used?"
        },
        "choix": {
          "fr": [
            "Une électrode de tungstène non consommable",
            "Une électrode de carbone",
            "Une électrode enrobée consommable",
            "Un fil fourré consommable"
          ],
          "en": [
            "A non-consumable tungsten electrode",
            "A carbon electrode",
            "A consumable coated electrode",
            "A consumable flux-cored wire"
          ]
        },
        "reponse": 0,
        "complexite": 1,
        "explication": {
          "fr": "Le TIG utilise une électrode de tungstène non consommable ; le métal d'apport, s'il y a lieu, est ajouté séparément à la main.",
          "en": "TIG uses a non-consumable tungsten electrode; filler metal, if used, is added separately by hand."
        }
      },
      {
        "question": {
          "fr": "Que signifie le chiffre « 70 » dans la désignation d'électrode E7018 ?",
          "en": "What does the \"70\" mean in the electrode designation E7018?"
        },
        "choix": {
          "fr": [
            "L'ampérage recommandé",
            "Le diamètre de l'électrode en 1/70 po",
            "La résistance minimale à la traction du métal déposé, soit 70 000 psi",
            "Le pourcentage de carbone"
          ],
          "en": [
            "The recommended amperage",
            "The electrode diameter in 1/70 in.",
            "The minimum tensile strength of the deposited weld metal, i.e. 70,000 psi",
            "The carbon percentage"
          ]
        },
        "reponse": 2,
        "complexite": 2,
        "explication": {
          "fr": "Selon la classification AWS, les deux ou trois premiers chiffres indiquent la résistance minimale à la traction en milliers de psi : 70 = 70 000 psi.",
          "en": "Under the AWS classification, the first two or three digits indicate the minimum tensile strength in thousands of psi: 70 = 70,000 psi."
        }
      },
      {
        "question": {
          "fr": "Dans la même désignation E7018, que signifie le « 18 » ?",
          "en": "In the same designation E7018, what does the \"18\" mean?"
        },
        "choix": {
          "fr": [
            "Le type d'enrobage et la position de soudage permises, incluant un enrobage basique bas hydrogène",
            "Le courant maximal en ampères",
            "La température de préchauffage requise en °F",
            "Le diamètre en 1/18 po"
          ],
          "en": [
            "The coating type and permitted welding positions, including a low-hydrogen basic coating",
            "The maximum current in amps",
            "The required preheat temperature in °F",
            "The diameter in 1/18 in."
          ]
        },
        "reponse": 0,
        "complexite": 2,
        "explication": {
          "fr": "Le dernier groupe de chiffres précise le type d'enrobage et les positions de soudage permises ; le « 18 » indique un enrobage basique bas hydrogène, utilisable dans toutes les positions.",
          "en": "The last digit group specifies the coating type and permitted welding positions; \"18\" indicates a low-hydrogen basic coating, usable in all positions."
        }
      },
      {
        "question": {
          "fr": "Pourquoi les électrodes basses en hydrogène (comme le E7018) doivent-elles être conservées dans un four à électrodes (rod oven) ?",
          "en": "Why must low-hydrogen electrodes (such as E7018) be kept in a rod oven?"
        },
        "choix": {
          "fr": [
            "Ce n'est pas nécessaire si l'électrode est neuve",
            "Pour empêcher l'enrobage d'absorber l'humidité, qui peut causer de la fissuration à l'hydrogène dans la soudure",
            "Pour les garder chaudes et faciles à manipuler seulement",
            "Pour économiser de l'énergie à l'atelier"
          ],
          "en": [
            "It is not necessary if the electrode is new",
            "To prevent the coating from absorbing moisture, which can cause hydrogen cracking in the weld",
            "Only to keep them warm and easy to handle",
            "To save energy in the shop"
          ]
        },
        "reponse": 1,
        "complexite": 2,
        "explication": {
          "fr": "L'enrobage bas hydrogène est hygroscopique. L'humidité absorbée libère de l'hydrogène dans le bain de fusion, ce qui peut causer une fissuration sous le cordon, surtout sur l'acier à haute résistance.",
          "en": "The low-hydrogen coating is hygroscopic. Absorbed moisture releases hydrogen into the weld pool, which can cause underbead cracking, especially on higher-strength steel."
        }
      },
      {
        "question": {
          "fr": "En courant continu, que signifie « DCEP » (ou DC+) pour une électrode ?",
          "en": "On direct current, what does \"DCEP\" (or DC+) mean for an electrode?"
        },
        "choix": {
          "fr": [
            "L'électrode est branchée à la borne positive (polarité inversée), ce qui augmente généralement la pénétration",
            "Le courant alterne 60 fois par seconde",
            "L'électrode est branchée à la borne négative",
            "Aucune polarité n'est utilisée"
          ],
          "en": [
            "The electrode is connected to the positive terminal (reverse polarity), which generally increases penetration",
            "The current alternates 60 times per second",
            "The electrode is connected to the negative terminal",
            "No polarity is used"
          ]
        },
        "reponse": 0,
        "complexite": 2,
        "explication": {
          "fr": "DCEP (Direct Current Electrode Positive) branche l'électrode au pôle positif ; c'est le réglage habituel pour la plupart des électrodes enrobées, offrant une bonne pénétration.",
          "en": "DCEP (Direct Current Electrode Positive) connects the electrode to the positive pole; it is the usual setting for most coated electrodes, giving good penetration."
        }
      },
      {
        "question": {
          "fr": "Quelle position de soudage est désignée par le code « 3G » ?",
          "en": "Which welding position is designated by the code \"3G\"?"
        },
        "choix": {
          "fr": [
            "Position à plat",
            "Position au plafond",
            "Position horizontale",
            "Position verticale (soudure bout à bout)"
          ],
          "en": [
            "Flat position",
            "Overhead position",
            "Horizontal position",
            "Vertical position (groove weld)"
          ]
        },
        "reponse": 3,
        "complexite": 1,
        "explication": {
          "fr": "Pour les soudures bout à bout (groove) : 1G = à plat, 2G = horizontale, 3G = verticale, 4G = au plafond.",
          "en": "For groove welds: 1G = flat, 2G = horizontal, 3G = vertical, 4G = overhead."
        }
      },
      {
        "question": {
          "fr": "Sur un symbole de soudage, que représente un triangle plein placé sur la ligne de référence ?",
          "en": "On a welding symbol, what does a solid triangle placed on the reference line represent?"
        },
        "choix": {
          "fr": [
            "Une soudure bout à bout (groove)",
            "Une soudure par point",
            "Une soudure d'angle (fillet)",
            "Une soudure à la surface (surfaçage)"
          ],
          "en": [
            "A groove weld",
            "A spot weld",
            "A fillet weld",
            "A surfacing weld"
          ]
        },
        "reponse": 2,
        "complexite": 1,
        "explication": {
          "fr": "Le triangle est le symbole de base d'une soudure d'angle (fillet weld), la soudure la plus courante en fabrication de structures et de skids.",
          "en": "The triangle is the basic symbol for a fillet weld, the most common weld in structural and skid fabrication."
        }
      },
      {
        "question": {
          "fr": "Quelle norme encadre la qualification des soudeurs et des entreprises de soudage au Canada ?",
          "en": "Which standard governs the qualification of welders and welding companies in Canada?"
        },
        "choix": {
          "fr": [
            "ISO 9001",
            "CSA W47.1 (par l'entremise du Bureau canadien de soudage, BCS/CWB)",
            "ASME Section IX seulement",
            "AWS D1.1 seulement"
          ],
          "en": [
            "ISO 9001",
            "CSA W47.1 (administered through the Canadian Welding Bureau, CWB)",
            "ASME Section IX only",
            "AWS D1.1 only"
          ]
        },
        "reponse": 1,
        "complexite": 1,
        "explication": {
          "fr": "Au Canada, la certification des entreprises et de leurs soudeurs pour l'acier se fait selon CSA W47.1, généralement administrée par le Bureau canadien de soudage (BCS/CWB).",
          "en": "In Canada, company and welder certification for steel is done under CSA W47.1, usually administered by the Canadian Welding Bureau (CWB)."
        }
      },
      {
        "question": {
          "fr": "Qu'est-ce qu'une WPS (Welding Procedure Specification) ?",
          "en": "What is a WPS (Welding Procedure Specification)?"
        },
        "choix": {
          "fr": [
            "Un type d'électrode",
            "Un document qui précise les paramètres qualifiés pour souder un joint donné (procédé, électrode, courant, préchauffage, etc.)",
            "Le nom du soudeur assigné à une tâche",
            "Une facture de matériel de soudage"
          ],
          "en": [
            "A type of electrode",
            "A document specifying the qualified parameters for welding a given joint (process, electrode, current, preheat, etc.)",
            "The name of the welder assigned to a task",
            "An invoice for welding supplies"
          ]
        },
        "reponse": 1,
        "complexite": 2,
        "explication": {
          "fr": "La WPS décrit les variables essentielles qualifiées pour produire une soudure conforme ; le soudeur doit la suivre pour le joint en question.",
          "en": "The WPS describes the essential variables qualified to produce a code-compliant weld; the welder must follow it for that joint."
        }
      },
      {
        "question": {
          "fr": "Avant de commencer une soudure de production, pourquoi vérifie-t-on le fit-up (ajustement) et l'ouverture à la racine du joint ?",
          "en": "Before starting a production weld, why is fit-up and root opening of the joint checked?"
        },
        "choix": {
          "fr": [
            "Parce que le code l'exige seulement pour l'inspection visuelle finale",
            "Par habitude seulement, cela n'affecte pas la qualité",
            "Parce que cela détermine la couleur de la peinture",
            "Parce qu'un mauvais ajustement peut causer un manque de fusion, un excès de pénétration ou une soudure hors tolérance"
          ],
          "en": [
            "Because the code only requires it for final visual inspection",
            "Out of habit only; it does not affect quality",
            "Because it determines the paint color",
            "Because poor fit-up can cause lack of fusion, excessive penetration, or an out-of-tolerance weld"
          ]
        },
        "reponse": 3,
        "complexite": 2,
        "explication": {
          "fr": "Un ajustement et une ouverture à la racine conformes à la WPS sont essentiels pour obtenir une fusion complète sans souffler à travers le joint.",
          "en": "Fit-up and root opening consistent with the WPS are essential to achieve complete fusion without burning through the joint."
        }
      },
      {
        "question": {
          "fr": "Pourquoi préchauffe-t-on parfois l'acier avant de le souder ?",
          "en": "Why is steel sometimes preheated before welding?"
        },
        "choix": {
          "fr": [
            "Pour économiser du gaz de protection",
            "Pour réduire le taux de refroidissement, limiter la dureté de la zone affectée thermiquement et réduire le risque de fissuration à l'hydrogène",
            "Ce n'est jamais nécessaire sur l'acier au carbone",
            "Pour accélérer la soudure seulement"
          ],
          "en": [
            "To save shielding gas",
            "To reduce the cooling rate, limit hardness in the heat-affected zone, and reduce the risk of hydrogen cracking",
            "It is never necessary on carbon steel",
            "Only to speed up welding"
          ]
        },
        "reponse": 1,
        "complexite": 2,
        "explication": {
          "fr": "Le préchauffage ralentit le refroidissement, ce qui est particulièrement important sur les aciers plus épais ou à teneur en carbone plus élevée, afin de réduire le risque de fissuration.",
          "en": "Preheating slows the cooling rate, which is especially important on thicker or higher-carbon steels, to reduce the risk of cracking."
        }
      },
      {
        "question": {
          "fr": "Quelle méthode d'inspection non destructive détecte les défauts de surface, comme les fissures fines, sur un matériau non magnétique ?",
          "en": "Which nondestructive inspection method detects surface defects, such as fine cracks, on a non-magnetic material?"
        },
        "choix": {
          "fr": [
            "Les ultrasons (UT)",
            "La radiographie (RT)",
            "Le magnétoscopie (MT)",
            "Le ressuage (essai au liquide pénétrant, PT)"
          ],
          "en": [
            "Ultrasonic testing (UT)",
            "Radiography (RT)",
            "Magnetic particle testing (MT)",
            "Liquid penetrant testing (PT)"
          ]
        },
        "reponse": 3,
        "complexite": 1,
        "explication": {
          "fr": "Le ressuage (liquide pénétrant) révèle les défauts débouchant en surface sur presque tous les matériaux, y compris les aciers inoxydables et alliages non magnétiques.",
          "en": "Liquid penetrant testing reveals surface-breaking defects on almost any material, including stainless steel and non-magnetic alloys."
        }
      },
      {
        "question": {
          "fr": "Quelle méthode d'inspection non destructive détecte les défauts internes, comme le manque de fusion ou les inclusions, à l'intérieur d'une soudure ?",
          "en": "Which nondestructive inspection method detects internal defects, such as lack of fusion or inclusions, inside a weld?"
        },
        "choix": {
          "fr": [
            "Les ultrasons (UT) ou la radiographie (RT)",
            "Le test de dureté",
            "Le ressuage (PT) seulement",
            "L'inspection visuelle (VT) seulement"
          ],
          "en": [
            "Ultrasonic testing (UT) or radiography (RT)",
            "Hardness testing",
            "Liquid penetrant testing (PT) only",
            "Visual inspection (VT) only"
          ]
        },
        "reponse": 0,
        "complexite": 2,
        "explication": {
          "fr": "UT et RT permettent d'examiner le volume interne de la soudure, contrairement au VT et au PT qui se limitent à la surface.",
          "en": "UT and RT can examine the internal volume of a weld, unlike VT and PT, which are limited to the surface."
        }
      },
      {
        "question": {
          "fr": "Qu'est-ce que la porosité dans une soudure ?",
          "en": "What is porosity in a weld?"
        },
        "choix": {
          "fr": [
            "Une variation de couleur causée par la surchauffe",
            "Des fissures superficielles causées par un refroidissement trop rapide",
            "De petites cavités formées par des gaz emprisonnés dans le métal en fusion lors de la solidification",
            "Un excès de métal déposé au-dessus de la surface"
          ],
          "en": [
            "A color change caused by overheating",
            "Surface cracks caused by cooling too quickly",
            "Small cavities formed by gas trapped in the molten metal as it solidifies",
            "Excess metal deposited above the surface"
          ]
        },
        "reponse": 2,
        "complexite": 2,
        "explication": {
          "fr": "La porosité résulte de gaz (souvent dus à la contamination, l'humidité ou une protection gazeuse insuffisante) emprisonnés dans le cordon en train de se solidifier.",
          "en": "Porosity results from gas (often due to contamination, moisture, or insufficient shielding) trapped in the weld bead as it solidifies."
        }
      },
      {
        "question": {
          "fr": "Qu'est-ce que le manque de fusion (lack of fusion) ?",
          "en": "What is lack of fusion?"
        },
        "choix": {
          "fr": [
            "Une soudure trop convexe",
            "Une absence de liaison métallurgique entre le métal déposé et le métal de base, ou entre les passes",
            "Une soudure trop large",
            "Un excès de préchauffage"
          ],
          "en": [
            "A weld that is too convex",
            "An absence of metallurgical bonding between the deposited metal and the base metal, or between passes",
            "A weld that is too wide",
            "Excessive preheat"
          ]
        },
        "reponse": 1,
        "complexite": 3,
        "explication": {
          "fr": "Le manque de fusion est un défaut grave, souvent causé par une mauvaise technique, un ampérage insuffisant ou un mauvais angle de travail, qui réduit sérieusement la résistance du joint.",
          "en": "Lack of fusion is a serious defect, often caused by poor technique, insufficient amperage, or a bad work angle, which seriously reduces the joint's strength."
        }
      },
      {
        "question": {
          "fr": "Qu'est-ce que le sous-cutage (undercut) sur un cordon de soudure ?",
          "en": "What is undercut on a weld bead?"
        },
        "choix": {
          "fr": [
            "Une fissure au centre du cordon",
            "Une soudure trop convexe",
            "Une rainure creusée dans le métal de base le long du cordon, non remplie par le métal déposé",
            "Un excès de projections"
          ],
          "en": [
            "A crack at the center of the bead",
            "A weld that is too convex",
            "A groove cut into the base metal along the bead that is not filled by the deposited metal",
            "Excessive spatter"
          ]
        },
        "reponse": 2,
        "complexite": 2,
        "explication": {
          "fr": "Le sous-cutage est une entaille dans le métal de base adjacent au cordon ; il réduit l'épaisseur effective de la pièce et crée une concentration de contraintes.",
          "en": "Undercut is a notch in the base metal adjacent to the bead; it reduces the effective thickness of the part and creates a stress concentration."
        }
      },
      {
        "question": {
          "fr": "Quelle pratique aide à réduire la distorsion (déformation) causée par la chaleur de soudage sur un assemblage ?",
          "en": "What practice helps reduce distortion caused by welding heat on an assembly?"
        },
        "choix": {
          "fr": [
            "Utiliser le plus grand ampérage possible",
            "Souder toujours dans le même ordre, du même côté",
            "Souder le plus rapidement possible sans interruption",
            "Utiliser une séquence de soudage équilibrée, des brides de retenue et souder par intervalles (soudure en pas de pèlerin)"
          ],
          "en": [
            "Using the highest possible amperage",
            "Always welding in the same order, on the same side",
            "Welding as fast as possible without interruption",
            "Using a balanced welding sequence, restraining clamps or fixtures, and welding in short, spaced-out segments (skip welding)"
          ]
        },
        "reponse": 3,
        "complexite": 3,
        "explication": {
          "fr": "Une séquence équilibrée, des brides ou gabarits de retenue et le soudage par courtes sections espacées limitent l'accumulation de chaleur et la distorsion.",
          "en": "A balanced sequence, restraining clamps or fixtures, and welding short, spaced segments limit heat buildup and distortion."
        }
      },
      {
        "question": {
          "fr": "Pourquoi porte-t-on des lunettes de sécurité sous le masque de soudage, en plus de la teinte du masque ?",
          "en": "Why wear safety glasses under the welding helmet, in addition to the helmet's shaded lens?"
        },
        "choix": {
          "fr": [
            "Pour la mode seulement",
            "Ce n'est pas nécessaire si on porte des gants",
            "Pour se protéger des éclats et projections lors du meulage ou du piquage du laitier, même lorsque le masque est relevé",
            "Parce que le masque ne filtre pas les rayons UV"
          ],
          "en": [
            "For fashion only",
            "It is not necessary if gloves are worn",
            "To protect against sparks and debris while grinding or chipping slag, even when the helmet is flipped up",
            "Because the helmet does not filter UV rays"
          ]
        },
        "reponse": 2,
        "complexite": 1,
        "explication": {
          "fr": "Le masque protège des rayons de l'arc pendant la soudure, mais des lunettes de sécurité sont nécessaires en tout temps pour se protéger des particules lors du meulage, du piquage et du nettoyage.",
          "en": "The helmet protects against arc rays while welding, but safety glasses are needed at all times to protect against particles when grinding, chipping, and cleaning."
        }
      },
      {
        "question": {
          "fr": "Pourquoi installe-t-on des rideaux ou écrans de soudage autour d'une zone de travail ?",
          "en": "Why are welding curtains or screens set up around a work area?"
        },
        "choix": {
          "fr": [
            "Pour protéger les autres travailleurs à proximité contre le rayonnement de l'arc (coup d'arc aux yeux, brûlures)",
            "Pour empêcher la fumée de s'échapper",
            "Pour garder la chaleur à l'intérieur",
            "Ce n'est qu'une question d'esthétique"
          ],
          "en": [
            "To protect other nearby workers from arc radiation (arc flash to the eyes, burns)",
            "To keep smoke from escaping",
            "To keep the heat inside",
            "It is purely a matter of appearance"
          ]
        },
        "reponse": 0,
        "complexite": 2,
        "explication": {
          "fr": "Le rayonnement UV et infrarouge de l'arc peut blesser les yeux et la peau des personnes à proximité qui ne portent pas de protection ; les écrans limitent cette exposition.",
          "en": "UV and infrared radiation from the arc can injure the eyes and skin of nearby people who are not wearing protection; screens limit this exposure."
        }
      },
      {
        "question": {
          "fr": "Pourquoi la ventilation ou l'extraction de fumées est-elle importante lors du soudage, particulièrement sur des surfaces peintes ou galvanisées ?",
          "en": "Why is ventilation or fume extraction important when welding, particularly on painted or galvanized surfaces?"
        },
        "choix": {
          "fr": [
            "Parce que les fumées de soudage, et surtout celles du zinc ou de peintures, peuvent être dangereuses à respirer",
            "Ce n'est nécessaire qu'en TIG",
            "Parce que la fumée ralentit la vitesse de soudage",
            "Uniquement pour le confort du soudeur"
          ],
          "en": [
            "Because welding fumes, especially those from zinc or paint, can be hazardous to breathe",
            "It is only necessary for TIG",
            "Because fumes slow down the welding speed",
            "Only for the welder's comfort"
          ]
        },
        "reponse": 0,
        "complexite": 3,
        "explication": {
          "fr": "Les fumées métalliques, et en particulier l'oxyde de zinc dégagé en soudant de l'acier galvanisé, peuvent causer des effets néfastes sur la santé ; une ventilation ou une extraction locale est requise.",
          "en": "Metal fumes, particularly zinc oxide released when welding galvanized steel, can cause adverse health effects; ventilation or local extraction is required."
        }
      },
      {
        "question": {
          "fr": "Qu'est-ce qu'un permis de travail à chaud (hot work permit) ?",
          "en": "What is a hot work permit?"
        },
        "choix": {
          "fr": [
            "Un document confirmant la certification du soudeur",
            "Une note indiquant la température de préchauffage",
            "Une autorisation exigeant des vérifications préalables (matières combustibles, surveillance incendie) avant d'effectuer des travaux de soudage ou de coupage",
            "Un permis de conduire un chariot élévateur"
          ],
          "en": [
            "A document confirming the welder's certification",
            "A note indicating the preheat temperature",
            "An authorization requiring prior checks (combustible materials, fire watch) before performing welding or cutting work",
            "A license to operate a forklift"
          ]
        },
        "reponse": 2,
        "complexite": 2,
        "explication": {
          "fr": "Le permis de travail à chaud impose des mesures de sécurité (dégagement des combustibles, extincteur à proximité, surveillance incendie) avant et après les travaux impliquant une flamme ou des étincelles.",
          "en": "A hot work permit imposes safety measures (clearing combustibles, having an extinguisher nearby, fire watch) before and after work involving flame or sparks."
        }
      },
      {
        "question": {
          "fr": "Quel gaz de protection est le plus couramment utilisé en GMAW (MIG) pour souder de l'acier au carbone en fabrication générale ?",
          "en": "Which shielding gas is most commonly used in GMAW (MIG) for welding carbon steel in general fabrication?"
        },
        "choix": {
          "fr": [
            "De l'hélium pur",
            "De l'azote pur",
            "De l'argon pur",
            "Un mélange argon/CO2, ou du CO2 pur"
          ],
          "en": [
            "Pure helium",
            "Pure nitrogen",
            "Pure argon",
            "An argon/CO2 mixture, or pure CO2"
          ]
        },
        "reponse": 3,
        "complexite": 2,
        "explication": {
          "fr": "Un mélange argon/CO2 (souvent 75/25) ou du CO2 pur est couramment utilisé pour le MIG sur acier au carbone, offrant un bon compromis entre pénétration, projections et coût.",
          "en": "An argon/CO2 mixture (often 75/25) or pure CO2 is commonly used for MIG on carbon steel, offering a good balance of penetration, spatter, and cost."
        }
      },
      {
        "question": {
          "fr": "Sur un skid en acier, pourquoi nettoie-t-on soigneusement le laitier et les projections après chaque passe de soudure SMAW ?",
          "en": "On a steel skid, why is slag and spatter carefully cleaned after each SMAW weld pass?"
        },
        "choix": {
          "fr": [
            "Parce que le laitier est toxique au toucher",
            "Uniquement pour l'apparence esthétique",
            "Ce n'est pas nécessaire si la passe suivante est plus chaude",
            "Parce que le laitier emprisonné entre les passes peut causer des inclusions et un manque de fusion"
          ],
          "en": [
            "Because slag is toxic to the touch",
            "Only for appearance",
            "It is not necessary if the next pass is hotter",
            "Because slag trapped between passes can cause inclusions and lack of fusion"
          ]
        },
        "reponse": 3,
        "complexite": 1,
        "explication": {
          "fr": "Le laitier non retiré entre les passes peut être emprisonné dans la passe suivante, créant une inclusion de laitier et empêchant une fusion complète.",
          "en": "Slag not removed between passes can become trapped in the next pass, creating a slag inclusion and preventing complete fusion."
        }
      }
    ]
  }
];
