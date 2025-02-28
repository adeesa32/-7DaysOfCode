//Ejericico Alura día 3
let tecnologia ='1'
let especialidad = prompt ("Hola ¿deseas ir a 1.-FrontEnd o a 2.-BackEnd?, presiona 1 o 2");
if (especialidad == 1){
    let base = prompt ("¿piesas elegir 1.- React o 2.- Vue? presiona 1 o 2?");
}
else {
    let base = prompt ("¿piesas elegir 1.- C# o 2.- Java? presiona 1 o 2?"); 
}
while (tecnologia !== "0") {
    let tecnologia= prompt ("¿qué tecnología deseas agregar a tu especialidad? cuando ya no desees anotar más, presiona 0");
    alert (` Excelente, ${tecnologia} agregado a tu lista`);
    console.log (typeof(tecnologia));
}

