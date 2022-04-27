import { InventoryAdjustmentDatos } from './InventoryAdjustmentDatos';
import { InventoryAdjustmentTable } from './InventoryAdjustmentTable';

export const InventoryAdjustmentPage = () => {
    return (
        <div className='inventory_adjustment-main'>

            <div className='inventory_adjustment-header'>
                <p id='lblInventoryAdjTitle'>Ajuste de Inventario</p>
            </div>

            <div className='inventory_adjustment-datos'>
                <InventoryAdjustmentDatos />
            </div>

            <div className='inventory_adjustment-table'>
                <InventoryAdjustmentTable />
            </div>

            <div className='inventory_adjustment-icons'>
                <p>Icons</p>
            </div>

        </div>
    )
}
