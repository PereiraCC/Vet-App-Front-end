
export const WineriesAdjustmentDetalleAjuste = () => {
    return (
        <div className='wineries_adjustment-detalle-main'>

            <div className='wineries_adjustment-detalle-header'>
                <p id='lblDetalleAjusteTitle'>Detalle de Ajuste</p>
            </div>

            <div className='wineries_adjustment-detalle-inputs'>
                
                <div className='wineries_adjustment-detalle-inputs-codigo'>
                    <p id='lblCodigoDetalleWA'>Código</p>
                    <input type='text' id='txtCodigoDetalleWA' name='codigoDetalleWA'/>
                </div>

                <div className='wineries_adjustment-detalle-inputs-bodega'>
                    <p id='lblBodegaDetalleWA'>Bodega</p>
                    <input type='text' id='txtBodegaDetalleWA' name='bodegaDetalleWA'/>
                </div>

                <div className='wineries_adjustment-detalle-inputs-vet'>
                    <p id='lblVetDetalleWA'>Veterinaria</p>
                    <input type='text' id='txtVetDetalleWA' name='vetDetalleWA'/>
                </div>

                <div className='wineries_adjustment-detalle-inputs-tipo'>

                    <p id='lblTipoDetalleWA'>Tipo</p>
                    <div className='wineries_adjustment-detalle-inputs-tipo-radios'>

                        <div className='wineries_adjustment-detalle-inputs-tipo-entrada-radio'>
                            <input type="radio" id="rbDetalleWAEntrada" name="detalleWAEntrada" value="detalleWAEntrada"/>
                            <label for="rbDetalleWAEntrada" id='lblRadioEntradaWA'>Entrada</label>
                        </div>

                        <div className='wineries_adjustment-detalle-inputs-tipo-salida-radio'>
                            <input type="radio" id="rbDetalleWASalida" name="detalleWASalida" value="detalleWASalida"/>
                            <label for="rbDetalleWASalida" id='lblRadioSalidaWA'>Salida</label>
                        </div>

                    </div>

                </div>

                <div className='wineries_adjustment-detalle-inputs-cantidad'>
                    <p id='lblCantidadDetalleWA'>Cantidad</p>
                    <input type='text' id='txtCantidadDetalleWA' name='cantidadDetalleWA'/>
                </div>

            </div>

        </div>
    )
}
