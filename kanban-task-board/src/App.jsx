import AddTaskForm from "./components/AddTaskForm";
import { useState } from "react";
import Column from "./components/Column";

function App() {

    const [tasks, setTasks] = useState([]);
    const todoTasks = tasks.filter(
      task => task.status === "todo"
    );

    return (
        <div>

            <h1>Kanban Task Board</h1>

            <AddTaskForm 
              tasks={tasks}
              setTasks={setTasks}
            />

            <Column
            title="To Do"
            tasks={todoTasks}
            />

        </div>
    );
}

export default App;