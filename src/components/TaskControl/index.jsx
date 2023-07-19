import { Field, ErrorMessage } from "formik";
import style from "./TaskControl.module.scss";

export default function TaskControl(props) {
  return (
    <div className={style.container}>
      <Field className={style.input} name="task" placeholder="Task" />
      <ErrorMessage name="task" />
      <button className={style.btn} type="submit">Add</button>
    </div>
  );
}
