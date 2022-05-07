
export const InventoryBodyFeaturesUltimoCosto = () => {

    return (
        
        <div className="inventory_body-featuresUC">
            
            <div className="inventory_body-featuresUC-moneda">

                <p id="lblMoneda">Moneda</p>
                <div className="inventory_body-featuresUC-moneda-inputTipo">
                    <select name="tipoMoneda" id="cboTipoMoneda">
                        <option value="Colon">Colon</option>
                        <option value="Dolar">Dolar</option>
                    </select>
                </div>
                {/* <div className="inventory_body-featuresUC-moneda-inputMoneda">
                    <input name="moneda" id="txtMoneda" readOnly/>
                </div> */}

            </div>

            <div className="inventory_body-featuresUC-impuesto">

                <p id="lblImpuesto">Impuesto</p>
                <div className="inventory_body-featuresUC-impuesto-inputImpuesto">
                    <input name="impuesto" id="txtImpuesto"/>
                </div>
                <div className="inventory_body-featuresUC-impuesto-inputTipoImpuesto">
                    <select name="tipoImpuesto" id="cboTipoImpuesto">
                        <option value="general">IVA - Tarifa general 13%</option>
                        <option value="especifica">IVA - Tarifa especifica 8%</option>
                    </select>
                </div>

            </div>

            <div className="inventory_body-featuresUC-base">

                <p id="lblBase">Base</p>
                <div className="inventory_body-featuresUC-base-inputBase">
                    <input name="base" id="txtBase"/>
                </div>
                {/* <div className="inventory_body-featuresUC-base-inputBase2">
                    <input name="base2" id="txtBase2" readOnly/>
                </div> */}

            </div>

            <div className="inventory_body-featuresUC-fletes">

                <p id="lblFletes">Fletes</p>
                <div className="inventory_body-featuresUC-fletes-inputFletes">
                    <input name="fletes" id="txtFletes"/>
                </div>
                {/* <div className="inventory_body-featuresUC-fletes-inputFletes2">
                    <input name="fletes2" id="txtFletes2" readOnly/>
                </div> */}

            </div>

            <div className="inventory_body-featuresUC-OCargo">
                
                <p id="lblOCargo">Otro Cargo</p>
                <div className="inventory_body-featuresUC-OCargo-inputOCargo">
                    <input name="OCargo" id="txtOCargo"/>
                </div>
                {/* <div className="inventory_body-featuresUC-OCargo-inputOCargo2">
                    <input name="OCargo2" id="txtOCargo2" readOnly/>
                </div> */}

            </div>

            <div className="inventory_body-featuresUC-costo">

                <p id="lblCosto">Costo</p>
                <div className="inventory_body-featuresUC-Costo-inputCosto">
                    <input name="Costo" id="txtCosto"/>
                </div>
                {/* <div className="inventory_body-featuresUC-Costo-inputCosto2">
                    <input name="Costo2" id="txtCosto2" readOnly/>
                </div> */}

            </div>

            <div className="inventory_body-featuresUC-costoR">

                <p id="lblCostoR">Costo Real</p>
                <div className="inventory_body-featuresUC-CostoR-inputCostoR">
                    <input name="CostoR" id="txtCostoR"/>
                </div>
                <div className="inventory_body-featuresUC-CostoR-check">
                    <div className="inventory_body-featuresUC-CostoR-check-input"> 
                        <input type="checkbox" id="checkRegistrado" name="checkRegistrado" value="registrado" />
                    </div>
                    <label for="checkRegistrado" id="lblRegistrado">Registrado en el MAG</label>
                </div>

            </div>

        </div>
    )
}
