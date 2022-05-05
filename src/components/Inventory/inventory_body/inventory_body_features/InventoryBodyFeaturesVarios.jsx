
export const InventoryBodyFeaturesVarios = () => {
    return (
        <div className='inventory_body-featuresVarios'>
            
            <div className='inventory_body-featuresVarios-firstBox'>
                
                <div className='inventory_body-featuresVarios-firstBox-checks'>
                    
                    <div className='inventory_body-featuresVarios-firstBox-checks-promo'>

                        <div className="inventory_body-featuresVarios-firstBox-checks-promo-input"> 
                            <input type="checkbox" id="checkPromo" name="promoInventory" value="promoInventory" />
                        </div>
                        <label for="checkPromo" id="lblPromoInventory">Promo Activa</label>

                    </div>

                    <div className='inventory_body-featuresVarios-firstBox-checks-second'>
                        
                        <div className='inventory_body-featuresVarios-firstBox-checks-second-con'>

                            <div className="inventory_body-featuresVarios-firstBox-checks-con-input"> 
                                <input type="checkbox" id="checkcon" name="conInventory" value="conInventory" />
                            </div>
                            <label for="checkcon" id="lblconInventory">CON</label>

                        </div>

                        <div className='inventory_body-featuresVarios-firstBox-checks-second-cre'>

                            <div className="inventory_body-featuresVarios-firstBox-checks-cre-input"> 
                                <input type="checkbox" id="checkcre" name="creInventory" value="creInventory" />
                            </div>
                            <label for="checkcre" id="lblcreInventory">CRE</label>

                        </div>

                    </div>

                </div>

                <div className='inventory_body-featuresVarios-firstBox-dates'>
                    
                    <div className='inventory_body-featuresVarios-firstBox-dates-desde'>
                        <p id="lblDesdeInventory">Desde</p>
                        <input type="date" id="txtDesdeInventory" name="desdeInventory" />
                    </div>

                    <div className='inventory_body-featuresVarios-firstBox-dates-hasta'>
                        <p id="lblHastaInventory">Hasta</p>
                        <input type="date" id="txtHastaInventory" name="hastaInventory" />
                    </div>

                </div>

            </div>

            <div className='inventory_body-featuresVarios-secondBox'>
                
                <div className='inventory_body-featuresVarios-secondBox-check'>
                    
                    <div className="inventory_body-featuresVarios-secondBox-check-promo-bonif"> 
                        <input type="checkbox" id="checkbonif" name="bonifInventory" value="bonifInventory" />
                    </div>
                    <label for="checkbonif" id="lblbonifInventory">Bonificado</label>

                </div>

                <div className='inventory_body-featuresVarios-secondBox-maximos'>
                    
                    <div className='inventory_body-featuresVarios-secondBox-maximos-descuento'>
                        <p id="lblMaxDescuentoInventory">Máximo Descuento</p>
                        <input type="text" id="txtMaxDescuentoInventory" name="maxDescuentoInventory" />
                        <p id="lblDescPorInventory">%</p>
                    </div>

                    <div className='inventory_body-featuresVarios-secondBox-maximos-comision'>
                        <p id="lblMaxComisionInventory">Máximo Comisión</p>
                        <input type="text" id="txtMaxComisionInventory" name="maxComisionInventory" />
                        <p id="lblComiPorInventory">%</p>
                    </div>

                </div>

            </div>

            <div className='inventory_body-featuresVarios-thirdBox'>
                
                <div className='inventory_body-featuresVarios-thirdBox-leftSide'>
                    
                    <div className='inventory_body-featuresVarios-thirdBox-leftSide-receta'>

                        <div className="inventory_body-featuresVarios-thirdBox-leftSide-receta-input"> 
                            <input type="checkbox" id="checkreceta" name="recetaInventory" value="recetaInventory" />
                        </div>
                        <label for="checkreceta" id="lblrecetaInventory">Solo con receta</label>

                    </div>

                    <div className='inventory_body-featuresVarios-thirdBox-leftSide-orden'>

                        <div className="inventory_body-featuresVarios-thirdBox-leftSide-orden-input"> 
                            <input type="checkbox" id="checkorden" name="ordenInventory" value="ordenInventory" />
                        </div>
                        <label for="checkorden" id="lblordenInventory">Orden</label>

                    </div>

                </div>

                <div className='inventory_body-featuresVarios-thirdBox-rightSide'>
                    
                    <div className='inventory_body-featuresVarios-thirdBox-rightSide-first'>

                        <div className='inventory_body-featuresVarios-thirdBox-rightSide-first-lote'>

                            <div className="inventory_body-featuresVarios-thirdBox-rightSide-first-lote-input"> 
                                <input type="checkbox" id="checklote" name="loteInventory" value="loteInventory" />
                            </div>
                            <label for="checklote" id="lblloteInventory">Lote</label>

                        </div>

                        <div className='inventory_body-featuresVarios-thirdBox-rightSide-first-servicio'>

                            <div className="inventory_body-featuresVarios-thirdBox-rightSide-first-servicio-input"> 
                                <input type="checkbox" id="checkservicio" name="servicioInventory" value="servicioInventory" />
                            </div>
                            <label for="checkservicio" id="lblservicioInventory">Servicio</label>

                        </div>

                        <div className='inventory_body-featuresVarios-thirdBox-rightSide-first-inhabilitado'>

                            <div className="inventory_body-featuresVarios-thirdBox-rightSide-first-inhabilitado-input"> 
                                <input type="checkbox" id="checkinhabilitado" name="inhabilitadoInventory" value="inhabilitadoInventory" />
                            </div>
                            <label for="checkinhabilitado" id="lblinhabilitadoInventory">Inhabilitado</label>

                        </div>

                    </div>

                    <div className='inventory_body-featuresVarios-thirdBox-rightSide-second'>
                    
                        <div className="inventory_body-featuresVarios-thirdBox-rightSide-second-requiere-input"> 
                            <input type="checkbox" id="checkrequire" name="requireInventory" value="requireInventory" />
                        </div>
                        <label for="checkrequire" id="lblrequireInventory">Require</label>

                    </div>

                </div>

            </div>

        </div>
    )
}