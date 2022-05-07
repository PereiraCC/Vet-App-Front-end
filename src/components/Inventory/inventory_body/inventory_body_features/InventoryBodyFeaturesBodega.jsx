
export const InventoryBodyFeaturesBodega = () => {
    return (
        <div className='inventory_body-featuresBodega'>

            {/* <div className='inventory_body-featuresBodega-inputs'>
                
                <div className='inventory_body-featuresBodega-inputs-nombre'>
                    <p id='lblNombreFeaturesBodegaInv'>Nombre Bodega</p>
                    <input type='text' name='nombreFeaturesBodegaInv' id='txtNombreFeaturesBodegaInv'/>
                </div>

                <div className='inventory_body-featuresBodega-inputs-existencia'>
                    <p id='lblExistenciaFeaturesBodegaInv'>Existencia</p>
                    <input type='text' name='existenciaFeaturesBodegaInv' id='txtExistenciaFeaturesBodegaInv'/>
                </div>

                <button className='inventory_body-featuresBodega-inputs-btn'>Agregar</button>

            </div> */}

            <div className='inventory_body-featuresBodega-table'>
                
                <table className='inventory_body-featuresBodega-table-main'>
                    <thead>
                        <tr>
                            <th className='inventory_body-featuresBodega-table-header-nombre'>Nombre Bodega</th>
                            <th className='inventory_body-featuresBodega-table-header-existencia'>Existencias</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='inventory_body-featuresBodega-table-nombre'>test</td>
                            <td className='inventory_body-featuresBodega-table-existencia'>test</td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </div>
    )
}
