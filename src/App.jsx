import {Routes, Route, Navigate} from 'react-router'

import Login from './components/Login/Login'
import MyMoves from './components/MyMoves/MyMoves'
import Profile from './components/Profile/Profile'
import MyQuotes from './components/MyQoutes/MyQoutes'

import './App.css'

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/moves" element={<MyMoves />} />

      <Route path="/profile" element={<Profile />} />

      <Route path="/quotes" element={<MyQuotes />} />

      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

export default App