import { ProformaDatos } from "./ProformaDatos"
import { ProformaIcons } from "./ProformaIcons"
import { ProformaTable } from "./ProformaTable"
import { ProformaTotals } from "./ProformaTotals"

export const ProformaPage = () => {
    return (
        <div className='proforma-main'>

            <div className='proforma-header'>
                
                <div className='proforma-header-input'>
                    <p id='lblProformaCotizacion'>Cotización Nº</p>
                    <input type='text' id='txtProformaCotizacion' name='proformaCotizacion'/>
                </div>
                <p id='lblProformaTitle'>Formula de Cotizaciones</p>

            </div>

            <div className='proforma-datos'>
                <ProformaDatos />
            </div>

            <div className='proforma-table'>
                <ProformaTable />
            </div>

            <div className='proforma-totales'>
                <ProformaTotals />
            </div>

            <div className='proforma-icons'>
                <ProformaIcons />
            </div>

        </div>
    )
}
