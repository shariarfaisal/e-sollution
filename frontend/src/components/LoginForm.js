import React,{ useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'


const LoginForm = (props) => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState({})
  const { login } = useContext(UserContext)

  const submitHandler = async (e) => {
    e.preventDefault()
    const { data, error: err } = await login({email,password})
    if(data){
      localStorage.setItem('etest-user-token',data)
      document.location = '/'
    }
    if(err) setError(err)
  }

  const changeHandler = e => {
    setError({...error,msg: ''})
  }

  return(
    <form onChange={changeHandler} onSubmit={submitHandler} className="loginform">
      <h2 className="text-center my-3">Login</h2>
      {error.msg && <small className="text-danger my-2 d-block text-center">{error.msg}</small>}
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          className={`form-control ${error.email ? 'is-invalid': ''}`}
          type="email"
          onChange={e => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
        />
        {error.email && <small className="text-danger">{error.email}</small>}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          className={`form-control ${error.password ? 'is-invalid': ''}`}
          type="password"
          onChange={e => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
        />
        {error.password && <small className="text-danger">{error.password}</small>}
      </div>
      <div className="mt-2">
        <button type="submit" className="btn btn-info px-3">Login</button>
        <small className="d-block mt-2">Create new account <Link to="/signup">here</Link></small>
      </div>
    </form>
  )
}
export default LoginForm
