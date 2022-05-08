import { MdOutlineUpdate } from 'react-icons/md';
import { HiDocumentAdd, HiDocumentRemove } from 'react-icons/hi';
import { FaSearch } from 'react-icons/fa';
import { ImCancelCircle } from 'react-icons/im';

export const InventoryFooter = () => {
    return (
        <div className='inventory_footer-main'>
            
            <div className='inventory_footer-Actualizar'>
                <div className="inventory_footer-Actualizar-icon">
                    <MdOutlineUpdate id='iconAct'/>
                </div>
                <p id='lblActualizar'>Actualizar</p>
            </div>

            <div className='inventory_footer-Nuevo'>
                <div className="inventory_footer-Nuevo-icon">
                    <HiDocumentAdd id='iconNue'/>
                </div>
                <p id='lblNuevo'>Nuevo</p>
            </div>

            <div className='inventory_footer-Buscar'>
                <div className="inventory_footer-Buscar-icon">
                    <FaSearch id='iconBus'/>
                </div>
                <p id='lblBuscar'>Buscar</p>
            </div>

            <div className='inventory_footer-Cerrar'>
                <div className="inventory_footer-Cerrar-icon">
                    <ImCancelCircle id='iconCer'/>
                </div>
                <p id='lblCerrar'>Cerrar</p>
            </div>
        </div>
    )
}
