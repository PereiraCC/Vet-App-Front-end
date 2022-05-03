
export const PaysAdjustmentDatosGenerales = () => {
    return (
        <div className='pays_adjustment-DatosGeneral-main'>

            <div className='pays_adjustment-DatosGeneral-firstLine'>
                
                <div className='pays_adjustment-DatosGeneral-firstLine-codigo'>
                    <p id='lblCodigoDatosGPaysT'>Código</p>
                    <input type='text' id='txtCodigoDatosGPaysT' name='codigoDatosGPaysT'/>
                </div>

                <div className='pays_adjustment-DatosGeneral-firstLine-nombre'>
                    <p id='lblNombreDatosGPaysT'>Nombre del Proveedor</p>
                    <input type='text' id='txtNombreDatosGPaysT' name='nombreDatosGPaysT'/>
                </div>

                <div className='pays_adjustment-DatosGeneral-firstLine-moneda'>
                    <p id='lblMonedaDatosGPaysT'>Moneda</p>
                    <select id='cboMonedaDatosGPaysT' name='monedaDatosGPaysT'>
                        <option value='COLON'>COLON</option>
                        <option value='DOLAR'>DOLAR</option>
                    </select>
                </div>

                <div className='pays_adjustment-DatosGeneral-firstLine-fecha'>
                    <p id='lblFechaDatosGPaysT'>Fecha</p>
                    <input type='date' id='txtFechaDatosGPaysT' name='fechaDatosGPaysT'/>
                </div>

            </div>

            <div className='pays_adjustment-DatosGeneral-secondLine'>
                
                <div className='pays_adjustment-DatosGeneral-secondLine-tipo'>

                    <p id='lblTipoNotaDatosGPaysT'>Tipo de Nota</p>

                    <div className='pays_adjustment-DatosGeneral-secondLine-tipo-check'>

                        <div className='pays_adjustment-DatosGeneral-secondLine-tipo-check-credito'>
                            <input type="radio" id="rdCreditoDatosGPaysT" name="type_billing" value="creditoDatosGPays"/>
                            <label for="rdCreditoDatosGPaysT" id='lblCreditoDatosGPaysT'>Crédito</label>
                        </div>

                        <div className='pays_adjustment-DatosGeneral-secondLine-tipo-check-debito'>
                            <input type="radio" id="rdDebitoDatosGPaysT" name="type_billing" value="DebitoDatosGPays"/>
                            <label for="rdDebitoDatosGPaysT" id='lblDebitoDatosGPaysT'>Débito</label>
                        </div>

                    </div>

                </div>

                <div className='pays_adjustment-DatosGeneral-secondLine-doc'>
                    <p id='lblDocDatosGPaysT'>Doc. Proveedor</p>
                    <input type='text' id='txtDocDatosGPaysT' name='docDatosGPaysT'/>
                </div>

                <div className='pays_adjustment-DatosGeneral-secondLine-observaciones'>
                    <p id='lblObservacionesDatosGPaysT'>Observaciones:</p>
                    <textarea 
                        id='txtObservacionesDatosGPaysT' 
                        name='observacionesDatosGPaysT'
                        cols='3'
                        rows='2'
                    />
                </div>

            </div>

        </div>
    )
}
