import { AiFillFileAdd, AiFillSave} from 'react-icons/ai';
import { RiFileSearchFill, RiDeleteBack2Fill } from 'react-icons/ri';

export const AreasIcons = () => {
    return (
        <div className='areas_icons-main'>

            <div className="areas_icons-nuevo">
                <div className="areas_icons-nuevo-icon">
                    <AiFillFileAdd id='iconNuevoAreas'/>
                </div>
                <p id='lblNuevoAreas'>Nuevo Area</p>
            </div>

            <div className="areas_icons-guardar">
                <div className="areas_icons-guardar-icon">
                    <AiFillSave id='iconGuardarAreas'/>
                </div>
                <p id='lblGuardarAreas'>Guardar Area</p>
            </div>

            <div className='areas_icons-Buscar'>
                <div className="areas_icons-Buscar-icon">
                    <RiFileSearchFill id='iconBusAreas'/>
                </div>
                <p id='lblBuscarAreas'>Buscar Area</p>
            </div>

            <div className="areas_icons-anular">
                <div className="areas_icons-anular-icon">
                    <RiDeleteBack2Fill id='iconAnularAreas'/>
                </div>
                <p id='lblAnularAreas'>Eliminar Area</p>
            </div>

        </div>
    )
}
