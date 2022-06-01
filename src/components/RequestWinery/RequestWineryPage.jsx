import { RequestWineryBody } from './RequestWineryBody';
import { RequestWineryIcons } from './RequestWineryIcons';

export const RequestWineryPage = () => {
    return (
        <div className='requestWinery-main'>

            <div className='requestWinery-header'>
                <p id='lblTitleRequestW'>Solicitud a Bodega</p>
            </div>

            <div className='requestWinery-body'>
                <RequestWineryBody />
            </div>

            <div className='requestWinery-footer'>
                <RequestWineryIcons />
            </div>
        </div>
    )
}
