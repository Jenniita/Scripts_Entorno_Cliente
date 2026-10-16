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
  //El método includes siempre devuelve un booleano. True si lo incluye, False si no lo9 incluye.
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
console.log("Ejercicio 7 - Reduce");
console.log("--------------");

console.log("Array de números original");
console.log(numeros);

//Array con objetos
const productosReduce = [
  { nombre: "manzana", precio: 10 },
  { nombre: "pera", precio: 5 },
];
console.log("Array de Productos para Reduce");
console.log(productosReduce);

//Ahora vamos a sumar los objetos con Reduce. Es un método inmutable puesto que no modifica el array, devuelve un valor nuevo; la suma
console.log("Suma total de los precios del array de Productos");
//Podemos, si es un array, especificar un nuevo nombre para el valor, como hemos hecho en precio
const sumaReduce = productosReduce.reduce(
  (acumulador, { precio: precioProducto }) => acumulador + precioProducto,
  0,
);
console.log(sumaReduce);

console.log("Suma total de todos los números del array numeros");
const sumaReduceNumeros = numeros.reduce(
  (acumulador, numero) => acumulador + numero,
  0,
);
console.log(sumaReduceNumeros);

console.log("--------------");
console.log("Ejercicio 8 - Ordenar");
console.log("--------------");

const precios = [25, 180, 15, 950, 45];

//Variable que no va a ser constante para indicar el orden; empieza en original
//Es el estado, cuando cambie el estado, cambia la información que vemos, es decir, se renderiza. Siempre empieza con un estado
let orden = "original";

console.log("Array de precios original");
console.log(precios);

//constante para seleccionar en el html el ul llamado lista
const lista = document.querySelector(".lista");

//función para renderizar (pintar en pantalla; mostrar en pantalla)
function renderizar() {
  //PRIMERA PARTE - Cómo funciona la función

  //variable llamada visibles que mostrará el array en función al orden(estado) que tenga. De primeras está en original porque es el estado inicial que hemos puesto
  let visibles = precios;

  //Si el orden corresponde con "asc" el precio(número) irá del más bajo al más alto (ascendiendo)
  if (orden === "asc") {
    //Sort es un método inmutable, puesto que me devuelve otro array
    visibles = [...precios].sort((a, b) => a - b);
    //Si el orden corresponde con "desc" el precio(número)
  } else if (orden === "desc") {
    visibles = [...precios].sort((a, b) => b - a);
  }

  //SEGUNDA PARTE - Escribimos en HTML
  //Le metemos un html, por ahora vacio
  lista.innerHTML = "";

  //Hacemos un foreach para que recorra cada elemento de la variable visibles, que contiene el array de los precios
  visibles.forEach((precio) => {
    //Creamos el "li" que irá dentro de el "ul" "lista"
    const item = document.createElement("li");
    //Escribimos lo que tendrá ese li, es decir, el precio correspondiente (el número)
    item.textContent = `${precio} €`;
    //Lo agregamos a la lista
    lista.appendChild(item);
  });
}

//Renderizamos para que cada vez que se recargue o abra la pagina aparezca en el orden original
renderizar();

//Lo que hace cada botón

//Creamos las constantes de los botones (se puede hacer directamente con el querySelector, sin crear las constantes)
const btnOriginal = document.querySelector(".btn-original");
const btnMayorMenor = document.querySelector(".btn-mayor-menor");
const btnMenorMayor = document.querySelector(".btn-menor-mayor");

//Añadimos los eventListener de cada botón

btnOriginal.addEventListener("click", () => {
  orden = "original";
  renderizar();
});

btnMenorMayor.addEventListener("click", () => {
  orden = "asc";
  renderizar();
});

btnMayorMenor.addEventListener("click", () => {
  orden = "desc";
  renderizar();
});

console.log("--------------");
console.log("Ejercicio clase Renderizar y Sumar Total - Carrito");
console.log("--------------");

//Constante con el array de los objetos
const productosEjercicio = [
  { nombre: "teclado", precio: 25 },
  { nombre: "raton", precio: 15 },
  { nombre: "monitor", precio: 180 },
];
//array para ir metiendo los productos al carrito
const carrito = [];

const listaCarrito = document.querySelector(".lista-carrito");
const totalCarrito = document.querySelector(".total")




//función para renderizar
function renderizarCompra() {
  //SEGUNDA PARTE - Escribimos en HTML
  listaCarrito.innerHTML = "";

  //Hacemos un foreach para que recorra el array del carrito e imprima cada producto
  carrito.forEach((producto) => {
    //Creamos el li que irá dentro de el ul "lista"
    const itemC = document.createElement("li");
    //Escribimos lo que tendrá ese li, es decir, el producto con el precio
    itemC.textContent = `${producto.nombre} ${producto.precio}`;
    //Lo agregamos a la lista
    listaCarrito.appendChild(itemC);

    //constante para la suma del total
    const totalCompra = carrito.reduce(
      (acumulador, { precio: precioProductos }) => acumulador + precioProductos, 0,);
    //Total del carrito de compra
    totalCarrito.innerHTML = `Total: ${totalCompra}`
    //console.log(totalCompra)

  });


}

renderizarCompra()

//Botones de los objetos y sus funciones de añadir objetos al carrito

document.querySelector(".btn-teclado").addEventListener("click", () => {
  //Para añadir al carrito lo hacemos con un push
  carrito.push({ nombre: "teclado", precio: 25 });
  console.log(listaCarrito);
  renderizarCompra()
});

document.querySelector(".btn-raton").addEventListener("click", () => {
  //Para añadir al carrito lo hacemos con un push
  carrito.push({ nombre: "raton", precio: 15 });
  console.log(carrito);
  renderizarCompra()
});

document.querySelector(".btn-monitor").addEventListener("click", () => {
  //Para añadir al carrito lo hacemos con un push
  carrito.push({ nombre: "monitor", precio: 180 });
  console.log(carrito);
  renderizarCompra()
});

