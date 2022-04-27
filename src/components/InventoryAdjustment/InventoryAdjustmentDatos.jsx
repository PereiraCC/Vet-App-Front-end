
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
                    
                    <div className='inventory_adjustment-datos-secondBox-inputs-firstLine'>

                        <div className='inventory_adjustment-datos-secondBox-inputs-firstLine-obser'>
                            <p id='lblObservacionInventoryAd'>Observación</p>
                            <input type='text' id='txtObservacionInventoryAd' name='observacionInventoryAd' />
                        </div>

                        <div className='inventory_adjustment-datos-secondBox-inputs-firstLine-cantidad'>
                            <p id='lblCantidadInventoryAd'>Cantidad</p>
                            <input type='text' id='txtCantidadInventoryAd' name='cantidadInventoryAd' />
                        </div>

                    </div>

                    <div className='inventory_adjustment-datos-secondBox-inputs-secondLine'>

                        <div className='inventory_adjustment-datos-secondBox-inputs-secondLine-cuentaContable'>
                            <p id='lblCuentaInventoryAd'>Cuenta Contable</p>
                            <input type='text' id='txtCuentaInventoryAd' name='cuentaInventoryAd' />
                        </div>

                        <div className='inventory_adjustment-datos-secondBox-inputs-secondLine-productoA'>
                            <p id='lblDescripInventoryAd1'>Descripción</p>
                            <div className='inventory_adjustment-datos-secondBox-inputs-secondLine-productoA-check'>
                                <div className="inventory_adjustment-datos-secondBox-inputs-secondLine-productoA-check-input"> 
                                    <input type="checkbox" id="checkproductoAct" name="productoAct" value="productoAct" />
                                </div>
                                <label for="checkproductoAct" id="lblproductoActInventoryAd">Producto Actualizado</label>
                            </div>
                        </div>

                    </div>

                    <div className='inventory_adjustment-datos-secondBox-inputs-thirdLine'>
                        
                        <div className='inventory_adjustment-datos-secondBox-inputs-thirdLine-gasto'>
                            <p id='lblGastoInventoryAd'>Gasto</p>
                            <input type='text' id='txtGastoInventoryAd' name='gastoInventoryAd' />
                            <select id='txtGastoInventoryAd' name='gastoInventoryAd'>
                                <option value="gasto1">Gasto 1</option>
                                <option value="gasto2">Gasto 2</option>
                                <option value="gasto3">Gasto 3</option>
                            </select>
                        </div>

                        <p id='lblV2InventoryAd'>v.2</p>

                    </div>

                </div>

            </div>

        </div>
    )
}

