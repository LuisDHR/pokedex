// Componente que muestra en un grid 10 tarjetas de pokémon
// dependiendo de la página donde se encuentre el usuario.
import Card from '../Card/Card'
import './style.css'

const List = ({ pokemonList }) => {
    return (
        <div className="grid-container">
        { 
            pokemonList.map( (pokemon) => (
                <Card key={pokemon.data.id} pokemon={pokemon.data} />
            ))
        }
        </div>
    )
}

export default List