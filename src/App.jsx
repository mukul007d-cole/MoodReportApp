import { useState } from 'react'
import Start from './Start'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="background">
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
</div>
<div className='fixed top-70  left-95 right-95 '>
<div className='text-emerald-300 font-bold text-4xl mb-10'>Feeling Drained? We're here to help</div>
      <Link to="/start"><button  className='h-15 w-2xs'>Get Started</button></Link>
      </div>
    </>
  )
}

export default App
