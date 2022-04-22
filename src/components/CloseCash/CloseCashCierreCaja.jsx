
export const CloseCashCierreCaja = () => {
    return (
        <div className='closeCash_cierreCaja-main'>

            <div className='closeCash_cierreCaja-title'>
                <p>Cierre Caja</p>
            </div>

            <div className='closeCash_cierreCaja-inputs'>
                
                <div className='closeCash_cierreCaja-inputs-left'>
                    
                    <div className='closeCash_cierreCaja-inputs-left-Fondo'>
                        <p id='lblFondoCash'>Fondo Caja</p>
                        <input type='text' id='txtFondoCash' name='fondoCash'/>
                    </div>

                    <div className='closeCash_cierreCaja-inputs-left-abonos'>
                        <p id='lblAbonosCash'>Abonos</p>
                        <input type='text' id='txtAbonosCash' name='abonosCash'/>
                    </div>

                    <div className='closeCash_cierreCaja-inputs-left-devoluciones'>
                        <p id='lblDevolucionesCash'>Devoluciones</p>
                        <input type='text' id='txtDevolucionesCash' name='devolucionesCash'/>
                    </div>

                    <div className='closeCash_cierreCaja-inputs-left-anulaciones'>
                        <p id='lblAnulacionesCash'>Anulaciones</p>
                        <input type='text' id='txtAnulacionesCash' name='anulacionesCash'/>
                    </div>

                    <div className='closeCash_cierreCaja-inputs-left-totalSistema'>
                        <p id='lblTotalSistemaCash'>Total Sistema</p>
                        <input type='text' id='txtTotalSistemaCash' name='totalSistemaCash'/>
                    </div>

                    <div className='closeCash_cierreCaja-inputs-left-diferencialCaja'>
                        <div className='closeCash_cierreCaja-inputs-left-diferencialCaja-titles'>
                            <p id='lblDiferencialCash'>Diferencial Caja</p>
                            <button id='btnDiferencialCash'>SUVESA</button>
                        </div>
                        <input type='text' id='txtDiferencialCash' name='diferencialCash'/>
                    </div>

                </div>

                <div className='closeCash_cierreCaja-inputs-right'>
                    
                    <div className='closeCash_cierreCaja-inputs-right-ventasContado'>
                        <p id='lblVentasContadoCash'>Ventas Contado</p>
                        <input type='text' id='txtVentasContadoCash' name='ventasContadoCash'/>
                    </div>

                    <div className='closeCash_cierreCaja-inputs-right-ventasCredito'>
                        <p id='lblVentasCreditoCash'>Ventas Crédito</p>
                        <input type='text' id='txtVentasCreditoCash' name='ventasCreditoCash'/>
                    </div>

                    <div className='closeCash_cierreCaja-inputs-right-entradasSalidas'>

                        <div className='closeCash_cierreCaja-inputs-right-entradas'>
                            <p id='lblEntradasCash'>Entradas</p>
                            <input type='text' id='txtEntradasCash' name='entradasCash'/>
                        </div>

                        <div className='closeCash_cierreCaja-inputs-right-salidas'>
                            <p id='lblSalidasCash'>Salidas</p>
                            <input type='text' id='txtSalidasCash' name='salidasCash'/>
                        </div>

                    </div>

                    <div className='closeCash_cierreCaja-inputs-right-totalCajero'>
                        <p id='lblTotalCajeroCash'>Total Cajero</p>
                        <input type='text' id='txtTotalCajeroCash' name='totalCajeroCash'/>
                    </div>

                    <div className='closeCash_cierreCaja-inputs-right-montoDepositar'>
                        <p id='lblMontoDepositarCash'>Monto a Depositar</p>
                        <input type='text' id='txtMontoDepositarCash' name='montoDepositarCash'/>
                    </div>

                </div>

            </div>

        </div>
    )
}
