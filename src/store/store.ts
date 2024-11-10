import { TodoAPI } from './../Service/TodoService';
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import  postReducer  from "./reducers/PostSlice";

const rootReducer = combineReducers({
           postReducer,
           [TodoAPI.reducerPath] : TodoAPI.reducer
})

export const setupStore = () =>{
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware)   =>
        getDefaultMiddleware().concat(TodoAPI.middleware)
    })
    
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']



export default setupStore;