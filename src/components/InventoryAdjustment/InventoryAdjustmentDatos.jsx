
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
                        {/* TODO:Radio Button */}
                        {/* <div className='inventory_adjustment-datos-secondBox-movimientos-entrada-check'>
                            <div className="inventory_adjustment-datos-secondBox-movimientos-entrada-check-input"> 
                                <input type="checkbox" id="checkEntrada" name="entradaInventory" value="entradaInventory" />
                            </div>
                            <label for="checkEntrada" id="lblEntradaInventoryAd">Entrada</label>
                        </div> */}

                        <p id='lblResulEntradaInventoryAd'>Entrada</p>
                    </div>

                    <div className='inventory_adjustment-datos-secondBox-movimientos-salida'>
                        <p id='lblSalidaInventoryAd'>Salida</p>
                    </div>

                    <div className='inventory_adjustment-datos-secondBox-movimientos-muerteAnimales'>
                        <p id='lblmuerteAnimalesInventoryAd'>Muerte Animales</p>
                    </div>

                </div>

                <div className='inventory_adjustment-datos-secondBox-inputs'>
                    <p>Inputs</p>
                </div>

            </div>

        </div>
    )
}

