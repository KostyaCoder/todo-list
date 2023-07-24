import style from "./Task.module.scss";
import classNames from "classnames";
import deleteIcon from "../../common/image/delete24.png";
import doneIcon from "../../common/image/correct24.png";

export default function Task(props) {
  const {
    task: { taskText, id, isDone },
    handleClickExecute,
    handleClickCancle,
  } = props;

  const classNamesAdd = classNames(style.task, {
    [style.taskDone]: isDone,
  });

  return (
    <ul className={classNamesAdd}>
      <li className={style.text}>{taskText}</li>
      {!isDone && (
        <button className={style.btn} onClick={() => handleClickExecute(id)}>
          <img src={doneIcon} alt="done button" />
        </button>
      )}

      <button className={style.btn} onClick={() => handleClickCancle(id)}>
        <img src={deleteIcon} alt="delete button" />
      </button>
    </ul>
  );
}
