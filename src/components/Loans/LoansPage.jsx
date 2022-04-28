import { LoansDatosProducto } from './LoansDatosProducto';
import { LoansDatosTraslado } from './LoansDatosTraslado';

export const LoansPage = () => {
    return (
        <div className='loans_main'>

            <div className='loans_header'>
                <p id='lblLoansTitle'>Préstamos de productos</p>
            </div>

            <div className='loans_datosTraslado'>
                <LoansDatosTraslado />
            </div>

            <div className='loans_datosProductos'>
                <LoansDatosProducto />
            </div>

            <div className='loans_icons'>
                <p>icons</p>
            </div>

        </div>
    )
}
