import React from 'react'
import Carousel from '../components/Carousel/Carousel'
import ProductIcons from '../components/Products/ProducIcons'

function Home() {
  return (
    <div>
      <div className="">
        <Carousel />
      </div>
      <div className="">
        <ProductIcons />
      </div>
      
    </div>
  )
}

export default Home
