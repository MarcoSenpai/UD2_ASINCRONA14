/*  Realizar un programa con una función. Esta función muestra en pantalla la suma de dos números 
    introducidos por el usuario.*/
    
    function sumarIntroducidos(){
        let one = parseFloat(prompt('Ingrese el primer número: '));
        let two = parseFloat(prompt('Ingrese el segundo número: '));
        let sum = one + two;
        alert("LA SUMA DE LOS NUMEROS ES: "+sum);
        }
    sumarIntroducidos();