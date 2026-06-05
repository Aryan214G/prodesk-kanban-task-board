import AddTaskForm from "./components/AddTaskForm";
import { useState } from "react";

function App() {

    const [tasks, setTasks] = useState([]);

    return (
        <div>

            <h1>Kanban Task Board</h1>

            <AddTaskForm 
              tasks={tasks}
              setTasks={setTasks}
            />

        </div>
    );
}

export default App;