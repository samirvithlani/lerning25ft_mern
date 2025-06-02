import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, Bounce, toast } from "react-toastify";

export const ApiDemo3 = () => {
  const { register, handleSubmit } = useForm();

  const submitHandler = async (data) => {
    data.isActive = data.isActive == "true" ? true : false;
    const res = await axios.post("https://node5.onrender.com/user/user", data);
    if (res.status == 201) {
      //alert("user added...");
      toast.success('user added successfully !!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
    }
  };
  return (
    <div style={{ textAlign: "center" }}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>Name</label>
          <input type="text" {...register("name")}></input>
        </div>
        <div>
          <label>AGE</label>
          <input type="text" {...register("age")}></input>
        </div>
        <div>
          <label>Email</label>
          <input type="text" {...register("email")}></input>
        </div>
        <div>
          <label>PASSWORD</label>
          <input type="text" {...register("password")}></input>
        </div>
        <div>
          <label>Status</label>
          <br></br>
          ACTIVE :{" "}
          <input type="radio" {...register("isActive")} value="true"></input>
          <br></br>
          NOT ACTIVE :{" "}
          <input type="radio" {...register("isActive")} value="false"></input>
        </div>
        <div>
          <input type="submit"></input>
        </div>
      </form>
    </div>
  );
};
