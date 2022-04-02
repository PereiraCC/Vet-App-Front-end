import { BuysArticulosHeader } from "./BuysArticulosHeader"

export const BuysArticulos = () => {
    return (
        <div className='buys_articulos-main'>
            
            <div className='buys_articulos-title'>
                <p id='lblArticulosTitle'>Artículos en Detalle de Compra</p>
            </div>

            <div className='buys_articulos-header'>
                <BuysArticulosHeader />
            </div>

            <div className='buys_articulos-table'>
                <p>Table</p>
            </div>

            <div className='buys_articulos-footer'>
                <p>Footer</p>
            </div>

        </div>
    )
}
