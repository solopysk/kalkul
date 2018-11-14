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
  var operators = [];
  for (let a = 0; a < str.length; a++) {
    if (isNaN(str[a])) {
      operators.push(str[a]);
    } else {
      postfix += str[a];
      operands.push(str[a]);
    }
    if (operands.length > 1) {
      for (let b = 0; b < operators.length; b++) {
        if (Weight(operators[b]) > 1) {
          postfix += operators[b];
          console.log(operators);
          operators.splice(operators[b], 1);
        }
        // else if (operands.length > 0) {
        //  postfix += operators.pop();
        //}
        operands.splice(2);
        // operands.splice(1);
      }
    }
  }

  for (let c = 0; c < operators.length; c++) {
    postfix += operators[c];
  }
  //console.log(operands);
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
