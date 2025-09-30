
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


// Capturamos el arreglo existente en el Local Satorage o lo creamos vacio o lo creamos vacio sino existe
const cursosGuardados= JSON.parse(localStorage.getItem('cursos')) ||[];

// AGREGAMOS a l arreglo [] el curso {} agregamos al arreglo cursos guardados el nuevo curso
cursosGuardados.push(newCurso);

    // Se guarda el objeto en el localStorage como un string JSON
    localStorage.setItem('cursos', JSON.stringify(cursosGuardados));

    form.reset();

});




document.addEventListener('DOMContentLoaded', ()=>{
const cursoCreado= localStorage.getItem('curso');


    if (cursoCreado) {
    const objetoCurso= JSON.parse(cursoCreado);
    mensajeCurso.innerHTML = ' curso: ' + objetoCurso.nombre +' profesor: ' + objetoCurso.profesor + ' precio: '+ objetoCurso.precio + ' ciudad: ' + objetoCurso.ciudad + ' cupo: ' + objetoCurso.cupo;
    }
 });

borrar.addEventListener('click', ()=>{
localStorage.removeItem('cursos');
mensajeCurso.textContent = 'Curso eliminado';
 });



    









