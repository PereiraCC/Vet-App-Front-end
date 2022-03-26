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
                <p>Codigo barras</p>
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
