import {React, useState} from 'react'
import '../CreateList/CreateList.css'
import ListContainer from '../ListContainer/ListContainer'

function CreateList(){
    let [listNameArray, setListNameArray] = useState([]) 
    let [newListName, setNewListName] = useState()
    let listNameCopy = [...listNameArray]
    let [listFormClass, setListFormClass] = useState('hideList')
    let [listFormHidden, setListFormHidden] = useState(false)

    function showListForm(){
        setListFormHidden(!listFormHidden)
        if(listFormHidden === true) {
            setListFormClass('hideList')
        } else {
            setListFormClass('showList')
        }
    }
    function createNewListName(event) {setNewListName(event.target.value)}

    function updateListNameArray(event) {
        event.preventDefault()
        setListNameArray(previousNameArray => [...previousNameArray, {listName: newListName}])
        setNewListName()
    }

    function deleteList(index){
        listNameCopy.splice(index, 1)
        setListNameArray(listNameCopy)
    }
    return( 
        <section>
            <div className="createNewList__div">
                <input type="submit" value="+" className="createNewList__btn"onClick={showListForm}/>
                
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