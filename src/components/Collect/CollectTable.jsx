
export const CollectTable = () => {
    return (
        <div className='collect_table-main'>

            <div className='collect_table-table'>
                
                <table className='collect_table-table-main'>
                    <thead>
                        <tr>
                            <th className='collect_table-header-factura'>Factura</th>
                            <th className='collect_table-header-fecha'>Fecha</th>
                            <th className='collect_table-header-montoFactura'>Monto Factura</th>
                            <th className='collect_table-header-saldoAnt'>Saldo Anterior</th>
                            <th className='collect_table-header-intereses'>Intereses</th>
                            <th className='collect_table-header-abono'>Abono</th>
                            <th className='collect_table-header-saldoAct'>Saldo Actual</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='collect_table-factura'>test</td>
                            <td className='collect_table-fecha'>test</td>
                            <td className='collect_table-montoFactura'>test</td>
                            <td className='collect_table-saldoAnt'>test</td>
                            <td className='collect_table-intereses'>test</td>
                            <td className='collect_table-abono'>test</td>
                            <td className='collect_table-saldoAct'>test</td>
                        </tr>
                    </tbody>
                </table>

            </div>

            <div className='collect_table-observaciones'>

                <div className='collect_table-observaciones-obs'>
                    <p id='lblObservacionesTable'>Observaciones:</p>
                    <input type='text' id='txtObservacionesTable' name='observacionesTable' />
                </div>

                <div className='collect_table-observaciones-cheque'>
                    
                    <div className='collect_table-observaciones-cheque-check'>
                        <div className="collect_table-observaciones-cheque-check-input"> 
                            <input type="checkbox" id="checkChequeCollect" name="chequeCollect" value="chequeCollect" />
                        </div>
                        <label for="checkChequeCollect" id="lblChequeCollect">Cheque</label>
                    </div>

                    <div className='collect_table-observaciones-cheque-input'>
                        <input type='text' id='txtChequeCollect' name='chequeCollect' />
                    </div>

                    <div className='collect_table-observaciones-cheque-cbo'>
                        <select id='cboChequeCollect' name='cboChequeCollect'>
                            <option value='1'>Cheque 1</option>
                            <option value='2'>Cheque 2</option>
                        </select>
                    </div>
                    

                </div>

                
            </div>

        </div>
    )
}
