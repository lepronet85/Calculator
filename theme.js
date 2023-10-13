const themes = [
  {
    name: "theme 1",
    mainBg: "hsl(222, 26%, 31%)",
    displayBg: "hsl(224, 36%, 15%)",
    keyboardBg: "hsl(223, 31%, 20%)",
    keyBg: "white",
    keyShadow: "white",
    actionBg: "hsl(185, 42%, 37%)",
    actionShadow: "hsl(224, 28%, 35%)",
    equalBg: "hsl(25, 98%, 40%)",
    equalShadow: "hsl(6, 70%, 34%)",
    text1: "hsl(0, 0%, 100%)",
    text2: "hsl(0, 0%, 100%)",
    text3: "black",
  },
  {
    name: "theme 2",
    mainBg: "hsl(0, 0%, 90%)",
    displayBg: "hsl(0, 5%, 81%)",
    keyboardBg: "hsl(0, 0%, 93%)",
    keyBg: "hsl(45, 7%, 89%)",
    keyShadow: "hsl(185, 58%, 25%)",
    actionBg: "hsl(185, 58%, 25%)",
    actionShadow: "hsl(25, 99%, 27%)",
    equalBg: "hsl(25, 98%, 40%)",
    equalShadow: "hsl(35, 11%, 61%)",
    text1: "hsl(0, 0%, 100%)",
    text2: "hsl(60, 10%, 19%)",
    text3: "black",
  },
  {
    name: "theme 3",
    mainBg: "hsl(268, 75%, 9%)",
    displayBg: "hsl(268, 71%, 12%)",
    keyboardBg: "hsl(281, 89%, 26%)",
    keyBg: "hsl(281, 89%, 26%)",
    actionBg: "hsl(268, 47%, 21%)",
    actionShadow: "hsl(177, 92%, 70%)",
    equalBg: "hsl(176, 100%, 44%)",
    equalShadow: "hsl(290, 70%, 36%)",
    text1: "hsl(0, 0%, 100%)",
    text2: "hsl(52, 100%, 62%)",
    text3: "hsl(52, 100%, 62%)",
  }
];

function getTheme(theme) {
  return themes.find(t => t.name === theme);
}

function setTheme(theme) {
  document.body.style.backgroundColor = theme.mainBg;

  const indicators = document.querySelectorAll(".indicator");
  const indicatorsNumbers = document.querySelectorAll(".theme-options-numbers span");
  const title = document.querySelector("h1");
  const themeText = document.querySelector(".theme > span");
  const themeOptionsIndicators = document.querySelector(".theme-options-indicators");
  const displayer = document.querySelector(".displayer");
  const displayerText = document.querySelector(".displayer span");
  const controls = document.querySelector(".controls");
  const deleteBtn = document.getElementById("deleteBtn");
  const resetBtn = document.getElementById("resetBtn");
  const equalBtn = document.getElementById("equalBtn");
  const btns = document.querySelectorAll(".controls button");

  title.style.color = theme.text2;
  themeText.style.color = theme.text2;
  displayerText.style.color = theme.text2;
  deleteBtn.style.color = theme.text1;
  resetBtn.style.color = theme.text1;
  equalBtn.style.color = theme.text1;

  themeOptionsIndicators.style.backgroundColor = theme.displayBg;
  displayer.style.backgroundColor = theme.displayBg;
  controls.style.backgroundColor = theme.displayBg;
  deleteBtn.style.backgroundColor = theme.actionBg;
  resetBtn.style.backgroundColor = theme.actionBg;
  equalBtn.style.backgroundColor = theme.equalBg;

  indicators.forEach(indicator => indicator.style.backgroundColor = theme.equalBg);
  indicatorsNumbers.forEach(indicatorNumber => indicatorNumber.style.color = theme.text2);
  btns.forEach(btn => {
    if (btn.id !== resetBtn.id && btn.id !== equalBtn.id && btn.id !== deleteBtn.id) {
      btn.style.backgroundColor = theme.keyBg;
      btn.style.color = theme.text3;
    }
  });
}