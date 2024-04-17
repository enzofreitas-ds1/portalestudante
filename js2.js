
document.getElementById("gradeForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var points = parseFloat(document.getElementById("points").value);
    var assignment = parseFloat(document.getElementById("assignment").value);
    var notebook = parseFloat(document.getElementById("notebook").value);

    if (isNaN(points) || isNaN(assignment) || isNaN(notebook)) {
        alert("Por favor, preencha todos os campos com valores válidos.");
        return;
    }

    var average = (points + assignment + notebook) / 3;
    var mention;

    if (average <= 4) {
        mention = "I - Insuficiente";
    } else if (average >= 4.1 && average <= 5.9) {
        mention = "R - Regular";
    } else if (average >= 6 && average <= 9.4) {
        mention = "B - Bom";
    } else if (average >= 9.5 && average <= 10) {
        mention = "MB - Muito Bom";
    }

    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<p>Sua Média foi: " + average.toFixed(2) + "</p><p>Menção: " + mention + "</p>";
});
