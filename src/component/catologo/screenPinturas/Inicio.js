import React from 'react'
import imgInicio from '../../../image/logo02.png'

export const Inicio = () => {
    return (
        <div className="containerInicio">
            <h1>Catalogo de Productos</h1>
            <img src={imgInicio} alt="" className="imagenInicio"/>
        </div>
    )
}
