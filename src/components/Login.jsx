import { useEffect, useState } from "react"
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux-store/store-slices/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";


const Login = () => {

  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [email,setEmail]=useState("gautam@gmail.com");
  const [password,setPassword]=useState("Gautam@123");
  const [isLoginForm,setIsLoginForm]=useState(true)
  const dispatch=useDispatch();
  const userData=useSelector(store=>store.user)
  const navigate=useNavigate();

  useEffect(()=>{
    if(userData){
      navigate("/")
    }
  },[userData,navigate])


  const loginHandler=async()=>{

    const {data,message}=await axios.post(BASE_URL+"/login",{
      emailId:email,
      password:password
    },{
      withCredentials:true
    })
    dispatch(addUser(data.data))
    navigate("/")
    console.log(message,data);

    

    

  }

  const signUpHandler=async()=>{
    await axios.post(BASE_URL+"/signup",{
      firstName:firstName,
      lastName:lastName,
      emailId:email,
      password:password
    },{
      withCredentials:true
    })

    setIsLoginForm(true)

  }

 
  
  return (
    

    <div className="card bg-base-300 w-96 shadow-xl mx-auto mt-6">
       <div className="card-body">
         <h2 className="card-title m-auto">{isLoginForm ? "Login" : "Sign Up"}</h2>
      
          {!isLoginForm && <> <label className="font-bold">FirstName</label>
            <input className="rounded p-1 mb-6"  type="email" value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
            <label className="font-bold">LastName</label>
            <input className="rounded p-1 mb-6"  type="email" value={lastName} onChange={(e)=>setLastName(e.target.value)} />
          
   </>}
        
        
         <label className="font-bold">Email</label>
         <input className="rounded p-1 mb-6"  type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
         <label className="font-bold">Password</label>
         <input className="rounded p-1" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
         
         <div className="card-actions justify-center">
          {isLoginForm?
                <button className="btn btn-primary mt-4 font-extrabold" onClick={loginHandler}>Login</button>:
                <button className="btn btn-primary mt-4 font-extrabold" onClick={signUpHandler}>Signup</button>

              }

          
    </div>
    <p className="text-center mt-3 cursor-pointer" onClick={()=>{setIsLoginForm(!isLoginForm)}}>{isLoginForm? "New User? Signup": "Existing User? Log in!"}</p>
  </div>
  
</div>
  )
}

export default Login
