function solveExpression() {
  var vyraz = document.getElementById("vyraz").value;
  var stack = [];
  var output = "";
  var str = vyraz.split("");
  console.log(str);
  toPostfix(str);
}
function toPostfix(str) {
  var postfix = "";
  var operands = [];
  for (let a = 0; a < str.length; a++) {
    if (str[a].isNaN()) {
    } else {
      postfix += str[a];
    }
  }
  console.log(postfix);
}
function Weight(str) {
  switch (str) {
    case "*":
      return 2;
    case "/":
      return 2;
    case "+":
      return 1;
    case "-":
      return 1;
  }
}
var input = document.getElementById("vyraz");
input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("vysledek").innerHTML =
      "Vysledek je:" + solveExpression();
  }
});
