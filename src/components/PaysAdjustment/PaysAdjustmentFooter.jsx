
export const PaysAdjustmentFooter = () => {
    return (
        <div className='pays_adjustment-footer-main'>

            <div className='pays_adjustment-footer-left'>
                
                <div className='pays_adjustment-footer-left-tipoCambio'>
                    <p id='lblTipoCambioPaysAdj'>Tipo Cambio</p>
                    <input type='text' id='txtTipoCambioPaysAdj' name='tipoCambioPaysAdj'/>
                </div>

                <div className='pays_adjustment-footer-left-tipoNota'>
                    <p id='lblTipoNotaPaysAdj'>Tipo Nota</p>
                    <input type='text' id='txtTipoNotaPaysAdj' name='tipoNotaPaysAdj'/>
                </div>

            </div>

            <div className='pays_adjustment-footer-right'>
                
                <p id='lblUserPaysAdjustment'>Usuario →</p>
                <input type='text' id='txtUserPaysAdjustment' name='userPaysAdjustment'/>
                <p id='lblSistemaPaysAdjustment'>Sistema</p>

            </div>


        </div>
    )
}
