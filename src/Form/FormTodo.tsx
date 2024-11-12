import { Field, Form, Formik } from "formik"
import { ITodo } from "../models/ITodo"

interface ValuesForm{
        title : string,
        description : string,
        completed : boolean
        dataEnd: string
        dataEndHours : string
    }
    

interface FormProps{
    initialValues : ValuesForm 
    onSubmit :(todo: ITodo) => void;
}



const FormTodo  = ({initialValues, onSubmit} : FormProps) =>{
        return(
    <Formik initialValues={initialValues} onSubmit={onSubmit}>

            <Form>
                <label htmlFor="title"></label>
                <Field id="title" name="title" placeholder="Title Todo" />
                <label htmlFor="title"></label>
                <Field id="description" name="description" placeholder="description Todo" />
                <label htmlFor="title"></label>
                <Field type="checkbox" id="completed" name="completed" placeholder="Title Todo"  />
                <label htmlFor="title"></label>
                <Field type="date" id="createdAt" name="dataEnd" placeholder="Create at"  />
                <Field type="time" id="createdAtHours" name="dataEndHours" placeholder="Create at"  />
  
                <button type="submit">Submit</button>
            </Form>

        </Formik>

        )

}


export default FormTodo;
