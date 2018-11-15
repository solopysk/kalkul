function solveExpression() {
    var vyraz = document.getElementById("vyraz").value;
    var stack = [];
    var output = "";
    var str = vyraz.split("");
    vyraz = toPostfix(str);
    return vyraz;
}
function toPostfix(str) {
    var postfix = "";
    var operands = [];
    var operators = [];
    var operandses = false;
    var precedence = false;
    for (let a = 0; a < str.length; a++) {
        if (isNaN(str[a])) {
            if (a == 0 || operandses === true) {
                return "error";
            }
            operandses = true;
            if (Weight(str[a]) > 1 && operands.length > 1) {
                if (operands.length > 2) {
                    alert("cau");
                    var lastChar = postfix[postfix.length - 1];
                    postfix[postfix.length - 1] = str[a];
                    postfix += lastChar;
                    operators.push(str[a]);
                } else {
                    alert("sdsda");
                    postfix += str[a];
                    operators.push(str[a]);
                }
            } else {
                operators.push(str[a]);
            }
        } else {
            postfix += str[a];
            operands.push(str[a]);
            operandses = false;
        }
        if (
            operands.length > 2 &&
            operators.length > 1 &&
            Weight(operators[operators.length - 1]) > 1
        ) {
            postfix += str[a];
            operators.pop();
            operands.pop();
            operands.pop();
        } else if (operands.length > 1 && operators.length < 2) {
            for (let a = 0; a < operators.length; a++) {
                if (Weight(operators[a]) > 1) {
                    postfix += operators.pop();
                }
            }
            operands.pop();
        } else if (operands.length > 2 && operators.length > 1) {
            for (let b = 0; b < operators.length; b++) {
                if (Weight(operators[b]) > 1) {
                    postfix += operators[b];

                    operators.splice(operators.indexOf(operators[b]), 1);
                }
                operands.splice(2);
            }
        } else {
        }
    }
    for (let c = 0; c < operators.length; c++) {
        if (Weight(operators[c]) > 1) {
            postfix += operators[c];
            operators.splice(operators.indexOf(operators[c]), 1);
        }
    }
    for (let c = 0; c < operators.length; c++) {
        postfix += operators[c];
    }

    return solvePostfix(postfix);
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
function solvePostfix(array) {
    var stack = array.split("");
    var ahoj = [];
    var result = 0;
    for (let i = 0; i < array.length; i++) {
        if (isNaN(stack[i])) {
            var a = ahoj.pop();
            var b = ahoj.pop();
            switch (stack[i]) {
                case "*":
                    result = parseInt(a) * parseInt(b);
                    break;
                case "+":
                    result = parseInt(a) + parseInt(b);
                    break;
                case "/":
                    result = parseInt(a) / parseInt(b);
                    break;
                case "-":
                    result = parseInt(b) - parseInt(a);
                    break;
            }
            ahoj.push(result);
        } else {
            ahoj.push(stack[i]);
        }
    }
    return ahoj[0];
}
var input = document.getElementById("vyraz");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("vysledek").innerHTML =
            "Vysledek je:" + solveExpression();
    }
});
