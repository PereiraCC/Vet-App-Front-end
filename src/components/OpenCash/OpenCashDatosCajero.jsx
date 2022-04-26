
export const OpenCashDatosCajero = () => {
    return (
        <div className='openCash_datosCajero-main'>
            
            <div className='openCash_datosCajero-title'>
                <p id='lblOpenCash_datosCajeroTitle'>Datos del Cajero</p>
            </div>

            <div className='openCash_datosCajero-inputs'>
                
                <div className='openCash_datosCajero-inputs-cajero'>
                    <p id='lblCajeroOpenCash'>Cajero(a)</p>
                    <input type='text' name='openCashCajero1' id='txtOpenCash_datosCajeroCajero1' />
                    <input type='text' name='openCashCajero2' id='txtOpenCash_datosCajeroCajero2' />
                </div>

                <div className='openCash_datosCajero-inputs-nCaja'>
                    <p id='lblNCajaOpenCash'>Nº Caja</p>
                    <select id='cboNCajaOpenCash'>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                    </select>
                </div>

            </div>

        </div>
    )
}
