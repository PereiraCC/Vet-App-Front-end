import { PaysBodyTabs } from "./PaysBodyTabs"

export const PaysBody = () => {
    return (
        <div className='pays_body-main'>

            <div className='pays_body-table'>
                
                <p id='lblFacturasPaysBody'>Facturas Pendiente de Pago</p>

                <div className='pays_body-table-main'>

                    <table className='pays_body-table-table'>
                        <thead>
                            <tr>
                                <th className='pays_body-table-header-numeroFactura'>Factura</th>
                                <th className='pays_body-table-header-fecha'>Fecha</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='pays_body-table-numeroFactura'>test</td>
                                <td className='pays_body-table-fecha'>test</td>
                            </tr>
                        </tbody>
                    </table>

                </div>

            </div>

            <div className='pays_body-tabs'>
                
                <div className='pays_body-tabs-tab'>
                    <PaysBodyTabs />
                </div>

                <div className='pays_body-tabs-body'>
                    <p>Body</p>
                </div>

            </div>

        </div>
    )
}
