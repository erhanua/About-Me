function startGame() {
  // Personalized welcome message
  let userName = prompt("What is your name?");
  alert("Welcome to our site" +userName);

  // Questions and their correct answers
  const questions = [
    "Is JavaScript a programming language? (yes/no)",
    "Is CSS a backend technology? (yes/no)",
    "Is HTML used for structuring web content? (yes/no)",
    "Is Python a frontend technology? (yes/no)",
    "Is Node.js runtime built on Chromes V8 JavaScript engine? (yes/no)",
  ];
  const correctAnswers = ["yes", "no", "yes", "no", "yes"];

  // Ask questions and validate answers
  for (let i = 0; i < questions.length; i++) {
    let userAnswer = prompt(questions[i]).toLowerCase();
    if (userAnswer === "y") userAnswer = "yes";
    if (userAnswer === "n") userAnswer = "no";

    // Check if the answer is correct
    if (userAnswer === correctAnswers[i]) {
      // console.log('Correct!'); // Uncomment for debugging
      alert("Correct!");
    } else {
      // console.log('Incorrect.'); // Uncomment for debugging
      alert("Incorrect.");
    }
  }

  // Final message
  alert("Thanks for participating, "+ userName + "We hope to see you again.");
}
