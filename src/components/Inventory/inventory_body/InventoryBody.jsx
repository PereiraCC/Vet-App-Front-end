import { InventoryBodyFeatures } from "./inventory_body_features/InventoryBodyFeatures"
import { InventoryBodyPrecioVenta } from "./inventory_body_precio/InventoryBodyPrecioVenta"

export const InventoryBody = () => {
  return (
    
        <div className="inventory_body-main">
            
            <div className="inventory_body-features">
                <InventoryBodyFeatures />
            </div>

            <div className="inventory_body-precioVenta">
                <InventoryBodyPrecioVenta />
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
