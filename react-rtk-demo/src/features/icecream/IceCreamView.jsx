import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './iceCreamSlice'
export default function IceCreamView() {
  const numOfIceCream = useSelector(state=>state.icecream.numOfIceCreams)
  const dispatch = useDispatch()
  const [count, setCount] = useState(1);
  return (
    <div>
            <h2>Number of Icecream - {numOfIceCream}</h2>
      <button onClick={()=>dispatch(ordered())}>Order Icecream</button>
      <input type="number" value={count} onChange={(e)=>setCount(e.target.value)}/>
      <button onClick={() => dispatch(restocked(parseInt(count)))}>Restock Icecreams</button>
    </div>
  )
}


