import { HiDocumentAdd } from 'react-icons/hi';
import { FaRegSave } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { ImCancelCircle} from 'react-icons/im';

export const AssignTab = () => {
    return (
        <div className='assign_tab-main'>
            
            <div className='assign_tab-header'>
                <p id='lblTitleAssingTab'>Asignar Ficha Por Usuarios</p>
            </div>

            <div className='assign_tab-body'>
                
                <div className='assign_tab-body-user'>
                    <p id='lblUserAssingTab'>Usuario</p>
                    <select name='userAssingTab' id='cboUserAssingTab'>
                        <option value='Usuario1'>Usuario 1</option>
                        <option value='Usuario2'>Usuario 2</option>
                    </select>
                </div>

                <div className='assign_tab-body-from'>
                    <p id='lblFromAssingTab'>Desde</p>
                    <input type='text' name='fromAssingTab' id='txtFromAssingTab' />
                </div>

                <div className='assign_tab-body-until'>
                    <p id='lblUntilAssingTab'>Hasta</p>
                    <input type='text' name='untilAssingTab' id='txtUntilAssingTab' />
                </div>

                <div className='assign_tab-body-indicator'>
                    <p id='lblIndicatorAssingTab'>Mostrador</p>
                    <input type='text' name='indicatorAssingTab' id='txtIndicatorAssingTab' />
                </div>

                <div className='assign_tab-body-btn'>
                    <button id='btnAddAssingTab'>Agregar</button>
                </div>
            
            </div>

            <div className='assign_tab-table'>
                <table className='assign_tab-table-main'>
                    <thead>
                        <tr>
                            <th className='assign_tab-table-header-user'>Usuario</th>
                            <th className='assign_tab-table-header-from'>Desde</th>
                            <th className='assign_tab-table-header-until'>Hasta</th>
                            <th className='assign_tab-table-header-indicator'>Mostrador</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='assign_tab-table-user'>test</td>
                            <td className='assign_tab-table-from'>test</td>
                            <td className='assign_tab-table-until'>test</td>
                            <td className='assign_tab-table-indicator'>test</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='assign_tab-icons'>

                <div className='assign_tab-icons-nuevo'>
                    <div className='assign_tab-icons-nuevo-icon'>
                        <HiDocumentAdd id='iconNuevoAssingTab'/>
                    </div>
                    <p id='lblNuevoAssingTab'>Nuevo</p>
                </div>

                <div className='assign_tab-icons-Editar'>
                    <div className='assign_tab-icons-Editar-icon'>
                        <AiFillEdit id='iconEditAssingTab'/>
                    </div>
                    <p id='lblEditAssingTab'>Editar</p>
                </div>

                <div className='assign_tab-icons-registrar'>
                    <div className='assign_tab-icons-registrar-icon'>
                        <FaRegSave id='iconRegistrarAssingTab'/>
                    </div>
                    <p id='lblRegistrarAssingTab'>Registrar</p>
                </div>

                <div className='assign_tab-icons-eliminar'>
                    <div className='assign_tab-icons-eliminar-icon'>
                        <RiDeleteBin2Fill id='iconEliminarAssingTab'/>
                    </div>
                    <p id='lblEliminarAssingTab'>Eliminar</p>
                </div>

                <div className='assign_tab-icons-cerrar'>
                    <div className='assign_tab-icons-cerrar-icon'>
                        <ImCancelCircle id='iconCerrarAssingTab'/>
                    </div>
                    <p id='lblCerrarAssingTab'>Cerrar</p>
                </div>

            </div>

        </div>
    )
}
