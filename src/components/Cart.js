import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList'
import { clearCart } from '../utils/cartSlice'

function Cart() {
  const cartItems = useSelector((store)=>store.cart.items)
  const dispatch = useDispatch()

  return (
    <div className='text-center m-4 p-4'>
      <h1 className='text-2xl font-bold'>Cart</h1>
      
      {
        cartItems.length > 0 ?
        <div className='w-6/12 m-auto border-separate'>
        <button className='p-2 m-2 bg-black text-white rounded-md' onClick={()=>dispatch(clearCart())}>Clear Cart</button>
        {
          cartItems.map((item, index)=> item? <ItemList key={index} card={item}/>: null)
        }
        </div> : <h1 className='text-xl font-bold text-red-500'>Your cart is empty!! Please add some items</h1>
      }
      
    </div>
  )
}

export default Cart