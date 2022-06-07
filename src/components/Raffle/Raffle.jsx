import { RaffleBody } from './RaffleBody';
import { RaffleIcons } from './RaffleIcons';

export const Raffle = () => {
    return (
        <div className='raffle_main'>

            <div className='raffle_header'>
                <p id='lblTitleRaffle'>Rifas</p>
            </div>

            <div className='raffle_body'>
                <RaffleBody />
            </div>

            <div className='raffle_footer'>
                <RaffleIcons />
            </div>
        </div>
    )
}