import { HiDocumentAdd } from 'react-icons/hi';
import { FaRegSave, FaSearch } from 'react-icons/fa';
import { ImCancelCircle} from 'react-icons/im';

export const RequestWineryIcons = () => {
    return (
        <div className='requestWinery-icons'>

            <div className='requestWinery-icons-nuevo'>
                <div className='requestWinery-icons-nuevo-icon'>
                    <HiDocumentAdd id='iconNuevoRW'/>
                </div>
                <p id='lblNuevoRW'>Nuevo</p>
            </div>

            <div className='requestWinery-icons-registrar'>
                <div className='requestWinery-icons-registrar-icon'>
                    <FaRegSave id='iconRegistrarRW'/>
                </div>
                <p id='lblRegistrarRW'>Registrar</p>
            </div>

            <div className='requestWinery-icons-buscar'>
                <div className='requestWinery-icons-buscar-icon'>
                    <FaSearch id='iconBuscarRW'/>
                </div>
                <p id='lblBuscarRW'>Buscar</p>
            </div>

            <div className='requestWinery-icons-cerrar'>
                <div className='requestWinery-icons-cerrar-icon'>
                    <ImCancelCircle id='iconCerrarRW'/>
                </div>
                <p id='lblCerrarRW'>Cerrar</p>
            </div>

        </div>
    )
}
