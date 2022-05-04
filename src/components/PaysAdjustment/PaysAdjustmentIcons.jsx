import { HiDocumentAdd } from 'react-icons/hi';
import { FaRegSave, FaSearch } from 'react-icons/fa';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { ImCancelCircle} from 'react-icons/im';

export const PaysAdjustmentIcons = () => {
    return (
        <div className='pays_adjustment-icons-main'>

            <div className='pays_adjustment-icons-icon'>
                
                    <div className='pays_adjustment-icons-icon-nuevo'>
                        <div className='pays_adjustment-icons-icon-nuevo-icon'>
                            <HiDocumentAdd id='iconNuevoPaysAdj'/>
                        </div>
                        <p id='lblNuevoPaysAdj'>Nuevo</p>
                    </div>

                    <div className='pays_adjustment-icons-icon-Buscar'>
                        <div className='pays_adjustment-icons-icon-Buscar-icon'>
                            <FaSearch id='iconBusPaysAdj'/>
                        </div>
                        <p id='lblBuscarPaysAdj'>Buscar</p>
                    </div>

                    <div className='pays_adjustment-icons-icon-registrar'>
                        <div className='pays_adjustment-icons-icon-registrar-icon'>
                            <FaRegSave id='iconRegistrarPaysAdj'/>
                        </div>
                        <p id='lblRegistrarPaysAdj'>Registrar</p>
                    </div>

                    <div className='pays_adjustment-icons-icon-anular'>
                        <div className='pays_adjustment-icons-icon-anular-icon'>
                            <RiDeleteBin2Fill id='iconAnularPaysAdj'/>
                        </div>
                        <p id='lblAnularPaysAdj'>Anular</p>
                    </div>

                    <div className='pays_adjustment-icons-icon-cerrar'>
                        <div className='pays_adjustment-icons-icon-cerrar-icon'>
                            <ImCancelCircle id='iconCerrarPaysAdj'/>
                        </div>
                        <p id='lblCerrarPaysAdj'>Cerrar</p>
                    </div>

            </div>

            <div className='pays_adjustment-icons-saldosCuenta'>
                
                <p id='lblsaldosCuentaTitlePaysAdj'>Saldos de la Cuenta</p>

                <div className='pays_adjustment-icons-saldosCuenta-inputs'>

                    <div className='pays_adjustment-icons-saldosCuenta-inputs-saldoAnt'>
                        <p id='lblSaldoAntIconsPaysAdjustment'>Saldo Anterior</p>
                        <input type='text' id='txtSaldoAntIconsPaysAdjustment' name='saldoAntPaysAdjustment'/>
                    </div>

                    <div className='pays_adjustment-icons-saldosCuenta-inputs-montoRecidos'>
                        <p id='lblMontoRecIconsPaysAdjustment'>Monto Recibidos</p>
                        <input type='text' id='txtMontoRecIconsPaysAdjustment' name='montoRecPaysAdjustment'/>
                    </div>

                    <div className='pays_adjustment-icons-saldosCuenta-inputs-saldoAct'>
                        <p id='lblSaldoActIconsPaysAdjustment'>Saldo Actual</p>
                        <input type='text' id='txtSaldoActIconsPaysAdjustment' name='saldoActPaysAdjustment'/>
                    </div>

                </div>

            </div>

        </div>
    )
}
