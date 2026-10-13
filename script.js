console.log("Primer Ejercicio - Map");
console.log("--------------");
//Constante del array de los numeros origial
const numeros = [5, 12, 8, 130, 44, 3];

console.log("Array Original");
console.log(numeros);

//numeros.forEach (numeros => console.log(numero))

//Función con map para multiplicar cada numero del array * 2
const suma = numeros.map((numero) => numero * 2);
console.log("Array multiplicado * 2");
console.log(suma);

console.log("--------------");
console.log("Segundo Ejercicio - Map con Array Objetos");
console.log("--------------");
//Constante con dos arrays con productos
const productos = [
  { nombre: "Manzana", precio: 4 },
  { nombre: "Pera", precio: 10 },
];
console.log("Array de los Productos");
console.log(productos);

//Función con map para multiplicar unicamente el valor "precio" de los array
const productosDobles = productos.map(({ precio }) => precio * 2);
console.log("Precios Multiplicados * 2");
console.log(productosDobles);

console.log("--------------");
console.log("Tercer ejercicio - Filter");
console.log("--------------");

//filter devuelve un array con todos los numeros que coincidan con la condicion
const mayorDiez = numeros.filter((numeros) => numeros > 10);

console.log("Array Original Numeros");
console.log(numeros);

console.log("FILTER");
console.log("Array con los mayores de 10");
console.log(mayorDiez);

//find devuelve el PRIMER valor que encuentre que coincida con la condición
console.log("FIND");
console.log("Array con el Primer Valor que coincida con la condición");
const mayorDiezUnico = numeros.find((numeros) => numeros > 10);
console.log(mayorDiezUnico);

console.log("--------------");
console.log("Ejercicio Clase 1");
console.log("--------------");

const productos2 = [
  { nombre: "Jenna", precio: 1000 },
  { nombre: "Andrea", precio: 0.5 },
  { nombre: "Naza", precio: 2000 },
];
console.log("Array Original");
console.log(productos2);

const filtradoEjercicio = productos2.filter((numeros) => numeros.precio > 50);
console.log("Array Filtrado");
console.log(filtradoEjercicio);

console.log("--------------");
console.log("Ejercicio Clase 2");
console.log("--------------");

const propiedades = [
  { nombre: "Casa", precio: 1000 },
  { nombre: "Casa", precio: 500 },
  { nombre: "Chalet", precio: 1000 },
  { nombre: "Chalet", precio: 800 },
];
console.log("Array Origianl Propiedades");
console.log(propiedades);

//filtrar que coincidan con "casa" y de esos multiplicar el precio por 3
//Un "=" es asignación, 2 "=" es comparación
const filtradoCasa = propiedades.filter(
  (propiedad) => propiedad.nombre == "Casa",
);
console.log("Array con las coincidencias con CASA");
console.log(filtradoCasa);

const casaMult = filtradoCasa.map((numero) => numero.precio * 3);
console.log("En el Array Filtrado, precio multiplicado * 3");
console.log(casaMult);

console.log("--------------");
console.log("Ejercicio 5 - Includes");
console.log("--------------");

console.log("Array Original");
console.log(numeros);

const marcasCoche = [
  { id: 1, marca: "BMW" },
  { id: 2, marca: "Toyota" },
  { id: 3, marca: "BMW" },
  { id: 4, marca: "Seat" },
];
console.log("Array de las marcas de coche");
console.log(marcasCoche);

//Ahora vamos a comprobar si en el array está la marca "Toyota"

console.log("Marca Incluida o No");

//marcasCoche.forEach(coche => console.log(coche.marca.toLowerCase().includes("toyota")))

const incluido = marcasCoche.map((coche) =>
  coche.marca.toLowerCase().includes("toyota"),
);
console.log(incluido);

console.log("--------------");
console.log("Ejercicio 6 - Contador Sumar y Restar ");
console.log("--------------");

//Variable que iniciamos en 0
let contador = 0;
//Seleccionamos el h2, que es el que va a ir cambiando cuando sumemos o restemos
const resultado = document.querySelector(".numero");

//PARA MOSTRAR MENSAJE CUANDO BAJA DE 0

//Seleccionamos el div contenedor en el que vamos a crear las cosas
const contenedor = document.querySelector(".contenedor");
//Para crear un párrafo en el HTML
const parrafo = document.createElement("p");

//función para que el resultado se muestre
function mostrarResultado() {
  //textContent es para actualizar el texto
  resultado.textContent = contador;

  //Alerta para no permitir valores
  /*  if (contador < 0) {
    //Para que el contador no se quede pillado en el valor negativo
    contador = 0;
    //Si el contador es menor que 0
    alert("No se pueden valores negativos");
    mostrarResultado();
  }*/

  if (contador < 0) {
    contador = 0;
    parrafo.innerHTML = "No se puede bajar de 0";
    //Añadimos al contenedor el párrafo
    contenedor.appendChild(parrafo);
    mostrarResultado();
  }

  if (contador > 0) {
    parrafo.innerHTML = "";
    //Añadimos al contenedor el párrafo
    contenedor.appendChild(parrafo);
    
  }
}

//Para sumar (solo se ve en consola)

const btnSumar = document.querySelector(".btn-sumar");

btnSumar.addEventListener("click", () => {
  contador++;
  //Para que se vea en la página llamamos a la función
  mostrarResultado();
  console.log(contador);
});

//Para restar (solo se ve en consola)

const btnRestar = document.querySelector(".btn-restar");

btnRestar.addEventListener("click", () => {
  contador--;
  //Para que se vea en la página llamamos a la función
  mostrarResultado();
  //Para no permitir negativos

  console.log(contador);
});

console.log("--------------");
console.log("Ejercicio clase 3");
console.log("--------------");
