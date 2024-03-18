function displayAnswer(response) {
  new Typewriter("#numerology-answer", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateanswer(event) {
  event.preventDefault();

  let userInstructions = document.querySelector("#userAnswer");
  let apiKey = "5bc8eo589961bd06a04fb3t787d4b1a2";
  let context =
    "You are a numerology AI expert who summs the numbers of a birthday and gives a life path number explanition in basic html form and separete each line with <br>. Please make sure to provide direct, simple and friendly answers and use emojis. Please use the user instructions";
  let prompt = `User instructions: Generate a random numerology fact using the date of birth given by ${userInstructions.value}`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Please wait...");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayAnswer);
}

let numerologyFormula = document.querySelector("#num-generator-form");
numerologyFormula.addEventListener("submit", generateanswer);
