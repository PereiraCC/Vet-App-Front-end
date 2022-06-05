
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
                <p>datosProductos</p>
            </div>
        </div>
    )
}
