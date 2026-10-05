import {useState} from 'react'
import InventoryCategory from '../InventoryCategory/InventoryCategory'

import './InventoryDetails.css'

const InventoryDetails = props => {
  const {items} = props

  const [openCategory, setOpenCategory] = useState('')

  if (!items || !items.inventory) {
    return null
  }

  const onClickCategory = categoryName => {
    if (openCategory === categoryName) {
      setOpenCategory('')
    } else {
      setOpenCategory(categoryName)
    }
  }

  return (
    <section className="inventory-details">
      <h3>Inventory Details</h3>

      {items.inventory.map(inventoryCategory => (
        <InventoryCategory
          key={inventoryCategory.id}
          inventoryCategory={inventoryCategory}
          isOpen={openCategory === inventoryCategory.name}
          onClickCategory={onClickCategory}
        />
      ))}
    </section>
  )
}

export default InventoryDetails