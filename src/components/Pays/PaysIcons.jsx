import { HiDocumentAdd } from 'react-icons/hi';
import { FaRegSave, FaSearch } from 'react-icons/fa';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { ImCancelCircle} from 'react-icons/im';

export const PaysIcons = () => {
    return (
        <div className='pays_icons-main'>

            <div className='pays_icons-icons'>

                <div className='pays_icons-icons-nuevo'>
                    <div className='pays_icons-icons-nuevo-icon'>
                        <HiDocumentAdd id='iconNuevoPays'/>
                    </div>
                    <p id='lblNuevoPays'>Nuevo</p>
                </div>

                <div className='pays_icons-icons-Buscar'>
                    <div className='pays_icons-icons-Buscar-icon'>
                        <FaSearch id='iconBusPays'/>
                    </div>
                    <p id='lblBuscarPays'>Buscar</p>
                </div>

                <div className='pays_icons-icons-registrar'>
                    <div className='pays_icons-icons-registrar-icon'>
                        <FaRegSave id='iconRegistrarPays'/>
                    </div>
                    <p id='lblRegistrarPays'>Registrar</p>
                </div>

                <div className='pays_icons-icons-anular'>
                    <div className='pays_icons-icons-anular-icon'>
                        <RiDeleteBin2Fill id='iconAnularPays'/>
                    </div>
                    <p id='lblAnularPays'>Anular</p>
                </div>

                <div className='pays_icons-icons-cerrar'>
                    <div className='pays_icons-icons-cerrar-icon'>
                        <ImCancelCircle id='iconCerrarPays'/>
                    </div>
                    <p id='lblCerrarPays'>Cerrar</p>
                </div>

            </div>

            <div className='pays_icons-footer'>
                
                <div className='pays_icons-footer-anulado'>

                    <div className="pays_icons-footer-anulado-input"> 
                        <input type="checkbox" id="checkAnuladoPays" name="anuladoPays" value="anuladoPays" />
                    </div>
                    <label for="checkAnuladoPays" id="lblAnuladoPays">Anulado</label>

                </div>

                <div className='pays_icons-footer-user'>
                    <p id='lblUserPays'>Usuario →</p>
                </div>

                <div className='pays_icons-footer-result'>
                    <input type="text" id="txtResultPays" name="resultPays" />
                </div>

            </div>

        </div>
    )
}
