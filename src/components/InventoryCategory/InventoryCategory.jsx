import {ChevronDown, ChevronUp} from 'lucide-react'
import InventoryItem from '../InventoryItem/InventoryItem'

import './InventoryCategory.css'

const InventoryCategory = props => {
  const {
    inventoryCategory,
    isOpen,
    onClickCategory,
  } = props

  const getCategoryCount = () => {
    let totalCount = 0

    inventoryCategory.category?.forEach(category => {
      category.items?.forEach(item => {
        totalCount += Number(item.qty) || 0
      })
    })

    return totalCount
  }

  const categoryCount = getCategoryCount()

  return (
    <div className="inventory-category">
      <button
        type="button"
        className="inventory-category-button"
        onClick={() => onClickCategory(inventoryCategory.name)}
      >
        <span>
          {inventoryCategory.displayName} ({categoryCount})
        </span>

        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      {isOpen && (
        <div className="inventory-items">
          {inventoryCategory.category?.map(category => (
            <div className="inventory-subcategory" key={category.id}>
              <h5>{category.displayName || category.name}</h5>

              <div className="item-list">
                {category.items?.map(item => (
                  <InventoryItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default InventoryCategory