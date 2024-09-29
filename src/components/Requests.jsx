import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { BASE_URL } from "../utils/constants"
import { addRequests } from "../redux-store/store-slices/requestsSlice"
import { useEffect } from "react"
import RequestCard from "./RequestCard"

const Requests = () => {

  const requests=useSelector((store)=>store.requests)
  console.log(requests)
  const dispatch=useDispatch()


  const fetchRequests=async()=>{
    const requests=await axios.get( BASE_URL+ "/user/request/recieved",{withCredentials:true})
   const data=requests.data
  
    dispatch(addRequests(data))
    
  }

  useEffect(()=>{
    fetchRequests()
  },[])


  return (
    <div>
      <h1>Requests</h1>
      {
        requests.length===0?(
          <div>
            No Pending Requests
          </div>
        ):(
          <div>

            {requests.map((requestUser)=> {return(<RequestCard key={requestUser._id} requestedUser={requestUser}></RequestCard>)})}

          </div>

        )
      }
     </div>
  )
}

export default Requests
