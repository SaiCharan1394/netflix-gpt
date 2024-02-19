import { createSlice } from "@reduxjs/toolkit"

const userSlice= createSlice({
    name:"user",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action,payload);
        },
        removeItem:(state)=>{
            state.items.pop();
        },
        clearItem:(state)=>{
            state.items.length=0;
        }
    }
})
export const{addItem,}= userSlice.actions;

export default userSlice.reducer;