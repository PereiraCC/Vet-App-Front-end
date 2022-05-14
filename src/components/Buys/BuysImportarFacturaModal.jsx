import Modal from 'react-modal';
// import { useDispatch, useSelector } from 'react-redux';
// import { CloseModalEditCustomer } from '../../actions/billing';
import { customStyles } from '../../helpers/styleModal';

Modal.setAppElement('#root');

export const BuysImportarFacturaModal = () => {

    // const dispatch = useDispatch();
    // const { modalEditCustomerOpen } = useSelector(state => state.billing);

    const closeModal = () => {
        // dispatch( CloseModalEditCustomer() );
        console.log('closeModal');
    }

    return (
        <Modal
            isOpen={ true }
            onRequestClose={closeModal}
            style={ customStyles }
            closeTimeoutMS={ 200 }
            className={'modal-importarFactura'}
            overlayClassName={'modal-fondo'}
        >           
            <form className='modal_importarFactura-main'>

                <div className='modal_importarFactura-title'>
                    <p id='lblTitleImportarFModal'>Importar Factura Electronica</p>
                    <p id='lblCloseImportarFModal' onClick={ closeModal }>X</p>
                </div>

                <div className='modal_importarFactura-inputs'>
                    
                    <div className='modal_importarFactura-inputs-first'>
                        
                        <div className='modal_importarFactura-inputs-first-btn'>
                            <button id='btnImportarFXMLModal'>Importar XML de la Factura</button>
                        </div>

                        <div className='modal_importarFactura-inputs-first-consecutivo'>
                            <p id='lblConsecutivoImportarFModal'>Consecutivo</p>
                            <input type='text' name='consecutivoImportarFModal' id='txtConsecutivoImportarFModal' />
                        </div>

                        <div className='modal_importarFactura-inputs-first-clave'>
                            <p id='lblClaveImportarFModal'>Clave</p>
                            <input type='text' name='ClaveImportarFModal' id='txtClaveImportarFModal' />
                        </div>

                    </div>

                    <div className='modal_importarFactura-inputs-second'>
                        
                        <div className='modal_importarFactura-inputs-second-cedula'>
                            <p id='lblCedulaImportarFModal'>Cedula</p>
                            <input type='text' name='cedulaImportarFModal' id='txtCedulaImportarFModal' />
                        </div>

                        <div className='modal_importarFactura-inputs-second-proveedor'>
                            <p id='lblProveedorImportarFModal'>Proveedor</p>
                            <input type='text' name='proveedorImportarFModal' id='txtProveedorImportarFModal' />
                        </div>

                        <div className='modal_importarFactura-inputs-second-fecha'>
                            <p id='lblFechaImportarFModal'>Fecha</p>
                            <input type='date' name='fechaImportarFModal' id='txtFechaImportarFModal' />
                        </div>

                        <div className='modal_importarFactura-inputs-second-estado'>
                            <p id='lblEstadoImportarFModal'>Estado de Compra</p>
                            <select name='estadoImportarFModal' id='txtEstadoImportarFModal'>
                                <option value='ACEPTADO'>ACEPTADO</option>
                                <option value='RECHAZADO'>RECHAZADO</option>
                            </select>
                        </div>

                    </div>

                </div>

                <div className='modal_importarFactura-table'>
                    
                    <table className="modal_importarFactura-table-main">
                        <tr>
                            <th className="modal_importarFactura-table-header-codigoP">Codigo Proveedor</th>
                            <th className="modal_importarFactura-table-header-descripP">Descripcion Proveedor</th>
                            <th className="modal_importarFactura-table-header-codigoI">Codigo Interno</th>
                            <th className="modal_importarFactura-table-header-descripI">Descripcion Interna</th>
                            <th className="modal_importarFactura-table-header-presentacion">Presentacion</th>
                            <th className="modal_importarFactura-table-header-cantidad">Cantidad por Presentacion</th>
                        </tr>
                        <tr>
                            <td className="modal_importarFactura-table-codigoP">test</td>
                            <td className="modal_importarFactura-table-descripP">test</td>
                            <td className="modal_importarFactura-table-codigoI">test</td>
                            <td className="modal_importarFactura-table-descripI">test</td>
                            <td className="modal_importarFactura-table-presentacion">test</td>
                            <td className="modal_importarFactura-table-cantidad">test</td>
                        </tr>
                    </table>

                </div>

                <div className='modal_importarFactura-buttons'>
                    <div className='modal_importarFactura-buttons-catalogo'>
                        <button id='btnCatalogoImportarFModal'>Catalogo de Inventario</button>
                    </div>

                    <div className='modal_importarFactura-buttons-aceptar'>
                        <button id='btnAceptarImportarFModal'>Aceptar</button>
                    </div>

                    <div className='modal_importarFactura-buttons-cancelar'>
                        <button id='btnCancelarImportarFModal'>Cancelar</button>
                    </div>
                </div>

            </form>

        </Modal>
    )
}
