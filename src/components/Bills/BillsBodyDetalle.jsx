
export const BillsBodyDetalle = () => {
    return (
        <div className='billsBody_detalle-main'>

            <div className='billsBody_detalle-title'>
                <p id='lblTitleBodyDetalleBills'>Detalle</p>
            </div>

            <div className='billsBody_detalle-inputs'>

                <div className='billsBody_detalle-inputs-cantidad'>
                    <p id='lblCantidadBodyDetalleBills'>Cantidad:</p>
                    <input type='number' id='txtCantidadBodyDetalleBills' name='cantidadBodyDetalleBills'/>
                </div>

                <div className='billsBody_detalle-inputs-descripcion'>
                    <p id='lblDescripcionBodyDetalleBills'>Descripción:</p>
                    <input type='text' id='txtDescripcionBodyDetalleBills' name='descripcionBodyDetalleBills'/>
                </div>

                <div className='billsBody_detalle-inputs-precio'>
                    <p id='lblPrecioBodyDetalleBills'>Precio unidad:</p>
                    <input type='number' id='txtPrecioBodyDetalleBills' name='precioBodyDetalleBills'/>
                </div>

                <div className='billsBody_detalle-inputs-impuesto'>
                    <p id='lblimpuestoBodyDetalleBills'>Impuesto:</p>
                    <input type='number' id='txtImpuestoBodyDetalleBills' name='impuestoBodyDetalleBills'/>
                </div>

                <div className='billsBody_detalle-inputs-descuento'>
                    <p id='lbldescuentoBodyDetalleBills'>Descuento:</p>
                    <input type='number' id='txtDescuentoBodyDetalleBills' name='descuentoBodyDetalleBills'/>
                </div>

                <div className='billsBody_detalle-inputs-cuentaContable'>
                    <p id='lblcuentaContableBodyDetalleBills'>Cuenta Contable:</p>
                    <input type='text' id='txtCuentaContableBodyDetalleBills' name='cuentaContableBodyDetalleBills'/>
                </div>

                <div className='billsBody_detalle-inputs-descripcion2'>
                    <p id='lbldescripcion2BodyDetalleBills'>Descripción:</p>
                    <input type='text' id='txtDescripcion2BodyDetalleBills' name='descripcion2BodyDetalleBills'/>
                </div>
            </div>

            <div className='billsBody_detalle-table'>
                <table className='billsBody_detalle-table-main'>
                    <thead>
                        <tr>
                            <th className='billsBody_detalle-table-header-cantidad'>Cantidad</th>
                            <th className='billsBody_detalle-table-header-descrip'>Descripción</th>
                            <th className='billsBody_detalle-table-header-precioUnidad'>Precio Unidad</th>
                            <th className='billsBody_detalle-table-header-descuento'>% Des</th>
                            <th className='billsBody_detalle-table-header-impuesto'>% Imp</th>
                            <th className='billsBody_detalle-table-header-subtotal'>Sub total</th>
                            <th className='billsBody_detalle-table-header-cuentaContable'>Cuenta Contable</th>
                            <th className='billsBody_detalle-table-header-descrip'>Descripción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='billsBody_detalle-table-cantidad'>test</td>
                            <td className='billsBody_detalle-table-descrip'>test</td>
                            <td className='billsBody_detalle-table-precioUnidad'>test</td>
                            <td className='billsBody_detalle-table-descuento'>test</td>
                            <td className='billsBody_detalle-table-impuesto'>test</td>
                            <td className='billsBody_detalle-table-subtotal'>test</td>
                            <td className='billsBody_detalle-table-cuentaContable'>test</td>
                            <td className='billsBody_detalle-table-descrip'>test</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='billsBody_detalle-totals'>
                
                <div className='billsBody_detalle-totals-subtotal'>
                    <p id='lblSubtotalBodyDetalleBillsT'>Subtotal:</p>
                    <input type='text' id='txtSubtotalBodyDetalleBillsT' name='subtotalBodyDetalleBillsT'/>
                </div>

                <div className='billsBody_detalle-totals-descuento'>
                    <p id='lblDescuentoBodyDetalleBillsT'>Descuento:</p>
                    <input type='text' id='txtDescuentoBodyDetalleBillsT' name='descuentoBodyDetalleBillsT'/>
                </div>

                <div className='billsBody_detalle-totals-impuesto'>
                    <p id='lblImpuestoBodyDetalleBillsT'>Impuesto:</p>
                    <input type='text' id='txtImpuestoBodyDetalleBillsT' name='impuestoBodyDetalleBillsT'/>
                </div>

                <div className='billsBody_detalle-totals-total'>
                    <p id='lblTotalBodyDetalleBillsT'>Total:</p>
                    <input type='text' id='txtTotalBodyDetalleBillsT' name='totalBodyDetalleBillsT'/>
                </div>

            </div>
        </div>
    )
}
