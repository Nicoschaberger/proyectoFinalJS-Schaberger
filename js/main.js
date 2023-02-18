const menuContenedor = document.querySelector("#menu-contenedor");
const btnProductos = document.querySelector("#btnProductos");
const carroContenedor = document.querySelector("#carro-contenedor")
const cantidadCarrito = document.querySelector("#cantidadCarrito");

let carrito =[];
function init(){
    titulo()
    mostrarMenu()
    botonera()
    agregarAlCarrito()    
    recuperar()
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
          <img src="${producto.img}">
          <h2>${producto.nombre}</h2>
          <p class="price">${producto.precio} $</p>
          <button class="btncompra">Comprar</button>
          `;  
          btnProductos.appendChild(btn);
      });
  }

  function botonera() {
    let div = document.createElement("div");
    btnProductos.appendChild(div);
    let div2 = document.createElement("div");
    div2.setAttribute("id", "elementos");
    btnProductos.appendChild(div2);
    let botones = document.getElementsByClassName("btnProductos");

    for (const boton of botones) {
      boton.addEventListener("click", () => {
        div.innerHTML = "";
        let galeria = productos.filter( (producto) => producto.id == boton.id);
      });
    }
  }
    
  function agregarAlCarrito(){
    let btnadd = document.getElementsByClassName("btnProductos");
      for (const boton of btnadd) {
        botones.addEventListener('click',()=>{
          let producto = producto.find((producto) => producto.nombre == boton.nombre);
            carrito.push(producto);
            mostrarCarrito();
            totalCarrito()
            localStorage.setItem('carrito', JSON.stringify(carrito))
        });          
      }
  }    
  
  function totalCarrito(){
      const total = document.getElementById('total')
      total.innerText = carrito.reduce((acc,el)=> acc + el.precio,0)
  }
  
  function mostrarCarrito(){
    const carrito = document.getElementById('carrito')
    let li = document.createElement('li')
    li.innerHTML += `${producto.nombre} ${producto.precio}`
    carrito.appendChild(li)
  }
  
  function recuperar() {
      let recuperoLS = JSON.parse(localStorage.getItem('carrito'))
      if(recuperoLS){
        recuperoLS.forEach(item=>{
          mostrarCarrito(item)
          carrito.push(item)
          totalCarrito()
        })
      }
    }
    
    const saveLocal = () => {
      localStorage.setItem("carrito", JSON.stringify(carrito));
    };


    init();
  



/*

function botonera() {
    let div = document.createElement("div");
    document.body.appendChild(div);
    let div2 = document.createElement("div");
    div2.setAttribute("id", "elementos");
    document.body.appendChild(div2);
    let botones = document.getElementsByClassName("botonProductos");

    for (const boton of botones) {
        boton.addEventListener("click", () => {
          div.innerHTML = "";
          let galeria = productos.filter( (producto) => producto.categoria == boton.id);
        });
      }
}


  



init();
*/