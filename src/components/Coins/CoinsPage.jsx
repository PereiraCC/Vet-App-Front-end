import { HiDocumentAdd } from 'react-icons/hi';
import { FaRegSave } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { ImCancelCircle} from 'react-icons/im';

export const CoinsPage = () => {
    return (
        <div className='coins-main'>
            
            <div className='coins-header'>
                <p id='lblTitleCoins'>Registro de Monedas</p>
            </div>

            <div className='coins-body'>
                
                <div className='coins-body-firstLine'>
                    
                    <div className='coins-body-firstLine-codigo'>
                        <p id='lblMonedaCodigo'>Código</p>
                        <input type='text' name='monedaCodigo' id='txtCodigoM' />
                    </div>
                    <div className='coins-body-firstLine-NombreMoneda'>
                        <p id='lblNombreMoneda'>Nombre Moneda</p>
                        <input type='text' name='monedaNombre' id='txtNombreM' />
                    </div>

                </div>

                <div className='coins-body-secondLine'>
                    
                    <div className='coins-body-secondLine-ValorCompra'>
                        <p id='lblMonedaValorCompra'>Valor de Compra</p>
                        <input type='text' name='monedaValorCompra' id='txtValorCompraM' />
                    </div>
                    <div className='coins-body-secondLine-ValorVenta'>
                        <p id='lblValorVenta'>Valor de Venta</p>
                        <input type='text' name='monedaValorVenta' id='txtValorVentaM' />
                    </div>
                    <div className='coins-body-secondLine-Simbolo'>
                        <p id='lblMonedaSimbolo'>Simbolo</p>
                        <input type='text' name='monedaSimbolo' id='txtSimboloM' />
                    </div>
                    <div className='coins-body-secondLine-CuentaContable'>
                        <p id='lblCuentaContableM'>Cuenta contable</p>
                        <input type='text' name='monedaCuentaContable' id='txtCuentaContableM' />
                    </div>
                    <div className='coins-body-secondLine-btn'>
                        <button id='btnAddM'>Agregar</button>
                    </div>

                </div>
            
            </div>

            <div className='coins-table'>
                <table className='coins-table-main'>
                    <thead>
                        <tr>
                            <th className='coins-table-header-nombre'>Nombre Moneda</th>
                            <th className='coins-table-header-valorCompra'>Valor Compra</th>
                            <th className='coins-table-header-valorVenta'>Valor Venta</th>
                            <th className='coins-table-header-simbolo'>Simbolo</th>
                            <th className='coins-table-header-cuentaCon'>Cuenta Contable</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='coins-table-nombre'>test</td>
                            <td className='coins-table-valorCompra'>test</td>
                            <td className='coins-table-valorVenta'>test</td>
                            <td className='coins-table-simbolo'>test</td>
                            <td className='coins-table-cuentaCon'>test</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='coins-icons'>

                <div className='coins-icons-nuevo'>
                    <div className='coins-icons-nuevo-icon'>
                        <HiDocumentAdd id='iconNuevoP'/>
                    </div>
                    <p id='lblNuevoP'>Nuevo</p>
                </div>

                <div className='coins-icons-Editar'>
                    <div className='coins-icons-Editar-icon'>
                        <AiFillEdit id='iconEditCoins'/>
                    </div>
                    <p id='lblEditCoins'>Editar</p>
                </div>

                <div className='coins-icons-registrar'>
                    <div className='coins-icons-registrar-icon'>
                        <FaRegSave id='iconRegistrarP'/>
                    </div>
                    <p id='lblRegistrarP'>Registrar</p>
                </div>

                <div className='coins-icons-eliminar'>
                    <div className='coins-icons-eliminar-icon'>
                        <RiDeleteBin2Fill id='iconEliminarP'/>
                    </div>
                    <p id='lblEliminarP'>Eliminar</p>
                </div>

                <div className='coins-icons-cerrar'>
                    <div className='coins-icons-cerrar-icon'>
                        <ImCancelCircle id='iconCerrarP'/>
                    </div>
                    <p id='lblCerrarP'>Cerrar</p>
                </div>

            </div>

        </div>
    )
}
