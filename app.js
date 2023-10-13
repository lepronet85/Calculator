// Obtient le thème "theme 1" en utilisant la fonction getTheme et le définit en tant que thème actuel
const theme = getTheme("theme 1");
setTheme(theme);

// Sélectionnez tous les indicateurs et convertissez-les en tableau
const indicators = document.querySelectorAll(".indicator");

// Ajoutez un écouteur de clic à chaque indicateur
indicators.forEach((indicator, i) => {
  indicator.addEventListener("click", () => {
    // Obtenez le thème correspondant au numéro de l'indicateur cliqué
    const theme = getTheme(`theme ${i + 1}`);
    setTheme(theme);

    // Réinitialise l'opacité de tous les indicateurs à 0
    indicators.forEach((ind, index) => {
      ind.style.opacity = index === i ? 1 : 0;
    });
  });
});


// Crée une carte de mappage entre les noms de boutons et leurs valeurs associées
const btnValueMap = [
  {
    name: "sevenBtn",
    value: "7",
  },
  {
    name: "eightBtn",
    value: "8",
  },
  {
    name: "nineBtn",
    value: "9",
  },
  {
    name: "fourBtn",
    value: "4",
  },
  {
    name: "fiveBtn",
    value: "5",
  },
  {
    name: "sixBtn",
    value: "6",
  },
  {
    name: "oneBtn",
    value: "1",
  },
  {
    name: "twoBtn",
    value: "2",
  },
  {
    name: "threeBtn",
    value: "3",
  },
  {
    name: "dotBtn",
    value: ".",
  },
  {
    name: "zeroBtn",
    value: "0",
  },
  {
    name: "dividerBtn",
    value: "/",
  },
  {
    name: "multiplyBtn",
    value: "*",
  },
  {
    name: "plusBtn",
    value: "+",
  },
  {
    name: "minusBtn",
    value: "-",
  },
];

// Fonction qui calcule le résultat des expressions stockées dans le tableau "expressions" en utilisant eval()
function calculate(expressions) {
  return eval(expressions.join(""));
}

// Initialise un tableau vide pour stocker les expressions
let expressions = [];

// Sélectionne tous les boutons de contrôle
const btns = document.querySelectorAll(".controls button");

// Sélectionne l'élément de texte à afficher
const displayerText = document.querySelector(".displayer span");

// Initialise une variable pour stocker le contenu du texte à afficher
let displayerTextContent = "";

// Parcourt tous les boutons de contrôle et ajoute des écouteurs de clic
btns.forEach(btn => {
  if (btn.id !== "resetBtn" && btn.id !== "equalBtn" && btn.id !== "deleteBtn") {
    btn.addEventListener("click", function () {
      // Obtient la valeur du bouton à partir de la carte de mappage en fonction de son ID
      const btnValue = btnValueMap.find(bv => bv.name === this.id).value;

      // Vérifie si l'utilisateur a tapé un opérateur
      let operatorTyped = btnValue === "+" || btnValue === "/" || btnValue === "*"
        || btnValue === "-" || btnValue === ".";

      if (!operatorTyped) {
        // Si l'utilisateur a tapé un chiffre ou un point
        if (expressions.length === 0) {
          displayerTextContent = btnValue;
          displayerText.textContent = displayerTextContent;
        } else {
          displayerTextContent += btnValue;
          displayerText.textContent = displayerTextContent;
        }

        // Ajoute la valeur du bouton à la liste des expressions
        expressions.push(btnValue);
      } else {
        // Si l'utilisateur a tapé un opérateur, vérifie les conditions et ajoute l'opérateur si nécessaire
        const lastVal = expressions[expressions.length - 1];

        if (!((lastVal === "+" || lastVal === "-" || lastVal === "*" || lastVal === "/") && expressions.length !== 0))
          expressions.push(btnValue);

        displayerTextContent = "";
      }

      // Affiche les expressions actuelles dans la console
      console.log(expressions);
    });
  }
});

// Sélectionne les boutons de suppression, de réinitialisation et d'égalité
const deleteBtn = document.getElementById("deleteBtn");
const resetBtn = document.getElementById("resetBtn");
const equalBtn = document.getElementById("equalBtn");

// Ajoute un écouteur de clic au bouton d'égalité pour calculer le résultat
equalBtn.addEventListener("click", () => {
  let total = calculate(expressions);
  expressions = [];
  expressions.push(total);
  displayerTextContent = total;
  displayerText.textContent = displayerTextContent;
});
