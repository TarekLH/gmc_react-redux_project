import React from "react";
import Task from "./Task";
import { useSelector } from 'react-redux'


const ListTask = () => {

    //* Picking all the todos from the store passed by redux in the state
    const todos = useSelector((state) => state.todos)

    /*const todos = [
        { id: 1, title: 'todo1' },
		{ id: 2, title: 'todo2' },
		{ id: 3, title: 'todo3' },
		{ id: 4, title: 'todo4' },
		{ id: 5, title: 'todo5' },
    ]*/

    return (
        <main>
            <section className="taskList">
                <h2>Tasks</h2>
                <div>
                    {todos.map( (todo) => ( 
                        <Task id={todo.id} title={todo.title}/> 
                    ) )}
                </div>
            </section>
        </main>
    )
}

export default ListTask