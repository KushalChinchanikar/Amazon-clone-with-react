import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <div className='home'>
      <img className='home__image' src="https://m.media-amazon.com/images/I/51DWgNo1fdL._SX3000_.jpg" alt="banner"/>
      <div class="home__row">
        <Product id="12321"
        title="The Lean Startup: How constant innovation creates" 
        price={11.96}
        rating={5}
        image="https://m.media-amazon.com/images/I/51uJbi2wpIL._AC_SY200_.jpg" 
        />
        <Product id="12321"
        title="The Lean Startup: How constant innovation creates" 
        price={11.96}
        rating={5}
        image="https://m.media-amazon.com/images/I/51uJbi2wpIL._AC_SY200_.jpg" 
        />
      </div>

      <div class="home__row">
        <Product id="12321"
          title="The Lean Startup: How constant innovation creates" 
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/51uJbi2wpIL._AC_SY200_.jpg" 
          />
          <Product id="12321"
          title="The Lean Startup: How constant innovation creates" 
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/51uJbi2wpIL._AC_SY200_.jpg" 
          />
          <Product id="12321"
          title="The Lean Startup: How constant innovation creates" 
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/51uJbi2wpIL._AC_SY200_.jpg" 
          />
      </div>

      <div class="home__row">
        <Product id="12321"
        title="The Lean Startup: How constant innovation creates" 
        price={11.96}
        rating={5}
        image="https://m.media-amazon.com/images/I/51uJbi2wpIL._AC_SY200_.jpg" 
        />
      </div>
      
    </div>
  )
}

export default Home
