import './CustomItems.css'

const CustomItems = props => {
  const {items} = props

  if (!items || !items.items || items.items.length === 0) {
    return null
  }

  return (
    <section className="custom-items">
      <h3>Custom Items</h3>

      <div className="custom-items-list">
        {items.items.map(item => (
          <div className="custom-item" key={item.id}>
            <div>
              <p className="detail-label">Item Name</p>
              <p>{item.item_name}</p>
            </div>

            <div>
              <p className="detail-label">Quantity</p>
              <p>{item.item_qty}</p>
            </div>

            <div>
              <p className="detail-label">Dimensions</p>
              <p>
                {item.item_length} × {item.item_width} ×{' '}
                {item.item_height}
              </p>
            </div>

            <div>
              <p className="detail-label">Description</p>
              <p>{item.item_description || '-'}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CustomItems