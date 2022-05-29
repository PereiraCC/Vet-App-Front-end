import { HiDocumentAdd } from 'react-icons/hi';
import { FaRegSave, FaSearch } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import { ImCancelCircle} from 'react-icons/im';

export const WarehouseOrdersIcons = () => {
    return (
        <div className='warehouseOrders-icons'>

            <div className='warehouseOrders-icons-nuevo'>
                <div className='warehouseOrders-icons-nuevo-icon'>
                    <HiDocumentAdd id='iconNuevoWO'/>
                </div>
                <p id='lblNuevoWO'>Nuevo</p>
            </div>

            <div className='warehouseOrders-icons-registrar'>
                <div className='warehouseOrders-icons-registrar-icon'>
                    <FaRegSave id='iconRegistrarWO'/>
                </div>
                <p id='lblRegistrarWO'>Registrar</p>
            </div>

            <div className='warehouseOrders-icons-Editar'>
                <div className='warehouseOrders-icons-Editar-icon'>
                    <AiFillEdit id='iconEditWO'/>
                </div>
                <p id='lblEditWO'>Editar</p>
            </div>

            <div className='warehouseOrders-icons-buscar'>
                <div className='warehouseOrders-icons-buscar-icon'>
                    <FaSearch id='iconBuscarWO'/>
                </div>
                <p id='lblBuscarWO'>Buscar</p>
            </div>

            <div className='warehouseOrders-icons-cerrar'>
                <div className='warehouseOrders-icons-cerrar-icon'>
                    <ImCancelCircle id='iconCerrarWO'/>
                </div>
                <p id='lblCerrarWO'>Cerrar</p>
            </div>

        </div>
    )
}
