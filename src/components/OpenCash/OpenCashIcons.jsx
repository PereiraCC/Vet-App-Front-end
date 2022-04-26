import { HiDocumentAdd } from 'react-icons/hi';
import { FaRegSave, FaSearch } from 'react-icons/fa';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { ImCancelCircle} from 'react-icons/im';

export const OpenCashIcons = () => {
    return (
        <div className='openCash_icons-main'>

            <div className="openCash_icons-nuevo">
                <div className="openCash_icons-nuevo-icon">
                    <HiDocumentAdd id='iconNuevoOC'/>
                </div>
                <p id='lblNuevoOC'>Nuevo</p>
            </div>

            <div className='openCash_icons-Buscar'>
                <div className="openCash_icons-Buscar-icon">
                    <FaSearch id='iconBusOC'/>
                </div>
                <p id='lblBuscarOC'>Buscar</p>
            </div>

            <div className="openCash_icons-registrar">
                <div className="openCash_icons-registrar-icon">
                    <FaRegSave id='iconRegistrarOC'/>
                </div>
                <p id='lblRegistrarOC'>Registrar</p>
            </div>

            <div className="openCash_icons-anular">
                <div className="openCash_icons-anular-icon">
                    <RiDeleteBin2Fill id='iconAnularOC'/>
                </div>
                <p id='lblAnularOC'>Anular</p>
            </div>

            <div className="openCash_icons-cerrar">
                <div className="openCash_icons-cerrar-icon">
                    <ImCancelCircle id='iconCerrarOC'/>
                </div>
                <p id='lblCerrarOC'>Cerrar</p>
            </div>

        </div>
    )
}
