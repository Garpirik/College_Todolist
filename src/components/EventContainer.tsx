
import { ITodo } from "../models/ITodo";
import { TodoAPI } from "../Service/TodoService";

// interface IPost{
//     post: ITodo
// }

const EventContainer: React.FC  = () =>{
    // const {data  } = TodoAPI.useGetTodoIdQuery(1); 
    const {data , isLoading, error} = TodoAPI.useGetAllTodoQuery(100 )
   const [createPost, {}] = TodoAPI.useCreateTodoMutation();
   


   const createButtonPost = async  ()  =>{
    const title = prompt();
        await createPost ({title: "Ff", description: "Hello", completed: true , data: {createdAt : "fdfdfdfd" , deadline :"sdfsdfsdf"}} as unknown as ITodo)
   } 
   
   return(
        <div>
        {isLoading && <div>Loading...</div>}
        {error && <div> error </div>}
        {data && data.map(el => 
        <div key={el.id}>
            {el.title} {el.description} {el.data.createdAt.toString()}
        </div>)}
        <button onClick={() => createButtonPost()}>Create POST</button>
        </div>
    )
}

export default EventContainer;