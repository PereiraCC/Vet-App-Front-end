import { InventoryBodyCosto } from "./InventoryBodyCosto"

export const InventoryBody = () => {
  return (
    
        <div className="inventory_body-main">
            
            <div className="inventory_body-costo">
                <InventoryBodyCosto />
            </div>

            <div className="inventory_body-precioVenta">
                <p>Precio Venta</p>
            </div>

            <div className="inventory_body-bodega">
                <p>Bodega</p>
            </div>

            <div className="inventory_body-existencias">
                <p>Existencias</p>
            </div>

        </div>

  )
}
