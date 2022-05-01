import { useDispatch, useSelector } from 'react-redux';
import { SelectTabPays } from '../../../actions/pays';

export const PaysBodyTabs = () => {

    const dispatch = useDispatch();

    const state = useSelector( state => state.pays );
    const { currentTabPays } = state;

    const handleSelectTabPays = (nameTab) => {
        dispatch( SelectTabPays( nameTab ) );
    }

    return (
        <ul>
            <li className="pays-tabs">
                <button 
                    className={currentTabPays == 'DatosAbono' ? "pays-tab active" : "pays-tab"}
                    onClick={ () => handleSelectTabPays('DatosAbono') }
                >
                    Datos del Abono
                </button>
            </li>

            <li className="pays-tabs">
                <button 
                    className={currentTabPays == 'DetalleFactura' ? "pays-tab active" : "pays-tab"}
                    onClick={ () => handleSelectTabPays('DetalleFactura') }
                >
                    Detalle de la(s) Factura(s) a Abonar
                </button>
            </li>

        </ul>
    )
}
