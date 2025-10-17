import React, { useState } from 'react';
import './App.css';
import Task from './components/Task';

function App() {
  const [ taskState, setTaskState ] = useState({
    tasks: [
      { title: "Dishes", description: "Empty dishwasher", deadline: "Today" },
      { title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow" },
      { title: "Tidy up", description: "", deadline: "Today" }
    ]
  });

  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title={taskState.tasks[0].title} description={taskState.tasks[0].description} deadline={taskState.tasks[0].deadline} />
      <Task title={taskState.tasks[1].title} description={taskState.tasks[1].description} deadline={taskState.tasks[1].deadline} />
      <Task title={taskState.tasks[2].title} description={taskState.tasks[2].description} deadline={taskState.tasks[2].deadline} />
    </div>
  );
}

export default App;
