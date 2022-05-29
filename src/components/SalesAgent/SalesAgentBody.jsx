
export const SalesAgentBody = () => {
    return (
        <div className='salesAgent_body-main'>

            <div className='salesAgent_body-inputs'>
                
                <div className='salesAgent_body-inputs-nombre'>
                    <p id='lblNombreSalesAgent'>Nombre</p>
                    <input type='text' id='txtNombreSalesAgent' name='nombreSalesAgent' />
                </div>

                <div className='salesAgent_body-inputs-cedula'>
                    <p id='lblcedulaSalesAgent'>Cédula</p>
                    <input type='text' id='txtcedulaSalesAgent' name='cedulaSalesAgent' />
                </div>

                <div className='salesAgent_body-inputs-telefono'>
                    <p id='lblTelefonoSalesAgent'>Teléfono</p>
                    <input type='text' id='txtTelefonoSalesAgent' name='telefonoSalesAgent' />
                </div>

                <div className='salesAgent_body-inputs-email'>
                    <p id='lblemailSalesAgent'>Email</p>
                    <input type='text' id='txtemailSalesAgent' name='emailSalesAgent' />
                </div>

                <div className='salesAgent_body-inputs-direccion'>
                    <p id='lblDireccionSalesAgent'>Dirección</p>
                    <input type='text' id='txtDireccionSalesAgent' name='direccionSalesAgent' />
                </div>

                <div className='salesAgent_body-inputs-btns'>

                    <div className='salesAgent_body-inputs-btns-check'>
                        <div className="salesAgent_body-inputs-btns-check-input">
                            <input type="checkbox" id="checkActivoSales" name="ActivoSales" value="ActivoSales" />
                        </div>
                        <label for="checkActivoSales" id="lblActivoSales">Activo</label>
                    </div>

                    <div className='salesAgent_body-inputs-btns-pd'>
                        <button id='btnPDSalesAgent'>PD</button>
                    </div>
                    
                </div>

            </div>

            <div className='salesAgent_body-table'>
                
                <p id='lblListadoSalesAgent'>Listado</p>

                <div className='salesAgent_body-table-main'>

                    <table className='salesAgent_body-table-table'>
                        <thead>
                            <tr>
                                <th className='repayment_table-header-id'>ID</th>
                                <th className='repayment_table-header-nombre'>Nombre</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='repayment_table-id'>test</td>
                                <td className='repayment_table-nombre'>test</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    )
}
