
export const PurchaseReturnsTable = () => {
    return (
        <div className='purchaseReturns_table-main'>

            <div className='purchaseReturns_table-table'>
                <table className='purchaseReturns_table-table-main'>
                    <thead>
                        <tr>
                            <th className='purchaseReturns_table-table-header-codigo'>Código</th>
                            <th className='purchaseReturns_table-table-header-descrip'>Descripción</th>
                            <th className='purchaseReturns_table-table-header-cantidad'>Cantidad</th>
                            <th className='purchaseReturns_table-table-header-costo'>Costo</th>
                            <th className='purchaseReturns_table-table-header-descuento'>Descuento</th>
                            <th className='purchaseReturns_table-table-header-impuesto'>Impuesto</th>
                            <th className='purchaseReturns_table-table-header-gravado'>Gravado</th>
                            <th className='purchaseReturns_table-table-header-excento'>Excento</th>
                            <th className='purchaseReturns_table-table-header-subtotal'>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='purchaseReturns_table-table-codigo'>test</td>
                            <td className='purchaseReturns_table-table-descrip'>test</td>
                            <td className='purchaseReturns_table-table-cantidad'>test</td>
                            <td className='purchaseReturns_table-table-costo'>test</td>
                            <td className='purchaseReturns_table-table-descuento'>test</td>
                            <td className='purchaseReturns_table-table-impuesto'>test</td>
                            <td className='purchaseReturns_table-table-gravado'>test</td>
                            <td className='purchaseReturns_table-table-excento'>test</td>
                            <td className='purchaseReturns_table-table-subtotal'>test</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='purchaseReturns_table-totals'>

                <div className='purchaseReturns_table-totals-title'>
                    <p id='lblTitleTotalsPR'>Totales de Devolución</p>
                </div>

                <div className='purchaseReturns_table-totals-gravado'>
                    <p id='lblGravadoTotalsPR'>Gravado</p>
                    <input type='text' id='txtGravadoTotalsPR' name='gravadoTotalsPR'/>
                </div>

                <div className='purchaseReturns_table-totals-excento'>
                    <p id='lblExcentoTotalsPR'>Excento</p>
                    <input type='text' id='txtExcentoTotalsPR' name='excentoTotalsPR'/>
                </div>

                <div className='purchaseReturns_table-totals-descuento'>
                    <p id='lblDescuentoTotalsPR'>Descuento</p>
                    <input type='text' id='txtDescuentoTotalsPR' name='descuentoTotalsPR'/>
                </div>

                <div className='purchaseReturns_table-totals-impVenta'>
                    <p id='lblImpVentaTotalsPR'>Imp. Venta</p>
                    <input type='text' id='txtImpVentaTotalsPR' name='impVentaTotalsPR'/>
                </div>

                <div className='purchaseReturns_table-totals-total'>
                    <p id='lblTotalTotalsPR'>Total</p>
                    <input type='text' id='txtTotalTotalsPR' name='totalTotalsPR'/>
                </div>

            </div>
        </div>
    )
}
