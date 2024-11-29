import { Field, Form, Formik } from "formik"
import { ITodo } from "../../models/ITodo"
import s from "../Form/FormTodo.module.css"
interface ValuesForm{
    type: string,    
    title : string,
        description : string,
        completed : boolean
        dataEnd: string
        dataEndHours : string
    }
    

interface FormProps{
    initialValues : ValuesForm 
    onSubmit :(todo: ITodo) => void;
    textSubmit : string
}



const FormTodo  = ({initialValues, onSubmit, textSubmit} : FormProps) =>{
        return(
    <Formik initialValues={initialValues} onSubmit={onSubmit} validate={(values) =>{
        const errors = {}
        let IsNow: number   = (new Date()).getTime();
        let deadlineDate : Date = new Date(values.dataEnd)
        if(Number(deadlineDate) < IsNow){
                errors.dataEnd = "Please enter the day next/now day"

        }
        console.log(deadlineDate)
        return errors;
    }}>
        {({touched , errors})  =>(
            <Form className={s.formWrapper}>
                <label>Type Todo</label>
                <Field id="type" name="type" placeholder="Type Todo" required/>
                <div><label htmlFor="title">Title</label></div>
                <Field id="title" name="title" placeholder="Title Todo"  required/>
                <div><label htmlFor="description">Description</label></div>
                <Field id="description" name="description" placeholder="description Todo" />
         <div>   <label htmlFor="checkbox">Is completed: </label> 
               <Field type="checkbox" id="completed" name="completed" placeholder="Title Todo"  /></div>
                <div><label htmlFor="date">Date </label>
                {errors.dataEnd && touched.dataEnd &&  errors.dataEnd}
                    </div>
                <Field type="date" id="createdAt" name="dataEnd" placeholder="Create at" required />
                <div><label htmlFor="time">Time</label></div>
                <Field type="time" id="createdAtHours" name="dataEndHours" placeholder="Create at"  />
            <div>
                <button type="submit">{textSubmit}</button></div>
            </Form>
        )}
        </Formik>

        )

}


export default FormTodo;
