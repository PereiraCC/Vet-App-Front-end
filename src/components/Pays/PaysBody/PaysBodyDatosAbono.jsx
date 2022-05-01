
export const PaysBodyDatosAbono = () => {
    return (
        <div className='pays_body-datosAbono-main'>
            
            <div className='pays_body-datosAbono-origen'>

                <div className='pays_body-datosAbono-origen-title'>
                    <p id='lblOrigenPaysBody'>Origen de la Forma de Pago</p>
                    <p id='lblNumberPaysBody'>16</p>
                </div>

                <div className='pays_body-datosAbono-origen-banco'>

                    <p id='lblBancoPaysBody'>Banco</p>
                    <select id='cboBancoPaysBody' name='BancoPaysBody'>
                        <option value='1'>Banco 1</option>
                        <option value='2'>Banco 2</option>
                    </select>

                </div>

                <div className='pays_body-datosAbono-origen-cuentaBancaria'>

                    <p id='lblCuentaBancariaPaysBody'>Cuenta Bancaria</p>
                    <select id='cboCuentaBancariaPaysBody' name='CuentaBancariaPaysBody'>
                        <option value='123'>123</option>
                        <option value='456'>456</option>
                    </select>
                    <p id='lblCentroPaysBody'>SUPER VETERINARIA LIBERIA</p>

                </div>

            </div>

            <div className='pays_body-datosAbono-forma'>
                
                <p id='lblFormaPaysBody'>Forma de Pago a Proveedor</p>

                <div className='pays_body-datosAbono-forma-inputs'>

                    <div className='pays_body-datosAbono-forma-inputs-tipoPago'>

                        <p id='lblTipoPagoPaysBody'>Tipo pago</p>
                        <select id='cboTipoPagoPaysBody' name='TipoPagoPaysBody'>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                        </select>

                    </div>  

                    <div className='pays_body-datosAbono-forma-inputs-documento'>
                        
                        <p id='lblDocumentoPaysBody'>Documento</p>
                        <input type='text' id='txtDocumentoPaysBody' name='DocumentoPaysBody'/>

                    </div>

                    <div className='pays_body-datosAbono-forma-inputs-cuentaDestino'>

                        <p id='lblCuentaDestinoPaysBody'>Cuenta Destino</p>
                        <select id='cboCuentaDestinoPaysBody' name='CuentaDestinoPaysBody'>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                        </select>

                    </div>

                </div>
                
            </div>

        </div>
    )
}
