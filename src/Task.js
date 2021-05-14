function Task(props) {
  // [a b c d e f] [a b c] + [e f]

  // taskList
  // setTaskList
  // need to be provided the index
  const removeTask = () => {
    // array splice
    const newArray = [...props.taskList.splice(0, props.index),
      ...props.taskList.splice(props.index + 1)];
    props.setTaskList(newArray);
  };

  return <div>
    <button onClick={removeTask}>Remove me!</button>
    {props.name}</div>;
}
export default Task;