import React from 'react'
import { useSelector } from 'react-redux'

export default function IceCreamView() {
  const numOfIceCream = useSelector(state=>state.icecream.numOfIceCreams)
  return (
    <div>
            <h2>Number of Icecream - {numOfIceCream}</h2>
      <button>Order Icecream</button>
      <button>Restock Icecreams</button>
    </div>
  )
}


