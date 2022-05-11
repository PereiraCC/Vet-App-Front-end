
export const CategoryPage = () => {
    return (
        <div className='category-main'>

            <p id='lblTitleCategory'>Categoria</p>
            
            <div className='category-inputs'>

                <div className='category-inputs-descrip'>
                    <p id='lblDescripCategoryM'>Descripción</p>
                    <input type='text' id='txtDescripCategoryM' name='descripCategoryM' />
                </div>

                <div className='category-inputs-btn'>
                    <button id='btnAddCategoryM'>Agregar</button>
                </div>

            </div>

            <div className='category-table'>
                <table className='category-table-main'>
                    <thead>
                        <tr>
                            <th className='category-table-header-descrip'>Descripción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='category-table-descrip'>test</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}
