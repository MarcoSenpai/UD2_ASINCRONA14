let pokemons = [
    {id: 1, name: "charmander", type: "fire", base_damage: 10, base_hp:
    12, speed: 30},
    {id: 2, name: "squirtle", type: "water", base_damage: 9, base_hp:
    14, speed: 26},
    {id: 3, name: "bulbasaur", type: "leaf", base_damage: 8, base_hp:
    16, speed: 26},
    {id: 4, name: "pikachu", type: "electric", base_damage: 12,
    base_hp: 8, speed: 32},
    {id: 5, name: "pidgey", type: "air", base_damage: 10, base_hp: 10,
    speed: 35},
    {id: 6, name: "goldeen", type: "water", base_damage: 9, base_hp:
    12, speed: 32},
    {id: 7, name: "bellsprout", type: "leaf", base_damage: 10, base_hp:
    12, speed: 30},
    {id: 8, name: "magnemite", type: "electric", base_damage: 9,
    base_hp: 14, speed: 30},
    {id: 9, name: "ponyta", type: "fire", base_damage: 12, base_hp: 18,
    speed: 36},
    {id: 10, name: "evee", type: "normal", base_damage: 10, base_hp:
    12, speed: 30},
    ]
/*     //1. Ordernar los pokemons por base_damage de menor a mayor.*/
//pokemons.sort((a,b) => a.base_damage - b.base_damage);
//console.log(pokemons);

/* //2. Crear una funcion para ordernar los pokemons dependiendo de el
    argumento que se ingrese en la funcion. Pueden ingresar: type,
    base_damage, base_hp o speed.*/  

/* function sortPokemon(argument){
    let validInput = ["type", "base_damage", "base_hp", "speed"];
    if(validInput.includes(argument)){
        pokemons.sort((a,b) => a[argument] - b[argument]);
        console.log(pokemons);
    }
    else{
        console.log("Debes ingresar un argumento valido");
    }
}
sortPokemon("type"); */

    /*

    //3. Crear una funcion que filtre el objeto pokemons y devuelva un
    arreglo con los pokemons filtrados. La funcion debe aceptar un
    argumento para filtrar por type de pokemon.*/
/* function filterPokemons(argument){
    let filteredPokemons = pokemons.filter(pokemon => pokemon.type ===argument)
    let result = filteredPokemons.lenght === 0 ? "Tipo de pokemon no encontrado" : filteredPokemons
    console.log(result);
}
 */
   

/* 4. Crear un objeto llamado Pokemon Master que tenga los siguientes
atributos: id: number, name: string, created_date: string, y pokemon:
array of objects. */
/* let pokemon_master = {
    id: 1,
    name: "string",
    created_date: "11/22/2022",
    pokemon : []
}
//console.log(pokemon_master); */

/*
    //5. Crear una funcion que de manera aleatoria agregue un nuevo pokemon
   al atributo pokemon de Pokemon Master. */
/*  function randomPokemons(){
    let number = Math.floor(Math.random()*pokemons.length);
    pokemon_master.pokemon.push(pokemons[number]);
}
randomPokemons(); 
randomPokemons(); 
randomPokemons();  */

/* 6. Crear una funcion que agregue de manera aleatoria los atributos min_damage y max_damage a 
nuestro arreglo de pokemons teniendo en cuenta lo siguiente: 
// min_damage debe ser un numero entero aleatorio entre 1 y 2 y max_damage debe 
ser un numero entero aleatorio entre 3 y 5*/

    //return Math.floor((Math.random() * (max-min)) +min);
/* function minMaxDamage(){
    let min_damage = Math.floor((Math.random()*(2+1-1))+1);
    let max_damage = Math.floor((Math.random()*(5+1-3))+3);
    for (let i = 0; i < pokemons.length; i++) {
        pokemons[i].min_damage = min_damage;
        pokemons[i].max_damage = max_damage;
    }
}
minMaxDamage(); */

//7. Crear una funcion que determine el daño que hara un pokemon elegido de la 
//lista ante una posible pelea, para ello considerar que el daño que hara el pokemon es:
// daño = base_damage + un valor aleatorio entre el min_damage y el max_damage

/* function setDamage(index){
    if(index<pokemons.length){
        addAtributes()
        let selectedPokemon = pokemon[index];
        let total_damage = selectedPokemon.base_damage + Math.floor(Math.random()*(selectedPokemon.max_damage-1+selectedPokemon.min_damage)+selectedPokemon.min_damage)
        
    }
} */


//8. Nuestro Pokemon Master quiere estar preparado para pelear, para ello necesita que lo apoyes a 
//ordenar sus pokemons. El quiere que sus pokemons se ordenen de manera
// que el que tenga un mayor valor posible de base_damage + max_damage sea el que este 
//primero en la lista y asi sucesivamente.

/* //console.log(pokemon_master)
function orderPokemons(){
    pokemon_master.pokemon.sort((a,b) => (b.base_damage+b.max_damage) - (a.base_damage+a.max_damage));
}
orderPokemons();
console.log(pokemon_master);
 */
//9. Crear una lista desordenada de Pokemons en nuestro documento HTML
/*     const root = document.getElementById("root");
    const ul = document.createElement("ul");
    root.append(ul);
    for(let i=0; i<pokemons.length;i++){
        const li = document.createElement("li");
        li.textContent = pokemons[i].name;
        ul.append(li);
    } */

//10. Utilizando javascript crear una tabla de pokemons con las siguientes columnas: 
//id, name, type, base_damage, base_hp, speed
/*     const tbody = document.getElementById("tbody");
    for (let i = 0; i < 6; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < pokemons.length; j++) {
            const cell = document.createElement("td");
            cell.textContent = pokemons[i][j];
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    } */
    for (let i = 0; i < pokemons.length; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < 6; j++) {
            const data = document.createElement("td");
            data.innerHTML = pokemons[i][j];
            row.appendChild(data);
        }

    tbody.appendChild(row);
        
    }
    

//11. Utilizando javascript modifica el codigo creado en el ejecicio anterior 
//y agrega un evento que permita ordenar los pokemons haciendo click en sus encabezados.

//12. Corrige la function sortPokemons para que acepte ordenarlos segun id y name.
