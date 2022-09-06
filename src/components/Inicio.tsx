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
            <ContenedorPrincipal className='row m-4'>
                <div className='col-lg-8 col-sm-12' >
                    <Carrucel aria-label="Carrucel de imágenes Energía y Minas"/>
                    <Varios />
                </div>
                <div className='col-lg-4 col-sm-12'>
                    <Servicios />
                </div>
            </ContenedorPrincipal>
            {/* <div id="footer"> */}
                <Footer />
            {/* </div> */}
        </div>
    )
}

const ContenedorPrincipal = styled.div`
`


export { Inicio };