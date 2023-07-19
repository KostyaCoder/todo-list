export default function Task(props) {
  const {
    task: { taskText, id: taskId, isDone },
    handleClickExecute,
    handleClickCancle,
  } = props;

  return (
    <div>
      <p>{`${taskText} ${isDone} ${taskId}`}</p>
      {!isDone && (
        <button onClick={() => handleClickExecute(taskId)}>Execute</button>
      )}
      <button onClick={() => handleClickCancle(taskId)}>Cancle</button>
    </div>
  );
}
