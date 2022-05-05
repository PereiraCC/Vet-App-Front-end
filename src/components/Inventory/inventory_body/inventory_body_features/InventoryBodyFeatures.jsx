import { useSelector } from 'react-redux';

import { InventoryBodyFeaturesTabs } from './InventoryBodyFeaturesTabs';

import { InventoryBodyFeaturesBodega } from './InventoryBodyFeaturesBodega';
import { InventoryBodyFeaturesCategoria } from './InventoryBodyFeaturesCategoria';
import { InventoryBodyFeaturesRelacionados } from './InventoryBodyFeaturesRelacionados';
import { InventoryBodyFeaturesUltimoCosto } from './InventoryBodyFeaturesUltimoCosto';
import { InventoryBodyFeaturesVarios } from './InventoryBodyFeaturesVarios';
import { InventoryBodyFeaturesSerie } from './InventoryBodyFeaturesSerie';
import { InventoryBodyFeaturesDetalle } from './InventoryBodyFeaturesDetalle';

export const InventoryBodyFeatures = () => {

    const state = useSelector( state => state.inventory );
    const { currentTabInventory } = state;

    const redirectComponent = () => {

        switch (currentTabInventory) {

            case 'UltimoCosto':
                return <InventoryBodyFeaturesUltimoCosto />

            case 'Bodega':
                return <InventoryBodyFeaturesBodega />
            
            case 'Varios':
                return <InventoryBodyFeaturesVarios />

            case 'Categoria':
                return <InventoryBodyFeaturesCategoria />

            case 'Relacionados':
                return <InventoryBodyFeaturesRelacionados />

            case 'Serie':
                    return <InventoryBodyFeaturesSerie />

            case 'Detalle':
                return <InventoryBodyFeaturesDetalle />
        
            default:
                break;
        }
    }

    return (

        <div className="inventory_body-features-main">

            <div className="inventory_body-features-tabs">
                <InventoryBodyFeaturesTabs />
            </div>
            
            <div className="inventory_body-features-content">

                { 
                   redirectComponent()
                }
                
            </div>
        </div>
    )
}
