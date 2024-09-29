import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { addConnections } from "../redux-store/store-slices/connectionsSlice"
import { useEffect } from "react"
import { BASE_URL } from "../utils/constants"
import ConnectionCard from "./ConnectionCard"


const Connections = () => {
  const dispatch=useDispatch()
  

  const connections=useSelector((store)=>store.connections)
  console.log(connections)
 

  const fetchConnections=async()=>{
    try{
      const connections=await axios.get( BASE_URL+ "/user/connections",{withCredentials:true})
      const data=connections.data
     
       dispatch(addConnections(data))
       console.log(connections)

    }
    catch(error){
      console.log(error)
    }
   

  

 
  }
  
  useEffect(()=>{
    fetchConnections()
  },[])


 
  
  return (
    <div>
      <h1 className="font-bold text-center mt-4">Connections</h1>
      
      {
        connections.length===0? (
          <div>
            <span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
          </div>
        ):(
          <div>

            {connections.map((connection)=> {return(<ConnectionCard key={connection._id} connectedUser={connection}></ConnectionCard>)})}

          </div>

        )
      }
    </div>
  )
}

export default Connections
