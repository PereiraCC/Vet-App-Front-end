import { useSelector, useDispatch } from "react-redux";
import { OpenModalAddUnityCode } from "../../actions/unityCode";

import { UnifyCodeAddModal } from "./UnifyCodeAddModal"

export const UnifyCodeBody = () => {

    const dispatch = useDispatch();

    const openModal = () => {
        dispatch( OpenModalAddUnityCode() );
    }

    return (
        <div className='unifyCode_body-main'>

            <div className='unifyCode_body-btn'>
                <button id='btnAddUnifyCode' onClick={ openModal }>Agregar</button>
            </div>

            <div className='unifyCode_body-table'>
                <table className='unifyCode_body-table-main'>
                    <thead>
                        <tr>
                            <th className='unifyCode_body-table-header-puntoventa1'>Punto de Venta 1</th>
                            <th className='unifyCode_body-table-header-codigo1'>Codigo</th>
                            <th className='unifyCode_body-table-header-descrip1'>Descripción</th>
                            <th className='unifyCode_body-table-header-puntoventa2'>Punto de Venta 2</th>
                            <th className='unifyCode_body-table-header-codigo2'>Codigo</th>
                            <th className='unifyCode_body-table-header-descrip2'>Descripción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='unifyCode_body-table-puntoventa1'>test</td>
                            <td className='unifyCode_body-table-codigo1'>test</td>
                            <td className='unifyCode_body-table-descrip1'>test</td>
                            <td className='unifyCode_body-table-puntoventa2'>test</td>
                            <td className='unifyCode_body-table-codigo2'>test</td>
                            <td className='unifyCode_body-table-descrip2'>test</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <UnifyCodeAddModal />

        </div>
    )
}
