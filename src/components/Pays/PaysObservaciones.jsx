
export const PaysObservaciones = () => {
    return (
        <div className='pays_observaciones-main'>

            <div className='pays_observaciones-obser'>

                <p id='lblObservacionesPays'>Observaciones</p>
                <textarea id="txtObservacionesPays" name="observacionesPays" rows="4" cols="50"></textarea>

            </div>

            <div className='pays_observaciones-saldos'>
                
                <p id='lblTotalSaldosPays'>Saldos de la cuenta</p>

                <div className='pays_observaciones-saldos-body'>
                    
                    <div className='pays_observaciones-saldos-body-saldoAnt'>
                        <p id='lblSaldoAntPays'>Saldo Anterior</p>
                        <input id="txtSaldoAntPays" name="saldoAntPays" type="text" />
                    </div>

                    <div className='pays_observaciones-saldos-body-saldoAct'>
                        <p id='lblSaldoActPays'>Saldo Actual</p>
                        <input id="txtSaldoActPays" name="saldoActPays" type="text" />
                    </div>

                    <div className='pays_observaciones-saldos-body-montoRecibidos'>
                        <p id='lblMontoRecibidosPays'>Monto Recibidos</p>
                        <input id="txtMontoRecibidosPays" name="montoRecibidosPays" type="text" />
                    </div>

                </div>

            </div>

        </div>
    )
}
