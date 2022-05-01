
export const PaysTable = () => {
    return (
        <div className='pays_table-main'>
            
            <table className='pays_table-table'>
                <thead>
                    <tr>
                        <th className='pays_table-header-factura'>Factura</th>
                        <th className='pays_table-header-montoFact'>Monto Factura</th>
                        <th className='pays_table-header-saldoAnt'>Saldo Anterior</th>
                        <th className='pays_table-header-abono'>Abono</th>
                        <th className='pays_table-header-saldoActual'>Saldo Actual</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='pays_table-factura'>test</td>
                        <td className='pays_table-montoFact'>test</td>
                        <td className='pays_table-saldoAnt'>test</td>
                        <td className='pays_table-abono'>test</td>
                        <td className='pays_table-saldoActual'>test</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}
