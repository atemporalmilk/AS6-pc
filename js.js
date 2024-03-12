document.getElementById("nome").addEventListener("input", function () {
  var nome = document.getElementById("nome").value;
  if (nome) {
    document.getElementById("nota1").disabled = false;
    document.getElementById("nota2").disabled = false;
    document.getElementById("nota3").disabled = false;
    document
      .getElementById("myForm")
      .getElementsByTagName("input")[4].disabled = false;
  } else {
    document.getElementById("nota1").disabled = true;
    document.getElementById("nota2").disabled = true;
    document.getElementById("nota3").disabled = true;
    document
      .getElementById("myForm")
      .getElementsByTagName("input")[4].disabled = true;
  }
});

function calculate() {
  var nota1 = document
    .getElementById("myForm")
    .elements.namedItem("nota1").value;
  var nota2 = document
    .getElementById("myForm")
    .elements.namedItem("nota2").value;
  var nota3 = document
    .getElementById("myForm")
    .elements.namedItem("nota3").value;
  var media = (Number(nota1) + Number(nota2) + Number(nota3)) / 3;
  if (media >= 70) {
    document.getElementById("result").innerHTML =
      "Parabéns! Você atingiu a média. Sua média é: " + media;
  } else {
    document.getElementById("result").innerHTML =
      "Infelizmente, você não atingiu a média. Sua média é: " + media;
  }
}
