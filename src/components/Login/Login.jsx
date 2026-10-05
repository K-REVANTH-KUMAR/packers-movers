import {useState} from 'react'
import {useNavigate} from 'react-router'

import './Login.css'

const Login = () => {
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitLogin = event => {
    event.preventDefault()

    if (username !== '' && password !== '') {
      navigate('/moves')
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Packers & Movers</h1>
        <h2>Login</h2>

        <form onSubmit={onSubmitLogin}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              placeholder="Enter username"
              onChange={event => setUsername(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              placeholder="Enter password"
              onChange={event => setPassword(event.target.value)}
            />
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login