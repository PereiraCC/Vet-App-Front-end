import { FaSearch } from 'react-icons/fa';

export const TaxClaimBody = () => {
    return (
        <div className='taxClaim_body-main'>

            <div className='taxClaim_body-inputs'>
                
                <div className='taxClaim_body-inputs-firstLine'>
                    <div className='taxClaim_body-inputs-firstLine-titles'>
                        <p id='lblDescripcionTaxClaimBody'>Descripción del Producto</p>
                        <input type='text' id='txtTitleTaxClaimBody' name='titleTaxClaimBody' />
                    </div>
                    <input type='text' id='txtDescripcionTaxClaimBody' name='descripcionTaxClaimBody'/>
                </div>

                <div className='taxClaim_body-inputs-secondLine'>
                    
                    <div className='taxClaim_body-inputs-secondLine-codigo'>
                        <p id='lblCodigoTaxClaimBody'>Código</p>
                        <div className='taxClaim_body-inputs-secondLine-codigo-inputs'>
                            <input type='text' id='txtCodigoTaxClaimBody' name='codigoTaxClaimBody' />
                            <div className='taxClaim_body-inputs-secondLine-codigo-inputs-icon'>
                                <FaSearch id='btnSearchTaxClaim'/>
                            </div>
                        </div>
                    </div>

                    <div className='taxClaim_body-inputs-secondLine-cantidadContada'>
                        <p id='lblCantidadContadaTaxClaimBody'>Cantidad Contada:</p>
                        <input type='text' id='txtCantidadContadaTaxClaimBody' name='cantidadContadaTaxClaimBody' />
                    </div>

                    <div className='taxClaim_body-inputs-secondLine-cantidadSistema'>
                        <p id='lblcantidadSistemaTaxClaimBody'>Cantidad Sistema</p>
                        <input type='text' id='txtCantidadSistemaTaxClaimBody' name='cantidadSistemaTaxClaimBody' />
                    </div>

                    <div className='taxClaim_body-inputs-secondLine-diferencia'>
                        <p id='lbldiferenciaTaxClaimBody'>Diferencia</p>
                        <input type='text' id='txtDiferenciaTaxClaimBody' name='diferenciaTaxClaimBody' />
                    </div>

                    <div className='taxClaim_body-inputs-secondLine-btn'>
                        <button id='btnContarTaxClaimBody'>Contar</button>
                    </div>

                </div>

            </div>

            <div className='taxClaim_body-table'>
                <table className='taxClaim_body-table-main'>
                    <thead>
                        <tr>
                            <th className='taxClaim_body-table-header-codigo'>Código Artículo</th>
                            <th className='taxClaim_body-table-header-descrip'>Descripción</th>
                            <th className='taxClaim_body-table-header-existencia'>Existencia</th>
                            <th className='taxClaim_body-table-header-toma'>Toma</th>
                            <th className='taxClaim_body-table-header-diferencia'>Diferencia</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='taxClaim_body-table-codigo'>test</td>
                            <td className='taxClaim_body-table-descrip'>test</td>
                            <td className='taxClaim_body-table-existencia'>test</td>
                            <td className='taxClaim_body-table-toma'>test</td>
                            <td className='taxClaim_body-table-diferencia'>test</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
