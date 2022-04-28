
export const LoansDatosTraslado = () => {
    return (
        <div className='loans_datosTraslado-main'>

            <div className='loans_datosTraslado-header'>
                <p id='lblDatosTrasladoTitle'>Datos del Traslado</p>
            </div>

            <div className='loans_datosTraslado-firstLine'>

                <div className='loans_datosTraslado-firstLine-nBoleta'>
                    <p id='lblNBoletaLoans'>N° de Boleta</p>
                    <input type='text' id='txtNBoletaLoans' name='NBoletaLoans'/>
                </div>

                <div className='loans_datosTraslado-firstLine-boletaProvee'>
                    <p id='lblBoletaProveeLoans'>Boleta Proveedor</p>
                    <input type='text' id='txtBoletaProveeLoans' name='boletaProveeLoans'/>
                </div>

                <div className='loans_datosTraslado-firstLine-fecha'>
                    <p id='lblFechaLoans'>Fecha</p>
                    <input type="date" id="txtFechaLoans" name="fechaLoans"
                        min="01-01-2022" max="12-31-2022" />
                    <p id='lblResultLoans'>0</p>
                </div>

            </div>

            <div className='loans_datosTraslado-secondLine'>
               
                <div className='loans_datosTraslado-secondLine-destino'>
                    <p id='lblDestinoLoans'>Destino</p>
                    <select id='cboDestinoLoans' name='destinoLoans'>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </div>

                <div className='loans_datosTraslado-secondLine-origen'>
                    <p id='lblOrigenLoans'>Origen</p>
                    <select id='cboOrigenLoans' name='origenLoans'>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </div>

            </div>

            <div className='loans_datosTraslado-thirdLine'>
                
                <div className='loans_datosTraslado-thirdLine-transportista'>
                    <p id='lblTransportistaLoans'>Transportista</p>
                    <input type='text' id='txtTransportistaLoans' name='transportistaLoans'/>
                </div>

                <div className='loans_datosTraslado-thirdLine-radioButtons'>

                    <div className='loans_datosTraslado-thirdLine-radioButtons-radio1'>
                        <input type="radio" id="rbMePrestanLoans" name="mePrestanLoans" value="mePrestanLoans"/>
                        <label for="rbMePrestanLoans" id='lblRadioMePrestanLoans'>Me prestan</label>
                    </div>

                    <div className='loans_datosTraslado-thirdLine-radioButtons-radio2'>
                        <input type="radio" id="rbPrestarLoans" name="prestarLoans" value="prestarLoans"/>
                        <label for="rbPrestarLoans" id='lblRadioPrestarLoans'>Prestar</label>
                    </div>
                </div>

            </div>

        </div>
    )
}
