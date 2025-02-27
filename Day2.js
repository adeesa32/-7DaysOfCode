//Ejericico Alura día 2

let nombre = prompt ("¿Cuál es tu nombre?");
let edad = prompt ("¿Cuántos años tienes?");
let lenguaje = prompt ("¿qué lenguaje estás aprendiendo?");
alert (` Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`);
let opcion = prompt (`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO`);
if (opcion ==1) {
    alert (`¡Muy bien! Sigue estudiando y tendrás mucho éxito.`)
}
else{
    alert(` Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?`)
}