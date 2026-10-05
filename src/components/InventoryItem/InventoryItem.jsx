import './InventoryItem.css'

const InventoryItem = props => {
  const {item} = props

  return (
    <div className="item-row">
      <span>
        {item.displayName || item.name || 'Item'}
      </span>

      <span className="item-count">
        ({item.qty || 0})
      </span>
    </div>
  )
}

export default InventoryItem