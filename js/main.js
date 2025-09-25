
// Declaraaamos las variables globales
const form = document.getElementById('formulario-curso');
const inputCurso = document.getElementById('nombre');
const inputProfesor = document.getElementById('profesor');
const inputPrecio = document.getElementById('precio');
const inputCiudad = document.getElementById('ciudad');
const inputCupo = document.getElementById('cupo');
const mensajeCurso = document.getElementById('mensaje-curso');
const borrar = document.getElementById('btn-borrar');



// Se agrega un evento al formulario para manejar el envío (submit)
form.addEventListener("submit", (e) => {
    // Previene que el formulario recargue la página al enviarse
    e.preventDefault();

    // Obtiene y limpia los valores ingresados en los inputs
    const curso = inputCurso.value.trim();
    const profesor = inputProfesor.value.trim();
    const precio = inputPrecio.value.trim();
    const ciudad = inputCiudad.value.trim();
    const cupo = inputCupo.value.trim();

    // Valida que todos los campos estén llenos
    if (curso == ''|| profesor ==''|| precio ==''|| ciudad ==''|| cupo =='') {
        alert('Ingrese todos los datos ');
        return; //Si falta algún dato, se detiene la ejecución
    }
    // Se construye un objeto con los datos del curso
    const newCurso ={
        nombre: curso,
        profesor: profesor,
        precio: precio,
        ciudad: ciudad,
        cupo: cupo
    }


    // Se guarda el objeto en el localStorage como un string JSON
    localStorage.setItem('curso', JSON.stringify(newCurso));
    // Se reinicia el formulario (se limpian los campos)
    form.reset();

    // Se recupera el curso guardado desde localStorage
    const cursoCreado= localStorage.getItem('curso');
         // Se convierte el string JSON a objeto JavaScript
        const objetoCurso= JSON.parse(cursoCreado);
        // Se muestra el contenido del curso en el elemento HTML con id "mensaje-curso"
        mensajeCurso.innerHTML = 
        'Curso: ' + objetoCurso.nombre + '<br>' +
        'Profesor: ' + objetoCurso.profesor + '<br>' +
        'Precio: ' + objetoCurso.precio + '<br>' +
        'Ciudad: ' + objetoCurso.ciudad + '<br>' +
        'Cupo: ' + objetoCurso.cupo;
});



// Este bloque se ejecuta automáticamente cuando la página ha terminado de cargar
document.addEventListener('DOMContentLoaded', ()=>{
    // Se verifica si ya hay un curso guardado en localStorage
    const cursoCreado= localStorage.getItem('curso');
     // Si existe, se convierte de string a objeto
    if (cursoCreado) {
        const objetoCurso= JSON.parse(cursoCreado);
        // Se muestra la información del curso guardado
        mensajeCurso.innerHTML = ' Curso: ' + objetoCurso.nombre + '<br>' + 'Profesor: ' + objetoCurso.profesor + '<br>' + ' Precio: '+ objetoCurso.precio + '<br>'+ ' Ciudad: ' + objetoCurso.ciudad + '<br>' + ' Cupo: ' + objetoCurso.cupo;
    }

});


// Se agrega un evento al botón de borrar para eliminar el curso del localStorage
borrar.addEventListener('click', ()=>{
    // Se elimina el item 'curso' del almacenamiento local
    localStorage.removeItem('curso');
    // Se muestra un mensaje indicando que el curso fue eliminado
    mensajeCurso.textContent = 'Curso eliminado';
});














// document.addEventListener('DOMContentLoaded', () =>{
//     usuarioCreado = localStorage.getItem('usuario');
    
// });







