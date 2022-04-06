import { BuysArticulos } from './BuysArticulos';
import { BuysHeader } from './BuysHeader';
import { BuysHeaderFactura } from './BuysHeaderFactura';
import { BuysIcons } from './BuysIcons';
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
                <BuysHeaderFactura />
            </div>

            <div className='buys_ArticulosDetalleTable'>
                <BuysArticulos />
            </div>

            <div className='buys_icons'>
                <BuysIcons />
            </div>

            <div className='buys_footer'>
                <p>Footer</p>
            </div>

        </div>
    )
}
