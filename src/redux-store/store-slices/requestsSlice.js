import { createSlice } from "@reduxjs/toolkit";

const requestsSlice =createSlice({
    name:'requests',
    initialState:[],
    reducers:{
        addRequests:(state,action)=>action.payload,
        removeRequests:(state,action)=>{
            return state.filter((each=> each.fromUserId._id!==action.payload))

        }
    }
})


export const {addRequests,removeRequests}=requestsSlice.actions
export default requestsSlice.reducer