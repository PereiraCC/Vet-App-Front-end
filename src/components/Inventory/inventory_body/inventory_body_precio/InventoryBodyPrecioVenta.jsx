
export const InventoryBodyPrecioVenta = () => {

    return (
        
        <div className="inventory_body-precio-venta-main">

            <div className="inventory_body-precio-venta-titulo">
                <p id="lblTituloPrecioVenta">Precio de Venta</p>
            </div>

            <div className="inventory_body-precio-venta-moneda">

                <p id="lblMonedaPrecioVenta">Moneda</p>
                <div className="inventory_body-precio-venta-moneda-inputTipo">
                    <select name="tipoMoneda" id="cboTipoMonedaPrecioVenta">
                        <option value="Colon">Colon</option>
                        <option value="Dolar">Dolar</option>
                    </select>
                </div>
                <div className="inventory_body-precio-venta-moneda-inputMoneda">
                    <input name="moneda" id="txtMonedaPrecioVenta" readOnly/>
                </div>

            </div>

            <div className="inventory_body-precio-venta-titulos">
                <p id="lblUtilidad">Utilidad</p>
                <p id="lblPrecioVenta">Precio Venta</p>
                <p id="lblPrecioIV">Precio + I.V.</p>
            </div>

            <div className="inventory_body-precio-venta-camposA">
                
                <div className="inventory_body-precio-venta-camposA-inputOne">
                    <input name="moneda" id="txtPrecioVentaCampoAOne"/>
                </div>
                <p id="lblCampoA">A</p>
                <div className="inventory_body-precio-venta-camposA-inputTwo">
                    <input name="moneda" id="txtPrecioVentaCampoATwo"/>
                </div>
                <p id="lblCampoASuma">+</p>
                <div className="inventory_body-precio-venta-camposA-inputThree">
                    <input name="moneda" id="txtPrecioVentaCampoAThree" readOnly/>
                </div>

            </div>

            <div className="inventory_body-precio-venta-camposB">
                
                <div className="inventory_body-precio-venta-camposB-inputOne">
                    <input name="moneda" id="txtPrecioVentaCampoBOne"/>
                </div>
                <p id="lblCampoB">B</p>
                <div className="inventory_body-precio-venta-camposB-inputTwo">
                    <input name="moneda" id="txtPrecioVentaCampoBTwo"/>
                </div>
                <p id="lblCampoBSuma">+</p>
                <div className="inventory_body-precio-venta-camposB-inputThree">
                    <input name="moneda" id="txtPrecioVentaCampoBThree" readOnly/>
                </div>

            </div>

            <div className="inventory_body-precio-venta-camposC">
            
                <div className="inventory_body-precio-venta-camposC-inputOne">
                    <input name="moneda" id="txtPrecioVentaCampoCOne"/>
                </div>
                <p id="lblCampoC">C</p>
                <div className="inventory_body-precio-venta-camposC-inputTwo">
                    <input name="moneda" id="txtPrecioVentaCampoCTwo"/>
                </div>
                <p id="lblCampoCSuma">+</p>
                <div className="inventory_body-precio-venta-camposC-inputThree">
                    <input name="moneda" id="txtPrecioVentaCampoCThree" readOnly/>
                </div>

            </div>

            <div className="inventory_body-precio-venta-camposD">

                <div className="inventory_body-precio-venta-camposD-inputOne">
                    <input name="moneda" id="txtPrecioVentaCampoDOne"/>
                </div>
                <p id="lblCampoD">D</p>
                <div className="inventory_body-precio-venta-camposD-inputTwo">
                    <input name="moneda" id="txtPrecioVentaCampoDTwo"/>
                </div>
                <p id="lblCampoDSuma">+</p>
                <div className="inventory_body-precio-venta-camposD-inputThree">
                    <input name="moneda" id="txtPrecioVentaCampoDThree" readOnly/>
                </div>

            </div>

            <div className="inventory_body-precio-venta-camposP">
               
                <div className="inventory_body-precio-venta-camposP-inputOne">
                    <input name="moneda" id="txtPrecioVentaCampoPOne"/>
                </div>
                <p id="lblCampoP">P</p>
                <div className="inventory_body-precio-venta-camposP-inputTwo">
                    <input name="moneda" id="txtPrecioVentaCampoPTwo"/>
                </div>
                <p id="lblCampoPSuma">+</p>
                <div className="inventory_body-precio-venta-camposP-inputThree">
                    <input name="moneda" id="txtPrecioVentaCampoPThree" readOnly/>
                </div>

            </div>
        </div>
    )
}
