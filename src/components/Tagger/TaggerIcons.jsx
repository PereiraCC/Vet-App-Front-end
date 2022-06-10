import { FaSearch } from 'react-icons/fa';
import { ImCancelCircle} from 'react-icons/im';

export const TaggerIcons = () => {
    return (
        <div className='tagger_icons-main'>

            <div className='tagger_icons-icon-Buscar'>
                <div className='tagger_icons-icon-Buscar-icon'>
                    <FaSearch id='iconBusTagger'/>
                </div>
                <p id='lblBuscarTagger'>Buscar</p>
            </div>

            <div className='tagger_icons-icon-cerrar'>
                <div className='tagger_icons-icon-cerrar-icon'>
                    <ImCancelCircle id='iconCerrarTagger'/>
                </div>
                <p id='lblCerrarTagger'>Cerrar</p>
            </div>

        </div>
    )
}
