import { UnifyCodeBody } from './UnifyCodeBody';
import { UnifyCodeIcons } from './UnifyCodeIcons';

export const UnifyCode = () => {
    return (
        <div className='unifyCode-main'>

            <div className='unifyCode-title'>
                <p id='lblTitleUnifyCode'>Unir Codigo Entre Puntos de Venta</p>
            </div>

            <div className='unifyCode-body'>
                <UnifyCodeBody />
            </div>

            <div className='unifyCode-icons'>
                <UnifyCodeIcons />
            </div>

        </div>
    )
}
