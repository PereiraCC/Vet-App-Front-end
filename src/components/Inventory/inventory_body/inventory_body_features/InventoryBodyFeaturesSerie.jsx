
export const InventoryBodyFeaturesSerie = () => {
    return (
        <div className='inventory_body-featuresSerie'>

            <div className='inventory_body-featuresSerie-check'>

                <div className="inventory_body-featuresSerie-check-input"> 
                    <input type="checkbox" id="checkNSerie" name="NSerie" value="NSerie" />
                </div>
                <label for="checkNSerie" id="lblNSerieInventory">Tiene Nº de serie</label>

            </div>

            <div className='inventory_body-featuresSerie-table'>
                
                <table className='inventory_body-featuresSerie-table-main'>
                    <thead>
                        <tr>
                            <th className='inventory_body-featuresSerie-table-header-serie'>Serie</th>
                            <th className='inventory_body-featuresSerie-table-header-year'>Año</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='inventory_body-featuresSerie-table-serie'>test</td>
                            <td className='inventory_body-featuresSerie-table-year'>test</td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </div>
    )
}
