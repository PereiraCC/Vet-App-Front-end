
export const PaysAdjustmentBody = () => {
    return (
        <div className='pays_adjustment-body-main'>

            <div className='pays_adjustment-body-facturasPen'>

                <p id='lblFacturasPendienteBodyPaysT'>Facturas Pendiente de Pago</p>

                <div className='pays_adjustment-body-facturasPen-table'>
                    <table className='pays_adjustment-body-facturasPen-table-main'>
                        <thead>
                            <tr>
                                <th className='pays_adjustment-body-facturasPen-table-header-numeroFactura'>Factura No.</th>
                                <th className='pays_adjustment-body-facturasPen-table-header-fecha'>Fecha</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='pays_adjustment-body-facturasPen-table-numeroFactura'>test</td>
                                <td className='pays_adjustment-body-facturasPen-table-fecha'>test</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

            <div className='pays_adjustment-body-datosFactura'>
                
                <div className='pays_adjustment-body-datosFactura-datos'>

                    <p id='lblDatosFacturaPaysT'>Datos de la Factura</p>

                    <div className='pays_adjustment-body-datosFactura-datos-inputs'>
                        
                        <div className='pays_adjustment-body-datosFactura-datos-inputs-leftSide'>
                            
                            <div className='pays_adjustment-body-datosFactura-datos-inputs-leftSide-FacturaNo'>
                                <p id='lblFacturaNoBodyPaysT'>Factura No.</p>
                                <input type='text' id='txtFacturaNoBodyPaysT' name='facturaNoBodyPaysT'/>
                            </div>

                            <div className='pays_adjustment-body-datosFactura-datos-inputs-leftSide-fecha'>
                                <p id='lblFechaBodyPaysT'>Fecha</p>
                                <input type='date' id='txtFechaBodyPaysT' name='fechaBodyPaysT'/>
                            </div>

                            <div className='pays_adjustment-body-datosFactura-datos-inputs-leftSide-monto'>
                                <p id='lblMontoBodyPaysT'>Monto ₡</p>
                                <input type='text' id='txtMontoBodyPaysT' name='montoBodyPaysT'/>
                            </div>

                            <div className='pays_adjustment-body-datosFactura-datos-inputs-leftSide-cuentaCont'>
                                <p id='lblCuentaContBodyPaysT'>Cuenta contable</p>
                                <input type='text' id='txtCuentaContBodyPaysT' name='cuentaContBodyPaysT'/>
                            </div>

                        </div>

                        <div className='pays_adjustment-body-datosFactura-datos-inputs-rightSide'>
                            
                            <div className='pays_adjustment-body-datosFactura-datos-inputs-rightSide-saldo'>
                                <p id='lblSaldoBodyPaysT'>Saldo ₡</p>
                                <input type='text' id='txtSaldoBodyPaysT' name='saldoBodyPaysT'/>
                            </div>

                            <div className='pays_adjustment-body-datosFactura-datos-inputs-rightSide-ajuste'>
                                <p id='lblAjusteBodyPaysT'>Ajuste ₡</p>
                                <input type='text' id='txtAjusteBodyPaysT' name='ajusteBodyPaysT'/>
                            </div>

                            <div className='pays_adjustment-body-datosFactura-datos-inputs-rightSide-saldoActual'>
                                <p id='lblSaldoActualBodyPaysT'>Saldo Actual ₡</p>
                                <input type='text' id='txtSaldoActualBodyPaysT' name='saldoActualBodyPaysT'/>
                            </div>

                            <div className='pays_adjustment-body-datosFactura-datos-inputs-rightSide-descrip'>
                                <p id='lblDescripBodyPaysT'>Descripción</p>
                                <input type='text' id='txtDescripBodyPaysT' name='descripBodyPaysT'/>
                            </div>

                        </div>

                    </div>

                </div>

                <div className='pays_adjustment-body-datosFactura-table'>
                    
                    <table className='pays_adjustment-body-datosFactura-table-main'>
                        <thead>
                            <tr>
                                <th className='pays_adjustment-body-header-factura'>Factura</th>
                                <th className='pays_adjustment-body-header-montoFactura'>Monto Factura</th>
                                <th className='pays_adjustment-body-header-saldoAnt'>Saldo Anterior</th>
                                <th className='pays_adjustment-body-header-ajuste'>Ajuste</th>
                                <th className='pays_adjustment-body-header-saldoAct'>Saldo Actual</th>
                                <th className='pays_adjustment-body-header-grid'>Grid</th>
                                <th className='pays_adjustment-body-header-cuentaCont'>Cuenta Contable</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='pays_adjustment-body-factura'>test</td>
                                <td className='pays_adjustment-body-montoFactura'>test</td>
                                <td className='pays_adjustment-body-saldoAnt'>test</td>
                                <td className='pays_adjustment-body-ajuste'>test</td>
                                <td className='pays_adjustment-body-saldoAct'>test</td>
                                <td className='pays_adjustment-body-grid'>test</td>
                                <td className='pays_adjustment-body-cuentaCont'>test</td>
                            </tr>
                        </tbody>
                    </table>

                </div>

            </div>

        </div>
    )
}
