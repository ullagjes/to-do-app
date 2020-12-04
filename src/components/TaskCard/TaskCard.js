import {React, useState} from 'react'

function TaskCard(props){
    
    let [completedValue, setCompletedValue] = useState('Task completed')

    function taskComplete(event){
        if(event.target.checked === true){ 
            event.target.parentElement.className = 'taskCompleteStyle'
            setCompletedValue("Re-activate task")
        } else {
            event.target.parentElement.className = 'taskNotComplete'
            setCompletedValue("Task completed")
        }     
    }
    
    return(
        <div>
            {props.taskArray.map((name, newIndex) => {
                
                return <div key={newIndex} className={name.urgencyClass}>
                    
                    <p>{name.urgency}</p>
                    <h4>{name.taskName}</h4>
                    <p>{name.taskComment}</p>

                    <label htmlFor="completedTask">{completedValue}</label>
                    <input type="checkbox" name="completedTask" onClick={taskComplete}/><br></br>
                    <input type="submit" value="Delete task" onClick={() => props.handler(newIndex)} />
                    
                </div>
            })}
        </div>
    )
}

export default TaskCard