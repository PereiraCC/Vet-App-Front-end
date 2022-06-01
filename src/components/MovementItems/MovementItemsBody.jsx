
export const MovementItemsBody = () => {
    return (
        <div className='movementItems_body-main'>

            <div className='movementItems_body-inputs'>

                <div className='movementItems_body-inputs-codigo'>
                    <p id='lblCodigoMovementItems'>Código</p>
                    <input type='text' id='txtCodigoMovementItems' name='codigoMovementItems' />
                </div>

                <div className='movementItems_body-inputs-descripcion'>
                    <p id='lblDescripMovementItems'>Descripción</p>
                    <input type='text' id='txtDescripMovementItems' name='descripcionMovementItems' />
                </div>

                <div className='movementItems_body-inputs-desde'>
                    <p id='lblDesdeMovementItems'>Desde</p>
                    <input type='date' id='txtDesdeMovementItems' name='desdeMovementItems' />
                </div>

                <div className='movementItems_body-inputs-hasta'>
                    <p id='lblHastaMovementItems'>Hasta</p>
                    <input type='date' id='txtHastaMovementItems' name='hastaMovementItems' />
                </div>

                <div className='movementItems_body-inputs-btns'>
                    <button id='btnComprasMovementItems'>Compras</button>
                    <button id='btnVentasMovementItems'>Ventas</button>
                </div>

                <div className='movementItems_body-inputs-imprimir'>
                    <button id='btnImprimirMovementItems'>Imprimir</button>
                </div>
            </div>

            <div className='movementItems_body-compras'>

                <div className='movementItems_body-compras-title'>
                    <p id='lblComprasTitleMovementItems'>Compras</p>
                </div>

                <div className='movementItems_body-compras-table'>
                    <table className='movementItems_body-compras-table-main'>
                        <thead>
                            <tr>
                                <th className='movementItems_body-compras-table-header-factura'>Factura</th>
                                <th className='movementItems_body-compras-table-header-tipo'>Tipo</th>
                                <th className='movementItems_body-compras-table-header-fecha'>Fecha</th>
                                <th className='movementItems_body-compras-table-header-proveedor'>Proveedor</th>
                                <th className='movementItems_body-compras-table-header-cantidad'>Cantidad</th>
                                <th className='movementItems_body-compras-table-header-precio'>Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='movementItems_body-compras-table-factura'>test</td>
                                <td className='movementItems_body-compras-table-tipo'>test</td>
                                <td className='movementItems_body-compras-table-fecha'>test</td>
                                <td className='movementItems_body-compras-table-proveedor'>test</td>
                                <td className='movementItems_body-compras-table-cantidad'>test</td>
                                <td className='movementItems_body-compras-table-precio'>test</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='movementItems_body-compras-totals'>
                    <p id='lblTotalsComprasMovementItems'>Total Comprado:</p>
                    <input type='text' id='txtTotalsComprasMovementItems' name='totalsComprasMovementItems' />
                </div>

            </div>

            <div className='movementItems_body-ventas'>

                <div className='movementItems_body-ventas-title'>
                    <p id='lblVentasTitleMovementItems'>Ventas</p>
                </div>

                <div className='movementItems_body-ventas-table'>
                    <table className='movementItems_body-ventas-table-main'>
                        <thead>
                            <tr>
                                <th className='movementItems_body-ventas-table-header-factura'>Factura</th>
                                <th className='movementItems_body-ventas-table-header-tipo'>Tipo</th>
                                <th className='movementItems_body-ventas-table-header-fecha'>Fecha</th>
                                <th className='movementItems_body-ventas-table-header-proveedor'>Proveedor</th>
                                <th className='movementItems_body-ventas-table-header-cantidad'>Cantidad</th>
                                <th className='movementItems_body-ventas-table-header-precio'>Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='movementItems_body-ventas-table-factura'>test</td>
                                <td className='movementItems_body-ventas-table-tipo'>test</td>
                                <td className='movementItems_body-ventas-table-fecha'>test</td>
                                <td className='movementItems_body-ventas-table-proveedor'>test</td>
                                <td className='movementItems_body-ventas-table-cantidad'>test</td>
                                <td className='movementItems_body-ventas-table-precio'>test</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='movementItems_body-ventas-totals'>
                    <p id='lblTotalsventasMovementItems'>Total Vendido:</p>
                    <input type='text' id='txtTotalsventasMovementItems' name='totalsventasMovementItems' />
                </div>

            </div>

        </div>
    )
}
