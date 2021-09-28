// Componente que muestra los datos 
// individuales (imagen, nombre, tipo) de un pokémon.

const Card = ({ pokemon }) => {
    return (
      <div className="card">
        <div className="card-img">
            <img src={pokemon.sprites.front_default} alt="" />
        </div>
        <div className="card-title">
            {pokemon.name}
        </div>
        <div className="card-types">
            {
                pokemon.types.map( (type, i) => {
                    return (
                        <div key={i} className="card-type">
                            {type.type.name}
                        </div>
                    )
                })
            }
        </div>
      </div>
    )
}

export default Card