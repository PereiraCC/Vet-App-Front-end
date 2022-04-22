import React from 'react'

export const InventoryBodyBodega = () => {

    return (

        <div className='inventory_body-bodega-main'>
            
            <div className='inventory_body-bodega-titulo'>
                <p id='lblDatosBodega'>Datos de la Bodega</p>
            </div>

            <div className='inventory_body-bodega-firstLine'>
                
                <div className='inventory_body-bodega-firstLine-check'>
                    <div className="inventory_body-bodega-firstLine-check-input"> 
                        <input type="checkbox" id="checkConsignacion" name="consignacion" value="consignacion" />
                    </div>
                    <label for="checkConsignacion" id="lblConsignacion">Consignación</label>
                </div>

                <div className='inventory_body-bodega-firstLine-label'>
                    <p>Existencia</p>
                </div>

            </div>

            <div className='inventory_body-bodega-secondLine'>
                
                <div className='inventory_body-bodega-secondLine-cbo'>
                    <select name="bodega" id="cboBodega">
                        <option id='selectRed' value="red"></option>
                        <option id='selectGreen' value="green"></option>
                    </select>
                </div>

                <div className='inventory_body-bodega-secondLine-input'>
                    <input name='existencia' id='txtExistencia'/>
                </div>

            </div>

        </div>
    )
}
