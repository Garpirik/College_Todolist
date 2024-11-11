
import { Form, Formik, Field } from "formik";
import { ITodo } from "../models/ITodo";
import { TodoAPI } from "../Service/TodoService";
import TodoItem from "./TodoItem";

// interface IPost{
//     post: ITodo
// }

interface ValuesForm{
    title : string,
    description : string,
    completed : boolean
    data: {createdAt : string, deadline : string}
    dataHours : {createdAtHours : string, deadlineHours: string}
}




const TodoContainer: React.FC  = () =>{
    // const {data  } = TodoAPI.useGetTodoIdQuery(1); 
    const {data , isLoading, error} = TodoAPI.useGetAllTodoQuery(100 )
    const [deleteTodo, {}] = TodoAPI.useDeleteTodoMutation();
   const [createTodo, {}] = TodoAPI.useCreateTodoMutation();
   const [updateTodo , {}] = TodoAPI.useUpdateTodoMutation();
   


   const initialValues : ValuesForm = {title : '', description :'', completed : false, data:{createdAt :"" , deadline : ""}, dataHours: {createdAtHours : "", deadlineHours :""}}


   const createTodoButton = async  (todo : ValuesForm)  =>{

        await createTodo({title: todo.title, description: todo.description, completed: todo.completed , data: {createdAt : `${todo.data.createdAt}  `+ todo.dataHours.createdAtHours , deadline : `${todo.data.createdAt} ` +todo.dataHours.deadlineHours}} as unknown as ITodo)
   } 

   const handleRemove = async ( todo: ITodo) =>{
        deleteTodo(todo)
   }

const handleUpdate = async(todo:ITodo) =>{
    updateTodo(todo);
    
}

   
   return(
        <div>
        {isLoading && <div>Loading...</div>}
        {error && <div> error </div>}
        
        <Formik initialValues={initialValues} onSubmit={(value) => {createTodoButton(value)}}>

            <Form>
                <label htmlFor="title"></label>
                <Field id="title" name="title" placeholder="Title Todo" />
                <label htmlFor="title"></label>
                <Field id="description" name="description" placeholder="description Todo" />
                <label htmlFor="title"></label>
                <Field type="checkbox" id="completed" name="completed" placeholder="Title Todo"  />
                <label htmlFor="title"></label>
                <Field type="date" id="createdAt" name="data.createdAt" placeholder="Create at"  />
                <Field type="time" id="createdAtHours" name="dataHours.createdAtHours" placeholder="Create at"  />
                <Field type="date" id="deadline" name="data.deadline" placeholder="Finish to time"  />
                <Field type="time" id="createdAtHours" name="dataHours.deadlineHours" placeholder="Finish to time"  />
                <button type="submit">Submit</button>
            </Form>

        </Formik>

        
        {data && data.map(el => 
        <TodoItem key={el.id} props={el} remove={handleRemove} update={handleUpdate} />    
    )}
        {/* <button onClick={() => createTodoButton()}>Create POST</button> */}
        </div>
    )
}

export default TodoContainer;