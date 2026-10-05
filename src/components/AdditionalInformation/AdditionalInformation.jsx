import {useState} from 'react'
import './AdditionalInformation.css'

const AdditionalInformation = props => {
  const {move} = props

  const [isEditing, setIsEditing] = useState(false)

  const [packingService, setPackingService] = useState(
    move.packing_service === '1' ? 'Yes' : 'No',
  )

  const [unpackingService, setUnpackingService] = useState(
    move.unpacking_service === '1' ? 'Yes' : 'No',
  )

  const [flexibleDate, setFlexibleDate] = useState(
    move.move_date_flexible === '1' ? 'Yes' : 'No',
  )

  const onClickEdit = () => {
    setIsEditing(true)
  }

  const onClickSave = () => {
    setIsEditing(false)
  }

  return (
    <section className="additional-information-section">
      <div className="section-heading">
        <h3>Additional Information</h3>

        <button
          type="button"
          className="edit-button"
          onClick={isEditing ? onClickSave : onClickEdit}
        >
          {isEditing ? 'Save' : 'Edit Additional Information'}
        </button>
      </div>

      <div className="additional-information">
        <div className="detail-item">
          <p className="detail-label">Packing Service</p>

          {isEditing ? (
            <select
              value={packingService}
              onChange={event => setPackingService(event.target.value)}
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          ) : (
            <p>{packingService}</p>
          )}
        </div>

        <div className="detail-item">
          <p className="detail-label">Unpacking Service</p>

          {isEditing ? (
            <select
              value={unpackingService}
              onChange={event => setUnpackingService(event.target.value)}
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          ) : (
            <p>{unpackingService}</p>
          )}
        </div>

        <div className="detail-item">
          <p className="detail-label">Move Date Flexible</p>

          {isEditing ? (
            <select
              value={flexibleDate}
              onChange={event => setFlexibleDate(event.target.value)}
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          ) : (
            <p>{flexibleDate}</p>
          )}
        </div>

        <div className="detail-item">
          <p className="detail-label">Service Type</p>
          <p>{move.service_type || '-'}</p>
        </div>
      </div>
    </section>
  )
}

export default AdditionalInformation