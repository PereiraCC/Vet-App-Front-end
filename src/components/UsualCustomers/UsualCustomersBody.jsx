
export const UsualCustomersBody = () => {
    return (
        <div className="usual_customers_body-datos-main">

            <div className="usual_customers_body-datos-firstBox">
                
                <p id="lblDatosGeneralesUsualCustomers">Datos Generales</p>

                <div className="usual_customers_body-datos-firstBox-1">
                    
                    <div className='usual_customers_body-datos-firstBox-1-telefono'>
                        <div className='usual_customers_body-datos-firstBox-1-telefono-label'>
                            <p id="lblTelefonoUsualCDatos">Teléfono</p>
                        </div>
                        <div className='usual_customers_body-datos-firstBox-1-telefono-input'>
                            <input type="text" name="telefonoDatos" id="txtTelefonoUsualCDatos" />
                        </div>
                    </div>

                    <div className='usual_customers_body-datos-firstBox-1-fax'>
                        <div className='usual_customers_body-datos-firstBox-1-fax-label'>
                            <p id="lblFaxUsualCDatos">Fax (es):</p>
                        </div>
                        <div className='usual_customers_body-datos-firstBox-1-fax-input'>
                            <input type="text" name="faxDatos" id="txtfaxUsualCDatos" />
                        </div>
                    </div>

                </div>

                <div className="usual_customers_body-datos-firstBox-2">
                    
                    <div className='usual_customers_body-datos-firstBox-2-direccion-label'>
                        <p id="lblDireccionUsualCDatos">Dirección</p>
                    </div>
                    <div className='usual_customers_body-datos-firstBox-2-direccion-input'>
                        <input type="text" name="direccionDatos" id="txtDireccionUsualCDatos" />
                    </div>

                </div>

                <div className="usual_customers_body-datos-firstBox-3">
                    
                    <div className='usual_customers_body-datos-firstBox-3-email-label'>
                        <p id="lblEmailUsualCDatos">Correo Electrónico</p>
                    </div>
                    <div className='usual_customers_body-datos-firstBox-3-email-input'>
                        <input type="text" name="emailDatos" id="txtEmailUsualCDatos" />
                    </div>

                </div>
                

            </div>

            <div className="usual_customers_body-datos-secondBox">

                <div className='usual_customers_body-datos-secondBox-tipoPrecio'>
                    
                    <div className='usual_customers_body-datos-secondBox-tipoPrecio-label'>
                        <p id="lblTipoPrecioUsualCDatos">Tipo Precio</p>
                    </div>
                    <div className='usual_customers_body-datos-secondBox-tipoPrecio-input'>
                        <select name="tipo" id="cboTipoPrecioUsualCDatos">
                            <option value="normal1">normal1</option>
                            <option value="normal2">normal2</option>
                        </select>
                    </div>

                </div>

                <div className='usual_customers_body-datos-secondBox-empresa'>
                    
                    <div className="usual_customers_body-datos-secondBox-check-input">
                        <input type="checkbox" id="checkEmpresa" name="empresa" value="empresa" />
                    </div>
                    <div className='usual_customers_body-datos-secondBox-check-label'>
                        <label for="checkEmpresa" id="lblEmpresa">Empresa</label>
                    </div>

                </div>

            </div>

        </div>
    )
}
