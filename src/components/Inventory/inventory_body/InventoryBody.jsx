import { InventoryBodyBodega } from "./inventory_body_bodega/InventoryBodyBodega"
import { InventoryBodyExistencias } from "./inventory_body_existencias/InventoryBodyExistencias"
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
                <InventoryBodyBodega />
            </div>

            <div className="inventory_body-existencias">
                <InventoryBodyExistencias />
            </div>

        </div>

  )
}
