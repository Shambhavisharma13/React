import { useState } from "react"
import './second.css';

  export default function Second(){
     const [state,setState]=useState(0);
  console.log(state);
  function updateState(){
    setState(state+1);
  } 
  function updateState1(){
    setState(state-1);
  }
  //set state()-it is function use to update the state.
  // const[status,setStatus]=useState(false);
  // console.log(state)
  const[themeStatus,setThemeStatus]=useState(false);
   return(
<>
{/*<h1>second component</h1>
<h2>{state}</h2>*/}
{/*<button onClick={updateState1} >-</button>*/}
{/*<button onClick={updateState}>+</button>*/}


{/*{status && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi provident sunt dolor magnam in reiciendis.
   Assumenda, vel quaerat? Ratione a nam commodi autem aut aliquid quia suscipit repellat quibusdam!</p>}
   <button onClick={()=>{setStatus(!status)}}>{status?'Hide':'show'}Details</button>*/}
   <div style={{border:"2px solid white",padding:"20px",margin:"20px"}}
    className={themeStatus?'Light':'dark'}>
    <h1>This is second component</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Perferendis sapiente ducimus magnam, officiis provident illo eveniet dicta perspiciatis delectus adipisci harum porro ex.
       Veritatis vitae reprehenderit explicabo voluptas ut saepe quos non debitis dolores, architecto eos beatae! Alias hic minima tenetur, 
       enim ipsa molestiae ut porro sed, neque temporibus impedit numquam aperiam iste consequuntur illo cum iusto assumenda quos officiis?
        Totam est quo ut facere veritatis optio culpa, voluptatum provident sequi, pariatur explicabo consequatur consectetur numquam adipisci aliquam.
         Tenetur eligendi quidem et labore corrupti quae harum nulla soluta doloribus, dolores ducimus deserunt hic sed deleniti nobis nihil adipisci 
         repellat distinctio!</p>
         <button  className={themeStatus?'dark':'light'}onClick={()=>{setThemeStatus(!themeStatus)}}>{themeStatus?'Dark Mode':'Light Mode'}</button>
   </div>
</>
    )
}