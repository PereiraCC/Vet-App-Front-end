import { OpenCashDatosCajero } from './OpenCashDatosCajero';
import { OpenCashDetalleDenominacion } from './OpenCashDetalleDenominacion';
import { OpenCashDetalleTotal } from './OpenCashDetalleTotal';
import { OpenCashFooter } from './OpenCashFooter';
import { OpenCashIcons } from './OpenCashIcons';

export const OpenCashPage = () => {
    return (
        <div className='openCash_main'>

            <div className='openCash_main-title'>
                <p id='lblOpenCashTitle'>Registro de Apertura de Caja</p>
            </div>

            <div className='openCash_main-datosCajero'>
                <OpenCashDatosCajero />
            </div>

            <div className='openCash_main-detalleTotal'>
                <OpenCashDetalleTotal />
            </div>

            <div className='openCash_main-icons'>
                <OpenCashIcons />
            </div>

            <div className='openCash_main-footer'>
                <OpenCashFooter />
            </div>

        </div>
    )
}
