import { useSelector } from 'react-redux';

import { CustomersBodyTabs } from './CustomersBodyTabs';

import { CustomersBodyCreditoDescuento } from './CustomersBodyCreditoDescuento';
import { CustomersBodyDatosGenerales } from './CustomersBodyDatosGenerales';
import { CustomersBodyEncargadoCompras } from './CustomersBodyEncargadoCompras';
import { CustomersBodyReferenciasBancarias } from './CustomersBodyReferenciasBancarias';
import { CustomersBodyReferenciasComerciales } from './CustomersBodyReferenciasComerciales';
import { CustomersBodyCartaExoneracion } from './CustomersBodyCartaExoneracion';

export const CustomersBody = () => {

    const state = useSelector( state => state.customers );
    const { currentTabCustomers } = state;

    const redirectComponent = () => {

        switch (currentTabCustomers) {

            case 'DatosGenerales':
                return <CustomersBodyDatosGenerales />

            case 'CreditoDescuento':
                return <CustomersBodyCreditoDescuento />
            
            case 'EncargadoCompras':
                return <CustomersBodyEncargadoCompras />

            case 'ReferenciasBancarias':
                return <CustomersBodyReferenciasBancarias />

            case 'ReferenciasComerciales':
                return <CustomersBodyReferenciasComerciales />

            case 'CartaExoneracion':
                    return <CustomersBodyCartaExoneracion />
        
            default:
                break;
        }
    }

    return (
        <div className="customers_body-main">

            <div className="customers_body-tabs">
                <CustomersBodyTabs />
            </div>
            
            <div className="customers_body-content">
                { 
                   redirectComponent()
                }
            </div>
        </div>
    )
}
