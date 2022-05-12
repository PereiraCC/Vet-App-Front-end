import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { CloseModalEditCustomer } from '../../actions/billing';
import { customStyles } from '../../helpers/styleModal';

Modal.setAppElement('#root');

export const BillingEditCustomerModal = () => {

    const dispatch = useDispatch();
    const { modalEditCustomerOpen } = useSelector(state => state.billing);

    const closeModal = () => {
        dispatch( CloseModalEditCustomer() );
    }

    return (
        <Modal
            isOpen={ modalEditCustomerOpen }
            onRequestClose={closeModal}
            style={ customStyles }
            closeTimeoutMS={ 200 }
            className={'modal-editCustomer'}
            overlayClassName={'modal-fondo'}
        >           
            <form className='modal_editCustomer-main'>

                <div className='modal_editCustomer-title'>
                    <p id='lblTitleEditCustomers'>Editar Cliente</p>
                    <p id='lblCloseEditCustomers' onClick={ closeModal }>X</p>
                </div>

                <div className='modal_editCustomer-body'>

                    <div className="modal_editCustomer-body-firstBox">
                        
                        <div className="modal_editCustomer-body-firstBox-1">
                            
                            <div className='modal_editCustomer-body-firstBox-1-telefono'>
                                <div className='modal_editCustomer-body-firstBox-1-telefono-label'>
                                    <p id="lblTelefonoDatos">Teléfono</p>
                                </div>
                                <div className='modal_editCustomer-body-firstBox-1-telefono-input'>
                                    <input type="text" name="telefonoDatos" id="txtTelefonoDatos" />
                                </div>
                            </div>

                            <div className='modal_editCustomer-body-firstBox-1-fax'>
                                <div className='modal_editCustomer-body-firstBox-1-fax-label'>
                                    <p id="lblFaxDatos">Fax (es):</p>
                                </div>
                                <div className='modal_editCustomer-body-firstBox-1-fax-input'>
                                    <input type="text" name="faxDatos" id="txtfaxDatos" />
                                </div>
                            </div>

                        </div>

                        <div className="modal_editCustomer-body-firstBox-2">
                            
                            <div className='modal_editCustomer-body-firstBox-2-direccion-label'>
                                <p id="lblDireccionDatos">Dirección</p>
                            </div>
                            <div className='modal_editCustomer-body-firstBox-2-direccion-input'>
                                <input type="text" name="direccionDatos" id="txtDireccionDatos" />
                            </div>

                        </div>

                        <div className="modal_editCustomer-body-firstBox-3">
                            
                            <div className='modal_editCustomer-body-firstBox-3-correoCuentas'>
                                <div className='modal_editCustomer-body-firstBox-3-correoCuentas-label'>
                                    <p id="lblCorreoCuentasDatos">Correo Cuentas por Cobrar</p>
                                </div>
                                <div className='modal_editCustomer-body-firstBox-3-correoCuentas-input'>
                                    <input type="text" name="correoCuentasDatos" id="txtCorreoCuentasDatos" />
                                </div>
                            </div>

                            <div className='modal_editCustomer-body-firstBox-3-tipoCliente'>
                                <div className='modal_editCustomer-body-firstBox-3-tipoCliente-label'>
                                    <p id="lblTipoClienteDatos">Tipo Cliente</p>
                                </div>
                                <div className='modal_editCustomer-body-firstBox-3-tipoCliente-input'>
                                    <select name="tipo" id="cboTipoClienteDatos">
                                        <option value="normal1">normal1</option>
                                        <option value="normal2">normal2</option>
                                    </select>
                                </div>
                            </div>

                        </div>

                        <div className="modal_editCustomer-body-firstBox-4">
                            
                            <div className='modal_editCustomer-body-firstBox-4-correoFacturacion'>
                                
                                <div className='modal_editCustomer-body-firstBox-4-correoFacturacion-label'>
                                    <p id="lblCorreoFacturacionDatos">Correo Facturacion Electronica</p>
                                </div>
                                <div className='modal_editCustomer-body-firstBox-4-correoFacturacion-input'>
                                    <input type="text" name="correoFacturacionDatos" id="txtCorreoFacturacionDatos" />
                                </div>

                            </div>

                            <div className='modal_editCustomer-body-firstBox-4-agente'>

                                <div className='modal_editCustomer-body-firstBox-4-agente-header'>
                                    <p id="lblAgenteDatos">Agente Asignado</p>
                                    <div className='modal_editCustomer-body-firstBox-4-agente-header-check'>
                                        <div className="modal_editCustomer-body-firstBox-4-agente-header-check-input"> 
                                            <input type="checkbox" id="checkSinAgente" name="sinAgente" value="sinAgente" />
                                        </div>
                                        <label for="checkSinAgente" id="lblSinAgente">Sin Agente</label>
                                    </div>
                                </div>
                                <div className='modal_editCustomer-body-firstBox-4-agente-input'>
                                    <select name="tipo" id="cboAgenteDatos">
                                        <option value="PAOLA VALERIO HERRERA">PAOLA VALERIO HERRERA</option>
                                        <option value="PEDRO PEREZ">PEDRO PEREZ</option>
                                    </select>
                                </div>

                            </div>

                        </div>

                        <div className="modal_editCustomer-body-firstBox-5">
                            
                            <div className='modal_editCustomer-body-firstBox-5-notificar-check'>
                                <div className="modal_editCustomer-body-firstBox-5-notificar-check-input"> 
                                    <input type="checkbox" id="checkNotificar" name="notificar" value="notificar" />
                                </div>
                                <div className='modal_editCustomer-body-firstBox-5-notificar-check-label'>
                                    <label for="checkNotificar" id="lblNotificarDatos">Notificar por correo</label>
                                </div>
                            </div>

                            <div className='modal_editCustomer-body-firstBox-5-actualizado-check'>
                                <div className="modal_editCustomer-body-firstBox-5-actualizado-check-input"> 
                                    <input type="checkbox" id="checkActualizado" name="actualizado" value="actualizado" />
                                </div>
                                <div className='modal_editCustomer-body-firstBox-5-actualizado-check-label'>
                                    <label for="checkActualizado" id="lblActualizadoDatos">Actualizado</label>
                                </div>
                            </div>

                            <div className='modal_editCustomer-body-firstBox-5-fallecido-check'>
                                <div className="modal_editCustomer-body-firstBox-5-fallecido-check-input"> 
                                    <input type="checkbox" id="checkFallecido" name="fallecido" value="fallecido" />
                                </div>
                                <div className='modal_editCustomer-body-firstBox-5-fallecido-check-label'>
                                    <label for="checkFallecido" id="lblFallecidoDatos">Fallecido</label>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="modal_editCustomer-body-secondBox">

                        <div className='modal_editCustomer-body-secondBox-enviaCorreo'>
                            
                            <div className="modal_editCustomer-body-secondBox-check-input"> 
                                <input type="checkbox" id="checkEnviaCorreo" name="enviaCorreo" value="enviaCorreo" />
                            </div>
                            <div className='modal_editCustomer-body-secondBox-check-label'>
                                <label for="checkEnviaCorreo" id="lblEnviaCorreo">Envia Recibo al Correo</label>
                            </div>

                        </div>

                        <div className='modal_editCustomer-body-secondBox-tipoPrecio'>
                            
                            <div className='modal_editCustomer-body-secondBox-tipoPrecio-label'>
                                <p id="lblTipoPrecioDatos">Tipo Precio</p>
                            </div>
                            <div className='modal_editCustomer-body-secondBox-tipoPrecio-input'>
                                <select name="tipo" id="cboTipoPrecioDatos">
                                    <option value="normal1">normal1</option>
                                    <option value="normal2">normal2</option>
                                </select>
                            </div>

                        </div>

                        <div className='modal_editCustomer-body-secondBox-descuento'>
                            
                            <p id='lblDescuentosEspecialesDatos'>Descuentos Especiales</p>
                            <div className='modal_editCustomer-body-secondBox-descuento-inputs'>
                                <div className='modal_editCustomer-body-secondBox-descuento-inputs-label'>
                                    <p>Descuento %</p>
                                </div>
                                <div className='modal_editCustomer-body-secondBox-descuento-inputs-input'>
                                    <input type="text" name="descuentoEspecial" id="txtDescuentoEspecialDatos" />
                                </div>
                            </div>

                        </div>

                        <div className='modal_editCustomer-body-secondBox-checks'>
                            
                            <div className='modal_editCustomer-body-secondBox-checks-inactivado'>
                                
                                <div className='modal_editCustomer-body-secondBox-checks-inactivado-check'>
                                    <div className="modal_editCustomer-body-secondBox-checks-inactivado-check-input">
                                        <input type="checkbox" id="checkInactivado" name="inactivado" value="inactivado" />
                                    </div>
                                    <div className='modal_editCustomer-body-secondBox-checks-inactivado-check-label'>
                                        <label for="checkInactivado" id="lblInactivado">Inactivado</label>
                                    </div>
                                </div>

                                <div className='modal_editCustomer-body-secondBox-checks-inactivado-button'>
                                    <button id="btnCambiarDatos">Cambiar</button>
                                </div>

                            </div>

                            <div className='modal_editCustomer-body-secondBox-checks-registradoMAG'>
                            
                                <div className="modal_editCustomer-body-secondBox-check-registradoMAG-input">
                                    <input type="checkbox" id="checkRegistradoMAG" name="registradoMAG" value="registradoMAG" />
                                </div>
                                <div className='modal_editCustomer-body-secondBox-check-registradoMAG-label'>
                                    <label for="checkRegistradoMAG" id="lblRegistradoMAG">Esta Registrado en el MAG</label>
                                </div>

                            </div>

                            <div className='modal_editCustomer-body-secondBox-checks-imprimirPrecio'>
                                
                                <div className="modal_editCustomer-body-secondBox-check-imprimirPrecio-input">
                                    <input type="checkbox" id="checkImprimirPrecio" name="imprimirPrecio" value="imprimirPrecio" />
                                </div>
                                <div className='modal_editCustomer-body-secondBox-check-imprimirPrecio-label'>
                                    <label for="checkImprimirPrecio" id="lblImprimirPrecio">Imprimir Precio Sugerido</label>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

                <div className='modal_editCustomer-btn'>
                    <button type='button' id='btneditCustomer'>Editar</button>
                </div>

            </form>

        </Modal>
    )
}
