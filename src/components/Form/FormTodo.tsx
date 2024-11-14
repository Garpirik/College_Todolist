import { Field, Form, Formik } from "formik"
import { ITodo } from "../../models/ITodo"
import s from "../Form/FormTodo.module.css"
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

            <Form className={s.formWrapper}>
                <div><label htmlFor="title">Title</label></div>
                <Field id="title" name="title" placeholder="Title Todo"  required/>
                <div><label htmlFor="description">Description</label></div>
                <Field id="description" name="description" placeholder="description Todo" />
               <div><label htmlFor="checkbox">Is completed</label></div> 
               <Field type="checkbox" id="completed" name="completed" placeholder="Title Todo"  />
                <div><label htmlFor="date">Date</label></div>
                <Field type="date" id="createdAt" name="dataEnd" placeholder="Create at" required />
                <div><label htmlFor="time">Time</label></div>
                <Field type="time" id="createdAtHours" name="dataEndHours" placeholder="Create at"  />
            <div>
                <button type="submit">Submit</button></div>
            </Form>

        </Formik>

        )

}


export default FormTodo;
