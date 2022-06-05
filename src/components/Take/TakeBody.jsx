
export const TakeBody = () => {
    return (
        <div className='take_body-main'>

            <div className='take_body-header'>
                
                <div className='take_body-header-proveedor'>
                    <p id='lblProveedortake'>Proveedor</p>
                    <p id='lblBusTake'>B</p>
                    <input type='text' id='txtBuscadorProveedorTake' name='buscadorProveedorTake' />
                    <input type='text' id='txtProveedorTake' name='proveedorTake' />
                </div>

                <div className='take_body-header-fecha'>
                    <p id='lblFechaTake'>Fecha</p>
                    <input type='date' id='txtFechaTake' name='fechaTake' />
                </div>

            </div>

            <div className='take_body-datosProductos'>

                <div className='take_body-datosProductos-btns'>
                    
                    <div className='take_body-datosProductos-btns-generarToma'>
                        <button id='btngenerarTomaTake'>Generar Toma</button>
                    </div>

                    <div className='take_body-datosProductos-btns-existenciaActual'>
                        <button id='btnExistenciaActualTake'>Existencia Actual</button>
                    </div>

                    <div className='take_body-datosProductos-btns-cargarPretoma'>
                        <button id='btnCargarPretomaTake'>Cargar Pretoma</button>
                    </div>

                    <div className='take_body-datosProductos-btns-aplicarAjustes'>
                        <button id='btnAplicarAjustesTake'>Aplicar Ajustes</button>
                    </div>

                </div>

                <div className='take_body-datosProductos-title'>
                    <p id='lblTitleDatosProductosTake'>Datos de los productos</p>
                </div>

                <div className='take_body-datosProductos-table'>
                    
                    <table className='take_body-datosProductos-table-main'>
                        <thead>
                            <tr>
                                <th className='take_body-datosProductos-table-header-codigo'>Código</th>
                                <th className='take_body-datosProductos-table-header-descrip'>Descripción</th>
                                <th className='take_body-datosProductos-table-header-existencia'>Existencia</th>
                                <th className='take_body-datosProductos-table-header-toma'>Toma</th>
                                <th className='take_body-datosProductos-table-header-diferencia'>Diferencia</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='take_body-datosProductos-table-codigo'>test</td>
                                <td className='take_body-datosProductos-table-descrip'>test</td>
                                <td className='take_body-datosProductos-table-existencia'>test</td>
                                <td className='take_body-datosProductos-table-toma'>test</td>
                                <td className='take_body-datosProductos-table-diferencia'>test</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
