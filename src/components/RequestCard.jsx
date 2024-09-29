import { useDispatch } from "react-redux"
import { removeRequests } from "../redux-store/store-slices/requestsSlice";
import { BASE_URL } from "../utils/constants";
import axios from "axios";


const RequestCard = (props) => {

    const dispatch=useDispatch();
    const {requestedUser}=props;
    const {fromUserId}=requestedUser;

    const {firstName,lastName,skills,about}=fromUserId
    console.log(firstName)

    const removeRequestInStore=async(status)=>{
        if(status==="accepted"){
            const accepted=await axios.post(BASE_URL+"/request/review/accepted/"+fromUserId._id,{},{withCredentials:true})
        }
        else if(status==="rejected"){
            const rejected=await axios.post(BASE_URL+"/request/review/accepted/"+fromUserId._id,{},{withCredentials:true})
        }
        
        dispatch(removeRequests(fromUserId._id))

    }

  return (
    <div className="card card-side bg-base-300 w-1/2 mx-auto shadow-xl mt-5">
    <figure>
      <img
        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
        alt="Movie" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{firstName} {lastName}</h2>
      <p>{about}</p>
        <button className="btn btn-active btn-primary" onClick={()=>removeRequestInStore("accepted")}>Accept</button>
        <button className="btn btn-active btn-secondary" onClick={()=>removeRequestInStore("rejected")}>Reject</button>
    </div>
  </div>
  )
}

export default RequestCard
