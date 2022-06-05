
export const PretakeBody = () => {
    return (
        <div className='pretake_body-main'>

            <div className='pretake_body-header'>
                
                <div className='pretake_body-header-proveedor'>
                    <p id='lblProveedorPretake'>Proveedor</p>
                    <p id='lblBusPretake'>B</p>
                    <input type='text' id='txtBuscadorProveedorPretake' name='buscadorProveedorPretake' />
                    <input type='text' id='txtProveedorPretake' name='proveedorPretake' />
                </div>

                <div className='pretake_body-header-fecha'>
                    <p id='lblFechaPretake'>Fecha</p>
                    <input type='date' id='txtFechaPretake' name='fechaPretake' />
                </div>

            </div>

            <div className='pretake_body-datosProductos'>

                <div className='pretake_body-datosProductos-title'>
                    <p id='lblTitleDatosProductos'>Datos de los productos</p>
                </div>

                <div className='pretake_body-datosProductos-inputs'>

                    <div className='pretake_body-datosProductos-inputs-codigo'>
                        <p id='lblCodigoPretake'>Código</p>
                        <input type='text' id='txtCodigoPretake' name='codigoPretake' />
                    </div>

                    <div className='pretake_body-datosProductos-inputs-descripcion'>
                        <p id='lblDescripcionPretake'>Descripción</p>
                        <input type='text' id='txtDescripcionPretake' name='descripcionPretake' />
                    </div>

                    <div className='pretake_body-datosProductos-inputs-existencia'>
                        <p id='lblExistenciaPretake'>Existencia actual</p>
                        <input type='text' id='txtExistenciaPretake' name='existenciaPretake' />
                    </div>

                    <div className='pretake_body-datosProductos-inputs-cantidad'>
                        <p id='lblcantidadPretake'>Cantidad para prestamo</p>
                        <input type='text' id='txtCantidadPretake' name='cantidadPretake' />
                    </div>

                    <div className='pretake_body-datosProductos-inputs-btn'>
                        <button id='btnAgregarPretake'>Agregar</button>
                    </div>
                </div>

                <div className='pretake_body-datosProductos-table'>
                    <table className='pretake_body-datosProductos-table-main'>
                        <thead>
                            <tr>
                                <th className='pretake_body-datosProductos-table-header-codigo'>Código</th>
                                <th className='pretake_body-datosProductos-table-header-descrip'>Descripción</th>
                                <th className='pretake_body-datosProductos-table-header-cantidad'>Cantidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='pretake_body-datosProductos-table-codigo'>test</td>
                                <td className='pretake_body-datosProductos-table-descrip'>test</td>
                                <td className='pretake_body-datosProductos-table-cantidad'>test</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
