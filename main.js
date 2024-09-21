/*  const diasDeLaSemana = [ "Lunes", "Martes", "Miercoles", ];

console.log(diasDeLaSemana);

diasDeLaSemana.push("Jueves");
diasDeLaSemana.unshift("Domingo");

diasDeLaSemana.pop("Miercoles");
diasDeLaSemana.shift("Lunes");

console.log(diasDeLaSemana);


let i = 0;
while(i < 10){
    console.log(i);

    i++
}

const nombre = "Juan";
let edad = 25;
const ciudad = "Madrid";


console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Ciudad:", ciudad);

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


let j = 1;
while (j <= 10) {
    console.log(j);
    j++;
}

function multiplicar(a, b) {
    return a * b;
}


console.log(multiplicar(4, 5));

function sumar(a, b) {
    return a + b;
}


const sumarFlecha = (a, b) => a + b;


console.log(sumarFlecha(3, 7));

let numeros = [1, 2, 3, 4, 5];


let numerosMultiplicados = numeros.map(num => num * 2);


console.log(numerosMultiplicados);  */

// function NumerosAleatorios(cantidad = 9) {
//     const numerosAleatorios = [];
//     for (let i = 0; i < cantidad; i++) {
//         const numeroAleatorio = Math.floor(Math.random() * 100); 
//         numerosAleatorios.push(numeroAleatorio);
//     }
//     return numerosAleatorios;
// }
// const numerosAleatorios = NumerosAleatorios(9);
// console.log(numerosAleatorios);


// const card = document.querySelector(".card");
// console.log(card)

// - documentar esta parte, esto sirve para llamar la función y que esta funcione y/o se ejecute


//const contenedorCarrito = document.getElementById('lista-carrito').querySelector('tbody');
let totalCarrito = [];


MostrarCarrito() 

function MostrarCarrito(){
const carrito = document.querySelector(".img-fluid");
carrito.addEventListener("click",()=>{
console.log("Diste Click En El Carrito");
const miModal = new bootstrap.Modal(document.getElementById("miModal"));
miModal.show();

})

// Para que cuando se de click en el boton se agrege al carrito

}
const contenedor = document.querySelector(".product-grid");
console.log(contenedor);


cargarEventlisteners()
function cargarEventlisteners(){
    contenedor.addEventListener("click",cargarProductos);
    console.log("Diste Click En El Contenedor");
}



function cargarProductos(e) {
    const productoSeleccionado = e.target.parentElement.parentElement;
    console.log(productoSeleccionado);
    leerDatos(productoSeleccionado);
}





function leerDatos(data) {
    console.log(data);

    const productos = {
        img : data.querySelector("img").src,
        nombre: data.querySelector("_blank").textContent,
        precio: Math.floor(data.querySelector(".card-text").innerText.replace(/[^0-9.-]+/g,"")),
        cantidad: 1,
        id: data.querySelector("a").getAttribute("data-id")
    };
    const existe = totalCarrito.some(producto => producto.id === productos.id);
if (existe) {
    totalCarrito = totalCarrito.map(producto => {
        if (producto.id === productos.id) {
            producto.cantidad++;
        }
        return producto;
    });
} else {
    totalCarrito = [...totalCarrito, productos];
}

}



function actualizarCarritoHtml() {
    contenedorCarrito.innerHTML = '';
    totalCarrito.forEach(producto => {
     const {img, nombre, precio, cantidad, id } = producto;
     
     const row = document.createElement('tr');
     row.innerHTML = `
        <td><img src="${img}" width="50"></td>
        <td>${nombre}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td><a href="#" class="btn btn-danger eliminarProducto" data-id="${id}">x</a></td>
     `;

     contenedorCarrito.appendChild(row);
    });

}
