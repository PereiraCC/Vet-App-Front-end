
export const CloseCashApertura = () => {
    return (
        <div className='closeCash_apertura-main'>

            <div className='closeCash_apertura-titles'>
                <p>Apertura</p>
            </div>

            <div className='closeCash_apertura-inputs'>
                
                <div className='closeCash_apertura-inputs-numero'>
                    <p id='lblNumeroCash'>Número</p>
                    <input type='text' id='txtNumeroCash' name='numeroCash' value='0'/>
                </div>

                <div className='closeCash_apertura-inputs-fechaHora'>
                    <p id='lblFechaHoraCash'>Fecha / Hora</p>
                    <input type='text' id='txtFechaHoraCash' name='FechaHoraCash' />
                </div>

            </div>

        </div>
    )
}
