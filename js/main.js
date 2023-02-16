const contenedor = document.querySelector("#contenedor");

let carrito =[];

function init(){
    titulo()
    mostrarMenu()
    botonera();
    agregarAlCarrito();
    recuperar();
}

function titulo() {
    const titulo = document.createElement("h1");
    titulo.setAttribute("class", "title");
    titulo.innerHTML = "Verduleria Java";
    document.body.appendChild(titulo)
}

function mostrarMenu() {
    productos.forEach((producto) => {
        const btn = document.createElement("button");
        btn.setAttribute ("class", "botonProductos");
        btn.setAttribute("id", `${producto.id}`);
        btn.innerHTML = producto.nombre;

        document.body.appendChild(btn);
    });
}

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

function agregarAlCarrito(){
    let btnadd = document.getElementsByClassName("botonProductos");
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

  function eliminar(){
    
  }



init();