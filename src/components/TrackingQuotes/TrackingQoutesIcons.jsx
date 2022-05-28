import { FaSearch } from 'react-icons/fa';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { ImCancelCircle} from 'react-icons/im';

export const TrackingQoutesIcons = () => {
    return (

        <div className='trackingQoutes_icons-main'>

            <div className='trackingQoutes_icons-Buscar'>
                <div className="trackingQoutes_icons-Buscar-icon">
                    <FaSearch id='iconBusTQ'/>
                </div>
                <p id='lblBuscarTQIcon'>Buscar</p>
            </div>

            <div className="trackingQoutes_icons-eliminar">
                <div className="trackingQoutes_icons-eliminar-icon">
                    <RiDeleteBin2Fill id='iconEliminarTQ'/>
                </div>
                <p id='lblEliminarTQ'>Eliminar</p>
            </div>

            <div className="trackingQoutes_icons-cerrar">
                <div className="trackingQoutes_icons-cerrar-icon">
                    <ImCancelCircle id='iconCerrarTQ'/>
                </div>
                <p id='lblCerrarTQ'>Cerrar</p>
            </div>
            
        </div>
    )
}
