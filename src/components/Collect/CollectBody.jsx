
export const CollectBody = () => {
    return (
        <div className='collect_body-main'>

            <div className='collect_body-firstLine'>
                
                <div className='collect_body-firstLine-datosCliente'>

                    <p id='lblDatosClienteCollect'>Datos del Cliente</p>

                    <div className='collect_body-firstLine-datosCliente-inputs'>

                        <div className='collect_body-firstLine-datosCliente-inputs-codigo'>
                            <p id='lblCodigoClienteCollect'>Código</p>
                            <input type='text' id='txtCodigoClienteCollect' name='codigoClienteCollect'/>
                        </div>

                        <div className='collect_body-firstLine-datosCliente-inputs-nombre'>
                            <p id='lblNombreClienteCollect'>Nombre del Cliente</p>
                            <input type='text' id='txtNombreClienteCollect' name='nombreClienteCollect'/>
                        </div>

                        <div className='collect_body-firstLine-datosCliente-inputs-filtrar'>
                            <div className="collect_body-firstLine-datosCliente-inputs-filtrar-input"> 
                                <input type="checkbox" id="checkFiltrarCollect" name="filtrarCollect" value="filtrarCollect" />
                            </div>
                            <label for="checkFiltrarCollect" id="lblFiltrarCollect">Filtrar incobrables</label>
                        </div>

                    </div>  
                </div>

                <div className='collect_body-firstLine-monedas'>
                    
                    <div className='collect_body-firstLine-monedas-moneda'>
                        <p id='lblMonedaCollect'>Moneda</p>
                        <select id='cboMonedaCollect' name='monedaCollect'>
                            <option value='COLON'>COLON</option>
                            <option value='DOLAR'>DOLAR</option>
                        </select>
                    </div>

                    <div className='collect_body-firstLine-monedas-tipoCambio'>
                        <p id='lblTipoCambioCollect'>Tipo Cambio</p>
                        <input type='text' id='txtTipoCambioCollect' name='tipoCambioCollect'/>
                    </div>

                    <div className='collect_body-firstLine-monedas-fecha'>
                        <p id='lblFechaCollect'>Fecha</p>
                        <input type="date" id="txtFechaCollect" name="fechaCollect"
                                min="01-01-2022" max="12-31-2022" />
                    </div>

                </div>

            </div>

            <div className='collect_body-secondLine'>
                
                <div className='collect_body-secondLine-facturas'>

                    <p id='lblFacturasCollect'>Facturas Pendiente de Pago</p>

                    <div className='collect_body-secondLine-facturas-table'>
                        <table className='collect_body-table'>
                            <thead>
                                <tr>
                                    <th className='collect_body-table-header-numeroFactura'>Factura No.</th>
                                    <th className='collect_body-table-header-fecha'>Fecha</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='collect_body-table-numeroFactura'>test</td>
                                    <td className='collect_body-table-fecha'>test</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                   
                </div>

                <div className='collect_body-secondLine-facturas-datosFactura'>

                    <p id='lblDatosFacturaCollect'>Datos de la Factura</p>

                    <div className='collect_body-secondLine-facturas-datosFactura-inputs'>

                        <div className='collect_body-secondLine-facturas-datosFactura-inputs-leftSide'>
                            
                            <div className='collect_body-secondLine-facturas-datosFactura-inputs-leftSide-factura'>
                                <p id='lblFacturaNoCollect'>Factura No.</p>
                                <input type='text' id='txtFacturaNoCollect' name='facturaNoCollect'/>
                            </div>

                            <div className='collect_body-secondLine-facturas-datosFactura-inputs-leftSide-fecha'>
                                <p id='lblFecha2Collect'>Fecha</p>
                                <input type="date" id="txtFecha2Collect" name="fechaCollect"/>
                            </div>

                            <div className='collect_body-secondLine-facturas-datosFactura-inputs-leftSide-monto'>
                                <p id='lblMontoCollect'>Monto ₡</p>
                                <input type='text' id='txtMontoCollect' name='montoCollect'/>
                            </div>

                            <div className='collect_body-secondLine-facturas-datosFactura-inputs-leftSide-saldo'>
                                <p id='lblSaldoCollect'>Saldo ₡</p>
                                <input type='text' id='txtSaldoCollect' name='saldoCollect'/>
                            </div>

                        </div>

                        <div className='collect_body-secondLine-facturas-datosFactura-inputs-rightSide'>
                            
                            <div className='collect_body-secondLine-facturas-datosFactura-inputs-rightSide-intereses'>
                                <p id='lblInteresesCollect'>Intereses ₡</p>
                                <input type='text' id='txtInteresesCollect' name='interesesCollect'/>
                            </div>

                            <div className='collect_body-secondLine-facturas-datosFactura-inputs-rightSide-saldoPrevio'>
                                <p id='lblSaldoPrevioCollect'>Saldo Previo ₡</p>
                                <input type="text" id="txtSaldoPrevioCollect" name="saldoPrevioCollect"/>
                            </div>

                            <div className='collect_body-secondLine-facturas-datosFactura-inputs-rightSide-abono'>
                                <p id='lblAbonoCollect'>Abono</p>
                                <input type='text' id='txtAbonoCollect' name='abonoCollect'/>
                            </div>

                            <div className='collect_body-secondLine-facturas-datosFactura-inputs-rightSide-saldoActual'>
                                <p id='lblSaldoActualCollect'>Saldo Actual ₡</p>
                                <input type='text' id='txtSaldoActualCollect' name='saldoActualCollect'/>
                            </div>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}
