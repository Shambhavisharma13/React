import React, { useEffect, useState } from 'react'

const Fifth =()=>{
    const[value,setValue]=useState(0)
    const[value1,setValue1]=useState(10)
    //useEffect Hook:it is used to handle any side effect on our browser.
   // useEffect(()=>{
     //   console.log("Re-render Invoked")
    //})

    //useEffect(()=>{
      //  console.log("useEffect")
    //},[])

    //use case3:
    //with dependency
  useEffect(()=>{
  console.log("useEffect")
  },[value1])
    return (
        <div>
            {value}<br/>
<button onClick={()=>{setValue(value+1)}}>+</button><br/>
     {value}<br />
     <button onClick={() => setValue1(value1 + 10)}>+10</button>
        </div>
    )
}
export default Fifth