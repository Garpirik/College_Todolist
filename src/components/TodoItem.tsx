import React, { useState } from "react";
import { ITodo } from "../models/ITodo";
import { TodoAPI } from "../Service/TodoService";

interface TodoItemProps{
    todo  : ITodo;
    remove : ((todo: ITodo) => void )
    update : ((todo: ITodo) => void)
}


const TodoItem : React.FC <TodoItemProps>  = ({todo, remove, update} ) =>{
    const [isEdit, setEdit] = useState(false;)
     
    const handleUpdate = ( updateTodo : ITodo)  =>{
            update(updateTodo)
    }



    return(
        <div>
            {todo.id} {todo.title } {todo.description}  deadline :  {todo.dataEnd} 
            <button onClick={() => remove(todo)}>Delete</button>
        </div>

    )
}
export default TodoItem;