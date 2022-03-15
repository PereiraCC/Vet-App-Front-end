
import { ImBinoculars } from 'react-icons/im';

export const BillingHeader = () => {
  return (
    
    <div>

        {/* <h1>Header</h1> */}
        <div className="billing_header-number">
            <div id="Factura">
              <p>Factura Nº 83853</p>
            </div>
        </div>

        <div className="billing_header-token">
            <p id="Ficha">Ficha #</p>
            <input id="txtFicha" name="txtFicha"/>
        </div>

        <div className="billing_image-binoculars">
            <ImBinoculars />
        </div>

    </div>

  )
}
