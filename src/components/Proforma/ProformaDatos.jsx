import { SiHappycow } from 'react-icons/si';

export const ProformaDatos = () => {
    return (
        <div className='proforma_datos-main'>
            
            <div className='proforma_datos-clientes'>
                
                <div className='proforma_datos-clientes-title'>
                    <p id='lblClienteTitleProforma'>Datos del Clientes</p>
                </div>

                <div className='proforma_datos-clientes-first'>
                    
                    <div className='proforma_datos-clientes-first-cedula'>
                        <p id='lblClienteCedulaProforma'>Cédula</p>
                        <input type='text' id='txtClienteCedulaProforma' name='clienteCedulaProforma' />
                    </div>

                    <div className='proforma_datos-clientes-first-tipo'>
                        <p id='lblClienteTipoProforma'>Tipo</p>
                        <select id='cboClienteTipoProforma' name='clienteTipoProforma'>
                            <option value='Fisica'>Fisica</option>
                            <option value='Jurídica'>Jurídica</option>
                            <option value='Dimex'>Dimex</option>
                        </select>
                    </div>

                    <div className='proforma_datos-clientes-first-nombre'>
                        <p id='lblClienteNombreProforma'>Nombre del Cliente</p>
                        <input type='text' id='txtClienteNombreProforma' name='clienteNombreProforma' />
                    </div>

                    <div className='proforma_datos-clientes-first-btn'>
                        <SiHappycow id='btnCow'/>
                    </div>

                </div>

                <div className='proforma_datos-clientes-second'>
                    
                    <div className='proforma_datos-clientes-second-contacto'>
                        <p id='lblClienteContactoProforma'>Contacto</p>
                        <input type='text' id='txtClienteContactoProforma' name='clienteContactoProforma' />
                    </div>

                    <div className='proforma_datos-clientes-second-telefono'>
                        <p id='lblClienteTelefonoProforma'>Teléfono</p>
                        <input type='text' id='txtClienteTelefonoProforma' name='clienteTelefonoProforma' />
                    </div>

                    <div className='proforma_datos-clientes-second-fecha'>
                        <p id='lblClienteFechaProforma'>Fecha</p>
                        <p id='lblClienteFechaValueProforma'>22/05/2022</p>
                    </div>

                </div>

            </div>

            <div className='proforma_datos-condicciones'>
                
                <div className='proforma_datos-condicciones-title'>
                    <p id='lblCondiccionesTitleProforma'>Condiciones de Cotización</p>
                </div>

                <div className='proforma_datos-condicciones-validez'>
                    <p id='lblValidezCProforma'>Validez</p>
                    <input type='text' id='txtValidezCProforma' name='validezCProforma' />
                    <p id='lblValidezDiasCProforma'>Días</p>
                </div>

                <div className='proforma_datos-condicciones-tiempo'>
                    <p id='lblTiempoCProforma'>Tiempo de Entrega</p>
                    <input type='text' id='txtTiempoCProforma' name='tiempoCProforma' />
                    <p id='lblTiempoDiasCProforma'>Días</p>
                </div>

                <div className='proforma_datos-condicciones-moneda'>
                    <p id='lblMonedaCProforma'>Moneda</p>
                    <select id='cboMonedaCProforma' name='monedaCProforma'>
                        <option value='Colon'>Colon</option>
                        <option value='Dólar'>Dólar</option>
                    </select>
                    <button id='btnMonedaCProforma'>...</button>
                </div>

            </div>

            <div className='proforma_datos-formaPago'>

                <p id='lblTitleFormaPagoProforma'>Forma de Pago</p>

                <div className='proforma_datos-formaPago-radios'>

                    <div className='proforma_datos-formaPago-contado'>
                        <input type="radio" id="rbContadoFormaPago" name="contadoFormaPago" value="contadoFormaPago" />
                        <label for="rbContadoFormaPago" id='lblContadoFormaPago'>Contado</label>
                    </div>

                    <div className='proforma_datos-formaPago-credito'>
                        <input type="radio" id="rbCreditoFormaPago" name="creditoFormaPago" value="creditoFormaPago" />
                        <label for="rbCreditoFormaPago" id='lblCreditoFormaPago'>Crédito</label>
                    </div>

                </div>              

            </div>

        </div>
    )
}
