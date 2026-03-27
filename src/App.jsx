
import { Suspense } from 'react'
import './App.css'
import Bottles from './Component/Bottles/Bottles'

const bottlePromise=fetch('https://raw.githubusercontent.com/ProgrammingHero1/awesome-water-bottles/refs/heads/main/public/bottles.json')
 .then(res=>res.json())

function App() {
  

  return (
    <>
    
    
          <h1>Buy awesome water bottle</h1>
          <Suspense fallback={<h3>bottle is lodaong...</h3>}>
            <Bottles bottlePromise={bottlePromise}>

            </Bottles>

          </Suspense>
        
    </>
  )
}

export default App
