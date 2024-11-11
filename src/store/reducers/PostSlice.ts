import { fetchTodo } from './ActionTodo';
import { ITodo } from './../../models/ITodo';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface PostState{
    todo: ITodo[];
    isLoading: boolean;
    error: string;
}


const initialState: PostState ={
    todo : [],
    isLoading: true,
    error: "",
}

export const postSlice = createSlice({ 
    name: 'post', 
    initialState,
reducers :{
    test :(state) =>{
        state.error = "false"
    }
}, 
extraReducers: builder =>{
    builder.addCase(fetchTodo.fulfilled.type,(state, action: PayloadAction<ITodo[]>) =>{
     state.isLoading = false;
     state.error = "";
     state.todo = action.payload;
    }),
    builder.addCase(fetchTodo.pending.type,(state) =>{
        state.isLoading = true;

    }),
    builder.addCase(fetchTodo.rejected.type,(state, action: PayloadAction<string>)=>{
        state.isLoading = true;
        state.error = action.payload
    })
}
})

export default postSlice.reducer