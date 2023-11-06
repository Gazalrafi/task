import React, { useEffect, useState } from 'react';


const App = () => {

  const[add,setAdd]=useState(0);

  const updateState=()=>{

    setAdd(add+1)
                               //or
  
    // instead of using useEffect we can also do it using setState callback function

    //  setAdd((addition)=>{
    //       return  addition+1
    //  })
   
  }

   useEffect(()=>{
    console.log("component is mounted")
   },[add])


  return (
   <>
   <div style={{textAlign:"center",margin:"10rem"}}>

   <h1 style={{fontSize:"80px"}}>{add}</h1>
 
   <button 
   style={{
    padding:"20px 60px",
    borderStyle:"none",
    background:"pink",
    fontSize:"40px",
    borderRadius:"10px"
  }}
   onClick={updateState}>Add</button>
 
   </div>
   </>
  )
}

export default App