// inferencia

// como a y b infiere que son number sin decirle nada
const a = 1
const b = 2
const c = a + b
// c tambien sera number

let cadenaDeTexto = "hola"

// ❌ cadenaDeTexto = 2
// ❌ cadenaDeTexto.propiedadInexistente

// ---- IMPORTANTE (any) ---------

    // cualquier tipo de dato
    // es que IGNORE el tipado de ts

    let anyValue: any = "hola"

    anyValue.aa// ?? IGNORA EL TIPO DE UNA VARIABLE (EVITAR A TODA COSTA)


// tienes que ponerle el tipo cuando uses funciones
function saludar(name: string) {
    console.log(`hola${name}`);
}

// es un objeto sin tipar (entonces se le asigna ANY)
function saludar({name, age}) {
    console.log(`hola ${name}, tienes ${age} años`);
}

// para tipar un objeto se hace asi:
function saludar({name, age}: {name: string, age: number}) {
    console.log(`hola ${name}, tienes ${age} años`);
}

saludar({name: 2, age: "pepe"})