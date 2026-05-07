//VARIABLES
const botonConsulta = document.querySelector('#boton')
const mostrarDatosUsuario = document.querySelector('#contenido')
//EVENTOS
botonConsulta.addEventListener('click', () => {
  //Avisar al usuario que estamos buscando los datos:
  mostrarDatosUsuario.innerHTML = "Consultando a la API...";
  consultarApi()
    .then((usuarioRecibido) => {
      // Cuando la promesa se cumpla, dibujamos el usuario en el HTML
      mostrarDatosUsuario.innerHTML = `
                <p><strong>Nombre:</strong> ${usuarioRecibido.nombre}</p>
                <p><strong>Email:</strong> ${usuarioRecibido.email}</p>
                `;
    })
    .catch((error) => {
      // Si algo falla, mostrar el error:
      mostrarDatosUsuario.innerHTML = "Hubo un error al obtener los datos.";
    });
});

//FUNCIONES
const consultarApi = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const usuarioRecibido = {
        nombre: "Mariana Nunes da Silva",
        email: "mari.silva@email.com"
      };
      resolve(usuarioRecibido);
      //Retraso del simulado: 2 segundos, son lo mismo que 2000ms:
    }, 2000);
  });
};