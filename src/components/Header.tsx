import React from 'react'
import logo from '../assets/logo.svg'
import lupa from '../assets/lupa.svg'
import burger_menu from '../assets/burger_menu.svg'
import '../styles/Header.css'

const Header = () => {

    const URLactual = window.location.pathname;

    //Agrega la clase active_section al link que corresponda
    const checkURl = (currUrl: string) => {
        if (currUrl === URLactual) {
            return 'active_section'
        }
        return ''
    }


    return (
        <header className='header'>
            <div className='left_side'>
                <img src={logo} alt="logo" className='logo' />
            </div>
            <div className='right_side'>
                <h4 className='fw-light mb-0'>Ministerio de Energía y Minas</h4>
                <div className='vertical_separator'></div>
                <nav>
                    <ul className='nav nav-pills'>
                        <li className='nav-item'>
                            <a href="/" className={'nav-link mi_link ' + checkURl('/')}>Inicio</a>
                        </li>
                        <li className='nav-item'>
                            <a href="/temas-importantes" className={'nav-link mi_link ' + checkURl('/temas-importantes')}>Temas Importantes</a>
                        </li>
                        <li className='nav-item'>
                            <a href="/contacto" className={'nav-link mi_link ' + checkURl('/contacto')}>Contacto</a>
                        </li>
                    </ul>
                </nav>

                <div className='search_container'>
                    <img src={lupa} alt="lupa" />
                    <p className='mb-0 mi_texto'>Buscar</p>
                </div>

                <div className='menu_container'>
                    <img src={burger_menu} alt="burguer_menu" />
                    <p className='mb-0 mi_texto'>Menú</p>
                </div>

            </div>
        </header>
    )
}

export { Header };
