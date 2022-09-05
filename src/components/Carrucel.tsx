import React, { useRef } from "react";
import img1 from './../assets/img/01.png'
import img2 from './../assets/img/02.png'
import img3 from './../assets/img/03.png'
import { ReactComponent as FlechaDerecha } from './../assets/boton_derecho.svg';
import { ReactComponent as FlechaIzquierda } from './../assets/boton_izquierdo.svg';
import styled, { ThemeProps } from 'styled-components';
import '../styles/Carrucel.css'

const Carrucel = () => {
    return (
        <div id="carrucel" className="carousel slide" data-bs-ride="true">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carrucel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carrucel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carrucel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={img1} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={img2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={img3} className="d-block w-100" alt="..." />
                </div>
            </div>
            <Controles>
                <Boton className="carousel-control-prev opacity-100" data-bs-target="#carrucel" data-bs-slide="prev">
                    <FlechaIzquierda id="boton" />
                </Boton>
                <Boton className="carousel-control-next opacity-100" data-bs-target="#carrucel" data-bs-slide="next">
                    <FlechaDerecha id="boton" />
                </Boton>
            </Controles>
        </div>
    )

}


const Controles = styled.div`
    position: absolute ;
    top: 0;
    width: 100%;
    height: 100%;
`;

const Boton = styled.button`
    pointer-events: all;
`;

export { Carrucel };