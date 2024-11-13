import React, { useState } from "react";
import { ITodo } from "../../../models/ITodo";
import FormTodo from "../../Form/FormTodo";
import s from "../TodoItem/TodoItem.module.css"

interface TodoItemProps{
    todo  : ITodo;
    remove : ((todo: ITodo) => void )
    update : ((todo: ITodo) => void)
}


const TodoItem : React.FC <TodoItemProps>  = ({todo, remove, update} ) =>{
    const [isEdit, setEdit] = useState(false)
     
    const handleUpdate = ( updateTodo : ITodo)  =>{
            update(updateTodo)
    }



    return(
        <div className={s.itemTodoWrapper}>
            <h1> {todo.title }</h1>
            <p>{todo.description} </p> 
            <p> deadline :   {todo.dataEnd}  </p>
            <button onClick={() => remove(todo)}>Delete</button>
            <button onClick={() => setEdit(!isEdit)}>Edit</button>
            {isEdit && <FormTodo initialValues={todo} onSubmit={(value) => handleUpdate(value)}/>}
        </div>

    )
}
export default TodoItem;