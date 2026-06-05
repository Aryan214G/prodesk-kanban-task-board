import AddTaskForm from "./components/AddTaskForm";
import { useState } from "react";
import Column from "./components/Column";
import "./App.css";

function App() {

    const [tasks, setTasks] = useState([]);
    const todoTasks = tasks.filter(
      task => task.status === "todo"
    );
    const inProgressTasks = tasks.filter( 
      task => task.status === "inprogress"
      );

    const doneTasks =
    tasks.filter(
        task => task.status === "done"
    );

    function moveTask(id, newStatus) {

      setTasks(
        tasks.map(task => 
          task.id === id
          ? {
            ...task,
            status: newStatus
          }
          : task
        )
      )
      
    }

    return (
        <div>

            <h1>Kanban Task Board</h1>

            <AddTaskForm 
              tasks={tasks}
              setTasks={setTasks}
            />

            <div className="board">


                        <Column 
                        title="To Do"
                        tasks={todoTasks}
                        moveTask={moveTask}
                        />

                        <Column
                        title="In Progress"
                        tasks = {inProgressTasks}
                        moveTask={moveTask}
                        />

                        <Column
                        title= "Done"
                        tasks={doneTasks}
                        moveTask={moveTask}
                        />
            </div>

        </div>
    );
}

export default App;