import React from "react";
import styled from 'styled-components';
import ic_facebook from '../assets/icono_facebook.svg'
import ic_youtube from '../assets/icono_youtube.svg'
import ic_twitter from '../assets/icono_twitter.svg'
import ic_flip from '../assets/icono_flip.svg'
import '../styles/Varios.css'

const Varios = () => {

    return (
        <div>
            <Contenedor>
                <RedesSociales className="rounded">
                    <h5 className="mb-1">Síguenos</h5>
                    <a href="https://www.facebook.com/RecNaturalesEC/" target="_blank" rel="noreferrer">
                        <IconoRedSocial>
                            <img src={ic_facebook} alt="Botón Facebook del Ministerio de Enegía y minas" />
                        </IconoRedSocial>
                    </a>
                    <a href="https://www.youtube.com/user/recursosnorenovables" target="_blank" rel="noreferrer">
                        <IconoRedSocial>
                            <img src={ic_youtube} alt="Botón Youtube del Ministerio de Enegía y minas" />
                        </IconoRedSocial>
                    </a>
                    <a href="https://www.flickr.com/photos/recursosyenergiaec/" target="_blank" rel="noreferrer">
                        <IconoRedSocial>
                            <img src={ic_flip} alt="Botón Flickr del Ministerio de Enegía y minas" />
                        </IconoRedSocial>
                    </a>
                    <a href="https://twitter.com/RecNaturalesEC" target="_blank" rel="noreferrer">
                        <IconoRedSocial>
                            <img src={ic_twitter} alt="Botón Twitter del Ministerio de Enegía y minas" />
                        </IconoRedSocial>
                    </a>
                </RedesSociales>
                <GobiernoInforma className="rounded " >
                    <h5 className="mb-3">Tu Gobierno Informa</h5>
                    <div className="ratio ratio-16x9">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/swR867BaD0k" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </div>
                </GobiernoInforma>
                <Autoridades className="rounded">
                    <h5 className="mb-0">Autoridades</h5>
                    <BotonAutoridades className="rounded">
                        <p>Ministerio de Energía y Minas</p>
                    </BotonAutoridades>
                    <BotonAutoridades className="rounded">
                        <p>Viceministro de Electricidad y Energía Renovable</p>
                    </BotonAutoridades>
                    <BotonAutoridades className="rounded">
                        <p>Viceministro de Hidrocarburos</p>
                    </BotonAutoridades>
                    <BotonAutoridades className="rounded">
                        <p>Secretario de Hidrocarburos</p>
                    </BotonAutoridades>
                </Autoridades>
            </Contenedor>

        </div>
    )
}

export { Varios }

const Contenedor = styled.div`
    display:flex;
    flex-direction: row;
    margin-top: 0.8rem;
    height: 18.7rem;
    column-gap: 1rem;    
`;

const RedesSociales = styled.div`
    height: 100%;
    padding: 1rem;
    gap: 0.6rem;
    align-items: center;
    display: flex;
    flex-direction: column;
    background-color: aliceblue;

`;

const IconoRedSocial = styled.div`
    border: none;
    background: none;
    border-radius: 10%;
    pointer-events: all;
    filter: drop-shadow(2px 2px 4px rgb(123, 133, 137));
    :hover{
        color: rgba(255, 255, 255, 1) !important;
        box-shadow: 0 0px 10px rgba(49, 138, 172, 1);
        transition: all 0.2s ease;
        cursor: pointer;
    }

`;

const GobiernoInforma = styled.div`
  width: 40%;
  height: 100%;
  gap: 0.8rem;
  padding: 1rem;
  background-color: aliceblue;
`;

const Autoridades = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 100%;
    row-gap: 1rem;
    background-color: aliceblue;

`;

const BotonAutoridades = styled.button`
    pointer-events: all;
    border: none;
    width: 100%;
    background-color: #CCD6E8;
    height: calc((100% - 1rem) / 4);
    text-align: left;
    color: black;
    padding-left: 1rem;
    :hover{
        box-shadow: 0 0px 10px #CCD6E8;
        transition: all 0.2s ease;
    }
`;