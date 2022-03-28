import React from 'react'
import PropTypes from 'prop-types'
import ShopItem from './ShopItem';

function ListView(props) {
  const { items } = props;

  return (
    <main className='container list'>
      {items.map((item, index) => {
        return <ShopItem item={item} key={index} />
      })}
    </main>
  )
}

ListView.propTypes = {
  items: PropTypes.array.isRequired
}

export default ListView
