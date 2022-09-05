import React from 'react'
import '../styles/Footer.css'
import ubicacion from '../assets/ubicacion.svg'
const Footer = () => {
  return (
    <footer className='footer' tabIndex={0}>
        <section className='left_side'>
            <p className='mb-0'>Gobierno de la República del Ecuador</p>
        </section>
        <section className='right_side'>
            <img className='ubicacion_logo' src={ubicacion} alt="ícono de ubicación" />
            <div className='info_container' aria-label='Información de contacto'>
                <p tabIndex={0}>Av. República de el Salvador N36-64 y Suecia</p>
                <p tabIndex={0}>Código Postal: 170135 / Quito - Ecuador</p>
                <p tabIndex={0}>Teléfono: 593-2 3976000</p>
            </div>
        </section>
    </footer>
  )
}

export {Footer};