

function imprimir(){
    
    for(var i = 0; i<8000; i++){

        console.log("imprimio");
    }
}

function presionoClick(){
    console.log("Presiono");
}

//imprimir();

/*------------------------------------------------*/

var num = 10;
var str = "texto";
var bol = true;
var und = undefined;
var nul = null;

var obj = {
    numero:10,
    texto:"Nuevo texto",

    objHijo: {
        numero2:20,
        text2: "Nuevo texto2"
    }
};

//console.log(obj);

/*-----------------------------------------------------*/
//Por valor y por referencia

var a = 10;
var b = a;

//console.log("a: ", a);
//console.log("b", b);

a=20;

//console.log("a: ", a);
//console.log("b: ",b);

var c = {
    nombre: "July"
}
var d = c;

//console.log("c: ",c);
//console.log("d: ",d);

c.nombre = "Nadia";

//console.log("c: ",c);
//console.log("d: ",d);

d.nombre = "Vanessa";

//console.log("c: ",c);
//console.log("d: ",d);

/*--------------------------------------*/
//Notación de punto y corchetes

var persona = {
    nombre: "Juana",
    apellido: "Herrera",
    edad: 25,
    direccion: {
        pais: "México",
        ciudad: "San José",
        edificio: {
            nombre: "Edificio prncipal",
            telefono: "5514693060"
        }
    }
};

//console.log(persona.direccion.pais);

persona.direccion.zipcode = 1101;
//console.log(persona.direccion.zipcode);

//console.log(persona.direccion.edificio.telefono)

var edificio = persona.direccion.edificio;

edificio.nopiso= "8vo piso"

//console.log(persona);

var campo="edad";
//console.log( persona[campo]);


/*-----------------------------------------------*/
//Funciones

var z =30;

function primeraFuncion(){
    var z = 20;
    console.log(z);
}

primeraFuncion();
