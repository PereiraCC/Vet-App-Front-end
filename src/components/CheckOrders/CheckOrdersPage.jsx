import { CheckOrdersBody } from './CheckOrdersBody';
import { CheckOrdersHeader } from './CheckOrdersHeader';
import { CheckOrdersIcons } from './CheckOrdersIcons';

export const CheckOrdersPage = () => {
    return (
        <div className="checkOrders-main">

            <div className="checkOrders-header">
                <CheckOrdersHeader />
            </div>

            <div className="checkOrders-body">
                <CheckOrdersBody />
            </div>

            <div className="checkOrders-footer">
                <CheckOrdersIcons />
            </div>
        </div>
    )
}
