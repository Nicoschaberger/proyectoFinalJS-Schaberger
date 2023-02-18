const { value: email } = Swal.fire({
    title: 'Ingrese su email',
    input: 'email',
    inputLabel: 'Ingrese su email',
    inputPlaceholder: 'java@hotmail.com'
  })
  
  if (email) {
    Swal.fire(`Su email ingresado es: ${email}`)
  }
