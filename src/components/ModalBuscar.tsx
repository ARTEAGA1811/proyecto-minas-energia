import React from 'react'

const ModalBuscar = () => {
    return (
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-primary" id="exampleModalLabel">Busca en la página web por palabras clave</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar cuadro de díalogo"></button>
                    </div>
                    <div className="modal-body">
                        <input type="text" required
                            className="form-control" id="nombre" placeholder="Ingresa la palabra clave"
                        />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Buscar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { ModalBuscar };