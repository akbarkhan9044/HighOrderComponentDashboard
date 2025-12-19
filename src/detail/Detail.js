import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import { fetchSingleProduct } from '../redux/fetchSingleProduct';
import { addToCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
export default function Detail() {
    const dispatch=useDispatch();
    const naviagte=useNavigate();
    const {id}=useParams();
    useEffect(()=>{
        if(id){
            dispatch(fetchSingleProduct(id));

        }
    },[])
    const data=useSelector((state)=>state.product.singleProductt);
    const cartItem=useSelector((state)=>state.cart.cart);
    console.log(cartItem);
  return (
    <div>
      Detail Page-{id}
      <button onClick={()=>{
        dispatch({type:addToCart,payload:{...data,qty:1}})
      }}>Add to Cart</button>
      <button onClick={()=>{naviagte("/cart")}}>Cart Page</button>
    </div>
  )
}
