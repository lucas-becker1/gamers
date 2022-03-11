import React,{useState} from 'react'
import ItemCount from './ItemCount'

const Item = ({card}) => {
const [show, setShow]=useState(false)

const verMas = () =>{
    console.log(show)
    setShow(!show)
}
const onAdd = () =>{
    console.log('Agregué al carrito')
}
  return (
    <div>
        <div>
            <p>{card}FIFA 21</p>
            {show && <p>Descripción del producto</p> }
            <button onClick={verMas}>{show ? 'Ver menos' : 'Ver mas'}</button>
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
        </div>

    </div>
  )
}

export default Item