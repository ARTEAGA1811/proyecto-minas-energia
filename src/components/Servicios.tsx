import React from "react";
import '../styles/Servicios.css'
import styled, { ThemeProps } from 'styled-components';
import ic_transparencia from '../assets/icono_transparencia.svg'
import ic_noticias from '../assets/icono_noticias.svg'
import ic_tramites from '../assets/icono_tramites.svg'
import ic_canales from '../assets/icono_canales_servicios.svg'
import ic_procesos from '../assets/icono_procesos.svg'
import ic_planificacion from '../assets/icono_planificacion.svg'
import ic_historicos from '../assets/icono_historicos.svg'
import ic_bibliteca from '../assets/icono_biblioteca.svg'

const Servicios = () => {
    return (
        <div>
            <h3 id="titulo" className='fw-medium'>Servicios</h3>
            <div id="horizontal_separator"></div>
            <Contenedor>
                <BotonServicios className="rounded">
                    <IconoServicios>
                        <img src={ic_transparencia} alt="" />
                        <h5 className="fw-semi-bold text-light mt-2">Transparencia</h5>
                    </IconoServicios>
                </BotonServicios>
                <BotonServicios className="rounded">
                    <IconoServicios>
                        <img src={ic_noticias} alt="" />
                        <h5 className="fw-semi-bold text-light mt-2">Noticias</h5>
                    </IconoServicios>
                </BotonServicios>
                <BotonServicios className="rounded">
                    <IconoServicios>
                        <img src={ic_tramites} alt="" />
                        <h5 className="fw-semi-bold text-light mt-2">Servicios - Trámites</h5>

                    </IconoServicios>
                </BotonServicios>
                <BotonServicios className="rounded">
                    <IconoServicios>
                        <img src={ic_canales} alt="" />
                        <h5 className="fw-semi-bold text-light mt-2">Canales de servicios</h5>

                    </IconoServicios>
                </BotonServicios>
                <BotonServicios className="rounded">
                    <IconoServicios>
                        <img src={ic_procesos} alt="" />
                        <h6 className="fw-semi-bold text-light mt-2">Proceso de Refinería y Alta Conversión</h6>

                    </IconoServicios>
                </BotonServicios>
                <BotonServicios className="rounded">
                    <IconoServicios>
                        <img src={ic_planificacion} alt="" />
                        <h5 className="fw-semi-bold text-light m-2">Planificación Estratégica</h5>

                    </IconoServicios>
                </BotonServicios>
                <BotonServicios className="rounded">
                    <IconoServicios>
                        <img src={ic_historicos} alt="" />
                        <h5 className="fw-semi-bold text-light mt-2">Históricos Institucionales</h5>

                    </IconoServicios>
                </BotonServicios>
                <BotonServicios className="rounded">
                    <IconoServicios>
                        <img src={ic_bibliteca} alt="" />
                        <h5 className="fw-semi-bold text-light mt-2">Biblioteca</h5>

                    </IconoServicios>
                </BotonServicios>
            </Contenedor>
        </div>
    )
}

const Contenedor = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: .7rem;

`
const BotonServicios = styled.button`
    background-color: #5F86B1;
    pointer-events: all;
    width: 49%;
    height: 9rem;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    :hover{
        color: rgba(255, 255, 255, 1) !important;
        box-shadow: 0 0px 10px rgba(49, 138, 172, 1);
        transition: all 0.2s ease;
    }
    
`
const IconoServicios = styled.div`
`;

export { Servicios };