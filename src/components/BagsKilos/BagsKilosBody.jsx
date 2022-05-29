import { FaSearch } from 'react-icons/fa';

export const BagsKilosBody = () => {
    return (
        <div className='bagsKilos_body-main'>

            <div className='bagsKilos_body-disminuir'>
                
                <div className='bagsKilos_body-disminuir-title'>
                    <p id='lblTitleDisminuirBagsKilos'>Articulo a Disminuir</p>
                </div>

                <div className='bagsKilos_body-disminuir-firstLine'>
                    
                    <div className='bagsKilos_body-disminuir-firstLine-codigo'>
                        <p id='lblCodigoDisminuirBagsKilos'>Código</p>
                        <div className='bagsKilos_body-disminuir-firstLine-codigo-inputs'>
                            <FaSearch id='iconCodigoDBK'/>
                            <input type='text' id='txtCodigoDBK' name='codigoDBK'/>
                        </div>
                    </div>

                    <div className='bagsKilos_body-disminuir-firstLine-descripcion'>
                        <p id='lblDescripcionDBK'>Descripción</p>
                        <input type='text' id='txtDescripcionDBK' name='descripcionDBK'/>
                    </div>

                    <div className='bagsKilos_body-disminuir-firstLine-existencia'>
                        <p id='lblExistenciaDBK'>Existencia</p>
                        <input type='text' id='txtExistenciaDBK' name='existenciaDBK'/>
                    </div>

                </div>

                <div className='bagsKilos_body-disminuir-secondLine'>
                    <p id='lblCantidadDescargarDBK'>Cantidad Descargar</p>
                    <input type='number' id='txtCantidadDescargarDBK' name='CantidadDescargarDBK'/>
                </div>

            </div>

            <div className='bagsKilos_body-aumentar'>

                <div className='bagsKilos_body-aumentar-title'>
                    <p id='lblTitleAumentarBagsKilos'>Articulo a Aumentar</p>
                </div>

                <div className='bagsKilos_body-aumentar-firstLine'>
                    
                    <div className='bagsKilos_body-aumentar-firstLine-codigo'>
                        <p id='lblCodigoAumentarBagsKilos'>Código</p>
                        <div className='bagsKilos_body-aumentar-firstLine-codigo-inputs'>
                            <FaSearch id='iconCodigoABK'/>
                            <input type='text' id='txtCodigoABK' name='codigoABK'/>
                        </div>
                    </div>

                    <div className='bagsKilos_body-aumentar-firstLine-descripcion'>
                        <p id='lblDescripcionABK'>Descripción</p>
                        <input type='text' id='txtDescripcionABK' name='descripcionABK'/>
                    </div>

                    <div className='bagsKilos_body-aumentar-firstLine-existencia'>
                        <p id='lblExistenciaABK'>Existencia</p>
                        <input type='text' id='txtExistenciaABK' name='existenciaABK'/>
                    </div>

                </div>

                <div className='bagsKilos_body-aumentar-secondLine'>

                    <div className='bagsKilos_body-aumentar-secondLine-aumentarSaco'>
                        <p id='lblAumentarSacoABK'>Aumentar x Saco</p>
                        <input type='text' id='txtAumentarSacoABK' name='aumentarSacoABK'/>
                    </div>

                    <div className='bagsKilos_body-aumentar-secondLine-cantidad'>
                        <p id='lblCantidadAumentarABK'>Cantidad Aumentar</p>
                        <input type='number' id='txtCantidadAumentarABK' name='CantidadAumentarABK'/>
                    </div>
                    
                </div>

            </div>

            <div className='bagsKilos_body-btns'>
                <button id='btnAceptarBagsKilos'>Aceptar</button>
                <button id='btnCancelarBagsKilos'>Cancelar</button>
            </div>

        </div>
    )
}
