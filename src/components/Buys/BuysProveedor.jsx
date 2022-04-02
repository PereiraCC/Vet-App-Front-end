
export const BuysProveedor = () => {
    return (
        <div className='buys_proveedor-main'>
            
            <div className='buys_proveedor-title'>
                <p id='lblTitleProveedor'>Nombre del Proveedor</p>
            </div>

            <div className='buys_proveedor-inputs'>

                <div className='buys_proveedor-inputs-codigo'>
                    <input name='codigoProveedor' id='txtcodigoProveedor' value='1215'/>
                </div>

                <div className='buys_proveedor-inputs-nombre'>
                    <input name='nombreProveedor' id='txtnombreProveedor' value='REPAGRO SA'/>
                </div>
            </div>

        </div>
    )
}
