import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { Carrucel } from './Carrucel'
import { Servicios } from './Servicios'
import { Varios } from './Varios'
import '../styles/Inicio.css'
import styled from 'styled-components'

const Inicio = () => {


    return (
        <div>
            <Header />
            <ContenedorPrincipal className='row mt-4 ms-4 me-4'>
                <div className='col-8'>
                    <Carrucel />
                    <Varios />
                </div>
                <div className='col-4'>
                    <Servicios />
                </div>
            </ContenedorPrincipal>
            <Footer />
        </div>
    )
}

const ContenedorPrincipal = styled.div`
`


export { Inicio };