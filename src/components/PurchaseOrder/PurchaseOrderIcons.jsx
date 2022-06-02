import { HiDocumentAdd } from 'react-icons/hi';
import { FaRegSave, FaSearch } from 'react-icons/fa';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { ImCancelCircle} from 'react-icons/im';

export const PurchaseOrderIcons = () => {
    return (
        <div className='purchaseOrder_icons-main'>

            <div className="purchaseOrder_icons-nuevo">
                <div className="purchaseOrder_icons-nuevo-icon">
                    <HiDocumentAdd id='iconNuevoPurOrder'/>
                </div>
                <p id='lblNuevoPurOrder'>Nuevo</p>
            </div>

            <div className='purchaseOrder_icons-Buscar'>
                <div className="purchaseOrder_icons-Buscar-icon">
                    <FaSearch id='iconBusPurOrder'/>
                </div>
                <p id='lblBuscarPurOrder'>Buscar</p>
            </div>

            <div className="purchaseOrder_icons-registrar">
                <div className="purchaseOrder_icons-registrar-icon">
                    <FaRegSave id='iconRegistrarPurOrder'/>
                </div>
                <p id='lblRegistrarPurOrder'>Registrar</p>
            </div>

            <div className="purchaseOrder_icons-anular">
                <div className="purchaseOrder_icons-anular-icon">
                    <RiDeleteBin2Fill id='iconAnularPurOrder'/>
                </div>
                <p id='lblAnularPurOrder'>Anular</p>
            </div>

            <div className="purchaseOrder_icons-cerrar">
                <div className="purchaseOrder_icons-cerrar-icon">
                    <ImCancelCircle id='iconCerrarPurOrder'/>
                </div>
                <p id='lblCerrarPurOrder'>Cerrar</p>
            </div>

        </div>
    )
}
