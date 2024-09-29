

import {  createBrowserRouter, RouterProvider} from 'react-router-dom'
import { createRoot } from 'react-dom/client'

import './index.css'
import Login from "./components/Login"
import Profile from "./components/Profile"
import Connections from "./components/Connections"
import Requests from "./components/Requests"
import Feed from "./components/Feed"
import { Provider } from "react-redux"
import appStore from "./redux-store/store"
import Body from "./components/Body"

const root=createRoot(document.getElementById('root'))


const  AppLayout=()=> {
  return (
    <>
      <Provider store={appStore}>
        <Body/>
      </Provider>
   
    </>
       
  )
}

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Feed/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      
      {
        path:"/profile",
        element:<Profile/>
      },
      {
        path:"/connections",
        element:<Connections/>
      },
      {
        path:"/requests",
        element:<Requests/>
      }

    ]

  }
  
])


root.render(<RouterProvider router={appRouter}/>)

export default AppLayout
