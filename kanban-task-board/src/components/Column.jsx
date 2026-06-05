function Column({title, tasks, moveTask}) {

    return(
        <div className="column">

            <h2>{title}</h2>

            {
                tasks.map(task => (

                    <div
                    key={task.id}
                    className="task-card"
                    >
                        <p>{task.text}</p>

                        <button
                        onClick={() =>
                            moveTask(
                                task.id,
                                "inprogress"
                            )
                        }>
                            Move Right

                        </button>

                    </div>
                ))
            }
        </div>
    );
    
}


export default Column;