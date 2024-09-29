import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './store-slices/userSlice'
import ConnectionsReducer from './store-slices/connectionsSlice'
import RequestsReducer from './store-slices/requestsSlice'
import FeedReducer from './store-slices/feedSlice'

const appStore=configureStore({
    reducer:{
        user:UserReducer,
        connections:ConnectionsReducer,
        requests:RequestsReducer,
        feed:FeedReducer
    }
})

export default appStore;