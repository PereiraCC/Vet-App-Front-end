import { MovementItemsBody } from './MovementItemsBody';
import { MovementItemsIcons } from './MovementItemsIcons';

export const MovementItems = () => {
    return (
        <div className='movementItems_main'>

            <div className='movementItems_titles'>
                <p id='lblTitleMovementItems'>Movimientos de Artículos</p>
            </div>

            <div className='movementItems_body'>
                <MovementItemsBody />
            </div>

            <div className='movementItems_icons'>
                <MovementItemsIcons />
            </div>

        </div>
    )
}
