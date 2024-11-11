
 export interface ITodo{
    id: number,
    title : string,
    description : string,
    completed : boolean,
    data: IDatas
}
interface IDatas{
    createdAt: string,
    deadline : string,
}



