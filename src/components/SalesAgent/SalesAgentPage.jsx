import { SalesAgentBody } from "./SalesAgentBody"
import { SalesAgentIcons } from "./SalesAgentIcons"

export const SalesAgentPage = () => {
    return (
        <div className='sales_agent-main'>

            <div className='sales_agent-title'>
                <p id='lblTitleSalesAgent'>Agentes de Venta</p>
            </div>

            <div className='sales_agent-body'>
                <SalesAgentBody />
            </div>

            <div className='sales_agent-icons'>
                <SalesAgentIcons />
            </div>

        </div>
    )
}
