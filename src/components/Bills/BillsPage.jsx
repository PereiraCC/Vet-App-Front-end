import { BillsBodyDetalle } from "./BillsBodyDetalle"
import { BillsBodyHeader } from "./BillsBodyHeader"
import { BillsIcons } from "./BillsIcons"

export const BillsPage = () => {
    return (
        <div className='bills-main'>

            <div className='bills-header'>
                <p id='lblTitleBills'>Registro de Gastos</p>
            </div>

            <div className='bills-body-header'>
                <BillsBodyHeader />
            </div>

            <div className='bills-body-detalle'>
                <BillsBodyDetalle />
            </div>

            <div className='bills-body-footer'>
                <BillsIcons />
            </div>
        </div>
    )
}
