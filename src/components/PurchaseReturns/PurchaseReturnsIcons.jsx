import { HiDocumentAdd } from 'react-icons/hi';
import { FaRegSave, FaSearch } from 'react-icons/fa';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { ImCancelCircle} from 'react-icons/im';

export const PurchaseReturnsIcons = () => {
    return (
        <div className='purchaseReturns_icons-main'>

            <div className="purchaseReturns_icons-nuevo">
                <div className="purchaseReturns_icons-nuevo-icon">
                    <HiDocumentAdd id='iconNuevoPurReturns'/>
                </div>
                <p id='lblNuevoPurReturns'>Nuevo</p>
            </div>

            <div className='purchaseReturns_icons-Buscar'>
                <div className="purchaseReturns_icons-Buscar-icon">
                    <FaSearch id='iconBusPurReturns'/>
                </div>
                <p id='lblBuscarPurReturns'>Buscar</p>
            </div>

            <div className="purchaseReturns_icons-registrar">
                <div className="purchaseReturns_icons-registrar-icon">
                    <FaRegSave id='iconRegistrarPurReturns'/>
                </div>
                <p id='lblRegistrarPurReturns'>Registrar</p>
            </div>

            <div className="purchaseReturns_icons-anular">
                <div className="purchaseReturns_icons-anular-icon">
                    <RiDeleteBin2Fill id='iconAnularPurReturns'/>
                </div>
                <p id='lblAnularPurReturns'>Anular</p>
            </div>

            <div className="purchaseReturns_icons-cerrar">
                <div className="purchaseReturns_icons-cerrar-icon">
                    <ImCancelCircle id='iconCerrarPurReturns'/>
                </div>
                <p id='lblCerrarPurReturns'>Cerrar</p>
            </div>

        </div>
    )
}
