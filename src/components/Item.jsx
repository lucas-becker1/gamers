import React,{useState} from 'react'
import ItemCount from './ItemCount'

const Item = ({producto}) => {
const [show, setShow]=useState(false)

const verMas = () =>{
    console.log(show)
    setShow(!show)
}
const onAdd = () =>{
    console.log('agregué al carrito')
}
  return (
      <div className="card" style={{width:' 18rem'}}>
          <div className="card-body">
          {show && <h4 className="card-text">{producto.name}</h4>}
              {show && <p className="card-text">{producto.description}</p>}
              {show && <p className="card-text">{producto.price}</p>}
                <button onClick={verMas}>{show ? 'Ver menos' : 'Ver mas'}</button>
                <ItemCount stock={10} initial={1} onAdd={onAdd}/>
          </div>
      </div>
  )
}

export default Item