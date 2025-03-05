//Calculadora, proyecto Alura día 7
let numero=prompt("dame un número");
let numero2=prompt("dame otro número");
let operacion=prompt("1-Suma,2-Resta,3-Multiplicación, 4:División");
switch (operacion){
case '1':
    suma(numero,numero2);
    break;
case '2':
    resta(numero,numero2);
    break;
case '3':
    multiplicacion(numero,numero2);
    break;
case '4':
    if (numero2!=0) {
        division(numero,numero2);
    }
    else {
        alert("división indefinida");
    }
    break;
default:
    break;
   
}
function suma(numero,numero2){
    resultado = numero+numero2;
    alert(`${resultado}`);
}
function resta(numero,numero2){
    resultado = numero+numero2;
    alert(`${resultado}`);
}
function multiplicacion(numero,numero2){
    resultado = numero+numero2;
    alert(`${resultado}`);
}
function division(numero,numero2){
    resultado = numero+numero2;
    alert(`${resultado}`);
}

