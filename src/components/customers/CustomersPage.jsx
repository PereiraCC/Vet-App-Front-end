import { CustomersBody } from './customersBody/CustomersBody';
import { CustomersHeader } from './CustomersHeader';
import { CustomersIcons } from './CustomersIcons';

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
                <CustomersIcons />
            </div>
        </div>
    )
}
