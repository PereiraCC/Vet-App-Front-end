import { FaSearch } from 'react-icons/fa';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { ImCancelCircle} from 'react-icons/im';

export const CheckOrdersIcons = () => {
    return (
        <div className='checkOrders_icons-main'>

            <div className='checkOrders_icons-Buscar'>
                <div className="checkOrders_icons-Buscar-icon">
                    <FaSearch id='iconBusCK'/>
                </div>
                <p id='lblBuscarCK'>Buscar</p>
            </div>

            <div className="checkOrders_icons-eliminar">
                <div className="checkOrders_icons-eliminar-icon">
                    <RiDeleteBin2Fill id='iconEliminarCK'/>
                </div>
                <p id='lblEliminarCK'>Eliminar</p>
            </div>

            <div className="checkOrders_icons-cerrar">
                <div className="checkOrders_icons-cerrar-icon">
                    <ImCancelCircle id='iconCerrarCK'/>
                </div>
                <p id='lblCerrarCK'>Cerrar</p>
            </div>
            
        </div>
    )
}
