import { TakeBody } from './TakeBody';
import { TakeIcons } from './TakeIcons';

export const TakePage = () => {
    return (
        <div className='take_main'>

            <div className='take_header'>
                <p id='lblTitleTake'>Toma por Proveedor</p>
            </div>

            <div className='take_body'>
                <TakeBody />
            </div>

            <div className='take_footer'>
                <TakeIcons />
            </div>
        </div>
    )
}
