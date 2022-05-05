
export const InventoryBodyFeaturesRelacionados = () => {
    return (

        <div className='inventory_body-featuresRelacionados'>

            <div className='inventory_body-featuresRelacionados-inputs'>
                
                <div className='inventory_body-featuresRelacionados-inputs-codigo'>
                    <p id='lblCodigoFeaturesRelacionadosInv'>Codigo</p>
                    <input type='text' name='codigoFeaturesRelacionadosInv' id='txtCodigoFeaturesRelacionadosInv'/>
                </div>

                <div className='inventory_body-featuresRelacionados-inputs-descrip'>
                    <p id='lblDescripFeaturesRelacionadosInv'>Descripción</p>
                    <input type='text' name='descripFeaturesRelacionadosInv' id='txtDescripFeaturesRelacionadosInv'/>
                </div>

                <div className='inventory_body-featuresRelacionados-inputs-cantidad'>
                    <p id='lblCantidadFeaturesRelacionadosInv'>Cantidad</p>
                    <input type='text' name='cantidadFeaturesRelacionadosInv' id='txtCantidadFeaturesRelacionadosInv'/>
                </div>

                <button className='inventory_body-featuresRelacionados-inputs-btn'>Agregar</button>

            </div>

            <div className='inventory_body-featuresRelacionados-table'>

                <table className='inventory_body-featuresRelacionados-table-main'>
                    <thead>
                        <tr>
                            <th className='inventory_body-featuresRelacionados-table-header-codigo'>Codigo</th>
                            <th className='inventory_body-featuresRelacionados-table-header-descrip'>Descripción</th>
                            <th className='inventory_body-featuresRelacionados-table-header-cantidad'>Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='inventory_body-featuresRelacionados-table-codigo'>test</td>
                            <td className='inventory_body-featuresRelacionados-table-descrip'>test</td>
                            <td className='inventory_body-featuresRelacionados-table-cantidad'>test</td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </div>
    )
}
