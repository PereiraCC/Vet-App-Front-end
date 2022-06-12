import { HiDocumentAdd } from 'react-icons/hi';
import { FaRegSave, FaSearch } from 'react-icons/fa';
import { ImCancelCircle} from 'react-icons/im';

export const TranferPointsSaleIcons = () => {
    return (
        <div className='tranferPointsSale-icons'>

            <div className='tranferPointsSale-icons-nuevo'>
                <div className='tranferPointsSale-icons-nuevo-icon'>
                    <HiDocumentAdd id='iconNuevoTranferPS'/>
                </div>
                <p id='lblNuevoTranferPS'>Nuevo</p>
            </div>

            <div className='tranferPointsSale-icons-registrar'>
                <div className='tranferPointsSale-icons-registrar-icon'>
                    <FaRegSave id='iconRegistrarTranferPS'/>
                </div>
                <p id='lblRegistrarTranferPS'>Registrar</p>
            </div>

            <div className='tranferPointsSale-icons-buscar'>
                <div className='tranferPointsSale-icons-buscar-icon'>
                    <FaSearch id='iconBuscarTranferPS'/>
                </div>
                <p id='lblBuscarTranferPS'>Buscar</p>
            </div>

            <div className='tranferPointsSale-icons-cerrar'>
                <div className='tranferPointsSale-icons-cerrar-icon'>
                    <ImCancelCircle id='iconCerrarTranferPS'/>
                </div>
                <p id='lblCerrarTranferPS'>Cerrar</p>
            </div>

        </div>
    )
}
