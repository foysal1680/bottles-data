const getCardFromLocalStorage=()=>{
    const storagestring=localStorage.getItem('card')

    if(storagestring){
        const stordcard=JSON.parse(storagestring)
        return stordcard
    }
    return []
}

const saveCardTolocalStorage=card=>{
    const cardStringify=JSON.stringify(card)
    localStorage.setItem('card',cardStringify)
}


const addItemLocalStorage=id =>{
    const card= getCardFromLocalStorage()
    const newcard=[...card,id]
    saveCardTolocalStorage(newcard)
}

export{
    
    getCardFromLocalStorage as getStoreCard,
    addItemLocalStorage as addToStorecard
}