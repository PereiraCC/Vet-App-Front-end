
export const InventoryHeader = () => {
  return (
        <div className='inventory_header-main'>

            <div className='inventory_header-codigo'>
              <p id='lblCodigo'>Código Inventario:</p>
              <input name='codigo' id='txtCodigo'/>
            </div>

            <div className='inventory_header-existencia'>
                <div className="inventory_header-existencia-input"> 
                    <input type="checkbox" id="checkExistencia" name="existencia" value="ValidarExistencia" />
                </div>
                <label for="checkExistencia" id="lblExistencia">Validar Existencia</label>
            </div>

            <div className='inventory_header-Usuario'>
                <p id='lblUsuario'>Usuario</p>
                <input name='usuario' id='txtUsuario'/>
            </div>

        </div>
  )
}
