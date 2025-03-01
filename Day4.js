//Ejericico Alura día 4

let numerosecreto = Math.floor(Math.random() * (10 - 0 + 1) + 0)
let numerorecibido = 0
let cuenta=0
bandera=0
//funtion evalua (){
while ((cuenta < 3) && (numerorecibido!=numerosecreto)){
    let numerorecibido = prompt ("Adivina el numero entre 0 y 10");
    cuenta++
    if (numerosecreto == numerorecibido){
        alert ("muy bien!!!!");
        bandera=1;
        break;
    } 
}
if (bandera != 1){
alert (` El numero era ${numerosecreto}`);
}
