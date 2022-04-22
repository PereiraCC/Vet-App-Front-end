
export const BuysHeaderFactura = () => {
    return (
        <div className='buys_headerFactura-main'>
            
            <div className='buys_headerFactura-firstLine'>
                
                <div className='buys_headerFactura-firstLine-NumeroFactura'>
                    <p id="lblNumeroFactura">Numero Factura</p>
                </div>

                <div className='buys_headerFactura-firstLine-Tipo'>
                    <p id="lblTipoProveedor">Tipo</p>
                </div>

                <div className='buys_headerFactura-firstLine-Fecha'>
                    <p id="lblFechaProveedor">Fecha</p>
                </div>

                <div className='buys_headerFactura-firstLine-Dias'>
                    <p id="lblDias">Dias</p>
                </div>

                <div className='buys_headerFactura-firstLine-Vencimiento'>
                    <p id="lblVencimiento">Vencimiento</p>
                </div>

                <div className='buys_headerFactura-firstLine-Orden'>
                    <p id="lblOrden">Orden</p>
                </div>

            </div>

            <div className='buys_headerFactura-secondLine'>
                
                <div className='buys_headerFactura-secondLine-inputNumeroFacturaP'>
                    <input name='numeroFactura' id='txtNumeroFacturaP' />
                </div>

                <div className='buys_headerFactura-secondLine-inputTipoP'>
                    <select name="tipoProveedor" id="cboTipoProveedorP">
                        <option value="cre">CRE</option>
                        <option value="ceo">CEO</option>
                    </select>
                </div>

                <div className='buys_headerFactura-secondLine-inputFechaP'>
                    <input type="date" id="txtFechaProveedorP" name="fecha"
                            min="01-01-2022" max="12-31-2022" />
                </div>

                <div className='buys_headerFactura-secondLine-inputDiasP'>
                    <input name='dias' id='txtDiasP' />
                </div>

                <div className='buys_headerFactura-secondLine-inputVencimientoP'>
                    <input type="date" id="txtVencimientoP" name="fechaVencimiento"
                            min="01-01-2022" max="12-31-2022" />
                </div>

                <div className='buys_headerFactura-secondLine-inputOrdenP'>
                    <input name='orden' id='txtOrdenP' />
                </div>

                <div className='buys_headerFactura-secondLine-buttonRS'>
                    <button id="btnRS">RS</button>
                </div>

            </div>

            <div className='buys_headerFactura-thirdLine'>
                
                <div className='buys_headerFactura-thirdLine-Moneda'>

                    <div className='buys_headerFactura-thirdLine-Moneda-label'>
                        <p id="lblTipoMonedaP">Moneda</p>
                    </div>

                    <div className='buys_headerFactura-thirdLine-Moneda-cbo'>
                        <select name="tipoMoneda" id="cboTipoMonedaP">
                            <option value="colon">COLON</option>
                            <option value="dolar">DOLAR</option>
                        </select>
                    </div>

                    <div className='buys_headerFactura-thirdLine-Moneda-input'>
                        <input name='cambioMoneda' id='txtCambioMoneda' readOnly/>
                    </div>

                </div>

                <div className='buys_headerFactura-thirdLine-Trans'>
                    
                    <div className='buys_headerFactura-thirdLine-Trans-check'>
                        <div className="buys_headerFactura-thirdLine-Trans-check-input"> 
                            <input type="checkbox" id="checkTrans" name="trans" value="trans" />
                        </div>
                        <label for="checkTrans" id="lblTrans">Trans</label>
                    </div>

                    <div className='buys_headerFactura-thirdLine-Trans-input'>
                        <input name='txtTranferencia' id='txtTranferencia' />
                    </div>

                    <div className='buys_headerFactura-thirdLine-Trans-button'>
                        <button id="btnAplicar">Aplicar</button>
                    </div>

                </div>

            </div>

        </div>
    )
}
