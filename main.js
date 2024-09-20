let totalCarrito = [];


MostrarCarrito() 

function MostrarCarrito(){
const carrito = document.querySelector(".titulo img");
carrito.addEventListener("click",()=>{
console.log("Diste Click En El Carrito");
const miModal = new bootstrap.Modal(document.getElementById("miModal"));
miModal.show();

})

// Para que cuando se de click en el boton se agrege al carrito

}
const contenedor = document.querySelector(".product-grid");
console.log(contenedor);

function contenedorr() {
    const contenedor = document.getElementById('button');
    console.log(contenedor);
    // let totalCarrito = [];
}

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
        nombre: data.querySelector(".namee").textContent,
        precio: Math.floor(data.querySelector(".price ").innerText.replace(/[^0-9.-]+/g,"")),
        cantidad: 1,
        id: data.querySelector("a").getAttribute("data-id")
    }};
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
    console.log(productos);
}




// const existe = totalCarrito.some(producto => producto.id === productos.id);
// if (existe) {
//     totalCarrito = totalCarrito.map(producto => {
//         if (producto.id === productos.id) {
//             producto.cantidad++;
//         }
//         return producto;
//     });
// } else {
//     totalCarrito = [...totalCarrito, productos];
// }


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
