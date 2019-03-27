
/*------------------------------------------*/
//Parametros para las funciones 


/*function imprimir(nombre, apellido){

    apellido = apellido || "SSS";
    

    console.log(nombre+" "+apellido);
}
imprimir("July", "Mendoza");*/


/*function imprimir (persona){
    console.log(persona.nombre +" "+ persona.apellido);
}

var obj= {
    nombre: "July",
    apellido: "Soriana"
}
imprimir(obj);*/

/*
function imprimir(fn){

    fn();
}

var miFuncion = function(){
    console.log("miFunción");
}
imprimir(miFuncion);*/

/*
imprimir(function(){

console.log("Función anónima");

});*/


/*----------------------------------------------*/
//Retorno de las funciones
/*
function obtenerAleatorio(){

    return Math.random();
}

//console.log( obtenerAleatorio()+10 );

function obtenerNombre(){
    return "Andrea";
}
//var nombre = obtenerNombre();
//console.log(nombre);

function esMayor05(){

    if(obtenerAleatorio()>0.5){
        return true;
    }else{
        return false;
    }
}
console.log(esMayor05());

if(esMayor05()){
    console.log("Es mayor a 0.5");
}else{
    console.log("Es menor a 0.5");
}


function creaPersona(nombre, apellido){
    return {
        nombre: nombre,
        apellido: apellido
    }
}

var persona = creaPersona("María", "Vazquez");
//console.log(persona);

function creaFuncion(){

    return function(nombre){
        console.log("Me creo "+ nombre);

        return function(){
            console.log("Segunda funcion");
        }
    }
}

var nuevaFuncion = creaFuncion();
//nuevaFuncion(persona.nombre);

var segundaFuncion = nuevaFuncion(persona.nombre);
segundaFuncion();*/

/*------------------------------------------------------------*/
//Funciones de primera clase 

function a(){

    console.log("Función a");

}

a();

a.nombre = "María";

