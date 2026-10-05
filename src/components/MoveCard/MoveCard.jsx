import {useState} from 'react'
import {
  MapPin,
  Home,
  Package,
  Route,
  CalendarDays,
  ChevronDown,
  ChevronUp,
} from 'lucide-react'

import MoveDetails from '../MoveDetails/MoveDetails'

import './MoveCard.css'

const MoveCard = props => {
  const {move} = props

  const [showDetails, setShowDetails] = useState(false)

  const onClickViewDetails = () => {
    setShowDetails(!showDetails)
  }

  const flexibleDate = move.move_date_flexible === '1' ? 'Yes' : 'No'

  return (
    <div className="move-card">
      {/* From and To */}
      <div className="locations-container">
        <div className="location">
          <MapPin size={20} />

          <div>
            <p className="label">From</p>
            <h3>{move.moving_from}</h3>
          </div>
        </div>

        <div className="location">
          <MapPin size={20} />

          <div>
            <p className="label">To</p>
            <h3>{move.moving_to}</h3>
          </div>
        </div>
      </div>

      {/* Move Information */}
      <div className="move-info-container">
        <div className="info-item">
          <div>
            <p className="label">Request #</p>
            <p>{move.estimate_id}</p>
          </div>
        </div>

        <div className="info-item">
          <Home size={20} />

          <div>
            <p className="label">Property Type</p>
            <p>{move.property_size}</p>
          </div>
        </div>

        <div className="info-item">
          <Package size={20} />

          <div>
            <p className="label">Total Items</p>
            <p>{move.total_items}</p>
          </div>
        </div>

        <div className="info-item">
          <Route size={20} />

          <div>
            <p className="label">Distance</p>
            <p>{move.distance}</p>
          </div>
        </div>

        <div className="info-item">
          <CalendarDays size={20} />

          <div>
            <p className="label">Moving On</p>
            <p>{move.moving_on}</p>
          </div>
        </div>

        <div className="info-item">
          <div>
            <p className="label">Flexible</p>
            <p>{flexibleDate}</p>
          </div>
        </div>

        <div className="info-item status-info">
          <div>
            <p className="label">Status</p>

            <span className="status-button">
              {move.custom_status}
            </span>
          </div>
        </div>
      </div>

      {/* View Details Button */}
      <div className="button-container">
        <button type="button" onClick={onClickViewDetails}>
          {showDetails ? (
            <>
              Hide Move Details
              <ChevronUp size={18} />
            </>
          ) : (
            <>
              View Move Details
              <ChevronDown size={18} />
            </>
          )}
        </button>
      </div>

      {/* Expanded Details */}
      {showDetails && <MoveDetails move={move} />}
    </div>
  )
}

export default MoveCard