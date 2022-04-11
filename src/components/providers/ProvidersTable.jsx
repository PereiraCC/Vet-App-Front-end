
export const ProvidersTable = () => {
    return (

        <div className="providers_table-main">

            <div className="providers_table-title">
              <p id="lblTitleProviders">Datos Bancarios del Proveedor</p>
            </div>

            <div className="providers_table-table">
                <table className="providers_table-main-table">
                    <tr>
                        <th className="providers_table-table-header-p">P</th>
                        <th className="providers_table-table-header-tipo">Tipo</th>
                        <th className="providers_table-table-header-banco">Banco</th>
                        <th className="providers_table-table-header-cuenta">Cuenta</th>
                        <th className="providers_table-table-header-moneda">Moneda</th>
                    </tr>
                    <tr>
                        <td className="providers_table-table-p">test</td>
                        <td className="providers_table-table-tipo">test</td>
                        <td className="providers_table-table-banco">test</td>
                        <td className="providers_table-table-cuenta">test</td>
                        <td className="providers_table-table-moneda">test</td>
                    </tr>
                    <tr>
                        <td className="providers_table-table-p">test</td>
                        <td className="providers_table-table-tipo">test</td>
                        <td className="providers_table-table-banco">test</td>
                        <td className="providers_table-table-cuenta">test</td>
                        <td className="providers_table-table-moneda">test</td>
                    </tr>
                </table>
            </div>

        </div>
    )
}
