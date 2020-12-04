import {React, useState} from 'react'
import '../CreateTask/CreateTask.css'
import TaskCard from '../TaskCard/TaskCard'

function CreateTask(){
    let [taskName, setTaskName] = useState()
    let [taskComment, setTaskComment] = useState()
    let [taskArray, setTaskArray] = useState([])
    let taskArrayCopy = [...taskArray]
    let [urgencyClass, setUrgencyClass] = useState()
    let [urgency, setUrgency] = useState()

    function changeTaskName(event){
        setTaskName(event.target.value)
    }
    function changeTaskComment(event){
        setTaskComment(event.target.value)
    }

    function addUrgency(event){
        if(event.target.checked === true && event.target.value === "NonUrgent"){
           setUrgencyClass("nonUrgentStyle")
           setUrgency("Not urgent")
        } if(event.target.checked === true && event.target.value === "Urgent"){
            setUrgencyClass("urgentStyle")
            setUrgency("Urgent!")
        }
    }

    function addTaskToList(event){
        event.preventDefault()
        setTaskArray(prevTaskArray => [...prevTaskArray, {taskName: taskName, taskComment: taskComment, urgency: urgency, urgencyClass: urgencyClass}])
        setTaskName()
        setTaskComment()
    }

    function removeTask(index){
        taskArrayCopy.splice(index,1)
        setTaskArray(taskArrayCopy)
        console.log(taskArrayCopy)
    }

    return(
        <div>
            <input type="submit" value="+" className="showTaskInputBtn"/>
            <form action="Add a new task" className="createTask__form">
                <h3>Add a new task</h3>
                <input type="text" placeholder="Name of task"value={taskName} onChange={changeTaskName}/><br></br>
                <input type="text" placeholder="Additional comments" value={taskComment} onChange={changeTaskComment}/><br></br>
                <input type="radio" name="urgency" value="NonUrgent" onClick={addUrgency}/>
                <label htmlFor="NonUrgent">Not urgent</label>
                <input type="radio" name="urgency" value="Urgent" onClick={addUrgency}/>
                <label htmlFor="Urgent">Urgent!</label><br></br>
                <input type="submit" value="Add task to list" onClick={addTaskToList}/>
            </form>
            <TaskCard taskArray={taskArrayCopy} handler={removeTask}/>
        </div>
    )
}

export default CreateTask