
import { createSlice } from "@reduxjs/toolkit";




const  userSlice= createSlice({
    name:"User",
    initialState:JSON.parse(localStorage.getItem("userdata"))||[],
    reducers:{
        addUser:(state,action)=>{
            state.push(action.payload);
            localStorage.setItem("userdata",JSON.stringify(state))

        },
    }
})


const  TweetSlice=createSlice({
    name:"Tweets",
    initialState:[],
    reducers:{
        AddAllTweet:(state,action)=>{
          
            state.push(...action.payload);
        }
    }
})


export {userSlice,TweetSlice}
 