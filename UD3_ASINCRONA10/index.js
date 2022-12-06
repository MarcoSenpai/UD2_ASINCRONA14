/* Crear una clase Alumno con los atributos: código, nombre, nota1, nota2 y nota3; y las operaciones: 
promedio (), condicion () y obsequio ().*/
class Alumno {
    constructor(codigo,nombre,nota1,nota2,nota3,nota4){
        this.codigo = codigo;
        this.nombre = nombre;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.nota4 = nota4;
    }
/*  Para calcular el promedio considere la siguiente fórmula:
PROM = nota1(15%) + nota2(20%) + nota3(25%) + nota4(40%) */
    promedio(){
        let prom = (this.nota1*0.15)+(this.nota2*0.20)+(this.nota3*0.25)+(this.nota4*0.40);
        return prom;
    }
/*     Para la condición determine si es “Aprobado” o “Desaprobado” (se aprueba con nota mínima 12).*/
    condicion(){
        let prom = this.promedio();
        let condicion = "";
        if(prom >= 12){
            condicion = "Aprobado";
        }
        else{
            condicion = "Desaprobado";
        }
        return condicion;
    }
/*     Todo alumno que apruebe con nota mayor a 17 se le obsequiará una “Mochila”.*/
    obsequio(){
        let prom = this.promedio();
        let cond = this.condicion();
        let obsequio = "";
        if(cond === "Aprobado"){
            if(prom > 17){
                obsequio = "Felicidades su obsequio es una MOCHILA";
            }
            else{
                obsequio = "Aprobo. Pero necesita más de 17 para un obsequio :(.";
            }
        }
        else{
            obsequio = "Reprobo. No hay obsequio.";
        }
        return obsequio;
    }
}

let marco = new Alumno(123456, "Marco Puclla", 10, 10, 10, 10);
console.log(marco);
console.log(marco.promedio());
console.log(marco.condicion());
console.log(marco.obsequio());
let david = new Alumno(965645, "David Guillen", 17, 16, 14, 15);
console.log(david);
console.log(david.promedio());
console.log(david.condicion());
console.log(david.obsequio());
let javier = new Alumno(233356, "Javier Pacheco", 18, 18, 18, 19);
console.log(javier);
console.log(javier.promedio());
console.log(javier.condicion());
console.log(javier.obsequio());