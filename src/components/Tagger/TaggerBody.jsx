
export const TaggerBody = () => {
    return (
        <div className='tagger_body-main'>

            <div className='tagger_body-inputs'>

                <div className='tagger_body-inputs-firstLine'>
                    <p id='lblBarraTaggerBody'>Barra:</p>
                    <div className='tagger_body-inputs-firstLine-input'>
                        <button id='btnBarraTaggerBodyF1'>F1</button>
                        <input id='txtBarraTaggerBody' name='barraTaggerBody' type='text' />
                    </div>
                </div>

                <div className='tagger_body-inputs-secondLine'>
                    <p id='lblCodigoTaggerBody'>Codigo:</p>
                    <input id='txtCodigoTaggerBody' name='codigoTaggerBody' type='text' />
                </div>

                <div className='tagger_body-inputs-thirdLine'>
                    <p id='lblTextoTaggerBody'>Texto:</p>
                    <input id='txtTextoTaggerBody' name='textoTaggerBody' type='text' />
                </div>

                <div className='tagger_body-inputs-fourthLine'>
                    <div className='tagger_body-inputs-fourthLine-precio'>
                        <p id='lblPrecioTaggerBody'>Precio:</p>
                        <input id='txtPrecioTaggerBody' name='precioTaggerBody' type='text' />
                        <input id='txtPrecio2TaggerBody' name='precio2TaggerBody' type='text' />
                        <input id='txtPrecioT3aggerBody' name='precio3TaggerBody' type='text' />
                    </div>
                    <div className='tagger_body-inputs-fourthLine-presentacion'>
                        <p id='lblPresentacionTaggerBody'>Presentacion:</p>
                        <input id='txtPresentacionTaggerBody' name='presentacionTaggerBody' type='text' />
                    </div>
                </div>

                <div className='tagger_body-inputs-fifthLine'>
                    <div className='tagger_body-inputs-fifthLine-cantidad'>
                        <p id='lblCantidadTaggerBody'>Cantidad:</p>
                        <input id='txtCantidadTaggerBody' name='cantidadTaggerBody' type='number' />
                    </div>
                    <div className='tagger_body-inputs-fifthLine-copias'>
                        <p id='lblCopiasTaggerBody'>Copias:</p>
                        <input id='txtCopiasTaggerBody' name='copiasTaggerBody' type='number' />
                    </div>
                    <button id='btnImprimirTaggerBody'>Imprimir Etiquetas</button>
                </div>

            </div>

            <div className='tagger_body-image'>
                <p>image</p>
            </div>
        </div>
    )
}
