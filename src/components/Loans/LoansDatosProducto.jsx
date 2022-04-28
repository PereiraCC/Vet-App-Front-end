
export const LoansDatosProducto = () => {
    return (
        <div className='loans_datosProducto-main'>

            <div className='loans_datosProducto-header'>
                <p id='lblDatosProductosTitle'>Datos de los productos</p>
            </div>

            <div className='loans_datosProducto-inputs'>
                
                <div className='loans_datosProducto-inputs-firstLine'>
                    
                    <div className='loans_datosProducto-inputs-firstLine-codigo'>
                        <p id='lblCodigoDPLoans'>Codigo</p>
                        <input type='text' id='txtCodigoDPLoans' name='codigoDPLoans'/>
                    </div>

                    <div className='loans_datosProducto-inputs-firstLine-descri'>
                        <p id='lblDescripDPLoans'>Descripción</p>
                        <input type='text' id='txtDescripDPLoans' name='descripDPLoans'/>
                    </div>

                    <div className='loans_datosProducto-inputs-firstLine-existencia'>
                        <p id='lblExistenciaDPLoans'>Existencia actual</p>
                        <input type='text' id='txtExistenciaDPLoans' name='existenciaDPLoans'/>
                    </div>

                    <div className='loans_datosProducto-inputs-firstLine-prestamos'>
                        <p id='lblPrestamosDPLoans'>Prestamos</p>
                        <input type='text' id='txtPrestamosDPLoans' name='prestamosDPLoans'/>
                    </div>

                    <div className='loans_datosProducto-inputs-firstLine-precio'>
                        <p id='lblPrecioDPLoans'>Precio</p>
                        <input type='text' id='txtPrecioDPLoans' name='precioDPLoans'/>
                    </div>

                </div>

                <div className='loans_datosProducto-inputs-secondLine'>
                    
                    <div className='loans_datosProducto-inputs-secondLine-cantidad'>
                        <p id='lblCantidadDPLoans'>Cantidad para prestamo</p>
                        <input type="number" id="txtCantidadDPLoans" name="cantidadDPLoans" step="1" />
                    </div>

                    <div className='loans_datosProducto-inputs-secondLine-button'>
                        <button id='btnAgregarDPLoans'>Agregar</button>
                    </div>

                </div>

            </div>

            <div className='loans_datosProducto-table'>
                <table className='loans_datosProducto-table-table'>
                    <thead>
                        <tr>
                            <th className='loans_datosProducto-table-header-descrip'>Descripción</th>
                            <th className='loans_datosProducto-table-header-cantidad'>Cantidad</th>
                            <th className='loans_datosProducto-table-header-precio'>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='loans_datosProducto-table-descrip'>test</td>
                            <td className='loans_datosProducto-table-cantidad'>test</td>
                            <td className='loans_datosProducto-table-precio'>test</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='loans_datosProducto-checks'>
                
                <div className='loans_datosProducto-checks-input'>
                    <input type='text' id='txtTableLoans' name='tableLoans'/>
                </div>

                <div className='loans_datosProducto-checks-entregado'>
                    <div className="loans_datosProducto-checks-entregado-input"> 
                        <input type="checkbox" id="checkEntregadoLoans" name="entregadoLoans" value="entregadoLoans" />
                    </div>
                    <label for="checkEntregadoLoans" id="lblEntregaLoans">Entregado</label>
                </div>

                <div className='loans_datosProducto-checks-anulado'>
                    <div className="loans_datosProducto-checks-anulado-input"> 
                        <input type="checkbox" id="checkAnuladodoLoans" name="anuladoLoans" value="anuladoLoans" />
                    </div>
                    <label for="checkAnuladodoLoans" id="lblanuladoLoans">Anulado</label>
                </div>

            </div>

        </div>
    )
}
