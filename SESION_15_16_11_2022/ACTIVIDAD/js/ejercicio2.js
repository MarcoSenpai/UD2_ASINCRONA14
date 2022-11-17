/* Ejercicio 2: Ingrese el nombre de un alumno y las notas de su examen parcial, 
examen final y el promedio de prácticas; muestre el nombre del alumno y su promedio final 
solo si el alumno está aprobado. Tenga en cuenta que para el cálculo del promedio la nota 
del examen final tiene peso doble.

 */
let name = prompt('INGRESE EL NOMBRE DEL ALUMNO:').toUpperCase();
let parcial = parseFloat(prompt('INGRESE LA NOTA DEL PARCIAL: '));
let final = parseFloat(prompt('INGRESE LA NOTA DEL FINAL: '));
let pract = parseFloat(prompt('INGRESE EL PROMEDIO DE PRÁCTICAS: '));

let prom = parseFloat(((final * 2) + parcial + final)/4);
if(prom >= 11){
    alert(name+"\nSU PROMEDIO FINAL ES: "+prom+"\nAPROBADO!!! :D")
}
else{
    alert("USTED HA DESAPROBADO :,(");
}