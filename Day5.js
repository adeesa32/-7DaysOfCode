//Dìa 5 Alura, uso de listas
let verdurasYfrutas = []
let lacteos = []
let carnes =[]
let pastasYsopas=[]
let producto=""
alert("Empecemos a capturar la lista de compras, para terminar escribe fin.")
//funtion evalua (){
while (producto != 'fin'){
    let producto = prompt ("Ingresa un elemento");
    if (producto == 'fin'){
        alert ("Hemos terminado!");
        break;
    } 
    else {
        let grupo = prompt ("elige el grupo 1.- verduras o frutas, 2.- lacteos, 3.- carnes, 4.- pastas y sopas");
        switch (grupo) {
            case '1':
              //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
                verdurasYfrutas.push(producto);
                break;
            case '2':
              //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
                lacteos.push(producto);
                break;
            case '3':
              //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
                carnes.push(producto);
                break;
            case '4':
              //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
                pastasYsopas.push(producto);
                break; 
            default:
              //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
                break;
          }
    }
}
alert(`La lista es: verduras y frutas: ${verdurasYfrutas} lacteos: ${lacteos} carnes: ${carnes} pastas y sopas: ${pastasYsopas}`);