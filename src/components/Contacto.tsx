import React from 'react'
import { Header } from './Header';
import { Footer } from './Footer';
import { provincias, ciudadesPorProvincia } from '../data/provincias_ciudades';
import '../styles/Contacto.css';
const Contacto = () => {

    const [provincia, setProvincia] = React.useState('Azuay');


    return (
        <>
            <Header />
            <div className='mi_contenedor' tabIndex={0}>
                <div className='presentacion_container'>
                    <h1 className='contactoh1'>Contáctanos</h1>
                    <p className='contacto_msg'>Queremos escucharte, envíanos un mensaje con tus preguntas o sugerencias</p>
                </div>

                <form action="" className='formulario_container' aria-label='Formulario de contacto' tabIndex={0}>
                    <div>
                        <label htmlFor="nombre" className="form-label">
                            Nombre<span className='text-danger'>*</span>
                        </label>
                        <input type="text" required
                            className="form-control" id="nombre" placeholder="Ingresa tu nombre"
                            aria-required="true"
                        />
                    </div>

                    <div>
                        <label htmlFor="apellido" className="form-label">
                            Apellido<span className='text-danger'>*</span>
                        </label>
                        <input type="text" required
                            className="form-control" id="apellido" placeholder="Ingresa tu apellido"
                            aria-required="true"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="form-label">
                            Correo Electrónico<span className='text-danger'>*</span>
                        </label>
                        <input type="email" required
                            className="form-control" id="email" placeholder="Ingresa tu correo electrónico"
                            aria-required="true"
                        />
                    </div>

                    <div>
                        <label htmlFor="provincia" className="form-label">
                            Provincia<span className='text-danger'>*</span>
                        </label>
                        <select className="form-select" aria-label="Elegir provincia"
                            value={provincia} onChange={(e) => setProvincia(e.target.value)}
                        >
                            {provincias.map((provincia, index) => {
                                return (
                                    <option key={index} value={provincia}>{provincia}</option>
                                )
                            })}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="telefono" className="form-label">
                            Teléfono
                        </label>
                        <input type="tel"
                            className="form-control" id="telefono" placeholder="Ingresa tu teléfono"
                        />
                    </div>

                    <div>
                        <label htmlFor="ciudad" className="form-label">
                            Ciudad<span className='text-danger'>*</span>
                        </label>
                        <select className="form-select" aria-label="Ciudad por provincia">
                            {ciudadesPorProvincia[provincia].map((ciudad: string, index: number) => {
                                return (
                                    <option key={index} value={ciudad}>{ciudad}</option>
                                )
                            })}
                        </select>
                    </div>

                    <div className='total_celdas'>
                        <label htmlFor="mensaje" className="form-label">
                            Mensaje
                        </label>
                        <textarea className="form-control" id="mensaje" rows={4} placeholder="Ingresa tu mensaje aquí"></textarea>
                    </div>

                    <input type="submit" value="Enviar" className='total_celdas btn_enviar' />
                </form>

            </div>
            <div id="footer">
                <Footer />
            </div>
        </>
    )
}


export { Contacto };