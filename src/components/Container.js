// Componente que muestra la barra de título,
// los pokémones obtenidos y una botonera para
// cambiar la página actual acendente y descendentemente.

import { useState, useEffect } from 'react'
import Titlebar from "./Titlebar/Titlebar"
import List from "./List/List"
import Button from './Button/Button'
import {getPokemonList} from '../services/pokemonService'

const Container = () => {
    const [page, setPage] = useState(0)
    const [pokemonList, setPokemonList] = useState([])
    const [loading, setLoading] = useState(true)
    const [btnSigActivo, setBtnSigActivo] = useState(false)
    const [btnAntActivo, setBtnAntActivo] = useState(true)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect( async () => {
        setPokemonList( await getPokemonList(page) )
        setLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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