
export const CollectTable = () => {
    return (
        <div className='collect_table-main'>

            <div className='collect_table-table'>
                
                <table className='collect_table-table-main'>
                    <thead>
                        <tr>
                            <th className='collect_table-header-factura'>Factura</th>
                            <th className='collect_table-header-montoFactura'>Monto Factura</th>
                            <th className='collect_table-header-saldoAnt'>Saldo Anterior</th>
                            <th className='collect_table-header-abono'>Abono</th>
                            <th className='collect_table-header-saldoAct'>Saldo Actual</th>
                            <th className='collect_table-header-cuentaCont'>Cuenta Contable</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='collect_table-factura'>test</td>
                            <td className='collect_table-montoFactura'>test</td>
                            <td className='collect_table-saldoAnt'>test</td>
                            <td className='collect_table-abono'>test</td>
                            <td className='collect_table-saldoAct'>test</td>
                            <td className='collect_table-cuentaCont'>test</td>
                        </tr>
                    </tbody>
                </table>

            </div>

            <div className='collect_table-observaciones'>
                <p id='lblObservacionesTable'>Observaciones:</p>
                <input type='text' id='txtObservacionesTable' name='observacionesTable' />
            </div>

        </div>
    )
}
