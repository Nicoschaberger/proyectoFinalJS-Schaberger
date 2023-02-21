const menuContenedor = document.querySelector("#menu-contenedor");
const btnProductos = document.querySelector("#btnProductos");
const carroContenedor = document.querySelector("#carro-contenedor")
const cantidadCarrito = document.querySelector("#cantidadCarrito");
const carritoCompra = document.querySelector("#carrito-compra");
const elimino = document.getElementById("vaciarCarrito");
const compraAhora = document.querySelector("#compraAhora")


let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function init(){
    titulo();
    mostrarMenu();
    compra(carrito);
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
      mostrarCarrito(carrito);
      totalCarrito()
      localStorage.setItem('carrito', JSON.stringify(carrito))

    };
    
    function totalCarrito(){
      const total = document.getElementById('total')
      total.innerText = carrito.reduce((acc, el) => acc + el.precio, 0)
    }
    
    function mostrarCarrito(carrito) {
      const carritoProd = document.getElementById('carritoCompra');
      carritoProd.innerHTML = "";
      carrito.forEach((producto) => {
        let li = document.createElement('li')
        li.innerHTML += `${producto.nombre} ${producto.precio}`
        carritoProd.appendChild(li);  
      })
      eliminar(carrito);
    }
    
      
    function eliminar(carrito){      
      elimino.addEventListener('click', () => {
      carrito.splice(0, carrito.length);
      mostrarCarrito(carrito);
      });
    }
        
    
    function compra(carrito) {
      compraAhora.addEventListener("click", () => {
        carrito.length = 0;
        localStorage.setItem("carrito", JSON.stringify(carrito))
      });
    };


  init()


