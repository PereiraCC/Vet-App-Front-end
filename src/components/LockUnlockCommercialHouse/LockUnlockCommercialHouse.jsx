import { FaRegSave } from 'react-icons/fa';
import { ImCancelCircle} from 'react-icons/im';
import { BsFillLockFill, BsFillUnlockFill } from 'react-icons/bs';


export const LockUnlockCommercialHouse = () => {
    return (
        <div className='lockUnlockCommercialHouse-main'>

            <div className='lockUnlockCommercialHouse-header'>
                <p id='lblTitlelockUnlockCommercialHouse'>Bloqueo / Desbloqueo Bodegas</p>
            </div>

            <div className='lockUnlockCommercialHouse-body'>
                
                <div className='lockUnlockCommercialHouse-body-inputs'>

                    <div className='lockUnlockCommercialHouse-body-inputs-buscar'>
                        <p id='lblbuscarLockUnlockCommercialHouse'>Buscar Casa Comercial:</p>
                        <input type='text' id='txtbuscarLockUnlockCommercialHouse' name='buscarLockUnlockCommercialHouse'/>
                    </div>

                    <div className='lockUnlockCommercialHouse-body-inputs-bloquear'>
                        <BsFillLockFill id='iconLockCommercialHouse'/>
                        <p id='lblBloquearLockUnlockCommercialHouse'>Bloquear</p>
                    </div>

                    <div className='lockUnlockCommercialHouse-body-inputs-desbloquear'>
                        <BsFillUnlockFill id='iconUnLockCommercialHouse'/>
                        <p id='lblDesbloquearLockUnlockCommercialHouse'>Desbloquear</p>
                    </div>
                </div>

                <div className='lockUnlockCommercialHouse-body-table'>
                    
                    <table className='lockUnlockCommercialHouse-body-table-main'>
                        <thead>
                            <tr>
                                <th className='lockUnlockCommercialHouse-body-table-header-casacomercial'>Casa Comercial</th>
                                <th className='lockUnlockCommercialHouse-body-table-header-bloqueado'>Bloqueado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='lockUnlockCommercialHouse-body-table-casacomercial'>test</td>
                                <td className='lockUnlockCommercialHouse-body-table-bloqueado'>
                                    <input type='checkbox' id='chklockUnlockCommercialHouse'/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

            <div className='lockUnlockCommercialHouse-icons'>
                
                <div className='lockUnlockCommercialHouse-icons-registrar'>
                    <div className='lockUnlockCommercialHouse-icons-registrar-icon'>
                        <FaRegSave id='iconRegistrarLockUnlockCommercialHouse'/>
                    </div>
                    <p id='lblRegistrarLockUnlockCommercialHouse'>Registrar</p>
                </div>

                <div className='lockUnlockCommercialHouse-icons-cerrar'>
                    <div className='lockUnlockCommercialHouse-icons-cerrar-icon'>
                        <ImCancelCircle id='iconCerrarLockUnlockCommercialHouse'/>
                    </div>
                    <p id='lblCerrarLockUnlockCommercialHouse'>Cerrar</p>
                </div>

            </div>

        </div>
    )
}
