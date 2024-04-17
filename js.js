

function calculateSum() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, preencha todos os campos com NÚMEROS.");
        return;
    }

    var sum = num1 + num2;

    

    document.getElementById('result').innerHTML = 'O RESULTADO DA SOMA É: ' + sum;

}


function calculateSubtraction() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, preencha todos os campos com NÚMEROS.");
        return;
    }

    var subtraction = num1 - num2;
    document.getElementById('result').innerHTML = 'O RESULTADO DA SUBTRAÇÃO É: ' + subtraction;
}



function calculateMulti() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, preencha todos os campos com NÚMEROS.");
        return;
    }

    var Multi  = num1 * num2;
    document.getElementById('result').innerHTML = 'O RESULTADO DA MULTIPLICAÇÃO É: ' + Multi;
}

function calculateDiv() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, preencha todos os campos com NÚMEROS.");
        return;
    }

    var Div = num1 / num2;
    document.getElementById('result').innerHTML = 'O RESULTADO DA DIVISÃO É: ' + Div;
}





document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();


    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;


    if (usuario === "EnzoFreitas" && senha === "Mago") {
        alert("Login realizado com sucesso!");
        window.location.href = "home.html";

    } else {
        alert("Nome de usuário ou senha inválidos. Por favor tente novamente");
    }
});






