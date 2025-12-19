import React from 'react'
import { fetchCounter } from '../redux/fetchCounterValue';
import { fetchPost } from '../redux/fetchPost';
import { useEffect,useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export default function Home() {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchPost())
    },[])
    const data=useSelector((state)=>state.post.post);
  return (
    <div>
        {data && data.map((item)=>(
            <div onClick={()=>{navigate(`/detail/${item.id}`)}}>
                <h5>{item.title}</h5>
            </div>
        ))}
    </div>
  )
}
