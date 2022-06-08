import { FaRegSave } from 'react-icons/fa';
import { ImCancelCircle} from 'react-icons/im';

export const LockUnlockWarehouse = () => {
    return (
        <div className='lockUnlockWarehouse-main'>

            <div className='lockUnlockWarehouse-header'>
                <p id='lblTitlelockUnlockWarehouse'>Bloqueo / Desbloqueo Bodegas</p>
            </div>

            <div className='lockUnlockWarehouse-body'>
                
                <div className='lockUnlockWarehouse-body-title'>
                    <p id='lblTitleBodyLUWarehouse'>Listado de Inventario</p>
                </div>

                <div className='lockUnlockWarehouse-body-table'>
                    <table className='lockUnlockWarehouse-body-table-main'>
                        <thead>
                            <tr>
                                <th className='lockUnlockWarehouse-body-table-header-bodega'>Bodega</th>
                                <th className='lockUnlockWarehouse-body-table-header-observaciones'>Observaciones</th>
                                <th className='lockUnlockWarehouse-body-table-header-bloquea'>Bloquea</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='lockUnlockWarehouse-body-table-bodega'>test</td>
                                <td className='lockUnlockWarehouse-body-table-observaciones'>test</td>
                                <td className='lockUnlockWarehouse-body-table-bloquea'>
                                    <input type='checkbox' id='chkLockUnlockWarehouse'/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='lockUnlockWarehouse-body-btn'>
                    <button id='btnSavelockunlockWarehouse'>Guardar Cambios</button>
                </div>

            </div>

            <div className='lockUnlockWarehouse-icons'>
                
                <div className='lockUnlockWarehouse-icons-registrar'>
                    <div className='lockUnlockWarehouse-icons-registrar-icon'>
                        <FaRegSave id='iconRegistrarLockUnlockWarehouse'/>
                    </div>
                    <p id='lblRegistrarLockUnlockWarehouse'>Registrar</p>
                </div>

                <div className='lockUnlockWarehouse-icons-cerrar'>
                    <div className='lockUnlockWarehouse-icons-cerrar-icon'>
                        <ImCancelCircle id='iconCerrarLockUnlockWarehouse'/>
                    </div>
                    <p id='lblCerrarLockUnlockWarehouse'>Cerrar</p>
                </div>

            </div>

        </div>
    )
}
