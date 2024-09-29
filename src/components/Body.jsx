import { Outlet, useNavigate } from "react-router-dom"
import Navbar from "./Navbar"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { addUser } from "../redux-store/store-slices/userSlice"


const Body = () => {

    const userData=useSelector(store=>store.user)
    const navigate=useNavigate();
    const dispatch=useDispatch()
    
    useEffect  (()=>{
        fetchUser()

    },[]) 
    
    const fetchUser=async()=>{
        try{

            if(!userData){
                const data=await axios.get(BASE_URL+"/profile",{withCredentials:true})
                dispatch(addUser(data.data))
            }   

        }
        catch(error){
            console.log(error)
            navigate("/login")
            
        }
       
    }



  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default Body
