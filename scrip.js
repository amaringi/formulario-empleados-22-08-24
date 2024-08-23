let nombreInput = document.querySelector('#nombre-input')
let tippoIdInput = document.querySelector('#tipo-id-input')
let numeroInput = document.querySelector('#numero-input')
let areaInput = document.querySelector('#area-input')
let salarioInput = document.querySelector('#salario-input')
let btnAgregar = document.querySelector('.btn-agregar')

//agregar evento al boton
btnAgregar.addEventListener("click",() => {
    //alert("diste click")
    let empleadoForm = validarForm()
    guardarDtos(empleadoForm)
    console.log(empleadoForm)
})

//funcion validar campos del texto
function validarForm() {
    let datosForm
    if (nombreInput.value && tippoIdInput.value && numeroInput.value && areaInput.value && salarioInput.value){
        datosForm = {
            nombre: nombreInput.value,
            tipoId: tippoIdInput.value,
            numero: numeroInput.value,
            area: areaInput.value,
            salario: salarioInput.value,
        }
        nombreInput.value = "";
        tippoIdInput.value = "";
        numeroInput.value = "";
        areaInput.value = "";
        salarioInput.value = "";
    }else{
        alert("todos los campos son necesarios")
    }
    return datosForm;
}

//funcion para guardar los datos en localStorage
function guardarDtos (datos){
    let todosEmpleados = [];
    let empleadosPrevios = JSON.parse(localStorage.getItem("empleados"))
    if(empleadosPrevios != null){
    todosEmpleados = empleadosPrevios;
    }
    todosEmpleados.push(datos); //agregamos los datos al array
    localStorage.setItem("empleados",JSON.stringify(todosEmpleados));
    alert("datos duardados con exito")
}
