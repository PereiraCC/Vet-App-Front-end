import { useSelector } from 'react-redux';

import { SettingsBodyTabs } from './SettingsBodyTabs';

import { SettingsBodyEmpresas } from './SettingsBodyEmpresas';
import { SettingsBodyPermiso } from './SettingsBodyPermiso';
import { SettingsBodyValores } from './SettingsBodyValores';
import { SettingsBodyComunicaciones } from './SettingsBodyComunicaciones';
import { SettingsBodyTarifas } from './SettingsBodyTarifas';

export const SettingsBody = () => {

    const state = useSelector( state => state.settings );
    const { currentTabSettings } = state;

    const redirectComponent = () => {

        switch (currentTabSettings) {

            case 'Empresas':
                return <SettingsBodyEmpresas />

            case 'Valores':
                return <SettingsBodyValores />

            case 'ComunicacionesCorreo':
                return <SettingsBodyComunicaciones />

            case 'Permiso':
                return <SettingsBodyPermiso />

            case 'Tarifas':
                return <SettingsBodyTarifas />
        
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
