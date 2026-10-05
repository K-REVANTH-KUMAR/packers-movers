import {useEffect, useState} from 'react'

import Header from '../Header/Header'
import MoveCard from '../MoveCard/MoveCard'

import './MyMoves.css'

const API_URL =
  'https://apis2.ccbp.in/packers-and-movers/packers-and-movers-details'

const MyMoves = () => {
  const [moves, setMoves] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [showError, setShowError] = useState(false)

  useEffect(() => {
    const getMoves = async () => {
      try {
        const response = await fetch(API_URL)

        if (!response.ok) {
          throw new Error('Failed to fetch moves')
        }

        const data = await response.json()

        setMoves(data.Customer_Estimate_Flow || [])
      } catch (error) {
        setShowError(true)
      } finally {
        setIsLoading(false)
      }
    }

    getMoves()
  }, [])

  return (
    <div className="my-moves-page">
      <Header />

      <main className="main-content">
        <h1>My Moves</h1>

        {isLoading && (
          <div className="status-container">
            <p>Loading...</p>
          </div>
        )}

        {showError && (
          <div className="status-container">
            <p>Unable to load your moves.</p>
          </div>
        )}

        {!isLoading && !showError && moves.length === 0 && (
          <div className="status-container">
            <p>No moves found.</p>
          </div>
        )}

        {!isLoading && !showError && moves.length > 0 && (
          <div className="moves-container">
            {moves.map(move => (
              <MoveCard key={move.estimate_id} move={move} />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default MyMoves