/* EJERCICIO 1
Un maestro desea saber qué porcentaje de hombres y qué porcentaje de mujeres 
hay en un grupo de estudiantes. Elaborar un programa que permita ingresar la 
cantidad de varones y mujeres y muestre el porcentaje de estos para su grupo de estudiantes. */
let male = parseInt(prompt('Ingresar la cantidad de varones que hay en el grupo:'));
let female = parseInt(prompt('Ingresar la cantidad de mujeres que hay en el grupo:'));
let percentm = (male*100)/(male+female);
let percentf = (female*100)/(male+female);
alert('Porcentaje de varones: '+percentm+"%"+"\nPorcentaje de mujeres: "+percentf+"%");