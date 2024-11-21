//  Select input and copy button elements from DOM:

const copyBtn = document.querySelector(".btn");
const inputText = document.querySelector("input");

copyBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // navigator.clipboard.writeText() copies the text content from the input field (inputText.value) to the clipboard:

  navigator.clipboard.writeText(inputText.value).then(() => {
    copyBtn.innerText = "Copied";
    copyBtn.style.color = "green";
    setTimeout(() => {
      copyBtn.innerText = "Copy";
      copyBtn.style.color = "black";
    }, 3000);
  });
});
