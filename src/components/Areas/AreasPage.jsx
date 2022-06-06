import { AreasBody } from './AreasBody';
import { AreasIcons } from './AreasIcons';

export const AreasPage = () => {
    return (
        <div className='areas_main'>

            <div className='areas_header'>
                <p id='lblTitleAreas'>Registro de Areas</p>
            </div>

            <div className='areas_body'>
                <AreasBody />
            </div>

            <div className='areas_footer'>
                <AreasIcons />
            </div>
        </div>
    )
}
