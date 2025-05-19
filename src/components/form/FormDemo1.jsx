
import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo1 = () => {
    const {register,handleSubmit} =useForm()
    //register : input field : register..
    //handlesubmit : submit --> data process : -- functions...
    const submitHandler = (data)=>{
        //data  ={}
        console.log(data)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>FORM DEMO 1</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type='text' {...register("firstName")}></input>
            </div>
            <div>
                <label>AGE</label>
                <input type='text' {...register("age")}></input>
            </div>
            <div>
                <label>GENDER</label><br></br>
                MALE <input type='radio' value="male" {...register("gender")}></input><br></br>
                FEMALE <input type='radio' value="female" {...register("gender")}></input>
            </div>
            <div>
                <label>HOBBIES</label><br></br>
                Cricket <input type='checkbox' value="cricket" {...register("hobbies")}></input>
                <br></br>
                Chess <input type='checkbox' value="chess" {...register("hobbies")}></input>
                <br></br>
                Reading <input type='checkbox' value="reading" {...register("hobbies")}></input>
                <br></br>
            </div>
            <div>
                <label>SELECT COUNTRY</label>
                <select {...register("country")}>
                    <option value="india">INDIA</option>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                </select>
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
