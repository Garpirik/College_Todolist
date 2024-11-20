import { ITodo } from "../../../models/ITodo"
import TodoItem from "../TodoItem/TodoItem"
import s from "./TodoCategory.module.css"
interface TodoCategoryProps{
    uniqueCategory : string
    todos : ITodo[]
    index: number
    remove : ((todo: ITodo) => void )
    update : ((todo: ITodo) => void)
    moveCard : (dragIndex: number, hoverIndex: number) => void
    
    
}

const TodoCategory:React.FC <TodoCategoryProps> = ({todos, uniqueCategory, remove, update, moveCard}) =>{
    return(
<div className={s.wrapper}>
<h1 className={s.titleCategory}>{uniqueCategory}</h1>
<div className={s.TodoCategoryWrapper}>
        {todos && todos.map((todo, i) => todo.type === uniqueCategory ? <TodoItem todo={todo} index={i} remove={remove} update={update} moveCard={moveCard} /> : "")}
</div>
</div>
    )
}

export default TodoCategory;