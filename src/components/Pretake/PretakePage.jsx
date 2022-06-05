import { PretakeBody } from "./PretakeBody"
import { PretakeIcons } from "./PretakeIcons"

export const PretakePage = () => {
    return (
        <div className='pretake_main'>

            <div className='pretake_header'>
                <p id='lblTitlePretake'>Registrar Pretoma</p>
            </div>

            <div className='pretake_body'>
                <PretakeBody />
            </div>

            <div className='pretake_footer'>
                <PretakeIcons />
            </div>
        </div>
    )
}
