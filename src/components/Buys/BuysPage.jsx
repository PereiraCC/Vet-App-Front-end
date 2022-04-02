import { BuysHeader } from './BuysHeader';
import { BuysProveedor } from './BuysProveedor';

export const BuysPage = () => {
    return (

        <div className='buys buys_main'>

            <div className='buys_header'>
                <BuysHeader />
            </div>

            <div className='buys_proveedor'>
                <BuysProveedor />
            </div>

            <div className='buys_headerFactura'>
                <p>Header Factura</p>
            </div>

            <div className='buys_ArticulosDetalleTable'>
                <p>Articulos Detalle table</p>
            </div>

            <div className='buys_icons'>
                <p>Icons</p>
            </div>

            <div className='buys_footer'>
                <p>Footer</p>
            </div>

        </div>
    )
}
