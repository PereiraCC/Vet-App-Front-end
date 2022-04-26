import { RepaymentBody } from './RepaymentBody';
import { RepaymentIcons } from './RepaymentIcons';
import { RepaymentTable } from './RepaymentTable';
import { RepaymentTotals } from './RepaymentTotals';

export const RepaymentPage = () => {
    return (
        <div className='repayment_main'>
            
            <div className='repayment_header'>

                <div className='repayment_header-inputs'>

                    <div className='repayment_header-inputs-label'>
                        <p>Devolucion Nº</p>
                    </div>
                    <div className='repayment_header-inputs-input'>
                        <input type='text' name='numeroDevolucion' id='txtNumeroDevolucion'/>
                    </div>

                </div>
                
                <div className='repayment_header-labels'>
                    <p id='lblTitleDevoluciones'>Devoluciones del Cliente</p>
                </div>

            </div>

            <div className='repayment_body'>
                <RepaymentBody />
            </div>

            <div className='repayment_table'>
                <RepaymentTable />
            </div>

            <div className='repayment_totals'>
                <RepaymentTotals />
            </div>

            <div className='repayment_icons'>
                <RepaymentIcons />
            </div>

        </div>
    )
}
