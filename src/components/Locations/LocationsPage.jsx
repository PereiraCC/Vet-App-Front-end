import { LocationsHeader } from './LocationsHeader';

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
                <p>ubicacionesE</p>
            </div>

            <div className='locations_icons'>
                <p>icons</p>
            </div>

        </div>
    )
}
