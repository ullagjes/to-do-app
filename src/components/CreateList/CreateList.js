import {React, useState} from 'react'
import '../CreateList/CreateList.css'
import ListContainer from '../ListContainer/ListContainer'

function CreateList(){
    
    let [listNameArray, setListNameArray] = useState([]) 
    let [newListName, setNewListName] = useState("")
    let listNameCopy = [...listNameArray]
    let [listFormClass, setListFormClass] = useState('hideList')
    let [listFormHidden, setListFormHidden] = useState(false)
    
    //BOOLEAN STATE ADDS AND REMOVES CLASSNAMES, MAKING INPUT FIELD VISIBLE OR HIDDEN

    function showListForm(){
        setListFormHidden(!listFormHidden)
        if(listFormHidden === true) {
            setListFormClass('hideList')
        } else {
            setListFormClass('showList')
        }
    }
    
    //INPUT VALUES USED FOR CREATING ARRAY CONTAINING NAMES OF CREATED LISTS
    function createNewListName(event) {
        setNewListName(event.target.value)
    }

    //FUNCTION ADDS CREATED VALUE FROM INPUT FIELD TO EXISTING LISTNAMEARRAY
    function updateListNameArray(event) {
        event.preventDefault()
        let createdIndex = Math.random()*1000
        setListNameArray(previousNameArray => [...previousNameArray, {listName: newListName, index: createdIndex}])
        setNewListName("")
    }

    //FUNCTION FOR DELETING LISTS. COPIES EXISTING ARRAY, SPLICES CHOSEN OBJECT AND USES USESTATE TO UPDATE ORIGINAL ARRAY. FUNCTION IS ADDED TO CHILDCOMPONENT AS PROP
    function deleteList(index){
        listNameCopy.splice(index, 1)
        setListNameArray(listNameCopy)
    }

    //COMPONENT RETURNS SECTION CONTAINING TEXT INPUT AND CHILD COMPONENT <ListContainer /> CONTAINING CREATED ARRAY AND DELETED ARRAY AS PROP
    return( 
        <section>
            <div className="createNewList__div">
                <input type="submit" value="+" className="createNewList__btn" onClick={showListForm}/>
                <form className={listFormClass}>
                <input type="text" placeholder="Give your list a name" value={newListName} onChange={createNewListName}/>
                <input type="submit" value="Create new list" onClick={updateListNameArray} />
                </form>
            </div> 
            <ListContainer listNames={listNameCopy} handler={deleteList}/>
        </section>
    )
}

export default CreateList