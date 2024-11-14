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
    const [isComplete , setComplete] = useState(todo.completed)
    let IsEnded: number   = (new Date()).getTime();
    const deadlineData: Date = new Date(Number(todo.dataEnd.slice(0,4)) , Number(todo.dataEnd.slice(5,7 ) ) -1, Number(todo.dataEnd.slice(8,10)) )

    const handleUpdate = ( updateTodo : ITodo)  =>{
            update(updateTodo)
    }

console.log("Time deadline",deadlineData);
console.log("IsEnded",IsEnded)

    return(
        <div className={s.itemTodoWrapper}>
            <h1> {todo.title }</h1>
            <p>{todo.description} </p> 
            <p> deadline :   {todo.dataEnd}  </p>
            <input type="checkbox" checked={isComplete}  onClick={() => setComplete(!isComplete)}/>
            <div className={s.buttonsControl}>
            <button onClick={() => setEdit(!isEdit)}><img src="https://icons.veryicon.com/png/o/miscellaneous/linear-small-icon/edit-246.png" width="24px" height="24px" /></button>
            <button onClick={() => remove(todo)}><img src="https://cdn-icons-png.flaticon.com/512/860/860829.png"  width="24px" height="24px" /></button>
            
            </div>
            {isEdit && <FormTodo initialValues={todo} onSubmit={(value) => {handleUpdate(value); setEdit(!isEdit)}}/>}
        
            {/* year:{deadlineData.getFullYear()} month : {deadlineData.getMonth()} days : {deadlineData.getDate()} */}
             {IsEnded  > Number(deadlineData) && !isComplete ? <div>End task</div> : " "}
        </div>
   
    )
}
export default TodoItem;