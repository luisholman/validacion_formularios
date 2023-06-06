export function valida(input){
const tipoDeInput = input.dataset.tipo;
if(validadores[tipoDeInput]){
    validadores[tipoDeInput](input)
}

if (input.validity.valid) {
    input.parentElement.classList.remove("input-container--invalid");
    input.parentElement.querySelector("input-message-error").innerHTML = ""
}else{
input.parentElement.classList.add("input-container--invalid");
input.parentElement.querySelector("input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input)

}
}

const tipoDeErrores = { 
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",

};

const mensajesDeError = {
    nombre:{
        valueMissing: "Este campo no puede estar vacio"
    },

    email:{
        valueMissing: "Este campo no puede estar vacio",
        typeMismatch: "El correo no es valido"
    },

    password :{
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch:"Al menos 6 caracteres, maximo 12 debe contener 1 letra micuscula ,1 mayuscula, un numero y no puede contener caracteres especiales"
    },

    nacimiento:{
        valueMissing: "Este campo no puede estar vacio",
        customError:"Debes de tener almenos 18 años de edad"
    }
}

function mostrarMensajeDeError(tipoDeInput,input){
let mensaje="";

return mensaje
}

const validadores={
    nacimiento: input=>nacimiento(input)
}

function validarNacimiento(input){
const fechaCliente= new Date (input.value);
let mensaje="";
if(!mayorDeEdad(fechaCliente)){
mensaje="Debes tener al menos 18 años de edad"
};

input.setCustomValidity(mensaje) /*funcion para escribir el mensaje*/ 
}

function mayorDeEdad(fecha){
const fechaActual = new Date();
const diferenciaFechas = new Date(
    fecha.getUTCFullYear() + 18, 
    fecha.getUTCMonth(), 
    fecha.getUTCDate()
    );
return diferenciaFechas<=fechaActual;
}