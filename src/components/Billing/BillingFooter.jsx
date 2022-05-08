import { FaRegSave } from 'react-icons/fa';
import { GiNextButton } from 'react-icons/gi';
import { ImCancelCircle } from 'react-icons/im';

export const BillingFooter = () => {
  return (
        <div className="billing_footer-main">

            <div className="billing_footer-buttons">
                
                <div className="billing_footer-buttons-save">
                    <div className='billing_footer-buttons-save-icon'>
                        <FaRegSave id='iconSave'/>
                    </div>
                    <p id='labelSave'>Guardar</p>
                </div>

                <div className="billing_footer-buttons-next">
                    <div className='billing_footer-buttons-next-icon'>
                        <GiNextButton id='iconNext'/>
                    </div>
                    <p id='labelNext'>Siguiente</p>
                </div>

                <div className="billing_footer-buttons-cancel">
                    <div className='billing_footer-buttons-cancel-icon'>
                        <ImCancelCircle id='iconCancel'/>
                    </div>
                    <p id='labelCancel'>Cancelar</p>
                </div>

            </div>

            <div className="billing_footer-data">

                <div className='billing_footer-data-date'>
                    <p id='lblFecha'>Fecha</p>
                    <input name='fecha' id='txtFecha' value='07/03/2022 01:44:14 pm'/>
                </div>

                <div className='billing_footer-data-vence'>
                    <p id='lblVence'>Vence</p>
                    <input name='vence' id='txtVence'/>
                </div>

                <div className='billing_footer-data-checks'>
                    <div className='billing_footer-data-checks-Entregado'>
                        <div className="billing_footer-data-checks-Entregado-input"> 
                            <input type="checkbox" id="checkEntregado" name="entregado" value="entregado" />
                        </div>
                        <label for="checkEntregado" id="lblEntregado">Entregado</label>
                    </div>
                    <div className='billing_footer-data-checks-Anulada'>
                        <div className="billing_footer-data-checks-Anulada-input"> 
                            <input type="checkbox" id="checkAnulada" name="anulada" value="anulada" />
                        </div>
                            <label for="checkAnulada" id="lblAnulada">Anulada</label>
                    </div>
                </div>

                <div className='billing_footer-data-name'>
                    <p id='lblName'>CARLOS GUILLERMO ROMERO OCAMPO</p>
                </div>

                <div className='billing_footer-data-user'>
                    <div className='billing_footer-data-user-caja'>
                        <p>Caja #1</p>
                    </div>
                    {/* <div className='billing_footer-data-user-data'>
                        <p id='lblUser'>Usuario →</p>
                        <p id='lblPass'>****</p>
                        <p id='lblSistema'>SISTEMA</p>
                    </div> */}
                </div>
            </div>

        </div>
  )
}
