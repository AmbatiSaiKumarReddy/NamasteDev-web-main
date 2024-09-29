import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { BASE_URL } from "../utils/constants"
import { removeUser } from "../redux-store/store-slices/userSlice"


const Navbar = () => {

  const userData=useSelector(store=>store.user)
  const dispatch=useDispatch();
  const navigate=useNavigate()

  const logoutHandler=async()=>{
    await axios.post(BASE_URL+"/logout",{},{withCredentials:true})
    dispatch(removeUser())
    navigate("/login")
  }

  return (
    <div className="navbar bg-base-300">
    <div className="flex-1">
      <Link to="/" className="btn btn-ghost text-xl">DevMatch</Link>
    </div>
    {userData &&
    <div className="flex-none gap-2">

    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li><Link to="/profile">Profile</Link></li>
        <li>
          <Link to='/connections' className="justify-between">
            Connections
          </Link>
        </li>
        <li><Link to="/requests">Requests</Link></li>
        <li><Link  onClick={logoutHandler}>Logout</Link></li>
      </ul>
    </div>
  </div>}
    
  </div>
  )
}

export default Navbar
