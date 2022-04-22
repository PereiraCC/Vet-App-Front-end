
export const CloseCashPeriodo = () => {
    return (
        <div className='closeCash_periodo-main'>

            <div className='closeCash_periodo-title'>
                <p>Periodo</p>
            </div>

            <div className='closeCash_periodo-inputs'>

                <div className='closeCash_periodo-inputs-codigo'>
                    <p id='lblCodigoCajeroCash'>Código Cajero</p>
                    <input type='text' id='txtCodigoCajeroCash' name='codigoCajeroCash' />
                </div>

                <div className='closeCash_periodo-inputs-nombre'>
                    <button id='btnF1Cash'>F1</button>
                    <p id='lblNombreCash'>Nombre</p>
                </div>

                <div className='closeCash_periodo-inputs-fecha'>
                    <p id='lblFechaCierreCash'>Fecha Cierre</p>
                    <input type='date' id='txtFechaCierreCash' name='FechaCierreCash' />
                </div>

            </div>

        </div>
    )
}
