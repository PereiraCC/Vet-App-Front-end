
export const TermsBodyCondiccionesUso = () => {
    return (
        <div className='terms_body-condiccionesUso-main'>
            
            <div className='terms_body-condiccionesUso-title'>
                <h2 id='lblTitleTermsCondicciones'>Condiciones de uso</h2>
            </div>

            <div className='terms_body-condiccionesUso-first'>
                
                <div className='terms_body-condiccionesUso-first-tipos'>

                    <p id='lblTiposTermsCondicciones'>Tipos de facturas permitidas:</p>

                    <div className='terms_body-condiccionesUso-first-tipos-check'>
                        
                        <div className="terms_body-condiccionesUso-first-tipos-check-contado">
                            <div className="terms_body-condiccionesUso-first-tipos-check-contado-input">
                                <input type="checkbox" id="checkContado" name="contado" value="contado" />
                            </div>
                            <label for="checkContado" id="lblContadoTermsBody">Contado</label>
                        </div>

                        <div className="terms_body-condiccionesUso-first-tipos-check-pve">
                            <div className="terms_body-condiccionesUso-first-tipos-check-pve-input">
                                <input type="checkbox" id="checkpve" name="pve" value="pve" />
                            </div>
                            <label for="checkpve" id="lblpveTermsBody">PVE</label>
                        </div>

                    </div>

                </div>

                <div className='terms_body-condiccionesUso-first-monto'>

                    <p id='lblMontoTermsCondicciones'>Monto Maximo de la factura:</p>
                    <input type="text" id="txtMontoTermsCondicciones" name="montoTermsBody" />

                </div>

                <div className='terms_body-condiccionesUso-first-exigir'>
                    
                    <div className="terms_body-condiccionesUso-first-exigir-input">
                        <input type="checkbox" id="checkExigir" name="exigir" value="exigir" />
                    </div>
                    <label for="checkExigir" id="lblExigirTermsBody">Exigir Nombre de Cliente</label>

                </div>

            </div>

            <div className='terms_body-condiccionesUso-second'>
                
                <div className='terms_body-condiccionesUso-second-cliente'>
                    <p id='lblClienteTermsCondicciones'>Cantidad maxima por Cliente:</p>
                    <input type="text" id="txtClienteTermsCondicciones" name="clienteTermsCondicciones" />
                </div>

                <div className='terms_body-condiccionesUso-second-autoriza'>
                    <p id="lblAutorizaTermsCondicciones">Cantidad maxima por Autoriza:</p>
                    <input type="text" id="txtAutorizaTermsCondicciones" name="autorizaTermsCondicciones" />
                </div>

                <div className='terms_body-condiccionesUso-second-retira'>
                    <p id="lblRetiraTermsCondicciones">Cantidad maxima por Retira:</p>
                    <input type="text" id="txtRetiraTermsCondicciones" name="retiraTermsCondicciones" />
                </div>

            </div>

            <div className='terms_body-condiccionesUso-btn'>
                <button id='btnAceptarTermsCondicciones'>Aceptar</button>
            </div>

        </div>
    )
}
