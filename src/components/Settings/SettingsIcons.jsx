import { HiDocumentAdd } from 'react-icons/hi';
import { FaRegSave } from 'react-icons/fa';
import { ImCancelCircle} from 'react-icons/im';

export const SettingsIcons = () => {
    return (
        <div className='settings_icons-main'>

            <div className="settings_icons-nuevo">
                <div className="settings_icons-nuevo-icon">
                    <HiDocumentAdd id='iconNuevoSe'/>
                </div>
                <p id='lblNuevoSe'>Nuevo</p>
            </div>

            <div className="settings_icons-registrar">
                <div className="settings_icons-registrar-icon">
                    <FaRegSave id='iconRegistrarSe'/>
                </div>
                <p id='lblRegistrarSe'>Registrar</p>
            </div>

            <div className="settings_icons-cerrar">
                <div className="settings_icons-cerrar-icon">
                    <ImCancelCircle id='iconCerrarSe'/>
                </div>
                <p id='lblCerrarSe'>Cerrar</p>
            </div>

        </div>
    )
}
