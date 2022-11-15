import React, {useState} from "react";



const AddTask = () => {

    const[taskContent, settaskContent] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('User\'s Task content: ' + taskContent)
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