import { FaSearch } from 'react-icons/fa';
import { ImCancelCircle} from 'react-icons/im';
import { AssingCabysCodeBody } from './AssingCabysCodeBody';

export const AssingCabysCode = () => {
    return (
        <div className='assingCabysCode-main'>

            <div className='assingCabysCode-header'>
                <p id='lblTitleAssingCabysCode'>Asignar Codigo Cabys</p>
            </div>

            <div className='assingCabysCode-body'>
                <AssingCabysCodeBody />
            </div>

            <div className='assingCabysCode-icons'>
                
                <div className='assingCabysCode-icons-Buscar'>
                    <div className='assingCabysCode-icons-Buscar-icon'>
                        <FaSearch id='iconBuscarAssingCabysCode'/>
                    </div>
                    <p id='lblBuscarAssingCabysCode'>Buscar</p>
                </div>

                <div className='assingCabysCode-icons-cerrar'>
                    <div className='assingCabysCode-icons-cerrar-icon'>
                        <ImCancelCircle id='iconCerrarAssingCabysCode'/>
                    </div>
                    <p id='lblCerrarAssingCabysCode'>Cerrar</p>
                </div>

            </div>

        </div>
    )
}
