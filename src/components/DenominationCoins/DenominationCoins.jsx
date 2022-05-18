import { HiDocumentAdd } from 'react-icons/hi';
import { FaRegSave, FaSearch } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import { ImCancelCircle} from 'react-icons/im';

export const DenominationCoins = () => {
    return (
        <div className='denominationCoins-main'>

            <div className='denominationCoins-header'>
                <p id='lblTitleDenominationCoins'>Denominación Monedas</p>
            </div>

            <div className='denominationCoins-body'>
                
                <div className='denominationCoins-body-moneda'>
                    <p id='lblMonedaDenominationCoins'>Moneda</p>
                    <select id='cboMonedaDenominationCoins' name='monedaDenominationCoins'>
                        <option value="COLON">COLON</option>
                        <option value="DOLAR">DOLAR</option>
                    </select>
                </div>

                <div className='denominationCoins-body-denominacion'>
                    <p id='lblDenominacionDenominationCoins'>Denominación</p>
                    <select id='cboDenominacionDenominationCoins' name='denominacionDenominationCoins'>
                        <option value="MONEDA">MONEDA</option>
                        <option value="BILLETE">BILLETE</option>
                    </select>
                </div>

                <div className='denominationCoins-body-valor'>
                    <p id='lblValorDenominationCoins'>Valor</p>
                    <input type='text' id='txtValorDenominationCoins' name='valorDenominationCoins'/>
                </div>
                
            </div>

            <div className='denominationCoins-icons'>
                
                <div className='denominationCoins-icons-nuevo'>
                    <div className='denominationCoins-icons-nuevo-icon'>
                        <HiDocumentAdd id='iconNuevoDenominationC'/>
                    </div>
                    <p id='lblNuevoDenominationC'>Nuevo</p>
                </div>

                <div className='denominationCoins-icons-registrar'>
                    <div className='denominationCoins-icons-registrar-icon'>
                        <FaRegSave id='iconRegistrarDenominationC'/>
                    </div>
                    <p id='lblRegistrarDenominationC'>Registrar</p>
                </div>

                <div className='denominationCoins-icons-Editar'>
                    <div className='denominationCoins-icons-Editar-icon'>
                        <AiFillEdit id='iconEditarDenominationC'/>
                    </div>
                    <p id='lblEditarDenominationC'>Editar</p>
                </div>

                <div className='denominationCoins-icons-cerrar'>
                    <div className='denominationCoins-icons-cerrar-icon'>
                        <ImCancelCircle id='iconCerrarDenominationC'/>
                    </div>
                    <p id='lblCerrarDenominationC'>Cerrar</p>
                </div>

            </div>

        </div>
    )
}
