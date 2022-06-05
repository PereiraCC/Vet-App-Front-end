import { TaxClaimBody } from './TaxClaimBody';
import { TaxClaimIcons } from './TaxClaimcons';

export const TaxClaimPage = () => {
    return (
        <div className='taxClaim_main'>

            <div className='taxClaim_header'>
                <p id='lblTitleTaxClaim'>Pre Toma Fisica General</p>
            </div>

            <div className='taxClaim_body'>
                <TaxClaimBody />
            </div>

            <div className='taxClaim_footer'>
                <TaxClaimIcons />
            </div>
        </div>
    )
}