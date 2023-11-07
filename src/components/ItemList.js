import React from 'react'
import {useDispatch} from 'react-redux'
import { CDN_URL } from '../utils/constants'
import { addItem } from "../utils/cartSlice";

function ItemList({card}) {
    const dispatch = useDispatch();
    const handleAddItem = () => {
        dispatch(addItem(card))
    }
    return (
    <div className='p-2 m-2 border-gray-300 border-b-2 text-left flex  justify-between'>
        <div className='w-9/12'>
            <div className=''>
                <span>{card.info.name}</span>
                <span> -₹{card.info.price/100 || card.info.defaultPrice/100}</span>
            </div>
            <p className='text-xs mt-4'>{card.info.description}</p>
        </div>
        <div className='w-2/12'>
            <div className='absolute'>
                <button className='p-1 rounded-lg bg-black text-white shadow-lg' 
                onClick = {()=>handleAddItem()}
                >Add +</button>
            </div>
            <img src={CDN_URL+card.info.imageId} className='h-20 w-25'/>
        </div>
    </div>
  )
}

export default ItemList