import { useDispatch, useSelector } from 'react-redux';

import { SelectTabCustomers } from '../../../actions/customers';

export const CustomersBodyTabs = () => {

    const dispatch = useDispatch();

    const state = useSelector( state => state.customers );
    const { currentTabCustomers } = state;

    const handleSelectTabCustomers = (nameTab) => {
        dispatch( SelectTabCustomers( nameTab ) );
    }

    return (
        <ul>
            
            <li className="customers-tabs">
                <button 
                    className={currentTabCustomers == 'DatosGenerales' ? "customers-tab active" : "customers-tab"}
                    onClick={ () => handleSelectTabCustomers('DatosGenerales') }
                >
                    Datos Generales
                </button>
            </li>

            <li className="customers-tabs">
                <button 
                    className={currentTabCustomers == 'CreditoDescuento' ? "customers-tab active" : "customers-tab"}
                    onClick={ () => handleSelectTabCustomers('CreditoDescuento') }
                >
                    Crédito y Descuento
                </button>
            </li>

            <li className="customers-tabs">
                <button 
                    className={currentTabCustomers == 'EncargadoCompras' ? "customers-tab active" : "customers-tab"}
                    onClick={ () => handleSelectTabCustomers('EncargadoCompras') }
                >
                    Encargado de Compras
                </button>
            </li>

            <li className="customers-tabs">
                <button 
                    className={currentTabCustomers == 'ReferenciasBancarias' ? "customers-tab active" : "customers-tab"}
                    onClick={ () => handleSelectTabCustomers('ReferenciasBancarias') }
                >
                    Referencias Bancarias
                </button>
            </li>

            <li className="customers-tabs">
                <button 
                    className={currentTabCustomers == 'ReferenciasComerciales' ? "customers-tab active" : "customers-tab"}
                    onClick={ () => handleSelectTabCustomers('ReferenciasComerciales') }
                >
                    Referencias Comerciales
                </button>
            </li>

            <li className="customers-tabs">
                <button 
                    className={currentTabCustomers == 'CartaExoneracion' ? "customers-tab active" : "customers-tab"}
                    onClick={ () => handleSelectTabCustomers('CartaExoneracion') }
                >
                    Carta Exconeración
                </button>
            </li>

        </ul>
    )
}
