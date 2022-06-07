
export const RaffleBody = () => {
    return (
        <div className='raffle_body-main'>

            <div className='raffle_body-inputs'>
                
                <div className='raffle_body-inputs-firstLine'>
                    <p id='lblDescripcionRaffleBody'>Descripción</p>
                    <input type='text' id='txtDescripcionRaffleBody' name='descripcionRaffleBody'/>
                </div>

                <div className='raffle_body-inputs-secondLine'>
                    
                    <div className='raffle_body-inputs-secondLine-fechaInicio'>
                        <p id='lblFechaInicioRaffleBody'>Fecha Inicio</p>
                        <input type='date' id='txtFechaInicioRaffleBody' name='fechaInicioRaffleBody'/>
                    </div>

                    <div className='raffle_body-inputs-secondLine-fechaFin'>
                        <p id='lblFechaFinRaffleBody'>Fecha Fin</p>
                        <input type='date' id='txtFechaFinRaffleBody' name='fechaFinRaffleBody'/>
                    </div>

                </div>

                <div className='raffle_body-inputs-thirdLine'>
                    <div className='raffle_body-inputs-thirdLine-monto'>
                        <p id='lblMontoRaffleBody'>Monto Min</p>
                        <input type='number' id='txtMontoRaffleBody' name='montoRaffleBody'/>
                    </div>

                    <div className='raffle_body-inputs-thirdLine-checks'>

                        <div className='raffle_body-inputs-thirdLine-checks-finalizada'>
                            <div className="raffle_body-inputs-thirdLine-checks-finalizada-input">
                                <input type="checkbox" id="checkFinalizadaRaffle" name="finalizadaRaffle" value="finalizadaRaffle" />
                            </div>
                            <label for="checkFinalizadaRaffle" id="lblFinalizadaRaffle">Finalizada</label>
                        </div>

                        <div className='raffle_body-inputs-thirdLine-checks-anulada'>
                            <div className="raffle_body-inputs-thirdLine-checks-anulada-input">
                                <input type="checkbox" id="checkAnuladaRaffle" name="anuladaRaffle" value="anuladaRaffle" />
                            </div>
                            <label for="checkAnuladaRaffle" id="lblAnuladaRaffle">Anulada</label>
                        </div>
                    </div>
                </div>

            </div>

            <div className='raffle_body-table'>
                
                <div className='raffle_body-table-table'>
                    <table className='raffle_body-table-table-main'>
                        <thead>
                            <tr>
                                <th className='raffle_body-table-table-header-proveedor'>Proveedor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='raffle_body-table-table-proveedor'>test</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='raffle_body-table-buttons'>
                    <button id='btnAddRaffle'>Agregar Proveedor</button>
                    <button id='btnDeleteRaffle'>Quitar Proveedor</button>
                </div>

            </div>
        </div>
    )
}
