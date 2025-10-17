function Task({ title, description, deadline, priority, done, markDone }) {
  return (
    <div className="card" style={{ backgroundColor: done ? 'lightgrey' : '#5bb4c4' }}>
      <p className="title">{title}</p>
      <p>Due: {deadline}</p>
      {description && <p><em>{description}</em></p>}
      {priority && <p className="priority">{priority}</p>}
      <button onClick={markDone} className="doneButton">Done</button>
    </div>
  );
}

export default Task;
