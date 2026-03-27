import React from 'react'
import './Bottle.css'

function Bottle({bottle,handelAddCard}) {
    // console.log(bottle)
    const {img,name,price,stock}=bottle;
  return (
    <div className='card bottle'>
        <img src={img} alt="" />
        <h3>{name}</h3>
        <p>${price}</p>
        <p>{stock} reaming</p>
        <button onClick={()=>handelAddCard(bottle)}>Buy Now</button>
    </div>
  )
}

export default Bottle