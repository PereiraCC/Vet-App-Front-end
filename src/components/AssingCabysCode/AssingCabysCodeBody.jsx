import { useDispatch } from 'react-redux';

import { ModalSearchProviders } from './ModalSearchProviders';
import { OpenModalSearchProviders } from '../../actions/assingCabysCode';

export const AssingCabysCodeBody = () => {

    const dispatch = useDispatch();

    const openModalSearchProviders = () => {
        dispatch( OpenModalSearchProviders() );
    }

    return (
        <div className='assingCabysCode_body-main'>

            <div className='assingCabysCode_body-inputs'>

                <div className='assingCabysCode_body-inputs-firstBox'>

                    <div className='assingCabysCode_body-inputs-firstBox-count'>
                        <p id='lblAssignCabysCodeCount'>992.00</p>
                    </div>

                    <div className='assingCabysCode_body-inputs-firstBox-opcion'>
                        <p id='lblAssingCabysCodeOpcion'>Opcion para mostrar articulos:</p>
                        <select id='cboAssignCabysCodeOpcion' name='assignCabysCodeOpcion'>
                            <option value='1'>Mostrar solo artículos sin código cabys</option>
                            <option value='2'>Mostrar solo artículos con código cabys</option>
                            <option value='3'>Mostrar todos los artículos</option>
                        </select>
                    </div>
                
                </div>

                <div className='assingCabysCode_body-inputs-secondBox'>
                    
                    <div className='assingCabysCode_body-inputs-secondBox-check'>
                        <div className="assingCabysCode_body-inputs-secondBox-check-input">
                            <input type="checkbox" id="checkActivosAssingCabysCode" name="ActivosAssingCabysCode" value="ActivosAssingCabysCode" />
                        </div>
                        <label for="checkActivosAssingCabysCode" id="lblActivosAssingCabysCode">Mostar solo Activos</label>
                    </div>

                    <div className='assingCabysCode_body-inputs-secondBox-buscar'>
                        <p id='lblBuscarDescripcionAssingCabysCode'>Buscar Articulos por Descripcion:</p>
                        <input type='text' id='txtBuscarDescripcionAssingCabysCode' name='buscarDescripcionAssingCabysCode' />
                    </div>

                </div>

                <div className='assingCabysCode_body-inputs-thirdBox'>

                    <div className='assingCabysCode_body-inputs-thirdBox-firstLine'>
                        <button id='btnProductoAgriculaACC'>Producto Agricula (MAG)</button>
                        <button id='btnQuitarMAGACC'>Quitar MAG</button>
                    </div>

                    <div className='assingCabysCode_body-inputs-thirdBox-secondLine'>
                        <button id='btnAsignarCabysACC'>Asignar Cabys</button>
                        <button id='btnPuntosACC' onClick={ openModalSearchProviders }>...</button>
                        <button id='btnQuitarCodigoACC'>Quitar Codigo Cabys</button>
                    </div>

                </div>
            </div>

            <div className='assingCabysCode_body-table'>
                <table className='assingCabysCode_body-table-main'>
                    <thead>
                        <tr>
                            <th className='assingCabysCode_body-table-header-codArticulo'>Cod_Artículo</th>
                            <th className='assingCabysCode_body-table-header-descrip'>Descripción</th>
                            <th className='assingCabysCode_body-table-header-proveedor'>Proveedor</th>
                            <th className='assingCabysCode_body-table-header-existencia'>Existencia</th>
                            <th className='assingCabysCode_body-table-header-mag'>MAG</th>
                            <th className='assingCabysCode_body-table-header-servicio'>Servicio</th>
                            <th className='assingCabysCode_body-table-header-codcabys'>CodCabys</th>
                            <th className='assingCabysCode_body-table-header-cabys'>Cabys</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='assingCabysCode_body-table-codArticulo'>test</td>
                            <td className='assingCabysCode_body-table-descrip'>test</td>
                            <td className='assingCabysCode_body-table-proveedor'>test</td>
                            <td className='assingCabysCode_body-table-existencia'>test</td>
                            <td className='assingCabysCode_body-table-mag'>test</td>
                            <td className='assingCabysCode_body-table-servicio'>test</td>
                            <td className='assingCabysCode_body-table-codcabys'>test</td>
                            <td className='assingCabysCode_body-table-cabys'>test</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <ModalSearchProviders />
        </div>
    )
}
