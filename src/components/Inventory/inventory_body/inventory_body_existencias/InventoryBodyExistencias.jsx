
export const InventoryBodyExistencias = () => {
    
    return (
        <div className="inventory_body-existencias-main">

            <div className='inventory_body-existencias-titulo'>
                <p id='lblDatosexistencias'>Existencias</p>
            </div>

            <div className='inventory_body-existencias-titulos'>
                <p id='lblMinima'>Mínima</p>
                <p id='lblMedia'>Media</p>
                <p id='lblMaxima'>Máxima</p>
                <p id='lblActual'>Actual</p>
            </div>

            <div className='inventory_body-existencias-campos'>

                <div className="inventory_body-existencias-inputMinima">
                    <input name="minima" id="txtMinima"/>
                </div>

                <div className="inventory_body-existencias-inputMedia">
                    <input name="media" id="txtMedia"/>
                </div>

                <div className="inventory_body-existencias-inputMaxima">
                    <input name="maxima" id="txtMaxima"/>
                </div>

                <div className="inventory_body-existencias-inputActual">
                    <input name="actual" id="txtActual"/>
                </div>
                
            </div>
        </div>
    )
}
