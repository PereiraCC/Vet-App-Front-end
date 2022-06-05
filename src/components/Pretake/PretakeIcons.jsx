import { HiDocumentAdd } from 'react-icons/hi';
import { FaRegSave, FaSearch } from 'react-icons/fa';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { ImCancelCircle} from 'react-icons/im';

export const PretakeIcons = () => {
    return (
        <div className='pretake_icons-main'>

            <div className="pretake_icons-registrar">
                <div className="pretake_icons-registrar-icon">
                    <FaRegSave id='iconRegistrarPretake'/>
                </div>
                <p id='lblRegistrarPretake'>Registrar</p>
            </div>

            <div className='pretake_icons-Buscar'>
                <div className="pretake_icons-Buscar-icon">
                    <FaSearch id='iconBusPretake'/>
                </div>
                <p id='lblBuscarPretake'>Buscar</p>
            </div>

            <div className="pretake_icons-anular">
                <div className="pretake_icons-anular-icon">
                    <RiDeleteBin2Fill id='iconAnularPretake'/>
                </div>
                <p id='lblAnularPretake'>Anular</p>
            </div>

            <div className="pretake_icons-cerrar">
                <div className="pretake_icons-cerrar-icon">
                    <ImCancelCircle id='iconCerrarPretake'/>
                </div>
                <p id='lblCerrarPretake'>Cerrar</p>
            </div>

        </div>
    )
}
