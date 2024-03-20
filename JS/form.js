const inputBoton = document.getElementById('input_enviar');
inputBoton.addEventListener('click', F_enviarForm);

function F_enviarForm () {
    const inputNombre = document.getElementById('input_nombre').value;
    const inputApellidos = document.getElementById('input_apellidos').value;
    const inputCorreo = document.getElementById('input_correo').value;
    const inputMensaje = document.getElementById('input_mensaje').value;

    alert('nombre: ' + inputNombre + '  Apellidos: ' + inputApellidos + '  correo: ' + inputCorreo + '  mensaje: ' + inputMensaje);
}