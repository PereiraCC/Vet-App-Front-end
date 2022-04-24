import { HiDocumentAdd } from 'react-icons/hi';
import { FaRegSave, FaSearch } from 'react-icons/fa';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { ImCancelCircle} from 'react-icons/im';

export const PresentationsPage = () => {
    return (
        <div className='presentations-main'>

            <div className='presentations-header'>
                <p id='lblTitlePresentation'>Formulario de Presentaciones</p>
            </div>

            <div className='presentations-body'>
                
                <div className='presentations-body-tipo-label'>
                    <p id="lblTipoPresentation">Tipo de Presentación</p>
                </div>

                <div className='presentations-body-tipo-select'>
                    <select id="cboTipoPresentation">
                        <option value="0">GENERAL</option>
                        <option value="1">GENERAL1</option>
                        <option value="2">GENERAL2</option>
                    </select>
                </div>

            </div>

            <div className='presentations-icons'>
                
                <div className='presentations-icons-nuevo'>
                    <div className='presentations-icons-nuevo-icon'>
                        <HiDocumentAdd id='iconNuevoP'/>
                    </div>
                    <p id='lblNuevoP'>Nuevo</p>
                </div>

                <div className='presentations-icons-Buscar'>
                    <div className='presentations-icons-Buscar-icon'>
                        <FaSearch id='iconBusP'/>
                    </div>
                    <p id='lblBuscarP'>Buscar</p>
                </div>

                <div className='presentations-icons-registrar'>
                    <div className='presentations-icons-registrar-icon'>
                        <FaRegSave id='iconRegistrarP'/>
                    </div>
                    <p id='lblRegistrarP'>Registrar</p>
                </div>

                <div className='presentations-icons-eliminar'>
                    <div className='presentations-icons-eliminar-icon'>
                        <RiDeleteBin2Fill id='iconEliminarP'/>
                    </div>
                    <p id='lblEliminarP'>Eliminar</p>
                </div>

                <div className='presentations-icons-cerrar'>
                    <div className='presentations-icons-cerrar-icon'>
                        <ImCancelCircle id='iconCerrarP'/>
                    </div>
                    <p id='lblCerrarP'>Cerrar</p>
                </div>

            </div>

        </div>
    )
}
