

var lang = [];

lang.alert_consent = 'You must tick the checkbox to continue with the study.'
lang.end_wait = 'Redirecting...'
lang.reject_message = 'Sorry, you need your device is not compatible with this experiment.<br> Please use a desktop or a laptop...';

// instruction slide
if (mobile_session) {
  var variable_text = "just touch them to send your response.";
} else {
  var variable_text = "activate them by pressing the left, down or middle arrow on your keyboard."
}
lang.welcome1_title = 'Welcome to the Image-Response association game';
lang.welcome1_box1 = "In this game, you will be presented with various images. " +
  "Each image is associated with only <b>one</b> correct response that you will have to discover by trial and error.";
lang.welcome1_box2 = 'The game will look like this:'
lang.welcome1_box3 = "You have three response buttons: " + variable_text;
lang.welcome1_box4 = "Your goal is to find the correct button for each image."
if (mobile_session) {
  lang.welcome1_arrowleft = '';
  lang.welcome1_arrowright = '';
  lang.welcome1_continue = "<b>Tap here to continue..</b>"
} else {
  lang.welcome1_arrowleft = '';
  lang.welcome1_arrowright = '';
  lang.welcome1_continue = "<b>Right arrow to continue...</b>"
}

// 
lang.welcome2_box1 = "The game will be divided in several blocks involving different categories of images. " +
  "<br>First, you will train in a block with only 2 images. <br>Later, during the main game, blocks may involve 2, 3, 4 or 5 images.";
lang.welcome2_box2 = "Blocks will change once you have learned the good responses for each image, so being attentive is key!"
lang.welcome2_box3 = "Four important things to keep in mind:" +
  "<br>-There is only ONE correct response per image." +
  "<br>-The correct response of each image NEVER changes within a block." +
  "<br>-The SAME response can be the correct one for different images within a block." +
  "<br>-You have only TWO seconds to give a response once images appear."


if (mobile_session) {
  lang.welcome2_continue = "<b>Tap here to train..</b>"
} else {
  lang.welcome2_continue = "<b>Right arrow to train...</b>"
}

//
lang.beforemain_box1 = "You are done with the training!"
lang.beforemain_box2 = "Start the main experiment whenever you are ready!"
lang.beforemain_box3 = "Four important things to keep in mind:" +
  "<br>-There is only ONE correct response per image." +
  "<br>-The correct response of each image NEVER changes within a block." +
  "<br>-The SAME response can be correct one for different images within a block." +
  "<br>-You have only TWO seconds to give a response once images appear."
if (mobile_session) {
  lang.beforemain_continue = "<b>Tap here to start..</b>"
} else {
  lang.beforemain_continue = "<b>Right arrow to start...</b>"
}

// 
lang.preblock_box1 = "You are about to start a new block."
lang.preblock_box2 = "Stay focused once you have started it! "
if (mobile_session) {
  lang.preblock_continue = "<b>Tap here to start..</b>"
} else {
  lang.preblock_continue = "<b>Right arrow to start...</b>"
}

//
lang.aftermain_title = "Congratulations, you are done with the main game!"
lang.aftermain_box1 = "Now you wil perform a final memory test (5 minutes)."
lang.aftermain_box2 = "Let's begin with the questions."
if (mobile_session) {
  lang.beforemain_continue = "<b>Tap here to start..</b>"
} else {
  lang.beforemain_continue = "<b>Right arrow to start...</b>"
}

// 
lang.post1_box1 = "Now, you will perform a first short memory test."
lang.post1_box2 = "You will again see all the images (3 times each) and you will simply have to remember what was the correct button during the main game!" +
  "<br>No feedback will be given regarding the accuracy of your responses."
if (mobile_session) {
  lang.post1_continue = "<b>Tap here to proceed..</b>"
} else {
  lang.post1_continue = "<b>Right arrow to proceed...</b>"
}


// 
lang.post2_box1 = "Good! It is now time for the (final) memory test. It will be much shorter than the first one."
lang.post2_box2 = "During the game, sometimes you were getting +1 points and sometimes you were getting +2 points.<br><br>In the next few minutes, you will see again all the images you have seen during the game." +
  "<br><br>You will have to tell whether you got: <br><b>Left</b> button+1 more often than +2" +
  "<br><b>Middle</b> button: +1 and +2 equally often <br><b>Right</b> button: +2 more often than plus one <br><br><br>Try your best to remember!";
if (mobile_session) {
  lang.post2_continue = "<b>Tap here to proceed..</b>"
} else {
  lang.post2_continue = "<b>Right arrow to proceed...</b>"
}


if (mobile_session) {
  lang.harvest_continue = "Tap anywhere to continue"
} else {
  lang.harvest_continue = "Press any key to continue"
}


// help message on prediction trial
if (mobile_session) {
  lang.helpmsg_1 = "Tap on the room you might see after opening the <b>";
} else {
  lang.helpmsg_1 = "Use the arrows to select the room you might see after opening the <b>";
}
lang.helpmsg_2 = " </b>door in the <b>";

// 
lang.end_wait = "Please wait, the data is being uploaded..."
lang.end_quit = "Thanks for your participation! <br> You can now close this window..."

if (mobile_session) {
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
  prompt: 'How many response buttons can you use?',
  buttons: ['2', '3', '4', '5']
},
{
  prompt: 'What is the goal of the game?',
  buttons: ['Telling which images you like', 'Responding always with the same button', 'Finding the correct button for each image']
},
{
  prompt: 'Choose the statement which is true?',
  buttons: ['Two images can have the same correct response', 'Sometimes two images will appear on the screen', 'The same image will never be repeated']
},
{
  prompt: 'How difficult was the experiment?',
  buttons: ["too easy", "easy", "balanced", "hard", "too hard"]
},
{
  prompt: 'What is the goal of this first memory test?',
  buttons: ['Respond only for specific categories', 'Remember the correct response for each image']
},
{
  prompt: 'What is the goal of this second memory test?',
  buttons: ['Remember the average points associated with each image', 'Respond only for specific categories']
},
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
    "Anti-Parkinsonians (example: L-DOPA, Selegiline)"
  ]
}

lang.drugs = {
  preamble: '                Are you consuming the following substances...                 ',
  labels: ["never", "sometimes", "prefer not to say", "often", "everyday"],
  questions: ["Caffeine", "Tobacco", "Alcohol", "Marijuana"]
}

lang.additional_questions = [{
  prompt: 'In a car, do you prefer to be the driver or the passenger?',
  buttons: ['driver, completely', 'driver, slighty', 'indifferent', 'passenger, slightly', 'passenger, completely']
},
{
  prompt: 'Do you prefer to inform yourself by surfing the Web or watching TV?', // inverted after _highnoise and _lownoise (first exp inverted:'_short')
  buttons: ["watching TV, completely", "watching TV, slightly", "indifferent", "surfing the Web, slighty", "surfing the web, completely"]
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
  prompt: 'Would you be agree to do it again another day?',
  buttons: ["no", "probably not", "I don't know", "probably", "certainly"]
},
]

lang.ftp_start = {
  divs: [
    {
      text: "Great. We will return to the learning game in a few minutes to test whether you can remember associations you have just learned.",
    },
    {
      text: "But for now, we will do a very simple 'Finger tapping' test.<br>In this test you will use 4 keys of your keyboard: the keys 1, 5, 6, and 0 located <u>above the letters</u> as indicated in blue in the image below (do not use the numeric pad)",
      image: "./FTP_assets/FTP_keyboardNumbers.png"
    },
    {
      text: "You will do 8 trials lasting 30s each. During each trial, you will use the <u>index finger</u> of your left <u>or</u> right hand. <br>Do not use both hands, nor any finger other than the index, as it would make the experiment invalid.<br>A <b>bip sound signals the end</b> of each trial, so you won't need to look at the screen.",
    },
    {
      text: "Depending on the trial, your <b>goal</b> will to <b>alternate as fast as possible</b> between the keys 0 and 1, or 5 and 6. Using either your left <u>or</u> right index finger.",
    },
  ],
  continue: 'Click here to see a short demo'
}

