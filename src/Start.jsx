import React, { useEffect , useRef } from "react";
import './App.css'
import { Link } from "react-router-dom";

function Start() {

    const inpRef = useRef(null);

    useEffect(() => {
      focus()
    }, [])
    
    let focus = () => {
        inpRef.current.focus();
    }
    return(
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
        <div className='fixed top-70  left-75 right-75 ' >
        <div className="text-amber-300 mb-10 text-3xl font-serif" >It's often hard to figure out why we are feeling a certain way and  it's not ideal to ignore these things but how do we get help? That's where Soln comes in. We will take a short quiz and based on that figure out what's wrong and what can help to fix it.</div>
       <input ref={inpRef} className="h-10 w-2sl m-2 p-2" type="text" placeholder="  Enter your name" />
       <Link to="/quiz"> <button className='h-15 w-2xs'>Take a quiz</button></Link>
        </div>
        </>
    )
}

export default Start