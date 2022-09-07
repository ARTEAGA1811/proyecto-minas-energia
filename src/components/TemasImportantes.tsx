import React from 'react'
import { Header } from './Header';
import '../styles/TemasImportantes.css'
import lupa from '../assets/lupa.svg'
import { Footer } from './Footer';
import boton_izquierdo from '../assets/boton_izquierdo.svg'
import boton_derecho from '../assets/boton_derecho.svg'
const TemasImportantes = () => {
  return (
    <>
      <Header />

      <div style={{ height: "fit-content"}} className="container d-flex flex-column align-items-center">
        
        <h1 className="titulo row my-4">Temas importantes</h1>
        <label htmlFor="campo-busqueda">Campo de búsqueda</label>
        <div className="row has-search my-4">
          <img className="form-control-feedback" src={lupa} alt="lupa" />
          <input id="campo-busqueda" autoComplete='on' type="text" className="form-control" placeholder="Ingresa aquí lo que estás buscando" />
        </div>
        <div className="d-flex my-3">
          <div className='mx-3 align-self-center align-items-center d-flex' role="button" tabIndex={0}>
            <img style={{cursor: "pointer"}} src={boton_izquierdo} alt="boton izquierdo"/>
          </div>
          <div className='d-grid align-items-center'>  
            <button className='caja'>
              Geoportal
            </button>
            <button className='caja'>
              Reporte de producción
            </button>
          </div>
          <div className='d-grid align-items-center'>
            <button className='caja'>
              Plan Maestro de Electricidad
            </button>
            <button className='caja'>
              Mapa Petrolero
            </button>
          </div>
          <div className='d-grid align-items-center'>
            <button className='caja'>
              Balance Energético Nacional
            </button>
            <button className='caja'>
              Commodities Diarios de Minería
            </button>
          </div>

          <div className='mx-3 align-self-center align-items-center d-flex' role="button" tabIndex={0}>
            <img style={{cursor: "pointer"}} src={boton_derecho} alt="boton derecho"/>
          </div>
        </div>
        
      </div>
      <div className='w-100' style={{marginTop: 35}}>
        <div id="footer">
        <Footer />
        </div>
      </div>
      
    </>
  )
}

export  {TemasImportantes};