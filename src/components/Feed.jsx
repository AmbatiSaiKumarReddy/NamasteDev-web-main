import axios from "axios"
import { useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { addFeed } from "../redux-store/store-slices/feedSlice";
import {BASE_URL} from '../utils/constants'
import UserCard from "./UserCard";


const Feed = () => {

  const dispatch=useDispatch();
  const feed=useSelector(store=>store.feed)

  useEffect(()=>{
    fetchFeed()
  },[])

  const fetchFeed=async()=>{
    const feed=await axios.get(BASE_URL+ "/user/feed",{withCredentials:true})
    //console.log(feed.data)
    dispatch(addFeed(feed.data))


  }

  if(feed.length<=0) return <h1>No Users near your location</h1>;

  return (
    <div>
      
      <UserCard user={feed[0]}></UserCard>
      {/* {feed.map((eachUser)=> <UserCard key={eachUser._id} user={eachUser}></UserCard>)} */}
    </div>
  )
}

export default Feed
