import React from 'react'
import '../styles/Modal.css'
const ModalBuscar = () => {
    return (
        <div className="modal fade" id="modalBuscar" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title main-color" id="exampleModalLabel">Busca en la página web por palabras clave</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar cuadro de díalogo"></button>
                    </div>
                    <div className="modal-body">
                        <label htmlFor="palabraClave" hidden>Llena algo</label>
                        <input type="text" required
                            className="form-control" id="palabraClave" 
                            placeholder="Ingresa la palabra clave" 
                            aria-labelledby="palabraClave"
                        />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" className="btn btn-buscar" data-bs-dismiss="modal">Buscar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { ModalBuscar };