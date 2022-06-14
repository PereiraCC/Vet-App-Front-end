import { useDispatch } from 'react-redux';

import { FaRegSave } from 'react-icons/fa';
import { ImCancelCircle} from 'react-icons/im';

import { ModalAddImpuesto } from './ModalAddImpuesto';
import { OpenModalAddMagItemsList } from '../../actions/magItemList';

export const MagIteamsList = () => {

    const dispatch = useDispatch();

    const openModalAddImpuesto = () => {
        dispatch( OpenModalAddMagItemsList() );
    }

    return (
        <div className='magIteamsList-main'>

            <div className='magIteamsList-header'>
                <p id='lblTitleMAGIteamsList'>Lista Articulos MAG</p>
            </div>

            <div className='magIteamsList-body'>
                
                <div className='magIteamsList-body-inputs'>

                    <div className='magIteamsList-body-inputs-buscar'>
                        <p id='lblBuscarMAGIteamsList'>Buscar</p>
                        <input type='text' id='txtBuscarMAGIteamsList' name='buscarMAGIteamsList'/>
                    </div>

                    <div className='magIteamsList-body-inputs-cambiar'>
                        <button id='btnCambiarMAGIteamsList' onClick={ openModalAddImpuesto }>Cambiar Impuesto</button>
                    </div>

                    <div className='magIteamsList-body-inputs-quitar'>
                        <button id='btnQuitarMAGIteamsList'>Quitar de la Lista</button>
                    </div>
                </div>

                <div className='magIteamsList-body-table'>
                    <table className='magIteamsList-body-table-main'>
                        <thead>
                            <tr>
                                <th className='magIteamsList-body-table-header-codArticulo'>Código Artículo</th>
                                <th className='magIteamsList-body-table-header-descripcion'>Descripción</th>
                                <th className='magIteamsList-body-table-header-IVenta'>IVenta</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='magIteamsList-body-table-codArticulo'>test</td>
                                <td className='magIteamsList-body-table-descripcion'>test</td>
                                <td className='magIteamsList-body-table-IVenta'>test</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

            <div className='magIteamsList-icons'>
                
                <div className='magIteamsList-icons-registrar'>
                    <div className='magIteamsList-icons-registrar-icon'>
                        <FaRegSave id='iconRegistrarMAGIteamsList'/>
                    </div>
                    <p id='lblRegistrarMAGIteamsList'>Registrar</p>
                </div>

                <div className='magIteamsList-icons-cerrar'>
                    <div className='magIteamsList-icons-cerrar-icon'>
                        <ImCancelCircle id='iconCerrarMAGIteamsList'/>
                    </div>
                    <p id='lblCerrarMAGIteamsList'>Cerrar</p>
                </div>

            </div>

            <ModalAddImpuesto />

        </div>
    )
}
