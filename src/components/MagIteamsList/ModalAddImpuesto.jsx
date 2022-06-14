import Modal from 'react-modal';
import { useDispatch, useSelector  } from 'react-redux';

import { CloseModalAddMagItemsList } from '../../actions/magItemList';

import { customStyles } from '../../helpers/styleModal';

Modal.setAppElement('#root');

export const ModalAddImpuesto = () => {

    const dispatch = useDispatch();
    const { modalAddImpuestoOpen } = useSelector(state => state.magIteamsList);

    const closeModal = (e) => {
        e.preventDefault();
        dispatch( CloseModalAddMagItemsList() );
    }

    return (
        <Modal
            isOpen={ modalAddImpuestoOpen }
            onRequestClose={ closeModal }
            style={ customStyles }
            closeTimeoutMS={ 200 }
            className={'modal-addImpuesto'}
            overlayClassName={'modal-fondo'}
        >
            <form className='modal_addImpuesto-main'>

                <div className='modal_addImpuesto-title'>
                    <p id='lblTitleAddImpuesto'>Selecciones el Nuevo Impuesto</p>
                    <p id='lblCloseAddImpuesto' onClick={ e => closeModal(e) }>X</p>
                </div>

                <div className='modal_addImpuesto-body'>

                    <div className='modal_addImpuesto-body-cbo'>
                        <p id='lblTitleCboAddImpuesto'>Seleccione el Nuevo Impuesto:</p>
                        <select id='cboAddImpuesto' name='addImpuesto'>
                            <option value='1'>Impuesto 1</option>
                            <option value='2'>Impuesto 2</option>
                        </select>
                    </div>

                    <div className='modal_addImpuesto-body-btns'>
                        <button id='btnCancelAddImpuesto' onClick={ e => closeModal(e) }>Cancelar</button>
                        <button id='btnCambiarAddImpuesto'>Cambiar Impuesto</button>
                    </div>
                </div>

            </form>

        </Modal>
    )
}