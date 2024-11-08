
 interface ITodo{
    id: number,
    title : string,
    description : string,
    completed : boolean,
    datas: IDatas
}
interface IDatas{
    createdAt: string,
    deadline : string,
}



export default ITodo;