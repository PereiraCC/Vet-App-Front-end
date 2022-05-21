import { HiDocumentAdd } from 'react-icons/hi';
import { FaRegSave } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { ImCancelCircle} from 'react-icons/im';

export const Rates = () => {
    return (
        <div className='rates-main'>
            
            <div className='rates-header'>
                <p id='lblTitleRates'>Tarifas</p>
            </div>

            <div className='rates-body'>

                <div className='rates-tarifa'>
                    <p id='lblTarifaRates'>Tarifa</p>
                    <input type='text' id='txtTarifaRates' name='tarifaRates' />
                </div>

                <div className='rates-descrip'>
                    <p id='lblDescripRates'>Descripción</p>
                    <input type='text' id='txtDescripRates' name='descripRates' />
                </div>

                <div className='rates-moneda'>
                    <p id='lblMonedaRates'>Moneda</p>
                    <select id='cboMonedaRates' name='monedaRates'>
                        <option value='COLON'>COLON</option>
                        <option value='DOLAR'>DOLAR</option>
                    </select>
                </div>

                <div className='rates-btn'>
                    <button id='btnAddTarifaRates'>Agregar</button>
                </div>
            
            </div>

            <div className='rates-table'>
                <table className='rates-table-main'>
                    <thead>
                        <tr>
                            <th className='rates-table-header-tarifa'>Tarifa</th>
                            <th className='rates-table-header-descrip'>Descripción</th>
                            <th className='rates-table-header-moneda'>Moneda</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='rates-table-tarifa'>test</td>
                            <td className='rates-table-descrip'>test</td>
                            <td className='rates-table-moneda'>test</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='rates-icons'>

                <div className='rates-icons-nuevo'>
                    <div className='rates-icons-nuevo-icon'>
                        <HiDocumentAdd id='iconNuevoRates'/>
                    </div>
                    <p id='lblNuevoRates'>Nuevo</p>
                </div>

                <div className='rates-icons-Editar'>
                    <div className='rates-icons-Editar-icon'>
                        <AiFillEdit id='iconEditRates'/>
                    </div>
                    <p id='lblEditRates'>Editar</p>
                </div>

                <div className='rates-icons-registrar'>
                    <div className='rates-icons-registrar-icon'>
                        <FaRegSave id='iconRegistrarRates'/>
                    </div>
                    <p id='lblRegistrarRates'>Registrar</p>
                </div>

                <div className='rates-icons-eliminar'>
                    <div className='rates-icons-eliminar-icon'>
                        <RiDeleteBin2Fill id='iconEliminarRates'/>
                    </div>
                    <p id='lblEliminarRates'>Eliminar</p>
                </div>

                <div className='rates-icons-cerrar'>
                    <div className='rates-icons-cerrar-icon'>
                        <ImCancelCircle id='iconCerrarRates'/>
                    </div>
                    <p id='lblCerrarRates'>Cerrar</p>
                </div>

            </div>

        </div>
    )
}
