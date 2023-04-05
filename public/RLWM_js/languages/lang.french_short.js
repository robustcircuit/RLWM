var getLanguage = function (mobile_version) {

  // lang.french.js
  var lang = [];

  if (mobile_version) {
    var variable_text = "vous pouvez <b>toucher</b> les portes pour les ouvrir.";
  } else {
    var variable_text = "vous pouvez utiliser les <b>flèches du clavier</b> pour ouvrir une des portes."
  }

  //expdef.strStates = ['kitchen', 'bathroom', 'livingroom'];
  //expdef.strActions = ['blue', 'yellow', 'pink'];
  expdef.strStates_lang = ['cuisine', 'salle de bain', 'salon'];
  expdef.strActions_lang = ['rose', 'jaune', 'bleue'];

  // instruction slide
  lang.welcome1_title = 'Bienvenue dans le jeu-expérience des "Maisons spéciales"';
  lang.welcome1_box1 = "Dans les moments qui vont suivre, vous explorerez deux maisons aux architectures spéciales." +
    "Chaque maison est composée de <b>3 salles</b> et de <b>3 portes</b>.";
  lang.welcome1_box2 = "Par exemple, si vous voyez ceci à l'écran..."
  lang.welcome1_box3 = "..cela signifie que vous êtes dans une " + expdef.strStates_lang[0] + " et que vous pouvez soit ouvrir une porte " + expdef.strActions_lang[0] + " ou une " +
    "porte " + expdef.strActions_lang[2] + ". Afin d'entrer dans la salle suivante," + variable_text
  if (mobile_version) {
    lang.welcome1_arrowleft = '';
    lang.welcome1_arrowright = '';
    lang.welcome1_continue = "<b>Appuyez ici pour commencer...</b>"
  } else {
    lang.welcome1_arrowleft = 'la flèche de gauche ouvre les portes de gauche';
    lang.welcome1_arrowright = 'la flèche de droite ouvre les portes de droite';
    lang.welcome1_continue = "<b>Flèche de droite pour commencer...</b>"

  }
  lang.welcome1_box4 = "Vous recevrez bientôt plus d'informations, mais commençons par voir à quoi ça ressemble.."

  // 
  lang.explicitrules_box1 = " Visuellement, les deux maisons sont identiques " +
    "Seule leur 'architecture' diffère: "
  lang.explicitrules_houseA = "Dans la maison A, peu importe quelle porte vous ouvrez: " +
    "<br>- la " + expdef.strStates_lang[1] + " mène au " + expdef.strStates_lang[2] +
    "<br>- le " + expdef.strStates_lang[2] + " mène à la " + expdef.strStates_lang[0] +
    "<br>- la " + expdef.strStates_lang[0] + " mène à la " + expdef.strStates_lang[1];
  lang.explicitrules_houseB = "Dans la maison B, peu importe où vous êtes: " +
    "<br>- la porte " + expdef.strActions_lang[1] + " mène à la " + expdef.strStates_lang[0] +
    "<br>- la porte " + expdef.strActions_lang[2] + " mène au " + expdef.strStates_lang[2] +
    "<br>- la porte " + expdef.strActions_lang[0] + " mène à la " + expdef.strStates_lang[1]
  lang.explicitrules_box2 = "N'écrivez pas ces règles, cela ne serait pas utile. <br> Qu'une porte apparaisse à droite ou à gauche n'a aucune importance. Vous recevrez bientôt plus d'information, mais pour l'instant, voyons comment le jeu fonctionne." +
    " Seule sa couleur compte!"
  if (mobile_version) {
    lang.explicitrules_continue = "<b>Appuyez ici pour continuer..</b>"
  } else {
    lang.explicitrules_continue = "<b>Flèche de droite pour continuer...</b>"
  }

  // 
  if (mobile_version) {
    variable_text = "<br>Sélectionnez une des deux salles possible en appuyant dessus."
  } else {
    variable_text = "<br>Utilisez les flèches de droite et gauche pour sélectionner la salle de votre choix."
  }
  lang.predictions_box1 = "Votre <b>but</b> sera de prédire la prochaine salle que vous pourriez voir."
  lang.predictions_box2 = ""
  lang.predictions_box3 = "Plus vous serez bon à ce jeu de prédiction, plus l'expérience sera courte!" +
    " telle porte dans telle salle. Plus vous serez bon à cet exercice et plus la tâche sera courte!"
  lang.predictions_legend = "Vous verrez donc parfois le mot 'Prédiction' s'afficher avant de voir l'écran suivant  → <br>" +
    "<br>C'est le jeu qui vous demande: " +
    "'Quelle serait la prochaine salle si vous aviez ouvert la porte rose dans la cuisine?'" +
    variable_text;
  lang.predictions_box4 = "Vous allez maintenant vous entrainer à cet exercice dans chaque maison."
  lang.predictions_continue = "<b>Flèche de droite pour commencer...</b>"
  if (mobile_version) {
    lang.predictions_continue = "<b>Appuyez ici pour commencer..</b>"

  } else {
    lang.predictions_continue = "<b>Flèche de droite pour commencer..</b>"
  }
  //
  lang.showrule_box1 = "Dans les essais à venir, vous allez explorer et donner vos prédictions pour cette maison:"
  if (mobile_version) {
    lang.showrule_continue = "<b>Appuyez ici pour commencer..</b>"
  } else {
    lang.showrule_continue = "<b>Flèche de droite pour commencer...</b>"
  }

  // 
  lang.final_box1 = "Super. Vous êtes maintenant presque prêt à commencer pour de vrai!"
  lang.final_box2 = "Les dernières choses à savoir sont les suivantes:" +
    "<br><br><b>1.</b> Le jeu changera parfois la maison sans vous prévenir: vous devrez détecter ce changement vous-mêmes!" +
    "<br><br><b>2.</b> Parfois, le jeu ne vous autorisera à n'ouvrir qu'une seule porte. Dans ce cas, sélectionnez l'unique porte qui s'affiche." +
    "<br><br><b>3.</b> Le jeu ne vous dira pas toujours si vos prédictions sont correctes, mais seulement 1 fois sur 2." +
    "<br><br><b>4.</b> Pour rendre les choses un peu plus difficiles, le jeu vous placera parfois dans une salle aléatoirement: vous pouvez donc voir la même salle se <b>répéter</b> ou être surpris même si la maison n'a pas changé!"
  lang.final_box3 = "Avant de commencer pour de bon, vous allez vous entrainer une dernière fois en conditions réelles. Essayez de détecter quand la maison change!";
  if (mobile_version) {
    lang.final_continue = "<b>Appuyez ici pour continuer..</b>"
  } else {
    lang.final_continue = "<b>Flèche de droite pour commencer...</b>"
  }

  // 
  lang.beforemain_box1 = "Vous êtes arrivés à la fin de l'entrainement!"
  lang.beforemain_box2 = "Pendant l'expérience principale, vous pourrez gagner ou perdre des points." +
    "Il y a deux types de points:<ul>" +
    "<li>Les points normaux associés aux retours positifs (verts) ou négatif (rouge) obtenus après vos prédictions.</li>" +
    "<li>Les points bonus associés aux retours cachés (blancs) ou négatif (rouge) obtenus après vos prédictions.</li></ul>";
  lang.beforemain_box3 = "Attention: vous pouvez perdre des points bonus durant l'exploration si:<ul>" +
    "<li>Vous ouvrez les portes trop lentement ou beaucoup trop rapidement.</li>" +
    "<li>Vous essayez d'ouvrir une porte qui n'est pas disponible.</li><ul>" +
    "Mais le jeu peut aussi vous offrir quelques points gratuits pour vous encourager."
  lang.beforemain_box4 = "La barre en bas de l'écran indique votre nombre de points et <b>l'expérience s'arrêtera dès que vous aurez rempli cette barre!</b><br>De temps en temps, vous pourrez récolter vos points bonus: c'est le meilleur moment pour faire une petite pause si vous en avez besoin!"
  if (mobile_version) {
    lang.beforemain_continue = "<b>Appuyez ici pour commencer..</b>"
  } else {
    lang.beforemain_continue = "<b>Flèche de droite pour commencer...</b>"
  }

  // 
  lang.prequestions_title = "Bravo, vous avez fini l'expérience principale."
  lang.prequestions_box1 = "Maintenant, il ne vous reste plus qu'à répondre à quelques questions (3 minutes)<br><br>Le jeu sortira ensuite automatiquement du mode plein écran."
  if (mobile_version) {
    lang.prequestions_continue = "<b>Appuyez ici pour continuer..</b>"
  } else {
    lang.prequestions_continue = "<b>Flèche de droite pour commencer...</b>"
  }

  //
  if (mobile_version) {
    lang.harvest_continue = "Appuyez n'importe ou pour continuer"
  } else {
    lang.harvest_continue = "Appuyez sur n'importe quelle touche pour continuer"
  }
  // 
  lang.end_wait = "Attendez une seconde, les données sont en cours d'enregistrement..."
  lang.end_quit = "Merci beaucoup, vous pouvez à présent quitter cette page!"

  // 
  if (mobile_version) {
    lang.fullscreen_msg = "L'experience va maintenant passer en mode plein écran, lorsque vous aurez cliqué sur le bouton ci-dessous!" +
      "<br>Orientez s'il vous plait votre appareil <b>horizontalement<b> (paysage).<br>" +
      "Pour optimiser la qualité des données, nous vous demandons d'éviter de sortir du mode plein écran jusqu'à la fin de l'expérience.<br>"
    lang.fullscreen_continue = "Appuyez ici pour ontinuer";
  } else {
    lang.fullscreen_msg = "L'experience va maintenant passer en mode plein écran, lorsque vous aurez cliqué sur le bouton ci-dessous!" +
      "<br>Vous pouvez sortir à tout moment du mode plein écran en appuyant sur la touche F11 ou ESC puis y retourner en appuyant sur la touche F11 également.<br>" +
      "Cependant, pour optimiser la qualité des données, nous vous demandons d'éviter de sortir du mode plein écran jusqu'à la fin de l'expérience.<br>"
    lang.fullscreen_continue = "Cliquez ici pour continuer";
  }


  // misc
  lang.fixation_instructions = ['Exploration', 'Prediction']
  lang.exclusion_message = 'Vous devez utiliser un ordinateur (portable ou fixe) pour faire cette expérience.';
  lang.choicewarning_message = 'Choisissez la porte disponible.';
  lang.alert_consent = "Vous devez cochez la case pour commencer l'étude."
  lang.attn_check_tip = 'Cliquez sur une réponse (avec la souris) pour continuer..'

  // attention checks
  lang.attn_check = [{
      prompt: 'Combien de salles pouvez-vous visiter dans cette expérience?',
      buttons: ['2', '3', '4', '5']
    },
    {
      prompt: "Quel est le but de l'expérience?",
      buttons: ['Éviter certaines salles', 'Trouvez des objets spécifiques', 'Prédire correctement la prochaine salle']
    },
    {
      prompt: 'Quelle phrase est vraie?',
      buttons: ["La maison peut changer sans prévenir", 'Parfois, il y aura des object à collecter', "Parfois la couleur de l'arrière plan changera"]
    }
  ]

  lang.gender_stimulus = 'Quel est votre genre?'
  lang.gender_choices = ['Ne pas répondre', 'Femme', 'Homme', 'Non-binaire', 'Autre']
  lang.gender_continue = 'Sélectionnez une réponse pour continuer...';

  lang.age_prompt = 'Quel est votre age?    '
  lang.age_continue = 'Cliquez pour continuer...';


  // Final questionnaires

  // iLOC4
  lang.ieLOC = {
    preamble: "Les déclarations suivantes peuvent s'appliquer plus ou moins à vous. Dans quelle mesure pensez vous qu'elles s'appliquent à vous?",
    labels: ["pas du tout", "un peu", "plus ou moins", "assez", "complètement"],
    questions: ["Je suis mon propre patron.", "Si je travaille dur, je réussirai.",
      "Que ce soit au travail ou dans ma vie personnelle: ce que je fais est principalement déterminé par les autres",
      "Le destin contrecarre souvent mes plans."
    ]
  }


  lang.medications = {
    preamble: "Êtes-vous actuellement traité(e) des médicaments appartenant aux familles suivantes?",
    labels: ["non", "je préfère ne pas le dire<br>Je ne sais pas", "oui"],
    questions: ["Anxiolytiques (exemple: Xanax, Valium, Klonopin)", "Antidepresseurs (example: Zoloft, Celexa, Prozac)",
      "Antipsychotiques (example: Risperdal, Zyprexa, Abilify, Clozaril)", "Psychostimulants (example: Ritalin, Adderall)",
      "Anti-Parkinsonien (example: L-DOPA, Selegiline"
    ]
  }


  lang.drugs = {
    preamble: '                    Consommez-vous...                     ',
    labels: ["never", "sometimes", "prefer not to say", "often", "everyday"],
    questions: ["Caféine", "Tabac", "Alcool", "Cannabis"]
  }


  lang.additional_questions = [{
      prompt: 'En voiture, vous préférez être passager ou conducteur?',
      buttons: ['conducteur, complètement', 'conducteur, légèrement', 'peu importe', 'passager, légèrement', 'passenger, complètement']
    },
    {
      prompt: "Comment vous sentez-vous lorsque vous prenez l'avion?",
      buttons: ["Très détendu", "détendu", "indifférent", "anxieux", "très anxieux"]
    },
    {
      prompt: 'Si vous alliez au casino, vous préféreriez jouer au poker ou aux machines à sous?',
      buttons: ["machines à sous, complètement", "machines à sous, légèrement", "indifferent", "poker, légèrement", "poker, complètement"]
    },
    {
      prompt: "En général, diriez-vous que vous êtes plus doué(e) pour parler ou pour écouter?",
      buttons: ["parler, complètement", "parler, légèrement", "indifférent", "écouter, légèrement", "écouter, complètement"]
    }
  ]

  lang.additional_questions_v2 = [{
    prompt: 'En voiture, vous préférez être passager ou conducteur?',
    buttons: ['conducteur, complètement', 'conducteur, légèrement', 'peu importe', 'passager, légèrement', 'passenger, complètement']
  },
  {
    prompt: "Comment vous sentez-vous lorsque vous prenez l'avion?",
    buttons: ["Très détendu", "détendu", "indifférent", "anxieux", "très anxieux"]
  },
  {
    prompt: 'Si vous alliez au casino, vous préféreriez jouer au poker ou aux machines à sous?',
    buttons: ["machines à sous, complètement", "machines à sous, légèrement", "indifferent", "poker, légèrement", "poker, complètement"]
  },
  {
    prompt: "En général, diriez-vous que vous êtes plus doué(e) pour parler ou pour écouter?",
    buttons: ["parler, complètement", "parler, légèrement", "indifférent", "écouter, légèrement", "écouter, complètement"]
  }
]

  lang.feedback_questions = [{
      prompt: 'Globalement, quelle est votre impression par rapport à cette expérience?',
      buttons: ['très mauvaise', 'mauvaise', 'moyenne', 'bonne', 'très bonne']
    },
    {
      prompt: 'Et en ce qui concerne sa difficulté?',
      buttons: ["trop facile", "facile", "équilibrée", "difficile", "trop difficile"]
    },
    {
      prompt: 'Accepteriez-vous de la refaire dans le futur?',
      buttons: ["non", "probablement pas", "je ne sais pas", "probablement", "certainement"]
    },
  ]

  return lang;

}