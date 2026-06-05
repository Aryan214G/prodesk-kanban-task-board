import { useState } from "react";

function AddTaskForm() {

    const [taskText, setTaskText] = useState("");

    const [tasks, setTasks] = useState([]);

    function addTask() {

        if (taskText.trim() === "") {
            return;
        }

        setTasks([
            ...tasks,
            taskText
        ]);

        setTaskText("");
    }

    return (
        <div>

            <input
                type="text"
                placeholder="Enter task"
                value={taskText}
                onChange={(event) =>
                    setTaskText(event.target.value)
                }
            />

            <button onClick={addTask}>
                Add Task
            </button>

            {
                tasks.map(task => (
                    <p key={task}>
                        {task}
                    </p>
                ))
            }

        </div>
    );
}

export default AddTaskForm;