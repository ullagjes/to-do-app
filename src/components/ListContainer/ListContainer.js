import React from 'react'
import '../ListContainer/ListContainer.css'
import CreateTask from '../CreateTask/CreateTask'

function ListContainer(props){
    //PROPS CONSIST OF ARRAY CREATED IN <CreateList />. PROPS ARE THEN MAPPED, CREATING NEW HTML-ELEMENTS CONTAINING NEW CHILD COMPONENT - <CreateTask /> - FOR EACH OBJECT IN ARRAY. 
    //DELETE FUNCTION FROM PARENT COMPONENT IS ADDED TO SUBMIT-ELEMENT.

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
