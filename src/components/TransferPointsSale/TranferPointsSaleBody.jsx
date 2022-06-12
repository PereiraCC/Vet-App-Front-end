
export const TranferPointsSaleBody = () => {
    return (
        <div className='tranferPointsSale_body-main'>

            <div className='tranferPointsSale_body-header'>
                
                <div className='tranferPointsSale_body-header-origen'>
                    <p id='lblPVOrigenTPS'>Punto de Venta Origen</p>
                    <select id='txtPVOrigenTPS' name='origenTPS'>
                        <option value='1'>Punto de Venta 1</option>
                        <option value='2'>Punto de Venta 2</option>
                    </select>
                </div>

                <div className='tranferPointsSale_body-header-destino'>
                    <p id='lblPVDestinoTPS'>Punto de Venta Destino</p>
                    <select id='txtPVDestinoTPS' name='destinoTPS'>
                        <option value='1'>Punto de Venta 1</option>
                        <option value='2'>Punto de Venta 2</option>
                    </select>
                </div>

                <div className='tranferPointsSale_body-header-fecha'>
                    <p id='lblPVFechaTPS'>Fecha</p>
                    <input type='date' id='txtPVFechaTPS' name='fechaTPS' />
                </div>

            </div>

            <div className='tranferPointsSale_body-datosProductos'>
                
                <div className='tranferPointsSale_body-datosProductos-title'>
                    <p id='lblTitleDatosProductosTPS'>Datos de los productos</p>
                </div>

                <div className='tranferPointsSale_body-datosProductos-inputs'>
                    <div className='tranferPointsSale_body-datosProductos-inputs-codigo'>
                        <p id='lblCodigoTSP'>Código</p>
                        <input type='text' id='txtCodigoTSP' name='codigoTSP'/>
                    </div>

                    <div className='tranferPointsSale_body-datosProductos-inputs-descrip'>
                        <p id='lblDescripTSP'>Descripción</p>
                        <input type='text' id='txtDescripTSP' name='descripTSP'/>
                    </div>

                    <div className='tranferPointsSale_body-datosProductos-inputs-existencia'>
                        <p id='lblExistenciaTSP'>Existencia</p>
                        <input type='text' id='txtExistenciaTSP' name='existenciaTSP'/>
                    </div>

                    <div className='tranferPointsSale_body-datosProductos-inputs-cantidad'>
                        <p id='lblCantidadTSP'>Cantidad</p>
                        <input type='number' id='txtCantidadTSP' name='cantidadTSP'/>
                    </div>

                    <div className='tranferPointsSale_body-datosProductos-inputs-btn'>
                        <button id='btnAgregarTSP'>Agregar</button>
                    </div>
                </div>

                <div className='tranferPointsSale_body-datosProductos-table'>
                    <table className='tranferPointsSale_body-datosProductos-table-main'>
                        <thead>
                            <tr>
                                <th className='tranferPointsSale_body-datosProductos-table-header-codArticulo'>Cod Artículo</th>
                                <th className='tranferPointsSale_body-datosProductos-table-header-descrip'>Descripción</th>
                                <th className='tranferPointsSale_body-datosProductos-table-header-cantidad'>Cantidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='tranferPointsSale_body-datosProductos-table-codArticulo'>test</td>
                                <td className='tranferPointsSale_body-datosProductos-table-descrip'>test</td>
                                <td className='tranferPointsSale_body-datosProductos-table-cantidad'>test</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='tranferPointsSale_body-datosProductos-obser'>
                    <p id='lblObservacionesTSP'>Observaciones:</p>
                    <textarea id='txtObservacionesTSP' name='observacionesTSP'></textarea>
                </div>

            </div>

        </div>
    )
}
