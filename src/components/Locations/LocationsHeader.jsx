
export const LocationsHeader = () => {
    return (
        <div className='locations_header-main'>
            
            <div className='locations_header-first'>
                
                <div className='locations_header-first-codigo'>
                    <p id='lblCodigoLocationsH'>Código</p>
                    <input type='text' id='txtCodigoLocationsH' name='codigoLocationsH' />
                </div>

                <div className='locations_header-first-descrip'>
                    <p id='lblDescripLocationsH'>Descripción</p>
                    <input type='text' id='txtDescripLocationsH' name='descripLocationsH' />
                </div>

            </div>

            <div className='locations_header-second'>
                
                <div className='locations_header-second-obser'>
                    <p id='lblObserLocationsH'>Observación</p>
                    <textarea id='txtObserLocationsH' name='obserLocationsH' cols={3} rows={5} ></textarea>
                </div>

                <div className='locations_header-second-btn'>
                    <button id='btnGuardarLocationsH' name='guardarLocationsH'>Guardar</button>
                </div>

            </div>

        </div>
    )
}
