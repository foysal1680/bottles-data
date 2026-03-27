import React from 'react'

function Card({card}) {
  return (
    <div>
        
       {
        card.map(bottle => <div> 
            <img src={bottle.img} alt="" />
        </div>)
       }
      
    </div>
  )
}

export default Card