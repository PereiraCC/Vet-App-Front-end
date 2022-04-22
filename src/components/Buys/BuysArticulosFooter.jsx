
export const BuysArticulosFooter = () => {
    return (
        <div className='buys_articulos-footer-main'>
           
            <div className='buys_articulos-footer-title'>

                <p id='lblTitleArticulosHeader'>Totales de Compra</p>

                <div className='buys_articulos-footer-title-check'>
                    <div className="buys_articulos-footer-title-check-input"> 
                        <input type="checkbox" id="checkCambiarImp" name="cambiarImp" value="cambiarImp" />
                    </div>
                    <label for="checkCambiarImp" id="lblCambiarImp">Cambiar Imp.</label>
                </div>
            </div>

            <div className='buys_articulos-footer-body'>
                
                <div className='buys_articulos-footer-body-title'>

                    <p id='lblSubtotalExcP'>SubTotal Exc.</p>
                    <p id='lblSubTotalGraP'>SubTotal Gra.</p>
                    <p id='lblDescuentoP'>Descuento</p>
                    <p id='lblImpuestoP'>Impuesto</p>
                    <p id='lblMontoFacturaP'>Monto Factura</p>

                </div>

                <div className='buys_articulos-footer-body-input'>
                    
                    <input type="text" id="txtSubtotalExcP"  name="SubtotalExcP"  value="0.00" />
                    <input type="text" id="txtSubtotalGraP"  name="SubtotalGraP"  value="489.710.00" />
                    <input type="text" id="txtDescuentoP"    name="DescuentoP"    value="49.500.00" />
                    <input type="text" id="txtImpuestoP"     name="ImpuestoP"     value="70.097.30" />
                    <input type="text" id="txtMontoFacturaP" name="MontoFacturaP" value="559.807.30" />

                </div>

            </div>

        </div>
    )
}
