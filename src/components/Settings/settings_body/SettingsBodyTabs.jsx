
export const SettingsBodyTabs = () => {
    return (
        <ul>
            
            <li className="settings-tabs">
                <button 
                    // className={currentTabCustomers == 'DatosGenerales' ? "customers-tab active" : "customers-tab"}
                    // onClick={ () => handleSelectTabCustomers('DatosGenerales') }
                    className='customers-tab active'
                >
                    Empresas
                </button>
            </li>

            <li className="settings-tabs">
                <button 
                    // className={currentTabCustomers == 'CreditoDescuento' ? "customers-tab active" : "customers-tab"}
                    // onClick={ () => handleSelectTabCustomers('CreditoDescuento') }
                    className='customers-tab'
                >
                    Valores
                </button>
            </li>

            <li className="settings-tabs">
                <button 
                    // className={currentTabCustomers == 'EncargadoCompras' ? "customers-tab active" : "customers-tab"}
                    // onClick={ () => handleSelectTabCustomers('EncargadoCompras') }
                    className='customers-tab'
                >
                    Logo
                </button>
            </li>

            <li className="settings-tabs">
                <button 
                    // className={currentTabCustomers == 'ReferenciasBancarias' ? "customers-tab active" : "customers-tab"}
                    // onClick={ () => handleSelectTabCustomers('ReferenciasBancarias') }
                    className='customers-tab'
                >
                    Notificaciones de correo
                </button>
            </li>

            <li className="settings-tabs">
                <button 
                    // className={currentTabCustomers == 'ReferenciasComerciales' ? "customers-tab active" : "customers-tab"}
                    // onClick={ () => handleSelectTabCustomers('ReferenciasComerciales') }
                    className='customers-tab'
                >
                    Permiso
                </button>
            </li>

        </ul>
    )
}
