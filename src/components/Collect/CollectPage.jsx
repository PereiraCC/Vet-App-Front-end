import { CollectBody } from './CollectBody';

export const CollectPage = () => {
    return (
        <div className='collect_main'>

            <div className='collect_main-header'>

                <div className='collect_main-header-input'>
                    <p id='lblCollectRecibo'>Recibo Nº</p>
                    <input type='text' id='txtCollectRecibo' name='collectRecibo'/>
                </div>
                <p id='lblCollectTitle'>Recibo de Dinero</p>
            </div>

            <div className='collect_main-body'>
                <CollectBody />
            </div>

            <div className='collect_main-table'>
                <p>Table</p>
            </div>

            <div className='collect_main-footer'>
                <p>Footer</p>
            </div>

        </div>
    )
}
