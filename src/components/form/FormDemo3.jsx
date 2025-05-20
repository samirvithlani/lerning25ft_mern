import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo3 = () => {
    //required min max minLength maxLength validate pattern
    
    
    const{register,handleSubmit,formState:{errors}}=useForm()
    const submitHandler = (data)=>{

        console.log(data)
    }
    const validationSchema = {
        contactValidator:{
            required:{
                value:true,
                message:"Contact no is Required *"
            },
            pattern:{
                value:/[6-9]{1}[0-9]{9}/,
                message:"invalid contact no"
            }
        },
        refcodeValidator:{
            required:{
                value:true,
                message:"ref code is required*"
            },
            validate:(value)=>{
                console.log(value)
                return (value =="royal" || value=="java") || "invalid ref code"
            }
        },
        cityValidator:{
            required:{
                value:true,
                message:"city is required*"
            },
            validate:(value)=>{
                return value?.length>=2 || "min 2 city selecection is required *"
            }
        }
    }


  return (
    <div style={{textAlign:"center"}}>
        <h1>FORM DMEO 3</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>CONTACT NO</label>
                <input type='text' {...register("contactno",validationSchema.contactValidator)}></input>
                {
                    errors.contactno?.message
                }
            </div>
            <div>
                <label>ref code</label>
                <input type='text' {...register("refcode",validationSchema.refcodeValidator)}></input>
                {
                    errors.refcode?.message
                }
            </div>
            <div>
                <label>CHECKBOX</label><br></br>
                mumbai : <input type='checkbox' {...register("city",validationSchema.cityValidator)} value="mumbai"></input><br></br>
                pune : <input type='checkbox' {...register("city",validationSchema.cityValidator)} value="pune"></input><br></br>
                ahmedabd : <input type='checkbox' {...register("city",validationSchema.cityValidator)} value="ahmedabad"></input><br></br>
                chennai : <input type='checkbox' {...register("city",validationSchema.cityValidator)} value="chennai"></input><br></br>
                {
                    errors.city?.message
                }
            </div>
            <div>
                <input type='submit'></input>
            </div>

        </form>
    </div>
  )
}
