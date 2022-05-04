import { CloseCashApertura } from './CloseCashApertura';
import { CloseCashCierreCaja } from './CloseCashCierreCaja';
import { CloseCashDetalleOperaciones } from './CloseCashDetalleOperaciones';
import { CloseCashDetalleTarjetas } from './CloseCashDetalleTarjetas';
import { CloseCashGeneral } from './CloseCashGeneral';
import { CloseCashIcons } from './CloseCashIcons';
import { CloseCashPeriodo } from './CloseCashPeriodo';

export const CloseCashPage = () => {
    return (
        
        <div className='closeCash_main'>

            <div className='closeCash_title'>
                <p id='lblCloseCashTitle'>Cierre de Caja</p>
            </div>

            <div className='closeCash_content'>

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
                        <CloseCashDetalleTarjetas />
                    </div>

                    <div className='closeCash_right-box-detalle-operaciones'>
                        <CloseCashDetalleOperaciones />
                    </div>

                </div>

            </div>

            <div className='closeCash_icons'>
                <CloseCashIcons />
            </div>

        </div>
    )
}
