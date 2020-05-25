import React from 'react'
import Layout from '../components/Layout'
import Info from '../components/profile/Info'

const Profile = (props) => {
  return(
    <Layout>
      <div className="profile row justify-content-center">
        <Info />
      </div>
    </Layout>
  )
}
export default Profile
