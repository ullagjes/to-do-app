import {React, useState, useEffect} from 'react'
import '../CreateTask/CreateTask.css'
import TaskCard from '../TaskCard/TaskCard'

function CreateTask(){
    let [taskName, setTaskName] = useState("")
    let [taskComment, setTaskComment] = useState("")
    let [taskArray, setTaskArray] = useState([])
    let taskArrayCopy = [...taskArray]
    
    function changeTaskName(event){
        setTaskName(event.target.value)
    }

    function changeTaskComment(event){
        setTaskComment(event.target.value)
    }

    function addTaskToList(event){
        event.preventDefault()
        let taskIndex = Math.random()*1000
        setTaskArray(prevTaskArray => [...prevTaskArray, {taskName: taskName, taskComment: taskComment, index: taskIndex}])
        setTaskName("")
        setTaskComment("")
    }
    
    function removeTask(index){
        taskArrayCopy.splice(index,1)
        setTaskArray(taskArrayCopy)
    }

    return(
        <div>
            <TaskCard  taskArray={taskArrayCopy} handler={removeTask}/>
            
            <div>
                <form action="Add a new task" className="createTask__form">
                    <h3>Add a new task</h3>              
                    <input type="text" placeholder="Name of task"value={taskName} onChange={changeTaskName}/>
                    <br></br>
                    <input type="text" placeholder="Additional comments" value={taskComment} onChange={changeTaskComment}/>
                    <br></br>
                    <input type="submit" value="Add task to list" onClick={addTaskToList}/>
                </form>
            </div>
            
        </div>
    )
}

export default CreateTask

/*setTaskArray(prevTaskArray => [...prevTaskArray, {taskName: taskName, taskComment: taskComment, index: props.followIndex}]) */

/*<input type="submit" value="Add task to list" onClick={addTaskToList}/>*/

/*setTaskArray(prevTaskArray => [...prevTaskArray, {taskName: taskName, taskComment: taskComment, index: taskIndex}])*/

//let [btnValue, setBtnValue] = useState("-")
    //let [toggleTask, setToggleTask] = useState(true)

    /*function displayTaskCreater(event){
        setToggleTask(!toggleTask)
        let changeClass = event.target.parentElement.querySelector("form")
        if(toggleTask === false){
            changeClass.className = 'createTask__form'
            setBtnValue("-")
        } else {
            changeClass.className ='hideTaskCreater'
            setBtnValue("+")
        }
    } */