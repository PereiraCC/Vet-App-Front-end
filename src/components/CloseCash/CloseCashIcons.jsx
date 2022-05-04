import { HiDocumentAdd } from 'react-icons/hi';
import { FaRegSave, FaSearch } from 'react-icons/fa';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { ImCancelCircle} from 'react-icons/im';

export const CloseCashIcons = () => {
    return (
        <div className='closeCash_icons-main'>

            <div className='closeCash_icons-icon-nuevo'>
                <div className='closeCash_icons-icon-nuevo-icon'>
                    <HiDocumentAdd id='iconNuevoCloseCash'/>
                </div>
                <p id='lblNuevoCloseCash'>Nuevo</p>
            </div>

            <div className='closeCash_icons-icon-Buscar'>
                <div className='closeCash_icons-icon-Buscar-icon'>
                    <FaSearch id='iconBusCloseCash'/>
                </div>
                <p id='lblBuscarCloseCash'>Buscar</p>
            </div>

            <div className='closeCash_icons-icon-registrar'>
                <div className='closeCash_icons-icon-registrar-icon'>
                    <FaRegSave id='iconRegistrarCloseCash'/>
                </div>
                <p id='lblRegistrarCloseCash'>Registrar</p>
            </div>

            <div className='closeCash_icons-icon-anular'>
                <div className='closeCash_icons-icon-anular-icon'>
                    <RiDeleteBin2Fill id='iconAnularCloseCash'/>
                </div>
                <p id='lblAnularCloseCash'>Anular</p>
            </div>

            <div className='closeCash_icons-icon-cerrar'>
                <div className='closeCash_icons-icon-cerrar-icon'>
                    <ImCancelCircle id='iconCerrarCloseCash'/>
                </div>
                <p id='lblCerrarCloseCash'>Cerrar</p>
            </div>

        </div>
    )
}
