/* Una fábrica paga a todos sus empleados de acuerdo a la cantidad de horas que trabaja, de este modo 
la tarifa por cada hora trabajada varía de acuerdo a su categoría: 
    A -> 40
    B -> 35
    C -> 30

    Crear un formulario web donde se ingrese los datos solicitados y permita calcular el sueldo básico, 
    bonificación por años de servicio y sueldo neto.
*/

function calcularSalario(){
    let categoria = parseInt(document.getElementById('categoria').value);
    let txtCategoria;
    let horas = parseInt(document.getElementById('horas').value);
    let anios = parseInt(document.getElementById('anios').value);
    let tarifaH = 0;
    let nombre = document.getElementById('nombre').value;
    switch(categoria){
        case 1 : tarifaH = 40; txtCategoria="A"; break;
        case 2 : tarifaH = 35; txtCategoria="B"; break;
        case 3 : tarifaH = 30; txtCategoria="C"; break;
    }

    let sueldoBase = tarifaH*horas;
    let porcentaje = 0;
    /*     Asimismo, los empleados reciben una bonificación correspondiente a un porcentaje a su sueldo básico 
    de acuerdo a los años de servicio:
        1-3 -> 15%
        4-7 -> 20%
        8-12 -> 30%
        13-MÁS -> 35% */

    if(anios > 0 && anios <= 3 ){
        porcentaje = 0.15;
    } else if(anios > 3 && anios <= 7){
        porcentaje = 0.20;
    } else if(anios > 7 && anios <= 12){
        porcentaje = 0.30;
    } else if(anios > 13){
        porcentaje = 0.35;
    }

    let bono = (sueldoBase*porcentaje).toFixed(2);

    let bruto = parseFloat(sueldoBase+bono).toFixed(2);
    let neto = (0.8*bruto).toFixed(2);
    /* >> Alfredo Gonzales de Categoria A y con 1-3 a;os de servicio recibira:
    Sueldo Basico: S/ 3,400
    Bonificacion por a;os de servicio: S/ 510
    Sueldo Neto: S/ 3,128 (80% del sueldo bruto total) */
    let mensaje= nombre+" de Categoría "+txtCategoria+" y con "+anios+
    " años de servicio recibira\nSueldo Básico: "+sueldoBase+"\nBonificación: "+bono+"\nSueldo Neto: "+neto;
    document.getElementById("mensaje").innerHTML="<p>"+mensaje+"</p>";
    console.log(mensaje);
    
}
