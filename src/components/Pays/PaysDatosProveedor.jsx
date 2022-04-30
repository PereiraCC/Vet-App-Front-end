
export const PaysDatosProveedor = () => {
    return (
        <div className='pays_datosP-main'>

            <div className='pays_datosP-header'>
                <p id='lblDatosPTitle'>Datos del Proveedor</p>
            </div>

            <div className='pays_datosP-inputs'>
                
                <div className='pays_datosP-inputs-codigo'>
                    <p id='lblCodigoDatosPays'>Código</p>
                    <input type='text' id='txtCodigoDatosPays'/>
                </div>

                <div className='pays_datosP-inputs-nombre'>
                    <p id='lblNombreDatosPays'>Nombre</p>
                    <input type='text' id='txtNombreDatosPays'/>
                </div>

                <div className='pays_datosP-inputs-recibo'>
                    <p id='lblReciboDatosPays'>Recibo #</p>
                    <input type='text' id='txtReciboDatosPays'/>
                </div>

                <div className='pays_datosP-inputs-fecha'>
                    <p id='lblFechaDatosPays'>Fecha</p>
                    <input type='date' id='txtFechaDatosPays'/>
                </div>

                <div className='pays_datosP-inputs-moneda'>
                    <p id='lblMonedaDatosPays'>Moneda</p>
                    <select id='cboMonedaDatosPays'>
                        <option value='COLON'>COLON</option>
                        <option value='DOLAR'>DOLAR</option>
                    </select>
                </div>

                <div className='pays_datosP-inputs-tipoCambio'>
                    <p id='lblTipoCambioDatosPays'>Tipo Cambio</p>
                    <input type='text' id='txtTipoCambioDatosPays'/>
                </div>

            </div>

        </div>
    )
}
