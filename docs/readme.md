# Apuntes de Bootstrap

Clases y recursos de Bootstrap usados en los ejercicios (ver `Eventos/indexEventos.html`).

> Versión usada: **Bootstrap 6.0.0-alpha.1**. Algunas clases (`grid-cols-*`, `btn-solid`, `theme-*`) son nuevas de Bootstrap 6 y no existen en Bootstrap 5.

---

## 1. Enlaces necesarios (en el `<head>`)

```html
<!-- CSS de Bootstrap -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@6.0.0-alpha.1/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Iconos de Bootstrap (librería aparte, hay que enlazarla por separado) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.2/font/bootstrap-icons.min.css">

<!-- JS de Bootstrap (para componentes interactivos: modales, desplegables...) -->
<script type="module" src="https://cdn.jsdelivr.net/npm/bootstrap@6.0.0-alpha.1/dist/js/bootstrap.bundle.min.js"></script>
```

---

## 2. Grid (rejilla)

| Clase | Qué hace |
|---|---|
| `grid` | Convierte el contenedor en una rejilla (`display: grid`). |
| `grid-cols-3` | Divide la rejilla en 3 columnas del mismo ancho. Cambia el número para tener más o menos columnas. |
| `text-center` | Centra el texto (y elementos en línea) dentro del elemento. |

```html
<div class="grid text-center grid-cols-3">
  ...elementos...
</div>
```

### Centrar elementos dentro del grid
Si los elementos son más estrechos que su columna, se quedan pegados a la izquierda. Dos soluciones:

- **CSS en el grid:** `style="justify-items: center;"` centra todos los elementos dentro de su celda.
- **Clase en cada elemento:** `mx-auto` (ver abajo).

> `justify-items` centra el contenido **dentro de cada celda**. `justify-content` centra **las columnas** dentro del grid (solo se nota si las columnas tienen ancho fijo).

---

## 3. Espaciado

| Clase | Qué hace |
|---|---|
| `mx-auto` | `margin-left: auto` y `margin-right: auto`. Centra horizontalmente un elemento que tenga un ancho definido. |

Formato general: `{propiedad}{lado}-{tamaño}`
- Propiedad: `m` = margin, `p` = padding
- Lado: `t` arriba, `b` abajo, `s` inicio (izq.), `e` fin (der.), `x` izquierda y derecha, `y` arriba y abajo
- Tamaño: `0` a `5`, o `auto`

---

## 4. Card (tarjeta)

| Clase | Qué hace |
|---|---|
| `card` | Contenedor de la tarjeta: borde, esquinas redondeadas y fondo. |
| `card-img-top` | Imagen en la parte superior de la tarjeta, con las esquinas de arriba redondeadas. |
| `card-body` | Zona de contenido de la tarjeta, con relleno interior. |
| `card-title` | Estilo para el título de la tarjeta. |
| `card-text` | Estilo para el texto de la tarjeta. |

```html
<article class="card mx-auto" style="max-width: 320px">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h4 class="card-title">Título</h4>
    <p class="card-text">Texto</p>
    <a href="#" class="btn-solid theme-primary">Botón</a>
  </div>
</article>
```

> `style="max-width: 320px"` limita el ancho de la tarjeta (es CSS normal, no Bootstrap).

---

## 5. Botones

| Clase | Qué hace |
|---|---|
| `btn-solid` | Botón con fondo relleno (Bootstrap 6). |
| `theme-primary` | Le aplica el color principal del tema (azul por defecto). |

---

## 6. Posicionamiento (para colocar el corazón en la esquina)

| Clase | Qué hace |
|---|---|
| `position-relative` | Se pone en el **padre** (la tarjeta). Sirve de referencia para los hijos con `position-absolute`. |
| `position-absolute` | Se pone en el **hijo** (el corazón). Lo saca del flujo normal y lo coloca respecto al padre `position-relative`. |
| `top-0` | Lo pega arriba del todo (`top: 0`). |
| `start-100` | Lo lleva al final por la izquierda (`left: 100%`), es decir, al borde derecho. |
| `translate-middle` | Lo desplaza -50% en X y en Y para que quede **centrado sobre la esquina**. |

Valores disponibles: `top-`, `bottom-`, `start-`, `end-` con `0`, `50` o `100`.

```html
<article class="card position-relative">
  <i class="bi bi-suit-heart-fill position-absolute top-0 start-100 translate-middle"></i>
  ...
</article>
```

---

## 7. Iconos (Bootstrap Icons)

| Clase | Qué hace |
|---|---|
| `bi` | Clase base obligatoria para cualquier icono. |
| `bi-suit-heart-fill` | Icono de corazón relleno. Buscador de iconos: https://icons.getbootstrap.com |

```html
<i class="bi bi-suit-heart-fill"></i>
```

- El icono se comporta como **texto**: su color se cambia con la propiedad `color` y su tamaño con `font-size`.
- Requiere el `<link>` de Bootstrap Icons (apartado 1).
- Alternativa: copiar el `<svg>` del icono directamente en el HTML (no necesita el `<link>`). **No mezclar las dos formas.**

---

## 8. Clases propias (no son de Bootstrap)

| Clase | Para qué |
|---|---|
| `corazon` | Identificar el icono del corazón desde JavaScript. |
| `tarjeta` | Tarjetas de los ejercicios 3 (target / currentTarget). |
| `botonColor` | Botones Rojo/Azul de los ejercicios 1 y 2. |
| `parrafo` | Párrafo donde se escribe el botón pulsado (ejercicio 2). |

---

# Por dónde voy

*Última actualización: 06/11/2026*

## Ejercicio 4 (`Eventos/scripEventos.js`)
**Enunciado:** al clicar la tarjeta, cambia el color de la tarjeta; al clicar el corazón, cambia el color del corazón; al clicar el botón, el producto se añade al carrito.

### ✅ Hecho
- [x] Parte estética con Bootstrap: grid de 3 columnas, 6 cards centradas y corazón en la esquina de cada tarjeta.
- [x] Seleccionar las tarjetas con `querySelectorAll(".card")` y añadirles un `click` con `forEach`.
- [x] Entender que hay que usar `event.currentTarget`, que es siempre la tarjeta entera, y no `event.target`, que es la parte exacta donde clico.

### 🔲 Pendiente
1. **Cambiar el color de la tarjeta** *(en ello)*
   - Usar `event.currentTarget` (o `elemento`) para quedarme con la tarjeta clicada.
   - Cambiar el color con una de estas dos opciones:
     - `style.backgroundColor = "..."`
     - Crear una clase CSS (p. ej. `.tarjetaActiva`) y usar `classList.add()` o `classList.toggle()`. Con `toggle`, al volver a clicar la tarjeta recupera su color.
   - Comprobar que solo cambia la tarjeta clicada.
2. **Cambiar el color del corazón**
   - El corazón tiene la clase `corazon`.
   - Es un icono, así que su color se cambia con la propiedad `color`, no con `background-color`.
   - Problema que va a salir: al clicar el corazón también cambia la tarjeta (propagación o *bubbling*). Hay que investigar `event.stopPropagation()`, o comprobar con `event.target` dónde se ha clicado.
3. **Añadir al carrito con el botón**
   - El botón es el `<a class="btn-solid theme-primary">` de cada tarjeta.
   - Al ser un `<a href="#">`, al clicar puede saltar arriba de la página. Investigar `event.preventDefault()`.
   - Tiene el mismo problema de propagación que el corazón.
   - Falta decidir cómo es el "carrito": un contador, una lista en el HTML, un array en JS...

### 💬 Para retomar con Claude
> "Estoy haciendo el ejercicio 4 de `Eventos/scripEventos.js`. Mira el apartado *Por dónde voy* de `docs/readme.md`. Guíame sin darme el código."
