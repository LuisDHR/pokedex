// Componente que muestra en un grid 10 tarjetas de pokémon
// dependiendo de la página donde se encuentre el usuario.

import {useState, useEffect} from 'react'
import {getPokemonList} from '../services/pokemonService'
import Card from './Card'

const List = ({ page }) => {
    const [pokemonList, setPokemonList] = useState([])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect( async () => {
        setPokemonList( await getPokemonList(page) )
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="grid-container">
        {
            pokemonList.length > 0 
            ? pokemonList.map( (pokemon) => (
                <Card key={pokemon.data.id} pokemon={pokemon.data} />
            ))
            : <p>Loading...</p>
        }
        </div>
    )
}

export default List