
document.addEventListener("DOMContentLoaded", () => {
    const alertDiv = document.getElementById("alertDiv");
    const alertButton = document.getElementById("entrybutton");
    const textInput = document.getElementById("entryinput");
    const resultHeading = document.getElementById("textoutput");
    alertButton.addEventListener("click", () => {
      const inputValue = textInput.value;
      alert(`Chelsei Marion: ${inputValue}`);
      resultHeading.textContent = inputValue;
    });
  });
  