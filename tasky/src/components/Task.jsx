function Task({ title, description, deadline, priority }) {
  return (
    <div className="card">
      <p className="title">{title}</p>
      <p>Due: {deadline}</p>
      {description && <p><em>{description}</em></p>}
      <p className="priority">{priority}</p>
    </div>
  );
}

export default Task;
