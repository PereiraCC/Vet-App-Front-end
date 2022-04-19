
export const CloseCashGeneral = () => {
    return (
        <div className='closeCash_general-main'>

            <div className='closeCash_general-title'>
                <p>General</p>
            </div>

            <div className='closeCash_general-inputs'>
                
                <div className='closeCash_general-inputs-titles'>
                    <p id='lblCajeroCash'>Cajero</p>
                    <p id='lblMedioCash'>/</p>
                    <p id='lblSistemaCash'>Sistema</p>
                </div>

                <div className='closeCash_general-inputs-efectivoColones'>

                    <div className='closeCash_general-inputs-efectivoColones-title'>
                        <p>Efectivo Colones</p> 
                    </div>
                    <div className='closeCash_general-inputs-efectivoColones-inputs'>
                        <input type='text' id='txtEfectivoColones1' name='efectivoColones1' value='0.00'/>
                        <input type='text' id='txtEfectivoColones2' name='efectivoColones2' value='0.00'/>
                    </div>

                </div>

                <div className='closeCash_general-inputs-efectivoDolares'>
                    
                    <div className='closeCash_general-inputs-efectivoDolares-title'>
                        <p>Efectivo Dolares</p> 
                    </div>
                    <div className='closeCash_general-inputs-efectivoDolares-inputs'>
                        <input type='text' id='txtefectivoDolares1' name='efectivoDolares1' value='0.00'/>
                        <input type='text' id='txtefectivoDolares2' name='efectivoDolares2' value='0.00'/>
                    </div>

                </div>

                <div className='closeCash_general-inputs-tarjetaColones'>
                    
                    <div className='closeCash_general-inputs-tarjetaColones-title'>
                        <p>Tarjetas Colones</p>
                    </div>
                    <div className='closeCash_general-inputs-tarjetaColones-inputs'>
                        <input type='text' id='txtTarjetaColones1' name='tarjetaColones1' value='0.00'/>
                        <input type='text' id='txtTarjetaColones2' name='tarjetaColones2' value='0.00'/>
                    </div>

                </div>

                <div className='closeCash_general-inputs-tarjetaDolares'>
                    
                    <div className='closeCash_general-inputs-tarjetaDolares-title'>
                        <p>Tarjetas Dolares</p>
                    </div>
                    <div className='closeCash_general-inputs-tarjetaDolares-inputs'>
                        <input type='text' id='txtTarjetaDolares1' name='tarjetaDolares1' value='0.00'/>
                        <input type='text' id='txtTarjetaDolares2' name='tarjetaDolares2' value='0.00'/>
                    </div>

                </div>

                <div className='closeCash_general-inputs-chequesColones'>
                    
                    <div className='closeCash_general-inputs-chequesColones-title'>
                        <p>Cheques Colones</p>
                    </div>
                    <div className='closeCash_general-inputs-chequesColones-inputs'>
                        <input type='text' id='txtChequesColones1' name='chequesColones1' value='0.00'/>
                        <input type='text' id='txtChequesColones2' name='chequesColones2' value='0.00'/>
                    </div>

                </div>

                <div className='closeCash_general-inputs-chequesDolares'>
                    
                    <div className='closeCash_general-inputs-chequesDolares-title'>
                        <p>Cheques Dolares</p>
                    </div>
                    <div className='closeCash_general-inputs-chequesDolares-inputs'>
                        <input type='text' id='txtChequesDolares1' name='chequesDolares1' value='0.00'/>
                        <input type='text' id='txtChequesDolares2' name='chequesDolares2' value='0.00'/>
                    </div>

                </div>

                <div className='closeCash_general-inputs-depositosColones'>
                    
                    <div className='closeCash_general-inputs-depositosColones-title'>
                        <p>Depositos Colones</p>
                    </div>
                    <div className='closeCash_general-inputs-depositosColones-inputs'>
                        <input type='text' id='txtDepositosColones1' name='depositosColones1' value='0.00'/>
                        <input type='text' id='txtDepositosColones2' name='depositosColones2' value='0.00'/>
                    </div>

                </div>

                <div className='closeCash_general-inputs-depositosDolares'>
                    
                    <div className='closeCash_general-inputs-depositosDolares-title'>
                        <p>Depositos Dolares</p>
                    </div>
                    <div className='closeCash_general-inputs-depositosDolares-inputs'>
                        <input type='text' id='txtDepositosDolares1' name='depositosDolares1' value='0.00'/>
                        <input type='text' id='txtDepositosDolares2' name='depositosDolares2' value='0.00'/>
                    </div>

                </div>

            </div>

        </div>
    )
}
