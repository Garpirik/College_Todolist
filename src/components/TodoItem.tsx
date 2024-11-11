import { ITodo } from "../models/ITodo";
import { TodoAPI } from "../Service/TodoService";

interface TodoItemProps{
    props : ITodo;
    remove : ((todo: ITodo) => void )
    update : ((todo: ITodo) => void)
}


const TodoItem : React.FC <TodoItemProps>  = ({props, remove} ) =>{

    


    return(
        <div>
            {props.id} {props.title } {props.description} data create{props.data.createdAt}  deadline : {props.data.deadline}
            <button onClick={() => remove(props)}>Delete</button>
        </div>

    )
}
export default TodoItem;