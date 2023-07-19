import style from "./Task.module.scss";
import classNames from "classnames";
// import deleteIcon from "../../common/image/deleteBlack24.png";

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
      <p className={style.text}>{`${taskText} ${isDone}`}</p>
      {!isDone && (
        <button
          className={style.btn}
          onClick={() => handleClickExecute(taskId)}
        >
          V
        </button>
      )}

      <button className={style.btn} onClick={() => handleClickCancle(taskId)}>
        X
      </button>
    </div>
  );
}
