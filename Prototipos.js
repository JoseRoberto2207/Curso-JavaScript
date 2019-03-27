

function Persona(){
    this.nombre ="Fernanda";
    this.apellido ="Herrera";
    this.edad = 25;
    this.paus = "México";

    this.imprimirInfo = function(){
        console.log(this.nombre + " " + this.apellido + "("+this.edad+")");
    }
}

Number.prototype.esPositivo = function(){

    if(this >0){
        return true;
    }else{
        return false;
    }

}