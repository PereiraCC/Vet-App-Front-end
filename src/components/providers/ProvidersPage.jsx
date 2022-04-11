import { ProvidersForm } from "./ProvidersForm"
import { ProvidersTable } from "./ProvidersTable"

export const ProvidersPage = () => {
    return (
        <div className='providers providers_main'>
            
            <div className='providers_header'>
                <p id='lblTituloProviders'>Formulario de Proveedores</p>
            </div>

            <div className='providers_form'>
                <ProvidersForm />
            </div>

            <div className='providers_table'>
                <ProvidersTable />
            </div>

            <div className='providers_icons'>
                <p>icons</p>
            </div>

        </div>
    )
}
