//EVENTOS TEORIA - Hacer que cada botón haga algo diferente
console.log("--------------")
console.log("Teoría Eventos")
console.log("--------------")

console.log("Lista de nodos")
//querySelectorAll para seleccionar los dos botones que tienen la clase "botonColor"
const botonColor = document.querySelectorAll(".botonColor") //Asi es un nodelist
console.log(botonColor)

console.log("Convertido en Array")
const botonColorArray = [...document.querySelectorAll(".botonColor")] //Asi es un Array, añadiendo [...]
console.log(botonColorArray)

console.log("Ejercicio 1")
//Queremos agregar un evento a cada botón
//Por cada elemento del nodelist (botonColor) vamos a agregar un EventListener con su evento
botonColor.forEach(elemento => elemento.addEventListener("click", (event) => { //Evento de tipo click
    console.log(event.target) //target devuelve la etiqueta a la que has hecho click. Aqui devuelve a quien se le ha hecho click
    console.log(event.target.textContent) //Aqui devuelve el texto que tiene la etiqueta
}))

console.log("Ejercicio 2")
//Cada vez que clicke alguno de los dos botones que en el parrafo salga "hizo click en el boton azul, o rojo"
const parrafo = document.querySelector(".parrafo")
botonColor.forEach(elemento => elemento.addEventListener("click", (event) => {
    parrafo.textContent = `Has clickado en ${event.target.textContent}` //Para añadir texto se hace entre las comillas invertidas
}))

console.log("Ejercicio 3 - Target y CurrentTarget")
//Cuando clicke a la tarjeta, muestra por consola, target y current target

const tarjeta = document.querySelectorAll(".tarjeta")

tarjeta.forEach(elemento => elemento.addEventListener("click", (event) =>{
    console.log(event.target)
    console.log(event.currentTarget)
    
}))

console.log("Ejercicio 4")
//Clickar la tarjeta cambiar color de la tarjeta, en el corazon, cambia el color del corazon, en el boton, se añade al carrito

const tarjetaColor = document.querySelectorAll(".card")


tarjetaColor.forEach(elemento => elemento.addEventListener("click", (event) =>{
   //Como quiero que se cambie el color de la tarjeta justo que estoy clickando, usamos current target
    console.log(event.currentTarget)
    event.currentTarget.classList.toggle("tarjetaActiva")
}))
