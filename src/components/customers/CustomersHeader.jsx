
export const CustomersHeader = () => {
    return (
        <div className="customers_header-main">

            <div className="customers_header-title">

                <div className='customers_header-title-input'>
                    <input type="text" id='inputTitleCustomers' name='titleCustomers'/>
                </div>

                <p id="lblTitleCustomers">Formulario de Clientes</p>
            </div>

            <div className="customers_header-firstLine">

                <div className="customers_header-firstLine-Nombre">
                    <div className='customers_header-firstLine-nombre-label'>
                        <p id="lblNombreCustomers">Nombre:</p>
                    </div>
                    <div className='customers_header-firstLine-nombre-input'>
                        <input type="text" name='nombreCustomers' id="txtNombreCustomers" />
                    </div>
                </div>

                <div className="customers_header-firstLine-Cedula">
                    <div className='customers_header-firstLine-cedula-label'>
                        <p id="lblCedulaCustomers">Cédula:</p>
                    </div>
                    <div className='customers_header-firstLine-cedula-input'>
                        <input type="text" name='CedulaCustomers' id="txtCedulaCustomers" />
                    </div>
                </div>

            </div>

            <div className="customers_header-secondLine">
                
                <div className="customers_header-secondLine-observaciones">
                    <div className='customers_header-secondLine-observaciones-label'>
                        <p id="lblObservacionesCustomers">Observaciones:</p>
                    </div>
                    <div className='customers_header-secondLine-observaciones-input'>
                        <input type="text" name='observacionesCustomers' id="txtObservacionesCustomers" />
                    </div>
                </div>

            </div>

        </div>
    )
}
