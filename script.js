function generateanswer(event) {
  event.preventDefault();

  new Typewriter("#numerology-answer", {
    strings: ["The answer is going to be here"],
    autoStart: true,
    delay: 1,
      cursor: "",
  });
}

let numerologyFormula = document.querySelector("#num-generator-form");
numerologyFormula.addEventListener("submit", generateanswer);
