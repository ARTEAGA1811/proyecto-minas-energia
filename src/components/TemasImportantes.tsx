import React from 'react'
import { Header } from './Header';
import '../styles/TemasImportantes.css'
import lupa from '../assets/lupa.svg'
import { Footer } from './Footer';

const TemasImportantes = () => {
  return (
    <>
      <Header />

      <div style={{ height: "fit-content" }} className="container d-flex flex-column align-items-center">
        
        <h1 className="titulo row">Temas importantes</h1>
        <div className="row has-search w-50">
          <img className="form-control-feedback" src={lupa} alt="lupa" />
          <input type="text" className="form-control" placeholder="Ingresa aquí lo que estas buscando" />
        </div>
        <div className="d-flex">
          <div className='mx-3 align-self-center circulo align-items-center d-flex'>
            <i className="fa fa-solid fa-caret-left fa-3x m-3"></i>
          </div>
          <div className='d-grid align-items-center'>  
            <div className='caja'>
              Geoportal
            </div>
            <div className='caja'>
              Reporte de produccion
            </div>
          </div>
          <div className='d-grid align-items-center'>
            <div className='caja'>
              Plan Maestro de Electricidad
            </div>
            <div className='caja'>
              Mapa Petrolero
            </div>
          </div>
          <div className='d-grid align-items-center'>
            <div className='caja'>
              Balance Energetico Nacional
            </div>
            <div className='caja'>
              Commodities Diarios de Mineria
            </div>
          </div>

          <div className='mx-3 align-self-center circulo align-items-center d-flex'>
            <i className="fa fa-solid fa-caret-right fa-3x m-4"></i>
          </div>
        </div>
        




      </div>
      <div className='w-100' style={{position: "absolute", bottom: 0}}>
        <Footer />
      </div>
      
    </>
  )
}

export  {TemasImportantes};