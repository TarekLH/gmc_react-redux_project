import React from "react";
//* Redux stuff
import { useDispatch } from "react-redux"; 
//* Import the actions
import { toggleComplete, deleteTodo } from "../Redux/Slices/todoSlice"; 

const Task = ({id, title, isChecked}) => {

    const dispatch = useDispatch()
    //* CheckedTask func in charge to toggle our action onClick 
    const CheckedTask = () => {
        dispatch(
            //* Passing the payloads to the action
            toggleComplete({id: id, isChecked: !isChecked})
        )
    }

    const DeleteTask = () => {
        dispatch(
            deleteTodo({id: id})
        )
    }

    return (
        <div key={id} className="task">
            <div className="content">
                <input 
                    style={{textDecoration: isChecked ? "line-through" : "none"}} 
                    type="text" 
                    className="text" 
                    value={title} 
                    readonly
                />
            </div>
            <div className="actions">
                <button onClick={CheckedTask} className="check">Checked</button>
                <button onClick={DeleteTask} className="delete">Delete</button>
            </div>
        </div>
    )
}

export default Task