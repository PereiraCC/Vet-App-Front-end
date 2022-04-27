
export const InventoryAdjustmentTable = () => {
    return (
        <div className='inventory_adjustment-table-main'>

            <div className='inventory_adjustment-table-table'>

                <table className='inventory_adjustment-table-table-main'>
                    <thead>
                        <tr>
                            <th className='inventory_adjustment-table-header-cantidad'>Cantidad</th>
                            <th className='inventory_adjustment-table-header-codigo'>Código</th>
                            <th className='inventory_adjustment-table-header-descrip'>Descripción</th>
                            <th className='inventory_adjustment-table-header-muerte'>Muerte</th>
                            <th className='inventory_adjustment-table-header-entrada'>Entrada</th>
                            <th className='inventory_adjustment-table-header-salida'>Salida</th>
                            <th className='inventory_adjustment-table-header-observación'>Observación</th>
                            <th className='inventory_adjustment-table-header-Tentrada'>T.Entrada</th>
                            <th className='inventory_adjustment-table-header-Tsalida'>T.Salida</th>
                            <th className='inventory_adjustment-table-header-cuenta'>Cuenta</th>
                            <th className='inventory_adjustment-table-header-lote'>Lote</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='inventory_adjustment-table-cantidad'>test</td>
                            <td className='inventory_adjustment-table-codigo'>test</td>
                            <td className='inventory_adjustment-table-descrip'>test</td>
                            <td className='inventory_adjustment-table-muerte'>test</td>
                            <td className='inventory_adjustment-table-entrada'>test</td>
                            <td className='inventory_adjustment-table-salida'>test</td>
                            <td className='inventory_adjustment-table-observación'>test</td>
                            <td className='inventory_adjustment-table-Tentrada'>test</td>
                            <td className='inventory_adjustment-table-Tsalida'>test</td>
                            <td className='inventory_adjustment-table-cuenta'>test</td>
                            <td className='inventory_adjustment-table-lote'>test</td>
                        </tr>
                    </tbody>
                </table>

            </div>

            <div className='inventory_adjustment-table-inputs'>
                
                <div className='inventory_adjustment-table-inputs-totalEntrada'>
                    <p id='lbltotalEntradaInvA'>Total Entrada</p>
                    <input type='text' name='totalEntradaInvA' id='txttotalEntradaInvA' />
                </div>

                <div className='inventory_adjustment-table-inputs-totalSalida'>
                    <p id='lbltotalSalidaInvA'>Total Salida</p>
                    <input type='text' name='totalSalidaInvA' id='txttotalSalidaInvA' />
                </div>

                <div className='inventory_adjustment-table-inputs-totalAjuste'>
                    <p id='lbltotalAjusteInvA'>Total Ajuste</p>
                    <input type='text' name='totalAjusteInvA' id='txttotalAjusteInvA' />
                </div>

            </div>

        </div>
    )
}
