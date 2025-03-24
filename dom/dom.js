window.onload = function () {
    var formulario = document.getElementById("formulario");
    var inputNombre = document.getElementById("name");
    formulario.addEventListener("submit", function (e) {
        e.preventDefault();
        console.log(inputNombre.value);
    });
};
