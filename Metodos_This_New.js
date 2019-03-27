
//Método this

/*var persona = {

    nombre: "María",
    apellido: "Dubon",
    imprimirNombre: function(){

        console.log(this.nombre+" "+this.apellido);  
    },
    direccion:{
        pais: "Costa Rica",
        obtenerPais:function(){

            var self = this;

            var nuevaDireccion = function(){
                console.log(self);
                console.log("La dirección es en " + self.pais);
            }
            nuevaDireccion();
        }
    }
};

//persona.nombre="Andrea";

persona.imprimirNombre();
persona.direccion.obtenerPais();*/

/*-------------------------------------------------*/

//Palabra reservada new

/*function Persona(nombre,apellido){

    this.nombre=nombre;
    this.apellido= apellido;
    this.edad = 30;

    this.imprimirPersona = function(){
        return this.nombre + " " + this.apellido;
    }

}

var juan = new Persona("Juan","Mendoza");

console.log(juan.imprimirPersona());*/

/*---------------------------------------------*/

//Ejercicio Propuesto

function Jugador(nombre){

    this.nombre = nombre;
    this.pv = 100;
    this.sp = 100;

    this.curar = function( jugadorObjetivo){

        if(this.sp >= 40){
            this.sp -=40;
            jugadorObjetivo.pv += 20;
        }else{
            console.log(this.nombre + " no tiene sp");
        } 
        this.estado(jugadorObjetivo);
    }

    this.tiraFlecha = function(jugadorObjetivo){

        if(jugadorObjetivo.pv >= 40){
            jugadorObjetivo.pv-=40;
        }else{
            jugadorObjetivo.pv=0;
            console.error(jugadorObjetivo.nombre+" murio!!");
        }
        this.estado(jugadorObjetivo);
    }

    this.hechizoMago = function(jugadorObjetivo){

        if(jugadorObjetivo.pv>=80){
            jugadorObjetivo.pv-=80;
        }else{
            jugadorObjetivo.pv=0;
            console.error(jugadorObjetivo.nombre+" murio!!");
        }
        this.estado(jugadorObjetivo);
    }

    this.estado = function(jugadorObjetivo){
        console.info(this);
        console.info(jugadorObjetivo);
    }
}

var gandalf = new Jugador("Gandalf");
var legolas = new Jugador("Legolas");
var Mago = new Jugador("Mago");

console.log(gandalf);
console.log(legolas);

gandalf.curar(legolas);


