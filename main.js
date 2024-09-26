const cards = document.querySelectorAll('.card');
const carrito = document.getElementById("carrito");
const contenedorCarrito = document.getElementById('lista-carrito').querySelector('tbody');
const contenedor = document.querySelector(".box-container");
let totalCarrito = 0;


MostrarCarrito() 

function MostrarCarrito(){
    const carrito = document.querySelector(".img-fluid");
    carrito.addEventListener("click",()=>{
    console.log("Diste Click En El Carrito");
        const miModal = new bootstrap.Modal(document.getElementById("miModal"));
        miModal.show();

    })

// Para que cuando se de click en el boton se agrege al carrito

};


cargarEventlisteners()
function cargarEventlisteners(){
    contenedor.addEventListener('click', agregarProducto);
    console.log("Diste click en el contenedor")
    };


function agregarProducto(e){
    e.preventDefault();

    if (e.target.classList.contains('btn')) {
        const button = e.target;
        const productoSeleccionado = e.target.parentElement;

        const productos = {
                 nombre: productoSeleccionado.querySelector('.card-title').textContent,
                 precio: productoSeleccionado.querySelector('.card-text').innerText,
                 cantidad: 1,
             };

             agregarProductoalCarrito(productos);

        setTimeout(()=>{
            button.textContent = "Agregando Al Carrito...";
        },1000);

        setTimeout(()=>{
            button.textContent = "Agregado Al Carrito...";
        },4000);

        setTimeout(()=>{
            button.textContent = "Agregar Al Carrito...";
        },4000);


        
    }
}

function agregarProductoalCarrito(producto) {
    const fila = document.createElement('tr');
    fila.innerHTML = `
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td>${producto.cantidad}</td>
        <td><button class="btn btn-danger borrar-producto">X</button></td>
    `;

    contenedorCarrito.appendChild(fila);
    

actualizarTotal(producto.precio);

   
    fila.querySelector('.borrar-producto').addEventListener('click', eliminarProducto);
}

function actualizarTotal(precioProducto) {
    
    const precio = parseFloat(precioProducto.replace('$', '').replace('.', ''));
    totalCarrito += precio;

    
    document.getElementById('total-carrito').textContent = `Total: $${totalCarrito.toFixed(3)}`;
}

function eliminarProducto(e) {
    const fila = e.target.parentElement.parentElement;
    const precioProducto = fila.querySelector('td:nth-child(2)').textContent;

    
    const precio = parseFloat(precioProducto.replace('$', '').replace('.', ''));
    totalCarrito -= precio;

    
    document.getElementById('total-carrito').textContent = `Total: $${totalCarrito.toFixed(3)}`;

    
    fila.remove();
}
