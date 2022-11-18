/*En base al siguiente código: añadir una función para pasar de Farenheit a Celsius:  */
function toCelcius(g){
    return (5*(g - 32) )/9;
}
let temp = parseFloat(prompt('Ingrese la cantidad de grados Farenheint: '));
var cel = toCelcius(temp);
alert(cel);