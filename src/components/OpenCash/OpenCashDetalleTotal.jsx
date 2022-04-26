
export const OpenCashDetalleTotal = () => {
    return (
        <div className='openCash_detalleTotal-main'>

            <div className='openCash_detalleTotal-leftSide'>

                <div className='openCash_detalleTotal-leftSide-title'>
                    <p id='lblleftSideTileOpenCash'>Detalle Total / Tope</p>
                </div>
                <div className='openCash_detalleTotal-leftSide-table'>
                    
                    <table className='openCash_detalleTotal-table'>
                        <thead>
                            <tr>
                                <th className='openCash_detalleTotal-header-moneda'>Moneda</th>
                                <th className='openCash_detalleTotal-header-monto'>Monto</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='openCash_detalleTotal-moneda'>COLON</td>
                                <td className='openCash_detalleTotal-monto'>100.000.00</td>
                            </tr>
                            <tr>
                                <td className='openCash_detalleTotal-moneda'>DOLAR</td>
                                <td className='openCash_detalleTotal-monto'>0.00</td>
                            </tr>
                        </tbody>
                    </table>

                </div>

            </div>

            <div className='openCash_detalleTotal-rightSide'>

                <div className='openCash_detalleTotal-rightSide-title'>
                    <p id='lblrightSideTileOpenCash'>Observaciones</p>
                </div>
                <div className='openCash_detalleTotal-rightSide-input'>
                    <textarea id="txtobservacionInputOpenCash" name="observacionesOpenCash" rows="4" cols="50"></textarea>
                </div>

            </div>

        </div>
    )
}
