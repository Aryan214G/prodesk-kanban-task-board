import { useState } from "react";

function AddTaskForm({
    tasks,
    setTasks
}) {

    const [taskText, setTaskText] = useState("");

    function addTask() {

        if (taskText.trim() === "") {
            return;
        }

        setTasks([
            ...tasks,
            {
                id: Date.now(),
                text: taskText,
                status: "todo"
            }
        ]);

        setTaskText("");
    }

    return (
        <div className="task-form">

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


        </div>
    );
}

export default AddTaskForm;