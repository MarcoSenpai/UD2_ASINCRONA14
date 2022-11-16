/* EJERCICIO 2
La municipalidad de Pueblo Libre piensa invertir cierto monto de dinero en la 
reparación de las pistas en las avenidas principales. Desarrollar un pseudocódigo 
que permita ingresar un monto de inversión en soles y lo reparta en la refacción de 
cinco avenidas de la siguiente manera: 

a. Avenida La Mar - 35% del monto 
b. Avenida Abancay - 25% del monto 
c. Avenida 28 de Julio - 10% del monto 
d. Avenida Aviación - 15% del monto 
e. Avenida Tacna - restante del monto 
 */
let price = parseFloat(prompt('Ingrese el monto para las reparaciones: '));
let lamar = price*0.35;
let abancay = price*0.25;
let veintiocho = price*0.10;
let aviacion = price*0.15;
let tacna = price*0.15;
alert('MONTO LA MAR: '+lamar+"\nMONTO ABANCAY: "+abancay+"\nMONTO 28 DE JULIO: "+veintiocho+
"\nMONTO AVIACIÓN: "+aviacion+"\nMONTO TACNA: "+tacna);