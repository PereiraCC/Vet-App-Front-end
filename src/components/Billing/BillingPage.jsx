import { BillingConditions } from './BillingConditions'
import { BillingHeader } from './BillingHeader'
import { BillingHeaderCustomer } from './BillingHeaderCustomer'
import { BillingItems } from './BillingItems'
import { BillingTotals } from './BillingTotals'

export const BillingPage = () => {
  return (

      <div className='billing billing_main'>

        <div className='billing_header'>
            <BillingHeader />
        </div>

        <div className='billing_header-customer'>
            <BillingHeaderCustomer />
        </div>

        <div className='billing_header-conditions'>
            <BillingConditions />
        </div>

        <div className='billing_totals'>
            <BillingTotals />
        </div>

        <div className='billing_items'>
            <BillingItems />
        </div>

      </div>
  )
}
