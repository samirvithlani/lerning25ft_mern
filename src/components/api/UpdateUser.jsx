import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

export const UpdateUser = () => {
  //get by id api
  const id = useParams().id;
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm({
    defaultValues: async () => {
      const res = await axios.get("https://node5.onrender.com/user/user/" + id);
      return res.data.data;
    },
  });
  const submitHandler = async (data) => {
    console.log(data);
    delete data._id;
    try {
      const res = await axios.put(
        "https://node5.onrender.com/user/user/" + id,
        data
      );
      console.log(res);
      if (res.status == 200) {
        //tost
        navigate("/apidemo1");
      }
    } catch (err) {
      console.log(err);
      alert("error while updating data");
    }
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>UPDATE USER</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>NAME</label>
          <input type="text" {...register("name")}></input>
        </div>
        <div>
          <label>AGE</label>
          <input type="text" {...register("age")}></input>
        </div>
        <div>
          <input type="submit"></input>
        </div>
      </form>
    </div>
  );
};
