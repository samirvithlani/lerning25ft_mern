import { tr } from 'framer-motion/m'
import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo4 = () => {
    const {register,handleSubmit,formState:{errors}}= useForm({mode:'all',
        defaultValues:{name:"test",city:"ahmedabad"}})
    const sumitHandler = (data)=>{
        console.log(data)
    }
    const validationSchema = {
        nameValidator:{
            required:{
                value:true,
                message:"name is required"
            },
            minLength:{
                value:3,
                message:"min length required is 3"
            },
            maxLength:{
                value:10,
                message:"max length required is 10"
            }
        }
    }
  return (
    <div style={{textAlign:"center"}}>
            <form onSubmit={handleSubmit(sumitHandler)}>
                <div>
                    <label>NAME</label>
                    <input type='text' {...register("name",validationSchema.nameValidator)}></input>
                    <span style={{color:"red"}}>{errors.name?.message}</span>
                </div>
                <div>
                    <label>city</label>
                    <input type='text' {...register("city")}></input>
                </div>
                <div>
                    <input type='submit'></input>
                </div>
            </form>
    </div>
  )
}
