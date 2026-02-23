import React,{useState} from 'react'

const Fourth1 = () =>{
    const[formData,setFormData]=useState({
       firstname:"",
        lastname:""
});

 const[alldata,setAllData]=useState([])
    function handleChange(e){
        const{name,value}=e.target;
setFormData({
    ...formData,
    [name]:value
});
    }


function handleSubmit(e){
    e.preventDefault();
    console.log(formData);
    setAllData([...alldata,formData])
}
       return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">First Name:</label>
                <input type="text" name='firstname'placeholder="Enter you first name" onChange={handleChange}/>     
                <br/>
                <label htmlFor="">Last Name:</label>
                <input type="text" name= 'lastname' placeholder="Enter your last name" onChange={handleChange}/>
                <br/>
                <input type="submit"/>
                       </form>

        </div>
    )
}
export default Fourth1