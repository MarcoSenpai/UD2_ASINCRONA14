/* Ejercicio 1: Elaborar un programa que permita ingresar el nombre del trabajador, 
su sueldo básico y el número de hijos, se deberá mostrar su bonificación y el sueldo final.  
Tenga en cuenta que la empresa está dando una bonificación del 7% del sueldo básico sólo 
en el caso el trabajador tuviese hijos. */

let name = prompt('INGRESE SU NOMBRE:');
let salary = parseFloat(prompt('INGRESE SU SUELDO BÁSICO:'));
let children = parseInt(prompt('INGRESE LA CANTIDAD DE HIJOS QUE TIENE: '));
let bonus=0;
if(children>0){
    bonus = salary*0.07;
}
let final = salary + bonus;
alert("BONIFICACION: "+bonus+"\nSUELDO FINAL: "+final);
