
export const TermsBodyExcepciones = () => {
    return (
        <div className='terms_body-excepciones-main'>
            
            <div className='terms_body-excepciones-title'>
                <h2 id='lblTitleTermsCondicciones'>Excepciones</h2>
            </div>

            <div className='terms_body-excepciones-body'>
                
                <div className='terms_body-excepciones-body-inputs'>

                    <div className='terms_body-excepciones-body-inputs-cedula'>
                        <p id='lblCedulaExcepcionesTerms'>Cédula</p>
                        <input type='text' id='txtCedulaExcepcionesTerms' name='cedulaExcepcionesTerms' />
                    </div>

                    <div className='terms_body-excepciones-body-inputs-nombre'>
                        <p id='lblNombreExcepcionesTerms'>Nombre</p>
                        <input type='text' id='txtNombreExcepcionesTerms' name='nombreExcepcionesTerms' />
                    </div>

                </div>

                <div className='terms_body-excepciones-body-btns'>
                    <button id='btnAgregarExcepcionesTerms'>Agregar</button>
                    <button id='btnEliminarExcepcionesTerms'>Eliminar</button>
                </div>

            </div>

            <div className='terms_body-excepciones-table'>
                <table className='terms_body-excepciones-table-main'>
                        <thead>
                            <tr>
                                <th className='terms_body-excepciones-table-header-cedula'>Cedula</th>
                                <th className='terms_body-excepciones-table-header-nombre'>Nombre</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='terms_body-excepciones-table-cedula'>test</td>
                                <td className='terms_body-excepciones-table-nombre'>test</td>
                            </tr>
                        </tbody>
                    </table>
            </div>

            <div className='terms_body-excepciones-btn'>
                <button id='btnAceptarTermsExcepciones'>Aceptar</button>
            </div>

        </div>
    )
}
