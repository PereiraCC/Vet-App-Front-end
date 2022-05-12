import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { CloseModalAddCustomer } from '../../actions/billing';
import { customStyles } from '../../helpers/styleModal';

Modal.setAppElement('#root');

export const BillingAddCustomerModal = () => {

    const dispatch = useDispatch();
    const { modalAddCustomerOpen } = useSelector(state => state.billing);

    const closeModal = () => {
        dispatch( CloseModalAddCustomer() );
    }

    return (
        <Modal
            isOpen={ modalAddCustomerOpen }
            onRequestClose={closeModal}
            style={ customStyles }
            closeTimeoutMS={ 200 }
            className={'modal-addCustomer'}
            overlayClassName={'modal-fondo'}
        >           

            <form className='modal_addCustomer-main'>

                <div className='modal_addCustomer-title'>
                    <p id='lblTitleAddCustomers'>Agregar Cliente</p>
                    <p id='lblCloseAddCustomers' onClick={ closeModal }>X</p>
                </div>

                <div className='modal_addCustomer-first'>
                    
                    <div className='modal_addCustomer-first-tipo'>
                        <p id='lbltipoModalAddCustomer'>Tipo</p>
                        <select name='tipoModalAddCustomer' id='cbotipoModalAddCustomer'>
                            <option value='FISICA'>FISICA</option>
                            <option value='JURIDICA'>JURIDICA</option>
                            <option value='DIMEX'>DIMEX</option>
                        </select>
                    </div>

                    <div className='modal_addCustomer-first-cedula'>
                        <p id='lblcedulaModalAddCustomer'>Cédula</p>
                        <input type='text' name='cedulaModalAddCustomer' id='txtcedulaModalAddCustomer' />
                    </div>

                    <div className='modal_addCustomer-first-nombre'>
                        <p id='lblNombreModalAddCustomer'>Nombre del Cliente</p>
                        <input type='text' name='nombreModalAddCustomer' id='txtNombreModalAddCustomer' />
                    </div>

                </div>

                <div className='modal_addCustomer-second'>
                    
                    <div className='modal_addCustomer-second-telefono'>
                        <p id='lbltelefonoModalAddCustomer'>Teléfono</p>
                        <input type='text' name='telefonoModalAddCustomer' id='txttelefonoModalAddCustomer' />
                    </div>

                    <div className='modal_addCustomer-second-email'>
                        <p id='lblemailModalAddCustomer'>Email</p>
                        <input type='text' name='emailModalAddCustomer' id='txtemailModalAddCustomer' />
                    </div>

                </div>

                <div className='modal_addCustomer-third'>
                    
                    <p id='lbldireccionModalAddCustomer'>Dirección</p>
                    <input type='text' name='direccionModalAddCustomer' id='txtdireccionModalAddCustomer' />

                </div>

                <div className='modal_addCustomer-btn'>
                    <button type='button' id='btnaddCustomer'>Agregar</button>
                </div>

            </form>

        </Modal>
    )
}
