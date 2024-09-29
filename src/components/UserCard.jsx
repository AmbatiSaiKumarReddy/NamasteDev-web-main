import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useDispatch } from "react-redux"
import { removeUserFromFeed } from "../redux-store/store-slices/feedSlice"


const UserCard = ({user}) => {
    //console.log(user)
    
    const {firstName,lastName,age,gender,skills,about,photoUrl,_id}=user
    const dispatch=useDispatch()

    const requestStatus=async(status)=>{

        await axios.post(BASE_URL+"/request/send/"+status+"/"+_id,{},{withCredentials:true})
        dispatch(removeUserFromFeed(_id))


    }
    


  return (
    <div className="card bg-base-100 w-96 shadow-xl mx-auto">
        <figure className="px-10 pt-10">
            <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
            alt="Shoes"
            className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">{firstName} {lastName}</h2>
            <p>{age} {gender}</p>
            <div className="card-actions">
            <button className="btn btn-primary" onClick={()=>requestStatus("interested")}>Interested</button>
            <button className="btn btn-primary" onClick={()=>requestStatus("ignored")}>Ignore</button>
            </div>
        </div>
    </div>
  )
}

export default UserCard
