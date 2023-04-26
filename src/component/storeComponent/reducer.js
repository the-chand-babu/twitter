
import { createSlice } from "@reduxjs/toolkit";




const userSlice= createSlice({
    name:"User",
    initialState:[],
    reducers:{
        addUser:(state,action)=>{
            state.push(action.payload);
            localStorage.setItem("userdata",JSON.stringify(state))

        },
    }
})

export default userSlice;