
export const CollectAdjustmentTable = () => {
    return (
        
        <div className='collectAdjustment_table-main'>

            <div className='collectAdjustment_table-table'>
                
                <table className='collectAdjustment_table-table-main'>
                    <thead>
                        <tr>
                            <th className='collectAdjustment_table-header-factura'>Factura</th>
                            <th className='collectAdjustment_table-header-montoFactura'>Monto Factura</th>
                            <th className='collectAdjustment_table-header-saldoAnt'>Saldo Anterior</th>
                            <th className='collectAdjustment_table-header-abono'>Abono</th>
                            <th className='collectAdjustment_table-header-saldoAct'>Saldo Actual</th>
                            <th className='collectAdjustment_table-header-cuentaCont'>Cuenta Contable</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='collectAdjustment_table-factura'>test</td>
                            <td className='collectAdjustment_table-montoFactura'>test</td>
                            <td className='collectAdjustment_table-saldoAnt'>test</td>
                            <td className='collectAdjustment_table-abono'>test</td>
                            <td className='collectAdjustment_table-saldoAct'>test</td>
                            <td className='collectAdjustment_table-cuentaCont'>test</td>
                        </tr>
                    </tbody>
                </table>

            </div>

            <div className='collectAdjustment_table-observaciones'>
                <p id='lblObservacionesTableAdjustment'>Observaciones:</p>
                <input type='text' id='txtObservacionesTableAdjustment' name='observacionesTable' />
            </div>

        </div>

    )
}
