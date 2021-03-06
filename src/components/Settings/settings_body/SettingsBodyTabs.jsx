import { useDispatch, useSelector } from 'react-redux';

import { SelectTabSettings } from '../../../actions/settings';

export const SettingsBodyTabs = () => {

    const dispatch = useDispatch();

    const state = useSelector( state => state.settings );
    const { currentTabSettings } = state;

    const handleSelectTabSettings = (nameTab) => {
        dispatch( SelectTabSettings( nameTab ) );
    }

    return (
        <ul>
            
            <li className="settings-tabs">
                <button 
                    className={currentTabSettings == 'Empresas' ? "settings-tab active" : "settings-tab"}
                    onClick={ () => handleSelectTabSettings('Empresas') }
                >
                    Empresas
                </button>
            </li>

            <li className="settings-tabs">
                <button 
                    className={currentTabSettings == 'Valores' ? "settings-tab active" : "settings-tab"}
                    onClick={ () => handleSelectTabSettings('Valores') }
                >
                    Valores
                </button>
            </li>

            <li className="settings-tabs">
                <button 
                    className={currentTabSettings == 'ComunicacionesCorreo' ? "settings-tab active" : "settings-tab"}
                    onClick={ () => handleSelectTabSettings('ComunicacionesCorreo') }
                >
                    Comunicaciones de correo
                </button>
            </li>

            <li className="settings-tabs">
                <button 
                    className={currentTabSettings == 'Permiso' ? "settings-tab active" : "settings-tab"}
                    onClick={ () => handleSelectTabSettings('Permiso') }
                >
                    Permiso
                </button>
            </li>

            {/* <li className="settings-tabs">
                <button 
                    className={currentTabSettings == 'Tarifas' ? "settings-tab active" : "settings-tab"}
                    onClick={ () => handleSelectTabSettings('Tarifas') }
                >
                    Tarifas
                </button>
            </li> */}

        </ul>
    )
}
