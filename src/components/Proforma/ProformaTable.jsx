
export const ProformaTable = () => {
    return (
        <div className='proforma_table-main'>
            
            <div className='proforma_table-headers'>

                <p id='lblTitleTableArticulo'>Articulo a Cotizar →</p>
                <div className='proforma_table-headers-inputs'>
                    
                    <div className='proforma_table-headers-inputs-exonerar'>

                        <div className="proforma_table-headers-inputs-exonerar-input"> 
                            <input type="checkbox" id="checkExonerarProforma" name="exonerarProforma" value="exonerarProforma" />
                        </div>
                        <label for="checkExonerarProforma" id="lblExonerarProforma">Exonerar</label>

                    </div>

                    <div className='proforma_table-headers-inputs-codigo'>
                        <p id='lblTablecodigoProforma'>Código</p>
                        <input type='text' id='txtTablecodigoProforma' name='tablecodigoProforma'/>
                    </div>

                    <div className='proforma_table-headers-inputs-precioUnit'>
                        <p id='lblTablePrecioUnitProforma'>Precio Unit.</p>
                        <input type='text' id='txtTablePrecioUnitProforma' name='tableprecioUnitProforma'/>
                    </div>

                    <div className='proforma_table-headers-inputs-desc'>
                        <p id='lblTableDescProforma'>Desc (%)</p>
                        <input type='text' id='txtTableDescProforma' name='tabledescProforma'/>
                    </div>

                    <div className='proforma_table-headers-inputs-exist'>
                        <p id='lblTableExistProforma'>Exist</p>
                        <input type='text' id='txtTableExistProforma' name='tableExistProforma'/>
                    </div>

                    <div className='proforma_table-headers-inputs-cantidad'>
                        <p id='lblTableCantidadProforma'>Cantidad</p>
                        <input type='text' id='txtTableCantidadProforma' name='tableCantidadProforma'/>
                    </div>

                    <div className='proforma_table-headers-inputs-iv'>
                        <p id='lblTableIVProforma'>IV (%)</p>
                        <input type='text' id='txtTableIVProforma' name='tableIVProforma'/>
                    </div>

                    <div className='proforma_table-headers-inputs-subtotal'>
                        <p id='lblTableSubTotalProforma'>SubTotal</p>
                        <input type='text' id='txtTableSubTotalProforma' name='tableSubTotalProforma'/>
                    </div>

                </div>

            </div>

            <div className='proforma_table-body'>
                <p>Body</p>
            </div>

        </div>
    )
}
