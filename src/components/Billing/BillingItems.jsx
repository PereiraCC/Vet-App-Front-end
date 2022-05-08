
export const BillingItems = () => {
  return (
      
      <div className="billing_iteams-main">

          <div className="billing_iteams-title">
              <p id="lblTitleIteams">Artículo a Facturar</p>
          </div>

          <div className="billing_iteams-header">
              
              <div className="billing_iteams-Codigo">

                  <div className="billing_iteams-codigo-title-check">

                      <div className="billing_iteams-codigo-title"> 
                          <p id="lblCodigo">Código</p>
                      </div>
                      <div className="billing_iteams-codigo-check">
                        <div className="billing_iteams-codigo-check-input"> 
                          <input type="checkbox" id="checkPedido" name="pedido" value="pedido" />
                        </div>
                        <label for="checkPedido" id="lblPedido">Pedido</label>
                      </div>

                  </div>

                  <div className="billing_iteams-codigo-input">
                      <input name="codigo" id="txtCodigo" autoComplete="off"/>
                  </div>
              </div>

              <div className="billing_iteams-precioUnit">
                    <p id="lblTilePrecio">Precio Unitario ₡</p>
                    <p id="lblResulPrecio">0.00</p>
              </div>

              <div className="billing_iteams-IV">
                    <div className="billing_iteams-IV-label-input">
                        <p id="lblTitleIV">I.V. (%)</p>
                        <input name="iv" id="txtIV"/>
                    </div>
                    <p id="lblResulIV">0.00</p>
              </div>

              <div className="billing_iteams-Desc">
                    <p id="lblTitleDesc">Descuento (%)</p>
                    <p id="lblResulDesc">0.00</p>
              </div>

              <div className="billing_iteams-Exist">
                    <p id="lblTitleExist">Existencias</p>
                    <p id="lblResulExist">0</p>
                    <p id="lblTtleRegalias">Regalias</p>
              </div>

              <div className="billing_iteams-Cantidad">
                    <p id="lblTitleCantidad">Cantidad</p>
                    <p id="lblResulCantidad">1.00</p>
                    <p id="lblResulRegalias">0</p>
              </div>

              <div className="billing_iteams-SubTotal">
                    <p id="lblTitleSubTotal">SubTotal   ₡</p>
                    <p id="lblResulSubTotal">0.00</p>
                    <div className="billing_iteams-SubTotal-Exist-Bod">
                        <p id="lblTitleExist-Bod">Exist.Bod</p>
                        <p id="lblResulExist-Bod">0</p>
                    </div>
              </div>

          </div>

          <div className="billing_iteams-table">
                <table className="billing_iteams-main-table">
                    <tr>
                        <th className="billing_iteams-table-header-codigo">Codigo</th>
                        <th className="billing_iteams-table-header-descrip">Descripcion</th>
                        <th className="billing_iteams-table-header-cantidad">Cant.</th>
                        <th className="billing_iteams-table-header-precioU">P.Unit</th>
                        <th className="billing_iteams-table-header-desc">
                            <button id='btnPorcentaje'>%</button>
                            DTO
                        </th>
                        <th className="billing_iteams-table-header-imp">M. Imp</th>
                        <th className="billing_iteams-table-header-subtotal">SubTotal</th>
                    </tr>
                    <tr>
                        <td className="billing_iteams-table-codigo">56786</td>
                        <td className="billing_iteams-table-descrip">VASOS PIMIDIDA 4-19(1 UNIDAD)</td>
                        <td className="billing_iteams-table-cantidad">1.00</td>
                        <td className="billing_iteams-table-precioU">417.24</td>
                        <td className="billing_iteams-table-desc">0.00</td>
                        <td className="billing_iteams-table-imp">54.24</td>
                        <td className="billing_iteams-table-subtotal">417.24</td>
                    </tr>
                    <tr>
                        <td className="billing_iteams-table-codigo">80578</td>
                        <td className="billing_iteams-table-descrip">ACEITE SHINDAWA(1 LITROS)</td>
                        <td className="billing_iteams-table-cantidad">1.00</td>
                        <td className="billing_iteams-table-precioU">6.563.70</td>
                        <td className="billing_iteams-table-desc">0.00</td>
                        <td className="billing_iteams-table-imp">853.28</td>
                        <td className="billing_iteams-table-subtotal">6.563.70</td>
                    </tr>
                </table>
          </div>

      </div>

  )
}
