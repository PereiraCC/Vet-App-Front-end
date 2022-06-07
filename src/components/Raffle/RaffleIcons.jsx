import { HiDocumentAdd } from 'react-icons/hi';
import { FaRegSave, FaSearch } from 'react-icons/fa';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { ImCancelCircle} from 'react-icons/im';
import { AiFillEdit } from 'react-icons/ai';

export const RaffleIcons = () => {
    return (
        <div className='raffle_icons-main'>

            <div className='raffle_icons-nuevo'>
                <div className="raffle_icons-nuevo-icon">
                    <HiDocumentAdd id='iconNuevoRaffle'/>
                </div>
                <p id='lblNuevoRaffle'>Nuevo</p>
            </div>

            <div className='raffle_icons-Buscar'>
                <div className="raffle_icons-Buscar-icon">
                    <FaSearch id='iconBusRaffle'/>
                </div>
                <p id='lblBuscarRaffle'>Buscar</p>
            </div>

            <div className="raffle_icons-registrar">
                <div className="raffle_icons-registrar-icon">
                    <FaRegSave id='iconRegistrarRaffle'/>
                </div>
                <p id='lblRegistrarRaffle'>Registrar</p>
            </div>

            <div className="raffle_icons-eliminar">
                <div className="raffle_icons-eliminar-icon">
                    <RiDeleteBin2Fill id='iconEliminarRaffle'/>
                </div>
                <p id='lblEliminarRaffle'>Eliminar</p>
            </div>

            <div className='raffle_icons-Editar'>
                <div className='raffle_icons-Editar-icon'>
                    <AiFillEdit id='iconEditRaffle'/>
                </div>
                <p id='lblEditarRaffle'>Editar</p>
            </div>

            <div className="raffle_icons-cerrar">
                <div className="raffle_icons-cerrar-icon">
                    <ImCancelCircle id='iconCerrarRaffle'/>
                </div>
                <p id='lblCerrarRaffle'>Cerrar</p>
            </div>

        </div>
    )
}
