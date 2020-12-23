const textarea = document.querySelector("textarea");
const resultContainer = document.querySelector(".result-container");
textarea.focus();
textarea.addEventListener("keyup", (e) => {
  creatTags(e.target.value);
  if (e.code === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);
    randomChoice();
  }
});
function creatTags(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());
  resultContainer.innerHTML = "";
  tags.forEach((tag) => {
    const result = document.createElement("span");
    result.classList.add("result");
    result.innerText = tag;
    resultContainer.appendChild(result);
  });
}
function randomChoice() {
  const times = 30;
  const randomInterval = setInterval(() => {
    const randomResult = pickRandom();
    activatResult(randomResult);
    setTimeout(() => {
      unAtivatResult(randomResult);
    }, 100);
  }, 100);
  setTimeout(() => {
    clearTimeout(randomInterval);
    setTimeout(() => {
      const randomResult = pickRandom();
      activatResult(randomResult);
    }, 100);
  }, 100 * times);
}
function pickRandom() {
  const tags = document.querySelectorAll(".result");
  return tags[Math.floor(Math.random() * tags.length)];
}
function activatResult(tag) {
  tag.classList.add("active");
}
function unAtivatResult(tag) {
  tag.classList.remove("active");
}
