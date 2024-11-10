import { useAppSelector } from "../hooks/redux";
import { ITodo } from "../models/ITodo";
import { TodoAPI } from "../Service/TodoService";

// interface IPost{
//     post: ITodo
// }

const EventContainer: React.FC  = () =>{
    // const {data  } = TodoAPI.useGetTodoIdQuery(1); 
    const {data , isLoading, error} = TodoAPI.useGetAllTodoQuery(100 )
    return(
        <div>
        {data && data.map(el => <div key={el.id}>
            {el.title} {el.description} {el.datas}
        </div>)}
        </div>
    )
}

export default EventContainer;