
export const WarehouseOrdersBody = () => {
    return (
        <div className='warehouse_orders-body-main'>

            <div className='warehouse_orders-body-inputs'>
                
                <div className='warehouse_orders-body-inputs-firstLine'>
                    
                    <div className='warehouse_orders-body-inputs-firstLine-fecha'>
                        <p id='lblFechaWO'>Fecha Solicitud</p>
                        <input type='date' id='txtFechaWO' name='fechaWO'/>
                    </div>

                    <div className='warehouse_orders-body-inputs-firstLine-usuarioS'>
                        <p id='lblUsuariosSWO'>Usuario</p>
                        <input type='text' id='txtUsuariosSWO' name='usuariosSWO'/>
                    </div>

                </div>

                <div className='warehouse_orders-body-inputs-secondLine'>
                    
                    <div className='warehouse_orders-body-inputs-secondLine-codigo'>
                        <p id='lblCodigoWO'>Código</p>
                        <input type='text' id='txtCodigoWO' name='codigoWO'/>
                    </div>

                    <div className='warehouse_orders-body-inputs-secondLine-descripcion'>
                        <p id='lblDescripWO'>Descripción</p>
                        <input type='text' id='txtDescripWO' name='descripWO'/>
                    </div>

                </div>

                <div className='warehouse_orders-body-inputs-thirdLine'>
                    
                    <div className='warehouse_orders-body-inputs-thirdLine-cantidad'>
                        <p id='lblCantidadWO'>Cantidad Solicitar</p>
                        <input type='number' id='txtCantidadWO' name='cantidadWO'/>
                    </div>

                    <div className='warehouse_orders-body-inputs-thirdLine-obser'>
                        <p id='lblObserWO'>Observaciones</p>
                        <input type='text' id='txtObserWO' name='obserWO'/>
                    </div>

                    <button id='btnAddWO'>Agregar</button>

                </div>

            </div>

            <div className='warehouse_orders-body-table'>
                
                <table className='warehouse_orders-body-table-main'>
                    <thead>
                        <tr>
                            <th className='warehouse_orders-body-table-header-codArticulo'>Cod Artículo</th>
                            <th className='warehouse_orders-body-table-header-descrip'>Descripción</th>
                            <th className='warehouse_orders-body-table-header-cantidad'>Cantidad</th>
                            <th className='warehouse_orders-body-table-header-obser'>Observaciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='warehouse_orders-body-table-codArticulo'>test</td>
                            <td className='warehouse_orders-body-table-descrip'>test</td>
                            <td className='warehouse_orders-body-table-cantidad'>test</td>
                            <td className='warehouse_orders-body-table-obser'>test</td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </div>
    )
}
