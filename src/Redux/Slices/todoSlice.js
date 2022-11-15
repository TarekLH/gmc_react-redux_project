import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name : "todos",
    initialState: [
        { id: 1, title: "todo1"},
        { id: 2, title: "todo2"},
        { id: 3, title: "todo3"},
    ],
    reducers: {
        addTodo: (state, action) => {
            //* Creating our new todo based on the action payload (title)
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
            }
            state.push(newTodo) //* Push our newTodo object to the array intialState
        }
    }
})

//* Export action to dispatch in component
export const {addTodo} = todoSlice.actions

export default todoSlice.reducer