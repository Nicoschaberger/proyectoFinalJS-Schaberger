const urlUsuarios = "https://jsonplaceholder.typicode.com/users";
const usuarios = document.querySelector("#lista-usuarios");

fetch(urlUsuarios)
.then((response) => response.json())
.then((data) => {
    data.forEach(usuario => {
        const li = document.createElement("li")
        li.setAttribute("class", "proveedores")
        li.textContent = usuario.name;
        usuarios.appendChild(li);
    });
})