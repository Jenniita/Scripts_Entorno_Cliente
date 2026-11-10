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

//TARJETA
const tarjetaColor = document.querySelectorAll(".card")

//Para cambiar el color del fondo de la tarjeta cuando clicke en ella
tarjetaColor.forEach(elemento => elemento.addEventListener("click", (event) =>{
   //Como quiero que se cambie el color de la tarjeta justo que estoy clickando, usamos current target
    console.log(event.currentTarget)
    event.currentTarget.classList.toggle("tarjetaActiva")
}))

//ICONO

//Para cambiar el color del corazón cuando clicke en el
const corazon = document.querySelectorAll(".corazon")

corazon.forEach(elemento => elemento.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("iconoActivo")
    //Para parar la propagación del evento del padre y que cuando clicke en el corazón, no se cambie el color de la tarjeta
    event.stopPropagation()
}))

//BOTÓN y añadir carrito

//Array con los productos
const productosTienda =[
    {nombre:"item 1", precio: 5},
    {nombre:"item 2", precio: 10},
    {nombre:"item 3", precio: 15},
    {nombre:"item 4", precio: 10},
    {nombre:"item 5", precio: 15},
    {nombre:"item 6", precio: 5},
]

//Array vacio para el carrito
const carrito =[]

const listaCarrito = document.querySelector(".listaCarrito");
const totalCarrito = document.querySelector(".total")

//función para renderizar

function renderizarCarrito(){
    listaCarrito.innerHTML =""

    carrito.forEach((producto) =>{
        const itemCarrito = document.createElement("li")
        itemCarrito.textContent = `${producto.nombre} ${producto.precio}€`;
        listaCarrito.appendChild(itemCarrito)


    })
}

renderizarCarrito()

const boton1 = document.querySelector(".btn1")
const boton2 = document.querySelector(".btn2")
const boton3 = document.querySelector(".btn3")
const boton4 = document.querySelector(".btn4")
const boton5 = document.querySelector(".btn5")
const boton6 = document.querySelector(".btn6")

boton1.addEventListener("click", (event)=>{
    carrito.push(productosTienda[0])
    event.stopPropagation()
    renderizarCarrito()
})

boton2.addEventListener("click", (event)=>{
    carrito.push(productosTienda[1])
    event.stopPropagation()
    renderizarCarrito()
})

boton3.addEventListener("click", (event)=>{
    carrito.push(productosTienda[2])
    event.stopPropagation()
    renderizarCarrito()
})

boton4.addEventListener("click", (event)=>{
    carrito.push(productosTienda[3])
    event.stopPropagation()
    renderizarCarrito()
})

boton5.addEventListener("click", (event)=>{
    carrito.push(productosTienda[4])
    event.stopPropagation()
    renderizarCarrito()
})

boton6.addEventListener("click", (event)=>{
    carrito.push(productosTienda[5])
    event.stopPropagation()
    renderizarCarrito()
})