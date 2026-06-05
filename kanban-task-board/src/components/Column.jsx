function Column({
    title,
    tasks,
    moveTask,
    deleteTask
}) {

    return (
        <div className="column">

            <h2>{title}</h2>

            {
                tasks.map(task => (

                    <div
                        key={task.id}
                        className="task-card"
                    >

                        <p>{task.text}</p>

                        <div className="task-actions">

                            {title === "To Do" && (

                                <button
                                    onClick={() =>
                                        moveTask(
                                            task.id,
                                            "inprogress"
                                        )
                                    }
                                >
                                    Move Right
                                </button>

                            )}

                            {title === "In Progress" && (

                                <>
                                    <button
                                        onClick={() =>
                                            moveTask(
                                                task.id,
                                                "todo"
                                            )
                                        }
                                    >
                                        Move Left
                                    </button>

                                    <button
                                        onClick={() =>
                                            moveTask(
                                                task.id,
                                                "done"
                                            )
                                        }
                                    >
                                        Move Right
                                    </button>
                                </>

                            )}

                            {title === "Done" && (

                                <button
                                    onClick={() =>
                                        moveTask(
                                            task.id,
                                            "inprogress"
                                        )
                                    }
                                >
                                    Move Left
                                </button>

                            )}

                            <button
                                onClick={() =>
                                    deleteTask(task.id)
                                }
                            >
                                Delete
                            </button>

                        </div>

                    </div>

                ))
            }

        </div>
    );
}

export default Column;