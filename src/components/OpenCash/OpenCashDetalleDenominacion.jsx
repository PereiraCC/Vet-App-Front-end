
export const OpenCashDetalleDenominacion = () => {
    return (
        <div className='openCash_DetalleDenominacion-main'>

            <div className='openCash_DetalleDenominacion-title'>
                <p id='lblOpenCashDetalleDenominacionTitle'>Detalle Denominación</p>
            </div>

            <div className='openCash_DetalleDenominacion-table'>

                <table className='openCash_DetalleDenominacion-table'>
                    <thead>
                        <tr>
                            <th className='openCash_DetalleDenominacion-header-moneda'>Moneda</th>
                            <th className='openCash_DetalleDenominacion-header-tipo'>Tipo</th>
                            <th className='openCash_DetalleDenominacion-header-denominacion'>Denominacion</th>
                            <th className='openCash_DetalleDenominacion-header-cantidad'>Cantidad</th>
                            <th className='openCash_DetalleDenominacion-header-total'>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='openCash_DetalleDenominacion-moneda'>test</td>
                            <td className='openCash_DetalleDenominacion-tipo'>test</td>
                            <td className='openCash_DetalleDenominacion-denominacion'>test</td>
                            <td className='openCash_DetalleDenominacion-cantidad'>test</td>
                            <td className='openCash_DetalleDenominacion-total'>test</td>
                        </tr>
                    </tbody>
                </table>

            </div>

            <div className='openCash_DetalleDenominacion-inputs'>
                
                <div className='openCash_DetalleDenominacion-inputs-input1'>
                    <input type='text' name='input1DetalleDenominacion' id='txtinput1DetalleDenominacion' />
                </div>

                <div className='openCash_DetalleDenominacion-inputs-input2'>
                    <input type='text' name='input2DetalleDenominacion' id='txtinput2DetalleDenominacion' />
                </div>

            </div>

        </div>
    )
}
