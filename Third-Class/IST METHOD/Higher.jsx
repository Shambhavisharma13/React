import React from 'react'
import Lower from './Lower';

const Higher=()=>{
    let data={
        name:"shambhavi",
        age:22,
        city:"jaipur",
        occupation:"student"
    }
    return(
        <div>
  <  Lower subject={data}/>
        </div>
    )
}
export default Higher;