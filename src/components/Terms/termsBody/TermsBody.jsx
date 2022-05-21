import { useSelector } from 'react-redux';

import { TermsBodyTabs } from './TermsBodyTabs';

import { TermsBodyCondiccionesUso } from './TermsBodyCondiccionesUso';
import { TermsBodyExcepciones } from './TermsBodyExcepciones';

export const TermsBody = () => {

    const state = useSelector( state => state.terms );
    const { currentTabTerms } = state;

    const redirectComponent = () => {

        switch (currentTabTerms) {

            case 'CondiccionesUso':
                return <TermsBodyCondiccionesUso />

            case 'Excepciones':
                return <TermsBodyExcepciones />
        
            default:
                break;
        }
    }

    return (
        <div className="terms_body-main">

            <div className="terms_body-tabs">
                <TermsBodyTabs />
            </div>

            <div className="terms_body-content">
                { 
                   redirectComponent()
                }
            </div>
            
        </div>
    )
}
