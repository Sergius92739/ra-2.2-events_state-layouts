import React from 'react'

function ShopItem(props) {
  const {name, color, img, price} = props.item;

  return (
    <article className="card">
      <div className="card__image">
        <img src={img} alt={name}></img>
      </div>
      <h3 className="card__title">{name}</h3>
      <div className="card__description">{color}</div>
      <div className="card__price">${price}</div>
      <div className='card__button'>
        <button className="button">ADD TO CART</button>
      </div>
    </article>
  )
}

export default ShopItem
