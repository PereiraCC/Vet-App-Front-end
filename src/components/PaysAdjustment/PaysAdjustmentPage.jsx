import { PaysAdjustmentBody } from "./PaysAdjustmentBody"
import { PaysAdjustmentDatosGenerales } from "./PaysAdjustmentDatosGenerales"
import { PaysAdjustmentFooter } from "./PaysAdjustmentFooter"
import { PaysAdjustmentIcons } from "./PaysAdjustmentIcons"

export const PaysAdjustmentPage = () => {
    return (
        <div className='pays_adjustment-main'>
            
            <div className='pays_adjustment-header'>
                <p id='lblAjusteNoPaysA'>Ajuste No.</p>
                <p id='lblTitlePaysA'>Notas de Crédito y Débito</p>
            </div>

            <div className='pays_adjustment-datosGenerales'>
                <PaysAdjustmentDatosGenerales />
            </div>

            <div className='pays_adjustment-body'>
                <PaysAdjustmentBody />
            </div>

            <div className='pays_adjustment-icons'>
                <PaysAdjustmentIcons />
            </div>

            <div className='pays_adjustment-footer'>
                <PaysAdjustmentFooter />
            </div>

        </div>
    )
}
