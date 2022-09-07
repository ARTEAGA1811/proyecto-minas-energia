import React from 'react'
import logo from '../assets/logo.svg'
import lupa from '../assets/lupa.svg'
import burger_menu from '../assets/burger_menu.svg'
import '../styles/Header.css'
import { ModalBuscar } from './ModalBuscar'

const Header = () => {

    const URLactual = window.location.hash;
    console.log(URLactual);
    //Agrega la clase active_section al link que corresponda
    const checkURl = (currUrl: string) => {
        if (currUrl === URLactual) {
            return 'active_section'
        }
        return "";
    }


    return (
        <header className='header'>
            <div className='left_side'>
                <img src={logo} alt="Logo del Ministerio de Energía y Minas" className='logo' />
                <h4 className='fw-light m-0'>Ministerio de Energía y Minas</h4>
            </div>
            <div className='right_side'>
                <h4 className='fw-light mb-0'>Ministerio de Energía y Minas</h4>
                <div className='vertical_separator'></div>
                <nav>
                    <ul className='nav'>
                        <li className='nav-item'>
                            <a href="/proyecto-minas-energia/" className={'nav-link mi_link ' + checkURl('')}>Inicio</a>
                        </li>
                        <li className='nav-item'>
                            <a href="/proyecto-minas-energia/#/temas-importantes" className={'nav-link mi_link ' + checkURl('#/temas-importantes')}>Temas Importantes</a>
                        </li>
                        <li className='nav-item'>
                            <a href="/proyecto-minas-energia/#/contacto" className={'nav-link mi_link ' + checkURl('#/contacto')}>Contacto</a>
                        </li>
                    </ul>
                </nav>
                <div className='d-flex'>
                    <button className='search_container btn' data-bs-toggle="modal" data-bs-target="#modalBuscar" type='button'>
                        <img src={lupa} alt="ícono de una lupa" />
                        <p className='mb-0 mi_texto'>Buscar</p>
                    </button>
                    

                    <button className='menu_container btn'>
                        <img src={burger_menu} alt="Ícono de un menú hamburguesa" />
                        <p className='mb-0 mi_texto'>Menú</p>
                    </button>
                </div>

            </div>

            <ModalBuscar />
        </header>
    )
}

export { Header };

