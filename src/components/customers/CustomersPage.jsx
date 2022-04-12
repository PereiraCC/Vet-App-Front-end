import { CustomersBody } from "./customersBody/CustomersBody"
import { CustomersHeader } from "./CustomersHeader"

export const CustomersPage = () => {
    return (
        
        <div className="customers customers-main">

            <div className="customers-header">
                <CustomersHeader />
            </div>

            <div className="customers-body">
                <CustomersBody />
            </div>

            <div className="customers-footer">
                <p>Footer icons cliente</p>
            </div>
        </div>

    )
}
