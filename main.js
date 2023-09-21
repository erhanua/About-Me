function startGame() {
  // Personalized welcome message
  let userName = prompt("What is your name?");
  alert("Welcome to our site, " + userName + "!");

  // Questions and their correct answers
  const questions = [
    "Which property in CSS is used to set the background color of an element? (background-color/color/border-color)",
    "Which HTML element is used to link an external CSS file? (link/script/style)",
    "Which JavaScript method is used to select an element by its ID? (getElementById/querySelector/selectElement)",
    "Which CSS property controls the text size? (font-size/text-size/font-weight)",
    "In HTML, which attribute is used to specify an input field is required? (required/mandatory/needed)",
    "Which of the following is not a CSS unit for font sizes? (em/rem/pxl)",
    "Guess the year when HTML5 was officially finalized and published:",
  ];

  const correctAnswers = [
    "background-color",
    "link",
    "getelementbyid",
    "font-size",
    "required",
    "pxl",
    "2014",
  ];

  let score = 0; // Track the user's correct answers

  // Ask questions and validate answers
  for (let i = 0; i < questions.length; i++) {
    let userAnswer = prompt(questions[i]).toLowerCase();

    // For the 7th question, give the user 4 attempts
    if (i === 6) {
      let attempts = 4; // Set the number of attempts to 4
      while (attempts > 0) {
        if (userAnswer === correctAnswers[i]) {
          alert("Correct!");
          score++;
          break;
        } else {
          attempts--;
          if (attempts > 0) {
            if (Number(userAnswer) > Number(correctAnswers[i])) {
              userAnswer = prompt(
                "Too high! Try again! You have " +
                  attempts +
                  " attempts left. " +
                  questions[i]
              ).toLowerCase();
            } else {
              userAnswer = prompt(
                "Too low! Try again! You have " +
                  attempts +
                  " attempts left. " +
                  questions[i]
              ).toLowerCase();
            }
          } else {
            alert("Incorrect. The correct answer was: " + correctAnswers[i]);
          }
        }
      }
      continue;
    }

    // Check if the answer is correct
    if (userAnswer === correctAnswers[i]) {
      alert("Correct!");
      score++;
    } else {
      alert("Incorrect.");
    }
  }

  // Final messages
  alert("You got " + score + "/7 questions correct.");
  alert(
    "Thanks for participating, " + userName + ". We hope to see you again."
  );
}
