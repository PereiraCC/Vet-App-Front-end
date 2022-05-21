import { HiDocumentAdd } from 'react-icons/hi';
import { FaRegSave } from 'react-icons/fa';
import { ImCancelCircle} from 'react-icons/im';

export const TermsIcons = () => {
    return (
        <div className='terms_icons-main'>

            <div className="terms_icons-nuevo">
                <div className="terms_icons-nuevo-icon">
                    <HiDocumentAdd id='iconNuevoTerms'/>
                </div>
                <p id='lblNuevoTerms'>Nuevo</p>
            </div>

            <div className="terms_icons-registrar">
                <div className="terms_icons-registrar-icon">
                    <FaRegSave id='iconRegistrarTerms'/>
                </div>
                <p id='lblRegistrarTerms'>Registrar</p>
            </div>

            <div className="terms_icons-cerrar">
                <div className="terms_icons-cerrar-icon">
                    <ImCancelCircle id='iconCerrarTerms'/>
                </div>
                <p id='lblCerrarTerms'>Cerrar</p>
            </div>

        </div>
    )
}
