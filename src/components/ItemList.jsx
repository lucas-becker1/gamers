import React,{useEffect, useState} from 'react'
import Item from './Item'

const ItemList = ({card}) => {
  const [listaProductos, setListaProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const productos = [
    {id:'01', name:'FIFA 22', description:"juego de futbol", price:'$8500'},
    {id:'02', name:'NBA 2K22', description:"juego de basquet", price:'$8000'},
    {id:'03', name:'Elden Ring', description:"juego de rol y accion rpg", price:'$4500'},
    {id:'04', name:'Forza Horizon 5', description:"juego de conduccion de autos", price:'$4000'},
  ]

  const getProducts = new Promise((resolve, reject) =>{
    let condition= true
     if(condition){
       setTimeout(()=>{
         resolve(productos)
       },2000)
     }else{
       reject('Error')
     }
  })

  useEffect(()=>{
    getProducts
    .then((respuesta) => setListaProductos(respuesta) )
    .catch((error) => console.log(error))
    .finally(()=> setLoading(false))
  },[])


console.log('respuesta', listaProductos)
 return (
   <div>
       <h2>Lista de juegos</h2>
       {loading ? <p>Cargando...</p> : listaProductos.map((producto) => <Item card={card} producto={producto} key={producto.id}/>)}
   </div>
 )
}

export default ItemList