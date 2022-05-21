import { useDispatch, useSelector } from 'react-redux';
import { SelectTabTerms } from '../../../actions/terms';


export const TermsBodyTabs = () => {

    const dispatch = useDispatch();

    const state = useSelector( state => state.terms );
    const { currentTabTerms } = state;

    const handleSelectTabTerms = (nameTab) => {
        dispatch( SelectTabTerms( nameTab ) );
    }

    return (
        <ul>
            
            <li className="terms-tabs">
                <button 
                    className={currentTabTerms == 'CondiccionesUso' ? "terms-tab active" : "terms-tab"}
                    onClick={ () => handleSelectTabTerms('CondiccionesUso') }
                >
                    Condicciones de Uso
                </button>
            </li>

            <li className="terms-tabs">
                <button 
                    className={currentTabTerms == 'Excepciones' ? "terms-tab active" : "terms-tab"}
                    onClick={ () => handleSelectTabTerms('Excepciones') }
                >
                    Excepciones
                </button>
            </li>

        </ul>
    )
}
