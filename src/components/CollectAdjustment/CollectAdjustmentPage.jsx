import { CollectAdjustmentBody } from './CollectAdjustmentBody';
import { CollectAdjustmentFooter } from './CollectAdjustmentFooter';
import { CollectAdjustmentTable } from './CollectAdjustmentTable';

export const CollectAdjustmentPage = () => {
    return (
        <div className='collectAdjustment_main'>

            <div className='collectAdjustment_header'>
                
                <p id='lblCollectAdjustmentTitle'>Ajuste Cuentas x Cobrar</p>

                <div className='collectAdjustment_header-data'>
                    <p id='lblCollectAdjustmentDataNumber'>0</p>
                    <p id='lblCollectAdjustmentDataName'>CRE</p>
                </div>
            </div>

            <div className='collectAdjustment_main-body'>
                <CollectAdjustmentBody />
            </div>

            <div className='collectAdjustment_main-table'>
                <CollectAdjustmentTable />
            </div>

            <div className='collectAdjustment_main-footer'>
                <CollectAdjustmentFooter />
            </div>

        </div>
    )
}
