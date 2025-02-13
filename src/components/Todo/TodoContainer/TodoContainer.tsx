import { ITodo } from "../../../models/ITodo";
import { TodoAPI } from "../../../Service/TodoService";
import FormTodo from "../../Form/FormTodo";
import TodoItem from "../TodoItem/TodoItem";

import s from "../TodoContainer/TodoContainer.module.css"
import { isValidElement, useCallback, useEffect, useState } from "react";
import update from 'immutability-helper'
import TodoCategory from "../TodoCategory/TodoCategory";


interface ValuesForm{
    type: string;
    title : string,
    description : string,
    completed : boolean
    dataEnd: string
    dataEndHours : string
  
}




const TodoContainer: React.FC  = () =>{
    // const {data  } = TodoAPI.useGetTodoIdQuery(1); 
    const {data , isLoading, error, refetch } = TodoAPI.useGetAllTodoQuery(100, {pollingInterval : 5000} )
    const [deleteTodo, {}] = TodoAPI.useDeleteTodoMutation();
   const [createTodo, {}] = TodoAPI.useCreateTodoMutation();
   const [updateTodo , {}] = TodoAPI.useUpdateTodoMutation();
   const [todos , setTodos] = useState<ITodo[]>(data || []) 
   const initialValues : ValuesForm = { type : '', title : '', description :'', completed : false, dataEnd : "", dataEndHours : ""}
   const typesTodo    = new Set<string>([])
   let uniqueTypes : string[] = [];

    for(let i : number = 0; i < todos.length ;i++){
        typesTodo.add(todos[i].type)
    }

    for(let type of typesTodo){
        uniqueTypes.push(type)
    }


  useEffect(() =>{
    if(data){
    setTodos(data)}

    
  }, [data])
   
    const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
        setTodos((todos) =>
            update(todos,{
                $splice:[
                    [dragIndex ,1] ,
                    [hoverIndex , 0 , todos[dragIndex] ]
                ]
            
        })
    );
    },
      [todos])
    


   const createTodoButton = async  (todo : ITodo)  =>{
        await createTodo({title: todo.title, type: todo.type ,description: todo.description, completed: todo.completed ,dataEnd: todo.dataEnd , dataEndHours : todo.dataEndHours } as unknown as ITodo)
   } 

   const handleRemove = async ( todo: ITodo) =>{
        deleteTodo(todo)
   }

    const handleUpdate = async(todo:ITodo) =>{
    updateTodo(todo);
   }

   
   return(
        <div className={s.wrapper}>
        {isLoading && <div>Loading...</div>}
        {error && <div> error </div>}

    <div className={s.wrapperTodo}>
     {uniqueTypes && uniqueTypes.map((type, i) => <TodoCategory  todos={todos} uniqueCategory={type} index={i} remove={handleRemove} update={handleUpdate} moveCard={moveCard}  /> )}
         {/* {todos && todos.map((el, i) =>  <TodoItem key={el.id} todo={el} remove={handleRemove} update={handleUpdate}  moveCard = {moveCard} index={i}/>    
        
    )}  */}

    </div>
    <div className={s.formCreate}>
    <FormTodo initialValues={initialValues} textSubmit="Add" onSubmit={(value) => {createTodoButton(value)}} />
    </div>
        {/* <button onClick={() => createTodoButton()}>Create POST</button> */}
        </div>
    )
}

export default TodoContainer;