
export const ProvidersForm = () => {
    return (
        <div className='providers_form-main'>

            <div className='providers_form-personal'>
                
                <div className='providers_form-personal-1'>

                    <div className='providers_form-personal-1-label-identi'>
                        <p id='lblIdentificacionProviders' >Identificación</p>
                    </div>
                    <div className='providers_form-personal-1-input-identi'>
                        <input name='identificacionProviders' id='txtIdentificacionProviders' />
                    </div>

                </div>

                <div className='providers_form-personal-2'>
                    
                    <div className='providers_form-personal-2-nombre' >

                        <div className='providers_form-personal-2-label-nombre'>
                            <p id='lblNombreProviders'>Nombre</p>
                        </div>
                        <div className='providers_form-personal-2-input-nombre'>
                            <input name='nombreProviders' id='txtNombreProviders' />
                        </div>

                    </div>

                    <div className='providers_form-personal-2-cedula' >
                        
                        <div className='providers_form-personal-2-label-cedula'>
                            <p id='lblCedulaProviders'>Cédula</p>
                        </div>
                        <div className='providers_form-personal-2-input-cedula'>
                            <input name='cedulaProviders' id='txtCedulaProviders' />
                        </div>

                    </div>

                </div>

                <div className='providers_form-personal-3'>
                    
                    <div className='providers_form-personal-3-telefono' >

                        <div className='providers_form-personal-3-label-telefono'>
                            <p id='lblTelefonoProviders'>Teléfono(s)</p>
                        </div>
                        <div className='providers_form-personal-3-input-telefono'>
                            <input name='telefonoProviders' id='txtTelefonoProviders' />
                        </div>

                    </div>

                    <div className='providers_form-personal-3-fax' >

                        <div className='providers_form-personal-3-label-fax'>
                            <p id='lblFaxProviders'>Fax(s)</p>
                        </div>
                        <div className='providers_form-personal-3-input-fax'>
                            <input name='faxProviders' id='txtFaxProviders' />
                        </div>

                    </div>

                    <div className='providers_form-personal-3-visitas' >

                        <div className='providers_form-personal-3-label-visitas'>
                            <p id='lblVisitasProviders'>Visitas al Mes</p>
                        </div>
                        <div className='providers_form-personal-3-input-visitas'>
                            <input name='visitasProviders' id='txtVisitasProviders' />
                        </div>

                    </div>

                </div>

                <div className='providers_form-personal-4'>

                    <div className='providers_form-personal-4-email' >

                        <div className='providers_form-personal-4-label-email'>
                            <p id='lblEmailProviders'>E-Mail</p>
                        </div>
                        <div className='providers_form-personal-4-input-email'>
                            <input name='emailProviders' id='txtEmailProviders' />
                        </div>

                    </div>

                    <div className='providers_form-personal-4-series' >

                        <div className="providers_form-personal-4-check-series-input"> 
                            <input type="checkbox" id="checkSeries" name="series" value="Productosseries" />
                        </div>
                        <label for="checkSeries" id="lblSeries">Productos con Series</label>

                    </div>

                </div>

                <div className='providers_form-personal-5'>
                    
                    <div className='providers_form-personal-5-label-direccion'>
                            <p id='lblDireccionProviders' >Dirección</p>
                    </div>
                    <div className='providers_form-personal-5-input-direccion'>
                        <input name='DireccionProviders' id='txtDireccionProviders' />
                    </div>

                </div>

                <div className='providers_form-personal-6'>
                    
                    <div className='providers_form-personal-6-label-observacion'>
                            <p id='lblobservacionProviders' >Observación</p>
                    </div>
                    <div className='providers_form-personal-6-input-observacion'>
                        <input name='observacionProviders' id='txtobservacionProviders' />
                    </div>

                </div>

                <div className='providers_form-personal-7'>
                    
                    <div className='providers_form-personal-7-contacto' >

                        <div className='providers_form-personal-7-label-contacto'>
                            <p id='lblContactoProviders'>Contacto</p>
                        </div>
                        <div className='providers_form-personal-7-input-contacto'>
                            <input name='contactoProviders' id='txtContactoProviders' />
                        </div>

                    </div>

                    <div className='providers_form-personal-7-telefonoContacto' >

                        <div className='providers_form-personal-7-label-telefonoContacto'>
                            <p id='lblTelefonoContactoProviders'>Teléfono</p>
                        </div>
                        <div className='providers_form-personal-7-input-telefonoContacto'>
                            <input name='telefonoContactoProviders' id='txtTelefonoContactoProviders' />
                        </div>

                    </div>

                </div>

            </div>

            <div className='providers_form-accounting'>
                
                <div className='providers_form-accounting-inputs'>

                    <div className='providers_form-accounting-inputs-firstLine'>

                        <div className='providers_form-accounting-inputs-firstLine-plazo' >

                            <div className='providers_form-accounting-inputs-firstLine-label-plazo'>
                                <p id='lblPlazoProviders'>Plazo</p>
                            </div>
                            <div className='providers_form-accounting-inputs-firstLine-input-plazo'>
                                <input name='plazoProviders' id='txtPlazoProviders' />
                            </div>
                            <div className='providers_form-accounting-inputs-firstLine-label-plazo-dias'>
                                <p id='lblPlazoDiasProviders'>días</p>
                            </div>

                        </div>

                        <div className='providers_form-accounting-inputs-firstLine-limite' >

                            <div className='providers_form-accounting-inputs-firstLine-label-limite'>
                                <p id='lblLimiteProviders'>Limite de Crédito</p>
                            </div>
                            <div className='providers_form-accounting-inputs-firstLine-input-limite'>
                                <input name='limiteProviders' id='txtLimiteProviders' />
                            </div>

                        </div>

                    </div>

                    <div className='providers_form-accounting-inputs-SecondLine'>
                        
                        <div className='providers_form-accounting-inputs-SecondLine-label-cuenta'>
                            <p id='lblCuentaProviders'>Cuenta Contable</p>
                        </div>

                        <div className='providers_form-accounting-inputs-SecondLine-inputs-cuenta'>
                            <input name='cuenta1Providers' id='txtCuenta1Providers' />
                            <input name='cuenta2Providers' id='txtCuenta2Providers' />
                        </div>

                    </div>

                </div>

                <div className='providers_form-accounting-check'>

                    <div className='providers_form-accounting-check-firstLine'>
                        
                        <div className='providers_form-accounting-check-firstLine-check-utilidad' >

                            <div className="providers_form-accounting-check-firstLine-check-utilidad-input"> 
                                <input type="checkbox" id="checkUtilidad" name="utilidad" value="utilidad" />
                            </div>
                            <label for="checkUtilidad" id="lblUtilidadProviders">Utilidad Fija</label>

                        </div>

                        <div className='providers_form-accounting-check-firstLine-label-utilidad' >
                            <p id='lblUtilidadProvidersResul'>0</p>
                        </div>

                    </div>

                    <div className='providers_form-accounting-check-secondLine'>
                        
                        <div className='providers_form-accounting-check-secondLine-check-costo' >

                            <div className="providers_form-accounting-check-secondLine-check-costo-input"> 
                                <input type="checkbox" id="checkCosto" name="costo" value="costo" />
                            </div>
                            <label for="checkCosto" id="lblCostoProviders">Costo Total</label>

                        </div>

                        <div className='providers_form-accounting-check-secondLine-check-imp' >

                            <div className="providers_form-accounting-check-secondLine-check-imp-input"> 
                                <input type="checkbox" id="checkImp" name="imp" value="imp" />
                            </div>
                            <label for="checkImp" id="lblImpProviders">Imp. Incluido</label>

                        </div>

                    </div>

                    <div className='providers_form-accounting-check-thirdLine'>
                        
                        <div className='providers_form-accounting-check-thirdLine-check-actualizado' >

                            <div className="providers_form-accounting-check-thirdLine-check-actualizado-input"> 
                                <input type="checkbox" id="checkActualizado" name="actualizado" value="actualizado" />
                            </div>
                            <label for="checkActualizado" id="lblActualizadoProviders">Actualizado</label>

                        </div>

                        <div className='providers_form-accounting-check-thirdLine-check-inhabilitar' >

                            <div className="providers_form-accounting-check-thirdLine-check-inhabilitar-input"> 
                                <input type="checkbox" id="checkInhabilitar" name="inhabilitar" value="inhabilitar" />
                            </div>
                            <label for="checkInhabilitar" id="lblInhabilitarProviders">Inhabilitar</label>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
