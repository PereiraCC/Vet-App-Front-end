import { PurchaseReturnsDatosFactura } from './PurchaseReturnsDatosFactura';
import { PurchaseReturnsIcons } from './PurchaseReturnsIcons';
import { PurchaseReturnsTable } from './PurchaseReturnsTable';

export const PurchaseReturnsPage = () => {
    return (
        <div className='purchaseReturns-main'>

            <div className='purchaseReturns-header'>
                <div className='purchaseReturns-header-devol'>
                    <p id='lblDevolPurchaseReturns'>Devol #</p>
                    <input type='text' id='txtDevolPurchaseReturns' name='devolPurchaseReturns'/>
                </div>

                <div className='purchaseReturns-header-title'>
                    <p id='lblTitlePurchaseReturns'>Devoluciones Compra</p>
                </div>

                <div className='purchaseReturns-header-fecha'>
                    <input type="date" id="txtFechaPurReturns" name="fechaPurReturns" />
                </div>
            </div>

            <div className='purchaseReturns-datosFactura'>
                <PurchaseReturnsDatosFactura />
            </div>

            <div className='purchaseReturns-table'>
                <PurchaseReturnsTable />
            </div>

            <div className='purchaseReturns-footer'>
                <PurchaseReturnsIcons />
            </div>
        </div>
    )
}
