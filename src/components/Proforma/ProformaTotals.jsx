
export const ProformaTotals = () => {
    return (
        <div className='proforma_totals-main'>

            <div className='proforma_totals-obser'>
                <p id='lblObserProformaTotals'>Observaciones</p>
                <input type='text' id='txtObserProformaTotals' name='obserProformaTotals'/>
            </div>

            <div className='proforma_totals-total'>
                <p id='lblTitleTotalesProforma'>Totales de Cotización</p>

                <div className='proforma_totals-total-inputs'>

                    <div className='proforma_totals-total-inputs-subGravado'>
                        <p id='lblSubGravadoProformaTotals'>Sub-Gravado</p>
                        <input type='text' id='txtSubGravadoProformaTotals' name='subGravadoProformaTotals'/>
                    </div>

                    <div className='proforma_totals-total-inputs-subExento'>
                        <p id='lblSubExentoProformaTotals'>Sub-Exento</p>
                        <input type='text' id='txtSubExentoProformaTotals' name='subExentoProformaTotals'/>
                    </div>

                    <div className='proforma_totals-total-inputs-subTotal'>
                        <p id='lblSubTotalProformaTotals'>Sub-Total</p>
                        <input type='text' id='txtSubTotalProformaTotals' name='subTotalProformaTotals'/>
                    </div>

                    <div className='proforma_totals-total-inputs-porcentaje'>
                        <p id='lblporcentajeProformaTotals'>0.00 %</p>
                    </div>

                    <div className='proforma_totals-total-inputs-descuento'>
                        <p id='lbldescuentoProformaTotals'>Descuento</p>
                        <input type='text' id='txtdescuentoProformaTotals' name='descuentoProformaTotals'/>
                    </div>

                    <div className='proforma_totals-total-inputs-impVenta'>
                        <p id='lblimpVentaProformaTotals'>Imp Venta</p>
                        <input type='text' id='txtimpVentaProformaTotals' name='impVentaProformaTotals'/>
                    </div>

                    <div className='proforma_totals-total-inputs-transporte'>
                        <p id='lbltransporteProformaTotals'>Transporte</p>
                        <input type='text' id='txttransporteProformaTotals' name='transporteProformaTotals'/>
                    </div>

                    <div className='proforma_totals-total-inputs-total'>
                        <p id='lbltotalProformaTotals'>Total</p>
                        <input type='text' id='txttotalProformaTotals' name='totalProformaTotals'/>
                    </div>

                </div>
            </div>

            <div className='proforma_totals-check'>

                <div className='proforma_totals-check-confirmo'>
                    <div className="proforma_totals-check-confirmo-input">
                        <input type="checkbox" id="checkConfirmoProforma" name="confirmo" value="confirmo" />
                    </div>
                    <label for="checkConfirmoProforma" id="lblConfirmoProforma">Se Confirmo</label>
                </div>

                <div className='proforma_totals-check-nombre'>
                    <p id='lblNombreProformaTotals'>Nombre</p>
                    <input type='text' id='txtNombreProformaTotals' name='nombreProformaTotals'/>
                </div>
            </div>

        </div>
    )
}
