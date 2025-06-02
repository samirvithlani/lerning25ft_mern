import axios from 'axios'
import { text } from 'framer-motion/client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const Login = () => {

    const{register,handleSubmit}=useForm()
    const navigate = useNavigate()

    const submitHandler = async(data)=>{
        try{
        const res = await axios.post("https://node5.onrender.com/user/login",data)
        console.log(res)
        if(res.status ==200){
            console.log(res.data.data._id)
            localStorage.setItem("id",res.data.data._id)
            navigate("/")
        }
        //success
        }catch(err){
            console.log("error...",err.response.data?.message)
            toast.error(err.response.data?.message)
        }
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>EMAIL</label>
                <input type='text' {...register('email')}></input>
            </div>
            <div>
                <label>PASSWORD</label>
                <input type='text' {...register("password")}></input>
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
