const menuContenedor = document.querySelector("#menu-contenedor");
const btnProductos = document.querySelector("#btnProductos");
const carroContenedor = document.querySelector("#carro-contenedor")
const cantidadCarrito = document.querySelector("#cantidadCarrito");
const carritoCompra = document.querySelector("#carrito-compra");


let carrito =[];
function init(){
    titulo();
    mostrarMenu();   
    agregarAlCarrito();
    recuperar();
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
          <button class="btnCompra">Comprar</button>
          `;  
          btnProductos.appendChild(btn);
      });
  }

  function botonera() {
    let div = document.createElement("div");    
    let botones = document.getElementsByClassName("botonProductos");
    
    for (const boton of botones) {
      boton.addEventListener("click", () => {
        div.innerHTML = "";
        let galeria = productos.filter( (producto) => producto.nombre == boton.id);
      });
    }
    
    btnProductos.appendChild(div);
  }  
  
  function agregarAlCarrito() {
    let btnadd = document.getElementsByClassName("btnCompra");
    for (const botones of btnadd) {
      botones.addEventListener('click',()=>{
        let producto = productos.find((item) => item.id == botones.id);
        carrito.push(producto);
        mostrarCarrito(producto);
        totalCarrito()
        localStorage.setItem('carrito', JSON.stringify(carrito))
      })
      
    }
  }
  
  function totalCarrito(){
    const total = document.getElementById('total')
    total.innerText = carrito.reduce((acc,el)=> acc + el.precio,0)
  }
  
  function mostrarCarrito(producto){
    const carritoProd = document.getElementById('carritoCompra')
  let li = document.createElement('li')
  li.innerHTML += `${producto.nombre} ${producto.precio}`
  carritoProd.appendChild(li)
  }
  
  function recuperar() {
    let recuperoLS = JSON.parse(localStorage.getItem('carrito'))
    if(recuperoLS){
      recuperoLS.forEach(producto => {
        mostrarCarrito(producto)
        carrito.push(producto)
        totalCarrito()
      })
    }
  }
  
  init()



