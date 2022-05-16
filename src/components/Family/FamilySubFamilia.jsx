
export const FamilySubFamilia = () => {
    return (
        <div className='family_subfamilia-main'>

            <div className='family_subfamilia-inputs'>

                <div className='family_subfamilia-inputs-title'>
                    <p id='lblTitleSubFamilias'>Sub-Familias</p>
                </div>
                
                <div className='family_subfamilia-inputs-first'>

                    <div className='family_subfamilia-inputs-first-codigo'>
                        <p id='lblCodigoSubFamilias'>Código</p>
                        <input type='text' id='txtCodigoSubFamilias' name='codigoSubFamilias' />
                    </div>

                    <div className='family_subfamilia-inputs-first-descrip'>
                        <p id='lblDescripSubFamilias'>Descripción</p>
                        <input type='text' id='txtDescripSubFamilias' name='descripSubFamilias' />
                    </div>

                </div>

                <div className='family_subfamilia-inputs-second'>

                    <div className='family_subfamilia-inputs-second-obser'>
                        <p id='lblObserSubFamilias'>Observación</p>
                        <textarea id='txtObserSubFamilias' name='obserSubFamilias' cols={3} rows={5} ></textarea>
                    </div>

                    <div className='family_subfamilia-inputs-second-btn'>
                        <button id='btnNuevoSubFamilias' name='nuevoSubFamilias'>Nuevo</button>
                        <button id='btnAgregarSubFamilias' name='agregarSubFamilias'>Agregar</button>
                    </div>

                </div>

            </div>

            <div className='family_subfamilia-table'>
                
                <table className='family_subfamilia-table-table'>
                    <thead>
                        <tr>
                            <th className='family_subfamilia-table-header-codigo'>Código</th>
                            <th className='family_subfamilia-table-header-descrip'>Descripción</th>
                            <th className='family_subfamilia-table-header-obser'>Observaciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='family_subfamilia-table-codigo'>test</td>
                            <td className='family_subfamilia-table-descrip'>test</td>
                            <td className='family_subfamilia-table-obser'>test</td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </div>
    )
}
