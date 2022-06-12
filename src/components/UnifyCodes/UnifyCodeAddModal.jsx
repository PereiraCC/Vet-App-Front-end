import Modal from 'react-modal';
import { customStyles } from '../../helpers/styleModal';


Modal.setAppElement('#root');

export const UnifyCodeAddModal = () => {
    return (
        <Modal
            isOpen={ true }
            // onRequestClose={closeModal}
            style={ customStyles }
            closeTimeoutMS={ 200 }
            className={'modal-unifyCodeAdd'}
            overlayClassName={'modal-fondo'}
        >
            <form className='modal_unifyCode-main'>

                <div className='modal_unifyCode-title'>
                    <p id='lblTitleUnifyCodeModal'>Vincular productos entre puntos de venta</p>
                    <p id='lblCloseUnifyCodeModal'>X</p>
                </div>

                <div className='modal_unifyCode-body'>
                    
                    <div className='modal_unifyCode-body-inputs'>

                        <div className='modal_unifyCode-body-inputs-left'>

                            <div className='modal_unifyCode-body-inputs-left-firstLine'>
                                
                                <div className='modal_unifyCode-body-inputs-left-firstLine-puntoVenta'>
                                    <p id='lblPuntoVenta1UnifyCode'>Punto de venta 1</p>
                                    <select id='selectPuntoVenta1UnifyCode' name='puntoVenta1UnifyCode'>
                                        <option value='1'>Venta 1</option>
                                        <option value='2'>Venta 2</option>
                                    </select>
                                </div>

                                <div className='modal_unifyCode-body-inputs-left-firstLine-codigo'>
                                    <p id='lblCodigo1UnifyCode'>Código 1</p>
                                    <div className='modal_unifyCode-body-inputs-left-firstLine-codigo-inputs'>
                                        <button id='btnBuscarCodigo1UnifyCode'>B</button>
                                        <input id='inputCodigo1UnifyCode' type='text' name='codigo1UnifyCode' />
                                    </div>
                                </div>

                            </div>

                            <div className='modal_unifyCode-body-inputs-left-secondLine'>
                                <p id='lblDescripcion1UnifyCode'>Descripción 1</p>
                                <input id='inputDescripcion1UnifyCode' type='text' name='descripcion1UnifyCode' />
                            </div>
                        </div>

                        <div className='modal_unifyCode-body-inputs-right'>

                            <div className='modal_unifyCode-body-inputs-right-firstLine'>
                                
                                <div className='modal_unifyCode-body-inputs-right-firstLine-puntoVenta'>
                                    <p id='lblPuntoVenta2UnifyCode'>Punto de venta 2</p>
                                    <select id='selectPuntoVenta2UnifyCode' name='puntoVenta2UnifyCode'>
                                        <option value='1'>Venta 1</option>
                                        <option value='2'>Venta 2</option>
                                    </select>
                                </div>

                                <div className='modal_unifyCode-body-inputs-right-firstLine-codigo'>
                                    <p id='lblCodigo2UnifyCode'>Código 2</p>
                                    <div className='modal_unifyCode-body-inputs-right-firstLine-codigo-inputs'>
                                        <button id='btnBuscarCodigo2UnifyCode'>B</button>
                                        <input id='inputCodigo2UnifyCode' type='text' name='codigo2UnifyCode' />
                                    </div>
                                </div>

                            </div>

                            <div className='modal_unifyCode-body-inputs-right-secondLine'>
                                <p id='lblDescripcion2UnifyCode'>Descripción 2</p>
                                <input id='inputDescripcion2UnifyCode' type='text' name='descripcion2UnifyCode' />
                            </div>

                        </div>
                    </div>

                    <div className='modal_unifyCode-body-buttons'>
                        <button id='btnCancelarUnifyCode'>Cancelar</button>
                        <button id='btnAceptarUnifyCode'>Aceptar</button>
                    </div>

                </div>
            </form>
        </Modal>
    )
}
