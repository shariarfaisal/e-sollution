import React,{ useContext, useEffect } from 'react'
import { UserContext } from '../../contexts/UserContext'


const Info = (props) => {
  const { profile, getProfile } = useContext(UserContext)

  useEffect(() => {
    getProfile()
  },[])

  return(
    profile && <div className="info col-md-8 py-5 px-4 bg-light rounded mt-5 border">
      <h2>{profile.name}</h2>
      <p className="mb-0">email: <span className="text-muted">{profile.email}</span></p>
    </div>
  )
}
export default Info
