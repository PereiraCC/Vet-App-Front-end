
export const PurchaseReturnsDatosFactura = () => {
    return (
        <div className='purchaseReturn_datosFactura-main'>

            <div className='purchaseReturn_datosFactura-firstLine'>
                <div className='purchaseReturn_datosFactura-firstLine-title'>
                    <p id='lblTitleDatosFacturaPR'>Datos de la Factura</p>
                </div>

                <div className='purchaseReturn_datosFactura-firstLine-inputs'>
                    
                    <div className='purchaseReturn_datosFactura-firstLine-inputs-tipo'>
                        <p id='lblTipoFacturaPR'>Tipo</p>
                        <select id='cboTipoFacturaPR' name='cboTipoFacturaPR'>
                            <option value='0'>0</option>
                            <option value='1'>1</option>
                        </select>
                    </div>

                    <div className='purchaseReturn_datosFactura-firstLine-inputs-numero'>
                        <p id='lblNumeroFacturaPR'>Número</p>
                        <input id='txtNumeroFacturaPR' type='text' name='numeroFacturaPR' />
                    </div>

                    <div className='purchaseReturn_datosFactura-firstLine-inputs-Proveedor'>
                        <p id='lblProveedorFacturaPR'>Proveedor</p>
                        <input id='txtProveedorFacturaPR' type='text' name='proveedorFacturaPR' />
                    </div>

                    <div className='purchaseReturn_datosFactura-firstLine-inputs-monto'>
                        <p id='lblMontoFacturaPR'>Monto Factura</p>
                        <input id='txtMontoFacturaPR' type='text' name='montoFacturaPR' />
                    </div>

                    <div className='purchaseReturn_datosFactura-firstLine-inputs-fecha'>
                        <p id='lblFechaFacturaPR'>Fecha</p>
                        <input id='txtFechaFacturaPR' type='date' name='fechaFacturaPR' />
                    </div>

                    <div className='purchaseReturn_datosFactura-firstLine-inputs-moneda'>
                        <p id='lblMonedaFacturaPR'>Moneda</p>
                        <select id='cboMonedaFacturaPR' name='cboMonedaFacturaPR'>
                            <option value='COLON'>COLON</option>
                            <option value='DOLAR'>DOLAR</option>
                        </select>
                    </div>

                </div>
            </div>

            <div className='purchaseReturn_datosFactura-secondLine'>
                <p>SecondLine</p>
            </div>

        </div>
    )
}
