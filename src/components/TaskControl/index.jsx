import { Field, ErrorMessage } from "formik";
import style from "./TaskControl.module.scss";
import { TASK_SCHEMA } from "../../utils/validation/taskValidation";
import { Form, Formik } from "formik";

const initialValues = { task: "" };

export default function TaskControl(props) {
  const { handleClickAdd } = props;
  return (
    <Formik
      onSubmit={handleClickAdd}
      initialValues={initialValues}
      validationSchema={TASK_SCHEMA}
    >
      <Form>
        <div className={style.container}>
          <Field className={style.input} name="task" placeholder="Task" />
          <ErrorMessage name="task" />
          <button className={style.btn} type="submit">
            Add
          </button>
        </div>
      </Form>
    </Formik>
  );
}
