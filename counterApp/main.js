// Select DOM elements:
const counter = document.querySelector(".count");
const allBtns = document.querySelectorAll(".buttonsContainer");

const subtractBtn = allBtns[0].children[0];
const resetBtn = allBtns[0].children[1];
const addBtn = allBtns[0].children[2];

// Counter output should change in accordance to a result:

function updateCounterColor() {
  const count = parseInt(counter.textContent);

  switch (true) {
    case count > 0:
      counter.style.color = "green";
      break;
    case count < 0:
      counter.style.color = "red";
      break;
    default:
      counter.style.color = "white";
      break;
  }
}

// Execute functionality:

subtractBtn.addEventListener("click", () => {
  counter.textContent--;
  updateCounterColor();
});

resetBtn.addEventListener("click", () => {
  counter.textContent = 0;
  updateCounterColor();
});

addBtn.addEventListener("click", () => {
  counter.textContent++;
  updateCounterColor();
});
