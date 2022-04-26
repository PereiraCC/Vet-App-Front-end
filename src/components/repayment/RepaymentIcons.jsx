import { HiDocumentAdd } from 'react-icons/hi';
import { FaRegSave, FaSearch } from 'react-icons/fa';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { ImCancelCircle} from 'react-icons/im';

export const RepaymentIcons = () => {
    return (
        <div className='repayment_icons-main'>

            <div className="repayment_icons-nuevo">
                <div className="repayment_icons-nuevo-icon">
                    <HiDocumentAdd id='iconNuevoD'/>
                </div>
                <p id='lblNuevoD'>Nuevo</p>
            </div>

            <div className='repayment_icons-Buscar'>
                <div className="repayment_icons-Buscar-icon">
                    <FaSearch id='iconBusDev'/>
                </div>
                <p id='lblBuscarDev'>Buscar</p>
            </div>

            <div className="repayment_icons-registrar">
                <div className="repayment_icons-registrar-icon">
                    <FaRegSave id='iconRegistrarD'/>
                </div>
                <p id='lblRegistrarD'>Registrar</p>
            </div>

            <div className="repayment_icons-anular">
                <div className="repayment_icons-anular-icon">
                    <RiDeleteBin2Fill id='iconAnularD'/>
                </div>
                <p id='lblAnularD'>Anular</p>
            </div>

            <div className="repayment_icons-cerrar">
                <div className="repayment_icons-cerrar-icon">
                    <ImCancelCircle id='iconCerrarD'/>
                </div>
                <p id='lblCerrarD'>Cerrar</p>
            </div>

        </div>
    )
}
