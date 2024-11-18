import React, { useEffect, useRef, useState } from "react";
import { ITodo } from "../../../models/ITodo";
import FormTodo from "../../Form/FormTodo";
import s from "../TodoItem/TodoItem.module.css"
import { useDrag, useDrop } from "react-dnd";
import type { Identifier, XYCoord } from 'dnd-core'

interface TodoItemProps{
    todo  : ITodo;
    index: number;
    remove : ((todo: ITodo) => void )
    update : ((todo: ITodo) => void)

    moveCard : (dragIndex: number, hoverIndex: number) => void
}

interface DragTodo{
    index: number,
    id : string
    type : string
}


const TodoItem : React.FC <TodoItemProps>  = ({todo, remove, update, moveCard,  index} ) =>{
    const [isEdit, setEdit] = useState(false)
    const [isComplete , setComplete] = useState(todo.completed)

    let IsEnded: number   = (new Date()).getTime();
    const deadlineData: Date = new Date(Number(todo.dataEnd.slice(0,4)) , Number(todo.dataEnd.slice(5,7 ) ) -1, Number(todo.dataEnd.slice(8,10)) , Number(todo.dataEndHours.slice(0,2)) , Number(todo.dataEndHours.slice(3,5)) )


    const handleUpdate = ( updateTodo : ITodo)  =>{
      update(updateTodo)
    }


    const ref = useRef<HTMLDivElement>(null)
    const [{ handlerId }, drop] = useDrop<
      DragTodo,
      void,
      { handlerId: Identifier | null }
    >({
      accept: 'todo',
      collect(monitor) {
        return {
          handlerId: monitor.getHandlerId(),
        }
      },
      hover(item: DragTodo, monitor) {
        if (!ref.current) {
          return
        }
        const dragIndex = item.index
        const hoverIndex  = index
  
        // Don't replace items with themselves
        if (dragIndex === hoverIndex) {
          return
        }
  
        // Determine rectangle on screen
        const hoverBoundingRect = ref.current?.getBoundingClientRect()
  
        // Get vertical middle
        const hoverMiddleY =
          (hoverBoundingRect.right - hoverBoundingRect.left) / 2
  
        // Determine mouse position
        const clientOffset = monitor.getClientOffset()
  
        // Get pixels to the top
        const hoverClientY = (clientOffset as XYCoord).x - hoverBoundingRect.left
  
        // Only perform the move when the mouse has crossed half of the items height
        // When dragging downwards, only move when the cursor is below 50%
        // When dragging upwards, only move when the cursor is above 50%
  
        // Dragging downwards
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return
        }
  
        // Dragging upwards
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return
        }
  
        // Time to actually perform the action
        moveCard(dragIndex, hoverIndex)
  
        // Note: we're mutating the monitor item here!
        // Generally it's better to avoid mutations,
        // but it's good here for the sake of performance
        // to avoid expensive index searches.
        item.index = hoverIndex
      },
    })


    const [{ isDragging }, drag] = useDrag({
      type: 'todo',
      item: () => {
        return { id : todo.id, index }
      },
      collect: (monitor: any) => ({
        isDragging: monitor.isDragging(),
      }),
    })




drag(drop(ref))

    return(
  
        <div className={isDragging ? s.itemTodoWrapperDrag : s.itemTodoWrapper} ref={ref} data-handler-id={handlerId} >

            <h1> {todo.title }</h1>
            
            {IsEnded  > Number(deadlineData) && !isComplete ? <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv3SHc4p3E8ar7TPeYiIv0Pgy8fTqR-JR5PA&s" width="24px" height="24px" className={s.imgStatus}  />:  isComplete ? <img src="https://static-00.iconduck.com/assets.00/process-completed-symbolic-icon-2048x2048-baquwdk1.png" width="24px" height="24px" className={s.imgStatus} /> : <img src="https://static.thenounproject.com/png/2931158-200.png" width="24px" height="24px" className={s.imgStatus}  /> }
            <p>{todo.description} </p> 
            <p> deadline :   {deadlineData.getDay()}.{deadlineData.getMonth()}.{deadlineData.getFullYear()} {todo.dataEndHours}  </p>
            <div className={s.buttonsControl}>
            <button onClick={() => setEdit(!isEdit)}><img src="https://icons.veryicon.com/png/o/miscellaneous/linear-small-icon/edit-246.png" width="24px" height="24px" /></button>
            <button onClick={() => remove(todo)}><img src="https://cdn-icons-png.flaticon.com/512/860/860829.png"  width="24px" height="24px" /></button>
            
            </div>
            {isEdit && <FormTodo initialValues={todo} textSubmit="Edit" onSubmit={(value) => {handleUpdate(value); setEdit(!isEdit) ; setComplete(value.completed)}}/>}

            {/* year:{deadlineData.getFullYear()} month : {deadlineData.getMonth()} days : {deadlineData.getDate()} */}
            
        </div>
     
   
    )
}
export default TodoItem;