import { FaRegSave, FaSearch } from 'react-icons/fa';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { ImCancelCircle} from 'react-icons/im';

export const TakeIcons = () => {
    return (
        <div className='take_icons-main'>

            <div className="take_icons-registrar">
                <div className="take_icons-registrar-icon">
                    <FaRegSave id='iconRegistrarTake'/>
                </div>
                <p id='lblRegistrarTake'>Registrar</p>
            </div>

            <div className='take_icons-Buscar'>
                <div className="take_icons-Buscar-icon">
                    <FaSearch id='iconBusTake'/>
                </div>
                <p id='lblBuscarTake'>Buscar</p>
            </div>

            <div className="take_icons-anular">
                <div className="take_icons-anular-icon">
                    <RiDeleteBin2Fill id='iconAnularTake'/>
                </div>
                <p id='lblAnularTake'>Anular</p>
            </div>

            <div className="take_icons-cerrar">
                <div className="take_icons-cerrar-icon">
                    <ImCancelCircle id='iconCerrarTake'/>
                </div>
                <p id='lblCerrarTake'>Cerrar</p>
            </div>

        </div>
    )
}
