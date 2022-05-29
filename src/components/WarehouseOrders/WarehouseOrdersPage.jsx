import { WarehouseOrdersBody } from "./WarehouseOrdersBody"
import { WarehouseOrdersIcons } from "./WarehouseOrdersIcons"

export const WarehouseOrdersPage = () => {
    return (
        <div className='warehouse_orders-main'>

            <div className='warehouse_orders-header'>
                <p id='lblTitleWarehouseO'>Registro Pedido a Bodega</p>
            </div>

            <div className='warehouse_orders-body'>
                <WarehouseOrdersBody />
            </div>

            <div className='warehouse_orders-footer'>
                <WarehouseOrdersIcons />
            </div>
        </div>
    )
}
