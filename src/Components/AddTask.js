import React, {useState} from "react";

//* Redux stuff
import { useDispatch } from 'react-redux'
//* Import action to dispatch
import { addTodo, updateTodo, filterTodos } from "../Redux/Slices/todoSlice";



const AddTask = ({editFormLayout}) => {

    const[taskContent, settaskContent] = useState('')

    const[editedTaskContent, seteditedTaskContent] = useState('')

    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('User\'s Task content: ' + taskContent)

        //* Dispatching the action 
        dispatch(
            addTodo({
                //* Pass in the payload (title)
                title: taskContent,
            })
        )
    }

    const handleEditSubmit = (event) => {
        event.preventDefault()
        console.log('User\'s Updated Task content: ' + editedTaskContent)

        //* Dispatching the action 
        dispatch(
            updateTodo({
                //* Pass in the payload (title)
                //id: ??? //? Comment faire pour envoyer l'id ?
                title: editedTaskContent,
            })
        )
    }

    const handleFilter = () => {
        dispatch(
            filterTodos({isChecked: true})
        )
    }

    return (

        <>
        {editFormLayout === false ? (
            <header>
                <h1>JS To Do List <small>With Redux Toolkit State Management</small></h1>
                <form className="newTaskForm" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Write your task title"
                        className="newTaskInp"
                        value={taskContent}
                        onChange={(event) => settaskContent(event.target.value) }
                    
                    />
                    <input 
                        type="submit"
                        className="newTaskSubmit" 
                        value="Add Task"
                    />
                </form>
                <button onClick={handleFilter} style={{marginTop: "20px"}} className="newTaskSubmit">Checked Tasks</button>
            </header>
        ) : (
            <header>
                <h1>JS To Do List <small>With Redux Toolkit State Management</small></h1>
                <form className="newTaskForm" onSubmit={handleEditSubmit}>
                    <input 
                        type="text" 
                        placeholder="Edit your task title"
                        className="newTaskInp"
                        value={editedTaskContent}
                        onChange={(event) => seteditedTaskContent(event.target.value)}
                    />
                    <input 
                        type="submit"
                        className="newTaskSubmit" 
                        value="Update Task"
                    />
                </form>
            </header>
        )}
        
        </>


        
    )
}

export default AddTask