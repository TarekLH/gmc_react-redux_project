import React from "react";
import Task from "./Task";
import { useSelector } from 'react-redux'


const ListTask = ({handleEdit, editFormLayout}) => {

    //* Picking all the todos from the store passed by redux in the state
    const todos = useSelector((state) => state.todos)

    return (
        <main>
            <section className="taskList">
                <h2>Tasks</h2> 
                <div>
                    {todos.length === 0 ? (<h1>No tasks found</h1>) : todos.map( (todo) => ( 
                            <Task 
                                id={todo.id} title={todo.title} isChecked={todo.isChecked}
                                handleEdit={handleEdit} editFormLayout={editFormLayout}
                            /> 
                        ) )
                    }
                    
                </div>
            </section>
        </main>
    )
}

export default ListTask