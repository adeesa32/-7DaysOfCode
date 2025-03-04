//Dìa 6 Alura, uso de listas
let verdurasYfrutas = []
let lacteos = []
let carnes =[]
let pastasYsopas=[]
let bandera = 0
let producto=""
let contador= 0
let opcion = ""
alert("Empecemos a capturar la lista de compras, para terminar escribe fin.")
agrega();
while (opcion !='1'){
    let opcion = prompt ("¿deseas agregar o eliminar algún elemento de la lista? 1- Salir 2.- Agregar 3- Eliminar");
    switch(opcion){
    case '1':
        opcion='1';
        break;
    case '2':
        producto="";
        agrega();
        break;
    case '3':
        producto= prompt (`¿qué elemento deseas eliminar? Verduras y frutas: ${verdurasYfrutas}. Lacteos: ${lacteos}. Carnes: ${carnes}.  Pastas y sopas: ${pastasYsopas}`)
        busca(verdurasYfrutas, producto);
        busca(lacteos, producto);
        busca(carnes,producto);
        busca(pastasYsopas,producto);
        if (bandera==0){
            alert("no encontré el producto a eliminar");
        }
    default:
        break;
    }
}
alerta ("Muy bien terminamos!")

function agrega(){
while (producto != 'fin'){
    let producto = prompt ("Ingresa un elemento o escribe fin para ver la lista");
    if (producto == 'fin'){
        alert ("revisemos la lista");
        break;
    } 
    else {
        let grupo = prompt ("elige el grupo 1.- verduras o frutas, 2.- lacteos, 3.- carnes, 4.- pastas y sopas");
        switch (grupo) {
            case '1':
              //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
                verdurasYfrutas.push(producto);
                contador++;
                break;
            case '2':
              //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
                lacteos.push(producto);
                contador++;
                break;
            case '3':
              //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
                carnes.push(producto);
                contador++;
                break;
            case '4':
              //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
                pastasYsopas.push(producto);
                contador++;
                break; 
            default:
              //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
                break;
        }
    }
}
imprimeLista();
}

function imprimeLista() {
    alert(`La lista es: Verduras y frutas: ${verdurasYfrutas}. Lacteos: ${lacteos}. Carnes: ${carnes}. Pastas y sopas: ${pastasYsopas}`);
}

function busca(lista, producto){
    if (lista.indexOf(producto) != `-1`){
        alert("encontré el producto a eliminar")
        lista.splice(lista.indexOf(producto),1);
        imprimeLista();
        bandera =1;
        contador--;
    }
}