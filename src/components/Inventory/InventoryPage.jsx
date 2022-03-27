import { InventoryBody } from './InventoryBody'
import { InventoryHeader } from './InventoryHeader'
import { InventoryHeaderArticle } from './InventoryHeaderArticle'

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
          <h1>Footer</h1>
      </div>

    </div>
  )
}
