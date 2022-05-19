
export const UsualCustomersHeader = () => {
    return (
        <div className="usualCustomers_header-main">

            <div className="usualCustomers_header-title">

                <div className='usualCustomers_header-title-input'>
                    <input type="text" id='inputUsualTitleCustomers' name='titleCustomers'/>
                </div>

                <p id="lblTitleUsualCustomers">Clientes Frecuentes</p>
            </div>

            <div className="usualCustomers_header-firstLine">

                <div className="usualCustomers_header-firstLine-Nombre">
                    <div className='usualCustomers_header-firstLine-nombre-label'>
                        <p id="lblNombreUsualCustomers">Nombre:</p>
                    </div>
                    <div className='usualCustomers_header-firstLine-nombre-input'>
                        <input type="text" name='nombreCustomers' id="txtUsualNombreCustomers" />
                    </div>
                </div>

                <div className="usualCustomers_header-firstLine-Cedula">
                    <div className='usualCustomers_header-firstLine-cedula-label'>
                        <p id="lblCedulaUsualCustomers">Cédula:</p>
                    </div>
                    <div className='usualCustomers_header-firstLine-cedula-input'>
                        <input type="text" name='CedulaCustomers' id="txtCedulaUsualCustomers" />
                    </div>
                </div>

            </div>

            <div className="usualCustomers_header-secondLine">
                
                <div className="usualCustomers_header-secondLine-observaciones">
                    <div className='usualCustomers_header-secondLine-observaciones-label'>
                        <p id="lblObservacionesUsualCustomers">Observaciones:</p>
                    </div>
                    <div className='usualCustomers_header-secondLine-observaciones-input'>
                        <input type="text" name='observacionesCustomers' id="txtObservacionesUsualCustomers" />
                    </div>
                </div>

            </div>

        </div>
    )
}
