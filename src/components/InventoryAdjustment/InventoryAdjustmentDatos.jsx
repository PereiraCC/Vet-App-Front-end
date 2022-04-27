
export const InventoryAdjustmentDatos = () => {
    return (
        <div className='inventory_adjustment-datos-main'>

            <div className='inventory_adjustment-datos-firstBox'>
                
                <div className='inventory_adjustment-datos-firstBox-title'>
                    <p id='lbldatosInventario'>Datos de Inventario</p>
                </div>

                <div className='inventory_adjustment-datos-firstBox-inputs'>
                    
                    <div className='inventory_adjustment-datos-firstBox-inputs-codigo'>
                        <p id='lblCodigoInventoryAd'>Código</p>
                        <input type='text' id='txtCodigoInventoryAd' name='codigoInventoryAd' />
                    </div>

                    <div className='inventory_adjustment-datos-firstBox-inputs-descrip'>
                        <p id='lblDescripInventoryAd'>Descripción</p>
                        <input type='text' id='txtDescripInventoryAd' name='descripInventoryAd' />
                    </div>

                    <div className='inventory_adjustment-datos-firstBox-inputs-existencia'>
                        <p id='lblExistenciaInventoryAd'>Existencia</p>
                        <input type='text' id='txtExistenciaInventoryAd' name='existenciaInventoryAd' />
                    </div>

                    <div className='inventory_adjustment-datos-firstBox-inputs-costoUnit'>
                        <p id='lblCostoInventoryAd'>Costo Unit.</p>
                        <input type='text' id='txtCostoInventoryAd' name='costoInventoryAd' />
                    </div>

                </div>

            </div>

            <div className='inventory_adjustment-datos-secondBox'>
                
                <div className='inventory_adjustment-datos-secondBox-movimientos'>

                    <p id='lblMovimientosIventario'>Movimientos</p>

                    <div className='inventory_adjustment-datos-secondBox-movimientos-entrada'>
                        
                        <div className='inventory_adjustment-datos-secondBox-movimientos-entrada-radio'>
                            <input type="radio" id="rbMovimientosEntrada" name="movimientosEntrada" value="movimientosEntrada"/>
                            <label for="rbMovimientosEntrada" id='lblRadioEntradaInv'>Entrada</label>
                        </div>
                        <p id='lblResulEntradaInventoryAd'>0.00</p>

                    </div>

                    <div className='inventory_adjustment-datos-secondBox-movimientos-salida'>
                        
                        <div className='inventory_adjustment-datos-secondBox-movimientos-salida-radio'>
                            <input type="radio" id="rbMovimientosSalida" name="movimientosSalida" value="movimientosSalida"/>
                            <label for="rbMovimientosSalida" id='lblRadioSalidaInv'>Salida</label>
                        </div>
                        <p id='lblSalidaInventoryAd'>0.00</p>

                    </div>

                    <div className='inventory_adjustment-datos-secondBox-movimientos-muerteAnimales'>

                        <div className="inventory_adjustment-datos-secondBox-movimientos-muerteAnimales-input"> 
                            <input type="checkbox" id="checkMuerteA" name="muerteA" value="muerteA" />
                        </div>
                        <label for="checkMuerteA" id="lblmuerteAnimalesInventoryAd">Muerte Animales</label>

                    </div>

                </div>

                <div className='inventory_adjustment-datos-secondBox-inputs'>
                    <p>Inputs</p>
                </div>

            </div>

        </div>
    )
}

