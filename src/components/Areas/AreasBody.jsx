import { IoIosAddCircle } from 'react-icons/io';

export const AreasBody = () => {
    return (
        <div className='areas_body-main'>

            <div className='areas_body-areas'>
                
                <div className='areas_body-areas-title'>
                    <p id='lblTitleAreaBody'>Area</p>
                </div>

                <div className='areas_body-areas-inputs'>
                    
                    <div className='areas_body-areas-inputs-left'>

                        <div className='areas_body-areas-inputs-left-descripcion'>
                            <p id='lblDescripcionAreaBody'>Descripción del Area</p>
                            <input type='text' id='txtDescripcionAreaBody' name='descripcionAreaBody' />
                        </div>

                        <div className='areas_body-areas-inputs-left-observaciones'>
                            <p id='lblObservacionesAreaBody'>Observaciones</p>
                            <textarea id="txtObservacionesAreaBody" name="observacionesAreaBody" rows="4" cols="50"></textarea>
                        </div>
                    </div>

                    <div className='areas_body-areas-inputs-right'>
                        
                        <div className='areas_body-areas-inputs-right-encargado'>
                            <p id='lblEncargadoAreaBody'>Encargado</p>
                            <div className='areas_body-areas-inputs-right-encargado-input'>
                                <select id='cboEncargadoAreaBody' name='encargadoAreaBody'>
                                    <option value='1'>Juan</option>
                                    <option value='2'>Pedro</option>
                                </select>
                                <div className='areas_body-areas-inputs-right-encargado-input-icon'>
                                    <IoIosAddCircle id='btnAddArea'/>
                                </div>
                            </div>
                        </div>

                        <div className='areas_body-areas-inputs-right-table'>
                            <table className='areas_body-areas-inputs-right-table-main'>
                                <thead>
                                    <tr>
                                        <th className='areas_body-areas-inputs-right-table-header-encargado'>Encargado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='areas_body-areas-inputs-right-table-encargado'>test</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>

            </div>

            <div className='areas_body-body'>
                
                <div className='areas_body-body-inputs'>

                    <div className='areas_body-body-inputs-codigoP'>
                        <p id='lblCodigoPArea'>Código del Producto</p>
                        <div className='areas_body-body-inputs-codigoP-input'>
                            <input type='text' id='txtCodigoPArea' name='codigoPArea' />
                            <div className='areas_body-body-inputs-codigoP-input-icon'>
                                <IoIosAddCircle id='btnAddProducto'/>
                            </div>
                        </div>
                    </div>

                    <div className='areas_body-body-inputs-descripP'>
                        <p id='lblDescripcionPAreaBody'>Descripción del Producto</p>
                        <input type='text' id='txtDescripcionPAreaBody' name='descripcionPAreaBody' />
                    </div>
                </div>

                <div className='areas_body-body-table'>
                    <table className='areas_body-body-table-main'>
                        <thead>
                            <tr>
                                <th className='areas_body-body-table-header-codArticulo'>Código Artículo</th>
                                <th className='areas_body-body-table-header-barras'>Barras</th>
                                <th className='areas_body-body-table-header-descripcion'>Descripción</th>
                                <th className='areas_body-body-table-header-existencia'>Existencia</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='areas_body-body-table-codArticulo'>test</td>
                                <td className='areas_body-body-table-barras'>test</td>
                                <td className='areas_body-body-table-descripcion'>test</td>
                                <td className='areas_body-body-table-existencia'>test</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    )
}
