const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");
textInput.addEventListener(
  "input",
  (display) =>
    (textOutput.textContent = !display.currentTarget.value
      ? "Anonymous"
      : display.currentTarget.value)
);
