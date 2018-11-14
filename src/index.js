function solveExpression() {
    var vyraz = document.getElementById("vyraz").value;
    var stack = [];
    var output = "";
    var str = vyraz.split("");
    console.log(str);
    vyraz = toPostfix(str);
    return vyraz;
}
function toPostfix(str) {
    var postfix = "";
    var operands = [];
    var operators = [];
    var count = 0;
    for (let a = 0; a < str.length; a++) {
        if (isNaN(str[a])) {
            if (Weight(str[a]) > 1 && operands.length > 1) {
                if (operands.length > 2) {
                    alert("cau");
                    var lastChar = postfix[postfix.length - 1];
                    postfix[postfix.length - 1] = str[a];
                    postfix += lastChar;
                } else {
                    postfix += str[a];
                }
                console.log(postfix);
                alert();
            } else {
                operators.push(str[a]);
            }
        } else {
            postfix += str[a];
            operands.push(str[a]);
        }
        if (operands.length > 1 && operators.length < 2) {
            for (let a = 0; a < operators.length; a++) {
                if (Weight(operators[a]) > 1) {
                    postfix += operators.pop();
                    count++;
                }
            }
            operands.pop();
        } else if (operands.length > 2 && operators.length > 1) {
            alert();
            for (let b = 0; b < operators.length; b++) {
                console.log("JEDEME");
                if (Weight(operators[b]) > 1) {
                    postfix += operators[b];

                    operators.splice(operators.indexOf(operators[b]), 1);
                }
                operands.splice(2);
            }
        } else {
        }
    }
    console.log(postfix);

    for (let c = 0; c < operators.length; c++) {
        if (Weight(operators[c]) > 1) {
            console.log(Weight(operators[c]));
            console.log(operators[c]);
            postfix += operators[c];
            operators.splice(operators.indexOf(operators[c]), 1);
        }
    }
    //  console.log(operators);
    for (let c = 0; c < operators.length; c++) {
        postfix += operators[c];
        console.log("us");
    }
    //console.log(operands);
    //console.log(postfix);
    return postfix;
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
