
import { BsFillCheckCircleFill } from 'react-icons/bs';

export const CustomersBodyCartaExoneracion = () => {
    return (
        <div className='customers_body-carta-main'>
            
            <div className='customers_body-carta-first-box'>

                <div className='customers_body-carta-first-box-cliente'>
            
                    <div className='customers_body-carta-first-box-cliente-labelsInputs'>
                        <p id='lblCECliente'>Cliente</p>
                        <div className='customers_body-carta-first-box-cliente-labelsInputs-inputs'>
                            <input type='text' name='CEidCliente' id="txtCEidCliente"/>
                            <input type='text' name='CENombreCliente' id="txtCENombreCliente"/>
                        </div>
                    </div>

                    <div className='customers_body-carta-first-box-cliente-buttons'>
                        <button id='btnCEBuscarCliente'>Buscar Cliente</button>
                    </div>

                </div>

                <div className='customers_body-carta-first-box-data'>
                    
                    <div className='customers_body-carta-first-box-data-firstLine'>
                        
                        <div className='customers_body-carta-first-box-data-firstLine-motivo'>
                            <p id='lblCEMotivo'>Motivo Exoneracion</p>
                            <select id='cboCEMotivo'>
                                <option value='0'>Compras Autorizadas</option>
                            </select>
                        </div>

                        <div className='customers_body-carta-first-box-data-firstLine-numeroDocumento'>
                            <p id='lblCEnumeroDocumento'>Numero Documento</p>
                            <div className='customers_body-carta-first-box-data-firstLine-numeroDocumento-inputs'>
                                <input type='text' name='CENumeroDocumento' id="txtCENumeroDocumento"/>
                                <BsFillCheckCircleFill id='btnCECheckDocumento'/>
                            </div>
                        </div>

                        <div className='customers_body-carta-first-box-data-firstLine-fechaEmision'>
                            <p id='lblCEfechaEmision'>Fecha Emision</p>
                            <input type="date" id="txtCEfechaEmision" name="fechaEmision"
                                min="01-01-2022" max="12-31-2022" />
                        </div>

                        <div className='customers_body-carta-first-box-data-firstLine-fechaVence'>
                            <p id='lblCEfechaVence'>Fecha Vence</p>
                            <input type="date" id="txtCEfechaVence" name="fechaVence"
                                min="01-01-2022" max="12-31-2022" />
                        </div>

                        <div className='customers_body-carta-first-box-data-firstLine-exoneracion'>
                            <p id='lblCEexoneracion'>Exoneracion</p>
                            <div className='customers_body-carta-first-box-data-firstLine-exoneracion-inputs'>
                                <p id='lblCEexoneracionPorcentaje'>%</p>
                                <input type='text' name='CEExoneracion' id="txtCEExoneracion"/>
                            </div>
                        </div>

                    </div>

                    <div className='customers_body-carta-first-box-data-secondLine'>

                        <div className='customers_body-carta-first-box-data-secondLine-IV'>
                            <p id='lblCEIV'>% IV</p>
                            <input type="text" id="txtCEIV" name="CEIV" />
                        </div>

                        <div className='customers_body-carta-first-box-data-secondLine-descripcion'>
                            <p id='lblCEDescripcion'>Breve descripcion de para que productos se debe aplicar</p>
                            <input type="text" id="txtCEDescripcion" name="CEDescripcion" />
                        </div>

                        <div className='customers_body-carta-first-box-data-secondLine-btnAgregarCarta'>
                            <button id='btnCEAgregarCarta'>Agregar Carta</button>
                        </div>

                        <div className='customers_body-carta-first-box-data-secondLine-btnEliminarCarta'>
                            <button id='btnCEEliminarCarta'>Eliminar Carta</button>
                        </div>

                    </div>

                </div>

            </div>

            <div className='customers_body-carta-second-box'>
                
                <table className='customers_body-carta-second-box-table-main'>
                    <thead>
                        <tr>
                            <th className='customers_body-carta-second-box-table-header-tipo'>Tipo Exoneracion</th>
                            <th className='customers_body-carta-second-box-table-header-numeroDocumento'>Numero Documento</th>
                            <th className='customers_body-carta-second-box-table-header-fechaEmision'>Fecha Emision</th>
                            <th className='customers_body-carta-second-box-table-header-fechaVence'>Fecha Vence</th>
                            <th className='customers_body-carta-second-box-table-header-porcentaje'>Porcentaje Compra</th>
                            <th className='customers_body-carta-second-box-table-header-impuesto'>Impuesto</th>
                            <th className='customers_body-carta-second-box-table-header-nota'>Nota</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='customers_body-carta-second-box-table-tipo'>test</td>
                            <td className='customers_body-carta-second-box-table-numeroDocumento'>test</td>
                            <td className='customers_body-carta-second-box-table-fechaEmision'>test</td>
                            <td className='customers_body-carta-second-box-table-fechaVence'>test</td>
                            <td className='customers_body-carta-second-box-table-porcentaje'>test</td>
                            <td className='customers_body-carta-second-box-table-impuesto'>test</td>
                            <td className='customers_body-carta-second-box-table-nota'>test</td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </div>
    )
}
