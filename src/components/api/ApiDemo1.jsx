import axios from "axios";
import React, { useEffect, useState } from "react";
import { Loader } from "../Loader";
import { toast, ToastContainer, Bounce } from "react-toastify";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ApiDemo1 = () => {
  //axios
  const [message, setmessage] = useState("");
  const [users, setusers] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [show, setshow] = useState(false)
  const [singleUser, setsingleUser] = useState({})

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    setisLoading(true);
    const res = await axios.get("https://node5.onrender.com/user/user");
    //res --> axios object..
    console.log("axios object..", res);
    console.log("api response", res.data);
    console.log(res.data.message);
    console.log(res.data.data);
    setmessage(res.data.message);
    setusers(res.data.data);
    setisLoading(false);
  };

  const handleClose = ()=>{
    setshow(false)
  }
  const getUserDetail = async(id)=>{
    
    const res = await axios.get(`https://node5.onrender.com/user/user/${id}`)
    console.log("res..",res.data)
    setsingleUser(res.data.data)
    setshow(true)
    
  }

  const deleteUser = async (id) => {
    //delete api call....
    //const res = await axios.delete("https://node5.onrender.com/user/user/"+id)
    const res = await axios.delete(
      `https://node5.onrender.com/user/user/${id}`
    );
    console.log(res);
    if (res.status == 204) {
      toast.success("record deleted...");
      getUserData();
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
      <h1>API DEMO 1</h1>
      {isLoading && <Loader />}
      {/* <button onClick={()=>{getUserData()}}>GET</button> */}
      {message}
      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>EMAIL</th>
            <th>STATUS</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td>{user.isActive ? "Active" : "NOt Active"}</td>
                <td>
                  <button
                    onClick={() => {
                      deleteUser(user._id);
                    }}
                    className="btn btn-danger"
                  >
                    DELETE
                  </button>
                  <button onClick={()=>{getUserDetail(user._id)}} className="btn btn-info">DETAIL</button>
                  <Link to={`/updateuser/${user._id}`} className="btn btn-warning">UPDATE</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h1>User detail</h1>
            <h1>Name = {singleUser.name}</h1>
            <h2>Age = {singleUser.age}</h2>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
