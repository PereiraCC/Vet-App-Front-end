
export const SettingsBodyPermiso = () => {
    return (
        <div className='settings_body-permiso-main'>
            
            <div className='settings_body-permiso-main-title'>
                <p id='lblTitleSettingsBody'>Permiso para Habilitar inventario</p>
            </div>

            <div className='settings_body-permiso-main-user'>
                <p id='lblUserSettingsBody'>Usuario:</p>
                <select id='cboUserSettingsBody'>
                    <option value='1'>Juan</option>
                    <option value='2'>Pedro</option>
                    <option value='3'>Carlos</option>
                </select>
            </div>

            <div className='settings_body-permiso-main-clave'>
                <p id='lblClaveSettingsBody'>Clave:</p>
                <input type='password' id='txtClaveSettingsBody' name='claveSettingsBody' />
            </div>

            <div className='settings_body-permiso-main-repetirClave'>
                <p id='lblRepetirClaveSettingsBody'>Repetir Clave:</p>
                <input type='password' id='txtRepetirClaveSettingsBody' name='RepetirclaveSettingsBody' />
            </div>

            <div className='settings_body-permiso-main-btn'>
                <button id='btnGuardarSettingsBody'>Guardar</button>
            </div>

        </div>
    )
}
