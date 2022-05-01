
export const PaysBodyTabs = () => {
    return (
        <ul>
            <li className="pays-tabs">
                <button 
                    // className={currentTabCustomers == 'DatosGenerales' ? "customers-tab active" : "customers-tab"}
                    className="pays-tab active"
                    // onClick={ () => handleSelectTabCustomers('DatosGenerales') }
                >
                    Datos del Abono
                </button>
            </li>

            <li className="pays-tabs">
                <button 
                    className="pays-tab"
                    // className={currentTabCustomers == 'CreditoDescuento' ? "customers-tab active" : "customers-tab"}
                    // onClick={ () => handleSelectTabCustomers('CreditoDescuento') }
                >
                    Detalle de la(s) Factura(s) a Abonar
                </button>
            </li>

        </ul>
    )
}
