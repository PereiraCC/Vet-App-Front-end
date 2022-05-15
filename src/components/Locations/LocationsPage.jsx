import { LocationsHeader } from './LocationsHeader';
import { LocationsIcons } from './LocationsIcons';
import { LocationsUbicacionesE } from './LocationsUbicacionesE';

export const LocationsPage = () => {
    return (
        <div className='locations_main'>

            <div className='locations_titles'>
                <p id='lblTitleLocations'>Ubicaciones</p>
            </div>

            <div className='locations_header'>
                <LocationsHeader />
            </div>

            <div className='locations_ubicacionesE'>
                <LocationsUbicacionesE />
            </div>

            <div className='locations_icons'>
                <LocationsIcons />
            </div>

        </div>
    )
}
