import { HiDocumentAdd } from 'react-icons/hi';
import { FaRegSave, FaSearch } from 'react-icons/fa';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { ImCancelCircle} from 'react-icons/im';

export const ScreenRegister = () => {
    return (
        <div className='screenRegister-main'>

            <div className='screenRegister-header'>
                <p id='lblTitleScreenRegister'>Módulo de Pantallas</p>
            </div>

            <div className='screenRegister-body'>
                
                <div className='screenRegister-body-codigo'>
                    <p id='lblCodigoScreenRegister'>Código</p>
                    <input type='text' id='txtCodigoScreenRegister' name='codigoScreenRegister' />
                </div>

                <div className='screenRegister-body-pantalla'>
                    <p id='lblPantallaScreenRegister'>Pantalla</p>
                    <input type='text' id='txtPantallaScreenRegister' name='pantallaScreenRegister' />
                </div>

            </div>

            <div className='screenRegister-icons'>
                
                <div className='screenRegister-icons-nuevo'>
                    <div className='screenRegister-icons-nuevo-icon'>
                        <HiDocumentAdd id='iconNuevoScreenRegister'/>
                    </div>
                    <p id='lblNuevoScreenRegister'>Nuevo</p>
                </div>

                <div className='screenRegister-icons-Buscar'>
                    <div className='screenRegister-icons-Buscar-icon'>
                        <FaSearch id='iconBusScreenRegister'/>
                    </div>
                    <p id='lblBuscarScreenRegister'>Buscar</p>
                </div>

                <div className='screenRegister-icons-registrar'>
                    <div className='screenRegister-icons-registrar-icon'>
                        <FaRegSave id='iconRegistrarScreenRegister'/>
                    </div>
                    <p id='lblRegistrarScreenRegister'>Registrar</p>
                </div>

                <div className='screenRegister-icons-eliminar'>
                    <div className='screenRegister-icons-eliminar-icon'>
                        <RiDeleteBin2Fill id='iconEliminarScreenRegister'/>
                    </div>
                    <p id='lblEliminarScreenRegister'>Eliminar</p>
                </div>

                <div className='screenRegister-icons-cerrar'>
                    <div className='screenRegister-icons-cerrar-icon'>
                        <ImCancelCircle id='iconCerrarScreenRegister'/>
                    </div>
                    <p id='lblCerrarScreenRegister'>Cerrar</p>
                </div>

            </div>

        </div>
    )
}
