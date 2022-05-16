import { HiDocumentAdd } from 'react-icons/hi';
import { FaRegSave, FaSearch } from 'react-icons/fa';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { ImCancelCircle} from 'react-icons/im';

export const FamilyIcons = () => {
    return (
        <div className='family_icons-main'>

            <div className='family_icons-icon-nuevo'>
                <div className='family_icons-icon-nuevo-icon'>
                    <HiDocumentAdd id='iconNuevoFamily'/>
                </div>
                <p id='lblNuevoFamily'>Nuevo</p>
            </div>

            <div className='family_icons-icon-Buscar'>
                <div className='family_icons-icon-Buscar-icon'>
                    <FaSearch id='iconBusFamily'/>
                </div>
                <p id='lblBuscarFamily'>Buscar</p>
            </div>

            <div className='family_icons-icon-registrar'>
                <div className='family_icons-icon-registrar-icon'>
                    <FaRegSave id='iconRegistrarFamily'/>
                </div>
                <p id='lblRegistrarFamily'>Registrar</p>
            </div>

            <div className='family_icons-icon-anular'>
                <div className='family_icons-icon-anular-icon'>
                    <RiDeleteBin2Fill id='iconAnularFamily'/>
                </div>
                <p id='lblAnularFamily'>Eliminar</p>
            </div>

            <div className='family_icons-icon-cerrar'>
                <div className='family_icons-icon-cerrar-icon'>
                    <ImCancelCircle id='iconCerrarFamily'/>
                </div>
                <p id='lblCerrarFamily'>Cerrar</p>
            </div>

        </div>
    )
}
