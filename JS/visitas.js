// Ver si el contador existe en el almacenamiento local
if(localStorage.getItem('visitas')) {
    // Si el contador existe le sumamos 1
    let visitas = parseInt(localStorage.getItem('visitas')) + 1;
    localStorage.setItem('visitas', visitas);
} else {
    // Si es la primera visita, comenzamos el contador en 1
    localStorage.setItem('visitas', 1);
}

// Obtener el contador de visitas
let contadorVisitas = localStorage.getItem('visitas');
document.getElementById('contador_visitas').innerHTML = `<div id="bienvenido">¡Bienvenida/o!</div>Has visitado esta pagina ${contadorVisitas} veces`;
