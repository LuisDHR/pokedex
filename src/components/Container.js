// Componente que muestra la barra de título, los 
// Pokémon obtenidos, la página actual y una botonera 
// para cambiar ascendente y descendentemente el número de página.
import { useState, useEffect } from 'react'
import Titlebar from "./Titlebar/Titlebar"
import List from "./List/List"
import Button from './Button/Button'
import {getPokemonList} from '../services/pokemonService'

const Container = () => {
    // Hooks de estado para almacenar/cambiar la página actual
    // y la lista de Pókemon.
    const [page, setPage] = useState(0)
    const [pokemonList, setPokemonList] = useState([])
    // Hook de estado para mostrar/controlar el mensaje de 'Cargando...'.
    const [loading, setLoading] = useState(true)
    // Hooks de estado para controlar el estado de los botones.
    const [btnSigActivo, setBtnSigActivo] = useState(false)
    const [btnAntActivo, setBtnAntActivo] = useState(true)

    // Se obtienen los primeros 10 pokémon.
    useEffect( async () => {
        setPokemonList( await getPokemonList(page) )
        setLoading(false)
    }, [])

    // Función para pasar a la siguiente página.
    const siguiente = async () => {
        setBtnSigActivo(true)
        setLoading(true)
        if (page < 14) {
            let actual = page + 1
            setPage(actual)
            setPokemonList( await getPokemonList(actual) )
            
            if (actual < 14) setBtnSigActivo(false)
            if (actual > 0) setBtnAntActivo(false)
        }
        setLoading(false)
    }

    // Función para pasar a la página anterior.
    const anterior = async () => {
        setBtnAntActivo(true)
        setLoading(true)
        if (page > 0) {
            let actual = page - 1
            setPage(actual)
            setPokemonList( await getPokemonList(actual) )

            if (actual > 0) setBtnAntActivo(false)
            if (actual < 14) setBtnSigActivo(false)
        }
        setLoading(false)
    }

    return (
        <>
        <Titlebar />
        <div className="pagina">Página {page + 1}</div>
        <div className="btn">
            <Button onClick={anterior} disabled={btnAntActivo} >Anterior</Button>
            <Button onClick={siguiente} disabled={btnSigActivo}>Siguiente</Button>
        </div>
        {   loading
            ? <div className="cargando">Cargando...</div>
            : <List pokemonList={pokemonList} />
        }
        </>
    )
}

export default Container