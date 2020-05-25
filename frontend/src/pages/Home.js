import React from 'react'
import Layout from '../components/Layout'
import Products from '../components/home/Products'
import Showcase from '../components/home/Showcase'

const Home = (props) => {
  return(
    <Layout>
      <div className="home">
        <div className="row w-100">
          <Products />
          <Showcase />
        </div>
      </div>
    </Layout>
  )
}
export default Home
