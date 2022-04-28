import { HiDocumentAdd } from 'react-icons/hi';
import { FaRegSave, FaSearch } from 'react-icons/fa';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { AiFillEdit } from 'react-icons/ai';

export const LoansIcons = () => {
    return (
        <div className='loans-icons-main'>

            <div className="loans-icons-nuevo">
                <div className="loans-icons-nuevo-icon">
                    <HiDocumentAdd id='iconNuevoWA'/>
                </div>
                <p id='lblNuevoWA'>Nuevo</p>
            </div>

            <div className="loans-icons-registrar">
                <div className="loans-icons-registrar-icon">
                    <FaRegSave id='iconRegistrarWA'/>
                </div>
                <p id='lblRegistrarWA'>Registrar</p>
            </div>

            <div className='loans-icons-Editar'>
                <div className='loans-icons-Editar-icon'>
                    <AiFillEdit id='iconEditP'/>
                </div>
                <p id='lblEditarP'>Editar</p>
            </div>

            <div className='loans-icons-Buscar'>
                <div className="loans-icons-Buscar-icon">
                    <FaSearch id='iconBusWA'/>
                </div>
                <p id='lblBuscarWA'>Buscar</p>
            </div>

            <div className="loans-icons-anular">
                <div className="loans-icons-anular-icon">
                    <RiDeleteBin2Fill id='iconAnularWA'/>
                </div>
                <p id='lblAnularWA'>Anular</p>
            </div>

            {/* TODO: Add last icon */}
            {/* <div className="loans-icons-cerrar">
                <div className="loans-icons-cerrar-icon">
                    <ImCancelCircle id='iconCerrarWA'/>
                </div>
                <p id='lblCerrarWA'>Cerrar</p>
            </div> */}

        </div>
    )
}
