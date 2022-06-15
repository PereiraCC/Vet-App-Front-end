import Modal from 'react-modal';

import { customStyles } from '../../helpers/styleModal';

export const ModalSearchProviders = () => {
    return (
        <Modal
            isOpen={ true }
            // onRequestClose={ closeModal }
            style={ customStyles }
            closeTimeoutMS={ 200 }
            className={'modal-searchProviders'}
            overlayClassName={'modal-fondo'}
        >
            <form className='modal_searchProviders-main'>

                <div className='modal_searchProviders-title'>
                    <p id='lblTitleSearchProvidersModal'>Buscar Cabys del Proveedor</p>
                    <p id='lblCloseSearchProvidersModal'>X</p>
                </div>

                <div className='modal_searchProviders-table'>
                    <table className='modal_searchProviders-table-main'>
                        <thead>
                            <tr>
                                <th className='modal_searchProviders-table-header-proveedor'>Proveedor</th>
                                <th className='modal_searchProviders-table-header-descrip'>Descripción</th>
                                <th className='modal_searchProviders-table-header-cabys'>Cabys</th>
                                <th className='modal_searchProviders-table-header-descripCabys'>Descripción Cabys</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='modal_searchProviders-table-proveedor'>test</td>
                                <td className='modal_searchProviders-table-descrip'>test</td>
                                <td className='modal_searchProviders-table-cabys'>test</td>
                                <td className='modal_searchProviders-table-descripCabys'>test</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='modal_searchProviders-buttons'>
                    <input type='text' id='lblBuscarSearchProviders' name='buscarSearchProviders' />
                    <button id='btnBuscarSearchProviders'>Aceptar</button>
                </div>

            </form>
        </Modal>
    )
}
