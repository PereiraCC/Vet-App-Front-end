import { PurchaseReturnsDatosFactura } from './PurchaseReturnsDatosFactura';
import { PurchaseReturnsIcons } from './PurchaseReturnsIcons';

export const PurchaseReturnsPage = () => {
    return (
        <div className='purchaseReturns-main'>

            <div className='purchaseReturns-header'>
                <div className='purchaseReturns-header-devol'>
                    <p id='lblDevolPurchaseReturns'>Devol #</p>
                    <input type='text' id='txtDevolPurchaseReturns' name='devolPurchaseReturns'/>
                </div>

                <div className='purchaseReturns-header-title'>
                    <p id='lblTitlePurchaseReturns'>Orden de Compra Manual</p>
                </div>

                <div className='purchaseReturns-header-fecha'>
                    <input type="date" id="txtFechaPurReturns" name="fechaPurReturns" />
                </div>
            </div>

            <div className='purchaseReturns-datosFactura'>
                <PurchaseReturnsDatosFactura />
            </div>

            <div className='purchaseReturns-table'>
                <p>table</p>
            </div>

            <div className='purchaseReturns-footer'>
                <PurchaseReturnsIcons />
            </div>
        </div>
    )
}
