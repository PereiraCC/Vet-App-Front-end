import { HiDocumentAdd } from 'react-icons/hi';
import { FaRegSave, FaSearch } from 'react-icons/fa';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { ImCancelCircle} from 'react-icons/im';

export const UnifyCodeIcons = () => {
    return (
        <div className='unifyCode_icons-main'>

            <div className='unifyCode_icons-icon-nuevo'>
                <div className='unifyCode_icons-icon-nuevo-icon'>
                    <HiDocumentAdd id='iconNuevoUnifyCode'/>
                </div>
                <p id='lblNuevoUnifyCode'>Nuevo</p>
            </div>

            <div className='unifyCode_icons-icon-Buscar'>
                <div className='unifyCode_icons-icon-Buscar-icon'>
                    <FaSearch id='iconBusUnifyCode'/>
                </div>
                <p id='lblBuscarUnifyCode'>Buscar</p>
            </div>

            <div className='unifyCode_icons-icon-anular'>
                <div className='unifyCode_icons-icon-anular-icon'>
                    <RiDeleteBin2Fill id='iconAnularUnifyCode'/>
                </div>
                <p id='lblAnularUnifyCode'>Anular</p>
            </div>

            <div className='unifyCode_icons-icon-cerrar'>
                <div className='unifyCode_icons-icon-cerrar-icon'>
                    <ImCancelCircle id='iconCerrarUnifyCode'/>
                </div>
                <p id='lblCerrarUnifyCode'>Cerrar</p>
            </div>

        </div>
    )
}
