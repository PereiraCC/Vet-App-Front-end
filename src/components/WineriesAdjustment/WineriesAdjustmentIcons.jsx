import { HiDocumentAdd } from 'react-icons/hi';
import { FaRegSave, FaSearch } from 'react-icons/fa';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { ImCancelCircle} from 'react-icons/im';

export const WineriesAdjustmentIcons = () => {
    return (
        <div className='wineries_adjustment-icons-main'>

            <div className="wineries_adjustment-icons-nuevo">
                <div className="wineries_adjustment-icons-nuevo-icon">
                    <HiDocumentAdd id='iconNuevoWA'/>
                </div>
                <p id='lblNuevoWA'>Nuevo</p>
            </div>

            <div className='wineries_adjustment-icons-Buscar'>
                <div className="wineries_adjustment-icons-Buscar-icon">
                    <FaSearch id='iconBusWA'/>
                </div>
                <p id='lblBuscarWA'>Buscar</p>
            </div>

            <div className="wineries_adjustment-icons-registrar">
                <div className="wineries_adjustment-icons-registrar-icon">
                    <FaRegSave id='iconRegistrarWA'/>
                </div>
                <p id='lblRegistrarWA'>Registrar</p>
            </div>

            <div className="wineries_adjustment-icons-anular">
                <div className="wineries_adjustment-icons-anular-icon">
                    <RiDeleteBin2Fill id='iconAnularWA'/>
                </div>
                <p id='lblAnularWA'>Anular</p>
            </div>

            <div className="wineries_adjustment-icons-cerrar">
                <div className="wineries_adjustment-icons-cerrar-icon">
                    <ImCancelCircle id='iconCerrarWA'/>
                </div>
                <p id='lblCerrarWA'>Cerrar</p>
            </div>

            {/* <div className="wineries_adjustment-user">
                <div className='wineries_adjustment-icons-user-label'>
                    <p id='lblUserWA'>Usuario →</p>
                </div>
            </div> */}

            <div className="wineries_adjustment-fecha">
                <div className='wineries_adjustment-fecha-input'>
                    <input type="date" id="txtFechaWA" name="fechaWA"
                        min="01-01-2022" max="12-31-2022" />
                </div>
            </div>

        </div>
    )
}
