import {React, useState} from 'react'
import '../CreateTask/CreateTask.css'
import TaskCard from '../TaskCard/TaskCard'

function CreateTask(){
    let [taskName, setTaskName] = useState("")
    let [taskComment, setTaskComment] = useState("")
    let [taskArray, setTaskArray] = useState([])
    let taskArrayCopy = [...taskArray]

    //INPUT VALUES FROM TEXT FIELDS ARE UPDATED WITH FUNCTION AND EVENT.TARGET.
    function changeTaskName(event){
        setTaskName(event.target.value)
    }
    //INPUT VALUES FROM TEXT FIELDS ARE UPDATED WITH FUNCTION AND EVENT.TARGET.
    function changeTaskComment(event){
        setTaskComment(event.target.value)
    }

    //FUNCTION UPDATES EXISTING ARRAY WITH VALUES FROM TEXT FIELDS. UNIQUE INDEX NUBMERS CREATED WITH MATH.RANDOM AND ADDED TO ARRAY. 
    function addTaskToList(event){
        event.preventDefault()
        let taskIndex = Math.random()*1000
        setTaskArray(prevTaskArray => [...prevTaskArray, {taskName: taskName, taskComment: taskComment, index: taskIndex}])
        setTaskName("")
        setTaskComment("")
    }
    
    //DELETE FUNCTION CREATED AND PASSED DOWN TO CHILD COMPONENT AS PROP.
    function removeTask(index){
        taskArrayCopy.splice(index,1)
        setTaskArray(taskArrayCopy)
    }

    //COMPONENT RETURNS FORM WITH INPUT FOR CREATING A TASK. ALSO RETURNS NEW CHILD COMPONENT <TaskCard /> WITH CREATED ARRAY AND DELETE FUNCTION AS PROPS.
    return(
        <div>
            <TaskCard  taskArray={taskArrayCopy} handler={removeTask}/>
            <div>
                <form action="Add a new task" className="createTask__form">
                    <h3>Add a new task</h3>
                    <label>Name of task:      
                    <input type="text" placeholder="Name" value={taskName} onChange={changeTaskName}/></label>
                    <br></br>
                    <label>Additional comments:
                    <input type="text" placeholder="Comments" value={taskComment} onChange={changeTaskComment}/></label>
                    <br></br>
                    <input type="submit" value="Add task to list" onClick={addTaskToList}/>
                </form>
            </div>
        </div>
    )
}

export default CreateTask
