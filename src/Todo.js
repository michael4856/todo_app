import { useState } from "react"
import './todo.css'
export default function Todo(){
    const [taskList, setTaskList] = useState(["Goto church", "Eat breakfast", "music class"])
    const [task, setTask] = useState()
    return <div>
        <h1>Welcome to this page!</h1>
        <h2>Todo list App</h2>

        <div className="todo-list-app">
        <p>List your tasks here</p>

        <div className="input-div">
            <input className="input" type="text" value={task} placeholder="what's your next plan.." />
            <button>Add</button>
        </div>

        <div>
            {taskList.map((i, index) => 
                <ul className="list-style" key={index}>
                   <span className="list"> {i} </span>
                   <button>Edit</button>
                   <button>Delete</button>
                </ul>
           )}
        </div>
        </div>
    </div>
}