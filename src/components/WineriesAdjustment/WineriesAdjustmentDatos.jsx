
export const WineriesAdjustmentDatos = () => {
    return (
        <div className='wineries_adjustment-datos-main'>
            
            <div className='wineries_adjustment-datos-firstLine'>
                <p id='lblFechaDatosWineriesA'>Fecha</p>
                <input type="date" id="txtFechaDatosWineriesA" name="fechaDatosWineriesA"
                        min="01-01-2022" max="12-31-2022" />
            </div>

            <div className='wineries_adjustment-datos-secondLine'>
                
                <div className='wineries_adjustment-datos-secondLine-nombre'>
                    <p id='lblNombreWineriesA'>Nombre de la Casa consignante o Bodega</p>
                    <select id='cboNombreWineriesA'>
                        <option value="ABOPAC">ABOPAC</option>
                        <option value="ABOPAB">ABOPAB</option>
                        <option value="ABOPAF">ABOPAF</option>
                    </select>
                </div>

                <div className='wineries_adjustment-datos-secondLine-anulado'>
                    <div className='wineries_adjustment-datos-thirdLine-input'> 
                        <input type='checkbox' id='checkAnuladoWineriesA' name='anuladoW' value='anuladoW' />
                    </div>
                    <label for='checkAnuladoWineriesA' id='lblAnuladoWineriesA'>Anulado</label>
                </div>

            </div>

            <div className='wineries_adjustment-datos-thirdLine'>
                
                <div className='wineries_adjustment-datos-thirdLine-cliente'>
                    <p id='lblClienteWineriesA'>Cliente</p>
                    <input type="text" id="txtClienteWineriesA" name="clienteWineriesA" />
                </div>

                <div className='wineries_adjustment-datos-thirdLine-referencia'>
                    <p id='lblReferenciaWineriesA'>Referencia</p>
                    <input type="text" id="txtReferenciaWineriesA" name="referenciaWineriesA" />
                </div>

            </div>

        </div>
    )
}
