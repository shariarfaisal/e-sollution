import React from 'react'
import LoginForm from '../components/LoginForm'
import UserContextProvider from '../contexts/UserContext'

const Login = (props) => {
  return(
    <UserContextProvider>
      <div className="login">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-8 col-lg-6">
            <LoginForm />
          </div>
        </div>
      </div>
    </UserContextProvider>
  )
}
export default Login
