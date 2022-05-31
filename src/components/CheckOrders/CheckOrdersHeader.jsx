
export const CheckOrdersHeader = () => {
    return (
        <div className='checkOrders_header-main'>

            <div className='checkOrders_header-filtarFecha'>
                
                <div className='checkOrders_header-filtarFecha-check'>
                    <div className="checkOrders_header-filtarFecha-check-input">
                        <input type="checkbox" id="checkFiltrarFecha" name="filtrarFecha" value="filtrarFecha" />
                    </div>
                    <label for="checkFiltrarFecha" id="lblFiltrarFecha">Filtrar por Fecha</label>
                </div>

                <div className='checkOrders_header-filtarFecha-desde'>
                    <p id='lblDesdeFiltrarFechaTQ'>Desde</p>
                    <input type="date" id="txtDesdeFiltrarFechaTQ" name="desdeFiltrarFechaTQ" />
                </div>

                <div className='checkOrders_header-filtarFecha-hasta'>
                    <p id='lblHastaFiltrarFechaTQ'>Hasta</p>
                    <input type="date" id="txtHastaFiltrarFechaTQ" name="hastaFiltrarFechaTQ" />
                </div>

            </div>

            <div className='checkOrders_header-filtarEstado'>

                <div className='checkOrders_header-filtarEstado-check'>
                    <div className="checkOrders_header-filtarEstado-check-input">
                        <input type="checkbox" id="checkFiltrarFecha" name="filtrarFecha" value="filtrarFecha" />
                    </div>
                    <label for="checkFiltrarFecha" id="lblFiltrarFecha">Filtrar por Estado</label>
                </div>

                <div className='checkOrders_header-filtarEstado-inputs'>

                    <div className='checkOrders_header-filtarEstado-inputs-leftSide'>
                        
                        <div className='checkOrders_header-filtarEstado-inputs-leftSide-solicitado'>
                            <div className="checkOrders_header-filtarEstado-inputs-leftSide-solicitado-input">
                                <input type="checkbox" id="checkSolicitadoCK" name="solicitadoCK" value="solicitadoCK" />
                            </div>
                            <label for="checkSolicitadoCK" id="lblSolicitadoCK">Solicitado</label>
                        </div>

                        <div className='checkOrders_header-filtarEstado-inputs-leftSide-recibido'>
                            <div className="checkOrders_header-filtarEstado-inputs-leftSide-recibido-input">
                                <input type="checkbox" id="checkRecibidoCK" name="recibidoCK" value="recibidoCK" />
                            </div>
                            <label for="checkRecibidoCK" id="lblRecibidoCK">Recibido</label>
                        </div>

                        <div className='checkOrders_header-filtarEstado-inputs-leftSide-agotado'>
                            <div className="checkOrders_header-filtarEstado-inputs-leftSide-agotado-input">
                                <input type="checkbox" id="checkAgotadoCK" name="agotadoCK" value="agotadoCK" />
                            </div>
                            <label for="checkAgotadoCK" id="lblAgotadoCK">Agotado</label>
                        </div>

                    </div>

                    <div className='checkOrders_header-filtarEstado-inputs-rightSide'>

                        <div className='checkOrders_header-filtarEstado-inputs-leftSide-pedido'>
                            <div className="checkOrders_header-filtarEstado-inputs-leftSide-pedido-input">
                                <input type="checkbox" id="checkPedidoCK" name="pedidoCK" value="pedidoCK" />
                            </div>
                            <label for="checkPedidoCK" id="lblPedidoCK">Pedido</label>
                        </div>

                        <div className='checkOrders_header-filtarEstado-inputs-leftSide-anulada'>
                            <div className="checkOrders_header-filtarEstado-inputs-leftSide-anulada-input">
                                <input type="checkbox" id="checkAnuladaCK" name="anuladaCK" value="anuladaCK" />
                            </div>
                            <label for="checkAnuladaCK" id="lblAnuladaCK">Anulada</label>
                        </div>

                    </div>

                </div>

            </div>

            <div className='checkOrders_header-buttons'>

                <div className='checkOrders_header-buttons-checks'>

                    <div className='checkOrders_header-buttons-checks-pedidosBodega'>
                        <div className="checkOrders_header-buttons-check-pedidosBodega-inputs">
                            <input type="checkbox" id="checkPedidosBodega" name="pedidosBodega" value="pedidosBodega" />
                        </div>
                        <label for="checkPedidosBodega" id="lblPedidosBodega">Pedidos Bodega</label>
                    </div>

                    <div className='checkOrders_header-buttons-checks-pendientesSolicitar'>
                        <div className="checkOrders_header-buttons-check-pendientesSolicitar-inputs">
                            <input type="checkbox" id="checkPendientesSolicitar" name="pendientesSolicitar" value="pendientesSolicitar" />
                        </div>
                        <label for="checkPendientesSolicitar" id="lblPendientesSolicitar">Pendientes Solicitar</label>
                    </div>

                    <div className='checkOrders_header-buttons-checks-pendientesRecibir'>
                        <div className="checkOrders_header-buttons-check-pendientesRecibir-inputs">
                            <input type="checkbox" id="checkPendientesRecibir" name="pendientesRecibir" value="pendientesRecibir" />
                        </div>
                        <label for="checkPendientesRecibir" id="lblPendientesRecibir">Pendientes Recibir</label>
                    </div>
                </div>

                <div className='checkOrders_header-buttons-btn'>
                    <button id='btnExportarExcel'>Exportar Excel</button>
                </div>

            </div>

        </div>
    )
}
