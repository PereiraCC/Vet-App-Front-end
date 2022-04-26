
export const RepaymentTotals = () => {
    return (
        <div className='repayment_totals-main'>
            
            <div className='repayment_totals-title'>
                <p id='lblTitleTotals'>Totales de Devolución</p>
            </div>

            <div className='repayment_totals-inputs'>

                <div className='repayment_totals-inputs-subGravado'>
                    <p id='lblSubGravadoDevoluciones'>Sub. Gravado</p>
                    <input type='text' name='subGravadoDevoluciones' id='txtSubGravadoDevoluciones'/>
                </div>

                <div className='repayment_totals-inputs-subExento'>
                    <p id='lblSubExentoDevoluciones'>Sub. Exento</p>
                    <input type='text' name='subExentoDevoluciones' id='txtSubExentoDevoluciones'/>
                </div>

                <div className='repayment_totals-inputs-transporte'>
                    <div className='repayment_totals-inputs-transporte-titles'>
                        <button id='btnTransporteDevoluciones'>...</button>
                        <p id='lblTransporteDevoluciones'>Transporte</p>
                    </div>
                    <input type='text' name='TransporteDevoluciones' id='txtTransporteDevoluciones'/>
                </div>

                <div className='repayment_totals-inputs-descuento'>
                    <p id='lblDescuento2Devoluciones'>Descuento</p>
                    <input type='text' name='DescuentoDevoluciones' id='txtDescuento2Devoluciones'/>
                </div>

                <div className='repayment_totals-inputs-impVenta'>
                    <p id='lblimpVentaDevoluciones'>Imp. Venta</p>
                    <input type='text' name='impVentaDevoluciones' id='txtimpVentaDevoluciones'/>
                </div>

                <div className='repayment_totals-inputs-total'>
                    <p id='lblTotalDevoluciones'>Total</p>
                    <input type='text' name='totalDevoluciones' id='txtTotalDevoluciones'/>
                </div>

            </div>

        </div>
    )
}
