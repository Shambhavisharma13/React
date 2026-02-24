import axios from 'axios'
import React,{useEffect,useState} from 'react'

const Fifth1 =()=>{

    //where do we use useEffect()?
    //mostly in APi fetching.
     const[value,setValue]=useState(0)   


    let url="https://dummyjson.com/products"
     async function dataFetch(){
       let data=await axios.get(url);
       console.log(data);
    }
    //use Case1:
    // useEffect(()=>{
    //     dataFetch()
    // })

    //usecase2:
    useEffect(()=>{
        dataFetch()
    },[])
     return(
        <div>
     <button onClick={()=>{setValue(value+1)}}>+</button>
        </div>
    )
}
export default Fifth1