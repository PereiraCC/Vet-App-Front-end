
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
                <p>datos</p>
            </div>

            <div className='proforma-table'>
                <p>table</p>
            </div>

            <div className='proforma-totales'>
                <p>totales</p>
            </div>

            <div className='proforma-icons'>
                <p>icons</p>
            </div>

        </div>
    )
}
