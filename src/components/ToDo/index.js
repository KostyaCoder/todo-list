import Task from "../Task";
import TaskControl from "../TaskControl";
import style from "./ToDo.module.scss";
import { useEffect, useState } from "react";

export default function ToDo() {
  const [listTasks, setListTasks] = useState([]);
  useEffect(() => {
    const listTasksStorage = JSON.parse(localStorage.getItem("listTasks"));
    if (listTasksStorage) {
      setListTasks(listTasksStorage);
    }
  }, []);

  function updateData(newListTasks) {
    setListTasks(newListTasks);
    localStorage.setItem("listTasks", JSON.stringify(newListTasks));
  }

  const handleClickAdd = function (values) {
    const lastId =
      listTasks.length > 0 ? listTasks[listTasks.length - 1].id : 1;

    const newListTasks = structuredClone(listTasks);
    newListTasks.push({
      id: lastId + 1,
      taskText: values.task,
      isDone: false,
    });

    updateData(newListTasks);
    values.task = "";
  };

  const handleClickExecute = function (id) {
    const newListTasks = listTasks.map((task) => {
      if (task.id !== id) {
        return task;
      }

      return { ...task, isDone: true };
    });

    updateData(newListTasks);
  };

  const handleClickCancle = function (id) {
    const newListTasks = listTasks.filter((task) => task.id !== id);
    updateData(newListTasks);
  };

  const listComponentTasks = listTasks.map((task) => (
    <Task
      key={task.id}
      task={task}
      handleClickExecute={handleClickExecute}
      handleClickCancle={handleClickCancle}
    />
  ));

  return (
    <div className={style.todo}>
      <TaskControl handleClickAdd={handleClickAdd} />
      {listComponentTasks}
    </div>
  );
}
