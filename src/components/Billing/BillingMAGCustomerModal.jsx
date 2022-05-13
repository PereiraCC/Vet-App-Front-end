import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { CloseModalMAGCustomer } from '../../actions/billing';
import { customStyles } from '../../helpers/styleModal';

Modal.setAppElement('#root');

export const BillingMAGCustomerModal = () => {

    const dispatch = useDispatch();
    const { modalMAGCustomerOpen } = useSelector(state => state.billing);

    const closeModal = () => {
        dispatch( CloseModalMAGCustomer() );
        console.log('closeModal');
    }

    return (
        <Modal
            isOpen={ modalMAGCustomerOpen }
            onRequestClose={closeModal}
            style={ customStyles }
            closeTimeoutMS={ 200 }
            className={'modal-magCustomer'}
            overlayClassName={'modal-fondo'}
        >           

            <form className='modal_magCustomer-main'>

                <div className='modal_magCustomer-title'>
                    <p id='lblTitleAddCustomers'>Consulta Registro en el MAG</p>
                    <p id='lblCloseAddCustomers' onClick={ closeModal }>X</p>
                </div>

                <div className='modal_magCustomer-first'>
                    <p id='lblNombreModalMAGCustomer'>Nombre del Cliente</p>
                    <input type='text' name='nombreModalMAGCustomer' id='txtNombreModalMAGCustomer' />
                </div>

                <div className='modal_magCustomer-second'>
                    
                    <div className='modal_magCustomer-second-inputs'>

                        <div className='modal_magCustomer-second-inputs-check'>
                            <div className="modal_magCustomer-second-inputs-check-input">
                                <input type="checkbox" id="checkActivoMAG" name="activoMAG" value="activoMAG" />
                            </div>
                            <label for="checkActivoMAG" id="lbActivoMAG">Indicador Activo MAG</label>
                        </div>

                        <div className='modal_magCustomer-second-inputs-estado'>
                            <p id='lblEstadoModalMAGCustomer'>Estado</p>
                            <input type='text' name='estadoModalMAGCustomer' id='txtEstadoModalMAGCustomer' />
                        </div>

                        <div className='modal_magCustomer-second-inputs-fecha'>
                            <p id='lblFechaModalMAGCustomer'>Fecha Baja</p>
                            <input type='date' name='fechaModalMAGCustomer' id='txtFechaModalMAGCustomer' />
                        </div>

                    </div>

                    <div className='modal_magCustomer-second-textArea'>
                        <textarea id='txtMAGCustomerModal' name='MAGCustomerModal' cols={3} rows={5}></textarea>
                    </div>

                </div>

                <div className='modal_magCustomer-btn'>

                    <div className='modal_magCustomer-btn-check'>
                        <div className="modal_magCustomer-btn-check-input">
                            <input type="checkbox" id="checkProductorMAG" name="productorMAG" value="productorMAG" />
                        </div>
                        <label for="checkProductorMAG" id="lbProductorMAG">Productor / Distribuidor</label>
                    </div>

                    <div className='modal_magCustomer-btn-aceptar'>
                        <button type='button' id='btnMAGCustomer'>Editar</button>
                    </div>

                </div>

            </form>

        </Modal>
    )
}
