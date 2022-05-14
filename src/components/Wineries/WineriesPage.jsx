import { HiDocumentAdd } from 'react-icons/hi';
import { FaRegSave } from 'react-icons/fa';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { ImCancelCircle} from 'react-icons/im';

export const WineriesPage = () => {
    return (
        <div className='wineries_main'>

            <div className='wineries_title'>
                
                <div className='wineries_title-input'>
                    <input type='text' id='txtIDWineries' name='IDWineries' />
                </div>

                <div className='wineries_title-title'>
                    <p id='lblTitleWineries'>Bodegas</p>
                </div>

            </div>

            <div className='wineries_inputs'>
                
                <div className='wineries_inputs-nombre'>
                    <p id='lblNombreWineries'>Nombre de la Casa consignante o Bodega</p>
                    <input type='text' id='txtNombreWineries' name='nombreWineries' />
                </div>

                <div className='wineries_inputs-observaciones'>
                    <p id='lblObservacionesWineries'>Observaciones</p>
                    <textarea id='txtObservacionesWineries' name='observacionesWineries' cols={3} rows={5}></textarea>
                </div>

            </div>

            <div className='wineries_table'>

                <table className='wineries_table-table'>
                    <thead>
                        <tr>
                            <th className='wineries_table-header-codigo'>Código</th>
                            <th className='wineries_table-header-descrip'>Descripción</th>
                            <th className='wineries_table-header-existencia'>Existencia</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='wineries_table-codigo'>test</td>
                            <td className='wineries_table-descrip'>test</td>
                            <td className='wineries_table-existencia'>test</td>
                        </tr>
                    </tbody>
                </table>

            </div>

            <div className='wineries_icons'>
                
                <div className="wineries_icons-icons-nuevo">
                    <div className="wineries_icons-icons-nuevo-icon">
                        <HiDocumentAdd id='iconNuevoW'/>
                    </div>
                    <p id='lblNuevoW'>Nuevo</p>
                </div>

                <div className="wineries_icons-icons-registrar">
                    <div className="wineries_icons-icons-registrar-icon">
                        <FaRegSave id='iconRegistrarW'/>
                    </div>
                    <p id='lblRegistrarW'>Registrar</p>
                </div>

                <div className="wineries_icons-icons-anular">
                    <div className="wineries_icons-icons-anular-icon">
                        <RiDeleteBin2Fill id='iconAnularW'/>
                    </div>
                    <p id='lblAnularW'>Eliminar</p>
                </div>

                <div className="wineries_icons-icons-cerrar">
                    <div className="wineries_icons-icons-cerrar-icon">
                        <ImCancelCircle id='iconCerrarW'/>
                    </div>
                    <p id='lblCerrarW'>Cerrar</p>
                </div>

            </div>

        </div>
    )
}
