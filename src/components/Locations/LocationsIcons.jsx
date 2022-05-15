import { HiDocumentAdd } from 'react-icons/hi';
import { FaRegSave, FaSearch } from 'react-icons/fa';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { ImCancelCircle} from 'react-icons/im';

export const LocationsIcons = () => {
    return (
        <div className='locations_icons-main'>

            <div className='locations_icons-icon-nuevo'>
                <div className='locations_icons-icon-nuevo-icon'>
                    <HiDocumentAdd id='iconNuevoLocations'/>
                </div>
                <p id='lblNuevoLocations'>Nuevo</p>
            </div>

            <div className='locations_icons-icon-Buscar'>
                <div className='locations_icons-icon-Buscar-icon'>
                    <FaSearch id='iconBusLocations'/>
                </div>
                <p id='lblBuscarLocations'>Buscar</p>
            </div>

            <div className='locations_icons-icon-registrar'>
                <div className='locations_icons-icon-registrar-icon'>
                    <FaRegSave id='iconRegistrarLocations'/>
                </div>
                <p id='lblRegistrarLocations'>Registrar</p>
            </div>

            <div className='locations_icons-icon-anular'>
                <div className='locations_icons-icon-anular-icon'>
                    <RiDeleteBin2Fill id='iconAnularLocations'/>
                </div>
                <p id='lblAnularLocations'>Anular</p>
            </div>

            <div className='locations_icons-icon-cerrar'>
                <div className='locations_icons-icon-cerrar-icon'>
                    <ImCancelCircle id='iconCerrarLocations'/>
                </div>
                <p id='lblCerrarLocations'>Cerrar</p>
            </div>

        </div>
    )
}
