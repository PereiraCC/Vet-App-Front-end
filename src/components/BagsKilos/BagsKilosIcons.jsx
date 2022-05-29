import { FaSearch } from 'react-icons/fa';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { ImCancelCircle} from 'react-icons/im';

export const BagsKilosIcons = () => {
    return (
        <div className='bagsKilos_icons-main'>

            <div className='bagsKilos_icons-icon-Buscar'>
                <div className='bagsKilos_icons-icon-Buscar-icon'>
                    <FaSearch id='iconBusBagsKilos'/>
                </div>
                <p id='lblBuscarBagsKilos'>Buscar</p>
            </div>

            <div className='bagsKilos_icons-icon-anular'>
                <div className='bagsKilos_icons-icon-anular-icon'>
                    <RiDeleteBin2Fill id='iconAnularBagsKilos'/>
                </div>
                <p id='lblAnularBagsKilos'>Anular</p>
            </div>

            <div className='bagsKilos_icons-icon-cerrar'>
                <div className='bagsKilos_icons-icon-cerrar-icon'>
                    <ImCancelCircle id='iconCerrarBagsKilos'/>
                </div>
                <p id='lblCerrarBagsKilos'>Cerrar</p>
            </div>

        </div>
    )
}
