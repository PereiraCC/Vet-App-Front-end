import { WineriesAdjustmentDatos } from './WineriesAdjustmentDatos';
import { WineriesAdjustmentDetalleAjuste } from './WineriesAdjustmentDetalleAjuste';

export const WineriesAdjustmentPage = () => {
    return (
        <div className='wineries_adjustment-main'>
            
            <div className='wineries_adjustment-header'>
                
                <div className='wineries_adjustment-header-input'>
                    <input type='text' name='numeroAjusteBodega' id='txtNumeroWineriesA'/>
                </div>

                <p id='lblWineriesATitle'>Ajuste Bodega Inventario</p>

            </div>

            <div className='wineries_adjustment-datos'>
                <WineriesAdjustmentDatos />
            </div>

            <div className='wineries_adjustment-detalleAjuste'>
                <WineriesAdjustmentDetalleAjuste />
            </div>

            <div className='wineries_adjustment-table'>
                <p>table</p>
            </div>

            <div className='wineries_adjustment-icons'>
                <p>icons</p>
            </div>

        </div>
    )
}
