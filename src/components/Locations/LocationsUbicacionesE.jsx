
export const LocationsUbicacionesE = () => {
    return (
        <div className='locations_ubicacionesE-main'>

            <div className='locations_ubicacionesE-inputs'>

                <div className='locations_ubicacionesE-inputs-title'>
                    <p id='lblTitleUbicacionesE'>Ubicaciones Especificas</p>
                </div>
                
                <div className='locations_ubicacionesE-inputs-first'>

                    <div className='locations_ubicacionesE-inputs-first-codigo'>
                        <p id='lblCodigoUbicacionesE'>Código</p>
                        <input type='text' id='txtCodigoUbicacionesE' name='codigoUbicacionesE' />
                    </div>

                    <div className='locations_ubicacionesE-inputs-first-descrip'>
                        <p id='lblDescripUbicacionesE'>Descripción</p>
                        <input type='text' id='txtDescripUbicacionesE' name='descripUbicacionesE' />
                    </div>

                </div>

                <div className='locations_ubicacionesE-inputs-second'>

                    <div className='locations_ubicacionesE-inputs-second-obser'>
                        <p id='lblObserUbicacionesE'>Observación</p>
                        <textarea id='txtObserUbicacionesE' name='obserUbicacionesE' cols={3} rows={5} ></textarea>
                    </div>

                    <div className='locations_ubicacionesE-inputs-second-btn'>
                        <button id='btnNuevoUbicacionesE' name='nuevoUbicacionesE'>Nuevo</button>
                        <button id='btnAgregarUbicacionesE' name='agregarUbicacionesE'>Agregar</button>
                    </div>

                </div>

            </div>

            <div className='locations_ubicacionesE-table'>
                
                <table className='locations_ubicacionesE-table-table'>
                    <thead>
                        <tr>
                            <th className='locations_ubicacionesE-table-header-codigo'>Código</th>
                            <th className='locations_ubicacionesE-table-header-descrip'>Descripción</th>
                            <th className='locations_ubicacionesE-table-header-obser'>Observaciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='locations_ubicacionesE-table-codigo'>test</td>
                            <td className='locations_ubicacionesE-table-descrip'>test</td>
                            <td className='locations_ubicacionesE-table-obser'>test</td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </div>
    )
}
