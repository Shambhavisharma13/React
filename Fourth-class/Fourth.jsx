import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const Fourth = () => {

    const [formData, setFormData] = useState([])

    const {
        register,// it will handle the change of the input field and store the value in  the form state
        handleSubmit,
        watch,
        formState: { errors },
        reset
    } = useForm()

    function SubmitData(data) {
        setFormData([...formData, data])// it will add the new data to the existing form data
        reset()// it will reset the form after submit
    }

    console.log(formData)

    return (
        <div>
            {/*Form in react can be build with two ways
            1.using UseForm Hook
            2.Using satate and onChange event
             */}
            <form onSubmit={handleSubmit(SubmitData)}>
                <label>First Name:</label>
                <input type="text" 
                  {...register("firstname",{
                    required:true,
                    minLength:{value:5,message:"First name should be at least 5 characters"},
                    maxLength:{value:10,message:"Fist name should be at most 10 characters"}
                    })} />
                    {
                        errors.firstname &&  <p style={{color:"red"}}>{errors.firstname.message}</p>
                    }
                
                    <br />
                <label>Last Name:</label>
                <input type="text"
                 {...register("lastname",
                 {required:true})} />
                <br />

                <input type="submit" />
            </form>
        </div>
    )
}

export default Fourth