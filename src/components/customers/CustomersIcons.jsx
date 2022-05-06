import { HiDocumentAdd } from 'react-icons/hi';
import { FaRegSave, FaSearch } from 'react-icons/fa';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { ImCancelCircle} from 'react-icons/im';

export const CustomersIcons = () => {
    return (
        <div className='customers_icons-main'>

            <div className='customers_icons-icon'>
                <div className="customers_icons-nuevo">
                    <div className="customers_icons-nuevo-icon">
                        <HiDocumentAdd id='iconNuevoC'/>
                    </div>
                    <p id='lblNuevoC'>Nuevo</p>
                </div>

                <div className='customers_icons-Buscar'>
                    <div className="customers_icons-Buscar-icon">
                        <FaSearch id='iconBusC'/>
                    </div>
                    <p id='lblBuscarC'>Buscar</p>
                </div>

                <div className="customers_icons-registrar">
                    <div className="customers_icons-registrar-icon">
                        <FaRegSave id='iconRegistrarC'/>
                    </div>
                    <p id='lblRegistrarC'>Registrar</p>
                </div>

                <div className="customers_icons-eliminar">
                    <div className="customers_icons-eliminar-icon">
                        <RiDeleteBin2Fill id='iconEliminarC'/>
                    </div>
                    <p id='lblEliminarC'>Eliminar</p>
                </div>

                <div className="customers_icons-cerrar">
                    <div className="customers_icons-cerrar-icon">
                        <ImCancelCircle id='iconCerrarC'/>
                    </div>
                    <p id='lblCerrarC'>Cerrar</p>
                </div>
            </div>

            <div className='customers_icons-user'>
                
                <p id='lblUserCustomers'>Usuario →</p>
                <input id='txtUserCustomers' name='userCustomers' type='text' />
                <p id='lblSistemaCustomers'>SISTEMA</p>

            </div>

            

        </div>
    )
}
