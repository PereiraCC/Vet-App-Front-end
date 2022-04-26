
export const RepaymentTable = () => {
    return (
        <div className='repayment_table-main'>

            <table className='repayment_table-table'>
                <thead>
                    <tr>
                        <th className='repayment_table-header-codigo'>Código</th>
                        <th className='repayment_table-header-descrip'>Descripción</th>
                        <th className='repayment_table-header-cantDev'>Cant. Dev</th>
                        <th className='repayment_table-header-precioFlete'>Precio Flete</th>
                        <th className='repayment_table-header-precioOtros'>Precio Otros</th>
                        <th className='repayment_table-header-precioUnit'>Precio Unit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='repayment_table-codigo'>test</td>
                        <td className='repayment_table-descrip'>test</td>
                        <td className='repayment_table-cantDev'>test</td>
                        <td className='repayment_table-precioFlete'>test</td>
                        <td className='repayment_table-precioOtros'>test</td>
                        <td className='repayment_table-precioUnit'>test</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}
