import { PaysBody } from './PaysBody/PaysBody';
import { PaysDatosProveedor } from './PaysDatosProveedor';
import { PaysTable } from './PaysTable';

export const PaysPage = () => {
    return (
        <div className='pays_main'>

            <div className='pays_main-header'>
                <p id='lblAbonosPTitle'>Abonos a Proveedores</p>
            </div>

            <div className='pays_main-datosProveedor'>
                <PaysDatosProveedor />
            </div>

            <div className='pays_main-body'>
                <PaysBody />
            </div>

            <div className='pays_main-table'>
                <PaysTable />
            </div>

            <div className='pays_main-observaciones'>
                <p>Observaciones</p>
            </div>

            <div className='pays_main-icons'>
                <p>Icons</p>
            </div>

        </div>
    )
}
