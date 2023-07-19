import * as yup from "yup";

export const TASK_SCHEMA = yup.object({
  task: yup
    .string()
    .required()
    .matches(/^\S/, "Cannot start with a space"),
});
