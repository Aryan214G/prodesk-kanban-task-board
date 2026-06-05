function Column({title, tasks}) {

    return(
        <div>

            <h2>{title}</h2>

            {
                tasks.map(task => (

                    <p key={task.id}>
                        {task.text}
                    </p>
                ))
            }
        </div>
    );
    
}


export default Column;