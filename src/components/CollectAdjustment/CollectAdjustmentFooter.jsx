import { HiDocumentAdd } from 'react-icons/hi';
import { FaRegSave, FaSearch } from 'react-icons/fa';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { ImCancelCircle} from 'react-icons/im';

export const CollectAdjustmentFooter = () => {
    return (
        <div className='collectAdjustment_footer-main'>

            <div className='collectAdjustment_footer-icons'>

                <div className='collectAdjustment_footer-icons-icon'>
                    
                    <div className='collectAdjustment_footer-icons-nuevo'>
                        <div className='collectAdjustment_footer-icons-nuevo-icon'>
                            <HiDocumentAdd id='iconNuevoCollAdj'/>
                        </div>
                        <p id='lblNuevoCollAdj'>Nuevo</p>
                    </div>

                    <div className='collectAdjustment_footer-icons-Buscar'>
                        <div className='collectAdjustment_footer-icons-Buscar-icon'>
                            <FaSearch id='iconBusCollAdj'/>
                        </div>
                        <p id='lblBuscarCollAdj'>Buscar</p>
                    </div>

                    <div className='collectAdjustment_footer-icons-registrar'>
                        <div className='collectAdjustment_footer-icons-registrar-icon'>
                            <FaRegSave id='iconRegistrarCollAdj'/>
                        </div>
                        <p id='lblRegistrarCollAdj'>Registrar</p>
                    </div>

                    <div className='collectAdjustment_footer-icons-anular'>
                        <div className='collectAdjustment_footer-icons-anular-icon'>
                            <RiDeleteBin2Fill id='iconAnularCollAdj'/>
                        </div>
                        <p id='lblAnularCollAdj'>Anular</p>
                    </div>

                    <div className='collectAdjustment_footer-icons-cerrar'>
                        <div className='collectAdjustment_footer-icons-cerrar-icon'>
                            <ImCancelCircle id='iconCerrarCollAdj'/>
                        </div>
                        <p id='lblCerrarCollAdj'>Cerrar</p>
                    </div>

                </div>

                <div className='collectAdjustment_footer-icons-footer'>
                    
                    <div className='collectAdjustment_footer-icons-footer-anulada'>

                        <div className="collectAdjustment_footer-icons-footer-anulada-input"> 
                                <input type="checkbox" id="checkAnuladaCollectAdjustment" name="anuladaCollectAdjustment" value="anuladaCollectAdjustment" />
                            </div>
                        <label for="checkAnuladaCollectAdjustment" id="lblAnuladaCollectAdjustment">Anulada</label>

                    </div>

                    {/* <div className='collectAdjustment_footer-icons-footer-user'>
                        <p id='lblUserCollectAdjustment'>Usuario →</p>
                    </div> */}

                </div>

            </div>

            <div className='collectAdjustment_footer-saldosCuenta'>

                <p id='lblsaldosCuentaTitleCollectAdj'>Saldos de la Cuenta</p>

                <div className='collectAdjustment_footer-saldosCuenta-inputs'>

                    <div className='collectAdjustment_footer-saldosCuenta-inputs-saldoAnt'>
                        <p id='lblSaldoAntIconsCollectAdjustment'>Saldo Anterior</p>
                        <input type='text' id='txtSaldoAntIconsCollectAdjustment' name='saldoAntCollectAdjustment'/>
                    </div>

                    <div className='collectAdjustment_footer-saldosCuenta-inputs-montoRecidos'>
                        <p id='lblMontoRecIconsCollectAdjustment'>Monto Recibido</p>
                        <input type='text' id='txtMontoRecIconsCollectAdjustment' name='montoRecCollectAdjustment'/>
                    </div>

                    <div className='collectAdjustment_footer-saldosCuenta-inputs-saldoAct'>
                        <p id='lblSaldoActIconsCollectAdjustment'>Saldo Actual</p>
                        <input type='text' id='txtSaldoActIconsCollectAdjustment' name='saldoActCollectAdjustment'/>
                    </div>

                </div>
            </div>

        </div>
    )
}
