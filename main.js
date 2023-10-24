const usuarios = [
    { usuario: 'Ivan', contraseña: 'coder1' },
    { usuario: 'javaScript', contraseña: 'coderhouse' }
  ];
  
  function iniciarSesion() {
    const usuario = prompt("Usuario: ");
    const contraseña = prompt("Contraseña: ");
  
    const usuarioEncontrado = (i => i.usuario === usuario && i.contraseña === contraseña);
  
    if (usuarioEncontrado) {
      console.log("Sesión iniciada para " + usuario);
    } else {
      console.log("Acceso denegado. Verifica tu usuario y contraseña.");
    }
  }
  
  console.log("Simulador de Inicio de Sesión");
  iniciarSesion();