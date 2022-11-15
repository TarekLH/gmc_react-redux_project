import React, {useState} from "react";
import "../Styles/Style.css"

const Task = ({id, title}) => {
    const [isChecked, setIsChecked] = useState(false);
    const [Delete, setDelete] = useState(false);

    const CheckedTask = () => {
        setIsChecked(current => !current)
    }
    const DeleteTask = () => {
        console.log("hello")
        setDelete(current => !current)
    }

    return (
        !Delete && <div key={id} className="task">
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