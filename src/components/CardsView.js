import React from 'react'
import PropTypes from 'prop-types'
import ShopCard from './ShopCard';

function CardsView(props) {
  const { cards } = props;
  return (
    <main className='container'>
      {cards.map((card, index) => {
        return <ShopCard card={card} key={index} />
      })}
    </main>
  )
}

CardsView.propTypes = {
  cards: PropTypes.array.isRequired
}

export default CardsView
