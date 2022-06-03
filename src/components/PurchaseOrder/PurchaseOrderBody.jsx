
export const PurchaseOrderBody = () => {
    return (
        <div className='purchaseOrden_body-main'>
            
            <div className='purchaseOrden_body-firstLine'>
                
                <div className='purchaseOrden_body-firstLine-infoProveedor'>

                    <p id='lblTitleInfoProveedor'>Información del Proveedor</p>

                    <div className='purchaseOrden_body-firstLine-infoProveedor-inputs'>
                        <div className='purchaseOrden_body-firstLine-infoProveedor-codigo'>
                            <p id='lblCodigoPurchaseOrden'>Codigo</p>
                            <input type='text' id='txtCodigoPurchaseOrden' name='codigoPurchaseOrden'/>
                        </div>

                        <div className='purchaseOrden_body-firstLine-infoProveedor-nombre'>
                            <p id='lblNombreProPurchaseOrden'>Nombre Proveedor</p>
                            <input type='text' id='txtNombreProPurchaseOrden' name='nombreProPurchaseOrden'/>
                        </div>
                    </div>

                </div>

                <div className='purchaseOrden_body-firstLine-formaPago'>
                    <p id='lblTitleFormaPago'>Forma de Pago</p>

                    <div className='purchaseOrden_body-firstLine-formaPago-inputs'>
                        <div className='purchaseOrden_body-firstLine-formaPago-contado'>
                            <input type="radio" id="rbContadoFormaPagoPO" name="contadoFormaPagoPO" value="contadoFormaPagoPO" />
                            <label for="rbContadoFormaPagoPO" id='lblContadoFormaPagoPO'>Contado</label> 
                        </div>

                        <div className='purchaseOrden_body-firstLine-formaPago-credito'>

                            <div className="purchaseOrden_body-firstLine-formaPago-credito-rb">
                                <input type="radio" id="rbCreditoFormaPagoPO" name="creditoFormaPagoPO" value="creditoFormaPagoPO" />
                                <label for="rbCreditoFormaPagoPO" id='lblCreditoFormaPagoPO'>Crédito</label>
                            </div>

                            <div className='purchaseOrden_body-firstLine-formaPago-credito-dias'>
                                <input type='text' id='txtDiasCreditoFormaPagoPO' name='diasCreditoFormaPagoPO'/>
                                <p id='lblDiasCreditoFormaPagoPO'>Día (s)</p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <div className='purchaseOrden_body-secondLine'>
                
                <div className='purchaseOrden_body-secondLine-opciones'>
                    <p id='lblTitleOpciones'>Opciones de Orden</p>

                    <div className='purchaseOrden_body-secondLine-opciones-inputs'>
                        <div className='purchaseOrden_body-secondLine-opciones-entrega'>
                            <p id='lblentregaPurchaseOrden'>Entrega</p>
                            <div className='purchaseOrden_body-secondLine-opciones-entrega-inputs'>
                                <input type='text' id='txtentregaPurchaseOrden' name='entregaPurchaseOrden'/>
                                <p id='lblDiasEntregaPurchaseOrden'>Día (s)</p>
                            </div>
                        </div>

                        <div className='purchaseOrden_body-secondLine-opciones-entregar'>
                            <p id='lblentregarProPurchaseOrden'>Entregar a:</p>
                            <input type='text' id='txtentregarProPurchaseOrden' name='entregarProPurchaseOrden'/>
                        </div>
                    </div>
                </div>

                <div className='purchaseOrden_body-secondLine-moneda'>
                    <p id='lblTitleMoneda'>Moneda</p>

                    <div className='purchaseOrden_body-secondLine-moneda-inputs'>
                        <p id='lblMonedaPurchaseOrden'>Moneda</p>
                        <select id='cboMonedaPurchaseOrden' name='monedaPurchaseOrden'>
                            <option value="COLON">COLON</option>
                            <option value="DOLAR">DOLAR</option>
                        </select>
                    </div>
                </div>

            </div>

            <div className='purchaseOrden_body-thirdLine'>

                <div className='purchaseOrden_body-thirdLine-first'>
                    
                    <p id='lblTitleInfoArticuloPurO'>Información del Articulo</p>

                    <div className='purchaseOrden_body-thirdLine-first-inputs'>
                        
                        <div className='purchaseOrden_body-thirdLine-first-inputs-codigoArt'>
                            <p id='lblCodigoArtPurchaseOrden'>Código</p>
                            <input type='text' id='txtCodigoArtPurchaseOrden' name='codigoArtPurchaseOrden'/>
                        </div>

                        <div className='purchaseOrden_body-thirdLine-first-inputs-descrip'>
                            <p id='lblDescripPurchaseOrden'>Descripción</p>
                            <input type='text' id='txtDescripPurchaseOrden' name='descripPurchaseOrden'/>
                        </div>
                    </div>
                        
                </div>

                <div className='purchaseOrden_body-thirdLine-second'>
                    
                    <div className='purchaseOrden_body-thirdLine-second-precioUnit'>
                        <p id='lblPrecioUnitPurchaseOrden'>Precio Unit</p>
                        <input type='text' id='txtPrecioUnitPurchaseOrden' name='precioUnitPurchaseOrden'/>
                    </div>

                    <div className='purchaseOrden_body-thirdLine-second-fletes'>
                        <p id='lblFletesPurchaseOrden'>Fletes</p>
                        <input type='text' id='txtFletesPurchaseOrden' name='fletesPurchaseOrden'/>
                    </div>

                    <div className='purchaseOrden_body-thirdLine-second-otros'>
                        <p id='lblOtrosPurchaseOrden'>Otros</p>
                        <input type='text' id='txtOtrosPurchaseOrden' name='otrosPurchaseOrden'/>
                    </div>

                    <div className='purchaseOrden_body-thirdLine-second-costo'>
                        <p id='lblCostoPurchaseOrden'>Costo</p>
                        <input type='text' id='txtCostoPurchaseOrden' name='costoPurchaseOrden'/>
                    </div>

                    <div className='purchaseOrden_body-thirdLine-second-desc'>
                        <p id='lblDescPurchaseOrden'>Desc</p>
                        <input type='text' id='txtDescPurchaseOrden' name='descPurchaseOrden'/>
                    </div>

                    <div className='purchaseOrden_body-thirdLine-second-imp'>
                        <p id='lblImpPurchaseOrden'>Imp</p>
                        <input type='text' id='txtImpPurchaseOrden' name='impPurchaseOrden'/>
                    </div>

                    <div className='purchaseOrden_body-thirdLine-second-cantidad'>
                        <p id='lblCantidadPurchaseOrden'>Cantidad</p>
                        <input type='text' id='txtCantidadPurchaseOrden' name='cantidadPurchaseOrden'/>
                    </div>

                    <div className='purchaseOrden_body-thirdLine-second-subtotal'>
                        <p id='lblSubTotalPurchaseOrden'>SubTotal</p>
                        <input type='text' id='txtSubTotalPurchaseOrden' name='subTotalPurchaseOrden'/>
                    </div>

                </div>
            </div>

            <div className='purchaseOrden_body-table'>
                
                <div className='purchaseOrden_body-table-obser'>
                    <p id='lblObserPurchaseOrden'>Observaciones</p>
                    <input type='text' id='txtObserPurchaseOrden' name='obserPurchaseOrden'/>
                </div>

                <div className='purchaseOrden_body-table-table'>
                    <table className='purchaseOrden_body-table-table-main'>
                        <thead>
                            <tr>
                                <th className='purchaseOrden_body-table-header-codigo'>Código</th>
                                <th className='purchaseOrden_body-table-header-descrip'>Descripción</th>
                                <th className='purchaseOrden_body-table-header-precioUnit'>Precio Unit</th>
                                <th className='purchaseOrden_body-table-header-cantidad'>Cantidad</th>
                                <th className='purchaseOrden_body-table-header-iv'>% IV</th>
                                <th className='purchaseOrden_body-table-header-desc'>% Desc</th>
                                <th className='purchaseOrden_body-table-header-gravado'>Gravado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='purchaseOrden_body-table-codigo'>test</td>
                                <td className='purchaseOrden_body-table-descrip'>test</td>
                                <td className='purchaseOrden_body-table-precioUnit'>test</td>
                                <td className='purchaseOrden_body-table-cantidad'>test</td>
                                <td className='purchaseOrden_body-table-iv'>test</td>
                                <td className='purchaseOrden_body-table-desc'>test</td>
                                <td className='purchaseOrden_body-table-gravado'>test</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='purchaseOrden_body-table-totals'>
                    
                    <div className='purchaseOrden_body-table-totals-subgravado'>
                        <p id='lblsubgravadoPurchaseOrden'>Sub. Gravado</p>
                        <input type='text' id='txtsubgravadoPurchaseOrden' name='subgravadoPurchaseOrden'/>
                    </div>

                    <div className='purchaseOrden_body-table-totals-subexento'>
                        <p id='lblsubexentoPurchaseOrden'>Sub. Exento</p>
                        <input type='text' id='txtsubexentoPurchaseOrden' name='subexentoPurchaseOrden'/>
                    </div>

                    <div className='purchaseOrden_body-table-totals-subTotal'>
                        <p id='lblsubTotalPurchaseOrden'>SubTotal</p>
                        <input type='text' id='txtsubTotalPurchaseOrden' name='subTotalPurchaseOrden'/>
                    </div>

                    <div className='purchaseOrden_body-table-totals-descuento'>
                        <p id='lbldescuentoPurchaseOrden'>Descuento</p>
                        <input type='text' id='txtdescuentoPurchaseOrden' name='descuentoPurchaseOrden'/>
                    </div>

                    <div className='purchaseOrden_body-table-totals-impuesto'>
                        <p id='lblimpuestoPurchaseOrden'>Impuesto</p>
                        <input type='text' id='txtimpuestoPurchaseOrden' name='impuestoPurchaseOrden'/>
                    </div>

                    <div className='purchaseOrden_body-table-totals-total'>
                        <p id='lbltotalPurchaseOrden'>Total</p>
                        <input type='text' id='txttotalPurchaseOrden' name='totalPurchaseOrden'/>
                    </div>

                </div>

            </div>

        </div>
    )
}
