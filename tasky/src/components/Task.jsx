function Task({ title, description, deadline }) {
  return (
    <div className="card">
      <p className="title">{title}</p>
      {description && <p className="description"><em>{description}</em></p>}
      <p>Due: {deadline}</p>
    </div>
  );
}

export default Task;
