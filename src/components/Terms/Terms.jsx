import { TermsBody } from './termsBody/TermsBody';
import { TermsIcons } from './TermsIcons';

export const Terms = () => {
    return (
        <div className='terms_main'>

            <div className='terms_main-header'>
                <p id="lblTitleTerms">Condicciones de Uso Firmado Contado</p>
            </div>

            <div className='terms_main-body'>
                <TermsBody />
            </div>

            <div className='terms_main-icons'>
                <TermsIcons />
            </div>

        </div>
    )
}
