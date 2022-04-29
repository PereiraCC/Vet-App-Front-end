
export const CollectBody = () => {
    return (
        <div className='collect_body-main'>

            <div className='collect_body-firstLine'>
                
                <div className='collect_body-firstLine-datosCliente'>

                    <p id='lblDatosClienteCollect'>Datos del Cliente</p>

                    <div className='collect_body-firstLine-datosCliente-inputs'>

                        <div className='collect_body-firstLine-datosCliente-inputs-codigo'>
                            <p id='lblCodigoClienteCollect'>Código</p>
                            <input type='text' id='txtCodigoClienteCollect' name='codigoClienteCollect'/>
                        </div>

                        <div className='collect_body-firstLine-datosCliente-inputs-nombre'>
                            <p id='lblNombreClienteCollect'>Nombre del Cliente</p>
                            <input type='text' id='txtNombreClienteCollect' name='nombreClienteCollect'/>
                        </div>

                        <div className='collect_body-firstLine-datosCliente-inputs-filtrar'>
                            <div className="collect_body-firstLine-datosCliente-inputs-filtrar-input"> 
                                <input type="checkbox" id="checkFiltrarCollect" name="filtrarCollect" value="filtrarCollect" />
                            </div>
                            <label for="checkFiltrarCollect" id="lblFiltrarCollect">Filtrar incobrables</label>
                        </div>

                    </div>  
                </div>

                <div className='collect_body-firstLine-monedas'>
                    
                    <div className='collect_body-firstLine-monedas-moneda'>
                        <p id='lblMonedaCollect'>Moneda</p>
                        <select id='cboMonedaCollect' name='monedaCollect'>
                            <option value='COLON'>COLON</option>
                            <option value='DOLAR'>DOLAR</option>
                        </select>
                    </div>

                    <div className='collect_body-firstLine-monedas-tipoCambio'>
                        <p id='lblTipoCambioCollect'>Tipo Cambio</p>
                        <input type='text' id='txtTipoCambioCollect' name='tipoCambioCollect'/>
                    </div>

                    <div className='collect_body-firstLine-monedas-fecha'>
                        <p id='lblFechaCollect'>Fecha</p>
                        <input type="date" id="txtFechaCollect" name="fechaCollect"
                                min="01-01-2022" max="12-31-2022" />
                    </div>

                </div>

            </div>

            <div className='collect_body-secondLine'>
                <p id='lblCollectsecondLine'>SecondLine</p>
            </div>

        </div>
    )
}
