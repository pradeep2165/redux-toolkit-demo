import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ordered, restocked } from './cakeSlice';

export const CakeView = () =>{
    const numOfCakes = useAppSelector((state) => state.cake.numOfCakes);
    const dispatch = useAppDispatch();
    const [count, setCount] = useState(1);
  return (
    <div>
      <h2>Number of Cakes - {numOfCakes}</h2>
      <button onClick={()=>dispatch(ordered())}>Order Cake</button>
      <input type="number" value={count} onChange={(e)=>setCount(e.target.value)} />
      <button onClick={()=>dispatch(restocked(parseInt(count)))}>Restock Cakes</button>
    </div>
  )
}
