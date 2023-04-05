// lang.english.js
var getLanguage = function (mobile_version) {

  var lang = [];

  // instruction slide
  if (mobile_version) {
    var variable_text = "you can <b>touch/tap</b> on the doors to open them.";
  } else {
    var variable_text = "you can use the <b>keyboard arrows</b> to open one of the doors."
  }
  lang.welcome1_title = 'Welcome to the "Special Houses" game-experiment';
  lang.welcome1_box1 = "In this game, you will explore two houses with special architectures. " +
    "Each house is composed of <b>3 rooms </b> and <b>3 doors</b>.";
  lang.welcome1_box2 = 'For example, if you see this on the screen...'
  lang.welcome1_box3 = "..it means that you are in a " + expdef.strStates[0] + " and that you can open either a " + expdef.strActions[0] + " or " +
    "a " + expdef.strActions[2] + " door. In order to go to the next room," + variable_text;
  lang.welcome1_box4 = "You will receive more information soon but first, let's see how this feels."
  if (mobile_version) {
    lang.welcome1_arrowleft = '';
    lang.welcome1_arrowright = '';
    lang.welcome1_continue = "<b>Tap here to start..</b>"
  } else {
    lang.welcome1_arrowleft = 'the left arrow opens any door on the left';
    lang.welcome1_arrowright = 'the right arrow opens any door on the right';
    lang.welcome1_continue = "<b>Right arrow to start...</b>"
  }

  // 
  lang.welcome2_box1 = "Great! <br><br> You have just explored the first house." +
    "<br><br>Now let's explore the second one...";
  lang.welcome2_box2 = "The only different between houses is the architecture. The colors of the doors and the rooms are the same!"
  lang.welcome2_box3 = "So, it is normal if you don't notice immediately the difference. Don't worry, more information will be given soon. "
  if (mobile_version) {
    lang.welcome2_continue = "<b>Tap here to start..</b>"
  } else {
    lang.welcome2_continue = "<b>Right arrow to start...</b>"
  }

  // 
  lang.explicitrules_box1 = "Now you have explored both houses. Did you notice the difference? " +
    "In fact, the 'architecture' of each house can be represented like this:"
  lang.explicitrules_houseA = "In house A, no matter which door you open: " +
    "<br>- the " + expdef.strStates[1] + " leads to the " + expdef.strStates[2] +
    "<br>- the " + expdef.strStates[2] + " leads to the " + expdef.strStates[0] +
    "<br>- the " + expdef.strStates[0] + " leads to the " + expdef.strStates[1];
  lang.explicitrules_houseB = "In house B, no matter where you are: " +
    "<br>- the " + expdef.strActions[1] + " door leads to the " + expdef.strStates[0] +
    "<br>- the " + expdef.strActions[2] + " door leads to the " + expdef.strStates[2] +
    "<br>- the " + expdef.strActions[0] + " door leads to the " + expdef.strStates[1]
  lang.explicitrules_box2 = "Do not write these rules, it will not help you much anyway. <br> Also: whether a door appears on the left or on the right side does not matter. Only its color matters."
  if (mobile_version) {
    lang.explicitrules_continue = "<b>Tap here to continue..</b>"
  } else {
    lang.explicitrules_continue = "<b>Right arrow to continue...</b>"
  }

  // 
  if (mobile_version) {
    variable_text = "<br>Select one of the possible rooms by touching it."
  } else {
    variable_text = "<br>Use the keyboard arrows to select one of the two possible rooms."
  }
  lang.predictions_box1 = "At this point, you are probably wondering: what is the <b>goal<b> of this experiment<b>?"
  lang.predictions_box2 = "It is actually quite simple.."
  lang.predictions_box3 = "From time to time, you will have to tell where you would arrive if you had opened a given" +
  "door in a given room.<br> The better you will be at this, the shorter the experiment! " +
  "<br><br> And the only way to do so is to... Explore!"
  lang.predictions_legend = "Sometimes, you will see the word 'Prediction' followed by a screen like this one       → <br><br>This is the game asking you: 'What would be the next room if you had opened the <b>pink</b> door of the kitchen?'" +
    variable_text;
  lang.predictions_box4 = "In the next few minutes, you will practice these predictions in each house."
  if (mobile_version) {
    lang.predictions_continue = "<b>Tap here to start..</b>"
    lang.predictions_back = "<b>Tap here to come back..</b>"

  } else {
    lang.predictions_continue = "<b>Right arrow to start...</b>"
    lang.predictions_back = "<b>Left arrow to come back...</b>"
  }

  //
  lang.showrule_box1 = "In the next trials, you will explore and make predictions in this house:"
  if (mobile_version) {
    lang.showrule_continue = "<b>Tap here to start..</b>"
  } else {
    lang.showrule_continue = "<b>Right arrow to start...</b>"
  }

  // 
  lang.final_box1 = "Great. You are now almost ready to start for real!"
  lang.final_box2 = "The last small things to know are the following:" +
    "<br><br><b>1.</b> The game will sometimes switch houses without telling you: you will have to detect this yourself!" +
    "<br><br><b>2.</b> The game will sometimes bring you in a random room to make things a bit more difficult. So, if things do not go as expected, it can be either because the house has really been switched or just because of this randomness." +
    "<br><br><b>3.</b> The game will sometimes only allow you to open one door. In this case, select the only door which appears on the screen." +
    "<br><br><b>4.</b> The game will not always tell you whether your predictions are correct or not (50% of feedback)."
  lang.final_box3 = "You will practice again a bit and then the real experiment will start. Try to detect when the house changes!"
  if (mobile_version) {
    lang.final_continue = "<b>Tap here to continue..</b>"
  } else {
    lang.final_continue = "<b>Right arrow to continue...</b>"
  }

  // 
  lang.beforemain_box1 = "You are (finally) done with the training!"
  lang.beforemain_box2 = "During the main experiment, you will be able to gain or lose points. There are two types of points:<ul>" +
    "<li>Normal points associated with positive (green) or negative (red) feedback during predictions.</li>" +
    "<li>Bonus points associated with the hidden (white) feedback during predictions.</li></ul>";
  lang.beforemain_box3 = "Beware: you can lose some bonus points during the exploration if:<ul>" +
    "<li>You are too slow or really too fast at opening doors.</li>" +
    "<li>You try to open a door which is unavailable.</li></ul>But the game may also grant you some extra bonus points to encourage you at times."
  lang.beforemain_box4 = "The bar at the bottom of the screen tells you how many points you have and <b>the experiment will stop when the bar reaches the end</b>.<br>From time to time, you will be able to 'harvest' your bonus points. That's the best moment to make short pauses, if you need to."
  if (mobile_version) {
    lang.beforemain_continue = "<b>Tap here to start..</b>"
  } else {
    lang.beforemain_continue = "<b>Right arrow to start...</b>"
  }

  // 
  lang.prequestions_title = "Congratulations, you are done with the main experiment."
  lang.prequestions_box1 = "Now, let's just answer a few questions (3 minutes). The game will then automatically exit fullscreen mode."
  if (mobile_version) {
    lang.prequestions_continue = "<b>Tap here to continue..</b>"
  } else {
    lang.prequestions_continue = "<b>Right arrow to continue...</b>"
  }

  if (mobile_version) {
    lang.harvest_continue = "Tap anywhere to continue"
  } else {
    lang.harvest_continue = "Press any key to continue"
  }

  // 
  lang.end_wait = "Please wait, the data is being uploaded..."
  lang.end_quit = "Thanks for your participation! <br> You can now close this window..."

  if (mobile_version) {
    lang.fullscreen_continue = "<b>Tap here to continue..</b>"
    lang.fullscreen_msg = "<p>The experiment will switch to full screen mode when you press the button below!" +
      "<br>Please rotate your device in the <b>landscape</b> orientation.<br><br>" +
      "To maximize the quality of the data, we would like to kindly ask you to not exit the fullscreen mode until the experiment finishes.<br><br></p>"
  } else {
    lang.fullscreen_continue = "<b>Click here to continue...</b>"
    lang.fullscreen_msg = "<p>The experiment will switch to full screen mode when you press the button below!" +
      "<br>You can exit the fullscreen mode at any time using the key F11 (or ESC), and return to it using F11 as well.<br><br>" +
      "However, to maximize the quality of the data, we would like to kindly ask you to not exit the fullscreen mode until the experiment finishes.<br><br></p>"
  }

  // misc
  lang.fixation_instructions = ['Exploration', 'Prediction']
  lang.exclusion_message = 'You must use a desktop/laptop computer to participate in this experiment.';
  lang.choicewarning_message = 'Select the door available.';
  lang.alert_consent = 'You must tick the checkbox to continue with the study.'

  lang.attn_check_tip = 'Click on a response to continue..'

  // attention checks
  lang.attn_check = [{
      prompt: 'How many rooms will you encounter in this experiment?',
      buttons: ['2', '3', '4', '5']
    },
    {
      prompt: 'What is the goal of the experiment?',
      buttons: ['Avoiding specific rooms', 'Finding objects in the houses', 'Predicting correctly the next room']
    },
    {
      prompt: 'Which statement is true?',
      buttons: ['Sometimes, only one door will be available', 'Sometimes, there will be objects to collect', 'Sometimes, the background color will change']
    }
  ]

  lang.gender_stimulus = 'What is your gender?'
  lang.gender_choices = ['Prefer not to say', 'Female', 'Male', 'Non-binary', 'Other']
  lang.gender_continue = 'Select a response to continue...';

  lang.age_prompt = 'What is your age?    '
  lang.age_continue = 'Click here to continue...';


  // Final questionnaires

  // iLOC4
  lang.ieLOC = {
    preamble: 'The following statements may apply more or less to you. To what extent do you think each statement applies or applied to you personally?',
    labels: ["not at all", "a bit", "somewhat", "mostly", "completely"],
    questions: ["I’m my own boss.", "If I work hard, I will succeed.",
      "Whether at work or in my private life: What I do is mainly determined by others",
      "Fate often gets in the way of my plans."
    ]
  }


  lang.medications = {
    preamble: 'Are you currently treated with one or more of the following medicines?',
    labels: ["no", "prefer not to say<br>I don't know", "yes"],
    questions: ["Antidepressants (example: Zoloft, Celexa, Prozac)", "Anxiolytics (example: Xanax, Valium, Klonopin)",
      "Antipsychotics (example: Risperdal, Zyprexa, Abilify, Clozaril)", "Psychostimulants (example: Ritalin, Adderall)",
      "Anti-Parkinsonian (example: L-DOPA, Selegiline"
    ]
  }

  lang.drugs = {
    preamble: '                     Are you consuming...                     ',
    labels: ["never", "sometimes", "prefer not to say", "often", "everyday"],
    questions: ["Caffeine", "Tobacco", "Alcohol"]
  }


  lang.additional_questions = [{
      prompt: 'In a car, do you prefer to be the driver or the passenger?',
      buttons: ['driver, completely', 'driver, slighty', 'indifferent', 'passenger, slightly', 'passenger, completely']
    },
    {
      prompt: 'When you take the plane, how do you feel?',
      buttons: ["very relax", "relax", "indifferent", "anxious", "very anxious"]
    },
    {
      prompt: 'In a casino, would you prefer to play poker or slot machine?',
      buttons: ["slot machine, completely", "slot machine, slightly", "indifferent", "poker, slightly", "poker, completely"]
    },
    {
      prompt: "In general, would you say that you are better at speaking or listening?",
      buttons: ["speaking, completely", "speaking, slightly", "indifferent", "listening, slightly", "listening, completely"]
    }
  ]

  lang.feedback_questions = [{
      prompt: 'Overall, how much did you like this experiment?',
      buttons: ['terrible', 'bad', 'intermediate', 'good', 'great']
    },
    {
      prompt: 'What about its difficulty?',
      buttons: ["too easy", "easy", "balanced", "hard", "too hard"]
    },
    {
      prompt: 'Would you be agree to do it again another day?',
      buttons: ["no", "probably not", "I don't know", "probably", "certainly"]
    },
  ]

  return lang;

}