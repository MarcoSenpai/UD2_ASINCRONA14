/* Ejercicio 1: Digite el importe de una compra, en caso de que el importe sea 150 o más, 
se le descontará el 12%. Mostrar el descuento otorgado y el importe de compra final 
 */

let importe = parseFloat(prompt('INGRESE EL IMPORTE DE LA COMPRA:'));
let discount = 0;
if(importe >= 150){
    discount = importe * 0.12;
}
let final = importe - discount;

alert("DESCUENTO: "+discount+"\nIMPORTE DE COMPRA FINAL: "+final);