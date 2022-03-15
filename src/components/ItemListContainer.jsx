import React from 'react'
import ItemList from './ItemList'

const ItemListContainer = ({titulo, card}) => {
  return (
    <div>
        <h1>{titulo}</h1>
        <ItemList card={card}/>
    </div>
  )
}

export default ItemListContainer