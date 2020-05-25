import React,{ useContext, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'


const Dropdown = ({ children }) => {
  return (
    <div className="drop-down-menu">
      { children }
    </div>
  )
}

const Navigation = (props) => {
  const { profile, getProfile } = useContext(UserContext)
  const [dropdown,setDropdown] = useState(false)
  const history = useHistory()

  const getLogout = (e) => {
    localStorage.removeItem('etest-user-token')
    window.location = '/'
  }

  useEffect(() => {
    getProfile()
  },[])

  return(
    <div className="layout-navigation d-flex justify-content-between align-items-center">
      <Link to="/" className="title link">
        <span className="text-danger">E</span>-<span className="text-info">solution</span>
      </Link>
      <div className="d-flex nav-pages align-items-center">
        <ul className="nav">
          <li className="nav-item"><Link className="nav-link text-dark" to="">Home</Link></li>
          <li className="nav-item"><Link className="nav-link text-dark" to="">Category</Link></li>
          <li className="nav-item"><Link className="nav-link text-dark" to="">Trend</Link></li>
          {profile && <li className="nav-item drop-down">
            <p onClick={e => setDropdown(!dropdown)} className="nav-link text-info font-6 mb-0 pointer dropdown-toggle drop-down-target">{profile.name}</p>
            {dropdown && <Dropdown>
              <Link className="drop-down-item" to="/profile">Profile</Link>
              <p onClick={getLogout} className="drop-down-item">Logout</p>
            </Dropdown>}
          </li>}
        </ul>
        <div>
          <i onClick={e => history.push('/cart')} className="fa fa-cart-plus"></i>
        </div>
      </div>
    </div>
  )
}
export default Navigation
