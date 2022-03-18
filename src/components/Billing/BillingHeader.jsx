
import { ImBinoculars } from 'react-icons/im';
import { MdOutlineMoneyOffCsred } from 'react-icons/md';
import { AiOutlineFileSync } from 'react-icons/ai';

export const BillingHeader = () => {
  return (
  
    <div className='billing_header-main'>

        <div className="billing_header-number">
            <div id="Factura">
              <p>Factura Nº 83853</p>
            </div>
        </div>

        <div className="billing_header-token">

          <div className='billing_header-ficha'>
              <p id="Ficha">Ficha #</p>
              <input id="txtFicha" name="txtFicha"/>
          </div>

          <div className='billing_header-buttons'>

            <div className="billing_image-binoculars">
                <div className='billing_image-icon'>
                  <ImBinoculars />
                </div>
            </div>

            <div className="billing_image-nomoney">
                <div className='billing_image-icon'>
                  <MdOutlineMoneyOffCsred />
                </div>
            </div>

            <div className="billing_image-refresh">
                <div className='billing_image-icon'>
                  <AiOutlineFileSync />
                </div>
            </div>
            
          </div>
        </div>

        <div className="billing_header-type">

          <div className='billing_header-radio-apartado'>
            <input type="radio" id="Apartado" name="type_billing" value="Apartado" />
            <label for="Apartado">Apartado</label>
          </div>
          
          <div className='billing_header-radio-contado'>
            <input type="radio" id="Contado" name="type_billing" value="Contado"/>
            <label for="Contado">Contado</label>
          </div>

          <div className='billing_header-radio-credito'>
            <div className='billing_header-radio-credito-radio'>
              <input type="radio" id="Credito" name="type_billing" value="Credito"/>
              <label for="Credito">Credito</label>
            </div>
            <div className='billing_header-radio-credito-label'>
              <p> 0 Días</p>
            </div>
          </div>
        </div>
    </div>

  )
}
