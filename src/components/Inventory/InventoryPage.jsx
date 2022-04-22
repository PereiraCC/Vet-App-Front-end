import { InventoryFooter } from './InventoryFooter'
import { InventoryHeader } from './InventoryHeader'
import { InventoryHeaderArticle } from './InventoryHeaderArticle'
import { InventoryBody } from './inventory_body/InventoryBody'

export const InventoryPage = () => {
  return (
    <div className='inventory inventory_main'>

      <div className='inventory_header'>
          <InventoryHeader />
      </div>

      <div className='inventory_header-article'>  
         <InventoryHeaderArticle />
      </div>

      <div className='inventory_body'>
          <InventoryBody />
      </div>

      <div className='inventory_footer'>
          <InventoryFooter />
      </div>

    </div>
  )
}
