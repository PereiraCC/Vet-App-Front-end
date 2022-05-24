import { HiDocumentAdd } from 'react-icons/hi';
import { FaRegSave, FaSearch } from 'react-icons/fa';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { ImCancelCircle} from 'react-icons/im';
import { MdUpdate } from 'react-icons/md';

export const ProformaIcons = () => {
    return (
        <div className='proforma-icons-main'>

            <div className="proforma-icons-nuevo">
                <div className="proforma-icons-nuevo-icon">
                    <HiDocumentAdd id='iconNuevoProforma'/>
                </div>
                <p id='lblNuevoProforma'>Nuevo</p>
            </div>

            <div className='proforma-icons-Buscar'>
                <div className="proforma-icons-Buscar-icon">
                    <FaSearch id='iconBusProforma'/>
                </div>
                <p id='lblBuscarProforma'>Buscar</p>
            </div>

            <div className="proforma-icons-registrar">
                <div className="proforma-icons-registrar-icon">
                    <FaRegSave id='iconRegistrarProforma'/>
                </div>
                <p id='lblRegistrarProforma'>Registrar</p>
            </div>

            <div className="proforma-icons-anular">
                <div className="proforma-icons-anular-icon">
                    <RiDeleteBin2Fill id='iconAnularProforma'/>
                </div>
                <p id='lblAnularProforma'>Anular</p>
            </div>

            <div className="proforma-icons-cerrar">
                <div className="proforma-icons-cerrar-icon">
                    <ImCancelCircle id='iconCerrarProforma'/>
                </div>
                <p id='lblCerrarProforma'>Cerrar</p>
            </div>

            <div className="proforma-icons-actualizarPrecios">
                <div className="proforma-icons-actualizarPrecios-icon">
                    <MdUpdate id='iconactualizarPreciosProforma'/>
                </div>
                <p id='lblactualizarPreciosProforma'>Actualizar Precios</p>
            </div>

            <div className="proforma-icons-anulada">
                <div className="proforma-icons-anulada-input">
                    <input type="checkbox" id="checkAnuladaProforma" name="Anulada" value="Anulada" />
                </div>
                <label for="checkAnuladaProforma" id="lblAnuladaProforma">Anulada</label>
            </div>

        </div>
    )
}
