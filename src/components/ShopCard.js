import React from 'react'

function ShopCard(props) {
  const {name, color, img, price} = props.card;
  return (
    <article className='card'>
      <header className='card__header'>
        <h3 className='card__title'>{name}</h3>
        <div className='card__description'>{color}</div>
      </header>
      <div className='card__image'>
        <img src={img} alt={name}></img>
      </div>
      <footer className='card__footer'>
        <span className='card__price'>${price}</span>
        <button className='button'>ADD TO CART</button>
      </footer>
    </article>
  )
}

export default ShopCard
