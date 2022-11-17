/* Ejercicio 2: Construir un programa que permita ingresar un número, si el 
número es mayor de 500, se debe calcular y mostrar en pantalla el 18% de este.
 */
let number = parseFloat(prompt('INGRESE UN NÚMERO: '));
if(number > 500){
    let percent = number*0.18;
    alert("EL 18% DEL NÚMERO ES: "+percent);
}