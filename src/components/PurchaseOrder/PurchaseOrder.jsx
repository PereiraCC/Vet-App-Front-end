import { PurchaseOrderBody } from './PurchaseOrderBody';
import { PurchaseOrderIcons } from './PurchaseOrderIcons';

export const PurchaseOrder = () => {
    return (
        <div className='purchaseOrder-main'>
            
            <div className='purchaseOrder-header'>

                <div className='purchaseOrder-header-orden'>
                    <p id='lblOrdenPurchaseOrder'>Orden #</p>
                    <input type='text' id='txtOrdenPurchaseOrder' name='ordenPurchaseOrder'/>
                </div>

                <div className='purchaseOrder-header-title'>
                    <p id='lblTitlePurchaseOrder'>Orden de Compra Manual</p>
                </div>

                <div className='purchaseOrder-header-anulada'>
                    <div className="purchaseOrder-header-anulada-input">
                        <input type="checkbox" id="checkAnuladaPurOrder" name="anuladaPurOrder" value="anuladaPurOrder" />
                    </div>
                    <label for="checkAnuladaPurOrder" id="lblAnuladaPurOrder">ANULADA</label>
                </div>

            </div>

            <div className='purchaseOrder-body'>
                <PurchaseOrderBody />
            </div>

            <div className='purchaseOrder-icons'>
                <PurchaseOrderIcons />
            </div>

        </div>
    )
}
