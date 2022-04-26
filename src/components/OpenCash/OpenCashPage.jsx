import { OpenCashDatosCajero } from './OpenCashDatosCajero';
import { OpenCashDetalleDenominacion } from './OpenCashDetalleDenominacion';
import { OpenCashDetalleTotal } from './OpenCashDetalleTotal';

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

            <div className='openCash_main-detalleDenominacion'>
                <OpenCashDetalleDenominacion />
            </div>

            <div className='openCash_main-icons'>
                <p>Icons</p>
            </div>

            <div className='openCash_main-footer'>
                <p>Footer</p>
            </div>

        </div>
    )
}
