
export const BillsBodyHeader = () => {
    return (
        <div className='billsBody_header-main'>

            <div className='billsBody_header-title'>
                <p id='lblTitleBodyHeaderBills'>Encabezado</p>
            </div>

            <div className='billsBody_header-inputs'>
                <div className='billsBody_header-inputs-firstLine'>
                    
                    <div className='billsBody_header-inputs-firstLine-proveedor'>
                        <p id='lblProveedorBodyHeaderBills'>Proveedor</p>
                        <input type='text' id='txtProveedorBodyHeaderBills' name='proveedorBodyHeaderBills'/>
                    </div>

                    <div className='billsBody_header-inputs-firstLine-tipo'>
                        <p id='lblTipoBodyHeaderBills'>Tipo</p>
                        <select id='cboTipoBodyHeaderBills' name='tipoBodyHeaderBills'>
                            <option value='1'>Factura</option>
                            <option value='2'>Nota de crédito</option>
                        </select>
                    </div>

                </div>

                <div className='billsBody_header-inputs-secondLine'>

                    <div className='billsBody_header-inputs-secondLine-numero'>
                        <p id='lblNumeroBodyHeaderBills'>Número</p>
                        <input type='text' id='txtNumeroBodyHeaderBills' name='numeroBodyHeaderBills'/>
                    </div>

                    <div className='billsBody_header-inputs-secondLine-fecha'>
                        <p id='lblFechaBodyHeaderBills'>Fecha</p>
                        <input type='date' id='txtFechaBodyHeaderBills' name='fechaBodyHeaderBills'/>
                    </div>

                    <div className='billsBody_header-inputs-secondLine-moneda'>
                        <p id='lblMonedaBodyHeaderBills'>moneda</p>
                        <select id='cboMonedaBodyHeaderBills' name='monedaBodyHeaderBills'>
                            <option value='COLON'>COLON</option>
                            <option value='DOLAR'>DOLAR</option>
                        </select>
                    </div>
                </div>
            </div>


        </div>
    )
}
