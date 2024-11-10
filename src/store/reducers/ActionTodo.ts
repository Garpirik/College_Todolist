import { ITodo } from './../../models/ITodo';
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodo = createAsyncThunk('TodoAPI/fetchAll' , async(_,thunkAPI) =>{
    try{
        const response = await axios.get<ITodo>("http://localhost:3000/todos");
        return response.data
    }
    catch(e){
        return thunkAPI.rejectWithValue("Error todo load")
    }
})