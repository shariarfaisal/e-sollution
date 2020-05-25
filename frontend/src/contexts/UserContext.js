import React,{ useState, createContext } from 'react'
import axios from 'axios'
const url = 'http://localhost:1000/api'
export const UserContext = createContext()

const UserContextProvider = ({ children }) => {
  const [profile,setProfile] = useState(null)

  const getProfile = async () => {
    const get = await axios.get(`${url}/user/profile`)
    if(get){
      setProfile(get.data)
    }
  }

  const login = async (arg) => {
    let [data, error] = [null,null]
    try{
      const get = await axios.post(`${url}/user/login`,arg)
      data = get.data
    }catch(err){
      error = err.response.data
    }

    return { data, error }
  }

  return(
    <UserContext.Provider value={{
      login, profile, getProfile
    }}>
      { children }
    </UserContext.Provider>
  )
}

export default UserContextProvider
