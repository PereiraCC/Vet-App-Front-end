import { HiDocumentAdd } from 'react-icons/hi';
import { FaRegSave, FaSearch } from 'react-icons/fa';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { ImCancelCircle} from 'react-icons/im';

export const BillsIcons = () => {
    return (
        <div className='Bills_icons-main'>

            <div className="Bills_icons-nuevo">
                <div className="Bills_icons-nuevo-icon">
                    <HiDocumentAdd id='iconNuevoBills'/>
                </div>
                <p id='lblNuevoBills'>Nuevo</p>
            </div>

            <div className='Bills_icons-Buscar'>
                <div className="Bills_icons-Buscar-icon">
                    <FaSearch id='iconBusBills'/>
                </div>
                <p id='lblBuscarBills'>Buscar</p>
            </div>

            <div className="Bills_icons-registrar">
                <div className="Bills_icons-registrar-icon">
                    <FaRegSave id='iconRegistrarBills'/>
                </div>
                <p id='lblRegistrarBills'>Registrar</p>
            </div>

            <div className="Bills_icons-anular">
                <div className="Bills_icons-anular-icon">
                    <RiDeleteBin2Fill id='iconAnularBills'/>
                </div>
                <p id='lblAnularBills'>Anular</p>
            </div>

            <div className="Bills_icons-cerrar">
                <div className="Bills_icons-cerrar-icon">
                    <ImCancelCircle id='iconCerrarBills'/>
                </div>
                <p id='lblCerrarBills'>Cerrar</p>
            </div>

        </div>
    )
}
