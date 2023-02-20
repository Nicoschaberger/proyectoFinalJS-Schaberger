const menuContenedor = document.querySelector("#menu-contenedor");
const btnProductos = document.querySelector("#btnProductos");
const carroContenedor = document.querySelector("#carro-contenedor")
const cantidadCarrito = document.querySelector("#cantidadCarrito");
const carritoCompra = document.querySelector("#carrito-compra");
const vacioCarrito = document.querySelector("#vaciarCarrito");

localStorage.clear()

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function init(){
    titulo();
    mostrarMenu();   
}

function titulo() {
    const titulo = document.createElement("h1");
    titulo.setAttribute("class", "title");
    titulo.innerHTML = "Nuestros productos son:";
    menuContenedor.appendChild(titulo)
  }

  function mostrarMenu() {
      productos.forEach((producto) => {
          const btn = document.createElement("div");
          btn.setAttribute ("class", "botonProductos");
          btn.setAttribute("id", `${producto.id}`);
          btn.innerHTML = ` 
          <img class="imagen" src="${producto.img}">
          <h2>${producto.nombre}</h2>
          <p class="price">${producto.precio} $</p>
          <button id="btn-${producto.id}" class="btnCompra">Comprar</button>
          `;  
          btnProductos.appendChild(btn);
          const btnadd = document.getElementById(`btn-${producto.id}`);
          btnadd.addEventListener("click", () => {
            agregarAlCarrito(producto.id)
          })
      });
  }

  function botonera() {
    let div = document.createElement("div");    
    let botones = document.getElementsByClassName("botonProductos");    
    for (const boton of botones) {
      boton.addEventListener("click", () => {
        div.innerHTML = "";
        let galeria = productos.filter((producto) => producto.nombre == boton.id);
      });
    }    
    btnProductos.appendChild(div);
  }  
  
  function agregarAlCarrito(id) {
    let producto = productos.find((item) => item.id == id);
      carrito.push(producto);
      console.log(carrito);
      mostrarCarrito(producto);
      totalCarrito()
      localStorage.setItem('carrito', JSON.stringify(carrito))

    };
    
    function totalCarrito(){
      const total = document.getElementById('total')
      total.innerText = carrito.reduce((acc, el) => acc + el.precio, 0)
    }
    
    function mostrarCarrito(producto) {
      const carritoProd = document.getElementById('carritoCompra')
      let li = document.createElement('li')
      li.innerHTML += `${producto.nombre} ${producto.precio}`
      carritoProd.appendChild(li);  
    }
    
    function eliminar(){
      const elimino = document.getElementById("vaciarCarrito");
      elimino.addEventListener('click', () => {
      carrito.splice(0, carrito.length);
      })
    }
    
  eliminar();
  init()


