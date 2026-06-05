1) How to get started with React?

2) is this correct:
function AddTaskForm() {
    
    return (
        <input type="text"></input>
    );
}

3) My page is blank after after adding my component to App.jsx. Check this:

```function App() {



    return (

      <div>



          <h1>Kanban Task Board</h1>

          <AddTaskForm />



        </div>

    );

}



export default App;```

4) Currently I have an AddTaskForm component with:

const [task, setTask] = useState("");

I want to add a task when the Add Task button is clicked

5) Tasks are being added now when I click the buttton. Now, how do I build a kanban task board?