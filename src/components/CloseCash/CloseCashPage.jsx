import { CloseCashApertura } from './CloseCashApertura';
import { CloseCashCierreCaja } from './CloseCashCierreCaja';
import { CloseCashGeneral } from './CloseCashGeneral';
import { CloseCashPeriodo } from './CloseCashPeriodo';

export const CloseCashPage = () => {
    return (
        
        <div className='closeCash_main'>

            <div className='closeCash_left-box'>
                
                <div className='closeCash_left-box-periodo'>
                    <CloseCashPeriodo />
                </div>

                <div className='closeCash_left-box-apertura'>
                    <CloseCashApertura />
                </div>

                <div className='closeCash_left-box-general'>
                    <CloseCashGeneral />
                </div>

            </div>

            <div className='closeCash_right-box'>
                
                <div className='closeCash_right-box-cierre'>
                    <CloseCashCierreCaja />
                </div>

                <div className='closeCash_right-box-detalle-tarjetas'>
                    <p>Detalle tarjetas</p>
                </div>

                <div className='closeCash_right-box-detalle-operaciones'>
                    <p>Detalle operaciones</p>
                </div>

            </div>

        </div>
    )
}
