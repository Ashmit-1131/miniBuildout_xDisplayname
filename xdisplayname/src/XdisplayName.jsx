import React, { useState } from 'react'

const XdisplayName = () => {
    const [first,setFirst]=useState("")
    const [last,setLast]=useState("")
    const [submitted,setSubmitted]=useState(false)

    const handleSubmit=(e)=>{
        e.preventDefault();
        setSubmitted(true);
    }
  return (
    <div>
        <h1>Full Name Display</h1>
        <form onSubmit={handleSubmit}>
            <label>First Name:
                <input type="text" value={first} onChange={(e)=>setFirst(e.target.value)} required/>
            </label>
            <br/>
            
            <label >Last Name:
                <input type="text" value={last} onChange={(e)=>setLast(e.target.value)} required/>
            </label>
            <br/>
            
            <button type='submit'>Submit</button>
        </form>

        {submitted &&(<p>Full Name: {first} {last}</p> ) 
        }
      
    </div>
  )
}

export default XdisplayName