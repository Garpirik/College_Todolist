import { ITodo } from "../models/ITodo";

interface TodoItemProps{
    props : ITodo
}


const TodoItem : React.FC <TodoItemProps>  = ({props} ) =>{
    return(
        <div>
            {props.id} {props.title } {props.description} {props.data.createdAt} {props.data.deadline}
        </div>

    )
}
export default TodoItem;