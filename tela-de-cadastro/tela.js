function mostrarSegundaParte() {
    const idadeSelecionada = document.getElementById("idade").value;
    const segundaParte = document.querySelector(".segunda-parte");

    if (idadeSelecionada === "menor") {
        segundaParte.style.display = "block";
    } else {
        segundaParte.style.display = "none";
    }
}
