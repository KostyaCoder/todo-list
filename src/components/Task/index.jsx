import style from "./Task.module.scss";
import classNames from "classnames";
import deleteIcon from "../../common/image/delete24.png";
import doneIcon from "../../common/image/correct24.png";

export default function Task(props) {
  const {
    task: { taskText, id: taskId, isDone },
    handleClickExecute,
    handleClickCancle,
  } = props;

  const classNamesAdd = classNames(style.task, {
    [style.taskDone]: isDone,
  });

  return (
    <div className={classNamesAdd}>
      <p className={style.text}>{taskText}</p>
      {!isDone && (
        <button
          className={style.btn}
          onClick={() => handleClickExecute(taskId)}
        >
          <img src={doneIcon} alt="done button" />
        </button>
      )}

      <button className={style.btn} onClick={() => handleClickCancle(taskId)}>
        <img src={deleteIcon} alt="delete button" />
      </button>
    </div>
  );
}
