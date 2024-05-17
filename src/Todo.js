import { useState } from "react"
import './todo.css'
export default function Todo(){
    const [taskList, setTaskList] = useState(["Goto church", "Eat breakfast", "music class"])
    const [task, setTask] = useState()

    function onChangeHandler(e){
        setTask(e.target.value)
    }
    function addHandler(){
        const trimmed = task.replace(/\s+/g, '')
        if(trimmed !== ""){
        setTaskList(t=> [...t, task] )
        }
        setTask("")
    }
    function Delete(index){
        const updated = taskList.filter((_, i) => i !== index)
        setTaskList(updated)
    }
    return <div>
        <h1>Welcome to this page!</h1>
        <h2>Todo list App</h2>

        <div className="todo-list-app">
        <p>List your tasks here</p>

        <div className="input-div">
            <input className="input" type="text" value={task} onChange={onChangeHandler} placeholder="what's your next plan.." />
            <button onClick={addHandler}>Add</button>
        </div>

        <div>
            {taskList.map((i, index) => 
                <ul className="list-style" key={index}>
                   <span className="list"> {i} </span>
                   <button>Edit</button>
                   <button value={task} onClick={Delete}>Delete</button>
                </ul>
           )}
        </div>
        </div>
    </div>
}