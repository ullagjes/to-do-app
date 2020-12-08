import React from 'react'
import '../ListContainer/ListContainer.css'
import CreateTask from '../CreateTask/CreateTask'

function ListContainer(props){

    return(
        <section className="listContainerStyle">
            {props.listNames.map((name, index) => {
                return <div key={name.index} className="listStyle">
                    <h2>{name.listName}</h2>
                    
                        <CreateTask />
                    
                        <input type="submit" value="Delete list" className="deleteListBtn"onClick={() => props.handler(index)}/>
                </div>
            })}
        </section>
    )
}
export default ListContainer
