import { useEffect, useState } from "react"
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux-store/store-slices/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [email,setEmail]=useState("gautam@gmail.com");
  const [password,setPassword]=useState("Gautam@123");
  const dispatch=useDispatch();
  const userData=useSelector(store=>store.user)
  const navigate=useNavigate();

  useEffect(()=>{
    if(userData){
      navigate("/")
    }
  },[])


  const loginHandler=async()=>{

    const {data,message}=await axios.post("http://localhost:7777/login",{
      emailId:email,
      password:password
    },{
      withCredentials:true
    })
    dispatch(addUser(data.data))
    navigate("/")
    console.log(message,data);

    

    

  }

  if(userData) {
    navigate("/")
  }
  return (
    

    <div className="card bg-base-300 w-96 shadow-xl mx-auto mt-6">
       <div className="card-body">
         <h2 className="card-title m-auto">Login</h2>
         <label className="font-bold">Email</label>
         <input className="rounded p-1 mb-6"  type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
         <label className="font-bold">Password</label>
         <input className="rounded p-1" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
         
         <div className="card-actions justify-center">
      <button className="btn btn-primary mt-4 font-extrabold" onClick={loginHandler}>Login</button>
    </div>
  </div>
</div>
  )
}

export default Login
