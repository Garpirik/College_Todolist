import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITodo } from "../models/ITodo";

export const TodoAPI = createApi({
    reducerPath: "TodoAPI",
    baseQuery : fetchBaseQuery({baseUrl : "http://localhost:3000/"}),
    tagTypes : ["Todos"],
    endpoints:( builder) =>({
        getAllTodo : builder.query<ITodo[], number>({query: (limit: number = 5) => ({ url: '/todos',params:{ _limit : limit} }) , providesTags: ['Todos']}),
        createTodo: builder.mutation<ITodo, ITodo>({query:(todo: ITodo ) =>({url: '/todos', method: "POST", body: todo}), invalidatesTags: ['Todos']}),

        
        getTodoId : builder.query<ITodo,number>({query: ( id: number) =>({
            url: `/todos/${id}`
        })
        , providesTags: ['Todos']
        }),


    }),
    
})

