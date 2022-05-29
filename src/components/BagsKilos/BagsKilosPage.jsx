import { BagsKilosBody } from './BagsKilosBody';
import { BagsKilosIcons } from './BagsKilosIcons';

export const BagsKilosPage = () => {
    return (
        <div className='bagsKilos-main'>

            <div className='bagsKilos-header'>
                <p id='lblTitleBagsKilos'>Aumentar Existencia Otro</p>
            </div>

            <div className='bagsKilos-body'>
                <BagsKilosBody />
            </div>

            <div className='bagsKilos-footer'>
                <BagsKilosIcons />
            </div>

        </div>
    )
}
