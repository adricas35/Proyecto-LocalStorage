
// Declaraaamos las variables globales
const form = document.getElementById('formulario-curso');
const inputCurso = document.getElementById('nombre');
const inputProfesor = document.getElementById('profesor');
const inputPrecio = document.getElementById('precio');
const inputCiudad = document.getElementById('ciudad');
const inputCupo = document.getElementById('cupo');
const mensajeCurso = document.getElementById('mensaje-curso');
const borrar = document.getElementById('btn-borrar');




form.addEventListener("submit", (e) => {
    e.preventDefault();

    const curso = inputCurso.value.trim();
    const profesor = inputProfesor.value.trim();
    const precio = inputPrecio.value.trim();
    const ciudad = inputCiudad.value.trim();
    const cupo = inputCupo.value.trim();


    if (curso == ''|| profesor ==''|| precio ==''|| ciudad ==''|| cupo =='') {
        alert('Ingrese todos los datos ');
        return;
    }
// En este ejercicio se construye un objeto con caracteristicas con sus diferentes claves y valores
    const newCurso ={
        nombre: curso,
        profesor: profesor,
        precio: precio,
        ciudad: ciudad,
        cupo: cupo
    }



    localStorage.setItem('curso', JSON.stringify(newCurso));

    form.reset();

});


document.addEventListener('DOMContentLoaded', ()=>{
    const cursoCreado= localStorage.getItem('curso');
// 
    if (cursoCreado) {
        const objetoCurso= JSON.parse(cursoCreado);
        mensajeCurso.innerHTML = ' curso: ' + objetoCurso.nombre +' profesor: ' + objetoCurso.profesor + ' precio: '+ objetoCurso.precio + ' ciudad: ' + objetoCurso.ciudad + ' cupo: ' + objetoCurso.cupo;
    }

});

borrar.addEventListener('click', ()=>{
    localStorage.removeItem('curso');
    mensajeCurso.textContent = 'Aquí se mostrará el curso creado';
})












    // mensajeCurso.textContent = 'Aqui se mostrara el curso creado: ' + newCurso;

    // input.value='';

// document.addEventListener('DOMContentLoaded', () => {

//     const usuarioGuardado = localStorage.getItem('usuario');

//     if (usuarioGuardado) {
//         saludo.textContent = 'Bienvenido de nuevo: ' + usuarioGuardado;
//     }

// });


  
// borrar.addEventListener('click', () => {
//     localStorage.removeItem('usuario');
//     saludo.textContent = 'Bienvenido usuario indefinido';

// });



// document.addEventListener('DOMContentLoaded', () =>{
//     usuarioCreado = localStorage.getItem('usuario');
    
// });







