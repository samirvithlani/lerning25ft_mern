import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form'

export const FormDemo5 = () => {

    const {register,handleSubmit,control} = useForm({
        defaultValues:{medicin:[{"name":"",dosage:0,frequency:0}]}
    })

    const {fields,append,remove} = useFieldArray({
        control,
        name:"medicin"
    })
    const submitHandler = (data)=>{
        console.log(data)
    }
  return (
    <div>
        <h1>FORM DEMO 5</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            {
                fields.map((filed,index)=>{
                    return <div>
                        <label>NAME</label>
                        <input type='text' {...register(`medicin.${index}.name`)}></input>
                        <label>DOSAGE</label>
                        <input type='text' {...register(`medicin.${index}.dosage`)}></input>
                        <label>FREQUECNY</label>
                        <input type='text' {...register(`medicin.${index}.frequency`)}></input>
                    </div>
                })
            }
            <input type='submit' value="submit"></input>

        </form>
        <button onClick={()=>{append([{"name":"",dosage:0,frequency:0}])}}>ADD</button>
    </div>
  )
}
