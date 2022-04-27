import { HiDocumentAdd } from 'react-icons/hi';
import { FaRegSave, FaSearch } from 'react-icons/fa';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { ImCancelCircle} from 'react-icons/im';

export const InventoryAdjustmentIcons = () => {
    return (
        <div className='inventory_adjustment-icons-main'>

            <div className="inventory_adjustment-icons-nuevo">
                <div className="inventory_adjustment-icons-nuevo-icon">
                    <HiDocumentAdd id='iconNuevoinvA'/>
                </div>
                <p id='lblNuevoinvA'>Nuevo</p>
            </div>

            <div className='inventory_adjustment-icons-Buscar'>
                <div className="inventory_adjustment-icons-Buscar-icon">
                    <FaSearch id='iconBusinvA'/>
                </div>
                <p id='lblBuscarinvA'>Buscar</p>
            </div>

            <div className="inventory_adjustment-icons-registrar">
                <div className="inventory_adjustment-icons-registrar-icon">
                    <FaRegSave id='iconRegistrarinvA'/>
                </div>
                <p id='lblRegistrarinvA'>Registrar</p>
            </div>

            <div className="inventory_adjustment-icons-anular">
                <div className="inventory_adjustment-icons-anular-icon">
                    <RiDeleteBin2Fill id='iconAnularinvA'/>
                </div>
                <p id='lblAnularinvA'>Anular</p>
            </div>

            <div className="inventory_adjustment-icons-cerrar">
                <div className="inventory_adjustment-icons-cerrar-icon">
                    <ImCancelCircle id='iconCerrarinvA'/>
                </div>
                <p id='lblCerrarinvA'>Cerrar</p>
            </div>

            <div className="inventory_adjustment-icons-user">
                <div className='inventory_adjustment-icons-user-label'>
                    <p id='lblUserinvA'>Usuario →</p>
                </div>
            </div>

        </div>
    )
}
