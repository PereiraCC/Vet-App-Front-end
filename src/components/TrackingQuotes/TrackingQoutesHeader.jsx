
export const TrackingQoutesHeader = () => {
    return (
        <div className='trackingQoutes_header-main'>

            <div className='trackingQoutes_header-filtarFecha'>
                
                <div className='trackingQoutes_header-filtarFecha-check'>
                    <div className="trackingQoutes_header-filtarFecha-check-input">
                        <input type="checkbox" id="checkFiltrarFecha" name="filtrarFecha" value="filtrarFecha" />
                    </div>
                    <label for="checkFiltrarFecha" id="lblFiltrarFecha">Filtrar por Fecha</label>
                </div>

                <div className='trackingQoutes_header-filtarFecha-desde'>
                    <p id='lblDesdeFiltrarFechaTQ'>Desde</p>
                    <input type="date" id="txtDesdeFiltrarFechaTQ" name="desdeFiltrarFechaTQ" />
                </div>

                <div className='trackingQoutes_header-filtarFecha-hasta'>
                    <p id='lblHastaFiltrarFechaTQ'>Hasta</p>
                    <input type="date" id="txtHastaFiltrarFechaTQ" name="hastaFiltrarFechaTQ" />
                </div>

            </div>

            <div className='trackingQoutes_header-filtarEstado'>

                <div className='trackingQoutes_header-filtarEstado-check'>
                    <div className="trackingQoutes_header-filtarEstado-check-input">
                        <input type="checkbox" id="checkFiltrarFecha" name="filtrarFecha" value="filtrarFecha" />
                    </div>
                    <label for="checkFiltrarFecha" id="lblFiltrarFecha">Filtrar por Estado</label>
                </div>

                <div className='trackingQoutes_header-filtarEstado-inputs'>

                    <div className='trackingQoutes_header-filtarEstado-inputs-leftSide'>
                        
                        <div className='trackingQoutes_header-filtarEstado-inputs-leftSide-pendiente'>
                            <div className="trackingQoutes_header-filtarEstado-inputs-leftSide-pendiente-input">
                                <input type="checkbox" id="checkPendienteTQ" name="PendienteTQ" value="PendienteTQ" />
                            </div>
                            <label for="checkPendienteTQ" id="lblPendienteTQ">Pendiente de envio</label>
                        </div>

                        <div className='trackingQoutes_header-filtarEstado-inputs-leftSide-enviada'>
                            <div className="trackingQoutes_header-filtarEstado-inputs-leftSide-enviada-input">
                                <input type="checkbox" id="checkEnviadaTQ" name="EnviadaTQ" value="EnviadaTQ" />
                            </div>
                            <label for="checkEnviadaTQ" id="lblEnviadaTQ">Enviada sin confirma</label>
                        </div>

                        <div className='trackingQoutes_header-filtarEstado-inputs-leftSide-confirmada'>
                            <div className="trackingQoutes_header-filtarEstado-inputs-leftSide-confirmada-input">
                                <input type="checkbox" id="checkConfirmadaTQ" name="ConfirmadaTQ" value="ConfirmadaTQ" />
                            </div>
                            <label for="checkConfirmadaTQ" id="lblConfirmadaTQ">Confirmada</label>
                        </div>

                    </div>

                    <div className='trackingQoutes_header-filtarEstado-inputs-rightSide'>

                        <div className='trackingQoutes_header-filtarEstado-inputs-leftSide-revision'>
                            <div className="trackingQoutes_header-filtarEstado-inputs-leftSide-revision-input">
                                <input type="checkbox" id="checkRevisionTQ" name="RevisionTQ" value="RevisionTQ" />
                            </div>
                            <label for="checkRevisionTQ" id="lblRevisionTQ">Revision</label>
                        </div>

                        <div className='trackingQoutes_header-filtarEstado-inputs-leftSide-ganada'>
                            <div className="trackingQoutes_header-filtarEstado-inputs-leftSide-ganada-input">
                                <input type="checkbox" id="checkGanadaTQ" name="GanadaTQ" value="GanadaTQ" />
                            </div>
                            <label for="checkGanadaTQ" id="lblGanadaTQ">Ganada</label>
                        </div>

                        <div className='trackingQoutes_header-filtarEstado-inputs-leftSide-perdida'>
                            <div className="trackingQoutes_header-filtarEstado-inputs-leftSide-perdida-input">
                                <input type="checkbox" id="checkPerdidaTQ" name="PerdidaTQ" value="PerdidaTQ" />
                            </div>
                            <label for="checkPerdidaTQ" id="lblPerdidaTQ">Perdida</label>
                        </div>
                    </div>

                </div>

            </div>

            <div className='trackingQoutes_header-buttons'>

                <div className='trackingQoutes_header-buttons-check'>
                    <div className="trackingQoutes_header-buttons-check-inputs">
                        <input type="checkbox" id="checkInfoFact" name="InfoFact" value="InfoFact" />
                    </div>
                    <label for="checkInfoFact" id="lblInfoFact">Info Factura</label>
                </div>

                <div className='trackingQoutes_header-buttons-btn'>
                    <button id='btnFiltrarTQ'>Cargar Filtros</button>
                </div>

            </div>

        </div>
    )
}
