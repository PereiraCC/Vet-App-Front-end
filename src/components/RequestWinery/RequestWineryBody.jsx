
export const RequestWineryBody = () => {
    return (
        <div className='requestWinery-body-main'>

            <div className='requestWinery-body-inputs'>
                
                <div className='requestWinery-body-inputs-firstLine'>
                    
                    <div className='requestWinery-body-inputs-firstLine-fecha'>
                        <p id='lblFechaRW'>Fecha</p>
                        <input type='date' id='txtFechaRW' name='fechaRW'/>
                    </div>

                    <div className='requestWinery-body-inputs-firstLine-descrip'>
                        <p id='lbldescripRW'>Descripción</p>
                        <input type='text' id='txtdescripRW' name='descripRW'/>
                    </div>

                </div>

                <div className='requestWinery-body-inputs-datosProductos'>

                    <p id='lblDatosProductosTitleRW'>Datos de los productos</p>
                    
                    <div className='requestWinery-body-inputs-datosProductos-firstLine'>

                        <div className='requestWinery-body-inputs-datosProductos-firstLine-codigo'>
                            <p id='lblCodigoRW'>Código</p>
                            <input type='text' id='txtCodigoRW' name='codigoRW'/>
                        </div>

                        <div className='requestWinery-body-inputs-datosProductos-firstLine-descrip'>
                            <p id='lblDescripRW'>Descripción</p>
                            <input type='text' id='txtDescripRW' name='descripRW'/>
                        </div>

                        <div className='requestWinery-body-inputs-datosProductos-firstLine-existencia'>
                            <p id='lblExistenciaRW'>Existencia</p>
                            <input type='text' id='txtExistenciaRW' name='existenciaRW'/>
                        </div>

                        <div className='requestWinery-body-inputs-datosProductos-firstLine-cantidad'>
                            <p id='lblCantidadRW'>Cantidad</p>
                            <input type='number' id='txtCantidadRW' name='cantidadRW'/>
                        </div>

                        <div className='requestWinery-body-inputs-datosProductos-firstLine-btn'>
                            <button id='btnAgregarRW'>Agregar</button>
                        </div>

                    </div>

                    <div className='requestWinery-body-inputs-datosProductos-secondLine'>
                        <p id='lblNotaRW'>Nota:</p>
                        <input type='text' id='txtNotaRW' name='notaRW'/>
                    </div>

                </div>

            </div>

            <div className='requestWinery-body-table'>
                
                <table className='requestWinery-body-table-main'>
                    <thead>
                        <tr>
                            <th className='requestWinery-body-table-header-codArticulo'>Cod Artículo</th>
                            <th className='requestWinery-body-table-header-descrip'>Descripción</th>
                            <th className='requestWinery-body-table-header-cantidad'>Cantidad</th>
                            <th className='requestWinery-body-table-header-nota'>Nota</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='requestWinery-body-table-codArticulo'>test</td>
                            <td className='requestWinery-body-table-descrip'>test</td>
                            <td className='requestWinery-body-table-cantidad'>test</td>
                            <td className='requestWinery-body-table-nota'>test</td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </div>
    )
}
