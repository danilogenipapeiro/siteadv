// Função para animar o formulário de contato
const mostrarFormularioBtn = document.getElementById("mostrarFormulario");
const formularioContato = document.getElementById("formularioContato");

mostrarFormularioBtn.addEventListener("click", function () {
    if (formularioContato.style.display === "none" || formularioContato.style.display === "") {
        formularioContato.style.display = "block";
        scrollToElement(formularioContato);
    } else {
        formularioContato.style.display = "none";
    }
});

// Função para rolar suavemente para elementos
function scrollToElement(element) {
    window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
    });
}
