
import {React, useState} from 'react'
import '../TaskCard/TaskCard.css'

function TaskCard(props){
    let [boxCounter, setBoxCounter] = useState(0)

    function taskComplete(event){
        let changeTaskClass = event.target.parentElement
    
        if(event.target.checked === true){ 
            changeTaskClass.className += ' taskCompleteStyle'
            setBoxCounter(boxCounter + 1) 
        } else {
            changeTaskClass.className = 'taskCard__div'
            setBoxCounter(boxCounter - 1)
        }     
    }
    
    return(
        <div>
            <div className="btnAndCounter">
                <p>There are <span>{props.taskArray.length} </span> tasks on this list. You have completed <span>{boxCounter}</span> tasks in total.</p>
            </div>

            {props.taskArray.map((name, index) => {
                return <div key={name.index} className="taskCard__div">
                    <h4>{name.taskName}</h4>
                    <p>{name.taskComment}</p>
                    <input type="submit" value="Delete task" onClick={() => props.handler(index)} /><br></br>   
                    <label htmlFor="completedTask" >Task completed</label>
                    <input type="checkbox" name="completedTask" onClick={taskComplete}/>
                </div>
            })
            }
        </div>
    )
}

export default TaskCard

/*<div>
            {props.taskArray.map((name, newIndex) => {
                console.log(props.taskArray)
                return <div key={newIndex} className="taskCard__div">
                    
                    
                    <h4>{name.taskName}</h4>
                    <p>{name.taskComment}</p>

                    <label htmlFor="completedTask" >Task completed
                    <input type="checkbox" name="completedTask" onClick={taskComplete}/>
                    
                    </label>
                    <br></br>
                    <input type="submit" value="Delete task" onClick={() => props.handler(newIndex)} />
                    
                </div>
            })}
        </div> */