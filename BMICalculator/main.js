// Selecting input/output fields:
let heightInput = document.querySelector(
  ".calculatorBody-height > input[type=number]"
);
let weightInput = document.querySelector(
  ".calculatorBody-weight > input[type=number]"
);
let calculateBtn = document.querySelector(".calculatorBody > button");
let footerContainer = document.querySelector(".calculatorFooter");

let alertMessage = document.createElement("p");

let calculatedResultDiv = null;
let calculatedResetBtn = null;

// Application core functionality:
const calculatebmiValue = () => {
  calculateBtn.addEventListener("click", () => {
    let height = parseFloat(heightInput.value);
    let weight = parseFloat(weightInput.value);

    // Input value validation:
    if (!height || !weight || height <= 0 || weight <= 0) {
      alertMessage.innerText = "Please provide valid values";
      alertMessage.classList.add("calculatorFooter-default");
      footerContainer.append(alertMessage);
      return;
    }

    let bmiValue = parseFloat(weight / Math.pow(height / 100, 2)).toFixed(2);

    // BMI string rendered depending on a calculated result:
    let bmiValueResult = "";

    switch (true) {
      case bmiValue < 18.5:
        bmiValueResult = "Underweight";
        break;
      case bmiValue >= 18.5 && bmiValue < 24.9:
        bmiValueResult = "Normal weight";
        break;
      case bmiValue >= 25 && bmiValue < 29.9:
        bmiValueResult = "Overweight";
        break;
      default:
        bmiValueResult = "Obese";
        break;
    }

    if (!calculatedResultDiv) {
      calculatedResultDiv = document.createElement("div");
      calculatedResultDiv.classList.add("calculatorFooter-default");
      footerContainer.append(calculatedResultDiv);
    }

    // Button reset:
    if (!calculatedResetBtn) {
      calculatedResetBtn = document.createElement("button");
      calculatedResetBtn.innerText = "Reset";
      calculatedResetBtn.classList.add("calculatorResetButton");
      footerContainer.append(calculatedResetBtn);
      footerContainer.classList.add("changeTableStyle");

      calculatedResetBtn.addEventListener("click", () => {
        heightInput.value = "";
        weightInput.value = "";
        calculatedResultDiv.innerText = "";
        calculatedResultDiv.classList.add("hideContent");
        calculatedResetBtn.classList.add("hideContent");
      });
    }

    alertMessage.classList.add("hideContent");

    calculatedResultDiv.innerText = ` ${bmiValueResult}: ${bmiValue}`;
    calculatedResultDiv.classList.remove("hideContent");
    calculatedResetBtn.classList.remove("hideContent");
  });
};

const validateInputs = () => {
  let height = parseFloat(heightInput.value);
  let weight = parseFloat(weightInput.value);

  if (!height || !weight || height <= 0 || weight <= 0) {
    alertMessage.innerText = "Please provide valid values";
    alertMessage.classList.add("calculatorFooter-default");
    footerContainer.append(alertMessage);
  } else {
    alertMessage.classList.add("hideContent");
  }
};

// Invoking functions:
heightInput.addEventListener("input", validateInputs);
weightInput.addEventListener("input", validateInputs);

calculatebmiValue();
