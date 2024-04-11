// Traer informacion sobre la interaccion del usuario en los campos del formulario y el boton
const inputBoton = document.getElementById('input_enviar');
inputBoton.addEventListener('click', (e) => {
    e.preventDefault();

    const inputNombre = document.getElementById('input_nombre').value;
    const inputApellidos = document.getElementById('input_apellidos').value;
    const inputCorreo = document.getElementById('input_correo').value;
    const inputMensaje = document.getElementById('input_mensaje').value;

    if (inputNombre.length !== 0 && inputApellidos.length !== 0 && inputMensaje.length !== 0 && inputCorreo.length !== 0) {
        if (inputCorreo.includes('@') && inputCorreo.includes('.')) {
            if (inputMensaje.length >= 50) {
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
                            <img src="Imagen/contacto/flecha.png" alt="Imagen de una flecha">
                            <img id="flecha_reves" src="Imagen/contacto/flecha.png" alt="Imagen de una flecha">
                        </div>
                        <div id="premio">
                            <video id="conteo" src="Imagen/contacto/conteo.mp4" autoplay width=75%></video>
                            <div>&nbsp;</div>
                            <video id="video" src="Imagen/contacto/premio.mp4" width=100%></video>
                        </div>
                    </section>
                    <script src="JS/form.js"></script>`;

                // Funcion para dar un delay de inicio automatico al video
                // y que tanto el video como el contador regresivo aparezcan y desaparezcan cuando se necesitan
                ocultar();
                function ocultar(){
                    document.getElementById('video').style.display = 'none';
                    }
                
                let video = document.getElementById("video");
                    video.addEventListener("canplay", function() {
                    setTimeout(function() {  

                        ocultar2();
                        function ocultar2(){
                            document.getElementById('conteo').style.display = 'none';
                            }
                                                
                        mostrar();
                        function mostrar(){
                            document.getElementById('video').style.display = 'block';
                            }   
                                          
                        video.play();
                    }, 5000);
                    });

                } else {
                    alert('Su mensaje debe contener al menos 50 caracteres');
                }
        } else {
            alert('Debe escribir un correo electronico valido para poder mandar su mensaje de forma correcta');
        }
    } else {
        alert('Debe rellenar todos los campos para poder mandar su mensaje de forma correcta');
    }
});