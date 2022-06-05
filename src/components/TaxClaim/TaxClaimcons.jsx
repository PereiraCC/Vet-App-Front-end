import { AiFillFileAdd, AiFillSave} from 'react-icons/ai';
import { RiFileSearchFill, RiDeleteBack2Fill } from 'react-icons/ri';

export const TaxClaimIcons = () => {
    return (
        <div className='taxClaim_icons-main'>

            <div className="taxClaim_icons-nuevo">
                <div className="taxClaim_icons-nuevo-icon">
                    <AiFillFileAdd id='iconNuevoTaxClaim'/>
                </div>
                <p id='lblNuevoTaxClaim'>Nuevo PreToma</p>
            </div>

            <div className="taxClaim_icons-guardar">
                <div className="taxClaim_icons-guardar-icon">
                    <AiFillSave id='iconGuardarTaxClaim'/>
                </div>
                <p id='lblGuardarTaxClaim'>Guardar PreToma</p>
            </div>

            <div className='taxClaim_icons-Buscar'>
                <div className="taxClaim_icons-Buscar-icon">
                    <RiFileSearchFill id='iconBusTaxClaim'/>
                </div>
                <p id='lblBuscarTaxClaim'>Buscar PreToma</p>
            </div>

            <div className="taxClaim_icons-anular">
                <div className="taxClaim_icons-anular-icon">
                    <RiDeleteBack2Fill id='iconAnularTaxClaim'/>
                </div>
                <p id='lblAnularTaxClaim'>Anular PreToma</p>
            </div>

        </div>
    )
}
