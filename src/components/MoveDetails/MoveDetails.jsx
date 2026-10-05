import AdditionalInformation from '../AdditionalInformation/AdditionalInformation'
import HouseDetails from '../HouseDetails/HouseDetails'
import InventoryDetails from '../InventoryDetails/InventoryDetails'
import CustomItems from '../CustomItems/CustomItems'

import './MoveDetails.css'

const MoveDetails = props => {
  const {move} = props

  return (
    <div className="move-details">
      <div className="details-header">
        <h3>Move Details</h3>
      </div>

      <AdditionalInformation move={move} />

      <HouseDetails move={move} />

      <InventoryDetails items={move.items} />

      <CustomItems items={move.items?.customItems} />
    </div>
  )
}

export default MoveDetails