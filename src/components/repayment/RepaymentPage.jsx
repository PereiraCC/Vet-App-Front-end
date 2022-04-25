import { RepaymentBody } from "./RepaymentBody"

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
                <p>Table</p>
            </div>

            <div className='repayment_totals'>
                <p>Totales</p>
            </div>

            <div className='repayment_icons'>
                <p>Icons</p>
            </div>

        </div>
    )
}
