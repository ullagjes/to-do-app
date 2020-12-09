
import {React, useState} from 'react'
import '../TaskCard/TaskCard.css'

function TaskCard(props){
    let [boxCounter, setBoxCounter] = useState(0)

    //BOOLEAN STATE ADDS AND REMOVES CLASS TO INDICATE IF TASK IS COMPLETED. AMOUNT OF CHECKED BOXES IS ALSO COUNTED.
    function taskComplete(event){
        let changeTaskClass = event.target.parentElement.parentElement
        
        if(event.target.checked === true){ 
            changeTaskClass.className += ' taskCompleteStyle'
            setBoxCounter(boxCounter + 1) 
        } else {
            changeTaskClass.className = 'taskCard__div'
            setBoxCounter(boxCounter - 1)
        }     
    }

    //COMPONENT MAPS CREATED ARRAY PASSED DOWN AS PROPS AND CREATES NEW ELEMENTS FOR EACH OBJECT. 
    return(
        <div>
            <div className="btnAndCounter">
                <p>There are <span>{props.taskArray.length} </span> tasks on this list. You have completed <span>{boxCounter}</span> tasks in total.</p>
            </div>

            {props.taskArray.map((name, index) => {
                return <div key={name.index} className="taskCard__div">
                    <h3>{name.taskName}</h3>
                    <p>{name.taskComment}</p>
                    <input type="submit" value="Delete task" onClick={() => props.handler(index)} /><br></br>   
                    <label>Task completed
                    <input type="checkbox" name="completedTask" onClick={taskComplete}/></label>
                </div>
            })
            }
        </div>
    )
}

export default TaskCard
