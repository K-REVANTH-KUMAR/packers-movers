import {
  ClipboardList,
  User,
  MessageSquareQuote,
  LogOut,
} from 'lucide-react'

import {NavLink} from 'react-router'

import './Header.css'

const Header = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>Packers & Movers</h2>
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/moves" className="nav-item">
          <ClipboardList size={20} />
          <span>My Moves</span>
        </NavLink>

        <NavLink to="/profile" className="nav-item">
          <User size={20} />
          <span>My Profile</span>
        </NavLink>

        <NavLink to="/quotes" className="nav-item">
          <MessageSquareQuote size={20} />
          <span>My Quotes</span>
        </NavLink>

        <NavLink to="/login" className="nav-item logout">
          <LogOut size={20} />
          <span>Logout</span>
        </NavLink>
      </nav>
    </aside>
  )
}

export default Header