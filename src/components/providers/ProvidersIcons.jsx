import { HiDocumentAdd } from 'react-icons/hi';
import { FaRegSave, FaSearch } from 'react-icons/fa';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { ImCancelCircle} from 'react-icons/im';


export const ProvidersIcons = () => {
    return (
        <div className='providers_icons-main'>

            <div className="providers_icons-nuevo">
                <div className="providers_icons-nuevo-icon">
                    <HiDocumentAdd id='iconNuevoP'/>
                </div>
                <p id='lblNuevoP'>Nuevo</p>
            </div>

            <div className='providers_icons-Buscar'>
                <div className="providers_icons-Buscar-icon">
                    <FaSearch id='iconBusP'/>
                </div>
                <p id='lblBuscarP'>Buscar</p>
            </div>

            <div className="providers_icons-registrar">
                <div className="providers_icons-registrar-icon">
                    <FaRegSave id='iconRegistrarP'/>
                </div>
                <p id='lblRegistrarP'>Registrar</p>
            </div>

            <div className="providers_icons-eliminar">
                <div className="providers_icons-eliminar-icon">
                    <RiDeleteBin2Fill id='iconEliminarP'/>
                </div>
                <p id='lblEliminarP'>Eliminar</p>
            </div>

            <div className="providers_icons-cerrar">
                <div className="providers_icons-cerrar-icon">
                    <ImCancelCircle id='iconCerrarP'/>
                </div>
                <p id='lblCerrarP'>Cerrar</p>
            </div>

        </div>
    )
}
