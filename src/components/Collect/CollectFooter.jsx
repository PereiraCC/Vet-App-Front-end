import { HiDocumentAdd } from 'react-icons/hi';
import { FaRegSave, FaSearch } from 'react-icons/fa';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { ImCancelCircle} from 'react-icons/im';

export const CollectFooter = () => {
    return (
        <div className='collect_footer-main'>

            <div className='collect_footer-icons'>

                <div className='collect_footer-icons-icon'>
                    
                    <div className='collect_footer-icons-nuevo'>
                        <div className='collect_footer-icons-nuevo-icon'>
                            <HiDocumentAdd id='iconNuevoColl'/>
                        </div>
                        <p id='lblNuevoColl'>Nuevo</p>
                    </div>

                    <div className='collect_footer-icons-Buscar'>
                        <div className='collect_footer-icons-Buscar-icon'>
                            <FaSearch id='iconBusColl'/>
                        </div>
                        <p id='lblBuscarColl'>Buscar</p>
                    </div>

                    <div className='collect_footer-icons-registrar'>
                        <div className='collect_footer-icons-registrar-icon'>
                            <FaRegSave id='iconRegistrarColl'/>
                        </div>
                        <p id='lblRegistrarColl'>Registrar</p>
                    </div>

                    <div className='collect_footer-icons-anular'>
                        <div className='collect_footer-icons-anular-icon'>
                            <RiDeleteBin2Fill id='iconAnularColl'/>
                        </div>
                        <p id='lblAnularColl'>Anular</p>
                    </div>

                    <div className='collect_footer-icons-cerrar'>
                        <div className='collect_footer-icons-cerrar-icon'>
                            <ImCancelCircle id='iconCerrarColl'/>
                        </div>
                        <p id='lblCerrarColl'>Cerrar</p>
                    </div>

                </div>

                <div className='collect_footer-icons-footer'>
                    
                    <div className='collect_footer-icons-footer-anulada'>

                        <div className="collect_footer-icons-footer-anulada-input"> 
                                <input type="checkbox" id="checkAnuladaCollect" name="anuladaCollect" value="anuladaCollect" />
                            </div>
                        <label for="checkAnuladaCollect" id="lblAnuladaCollect">Anulada</label>

                    </div>

                    {/* <div className='collect_footer-icons-footer-user'>
                        <p id='lblUserCollect'>Usuario →</p>
                    </div> */}

                </div>

            </div>

            <div className='collect_footer-saldosCuenta'>

                <p id='lblsaldosCuentaTitle'>Saldos de la Cuenta</p>

                <div className='collect_footer-saldosCuenta-inputs'>

                    <div className='collect_footer-saldosCuenta-inputs-saldoAnt'>
                        <p id='lblSaldoAntIconsCollect'>Saldo Anterior</p>
                        <input type='text' id='txtSaldoAntIconsCollect' name='saldoAntCollect'/>
                    </div>

                    <div className='collect_footer-saldosCuenta-inputs-montoRecidos'>
                        <p id='lblMontoRecIconsCollect'>Monto Recibido</p>
                        <input type='text' id='txtMontoRecIconsCollect' name='montoRecCollect'/>
                    </div>

                    <div className='collect_footer-saldosCuenta-inputs-saldoAct'>
                        <p id='lblSaldoActIconsCollect'>Saldo Actual</p>
                        <input type='text' id='txtSaldoActIconsCollect' name='saldoActCollect'/>
                    </div>

                </div>
            </div>

        </div>
    )
}
