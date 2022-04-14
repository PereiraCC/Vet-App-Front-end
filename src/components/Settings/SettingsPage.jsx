import { SettingsBody } from './settings_body/SettingsBody';

export const SettingsPage = () => {
    return (
        <div className='settings_main'>

            <div className='settings_main-header'>
                <p id="lblTitleSettings">Configuración</p>
            </div>

            <div className='settings_main-body'>
                <SettingsBody />
            </div>

            <div className='settings_main-icons'>
                <p>Configuración icons</p>
            </div>
        </div>
    )
}
