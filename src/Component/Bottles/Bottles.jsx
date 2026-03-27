import React, { use, useEffect, useState } from 'react'
import Bottle from '../Bottle/Bottle';
import './Bottles.css';
import { addToStorecard, getStoreCard } from '../../utlities/localstorage';
import Card from '../card/card';


function Bottles({bottlePromise}) {
  const [card,setCard]=useState([])

  const handelAddCard=(bottle)=>{
    // console.log('addd to bottle',bottle)
    const newcard=[...card,bottle]
    setCard(newcard)

    addToStorecard(bottle.id)
    
  }

 

    const bottles=use(bottlePromise);

     useEffect(()=>{
    const storeCardId= getStoreCard()
    const storeCard=[]

    for( const id of storeCardId){
      // console.log(id)
      const cardBottle=bottles.find(bottle => bottle.id === id)
      if(cardBottle){
        storeCard.push(cardBottle)
      }
    }
    console.log('stored card',storeCard)
    setCard(storeCard)
    // console.log(storeCardId,bottles)
  },[bottles])

    // console.log(bottles)
  return (
    <div >
      <h3>Bottles:{bottles.length}</h3>
      <p>Added to card:{card.length}</p>
      <Card card={card} ></Card>

     <div className='bottles-container'>
       {
        bottles.map(bottle=> <Bottle bottle={bottle} handelAddCard={handelAddCard}></Bottle>)
       }
     </div>

    </div>
  )
}

export default Bottles