
export const SettingsBodyValores = () => {
    return (
        <div className='settings_body-valores-main'>
            
            <div className='settings_body-valores-inputs'>
                
                <div className='settings_body-valores-inputs-leftSide'>
                    
                    <div className='settings_body-valores-inputs-leftSide-impuesto'>
                        <p id='lblImpuestoVentaSettingsB'>Impuesto Venta</p>
                        <input type='text' id='txtImpuestoVentaSettingsB' name='impuestoVentaSettingsB'/>
                    </div>

                    <div className='settings_body-valores-inputs-leftSide-intereses'>
                        <p id='lblInteresesSettingsB'>Intereses</p>
                        <input type='text' id='txtInteresesSettingsB' name='interesesSettingsB'/>
                    </div>

                    <div className='settings_body-valores-inputs-leftSide-numeroCajeros'>
                        <p id='lblnumeroCajerosSettingsB'>Número de Cajeros</p>
                        <input type='text' id='txtnumeroCajerosSettingsB' name='numeroCajerosSettingsB'/>
                    </div>

                    <div className='settings_body-valores-inputs-leftSide-activar'>
                        <div className='settings_body-valores-inputs-leftSide-activar-input'> 
                            <input type='checkbox' id='checkActivarSettingsB' name='activarSettingsB' value='activarSettingsB' />
                        </div>
                        <label for='checkActivarSettingsB' id='lblActivarSettingsB'>Activar regalias</label>
                    </div>

                </div>

                <div className='settings_body-valores-inputs-rightSide'>
                    
                    <div className='settings_body-valores-inputs-rightSide-unico'>

                        <div className='settings_body-valores-inputs-rightSide-unico-check'>
                            <div className='settings_body-valores-inputs-rightSide-unico-check-input'> 
                                <input type='checkbox' id='checkunicoSettingsB' name='unicoSettingsB' value='unicoSettingsB' />
                            </div>
                            <label for='checkunicoSettingsB' id='lblunicoSettingsB'>Consecutivo Unico</label>
                        </div>

                        <input type='text' id='txtUnicoSettingsB' name='unicoSettingsB'/>
                        
                    </div>

                    <div className='settings_body-valores-inputs-rightSide-credito'>
                        
                        <div className='settings_body-valores-inputs-rightSide-credito-check'>
                            <div className='settings_body-valores-inputs-rightSide-credito-check-input'>
                                <input type='checkbox' id='checkcreditoSettingsB' name='creditoSettingsB' value='creditoSettingsB' />
                            </div>
                            <label for='checkcreditoSettingsB' id='lblcreditoSettingsB'>Consecutivo Crédito</label>
                        </div>

                        <input type='text' id='txtcreditoSettingsB' name='creditoSettingsB'/>

                    </div>

                    <div className='settings_body-valores-inputs-rightSide-contado'>
                        
                        <div className='settings_body-valores-inputs-rightSide-contado-check'>
                            <div className='settings_body-valores-inputs-rightSide-contado-check-input'>
                                <input type='checkbox' id='checkcontadoSettingsB' name='contadoSettingsB' value='contadoSettingsB' />
                            </div>
                            <label for='checkcontadoSettingsB' id='lblcontadoSettingsB'>Consecutivo Contado</label>
                        </div>

                        <input type='text' id='txtcontadoSettingsB' name='contadoSettingsB'/>

                    </div>

                    <div className='settings_body-valores-inputs-rightSide-pve'>
                        
                        <div className='settings_body-valores-inputs-rightSide-pve-check'>
                            <div className='settings_body-valores-inputs-rightSide-pve-check-input'>
                                <input type='checkbox' id='checkpveSettingsB' name='pveSettingsB' value='pveSettingsB' />
                            </div>
                            <label for='checkpveSettingsB' id='lblpveSettingsB'>Consecutivo PVE</label>
                        </div>

                        <input type='text' id='txtpveSettingsB' name='pveSettingsB'/>

                    </div>

                    <div className='settings_body-valores-inputs-rightSide-tallerCredito'>
                        
                        <div className='settings_body-valores-inputs-rightSide-tallerCredito-check'>
                            <div className='settings_body-valores-inputs-rightSide-tallerCredito-check-input'>
                                <input type='checkbox' id='checktallerCreditoSettingsB' name='tallerCreditoSettingsB' value='tallerCreditoSettingsB' />
                            </div>
                            <label for='checktallerCreditoSettingsB' id='lbltallerCreditoSettingsB'>Taller Crédito</label>
                        </div>

                        <input type='text' id='txttallerCreditoSettingsB' name='tallerCreditoSettingsB'/>

                    </div>

                    <div className='settings_body-valores-inputs-rightSide-tallerContado'>
                        
                        <p id='lbltallerContadoSettingsB'>Contado</p>
                        <input type='text' id='txttallerContadoSettingsB' name='tallerContadoSettingsB'/>

                    </div>

                    <div className='settings_body-valores-inputs-rightSide-mascotasCredito'>
                        
                        <div className='settings_body-valores-inputs-rightSide-mascotasCredito-check'>
                            <div className='settings_body-valores-inputs-rightSide-mascotasCredito-check-input'>
                                <input type='checkbox' id='checkmascotasCreditoSettingsB' name='mascotasCreditoSettingsB' value='mascotasCreditoSettingsB' />
                            </div>
                            <label for='checkmascotasCreditoSettingsB' id='lblmascotasCreditoSettingsB'>Mascotas Crédito</label>
                        </div>

                        <input type='text' id='txtmascotasCreditoSettingsB' name='mascotasCreditoSettingsB'/>

                    </div>

                    <div className='settings_body-valores-inputs-rightSide-mascotasContado'>
                        
                        <p id='lblmascotasContadoSettingsB'>Contado</p>
                        <input type='text' id='txtmascotasContadoSettingsB' name='mascotasContadoSettingsB'/>

                    </div>

                    <div className='settings_body-valores-inputs-rightSide-cambiaPrecio'>

                        <div className='settings_body-valores-inputs-rightSide-cambiaPrecio-check-input'>
                            <input type='checkbox' id='checkcambiaPrecioSettingsB' name='cambiaPrecioSettingsB' value='cambiaPrecioSettingsB' />
                        </div>
                        <label for='checkcambiaPrecioSettingsB' id='lblcambiaPrecioSettingsB'>Cambia Precio Personalizado</label>

                    </div>

                    <div className='settings_body-valores-inputs-rightSide-utilizarFactura'>
                        
                        <div className='settings_body-valores-inputs-rightSide-utilizarFactura-check-input'>
                            <input type='checkbox' id='checkutilizarFacturaSettingsB' name='utilizarFacturaSettingsB' value='utilizarFacturaSettingsB' />
                        </div>
                        <label for='checkutilizarFacturaSettingsB' id='lblutilizarFacturaSettingsB'>Utilizar Factura Personalizada</label>

                    </div>

                </div>

            </div>

            <div className='settings_body-valores-check'>
                
                <div className='settings_body-valores-check-input'>
                    <input type='checkbox' id='checkeditarSettingsB' name='editarSettingsB' value='editarSettingsB' />
                </div>
                <label for='checkeditarSettingsB' id='lbleditarSettingsB'>Se puede editar el nombre en facturas</label>

            </div>

        </div>
    )
}
