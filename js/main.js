
// Declaraaamos las variables globales
const form = document.getElementById('formulario');
const input = document.getElementById('nombre');
const saludo = document.getElementById('saludo');
const borrar = document.getElementById('btn-borrar');



form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombreUsuario = input.value.trim();

    if (nombreUsuario == '') {
        alert('Ingrese su nombre ');
        return;
    }

    localStorage.setItem('usuario', nombreUsuario);

    saludo.textContent = 'Bienvenido: ' + nombreUsuario;

    input.value='';

});



document.addEventListener('DOMContentLoaded', () => {

    const usuarioGuardado = localStorage.getItem('usuario');

    if (usuarioGuardado) {
        saludo.textContent = 'Bienvenido de nuevo: ' + usuarioGuardado;
    }

});


  
borrar.addEventListener('click', () => {
    localStorage.removeItem('usuario');
    saludo.textContent = 'Bienvenido usuario indefinido';

});



document.addEventListener('DOMContentLoaded', () =>{
    usuarioCreado = localStorage.getItem('usuario');
    
});







