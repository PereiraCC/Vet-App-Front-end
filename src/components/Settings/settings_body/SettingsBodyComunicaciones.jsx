
export const SettingsBodyComunicaciones = () => {
    return (
        <div className='settings_body-comuni-main'>
            
            <div className='settings_body-comuni-main-mostrarFacturas'>
                <div className='settings_body-comuni-main-mostrarFacturas-input'>
                    <input type='checkbox' id='checkmostrarFacturasSettingsB' name='mostrarFacturasSettingsB' value='mostrarFacturasSettingsB' />
                </div>
                <label for='checkmostrarFacturasSettingsB' id='lblmostrarFacturasSettingsB'>Mostrar facturas vencidas al inicio del programa</label>
            </div>

            <div className='settings_body-comuni-main-address'>
                <p id='lblAddressSettingB'>Direccion de correo:</p>
                <input type='text' id='txtAddressSettingB' name='addressSettingB' />
            </div>

            <div className='settings_body-comuni-main-user'>
                <p id='lblUserEmailSettingB'>Usuario:</p>
                <input type='text' id='txtUserEmailSettingB' name='userEmailSettingB' />
            </div>

            <div className='settings_body-comuni-main-password'>
                <p id='lblPasswordSettingB'>Contraseña:</p>
                <input type='text' id='txtPasswordSettingB' name='passwordSettingB' />
            </div>

            <div className='settings_body-comuni-main-checks'>
                
                <div className='settings_body-comuni-main-checks-autenti'>
                    <div className='settings_body-comuni-main-checks-autenti-input'>
                        <input type='checkbox' id='checkAutenticacionSettingsB' name='autenticacionSettingsB' value='autenticacionSettingsB' />
                    </div>
                    <label for='checkAutenticacionSettingsB' id='lblAutenticacionSettingsB'>Autenticación</label>
                </div>

                <div className='settings_body-comuni-main-checks-conexionCifrada'>
                    <div className='settings_body-comuni-main-checks-conexionCifrada-input'>
                        <input type='checkbox' id='checkconexionCifradacacionSettingsB' name='conexionCifradacacionSettingsB' value='conexionCifradacacionSettingsB' />
                    </div>
                    <label for='checkconexionCifradaSettingsB' id='lblconexionCifradaSettingsB'>Conexion Cifrada</label>
                </div>

            </div>

            <div className='settings_body-comuni-main-asunto'>
                <p id='lblAsuntoSettingB'>Asunto:</p>
                <input type='text' id='txtAsuntoSettingB' name='asuntoSettingB' />
            </div>

            <div className='settings_body-comuni-main-mensaje'>
                <p id='lblMensajeSettingB'>Mensaje:</p>
                <textarea id='txtMensajeSettingB' name='mensajeSettingB' cols='3' rows='5'/>
            </div>

        </div>
    )
}
