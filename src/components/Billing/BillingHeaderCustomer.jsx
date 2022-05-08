import { SiHappycow } from 'react-icons/si';
import { AiFillFileAdd, AiFillEdit } from 'react-icons/ai';
import { RiFileEditFill } from 'react-icons/ri';
import { FaSearch } from 'react-icons/fa';

export const BillingHeaderCustomer = () => {
  return (
    
      <div className="billing_header-customer-main">

          <div className="billing_header-customer-first">

            <div className='billing_header-customer-first-cedula'>

                <div className="billing_header-customer-first-cedula-input">
                    <p id="lblCedula">Cédula</p>
                    <input id="txtCedula" name="cedula"/>
                </div>

                <div className='billing_header-customer-first-cedula-input-icon'>
                    <FaSearch id='btnSearchClienteBilling'/>
                </div>
            </div>

            <div className="billing_header-customer-first-tipo">
                <p id="lblTipo">Tipo</p>
                <select name="tipo" id="cboTipo">
                    <option value="Fisica">Fisica</option>
                    <option value="Juridica">Jurídica</option>
                </select>
            </div>

            <div className="billing_header-customer-first-nombre">
                <p id="lblNombre">Nombre del cliente</p>
                <input id="txtNombre" name="nombre" autoComplete="off"/>
            </div>

            <div className="billing_header-customer-first-buttons">
                <div className="button1">
                    <AiFillEdit id='button1'/>
                </div>
                <div className="button2">
                    <SiHappycow id='button1'/>
                </div>
                <div className="button3">
                    <AiFillFileAdd id='button3'/>
                </div>
            </div>

          </div>

          <div className="billing_header-customer-second">
             
            <div className='billing_header-customer-second-telefono'>
                <p id='lblTelefono'>Teléfono</p>
                <input id='txtTelefono' name='telefono' autoComplete='off'/>
            </div>

            <div className='billing_header-customer-second-direccion'>
                <p id='lblDireccion'>Dirección</p>
                <input id='txtDireccion' name='direccion' autoComplete='off'/>
            </div>

            <div className='billing_header-customer-second-Encargado'>
                <p id='lblEncargado'>Encargado</p>
                <input id='txtEncargado' name='encargado' autoComplete='off'/>
            </div>

          </div>

          <div className="billing_header-customer-third">

            <div className='billing_header-customer-third-observaciones'>
                <p id='lblObservaciones'>Observaciones</p>
                <input id='txtObservaciones' name='observaciones' autoComplete='off'/>
            </div>

            <div className='billing_header-customer-third-correos'>
                <p id='lblComprobante'>Correo Comprobantes</p>
                <input id='txtComprobante' name='correos' autoComplete='off'/>
            </div>

            <div className='billing_header-customer-third-button'>
                <div className="buttonPencil">
                    <RiFileEditFill id='buttonPencil'/>
                </div>
            </div>

          </div>

      </div>
  )
}
