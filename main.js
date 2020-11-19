// the array stores the answers (listOfAnswers)
// .onload is used executes the code immediately. I state what to execute with the function

const listOfAnswers = [
  "No Way!",
  "Yes",
  "Plain and simple: no.",
  "You're kidding, right",
];

window.onload = function () {
  let answerContainerParagraph = document.getElementById(
    "answerContainerParagraph"
  );
  let answer = document.getElementById("answer");
  let submitButton = document.getElementById("submitButton");
  let question = document.getElementById("question");

  submitButton.addEventListener("click", function () {
    if (question.value.length < 1) {
      alert("Enter a question!");
    } else {
      answerContainerParagraph.innerText = "";
      var num = Math.floor(Math.random() * Math.floor(listOfAnswers.length));
      answerContainerParagraph.innerText = listOfAnswers[num];
    }
  });
};
