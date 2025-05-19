import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo2 = () => {

    const {register,handleSubmit,formState:{errors}} = useForm()
    const submitHandler = (data)=>{
        alert("form subbmited....")
        console.log("data",data)
    }
    console.log("errors",errors)

    const validaitonSchema = {
        ageValidator:{
            required:{
                value:true,
                message:"Age is Required"
            }
        }
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>FORM DEMO 2</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type='text' {...register("name",{required:{value:true,message:"Name is required*"}})}></input>
                {
                    errors.name && errors.name.message
                }
            </div>
            <div>
                <label>AGE</label>
                <input type='text' {...register("age",validaitonSchema.ageValidator)}></input>
                {
                    errors.age?.message
                }

            </div>
            <div>
                <input type='submit' value="submit"></input>
            </div>
        </form>
    </div>
  )
}
