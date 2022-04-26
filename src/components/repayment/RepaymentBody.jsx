
export const RepaymentBody = () => {
    return (
        <div className='repayment_body-main'>
            
            <div className='repayment_body-leftSide'>

                <div className='repayment_body-leftSide-firstBox'>
                    
                    <div className='repayment_body-leftSide-firstBox-firstLine'>

                        <div className='repayment_body-leftSide-firstBox-firstLine-tipo'>
                            <p id='lblTipoDevoluciones'>Tipo</p>
                            <select name='tipoDevoluciones' id='cboTipoDevoluciones'>
                                <option value='CRE'>CRE</option>
                                <option value='CRU'>CRU</option>
                            </select>
                        </div>

                        <div className='repayment_body-leftSide-firstBox-firstLine-caja'>
                            <p id='lblCajaDevoluciones'>Caja</p>
                            <input type='text' name='cajaDevoluciones' id='txtCajaDevoluciones' />
                        </div>

                        <div className='repayment_body-leftSide-firstBox-firstLine-numero'>
                            <p id='lblNumeroDevoluciones'>Número</p>
                            <input type='text' name='numeroDevoluciones' id='txtNumeroDevoluciones' />
                        </div>

                        <div className='repayment_body-leftSide-firstBox-firstLine-fecha'>
                            <p id='lblFechaDevoluciones'>Fecha</p>
                            <input type="date" id="txtFechaDevoluciones" name="fechaDevoluciones"
                            min="01-01-2022" max="12-31-2022" />
                        </div>

                    </div>

                    <div className='repayment_body-leftSide-firstBox-secondLine'>
                        <p id='lblNombreClienteDevoluciones'>Nombre del Cliente</p>
                        <input type='text' name='nombreClienteDevoluciones' id='txtNombreClienteDevoluciones' />
                    </div>

                    <div className='repayment_body-leftSide-firstBox-thirdLine'>
                        
                        <div className='repayment_body-leftSide-firstBox-thirdLine-Moneda'>
                            <p id='lblMonedaDevoluciones'>Moneda</p>
                            <select name='monedaDevoluciones' id='cboMonedaDevoluciones'>
                                <option value='colon'>COLON</option>
                                <option value='dolar'>DOLAR</option>
                            </select>
                        </div>

                        <div className='repayment_body-leftSide-firstBox-thirdLine-Monto'>
                            <p id='lblMontoDevoluciones'>Monto</p>
                            <input type='text' name='montoDevoluciones' id='txtMontoDevoluciones' />
                        </div>

                    </div>

                </div>

                <div className='repayment_body-leftSide-secondBox'>
                    
                    <div className='repayment_body-leftSide-secondBox-leftSide'>

                        <div className='repayment_body-leftSide-secondBox-leftSide-firstLine'>
                            <p id='lblCodigoDevoluciones'>Código</p>
                            <input type='text' name='codigoDevoluciones' id='txtCodigoDevoluciones' />
                        </div>
                        <div className='repayment_body-leftSide-secondBox-leftSide-secondLine'>
                            <p id='lblPrecioUnitarioDevoluciones'>Precio Unitario</p>
                            <input type='text' name='precioUnitarioDevoluciones' id='txtPrecioUnitarioDevoluciones' />
                        </div>
                        <div className='repayment_body-leftSide-secondBox-leftSide-thirdLine'>
                            <p id='lblDescuentoDevoluciones'>Descuento</p>
                            <input type='text' name='descuentoDevoluciones' id='txtDescuentoDevoluciones' />
                        </div>

                    </div>

                    <div className='repayment_body-leftSide-secondBox-rightSide'>
                        
                        <div className='repayment_body-leftSide-secondBox-rightSide-firstLine'>
                            <p id='lblCantOriginalDevoluciones'>Cantidad Original</p>
                            <input type='text' name='cantOriginalDevoluciones' id='txtCantOriginalDevoluciones' />
                        </div>
                        <div className='repayment_body-leftSide-secondBox-rightSide-secondLine'>
                            <p id='lblDevolucionesD'>Devoluciones</p>
                            <input type='text' name='devolucionesD' id='txtDevolucionesD' />
                        </div>
                        <div className='repayment_body-leftSide-secondBox-rightSide-thirdLine'>
                            <p id='lblDevolucionDevoluciones'>Devolución</p>
                            <input type='text' name='DevolucionDevoluciones' id='txtDevolucionDevoluciones' />
                        </div>

                    </div>

                </div>

            </div>

            <div className='repayment_body-rightSide'>
                
                <div className='repayment_body-rightSide-title'>
                    <p id='lblTitleRightSide'>Artículo que se Pueden Devolver</p>
                </div>

                <div className='repayment_body-rightSide-table'>
                    <table className='repayment_body-table-main'>
                        <thead>
                            <tr>
                                <th className='repayment_body-table-header-idVenta'>Id Venta</th>
                                <th className='repayment_body-table-header-CodigoArt'>Código Artículo</th>
                                <th className='repayment_body-table-header-Codigo'>Código</th>
                                <th className='repayment_body-table-header-Descrip'>Descripción</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='repayment_body-table-idVenta'>test</td>
                                <td className='repayment_body-table-CodigoArt'>test</td>
                                <td className='repayment_body-table-Codigo'>test</td>
                                <td className='repayment_body-table-Descrip'>test</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='repayment_body-rightSide-inputs'>
                    
                    <div className='repayment_body-rightSide-inputs-vete'>
                        <p id='lblVeteDevoluciones'>Vete</p>
                        <input type='text' name='veteDevoluciones' id='txtVeteDevoluciones' />
                    </div>

                    <div className='repayment_body-rightSide-inputs-cantBod'>
                        <p id='lblCantBodDevoluciones'>Cantidad Bodega</p>
                        <input type='text' name='cantBodDevoluciones' id='txtCantBodDevoluciones' />
                    </div>

                </div>

            </div>

        </div>
    )
}
