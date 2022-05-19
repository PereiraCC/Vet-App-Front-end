import { HiDocumentAdd } from 'react-icons/hi';
import { FaRegSave, FaSearch } from 'react-icons/fa';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { AiFillEdit } from 'react-icons/ai';

export const CategoryActions = () => {
    return (
        <div className='category_actions-main'>

            <div className='category_actions-header'>
                <p id='lblTitlePresentation'>Categoria de Acción</p>
            </div>

            <div className='category_actions-body'>
                
                <div className='category_actions-body-tipo-label'>
                    <p id="lblTipoPresentation">Nombre</p>
                </div>

                <div className='category_actions-body-tipo-input'>
                    <input type="text" id="txtTipoPresentation" name='nombreCategoryAction' />
                </div>

            </div>

            <div className='category_actions-icons'>
                
                <div className='category_actions-icons-nuevo'>
                    <div className='category_actions-icons-nuevo-icon'>
                        <HiDocumentAdd id='iconNuevoCategoryAction'/>
                    </div>
                    <p id='lblNuevoCategoryAction'>Nuevo</p>
                </div>

                <div className='category_actions-icons-registrar'>
                    <div className='category_actions-icons-registrar-icon'>
                        <FaRegSave id='iconRegistrarCategoryAction'/>
                    </div>
                    <p id='lblRegistrarCategoryAction'>Guardar</p>
                </div>

                <div className='denominationCoins-icons-Editar'>
                    <div className='denominationCoins-icons-Editar-icon'>
                        <AiFillEdit id='iconEditarCategoryAction'/>
                    </div>
                    <p id='lblEditarCategoryAction'>Editar</p>
                </div>

                <div className='category_actions-icons-Buscar'>
                    <div className='category_actions-icons-Buscar-icon'>
                        <FaSearch id='iconBuscarCategoryAction'/>
                    </div>
                    <p id='lblBuscarCategoryAction'>Buscar</p>
                </div>

                <div className='category_actions-icons-eliminar'>
                    <div className='category_actions-icons-eliminar-icon'>
                        <RiDeleteBin2Fill id='iconEliminarCategoryAction'/>
                    </div>
                    <p id='lblEliminarCategoryAction'>Eliminar</p>
                </div>

            </div>

        </div>
    )
}
