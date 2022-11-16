/* EJERCICIO 3
Una empresa realiza anualmente un evento para fines solidarios con las comunidades 
nativas del Perú, para ello, se requiere un algoritmo que permita ingresar la cantidad 
de entradas vendidas de los tres tipos detallados en el siguiente tarifario:
*/

let general = parseInt(prompt('Ingrese el numero de entradas generales que se vendieron: '));
let mayores = parseInt(prompt('Ingrese el numero de entradas para mayores de 65 que se vendieron: '));
let menores = parseInt(prompt('Ingrese el numero de entradas para menores de edad que se vendieron: '));

let mntGeneral = general*150;
let mntMayores = mayores*50;
let mntMenores = menores*80;

alert('MONTO POR TARIFA GENERAL: '+mntGeneral+"\nMONTO POR TARIFA DE MAYORES DE 65: "
+mntMayores+"\nMONTO POR TARIFA DE MENORES DE EDAD: "+mntMenores);