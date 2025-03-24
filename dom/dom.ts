window.onload = function () {
    
    const formulario = document.getElementById("formulario")! as HTMLFormElement
    const inputNombre = document.getElementById("name")! as HTMLInputElement

    formulario.addEventListener("submit", (e) => {
        e.preventDefault()

        console.log(inputNombre.value);
        
    })
    
}

