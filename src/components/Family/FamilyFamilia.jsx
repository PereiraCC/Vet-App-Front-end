
export const FamilyFamilia = () => {
    return (
        <div className='family_familia-main'>
            
            <div className='family_familia-descrip'>
                <p id='lblDescripFamilia'>Descripción</p>
                <input type='text' id='txtDescripFamilia' name="descripFamilia" />
            </div>

            <div className='family_familia-cuentasCont'>

                <p id='lblCuentasContFamilia'>Cuentas Contables</p>
                
                <div className='family_familia-cuentasCont-inputs'>
                    
                    <div className='family_familia-cuentasCont-inputs-ventaGravada'>
                        <p id='lblVentaGravadaFamilias'>Venta Gravada</p>
                        <input type='text' id='txtVentaGravadaFamilias' name='ventaGravadaFamilias' />
                        <input type='text' id='txtVentaGravadaFamilias2' name='ventaGravadaFamilias2' />
                    </div>

                    <div className='family_familia-cuentasCont-inputs-ventaExenta'>
                        <p id='lblVentaExentaFamilias'>Venta Exenta</p>
                        <input type='text' id='txtVentaExentaFamilias' name='ventaExentaFamilias' />
                        <input type='text' id='txtVentaExentaFamilias2' name='ventaExentaFamilias2' />
                    </div>

                    <div className='family_familia-cuentasCont-inputs-costoVenta'>
                        <p id='lblCostoVentaFamilias'>Costo Venta</p>
                        <input type='text' id='txtCostoVentaFamilias' name='costoVentaFamilias' />
                        <input type='text' id='txtCostoVentaFamilias2' name='costoVentaFamilias2' />
                    </div>

                </div>

            </div>

            <div className='family_familia-obser'>
                
                <div className='family_familia-obser-input'>
                    <p id='lblObservFamilia'>Observaciones:</p>
                    <textarea id='txtObservFamilia' name='observFamilia'></textarea>
                </div>

                <div className='family_familia-obser-input-btn'>
                    <button id='btnGuardarFamilia'>Guardar</button>
                </div>
                
            </div>

        </div>
    )
}
