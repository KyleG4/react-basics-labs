function Task({ title, description, deadline, priority }) {
  return (
    <div className="task-card">
      <h2>{title}</h2>
      {description && <p><em>{description}</em></p>}
      <p>Due: {deadline}</p>
      <p>Priority: {priority}</p>
    </div>
  );
}

export default Task;
