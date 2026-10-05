import {useState} from 'react'
import './HouseDetails.css'

const HouseDetails = props => {
  const {move} = props

  const [isEditing, setIsEditing] = useState(false)

  const [oldFloorNo, setOldFloorNo] = useState(move.old_floor_no || '')

  const [oldElevator, setOldElevator] = useState(
    move.old_elevator_availability || '',
  )

  const [oldParkingDistance, setOldParkingDistance] = useState(
    move.old_parking_distance || '',
  )

  const [oldAdditionalInfo, setOldAdditionalInfo] = useState(
    move.old_house_additional_info || '',
  )

  const [newFloorNo, setNewFloorNo] = useState(move.new_floor_no || '')

  const [newElevator, setNewElevator] = useState(
    move.new_elevator_availability || '',
  )

  const [newParkingDistance, setNewParkingDistance] = useState(
    move.new_parking_distance || '',
  )

  const [newAdditionalInfo, setNewAdditionalInfo] = useState(
    move.new_house_additional_info || '',
  )

  const onClickEdit = () => {
    setIsEditing(true)
  }

  const onClickSave = () => {
    setIsEditing(false)
  }

  return (
    <section className="house-details-section">
      <div className="section-heading">
        <h3>House Details</h3>

        <button
          type="button"
          className="edit-button"
          onClick={isEditing ? onClickSave : onClickEdit}
        >
          {isEditing ? 'Save' : 'Edit House Details'}
        </button>
      </div>

      <div className="house-details">
        <div className="house-section">
          <h4>Existing House Details</h4>

          <div className="house-info">
            <div className="detail-item">
              <p className="detail-label">Floor No.</p>

              {isEditing ? (
                <input
                  type="text"
                  value={oldFloorNo}
                  onChange={event => setOldFloorNo(event.target.value)}
                />
              ) : (
                <p>{oldFloorNo || '-'}</p>
              )}
            </div>

            <div className="detail-item">
              <p className="detail-label">Elevator</p>

              {isEditing ? (
                <select
                  value={oldElevator}
                  onChange={event => setOldElevator(event.target.value)}
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              ) : (
                <p>{oldElevator || '-'}</p>
              )}
            </div>

            <div className="detail-item">
              <p className="detail-label">Parking Distance</p>

              {isEditing ? (
                <input
                  type="text"
                  value={oldParkingDistance}
                  onChange={event =>
                    setOldParkingDistance(event.target.value)
                  }
                />
              ) : (
                <p>{oldParkingDistance || '-'}</p>
              )}
            </div>

            <div className="detail-item wide-detail">
              <p className="detail-label">Additional Information</p>

              {isEditing ? (
                <input
                  type="text"
                  value={oldAdditionalInfo}
                  onChange={event =>
                    setOldAdditionalInfo(event.target.value)
                  }
                />
              ) : (
                <p>{oldAdditionalInfo || '-'}</p>
              )}
            </div>
          </div>
        </div>

        <div className="house-section">
          <h4>New House Details</h4>

          <div className="house-info">
            <div className="detail-item">
              <p className="detail-label">Floor No.</p>

              {isEditing ? (
                <input
                  type="text"
                  value={newFloorNo}
                  onChange={event => setNewFloorNo(event.target.value)}
                />
              ) : (
                <p>{newFloorNo || '-'}</p>
              )}
            </div>

            <div className="detail-item">
              <p className="detail-label">Elevator</p>

              {isEditing ? (
                <select
                  value={newElevator}
                  onChange={event => setNewElevator(event.target.value)}
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              ) : (
                <p>{newElevator || '-'}</p>
              )}
            </div>

            <div className="detail-item">
              <p className="detail-label">Parking Distance</p>

              {isEditing ? (
                <input
                  type="text"
                  value={newParkingDistance}
                  onChange={event =>
                    setNewParkingDistance(event.target.value)
                  }
                />
              ) : (
                <p>{newParkingDistance || '-'}</p>
              )}
            </div>

            <div className="detail-item wide-detail">
              <p className="detail-label">Additional Information</p>

              {isEditing ? (
                <input
                  type="text"
                  value={newAdditionalInfo}
                  onChange={event =>
                    setNewAdditionalInfo(event.target.value)
                  }
                />
              ) : (
                <p>{newAdditionalInfo || '-'}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HouseDetails