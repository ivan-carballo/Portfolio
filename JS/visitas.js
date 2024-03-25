// Verificar si el contador ya existe en el almacenamiento local
if(localStorage.getItem('visitas')) {
    // El contador ya existe, por lo que incrementamos en 1
    let visitas = parseInt(localStorage.getItem('visitas')) + 1;
    localStorage.setItem('visitas', visitas);
} else {
    // Si es la primera visita, inicializamos el contador en 1
    localStorage.setItem('visitas', 1);
}

// Obtener el contador de visitas
let contadorVisitas = localStorage.getItem('visitas');

// Mostrar el contador en la página
document.getElementById('contador_visitas').innerText = `¡Bienvenida/o! Has visitado esta pagina ${contadorVisitas} veces`;