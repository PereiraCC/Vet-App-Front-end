import { useDispatch } from 'react-redux';

import { HiDocumentAdd } from 'react-icons/hi';
import { FaRegSave } from 'react-icons/fa';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { AiFillPrinter } from 'react-icons/ai';
import { MdLabel } from 'react-icons/md';
import { ImCancelCircle, ImCalculator } from 'react-icons/im';

import { BuysImportarFacturaModal } from './BuysImportarFacturaModal';
import { OpenModalImportarF } from '../../actions/buys';

export const BuysIcons = () => {

    const dispatch = useDispatch();

    const handleOpenImportarFacturaModal = () => {
        dispatch( OpenModalImportarF() );
    }

    return (
        <div className="buys_icons-main">

            <div className="buys_icons-nuevo">
                <div className="buys_icons-nuevo-icon">
                    <HiDocumentAdd id='iconNuevoB'/>
                </div>
                <p id='lblNuevoB'>Nuevo</p>
            </div>

            <div className="buys_icons-registrar">
                <div className="buys_icons-registrar-icon">
                    <FaRegSave id='iconRegistrarB'/>
                </div>
                <p id='lblRegistrarB'>Registrar</p>
            </div>

            <div className="buys_icons-eliminar">
                <div className="buys_icons-eliminar-icon">
                    <RiDeleteBin2Fill id='iconEliminarB'/>
                </div>
                <p id='lblEliminarB'>Eliminar</p>
            </div>

            <div className="buys_icons-imprimir">
                <div className="buys_icons-imprimir-icon">
                    <AiFillPrinter id='iconImprimirB'/>
                </div>
                <p id='lblImprimirB'>Imprimir</p>
            </div>

            <div className="buys_icons-etiquetas">
                <div className="buys_icons-etiquetas-icon">
                    <MdLabel id='iconEtiquetasB'/>
                </div>
                <p id='lblEtiquetasB'>Etiquetas</p>
            </div>

            <div className="buys_icons-cerrar">
                <div className="buys_icons-cerrar-icon">
                    <ImCancelCircle id='iconCerrarB'/>
                </div>
                <p id='lblCerrarB'>Cerrar</p>
            </div>

            <div className="buys_icons-calcular">
                <div className="buys_icons-calcular-icon">
                    <ImCalculator id='iconCalcularB'/>
                </div>
                <p id='lblCalcularB'>Calcular</p>
            </div>

            <div className="buys_icons-importarFactura">
                <button id='btnImpFacturaE' onClick={ handleOpenImportarFacturaModal }>Importar Factura Electronica</button>
            </div>

            <BuysImportarFacturaModal />
        </div>
    )
}
