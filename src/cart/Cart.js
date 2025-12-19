import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import  {increment,decrement} from "../redux/cartSlice";
export default function Cart() {
    const carItem=useSelector((state)=>state.cart.cart);
    const dispatch=useDispatch();
    const totalAmount=carItem.reduce((acc,curr)=>{
        acc=acc+curr.qty*curr.price;
        return acc;
    },0);
  return (
    <div>
        <h1>{totalAmount}</h1>
      <table>
        <thead>
    <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Qty</th>
    </tr>
        </thead>
        <tbody>
            {carItem && carItem.map((item)=>(
            <tr>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>
                    <button onClick={()=>{
                        dispatch({type:increment,payload:item})
                    }}>Inc</button>
                    {item.qty}</td>
                    <button onClick={()=>{
                        dispatch({type:decrement,payload:item})
                    }}>Desc</button>
            </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
