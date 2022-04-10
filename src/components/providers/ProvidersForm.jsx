
export const ProvidersForm = () => {
    return (
        <div className='providers_form-main'>

            <div className='providers_form-personal'>
                
                <div className='providers_form-personal-1'>

                    <div className='providers_form-personal-1-label-identi'>
                        <p id='lblIdentificacionProviders' >Identificación</p>
                    </div>
                    <div className='providers_form-personal-1-input-identi'>
                        <input name='identificacionProviders' id='txtIdentificacionProviders' />
                    </div>

                </div>

                <div className='providers_form-personal-2'>
                    
                    <div className='providers_form-personal-2-nombre' >

                        <div className='providers_form-personal-2-label-nombre'>
                            <p id='lblNombreProviders'>Nombre</p>
                        </div>
                        <div className='providers_form-personal-2-input-nombre'>
                            <input name='nombreProviders' id='txtNombreProviders' />
                        </div>

                    </div>

                    <div className='providers_form-personal-2-cedula' >
                        
                        <div className='providers_form-personal-2-label-cedula'>
                            <p id='lblCedulaProviders'>Cédula</p>
                        </div>
                        <div className='providers_form-personal-2-input-cedula'>
                            <input name='cedulaProviders' id='txtCedulaProviders' />
                        </div>

                    </div>

                </div>

                <div className='providers_form-personal-3'>
                    
                    <div className='providers_form-personal-3-telefono' >

                        <div className='providers_form-personal-3-label-telefono'>
                            <p id='lblTelefonoProviders'>Teléfono(s)</p>
                        </div>
                        <div className='providers_form-personal-3-input-telefono'>
                            <input name='telefonoProviders' id='txtTelefonoProviders' />
                        </div>

                    </div>

                    <div className='providers_form-personal-3-fax' >

                        <div className='providers_form-personal-3-label-fax'>
                            <p id='lblFaxProviders'>Fax(s)</p>
                        </div>
                        <div className='providers_form-personal-3-input-fax'>
                            <input name='faxProviders' id='txtFaxProviders' />
                        </div>

                    </div>

                    <div className='providers_form-personal-3-visitas' >

                        <div className='providers_form-personal-3-label-visitas'>
                            <p id='lblVisitasProviders'>Visitas al Mes</p>
                        </div>
                        <div className='providers_form-personal-3-input-visitas'>
                            <input name='visitasProviders' id='txtVisitasProviders' />
                        </div>

                    </div>

                </div>

                <div className='providers_form-personal-4'>
                    <p>line 4</p>
                </div>

                <div className='providers_form-personal-5'>
                    <p>line 5</p>
                </div>

                <div className='providers_form-personal-6'>
                    <p>line 6</p>
                </div>

                <div className='providers_form-personal-7'>
                    <p>line 7</p>
                </div>

            </div>

            <div className='providers_form-accounting'>
                <p>accounting</p>
            </div>

        </div>
    )
}
