function Task(props) {
  return (
    <div className="card" style={{ backgroundColor: props.done ? 'lightgrey' : '#5bb4c4' }}>
      <p className="title">{props.title}</p>
      {props.description && <p><em>{props.description}</em></p>}
      <p>Due: {props.deadline}</p>
      {props.priority && <p className="priority">{props.priority}</p>}
      <button onClick={props.markDone} className="doneButton">Done</button>
      <button className="deleteButton" onClick={props.deleteTask}>Delete</button>
    </div>
  );
}

export default Task;
