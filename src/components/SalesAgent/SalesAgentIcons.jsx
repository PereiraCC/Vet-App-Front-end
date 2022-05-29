import { HiDocumentAdd } from 'react-icons/hi';
import { FaRegSave, FaSearch } from 'react-icons/fa';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { ImCancelCircle} from 'react-icons/im';

export const SalesAgentIcons = () => {
    return (
        <div className='salesAgent_icons-main'>

            <div className='salesAgent_icons-icon-nuevo'>
                <div className='salesAgent_icons-icon-nuevo-icon'>
                    <HiDocumentAdd id='iconNuevoSalesAgent'/>
                </div>
                <p id='lblNuevoSalesAgent'>Nuevo</p>
            </div>

            <div className='salesAgent_icons-icon-Buscar'>
                <div className='salesAgent_icons-icon-Buscar-icon'>
                    <FaSearch id='iconBusSalesAgent'/>
                </div>
                <p id='lblBuscarSalesAgent'>Buscar</p>
            </div>

            <div className='salesAgent_icons-icon-registrar'>
                <div className='salesAgent_icons-icon-registrar-icon'>
                    <FaRegSave id='iconRegistrarSalesAgent'/>
                </div>
                <p id='lblRegistrarSalesAgent'>Registrar</p>
            </div>

            <div className='salesAgent_icons-icon-anular'>
                <div className='salesAgent_icons-icon-anular-icon'>
                    <RiDeleteBin2Fill id='iconAnularSalesAgent'/>
                </div>
                <p id='lblAnularSalesAgent'>Anular</p>
            </div>

            <div className='salesAgent_icons-icon-cerrar'>
                <div className='salesAgent_icons-icon-cerrar-icon'>
                    <ImCancelCircle id='iconCerrarSalesAgent'/>
                </div>
                <p id='lblCerrarSalesAgent'>Cerrar</p>
            </div>

        </div>
    )
}
