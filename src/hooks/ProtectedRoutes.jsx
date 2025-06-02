// use start -->
// builtin thirdparty

import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Login } from "../components/Login";


const useAuth = () => {
  const [authState, setauthState] = useState({ isLoggedin: false, role: "" });
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const id = localStorage.getItem("id");
    //const role = localStorage.getItem("role")
    if (id) {
      setauthState({ isLoggedin: true, role: "" });
    }
    setloading(false);
  }, []);

  return { ...authState, loading };
};

const ProtectedRoutes = ()=>{

    const auth = useAuth() //{authSTate,loading...}
    if(auth.loading){
        return <h1>Loading.....</h1>
    }

    return auth.isLoggedin ? <Outlet></Outlet> : <Login/>
}
export default ProtectedRoutes;
