

const usuarioCreado = document.getElementById('usuario-creado');
// Escucha el evento DOMContentLoaded para esperar a que el documento HTML haya sido completamente cargado y procesado, antes de ejecutar la función que viene dentro. 
document.addEventListener('DOMContentLoaded', () => {

     
    // Obtenemos el valor asociado a la clave 'usuario' del localStorage (valor lo que se haya guardado anteriormente).
    const usuarioGuardado = localStorage.getItem('usuario'); 
    
    // Verificamos si hay un usuario guardado
    if (usuarioGuardado) {
        usuarioCreado.textContent = 'Bienvenido de nuevo: ' + usuarioGuardado;
    }

});