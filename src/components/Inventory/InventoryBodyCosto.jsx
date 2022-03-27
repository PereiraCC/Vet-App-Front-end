import { useSelector } from 'react-redux';

import { InventoryBodyCostoTabs } from './InventoryBodyCostoTabs'

export const InventoryBodyCosto = () => {

    const state = useSelector( state => state.inventory );
    const { currentTabInventory } = state;

    return (

        <div className="inventory_body-costo-main">

            <div className="inventory_body-costo-tabs">
                <InventoryBodyCostoTabs />
            </div>
            

            <div className="inventory_body-costo-content">

                { 
                    ( currentTabInventory === 'UltimoCosto' )
                        ? <p>UltimoCosto</p>
                        : ( currentTabInventory === 'Bodega2' )
                            ? <p>Bodega2</p>
                            : ( currentTabInventory === 'Varios' )
                                ? <p>Varios</p>
                                : ( currentTabInventory === 'Categoria' )
                                    ? <p>Categoria</p>
                                    : <p>Relacionados</p>
                }
                
            </div>
        </div>
    )
}
