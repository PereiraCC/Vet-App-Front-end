import { TranferPointsSaleBody } from './TranferPointsSaleBody';
import { TranferPointsSaleIcons } from './TranferPointsSaleIcons';

export const TransferPointsSale = () => {
    return (
        <div className='transferPointsSale-main'>

            <div className='transferPointsSale-header'>
                <p id='lblTitleTransferPointsSale'>Traslados entre Puntos de Venta</p>
            </div>

            <div className='transferPointsSale-body'>
                <TranferPointsSaleBody />
            </div>

            <div className='transferPointsSale-footer'>
                <TranferPointsSaleIcons />
            </div>
        </div>
    )
}
