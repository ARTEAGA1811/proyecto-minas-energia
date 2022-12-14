import React from 'react'
import { Header } from './Header';
import { Footer } from './Footer';
import { provincias, ciudadesPorProvincia } from '../data/provincias_ciudades';
import '../styles/Contacto.css';
const Contacto = () => {

    const [provincia, setProvincia] = React.useState('Azuay');
    const [mensajeAbierto, setMensajeAbierto] = React.useState(false);

    const mensajeEnviado = React.useRef<HTMLParagraphElement>(null);
    const mensajeTxtArea = React.useRef<HTMLTextAreaElement>(null);

    const submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setMensajeAbierto(true);
        
        //Borro lo que escribió el usuario
        if (mensajeTxtArea.current){
            mensajeTxtArea.current.value = '';
        }
    }
    
    React.useEffect(() => {
        if (mensajeEnviado.current){
            mensajeEnviado.current.focus();
        }

        
    }, [mensajeAbierto]);



    return (
        <>
            <Header />
            <div className='mi_contenedor' tabIndex={0} role="main">
                <div className='presentacion_container'>
                    <h1 className='contactoh1' id='contacc'>Contáctanos</h1>
                    <p className='contacto_msg'>Queremos escucharte, envíanos un mensaje con tus preguntas o sugerencias</p>
                </div>

                {mensajeAbierto && <h5 className='total_celdas text-center text-success fw-bold'tabIndex={0} ref={mensajeEnviado}>Muchas gracias, tu mensaje ha sido enviado correctamente</h5>}

                <form action="" className='formulario_container'
                    aria-label='Formulario de contacto'
                    onSubmit={submit}
                >
                    <div>
                        <label htmlFor="nombre" className="form-label">
                            Nombre<span className='text-danger'>*</span>
                        </label>
                        <input type="text" required
                            className="form-control" id="nombre" placeholder="Ingresa tu nombre"
                            aria-required="true"
                            autoComplete="on"
                        />
                    </div>

                    <div>
                        <label htmlFor="apellido" className="form-label">
                            Apellido<span className='text-danger'>*</span>
                        </label>
                        <input type="text" required
                            className="form-control" id="apellido" placeholder="Ingresa tu apellido"
                            aria-required="true"
                            autoComplete="on"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="form-label">
                            Correo Electrónico<span className='text-danger'>*</span>
                        </label>
                        <input type="email" required
                            className="form-control" id="email" placeholder="Ingresa tu correo electrónico"
                            aria-required="true" aria-invalid="true"
                            autoComplete="on"
                        />
                    </div>

                    <div>
                        <label htmlFor="provincia" className="form-label">
                            Provincia<span className='text-danger'>*</span>
                        </label>
                        <select className="form-select" aria-label="Elegir provincia" id='provincia' autoComplete="on"
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
                            aria-invalid="true"
                            autoComplete="on"
                        />
                    </div>

                    <div>
                        <label htmlFor="ciudad" className="form-label">
                            Ciudad<span className='text-danger'>*</span>
                        </label>
                        <select className="form-select" aria-label="Ciudad por provincia" id='ciudad' autoComplete="on">
                            {ciudadesPorProvincia[provincia].map((ciudad: string, index: number) => {
                                return (
                                    <option key={index} value={ciudad}>{ciudad}</option>
                                )
                            })}
                        </select>
                    </div>

                    <div className='total_celdas'>
                        <label htmlFor="mensajeTxtArea" className="form-label">
                            Mensaje<span className='text-danger'>*</span>
                        </label>
                        <textarea className="form-control" id="mensajeTxtArea" rows={4}
                            placeholder="Ingresa tu mensaje aquí"
                            aria-required="true" aria-invalid="true"
                            required
                            ref={mensajeTxtArea}
                            autoComplete="off"
                        ></textarea>
                    </div>

                    <input type="submit" value="Enviar" className='total_celdas btn_enviar'
                    />
                </form>

            </div>
            <div id="footer">
                <Footer />
            </div>
        </>
    )
}


export { Contacto };