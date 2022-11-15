import React, {useState} from "react";

//* Redux stuff
import { useDispatch } from 'react-redux'
//* import action to dispatch
import { addTodo } from "../Redux/Slices/todoSlice";



const AddTask = () => {

    const[taskContent, settaskContent] = useState('')

    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('User\'s Task content: ' + taskContent)

        //* Dispatching the action 
        dispatch(
            addTodo({
                //* Pass in the payloads (title)
                title: taskContent,
            })
        )
    }

    return (
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
                    value="Add task"
                />
            </form>
        </header>
    )
}

export default AddTask