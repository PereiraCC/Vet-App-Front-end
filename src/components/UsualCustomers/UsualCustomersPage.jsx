import { UsualCustomersBody } from './UsualCustomersBody';
import { UsualCustomersHeader } from './UsualCustomersHeader';
import { UsualCustomersIcons } from './UsualCustomersIcons';

export const UsualCustomersPage = () => {
    return (
        <div className="usual_customers-main">

            <div className="usual_customers-header">
                <UsualCustomersHeader />
            </div>

            <div className="usual_customers-body">
                <UsualCustomersBody />
            </div>

            <div className="usual_customers-footer">
                <UsualCustomersIcons />
            </div>
        </div>
    )
}
