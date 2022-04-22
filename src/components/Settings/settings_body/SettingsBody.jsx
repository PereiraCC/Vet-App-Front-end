import { useSelector } from 'react-redux';

import { SettingsBodyTabs } from './SettingsBodyTabs';

import { SettingsBodyEmpresas } from './SettingsBodyEmpresas';
import { SettingsBodyLogo } from './SettingsBodyLogo';
import { SettingsBodyNotificaciones } from './SettingsBodyNotificaciones';
import { SettingsBodyPermiso } from './SettingsBodyPermiso';
import { SettingsBodyValores } from './SettingsBodyValores';

export const SettingsBody = () => {

    const state = useSelector( state => state.settings );
    const { currentTabSettings } = state;

    const redirectComponent = () => {

        switch (currentTabSettings) {

            case 'Empresas':
                return <SettingsBodyEmpresas />

            case 'Valores':
                return <SettingsBodyValores />
            
            case 'Logo':
                return <SettingsBodyLogo />

            case 'NotificacionesCorreo':
                return <SettingsBodyNotificaciones />

            case 'Permiso':
                return <SettingsBodyPermiso />
        
            default:
                break;
        }
    }

    return (
        <div className="settings_body-main">

            <div className="settings_body-tabs">
                <SettingsBodyTabs />
            </div>

            <div className="settings_body-content">
                { 
                   redirectComponent()
                }
            </div>
            
        </div>
    )
}
