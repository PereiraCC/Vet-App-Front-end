import React from 'react'

export const InventoryHeaderArticle = () => {
  return (

        <div className='inventory_header-article-main'>

            <div className='inventory_header-article-first-line'>
              
              <div className='inventory_header-article-first-line-codigo'>
                  <p id='lblCodigoProducto'>Código</p>
                  <input name="codigoProducto" id='txtCodigoProducto'/>
              </div>

              <div className='inventory_header-article-first-line-desc'>
                  <p id='lblDescripcion'>Descipción</p>
                  <input name="descripcion" id='txtDescripcion'/>
              </div>

              <div className='inventory_header-article-first-line-checks'>

                  <div className='inventory_header-article-first-line-checks-Actualizado'>
                      <div className="inventory_header-article-first-line-checks-Actualizado-input"> 
                          <input type="checkbox" id="checkActualizado" name="actualizado" value="actualizado" />
                      </div>
                      <label for="checkActualizado" id="lblActualizado">Actualizado</label>
                  </div>

                  <div className='inventory_header-article-first-line-checks-Completos'>
                      <div className="inventory_header-article-first-line-checks-Completos-input"> 
                          <input type="checkbox" id="checkCompletos" name="completos" value="completos" />
                      </div>
                      <label for="checkCompletos" id="lblCompletos">Artículos Completos</label>
                  </div>

                  <div className='inventory_header-article-first-line-checks-contado'>
                      <div className="inventory_header-article-first-line-checks-contado-input"> 
                          <input type="checkbox" id="checkContado" name="contado" value="contado" />
                      </div>
                      <label for="checkContado" id="lblContado">Solo de Contado</label>
                  </div>
              </div>

              <div className='inventory_header-article-first-line-presentacion'>
                  <p id='lblPresentacion'>Presentación</p>
                  <div className='inventory_header-article-first-line-presentacion-inputs'>
                      <input name="cantidadPresentacion" id='txtcantidadPresentacion'/>
                      <select name="medidaPresentacion" id="cbomedidaPresentacion">
                          <option value="Unidad">Unidad</option>
                          <option value="Metros">Metros</option>
                      </select>
                  </div>
              </div>

            </div>

            <div className='inventory_header-article-codigo-barras'>
                
                <div className='inventory_header-article-codigo-barras-Codigos'>

                    <div className='inventory_header-article-codigo-barras-codigoOne'>
                        <p id='lblCodigoBarrasOne'>Código Barras</p>
                        <div className='inventory_header-article-codigo-barras-codigoOne-input'>
                            <input name='codigoBarrasOne' id='txtCodigoBarrasOne'/>
                        </div>
                    </div>

                    <div className='inventory_header-article-codigo-barras-codigoTwo'>
                        <p id='lblCodigoBarrasTwo'>Código Barras #2</p>
                        <div className='inventory_header-article-codigo-barras-codigoTwo-input'>
                            <input name='codigoBarrasOne' id='txtCodigoBarrasTwo'/>
                        </div>
                    </div>

                    <div className='inventory_header-article-codigo-barras-codigoThree'>
                        <p id='lblCodigoBarrasThree'>Código Barras #3</p>
                        <div className='inventory_header-article-codigo-barras-codigoThree-input'>
                            <input name='codigoBarrasOne' id='txtCodigoBarrasThree'/>
                        </div>
                    </div>

                </div>       

                <div className='inventory_header-article-codigo-barras-checks'>

                    <div className='inventory_header-article-codigo-barras-checks-mostrar'>
                        <div className="inventory_header-article-codigo-barras-checks-mostrar-input"> 
                            <input type="checkbox" id="checkMostrar" name="mostrar" value="mostrar" />
                        </div>
                        <label for="checkMostrar" id="lblMostrar">Mostrar</label>
                    </div>

                    <div className='inventory_header-article-codigo-barras-checks-rebaja'>
                        <div className="inventory_header-article-codigo-barras-checks-rebaja-input"> 
                            <input type="checkbox" id="checkRebaja" name="rebaja" value="rebaja" />
                        </div>
                        <label for="checkRebaja" id="lblRebaja">Rebaja otro Artículo</label>
                    </div>

                </div>

            </div>

            <div className='inventory_header-article-familias'>
                <p>Familias</p>
            </div>

            <div className='inventory_header-article-last-line'>
                <p>Pantalla</p>
            </div>

        </div>


  )
}
