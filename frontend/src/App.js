import React from 'react'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Cart from './pages/Cart'
import Login from './pages/Login'
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom'
import axios from 'axios'


let pages = [
  {path: '/',component: Login},
]

const userToken = localStorage.getItem('etest-user-token')
if(userToken){
  pages = [
    {path: '/',component: Home},
    {path: '/profile',component: Profile},
    {path: '/cart',component: Cart},
  ]
  axios.defaults.headers.common['usertoken'] = userToken
}

const App = (props) => {
  return(
    <Router>
      <Switch>
        {pages.map((page,i) => <Route key={i} path={page.path} exact component={page.component} />)}
      </Switch>
    </Router>
  )
}
export default App
