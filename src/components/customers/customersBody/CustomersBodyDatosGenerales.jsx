
export const CustomersBodyDatosGenerales = () => {
    return (
        <div className="customers_body-datos-main">

            <div className="customers_body-datos-firstBox">
                
                <div className="customers_body-datos-firstBox-1">
                    
                    <div className='customers_body-datos-firstBox-1-telefono'>
                        <div className='customers_body-datos-firstBox-1-telefono-label'>
                            <p id="lblTelefonoDatos">Teléfono</p>
                        </div>
                        <div className='customers_body-datos-firstBox-1-telefono-input'>
                            <input type="text" name="telefonoDatos" id="txtTelefonoDatos" />
                        </div>
                    </div>

                    <div className='customers_body-datos-firstBox-1-fax'>
                        <div className='customers_body-datos-firstBox-1-fax-label'>
                            <p id="lblFaxDatos">Fax (es):</p>
                        </div>
                        <div className='customers_body-datos-firstBox-1-fax-input'>
                            <input type="text" name="faxDatos" id="txtfaxDatos" />
                        </div>
                    </div>

                </div>

                <div className="customers_body-datos-firstBox-2">
                    
                    <div className='customers_body-datos-firstBox-2-direccion-label'>
                        <p id="lblDireccionDatos">Dirección</p>
                    </div>
                    <div className='customers_body-datos-firstBox-2-direccion-input'>
                        <input type="text" name="direccionDatos" id="txtDireccionDatos" />
                    </div>

                </div>

                <div className="customers_body-datos-firstBox-3">
                    
                    <div className='customers_body-datos-firstBox-3-correoCuentas'>
                        <div className='customers_body-datos-firstBox-3-correoCuentas-label'>
                            <p id="lblCorreoCuentasDatos">Correo Cuentas por Cobrar</p>
                        </div>
                        <div className='customers_body-datos-firstBox-3-correoCuentas-input'>
                            <input type="text" name="correoCuentasDatos" id="txtCorreoCuentasDatos" />
                        </div>
                    </div>

                    <div className='customers_body-datos-firstBox-3-tipoCliente'>
                        <div className='customers_body-datos-firstBox-3-tipoCliente-label'>
                            <p id="lblTipoClienteDatos">Tipo Cliente</p>
                        </div>
                        <div className='customers_body-datos-firstBox-3-tipoCliente-input'>
                            <select name="tipo" id="cboTipoClienteDatos">
                                <option value="normal1">normal1</option>
                                <option value="normal2">normal2</option>
                            </select>
                        </div>
                    </div>

                </div>

                <div className="customers_body-datos-firstBox-4">
                    
                    <div className='customers_body-datos-firstBox-4-correoFacturacion'>
                        
                        <div className='customers_body-datos-firstBox-4-correoFacturacion-label'>
                            <p id="lblCorreoFacturacionDatos">Correo Facturacion Electronica</p>
                        </div>
                        <div className='customers_body-datos-firstBox-4-correoFacturacion-input'>
                            <input type="text" name="correoFacturacionDatos" id="txtCorreoFacturacionDatos" />
                        </div>

                    </div>

                    <div className='customers_body-datos-firstBox-4-agente'>

                        <div className='customers_body-datos-firstBox-4-agente-header'>
                            <p id="lblAgenteDatos">Agente Asignado</p>
                            <div className='customers_body-datos-firstBox-4-agente-header-check'>
                                <div className="customers_body-datos-firstBox-4-agente-header-check-input"> 
                                    <input type="checkbox" id="checkSinAgente" name="sinAgente" value="sinAgente" />
                                </div>
                                <label for="checkSinAgente" id="lblSinAgente">Sin Agente</label>
                            </div>
                        </div>
                        <div className='customers_body-datos-firstBox-4-agente-input'>
                            <select name="tipo" id="cboAgenteDatos">
                                <option value="PAOLA VALERIO HERRERA">PAOLA VALERIO HERRERA</option>
                                <option value="PEDRO PEREZ">PEDRO PEREZ</option>
                            </select>
                        </div>

                    </div>

                </div>

                <div className="customers_body-datos-firstBox-5">
                    
                    <div className='customers_body-datos-firstBox-5-notificar-check'>
                        <div className="customers_body-datos-firstBox-5-notificar-check-input"> 
                            <input type="checkbox" id="checkNotificar" name="notificar" value="notificar" />
                        </div>
                        <div className='customers_body-datos-firstBox-5-notificar-check-label'>
                            <label for="checkNotificar" id="lblNotificarDatos">Notificar por correo</label>
                        </div>
                    </div>

                    <div className='customers_body-datos-firstBox-5-actualizado-check'>
                        <div className="customers_body-datos-firstBox-5-actualizado-check-input"> 
                            <input type="checkbox" id="checkActualizado" name="actualizado" value="actualizado" />
                        </div>
                        <div className='customers_body-datos-firstBox-5-actualizado-check-label'>
                            <label for="checkActualizado" id="lblActualizadoDatos">Actualizado</label>
                        </div>
                    </div>

                    <div className='customers_body-datos-firstBox-5-fallecido-check'>
                        <div className="customers_body-datos-firstBox-5-fallecido-check-input"> 
                            <input type="checkbox" id="checkFallecido" name="fallecido" value="fallecido" />
                        </div>
                        <div className='customers_body-datos-firstBox-5-fallecido-check-label'>
                            <label for="checkFallecido" id="lblFallecidoDatos">Fallecido</label>
                        </div>
                    </div>

                </div>

            </div>

            <div className="customers_body-datos-secondBox">

                <div className='customers_body-datos-secondBox-enviaCorreo'>
                    
                    <div className="customers_body-datos-secondBox-check-input"> 
                        <input type="checkbox" id="checkEnviaCorreo" name="enviaCorreo" value="enviaCorreo" />
                    </div>
                    <div className='customers_body-datos-secondBox-check-label'>
                        <label for="checkEnviaCorreo" id="lblEnviaCorreo">Envia Recibo al Correo</label>
                    </div>

                </div>

                <div className='customers_body-datos-secondBox-tipoPrecio'>
                    
                    <div className='customers_body-datos-secondBox-tipoPrecio-label'>
                        <p id="lblTipoPrecioDatos">Tipo Precio</p>
                    </div>
                    <div className='customers_body-datos-secondBox-tipoPrecio-input'>
                        <select name="tipo" id="cboTipoPrecioDatos">
                            <option value="normal1">normal1</option>
                            <option value="normal2">normal2</option>
                        </select>
                    </div>

                </div>

                <div className='customers_body-datos-secondBox-descuento'>
                    
                    <p id='lblDescuentosEspecialesDatos'>Descuentos Especiales</p>
                    <div className='customers_body-datos-secondBox-descuento-inputs'>
                        <div className='customers_body-datos-secondBox-descuento-inputs-label'>
                            <p>Descuento %</p>
                        </div>
                        <div className='customers_body-datos-secondBox-descuento-inputs-input'>
                            <input type="text" name="descuentoEspecial" id="txtDescuentoEspecialDatos" />
                        </div>
                    </div>

                </div>

                <div className='customers_body-datos-secondBox-checks'>
                    
                    <div className='customers_body-datos-secondBox-checks-inactivado'>
                        
                        <div className='customers_body-datos-secondBox-checks-inactivado-check'>
                            <div className="customers_body-datos-secondBox-checks-inactivado-check-input">
                                <input type="checkbox" id="checkInactivado" name="inactivado" value="inactivado" />
                            </div>
                            <div className='customers_body-datos-secondBox-checks-inactivado-check-label'>
                                <label for="checkInactivado" id="lblInactivado">Inactivado</label>
                            </div>
                        </div>

                        <div className='customers_body-datos-secondBox-checks-inactivado-button'>
                            <button id="btnCambiarDatos">Cambiar</button>
                        </div>

                    </div>

                    <div className='customers_body-datos-secondBox-checks-registradoMAG'>
                       
                        <div className="customers_body-datos-secondBox-check-registradoMAG-input">
                            <input type="checkbox" id="checkRegistradoMAG" name="registradoMAG" value="registradoMAG" />
                        </div>
                        <div className='customers_body-datos-secondBox-check-registradoMAG-label'>
                            <label for="checkRegistradoMAG" id="lblRegistradoMAG">Esta Registrado en el MAG</label>
                        </div>

                    </div>

                    <div className='customers_body-datos-secondBox-checks-imprimirPrecio'>
                        
                        <div className="customers_body-datos-secondBox-check-imprimirPrecio-input">
                            <input type="checkbox" id="checkImprimirPrecio" name="imprimirPrecio" value="imprimirPrecio" />
                        </div>
                        <div className='customers_body-datos-secondBox-check-imprimirPrecio-label'>
                            <label for="checkImprimirPrecio" id="lblImprimirPrecio">Imprimir Precio Sugerido</label>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
