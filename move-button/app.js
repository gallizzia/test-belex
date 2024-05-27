const question = document.querySelector(".question");
const yesBtn = document.querySelector("button.button--yes");
const noBtn = document.querySelector("button.button--no");
const noBtnRect = noBtn.getBoundingClientRect();
yesBtn.addEventListener("click", () => {
  question.innerHTML = "Grazie :)";
});
noBtn.addEventListener("mouseover", () => {
  const i =
    Math.floor(Math.random() * (window.innerWidth - noBtnRect.width)) + 1;
  const j =
    Math.floor(Math.random() * (window.innerHeight - noBtnRect.height)) + 1;
  noBtn.style.left = i + "px";
  noBtn.style.top = j + "px";
});
