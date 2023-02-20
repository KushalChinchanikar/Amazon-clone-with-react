import React from 'react'
import "./CheckoutProduct.css"

function CheckoutProduct({id, title, image, price, rating}) {
  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct__image' src={image} alt=""></img>
      <div class="checkoutProduct__info">
        <p class="chekoutProduct__title">{title}</p>
        <p className='checkoutProduct__price'>
                <small>$</small>
                <strong>{price}</strong>
        </p>
        <div class="checkoutProduct__rating">
                {
                    Array(rating)
                    .fill()
                    .map((_)=> (
                        <p>st</p>
                    ))
                }
        </div>
        <button>Remove from Basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
