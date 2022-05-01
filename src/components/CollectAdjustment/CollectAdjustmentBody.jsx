

export const CollectAdjustmentBody = () => {
    return (
        <div className='collectAdjustment_body-main'>

            <div className='collectAdjustment_body-firstLine'>
                
                <div className='collectAdjustment_body-firstLine-datosCliente'>

                    <p id='lblDatosClienteCollectAdjustment'>Datos del Cliente</p>

                    <div className='collectAdjustment_body-firstLine-datosCliente-inputs'>

                        <div className='collectAdjustment_body-firstLine-datosCliente-inputs-codigo'>
                            <p id='lblCodigoClienteCollectAdjustment'>Código</p>
                            <input type='text' id='txtCodigoClienteCollectAdjustment' name='codigoClienteCollectAdjustment'/>
                        </div>

                        <div className='collectAdjustment_body-firstLine-datosCliente-inputs-nombre'>
                            <p id='lblNombreClienteCollectAdjustment'>Nombre del Cliente</p>
                            <input type='text' id='txtNombreClienteCollectAdjustment' name='nombreClienteCollectAdjustment'/>
                        </div>

                    </div>  
                </div>

                <div className='collectAdjustment_body-firstLine-monedas'>
                    
                    <div className='collectAdjustment_body-firstLine-monedas-moneda'>
                        <p id='lblMonedaCollectAdjustment'>Moneda</p>
                        <select id='cboMonedaCollectAdjustment' name='monedaCollectAdjustment'>
                            <option value='COLON'>COLON</option>
                            <option value='DOLAR'>DOLAR</option>
                        </select>
                    </div>

                    <div className='collectAdjustment_body-firstLine-monedas-tipoCambio'>
                        <p id='lblTipoCambioCollectAdjustment'>Tipo Cambio</p>
                        <input type='text' id='txtTipoCambioCollectAdjustment' name='tipoCambioCollectAdjustment'/>
                    </div>

                    <div className='collectAdjustment_body-firstLine-monedas-fecha'>
                        <p id='lblFechaCollectAdjustment'>Fecha</p>
                        <input type="date" id="txtFechaCollectAdjustment" name="fechaCollectAdjustment"
                                min="01-01-2022" max="12-31-2022" />
                    </div>

                </div>

            </div>

            <div className='collectAdjustment_body-secondLine'>
                
                <div className='collectAdjustment_body-secondLine-facturas'>

                    <p id='lblFacturasCollectAdjustment'>Facturas Pendiente de Pago</p>

                    <div className='collectAdjustment_body-secondLine-facturas-table'>
                        <table className='collectAdjustment_body-table'>
                            <thead>
                                <tr>
                                    <th className='collectAdjustment_body-table-header-numeroFactura'>Factura No.</th>
                                    <th className='collectAdjustment_body-table-header-fecha'>Fecha</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='collectAdjustment_body-table-numeroFactura'>test</td>
                                    <td className='collectAdjustment_body-table-fecha'>test</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                
                </div>

                <div className='collectAdjustment_body-secondLine-facturas-tipoAjuste'>
                    
                    <p id='lblTipoAjusteCollectAdjustment'>Tipo de Ajuste</p>

                    <div className='collectAdjustment_body-secondLine-facturas-tipoAjuste-checks'>
                        
                        <div className='collectAdjustment_body-secondLine-facturas-tipoAjuste-checks-credito-radio'>
                            <input type="radio" id="rbNotaCreaditoCollectAdjustment" name="notaCreaditoCollectAdjustment" value="notaCreaditoCollectAdjustment"/>
                            <label for="rbNotaCreaditoCollectAdjustment" id='lblNotaCreaditoCollectAdjustment'>Nota Crédito</label>
                        </div>

                        <div className='collectAdjustment_body-secondLine-facturas-tipoAjuste-checks-debito-radio'>
                            <input type="radio" id="rbNotaDebitoCollectAdjustment" name="notaDebitoCollectAdjustment" value="notaDebitoCollectAdjustment"/>
                            <label for="rbNotaDebitoCollectAdjustment" id='lblNotaDebitoCollectAdjustment'>Nota Débito</label>
                        </div>

                    </div>
                </div>

                <div className='collectAdjustment_body-secondLine-facturas-datosFactura'>

                    <p id='lblDatosFacturaCollectAdjustment'>Datos de la Factura</p>

                    <div className='collectAdjustment_body-secondLine-facturas-datosFactura-inputs'>

                        <div className='collectAdjustment_body-secondLine-facturas-datosFactura-inputs-leftSide'>
                            
                            <div className='collectAdjustment_body-secondLine-facturas-datosFactura-inputs-leftSide-factura'>
                                <p id='lblFacturaNoCollectAdjustment'>Factura No.</p>
                                <input type='text' id='txtFacturaNoCollectAdjustment' name='facturaNoCollectAdjustment'/>
                            </div>

                            <div className='collectAdjustment_body-secondLine-facturas-datosFactura-inputs-leftSide-fecha'>
                                <p id='lblFecha2CollectAdjustment'>Fecha</p>
                                <input type="date" id="txtFecha2CollectAdjustment" name="fechaCollectAdjustment"/>
                            </div>

                            <div className='collectAdjustment_body-secondLine-facturas-datosFactura-inputs-leftSide-saldo'>
                                <p id='lblSaldoCollectAdjustment'>Saldo ₡</p>
                                <input type='text' id='txtSaldoCollectAdjustment' name='saldoCollectAdjustment'/>
                            </div>

                            <div className='collectAdjustment_body-secondLine-facturas-datosFactura-inputs-leftSide-cuentaCont'>
                                <p id='lblCuentaContCollectAdjustment'>Cuenta Cont</p>
                                <input type='text' id='txtCuentaContCollectAdjustment' name='cuentaContCollectAdjustment'/>
                            </div>

                        </div>

                        <div className='collectAdjustment_body-secondLine-facturas-datosFactura-inputs-rightSide'>
                            
                            <div className='collectAdjustment_body-secondLine-facturas-datosFactura-inputs-rightSide-ajuste'>
                                <p id='lblAjusteCollectAdjustment'>Ajuste ₡</p>
                                <input type='text' id='txtAjusteCollectAdjustment' name='ajusteCollectAdjustment'/>
                            </div>

                            <div className='collectAdjustment_body-secondLine-facturas-datosFactura-inputs-rightSide-montoFactura'>
                                <p id='lblMontoFacturaCollectAdjustment'>Monto Factura ₡</p>
                                <input type="date" id="txtMontoFacturaCollectAdjustment" name="montoFacturaCollectAdjustment"/>
                            </div>

                            <div className='collectAdjustment_body-secondLine-facturas-datosFactura-inputs-rightSide-saldoActual'>
                                <p id='lblSaldoActualCollectAdjustment'>Saldo Actual ₡</p>
                                <input type='text' id='txtSaldoActualCollectAdjustment' name='saldoActualCollectAdjustment'/>
                            </div>

                            <div className='collectAdjustment_body-secondLine-facturas-datosFactura-inputs-rightSide-Descrip'>
                                <p id='lblDescripCollectAdjustment'>Descripción</p>
                                <input type='text' id='txtDescripCollectAdjustment' name='DescripCollectAdjustment'/>
                            </div>


                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}
