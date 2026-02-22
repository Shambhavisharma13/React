import React from 'react'
 const Lower =({subject})=>{
    console.log(subject)
    return (
        <div>
<div style={{border:"2px solid white"}}>
  <h1>Name:{subject.name}</h1>
  <h1>Age:{subject.age}</h1>
  <h1>City:{subject.city}</h1>
  <h1>Occupation:{subject.occupation}</h1>
</div>
        </div>
    )
 }
 export default Lower;