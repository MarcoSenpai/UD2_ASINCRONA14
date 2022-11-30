//1. Crear una funcion que convierta los strings que se ingresan como parametros a estilo capitalizado.
// Ejemplo: "hola a todos" => "Hola A Todos"
 /*    let frase = "Hola a todos";
    function capitalizar(cadena){
        let array = cadena.split(" ");
        let cadenaCapitalizada = [];
        for (const index in array) {
            cadenaCapitalizada.push((array[index].charAt(0).toUpperCase() + array[index].slice(1)));
        }

        return cadenaCapitalizada.join("");
    }
    console.log(capitalizar(frase)); */
//2. Dado el siguiente objeto, crear una funcion que verifique si todos los atributos se encuentran llenos.
// En caso no sea asi, que envie una alerta mostrando un mensaje y los atributos que estan vacíos.
// Ejemplo: {nombre: "", apellido: "Pacheco", edad: 38, profesion: ""} => Los campos nombre y profesion se encuentran vacios.
/* let persona = { nombre: "", apellido: "Pacheco", edad: 38, profesion: ""}

function verificaryLlenar(objeto) {
for(const index in objeto) {
if (objeto[index] === "") { 
    objeto[index] =  prompt(`El campo ${index} está vacíom, por favor llenalo:`);
}
}
return objeto
}

verificaryLlenar(persona) */
//3. Para el ejercicio anterior, crear una funcion que dados los datos pendientes, lance un prompt para que el usuario
// complete los datos faltantes. Debe verificar que el dato ingresado no este vacio y que corresponda al tipo de dato.


//4. Te enviaron una base de datos de usuarios:
 
let users = [
     {nombre: "Javier", apellido: "Pacheco", edad: 38, profesion: ""},
     {nombre: "Andrea", apellido: "Perez", edad: 25, profesion: "profesor"},
     {nombre: "Julia", apellido: "Lazo", edad: 32, profesion: "musico"},
     {nombre: "Roy", apellido: "Martinez", edad: 29, profesion: "programador"},
     {nombre: "Roberto", apellido: "Mattos", edad: 40, profesion: ""},
     {nombre: "Mercedes", apellido: "Sanchez", edad: 35, profesion: "veterinario"},
 ]
/* for (const index in users){
    verificaryLlenar(users[index]);
}
console.log(users); */

// Te piden que utilizando las funciones de los ejercicios anteriores, evalues que usuarios tienen datos pendientes
// y en caso no existan, solicitar el ingreso de los datos a traves del prompt para completarlos.
 
//5. Crear una funcion que permita ordenar los usuarios por edad de menor a mayor.
function ordenar(objet){
    objeto.sort((a,b)=> a.edad - b.edad)
    return objeto
}

//6. Crear una funcion que nos permita escribir los datos de cada usuario en el navegador linea por linea de la siguiente manera:
// Ejemplo: "Andres Soto tiene 28 años y es profesor"
/* for (const index in users){
    let nombre = users[index].nombre;
    let apellido = users[index].apellido;
    let edad = users[index].edad;
    let profesion = users[index].profesion;
    let frase = nombre + " " + apellido + " tiene " + edad + " años y es " +profesion;
    console.log(frase);
    document.write(frase);
    document.write("<br>")
} */
//7. Crear una funcion que nos permita ingresar el parametro por el cual se va a ordenar la lista de usuarios y retorne la lista
// ordenada.
    function ordenar(parametro){
        if(parametro === "edad")
        {
            return users.sort((a,b)=>a[parametro] - b[parametro]);
        }else{
            return users.sort((a,b)=>a[parametro].localCompare(b[parametro]));
        }
    }
//8. Crear un boton con javascript que diga "Aceptar" y cuando se le de click mande una alerta que diga: 
//"De acuerdo!"
 function mialerta(){
    alert("De acuerdo!!!!!!");
 }
//9. Agrega un listener al boton para que cuando el usuario haga hover sobre este, el boton desaparezca.
function ocultar(){
    document.getElementById('ocultar').style.display = "none";
    alert(console.log("PRUEBA OCULTAR"))
}

