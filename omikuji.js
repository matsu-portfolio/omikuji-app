const results = ["大吉", "中吉", "小吉", "末吉", "凶"];
const resultElement = document.getElementById("result");
const button = document.getElementById("draw-button");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * results.length);
  const fortune = results[randomIndex];
  resultElement.textContent = `あなたの運勢は「${fortune}」です！`;
});
