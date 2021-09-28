import axios from 'axios'

// Array para determinar los identificadores de los 
// pokémon que se mostrarán en pantalla (dividido en decenas).
const pages = [
    { start: 1, end: 10 },
    { start: 11, end: 20 },
    { start: 21, end: 30 },
    { start: 31, end: 40 },
    { start: 41, end: 50 },
    { start: 51, end: 60 },
    { start: 61, end: 70 },
    { start: 71, end: 80 },
    { start: 81, end: 90 },
    { start: 91, end: 100 },
    { start: 101, end: 110 },
    { start: 111, end: 120 },
    { start: 121, end: 130 },
    { start: 131, end: 140 },
    { start: 141, end: 150 },
];

// Función para obtener los datos de un pokémon mediante su id.
export const getPokemonData = async (id) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return res
}

// Función para obtener una lista de 10 pokémon dependiendo del 
// numeró de página dado.
// Ejemplo: getPokemonList(10) devolverá una lista con los 
// pokémon que tienen identificadores del 1 al 10.
export const getPokemonList = async (page) => {
    let pokemonArray = []
    for (let i = pages[page].start; i <= pages[page].end; i ++) {
        pokemonArray.push(await getPokemonData(i))
    }
    console.log(pokemonArray)
    return pokemonArray
}
