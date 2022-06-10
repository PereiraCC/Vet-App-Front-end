import { SalesAgentBody } from "../SalesAgent/SalesAgentBody"
import { SalesAgentIcons } from "../SalesAgent/SalesAgentIcons"
import { TaggerBody } from "./TaggerBody"
import { TaggerIcons } from "./TaggerIcons"

export const Tagger = () => {
    return (
        <div className='tagger-main'>

            <div className='tagger-title'>
                <p id='lblTitleTagger'>Etiquetar</p>
            </div>

            <div className='tagger-body'>
                <TaggerBody />
            </div>

            <div className='tagger-icons'>
                <TaggerIcons />
            </div>

        </div>
    )
}
