
export const PaysBodyDetalleFactura = () => {
    return (
        <div className='pays_body-detalle-main'>

            <div className='pays_body-detalle-leftSide'>
                
                <div className='pays_body-detalle-leftSide-factura'>
                    <p id='lblFacturaNoPaysB'>Factura No.</p>
                    <input type='text' id='txtFacturaNoPaysB' name='facturaNoPaysB' />
                </div>

                <div className='pays_body-detalle-leftSide-montFact'>
                    <p id='lblMontFactPaysB'>Monto Factura</p>
                    <input type='text' id='txtMontFactPaysB' name='montFactPaysB' />
                </div>

                <div className='pays_body-detalle-leftSide-saldoAnt'>
                    <p id='lblSaldoAntPaysB'>Saldo Anterior</p>
                    <input type='text' id='txtSaldoAntPaysB' name='saldoAntPaysB' />
                </div>

                <div className='pays_body-detalle-leftSide-TCF'>
                    <p id='lblTCFPaysB'>T.C.F</p>
                    <input type='text' id='txtTCFPaysB' name='TCFPaysB' />
                </div>

            </div>

            <div className='pays_body-detalle-rightSide'>
                
                <div className='pays_body-detalle-rightSide-abono'>
                    <p id='lblAbonoPaysB'>Abono</p>
                    <input type='text' id='txtAbonoPaysB' name='abonoPaysB' />
                </div>

                <div className='pays_body-detalle-rightSide-saldoAct'>
                    <p id='lblSaldoActPaysB'>Saldo Actual</p>
                    <input type='text' id='txtSaldoActPaysB' name='saldoActPaysB' />
                </div>

                <div className='pays_body-detalle-rightSide-monedaFact'>
                    <p id='lblMonedaFactPaysB'>AB Moneda Fact</p>
                    <input type='text' id='txtMonedaFactPaysB' name='monedaFactPaysB' />
                </div>

            </div>

        </div>
    )
}
