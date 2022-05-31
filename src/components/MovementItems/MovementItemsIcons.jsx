import { HiDocumentAdd } from 'react-icons/hi';
import { FaRegSave, FaSearch } from 'react-icons/fa';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { ImCancelCircle} from 'react-icons/im';

export const MovementItemsIcons = () => {
    return (
        <div className='movementItems_icons-main'>

            <div className='movementItems_icons-icon-nuevo'>
                <div className='movementItems_icons-icon-nuevo-icon'>
                    <HiDocumentAdd id='iconNuevoMovementItems'/>
                </div>
                <p id='lblNuevoMovementItems'>Nuevo</p>
            </div>

            <div className='movementItems_icons-icon-Buscar'>
                <div className='movementItems_icons-icon-Buscar-icon'>
                    <FaSearch id='iconBusMovementItems'/>
                </div>
                <p id='lblBuscarMovementItems'>Buscar</p>
            </div>

            <div className='movementItems_icons-icon-registrar'>
                <div className='movementItems_icons-icon-registrar-icon'>
                    <FaRegSave id='iconRegistrarMovementItems'/>
                </div>
                <p id='lblRegistrarMovementItems'>Registrar</p>
            </div>

            <div className='movementItems_icons-icon-anular'>
                <div className='movementItems_icons-icon-anular-icon'>
                    <RiDeleteBin2Fill id='iconAnularMovementItems'/>
                </div>
                <p id='lblAnularMovementItems'>Anular</p>
            </div>

            <div className='movementItems_icons-icon-cerrar'>
                <div className='movementItems_icons-icon-cerrar-icon'>
                    <ImCancelCircle id='iconCerrarMovementItems'/>
                </div>
                <p id='lblCerrarMovementItems'>Cerrar</p>
            </div>

        </div>
    )
}
