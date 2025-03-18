// typeScript te pone los tipos de las variables automaticas
// trata de que ts siempre lo haga por ti
// ts te mejora la experiencia de desarrollo

let persona = "Miguel"
persona = 2 // marca error porq "persona" ya esta como String

const personaOb = {
    name: "hola",
    age: 30
}

personaOb // si haces hover sobre este objeto, te muestra los tipos

// ----------------------------

const number = 1
let n: number = 2

let a = "hola"
let b: string = "hola"

let aaaa = null
let bbbb:null = null

let c = undefined
let cc: undefined = undefined

// ----------------------------

let texto = "hola"

texto. // al tu poner el punto ts como ts ya sabe que es un string te da todas las funciones q puede tener un string

// ---- IMPORTANTE (any) ---------

    // cualquier tipo de dato
    // es que IGNORE el tipado de ts

let anyValue: any = "hola"

anyValue.aa// ??