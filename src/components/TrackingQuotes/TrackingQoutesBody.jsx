import { FaSyncAlt } from 'react-icons/fa';
import { ImBinoculars } from 'react-icons/im';

export const TrackingQoutesBody = () => {
    return (
        <div className='trackingQoutes_body-main'>

            <div className='trackingQoutes_body-header'>

                <div className='trackingQoutes_body-header-cambiarEstado'>

                    <div className='trackingQoutes_body-header-cambiarEstado-icon'>
                        <FaSyncAlt id='iconSync'/>
                    </div>
                    <div className='trackingQoutes_body-header-cambiarEstado-btn'>
                        <button id='btnCambiarEstadoTQ'>Cambiar Estado</button>
                    </div>

                </div>

                <div className='trackingQoutes_body-header-buscar'>
                    <p id='lblBuscarTQ'>Buscar</p>
                    <input id='txtBuscarTQ' type='text' name='buscarTQ'/>
                </div>

                <div className='trackingQoutes_body-header-abrirCotizacion'>

                    <div className='trackingQoutes_body-header-abrirCotizacion-icon'>
                        <ImBinoculars id='iconBinoculars'/>
                    </div>
                    <div className='trackingQoutes_body-header-abrirCotizacion-btn'>
                        <button id='btnAbrirCotizacionTQ'>Abrir Cotizacion</button>
                    </div>

                </div>

            </div>

            <div className='trackingQoutes_body-table'>

                <table className='trackingQoutes_body-table-main'>
                    <thead>
                        <tr>
                            <th className='trackingQoutes_body-header-cotizacion'>Cotización</th>
                            <th className='trackingQoutes_body-header-fecha'>Fecha</th>
                            <th className='trackingQoutes_body-header-nombreCliente'>Nombre Cliente</th>
                            <th className='trackingQoutes_body-header-total'>Total</th>
                            <th className='trackingQoutes_body-header-estadoActual'>Estado Actual</th>
                            <th className='trackingQoutes_body-header-contacto'>Contacto</th>
                            <th className='trackingQoutes_body-header-telefono'>Teléfono</th>
                            <th className='trackingQoutes_body-header-numeroFactura'>Número Factura</th>
                            <th className='trackingQoutes_body-header-montoFactura'>Monto Factura</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='trackingQoutes_body-cotizacion'>test</td>
                            <td className='trackingQoutes_body-fecha'>test</td>
                            <td className='trackingQoutes_body-nombreCliente'>test</td>
                            <td className='trackingQoutes_body-total'>test</td>
                            <td className='trackingQoutes_body-estadoActual'>test</td>
                            <td className='trackingQoutes_body-contacto'>test</td>
                            <td className='trackingQoutes_body-telefono'>test</td>
                            <td className='trackingQoutes_body-numeroFactura'>test</td>
                            <td className='trackingQoutes_body-montoFactura'>test</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='trackingQoutes_body-totals'>
                <p id='lblTotalsTQ'>Total Ventas</p>
                <input id='txtTotalsTQ' type='text' name='TotalsTQ'/>
            </div>

        </div>
    )
}
