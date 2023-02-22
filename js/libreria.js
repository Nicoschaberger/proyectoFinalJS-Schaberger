const { value: email } = Swal.fire({
    title: 'Ingrese su email',
    input: 'email',
    inputLabel: 'Ingrese su email',
    inputPlaceholder: 'java@hotmail.com'
  })
  
  if (email) {
    Swal.fire(`Su email ingresado es: ${email}`)
  }


  
function btnConfirmar(){
  const compraAhora = document.querySelector("#compraAhora");
  compraAhora.addEventListener('click', () => {
    Swal.fire({
      title: 'Esta seguro de que desea confirmar la compra?',
      text: "Si lo esta, seleccione confirmar",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Confirmado!',
          'Gracias por su compra!'
        )
      }
    })
  })
}

btnConfirmar();
