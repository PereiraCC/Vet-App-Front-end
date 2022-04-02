
export const BuysArticulosHeader = () => {
    return (
        <div className='buys_articulos-header-main'>
            
            <div className='buys_articulos-header-firstLine'>

                <div className='buys_articulos-header-firstLine-codigo'>
                    <p id="lblCodigoArticulo">Código →</p>
                    <input name="codigo" id="txtCodigoArticulo" value='9.85'/>
                </div>

                <div className='buys_articulos-header-firstLine-desc'>
                    <p id="lblDescArticulo">Descripcion →</p>
                    <input name="descripcion" id="txtDescArticulo" value='DRONTAL 35 KILOS'/>
                </div>

            </div>

            <div className='buys_articulos-header-secondLine'>

                <p id='lblCantidadArticulo'>Cantidad</p>
                <p id='lblBaseArticulo'>Base</p>
                <p id='lblFletesArticulo'>Fletes</p>
                <p id='lblOtrosArticulo'>Otros</p>
                <p id='lblCostoArticulo'>Costo</p>
                <div className='buys_articulos-header-secondLine-descuento-articulo'>
                    <p id='lblDescuentoArticulo'>Desc.</p>
                    <input name='tipoDescuentoArticulo' id='inputTipoDescuentoArticulo' value='0'/>
                </div>
                <p id='lblCabysArticulo'>Cabys</p>
                <div className='buys_articulos-header-secondLine-impuesto-articulo'>
                    <p id='lblImpuestoArticulo'>Imp.</p>
                    <input name='tipoImpArticulo' id='inputTipoImpArticulo' value='13'/>
                </div>
                <p id='lblTotalCompraArticulo'>Total de Compra</p>

            </div>

            <div className='buys_articulos-header-thirdLine'>
                
                <div className='buys_articulos-header-thirdLine-cantidad-articulo'>
                    <input name='cantidadArticulo' id='txtCantidadArticulo' value='25'/>
                    <button id="btnMoreCantidad">+</button>
                    <input name='regaliasArticulo' id='txtRegaliasArticulo' value='0'/>
                </div>
                <input name='baseArticulo' id='txtbaseArticulo' value='2970'/>
                <input name='fletesArticulo' id='txtfletesArticulo' value='0'/>
                <input name='otrosArticulo' id='txtotrosArticulo' value='0'/>
                <input name='costoArticulo' id='txtcostoArticulo' value='2970'/>
                <input name='descArticulo' id='txtdescArticulo' value='0.00'/>
                <input name='cabysArticulo' id='txtcabysArticulo' value='3564008000000'/>
                <input name='impArticulo' id='txtimpArticulo' value='9652.5'/>
                <input name='totalCompraArticulo' id='txttotalCompraArticulo' value='74250'/>

            </div>

            <div className='buys_articulos-header-fourthLine'>
                
                <div className='buys_articulos-header-fourthLine-check'>
                    <div className="buys_articulos-header-fourthLine-check-input"> 
                        <input type="checkbox" id="checkBonificado" name="bonificado" value="bonificado" />
                    </div>
                    <label for="checkBonificado" id="lblBonificado">Bonificado</label>
                </div>

                <div className='buys_articulos-header-fourthLine-codigo'>
                    <p id='lblCodigo2P'>Codigo →</p>
                    <input name="codigo2" id="txtCodigo2P" value='0'/>
                </div>

                <div className='buys_articulos-header-fourthLine-cantidad'>
                    <p id='lblCantidadP'>Cantidad</p>
                    <input name="cantidadP" id="txtCantidadP" value='0'/>
                </div>

                <div className='buys_articulos-header-fourthLine-costo'>
                    <p id='lblCostoP'>Costo</p>
                    <input name="CostoP" id="txtCostoP" value='0'/>
                </div>

                <div className='buys_articulos-header-fourthLine-subtotal'>
                    <p id='lblSubTotalP'>SubTotal</p>
                    <input name="SubTotalP" id="txtSubTotalP" value='0'/>
                </div>

            </div>

        </div>
    )
}
