import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../../app/hooks';

import { fetchUsers } from './userSlice'

export default function UserView() {
  const user = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  useEffect(()=>{
    dispatch(fetchUsers())
  },[])
  return (
    <div>
            <h2>List of Users</h2>
        {user.loading && <div>Loading....</div>}
        {!user.loading && user.error ? <div>Eroor: {user.error}</div>: null }
        {!user.loading && user.users.length ? (
          <ul>
            {
              user.users.map((user)=>(<li key={user.id}>{user.name}</li>))
          }
          </ul>
        ): null};
    </div>
  )
}
