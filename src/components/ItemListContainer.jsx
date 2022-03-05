import React from 'react'

const ItemListContainer = ({title, card}) => {
  return (
    <div>
        <h1>{title}</h1>
        <h2>{card}</h2>
    </div>
  )
}

export default ItemListContainer