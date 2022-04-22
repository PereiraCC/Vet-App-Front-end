import { BuysArticulosFooter } from "./BuysArticulosFooter"
import { BuysArticulosHeader } from "./BuysArticulosHeader"
import { BuysArticuloTable } from "./BuysArticuloTable"

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
                <BuysArticuloTable />
            </div>

            <div className='buys_articulos-footer'>
                <BuysArticulosFooter />
            </div>

        </div>
    )
}
