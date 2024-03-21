const inputBoton = document.getElementById('input_enviar');
inputBoton.addEventListener('click', F_enviarForm);

function F_enviarForm () {
    const inputNombre = document.getElementById('input_nombre').value;
    const inputApellidos = document.getElementById('input_apellidos').value;
    const inputCorreo = document.getElementById('input_correo').value;
    const inputMensaje = document.getElementById('input_mensaje').value;

    if (inputCorreo.includes('@') && inputCorreo.includes('.')){
        let mensajeEnviado = document.getElementById('formulario_completo');
        mensajeEnviado.innerHTML = `
            <section id="mensaje_enviado">
                <div id="mensaje_confirmacion">
                    Su mensaje se ha enviado <div id=correcta>correctamente</div>
                </div>
                <div id="mensaje_premio">
                    Tenga aqui su premio
                </div>
                <div id="mensaje_flecha">
                    <img src="Imagen/flecha.png" alt="Imagen de una flecha">
                    <img id="flecha_reves" src="Imagen/flecha.png" alt="Imagen de una flecha">
                </div>
                <div id="premio">
                    <button type="submit" id="input_premio">Recibir premio</button>
                    <video src="Imagen/premio.mp4" controls width=100%></video>
                </div>
            </section>`;
    }
}