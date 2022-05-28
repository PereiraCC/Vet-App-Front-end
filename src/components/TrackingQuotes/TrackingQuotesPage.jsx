import { TrackingQoutesBody } from './TrackingQoutesBody';
import { TrackingQoutesHeader } from './TrackingQoutesHeader';
import { TrackingQoutesIcons } from './TrackingQoutesIcons';

export const TrackingQuotesPage = () => {
    return (
        <div className="trackingQoutes-main">

            <div className="trackingQoutes-header">
                <TrackingQoutesHeader />
            </div>

            <div className="trackingQoutes-body">
                <TrackingQoutesBody />
            </div>

            <div className="trackingQoutes-footer">
                <TrackingQoutesIcons />
            </div>
        </div>
    )
}
