
export const CustomersBodyCreditoDescuento = () => {
    return (
        <div className='customers_body-credito-main'>

            <div className='customers_body-credito-btn'>
                <button id="btnActivarOpeCustomersCre">Activar opciones de Credito</button>
            </div>

            <div className='customers_body-credito-check'>
                
                <div className='customers_body-credito-check-input'> 
                    <input type='checkbox' id='checkActivarCre' name='activarCre' value='activarCre' />
                </div>
                <label for='checkActivarCre' id='lblActivarCre'>Activar Crédito</label>

            </div>

            <div className='customers_body-credito-box'>
                
                <div className='customers_body-credito-box-leftSide'>
                    
                    <div className='customers_body-credito-box-leftSide-credito'>
                        <p id='lblCreditoCustomersB'>Crédito</p>
                        <select id='cboCreditoCustomersB' name='cboCreditoCustomersB'>
                            <option value='NO'>NO</option>
                            <option value='SI'>SI</option>
                        </select>
                    </div>

                    <div className='customers_body-credito-box-leftSide-moneda'>
                        <p id='lblMonedaCreditoCustomersB'>Moneda Crédito</p>
                        <select id='cboMonedaCreditoCustomersB' name='cboMonedaCreditoCustomersB'>
                            <option value='COLON'>COLON</option>
                            <option value='DOLAR'>DOLAR</option>
                        </select>
                    </div>

                    <div className='customers_body-credito-box-leftSide-plazo'>
                        <p id='lblPlazoCreditoCustomersB'>Plazo Crédito (Días)</p>
                        <input type='number' id='txtPlazoCreditoCustomersB' name='txtPlazoCreditoCustomersB' />
                    </div>

                    <div className='customers_body-credito-box-leftSide-limite'>
                        <p id='lblLimiteCreditoCustomersB'>Límite de Crédito ₡</p>
                        <input type='text' id='txtLimiteCreditoCustomersB' name='txtLimiteCreditoCustomersB' />
                    </div>

                    <div className='customers_body-credito-box-leftSide-limiteDesc'>
                        <p id='lblLimiteDescCustomersB'>Límite Descuento %</p>
                        <input type='text' id='txtLimiteDescCustomersB' name='txtLimiteDescCustomersB' />
                    </div>

                </div>

                <div className='customers_body-credito-box-rightSide'>
                    
                    <div className='customers_body-credito-box-rightSide-first'>
                        <div className='customers_body-credito-box-rightSide-first-input'> 
                            <input type='checkbox' id='checkEmpresaCustomersB' name='EmpresaCustomersB' value='EmpresaCustomersB' />
                        </div>
                        <label for='checkEmpresaCustomersB' id='lblEmpresaCustomersB'>Empresa, Asociación, Compañia...</label>
                    </div>

                    <div className='customers_body-credito-box-rightSide-second'>
                        <div className='customers_body-credito-box-rightSide-second-input'> 
                            <input type='checkbox' id='checkPermitirCustomersB' name='PermitirCustomersB' value='PermitirCustomersB' />
                        </div>
                        <label for='checkPermitirCustomersB' id='lblPermitirCustomersB'>Permitir la venta sin restriccion de cuenta</label>
                    </div>

                    <div className='customers_body-credito-box-rightSide-third'>
                        <div className='customers_body-credito-box-rightSide-third-input'> 
                            <input type='checkbox' id='checkmorosoCustomersB' name='morosoCustomersB' value='morosoCustomersB' />
                        </div>
                        <label for='checkmorosoCustomersB' id='lblmorosoCustomersB'>Cliente en estado moroso</label>
                    </div>

                    <div className='customers_body-credito-box-rightSide-fourth'>
                        <div className='customers_body-credito-box-rightSide-fourth-input'> 
                            <input type='checkbox' id='checkordenCompraCustomersB' name='ordenCompraCustomersB' value='ordenCompraCustomersB' />
                        </div>
                        <label for='checkordenCompraCustomersB' id='lblordenCompraCustomersB'>Obligar Orden de Compra</label>
                    </div>

                </div>

            </div>

        </div>
    )
}
