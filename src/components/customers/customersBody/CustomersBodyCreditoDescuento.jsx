
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
                    <p>LeftSide</p>
                </div>

                <div className='customers_body-credito-box-rightSide'>
                    <p>rightSide</p>
                </div>

            </div>

        </div>
    )
}
