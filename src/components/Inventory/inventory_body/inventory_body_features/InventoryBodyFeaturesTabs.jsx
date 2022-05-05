import { useDispatch, useSelector } from 'react-redux';

import { SelectTabInventory } from '../../../../actions/inventory';

export const InventoryBodyFeaturesTabs = () => {

    const dispatch = useDispatch();

    const state = useSelector( state => state.inventory );
    const { currentTabInventory } = state;

    const handleSelectTabInventory = (nameTab) => {
        dispatch( SelectTabInventory( nameTab ) );
    }

    return (
        <ul>
            
            <li className="inventory-tabs">
                <button 
                    className={currentTabInventory == 'UltimoCosto' ? "inventory-tab active" : "inventory-tab"}
                    onClick={ () => handleSelectTabInventory('UltimoCosto') }
                >
                    Ultimo Costo
                </button>
            </li>

            <li className="inventory-tabs">
                <button 
                    className={currentTabInventory == 'Bodega' ? "inventory-tab active" : "inventory-tab"}
                    onClick={ () => handleSelectTabInventory('Bodega') }
                >
                    Bodega
                </button>
            </li>

            <li className="inventory-tabs">
                <button 
                    className={currentTabInventory == 'Varios' ? "inventory-tab active" : "inventory-tab"}
                    onClick={ () => handleSelectTabInventory('Varios') }
                >
                    Varios
                </button>
            </li>

            <li className="inventory-tabs">
                <button 
                    className={currentTabInventory == 'Categoria' ? "inventory-tab active" : "inventory-tab"}
                    onClick={ () => handleSelectTabInventory('Categoria') }
                >
                    Categoría
                </button>
            </li>

            <li className="inventory-tabs">
                <button 
                    className={currentTabInventory == 'Relacionados' ? "inventory-tab active" : "inventory-tab"}
                    onClick={ () => handleSelectTabInventory('Relacionados') }
                >
                    Relacionados
                </button>
            </li>

        </ul>
    )
}
