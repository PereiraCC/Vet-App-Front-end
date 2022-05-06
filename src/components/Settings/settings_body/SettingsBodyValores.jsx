
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
                    <p>Right Side</p>
                </div>

            </div>

            <div className='settings_body-valores-check'>
                <p>Check</p>
            </div>

        </div>
    )
}
