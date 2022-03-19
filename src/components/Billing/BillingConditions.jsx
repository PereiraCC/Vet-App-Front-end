
export const BillingConditions = () => {
  return (
      <div className="billing_conditions-main">

          <div className="billing_conditions-title">
              <p id="lblTitle">Condicciones de factura</p>
          </div>

          <div className="billing_conditions-coin-change">
              
              <div className="billing_conditions-coin">
                  <p id="lblMoneda">Moneda</p>
                  <select name="moneda" id="cboMoneda">
                    <option value="Colon">Colon</option>
                    <option value="Dolar">Dolar</option>
                  </select>
              </div>

              <div className="billing_conditions-change">
                  <p id="lblTipoCambioTitle">Tipo Cambio</p>
                  <p id="lblTipoCambioResul">1</p>
              </div>

          </div>

          <div className="billing_conditions-orders">
              <p id="lblCompraTitle">Orden de Compra →</p>
              <p id="lblCompraResul">0</p>
          </div>

          <div className="billing_conditions-squares">
              
              <div className="billing_conditions-check-buttons-one">

                <div className="billing_conditions-check-buttons-one-taller">
                  <div className="billing_conditions-check-buttons-one-taller-input"> 
                    <input type="checkbox" id="checkTaller" name="taller" value="taller" />
                  </div>
                  <label for="checkTaller" id="lblTaller">Taller</label>
                </div>

                <div className="billing_conditions-check-buttons-one-mascota">
                  <div className="billing_conditions-check-buttons-one-mascota-input"> 
                    <input type="checkbox" id="checkMascota" name="mascota" value="mascota" />
                  </div>
                  <label for="checkMascota" id="lblMascota">Mascota</label>
                </div>

              </div>

              <div className="billing_conditions-check-buttons-two">

                  <div className="billing_conditions-check-buttons-two-agente">
                    <div className="billing_conditions-check-buttons-two-agente-input"> 
                      <input type="checkbox" id="checkAgente" name="agente" value="agente" />
                    </div>
                    <label for="checkAgente" id="lblAgente">Agente</label>
                  </div>

                  <div className="billing_conditions-check-buttons-two-pd">
                    <div className="billing_conditions-check-buttons-two-PD-input"> 
                      <input type="checkbox" id="checkPD" name="PD" value="PD" />
                    </div>
                    <label for="checkPD" id="lblPD">PD</label>
                  </div>
              </div>

          </div>
      </div>
  )
}
