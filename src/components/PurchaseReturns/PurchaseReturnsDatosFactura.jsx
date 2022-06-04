
export const PurchaseReturnsDatosFactura = () => {
    return (
        <div className='purchaseReturn_datosFactura-main'>

            <div className='purchaseReturn_datosFactura-firstLine'>
                <div className='purchaseReturn_datosFactura-firstLine-title'>
                    <p id='lblTitleDatosFacturaPR'>Datos de la Factura</p>
                </div>

                <div className='purchaseReturn_datosFactura-firstLine-inputs'>
                    
                    <div className='purchaseReturn_datosFactura-firstLine-inputs-tipo'>
                        <p id='lblTipoFacturaPR'>Tipo</p>
                        <select id='cboTipoFacturaPR' name='cboTipoFacturaPR'>
                            <option value='0'>0</option>
                            <option value='1'>1</option>
                        </select>
                    </div>

                    <div className='purchaseReturn_datosFactura-firstLine-inputs-numero'>
                        <p id='lblNumeroFacturaPR'>Número</p>
                        <input id='txtNumeroFacturaPR' type='text' name='numeroFacturaPR' />
                    </div>

                    <div className='purchaseReturn_datosFactura-firstLine-inputs-Proveedor'>
                        <p id='lblProveedorFacturaPR'>Proveedor</p>
                        <input id='txtProveedorFacturaPR' type='text' name='proveedorFacturaPR' />
                    </div>

                    <div className='purchaseReturn_datosFactura-firstLine-inputs-monto'>
                        <p id='lblMontoFacturaPR'>Monto Factura</p>
                        <input id='txtMontoFacturaPR' type='text' name='montoFacturaPR' />
                    </div>

                    <div className='purchaseReturn_datosFactura-firstLine-inputs-fecha'>
                        <p id='lblFechaFacturaPR'>Fecha</p>
                        <input id='txtFechaFacturaPR' type='date' name='fechaFacturaPR' />
                    </div>

                    <div className='purchaseReturn_datosFactura-firstLine-inputs-moneda'>
                        <p id='lblMonedaFacturaPR'>Moneda</p>
                        <select id='cboMonedaFacturaPR' name='cboMonedaFacturaPR'>
                            <option value='COLON'>COLON</option>
                            <option value='DOLAR'>DOLAR</option>
                        </select>
                    </div>

                </div>
            </div>

            <div className='purchaseReturn_datosFactura-secondLine'>

                <div className='purchaseReturn_datosFactura-secondLine-table'>
                    <div className='purchaseReturn_datosFactura-secondLine-table-title'>
                        <p id='lblTitleTableDatosFacturaPR'>Datos de los Artículos Facturados</p>
                    </div>

                    <div className='purchaseReturn_datosFactura-secondLine-table-body'>
                        <table className='purchaseReturn_datosFactura-secondLine-table-body-main'>
                            <thead>
                                <tr>
                                    <th className='purchaseReturn_datosFactura-secondLine-table-body-header-codigo'>Código</th>
                                    <th className='purchaseReturn_datosFactura-secondLine-table-body-header-descrip'>Descripción</th>
                                    <th className='purchaseReturn_datosFactura-secondLine-table-body-header-lote'>Lote</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='purchaseReturn_datosFactura-secondLine-table-body-codigo'>test</td>
                                    <td className='purchaseReturn_datosFactura-secondLine-table-body-descrip'>test</td>
                                    <td className='purchaseReturn_datosFactura-secondLine-table-body-lote'>test</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='purchaseReturn_datosFactura-secondLine-inputs'>

                    <div className='purchaseReturn_datosFactura-secondLine-inputs-title'></div>

                    <div className='purchaseReturn_datosFactura-secondLine-inputs-input'>
                        <div className='purchaseReturn_datosFactura-secondLine-inputs-input-left'>
                            
                            <div className='purchaseReturn_datosFactura-secondLine-inputs-input-left-codigo'>
                                <p id='lblCodigoArticuloPR'>Código</p>
                                <input id='txtCodigoArticuloPR' type='text' name='codigoArticuloPR' />
                            </div>

                            <div className='purchaseReturn_datosFactura-secondLine-inputs-input-left-precioCosto'>
                                <p id='lblPrecioCostoPR'>Precio Costo</p>
                                <input id='txtPrecioCostoPR' type='text' name='precioCostoArticuloPR' />
                            </div>

                            <div className='purchaseReturn_datosFactura-secondLine-inputs-input-left-descuento'>
                                <p id='lblDescuentoArticuloPR'>Descuento</p>
                                <input id='txtDescuentoArticuloPR' type='text' name='descuentoArticuloPR' />
                            </div>

                        </div>

                        <div className='purchaseReturn_datosFactura-secondLine-inputs-input-right'>
                            
                            <div className='purchaseReturn_datosFactura-secondLine-inputs-input-right-lote'>
                                <p id='lblLoteArticuloPR'>Lote</p>
                                <input id='txtLoteArticuloPR' type='text' name='loteArticuloPR' />
                            </div>

                            <div className='purchaseReturn_datosFactura-secondLine-inputs-input-right-cantOriginal'>
                                <p id='lblCantidadOriginalPR'>Cant Original</p>
                                <input id='txtCantidadOriginalPR' type='text' name='cantidadOriginalArticuloPR' />
                            </div>

                            <div className='purchaseReturn_datosFactura-secondLine-inputs-input-right-devoluciones'>
                                <p id='lblDevolucionesPR'>Devoluciones</p>
                                <input id='txtDevolucionesPR' type='text' name='devolucionesArticuloPR' />
                            </div>

                            <div className='purchaseReturn_datosFactura-secondLine-inputs-input-right-devolucion'>
                                <p id='lblDevolucionPR'>Devolución</p>
                                <input id='txtDevolucionPR' type='hidden' name='devolucionArticuloPR' />
                            </div>

                        </div>
                    </div>
                    
                </div>

            </div>

        </div>
    )
}
