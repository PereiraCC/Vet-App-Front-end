
export const BillingTotals = () => {
  return (
      <div className="billing_totals-main">

          <div className="billing_totals-title">
              <p id="lblTotales">Totales</p>
          </div>

          <div className="billing_totals-sub-gravado">
              <p id="lblSub-gravado">Sub. Gravado</p>
              <input name="sub-gravado" id="txtSub-gravado" value="6.980.94"/>
          </div>

          <div className="billing_totals-sub-Exento">
              <p id="lblSub-exento">Sub. Exento</p>
              <input name="sub-exento" id="txtSub-exento" value="0.00"/>
          </div>

          <div className="billing_totals-sub-Total">
              <p id="lblSubtotal">SubTotal</p>
              <input name="subtotal" id="txtSubtotal" value="6.980.94"/>
          </div>

          <div className="billing_totals-Descuento">
              <p id="lblDescuento">Descuento</p>
              <input name="descuento" id="txtDescuento" value="0.00"/>
          </div>

          <div className="billing_totals-impVenta">
              <p id="lblImpVenta">Imp. Venta</p>
              <input name="impVenta" id="txtImpVenta" value="907.52"/>
          </div>

          <div className="billing_totals-MontoCupon">
              <p id="lblMontoCupon">Monto Cupon</p>
              <input name="impVenta" id="txtMontoCupon" value="0.00"/>
          </div>

          <div className="billing_totals-Totales">

              <div className="billing_totals-Totales-Exonerar">
                  <div className="billing_totals-Totales-Exonerar-check-input"> 
                    <input type="checkbox" id="checkExonerar" name="exonerar" value="exonerar" />
                  </div>
                  <label for="checkExonerar" id="lblExonerar">Exonerar</label>
              </div> 

              <div className="billing_totals-Totales-Titulo-Precio">
                  <div className="billing_totals-Totales-Titulo">
                      <p id="lblTotal">TOTAL</p>
                  </div>

                  <div className="billing_totals-Totales-Precio">
                      <p id="lblPrecio">7,888.46</p>
                  </div>
              </div> 

          </div>

      </div>
  )
}
