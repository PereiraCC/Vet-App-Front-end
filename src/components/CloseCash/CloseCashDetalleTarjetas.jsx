
export const CloseCashDetalleTarjetas = () => {
    return (
        <div className='closeCash_detalleTarjetas-main'>

            <div className='closeCash_detalleTarjetas-title'>
                <p>Detalles Tarjetas de Crédito</p>
            </div>

            <div className='closeCash_detalleTarjetas-table'>
                <table className='closeCash_detalleTarjetas-table-main'>
                    <thead>
                        <tr>
                            <th className='closeCash_detalleTarjetas-table-header-tarjeta'>Tarjeta</th>
                            <th className='closeCash_detalleTarjetas-table-header-moneda'>Moneda</th>
                            <th className='closeCash_detalleTarjetas-table-header-totalCajero'>Total Cajero</th>
                            <th className='closeCash_detalleTarjetas-table-header-totalSistema'>Total Sistema</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className='closeCash_detalleTarjetas-table-tarjeta'>TARJETA COLONES</td>
                        <td className='closeCash_detalleTarjetas-table-moneda'>COLON</td>
                        <td className='closeCash_detalleTarjetas-table-totalCajero'>0.00</td>
                        <td className='closeCash_detalleTarjetas-table-totalSistema'>0.00</td>
                    </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}
