import React from "react";
import Task from "./Task";
import { useSelector } from 'react-redux'


const ListTask = () => {

    //* Picking all the todos from the store passed by redux in the state
    const todos = useSelector((state) => state.todos)

    return (
        <main>
            <section className="taskList">
                <h2>Tasks</h2> 
                <div>
                    {todos.map( (todo) => ( 
                        <Task id={todo.id} title={todo.title} isChecked={todo.isChecked}/> 
                    ) )}
                </div>
            </section>
        </main>
    )
}

export default ListTask